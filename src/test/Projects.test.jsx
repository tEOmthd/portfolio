import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Projects from '../components/Projects';

describe('Projects — filtres', () => {
  it('affiche les 4 projets par défaut', () => {
    render(<Projects />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });

  it('filtre les projets C++ (2 projets attendus)', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByRole('button', { name: 'C++' }));
    const cards = screen.getAllByRole('heading', { level: 3 });
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Jeu de Gestion Ferroviaire')).toBeInTheDocument();
    expect(screen.getByText('Gestion des Plaques d\'Immatriculation')).toBeInTheDocument();
  });

  it('filtre les projets JavaScript (1 projet attendu)', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByRole('button', { name: 'JavaScript' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getByText('Memory Matching Game')).toBeInTheDocument();
  });

  it('filtre les projets Java (1 projet attendu)', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByRole('button', { name: 'Java' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getByText('Gestionnaire de Mots de Passe')).toBeInTheDocument();
  });

  it('réaffiche tous les projets après "Tous"', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByRole('button', { name: 'C++' }));
    await userEvent.click(screen.getByRole('button', { name: 'Tous' }));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });
});

describe('Projects — modal', () => {
  it('ouvre le modal au clic sur une carte', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByText('Memory Matching Game'));
    expect(screen.getByRole('button', { name: /fermer/i })).toBeInTheDocument();
  });

  it('le modal affiche le titre du projet', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByText('Memory Matching Game'));
    const modal = screen.getByRole('button', { name: /fermer/i }).closest('.project-modal');
    expect(within(modal).getByRole('heading', { level: 2 })).toHaveTextContent('Memory Matching Game');
  });

  it('ferme le modal avec le bouton close', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByText('Memory Matching Game'));
    await userEvent.click(screen.getByRole('button', { name: /fermer/i }));
    expect(screen.queryByRole('button', { name: /fermer/i })).not.toBeInTheDocument();
  });

  it('ferme le modal avec la touche Escape', async () => {
    render(<Projects />);
    await userEvent.click(screen.getByText('Memory Matching Game'));
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('button', { name: /fermer/i })).not.toBeInTheDocument();
  });
});
