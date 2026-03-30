import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import BackToTop from '../components/BackToTop';

describe('BackToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('n\'est pas visible au chargement (scrollY = 0)', () => {
    render(<BackToTop />);
    expect(screen.queryByRole('button', { name: /retour en haut/i })).not.toBeInTheDocument();
  });

  it('apparaît quand scrollY dépasse 300px', () => {
    render(<BackToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.getByRole('button', { name: /retour en haut/i })).toBeInTheDocument();
  });

  it('disparaît si on remonte sous 300px', () => {
    render(<BackToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(screen.queryByRole('button', { name: /retour en haut/i })).not.toBeInTheDocument();
  });

  it('appelle window.scrollTo({ top: 0 }) au clic', async () => {
    render(<BackToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      window.dispatchEvent(new Event('scroll'));
    });
    await userEvent.click(screen.getByRole('button', { name: /retour en haut/i }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
