import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Maquette3D from '../components/Maquette3D';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

function mockMobile(isMobile) {
  vi.spyOn(window, 'matchMedia').mockImplementation(query => ({
    matches: isMobile,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Maquette3D : desktop', () => {
  it("affiche l'image fixe sans charger l'iframe", () => {
    mockMobile(false);
    renderWithProviders(<Maquette3D />);
    expect(screen.getByRole('img', { name: /vue 3d des cryptoportiques/i })).toBeInTheDocument();
    expect(document.querySelector('iframe')).toBeNull();
  });

  it("charge l'iframe en mode intégration au clic sur Explorer en 3D", async () => {
    mockMobile(false);
    renderWithProviders(<Maquette3D />);
    await userEvent.click(screen.getByRole('button', { name: /explorer en 3d/i }));
    const iframe = document.querySelector('iframe');
    expect(iframe).toHaveAttribute('src', 'https://cryptoportique-viewer.vercel.app/?embed=1');
    expect(iframe).toHaveAttribute('title', "Maquette 3D des cryptoportiques d'Arles");
  });

  it('affiche la légende seulement si elle est demandée', () => {
    mockMobile(false);
    const { unmount } = renderWithProviders(<Maquette3D caption />);
    expect(screen.getByText(/que j'ai développée en Three\.js/)).toBeInTheDocument();
    unmount();
    renderWithProviders(<Maquette3D view="medievale" />);
    expect(screen.queryByText(/que j'ai développée en Three\.js/)).not.toBeInTheDocument();
  });
});

describe('Maquette3D : mobile', () => {
  it("propose un lien dans un nouvel onglet au lieu de l'iframe", () => {
    mockMobile(true);
    renderWithProviders(<Maquette3D />);
    const link = screen.getByRole('link', { name: /ouvrir la maquette 3d/i });
    expect(link).toHaveAttribute('href', 'https://cryptoportique-viewer.vercel.app/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.queryByRole('button', { name: /explorer en 3d/i })).not.toBeInTheDocument();
    expect(document.querySelector('iframe')).toBeNull();
  });
});
