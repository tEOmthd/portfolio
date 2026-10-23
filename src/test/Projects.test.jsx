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

  it('affiche un bouton visible vers la maquette 3D', () => {
    renderWithProviders(<Projects />);
    const link = screen.getByRole('link', { name: /ouvrir la maquette 3d/i });
    expect(link).toHaveAttribute('href', 'https://cryptoportique-viewer.vercel.app/');
    expect(link).toHaveClass('btn');
  });

  it('utilise la maquette 3D comme visuel de CryptoporticusVR, sans cadre vide', () => {
    renderWithProviders(<Projects />);
    const crypto = screen.getAllByRole('article')[1];
    expect(within(crypto).getByRole('img', { name: /vue 3d des cryptoportiques/i })).toBeInTheDocument();
    expect(within(crypto).getByRole('button', { name: /explorer en 3d/i })).toBeInTheDocument();
    expect(crypto.querySelector('.case-media-empty')).toBeNull();
  });

  it('affiche les trois repères et les détails techniques repliés', () => {
    renderWithProviders(<Projects />);
    const crypto = screen.getAllByRole('article')[1];
    expect(within(crypto).getByText('PC + Meta Quest 3 / 3S')).toBeInTheDocument();
    expect(crypto.querySelectorAll('.case-highlights li')).toHaveLength(3);
    const details = crypto.querySelector('details');
    expect(details).not.toHaveAttribute('open');
    expect(within(details).getByText('Détails techniques')).toBeInTheDocument();
  });
});

describe('Projects : autres projets', () => {
  it('affiche une carte pour le gestionnaire de mots de passe, avec sa capture et son code', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('heading', { level: 3, name: 'Autres projets' })).toBeInTheDocument();
    const card = screen.getByRole('heading', { level: 4, name: 'Gestionnaire de mots de passe' }).closest('li');
    expect(within(card).getByRole('img')).toHaveAttribute('src', '/portfolio/assets/projet/CaptureGestionnaireMotDePasse.png');
    expect(within(card).getByText(/chiffrement AES/)).toBeInTheDocument();
    expect(within(card).getByRole('link', { name: /code/i })).toHaveAttribute(
      'href',
      'https://github.com/tEOmthd/GestionnaireDeMotDepasse'
    );
  });

  it('affiche le lien vers tout le code sur GitHub', () => {
    renderWithProviders(<Projects />);
    expect(screen.getByRole('link', { name: /tout mon code sur github/i })).toHaveAttribute(
      'href',
      'https://github.com/tEOmthd'
    );
  });

  it("n'affiche plus le bloc Projets d'études ni les projets retirés", () => {
    renderWithProviders(<Projects />);
    expect(screen.queryByText("Projets d'études")).not.toBeInTheDocument();
    expect(screen.queryByText(/Memory Matching Game/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fitness API/)).not.toBeInTheDocument();
  });
});

describe('Projects : textes NLM validés', () => {
  it('affiche les repères et le résultat NLM en français puis en anglais', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <>
        <LangSwitch />
        <Projects />
      </>
    );
    const nlm = () => screen.getAllByRole('article')[0];
    const repèresFr = [...nlm().querySelectorAll('.case-highlights li')].map((li) => li.textContent);
    expect(repèresFr).toEqual([
      'Projet client, en production',
      'Front React, back Strapi en TypeScript',
      'Hébergé et maintenu par moi',
    ]);
    expect(
      within(nlm()).getByText('Le site est en ligne et la cliente publie ses photos et ses vidéos sans passer par moi.')
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'switch' }));
    const repèresEn = [...nlm().querySelectorAll('.case-highlights li')].map((li) => li.textContent);
    expect(repèresEn).toEqual([
      'Client project, in production',
      'React front end, Strapi back end in TypeScript',
      'Hosted and maintained by me',
    ]);
    expect(
      within(nlm()).getByText('The site is live and the client publishes her photos and videos without going through me.')
    ).toBeInTheDocument();
    expect(
      within(nlm()).getByText(
        'I designed the site with the client, then built it: a React front end and a Strapi back end in TypeScript, where she manages her photos and videos. I set up hosting and automatic deployment.'
      )
    ).toBeInTheDocument();
  });
});

describe('Projects : capture NLM', () => {
  it('utilise la capture pleine page qui défile au survol', () => {
    renderWithProviders(<Projects />);
    const img = screen.getByRole('img', { name: /NLM Production, en entier/ });
    expect(img).toHaveAttribute('src', '/portfolio/assets/projet/nlm-pleine-page.jpg');
    expect(img.parentElement).toHaveClass('case-media', 'is-scroll');
  });
});

describe('Projects : anglais', () => {
  it('affiche les textes en anglais après changement de langue', async () => {
    renderWithProviders(<><LangSwitch /><Projects /></>);
    await userEvent.click(screen.getByRole('button', { name: 'switch' }));
    expect(screen.getByRole('heading', { level: 3, name: 'Virtual tour of the Arles cryptoporticus' })).toBeInTheDocument();
    expect(screen.getByText('Other projects')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /all my code on github/i })).toBeInTheDocument();
  });
});
