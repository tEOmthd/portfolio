import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Hero from '../components/Hero';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

describe('Hero', () => {
  it('affiche le nom complet dans le titre h1', () => {
    renderWithProviders(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Téo');
    expect(heading).toHaveTextContent('Mathiaud');
  });

  it('affiche le label de présentation', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('// Développeur Fullstack')).toBeInTheDocument();
  });

  it('affiche le tagline', () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText('Je construis des choses complètes.')).toBeInTheDocument();
  });

  it('affiche le lien vers les projets', () => {
    renderWithProviders(<Hero />);
    const link = screen.getByRole('link', { name: /voir mes projets/i });
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('affiche le lien CV qui ouvre dans un nouvel onglet', () => {
    renderWithProviders(<Hero />);
    const link = screen.getByRole('link', { name: /cv/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
