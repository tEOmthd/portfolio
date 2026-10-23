import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import SectionNav from '../components/SectionNav';

function mockWidth(width) {
  vi.spyOn(window, 'matchMedia').mockImplementation(query => ({
    matches: query.includes('min-width: 1280px') ? width >= 1280 : false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

// contentLeft : début du contenu ; la colonne s'étend de 0 à 130 px
function mockLayout(contentLeft) {
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function () {
    const left = this.classList.contains('container') ? contentLeft - 28 : 0;
    const right = this.classList.contains('section-nav') ? 130 : left;
    return { left, right, top: 0, bottom: 0, width: right - left, height: 0, x: left, y: 0 };
  });
}

function renderPage(active, onFitChange = vi.fn()) {
  return render(
    <LangProvider>
      <section id="projects"><div className="container" style={{ paddingLeft: '28px' }} /></section>
      <SectionNav active={active} onFitChange={onFitChange} />
    </LangProvider>
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('SectionNav', () => {
  it("s'affiche après le hero quand il y a la place, avec la section active", () => {
    mockWidth(1536);
    mockLayout(246);
    const onFitChange = vi.fn();
    renderPage('about', onFitChange);
    const nav = screen.getByRole('navigation', { name: 'Sections de la page' });
    expect(nav).toHaveClass('is-shown');
    expect(screen.getByRole('link', { name: /à propos/i })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: /projets/i })).toHaveAttribute('href', '#projects');
    expect(onFitChange).toHaveBeenLastCalledWith(true);
  });

  it('reste cachée pendant le hero', () => {
    mockWidth(1536);
    mockLayout(246);
    const { container } = renderPage('hero');
    expect(container.querySelector('.section-nav')).not.toHaveClass('is-shown');
  });

  it('reste cachée si elle chevauche le contenu', () => {
    mockWidth(1280);
    mockLayout(118);
    const onFitChange = vi.fn();
    const { container } = renderPage('projects', onFitChange);
    expect(container.querySelector('.section-nav')).not.toHaveClass('is-shown');
    expect(onFitChange).toHaveBeenLastCalledWith(false);
  });

  it("n'existe pas sous 1280 px", () => {
    mockWidth(1100);
    const { container } = renderPage('projects');
    expect(container.querySelector('.section-nav')).toBeNull();
  });
});
