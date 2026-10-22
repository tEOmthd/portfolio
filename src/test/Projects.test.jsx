import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LangProvider, useLang } from '../contexts/LangContext';
import Projects from '../components/Projects';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

function LangSwitch() {
  const { toggleLang } = useLang();
  return <button onClick={toggleLang}>switch</button>;
}

describe('Projects : études de cas', () => {
  it('affiche les deux études de cas', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('heading', { level: 3, name: 'NLM Production' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: "Visite virtuelle des cryptoportiques d'Arles" })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(2);
  });

  it('affiche le lien vers le site NLM Production', () => {
    renderWithProviders(<Projects />);
    const link = screen.getByRole('link', { name: /voir le site/i });
    expect(link).toHaveAttribute('href', 'https://nlmproduction.fr/');
  });

  it('affiche le libellé Ville d\'Arles sur CryptoporticusVR', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText(/Projet de la Ville d'Arles, code non public/)).toBeInTheDocument();
  });

  it('affiche le lien vers la maquette Three.js', () => {
    renderWithProviders(<Projects />);
    const link = screen.getByRole('link', { name: /voir la maquette/i });
    expect(link).toHaveAttribute('href', 'https://cryptoportique-viewer.vercel.app/');
  });

  it('affiche un emplacement vide propre tant que CryptoporticusVR n\'a pas de visuel', () => {
    renderWithProviders(<Projects />);
    const crypto = screen.getAllByRole('article')[1];
    expect(within(crypto).queryByRole('img')).not.toBeInTheDocument();
    expect(crypto.querySelector('.case-media-empty')).toHaveTextContent('CryptoporticusVR');
  });
});

describe("Projects : projets d'études", () => {
  it('affiche le gestionnaire de mots de passe avec son lien GitHub', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText('Gestionnaire de mots de passe')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Code' })).toHaveAttribute(
      'href',
      'https://github.com/tEOmthd/GestionnaireDeMotDepasse'
    );
  });

  it("n'affiche plus les projets retirés", () => {
    renderWithProviders(<Projects />);
    expect(screen.queryByText(/Memory Matching Game/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fitness API/)).not.toBeInTheDocument();
  });
});

describe('Projects : anglais', () => {
  it('affiche les textes en anglais après changement de langue', async () => {
    renderWithProviders(<><LangSwitch /><Projects /></>);
    await userEvent.click(screen.getByRole('button', { name: 'switch' }));
    expect(screen.getByRole('heading', { level: 3, name: 'Virtual tour of the Arles cryptoporticus' })).toBeInTheDocument();
    expect(screen.getByText('Student projects')).toBeInTheDocument();
  });
});
