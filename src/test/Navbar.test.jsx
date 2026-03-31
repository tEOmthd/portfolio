import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Navbar from '../components/Navbar';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

describe('Navbar', () => {
  it('affiche tous les liens de navigation', () => {
    renderWithProviders(<Navbar theme="dark" toggleTheme={vi.fn()} />);
    expect(screen.getByRole('link', { name: /projets/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /expérience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /à propos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('affiche le logo TM.', () => {
    renderWithProviders(<Navbar theme="dark" toggleTheme={vi.fn()} />);
    expect(screen.getByText('TM')).toBeInTheDocument();
  });

  it('appelle toggleTheme au clic sur le bouton de thème', async () => {
    const toggleTheme = vi.fn();
    renderWithProviders(<Navbar theme="dark" toggleTheme={toggleTheme} />);
    await userEvent.click(screen.getByLabelText(/passer en mode clair/i));
    expect(toggleTheme).toHaveBeenCalledOnce();
  });

  it('affiche l\'icône soleil en mode sombre', () => {
    renderWithProviders(<Navbar theme="dark" toggleTheme={vi.fn()} />);
    expect(screen.getByLabelText(/passer en mode clair/i)).toBeInTheDocument();
  });

  it('affiche l\'icône lune en mode clair', () => {
    renderWithProviders(<Navbar theme="light" toggleTheme={vi.fn()} />);
    expect(screen.getByLabelText(/passer en mode sombre/i)).toBeInTheDocument();
  });

  it('ouvre le menu mobile au clic sur le hamburger', async () => {
    renderWithProviders(<Navbar theme="dark" toggleTheme={vi.fn()} />);
    const menu = screen.getAllByRole('list')[0];
    expect(menu).not.toHaveClass('active');

    await userEvent.click(screen.getByLabelText(/ouvrir le menu/i));
    expect(menu).toHaveClass('active');
  });

  it('ferme le menu mobile au deuxième clic', async () => {
    renderWithProviders(<Navbar theme="dark" toggleTheme={vi.fn()} />);
    const btn = screen.getByLabelText(/ouvrir le menu/i);

    await userEvent.click(btn);
    await userEvent.click(screen.getByLabelText(/fermer le menu/i));

    expect(screen.getAllByRole('list')[0]).not.toHaveClass('active');
  });
});
