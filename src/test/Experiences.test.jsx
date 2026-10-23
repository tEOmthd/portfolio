import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Experiences from '../components/Experiences';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

describe('Experiences', () => {
  it('affiche les stages et les formations', () => {
    renderWithProviders(<Experiences />);
    expect(screen.getByRole('heading', { level: 4, name: /CryptoporticusVR/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: /Harsco Environmental/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: /Master ILSEN/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: /BUT Informatique/ })).toBeInTheDocument();
  });

  it("résume CryptoporticusVR en une ligne avec un lien vers l'étude de cas", () => {
    renderWithProviders(<Experiences />);
    expect(screen.getByText(/Seul développeur et Product Owner\./)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /voir l'étude de cas/i })).toHaveAttribute('href', '#case-crypto');
    expect(screen.queryByText(/builds Windows, Quest et WebGL/)).not.toBeInTheDocument();
  });

  it('regroupe les certifications Anthropic sur une ligne', () => {
    renderWithProviders(<Experiences />);
    expect(screen.getByRole('link', { name: 'Claude Code 101' })).toHaveAttribute('href', 'https://verify.skilljar.com/c/x4y7q3xrwygj');
  });
});
