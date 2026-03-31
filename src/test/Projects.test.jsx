import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Projects from '../components/Projects';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

describe('Projects — affichage', () => {
  it('affiche le projet phare (featured) dans un h3', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('heading', { level: 3, name: 'CryptoporticusVR' })).toBeInTheDocument();
  });

  it('affiche les 4 projets en grille', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('heading', { level: 3, name: 'Memory Matching Game' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Gestionnaire de Mots de Passe' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Fitness API' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Jeu de Gestion Ferroviaire' })).toBeInTheDocument();
  });

  it('affiche 5 titres de projets au total (1 featured + 4 en grille)', () => {
    renderWithProviders(<Projects />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
  });
});

describe('Projects — modal', () => {
  it('ouvre le modal au clic sur une carte', async () => {
    renderWithProviders(<Projects />);
    await userEvent.click(screen.getByRole('heading', { level: 3, name: 'Memory Matching Game' }));
    expect(screen.getByRole('button', { name: /fermer/i })).toBeInTheDocument();
  });

  it('le modal affiche le titre du projet', async () => {
    renderWithProviders(<Projects />);
    await userEvent.click(screen.getByRole('heading', { level: 3, name: 'Memory Matching Game' }));
    const overlay = document.querySelector('.modal-overlay');
    expect(within(overlay).getByRole('heading', { level: 2 })).toHaveTextContent('Memory Matching Game');
  });

  it('ferme le modal avec le bouton close', async () => {
    renderWithProviders(<Projects />);
    await userEvent.click(screen.getByRole('heading', { level: 3, name: 'Memory Matching Game' }));
    await userEvent.click(screen.getByRole('button', { name: /fermer/i }));
    expect(screen.queryByRole('button', { name: /fermer/i })).not.toBeInTheDocument();
  });

  it('ferme le modal avec la touche Escape', async () => {
    renderWithProviders(<Projects />);
    await userEvent.click(screen.getByRole('heading', { level: 3, name: 'Memory Matching Game' }));
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('button', { name: /fermer/i })).not.toBeInTheDocument();
  });
});
