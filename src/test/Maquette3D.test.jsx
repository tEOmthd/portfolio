import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { LangProvider } from '../contexts/LangContext';
import Maquette3D from '../components/Maquette3D';

function renderWithProviders(ui) {
  return render(<LangProvider>{ui}</LangProvider>);
}

// desktop : écran d'au moins 1024 px ; reducedMotion : prefers-reduced-motion
function mockMedia({ desktop, reducedMotion = false }) {
  vi.spyOn(window, 'matchMedia').mockImplementation(query => ({
    matches: query.includes('min-width: 1024px') ? desktop : query.includes('reduced-motion') ? reducedMotion : false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

const mockMobile = isMobile => mockMedia({ desktop: !isMobile });

// le navigateur est libre tout de suite
function mockIdle() {
  window.requestIdleCallback = callback => {
    callback();
    return 1;
  };
  window.cancelIdleCallback = () => {};
}

const tick = () => new Promise(resolve => setTimeout(resolve, 50));

afterEach(() => {
  vi.restoreAllMocks();
  delete window.requestIdleCallback;
  delete window.cancelIdleCallback;
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

describe('Maquette3D : hero vivant', () => {
  it('charge seule la maquette en rotation, sans interaction avant le clic', async () => {
    mockMedia({ desktop: true });
    mockIdle();
    renderWithProviders(<Maquette3D live />);
    const iframe = await waitFor(() => {
      const el = document.querySelector('iframe');
      expect(el).not.toBeNull();
      return el;
    });
    expect(iframe).toHaveAttribute('src', 'https://cryptoportique-viewer.vercel.app/?embed=1&autorotate=1');
    expect(iframe).toHaveAttribute('tabindex', '-1');
    expect(iframe.closest('.maquette-frame')).not.toHaveClass('is-interactive');

    await userEvent.click(screen.getByRole('button', { name: /explorer en 3d/i }));
    expect(iframe.closest('.maquette-frame')).toHaveClass('is-interactive');
    expect(iframe).not.toHaveAttribute('tabindex');
    expect(document.querySelectorAll('iframe')).toHaveLength(1);
  });

  it("n'affiche la maquette en rotation qu'une fois la scène prête", async () => {
    mockMedia({ desktop: true });
    mockIdle();
    renderWithProviders(<Maquette3D live />);
    const iframe = await waitFor(() => {
      const el = document.querySelector('iframe');
      expect(el).not.toBeNull();
      return el;
    });
    fireEvent.load(iframe);
    expect(iframe).not.toHaveClass('is-ready');

    act(() => {
      window.dispatchEvent(new MessageEvent('message', {
        origin: 'https://cryptoportique-viewer.vercel.app',
        data: { type: 'cryptoportique:ready' },
      }));
    });
    expect(iframe).toHaveClass('is-ready');
  });

  it('ne charge rien tout seul avec prefers-reduced-motion', async () => {
    mockMedia({ desktop: true, reducedMotion: true });
    mockIdle();
    renderWithProviders(<Maquette3D live />);
    await tick();
    expect(document.querySelector('iframe')).toBeNull();
  });

  it('ne charge rien tout seul sans le mode live', async () => {
    mockMedia({ desktop: true });
    mockIdle();
    renderWithProviders(<Maquette3D />);
    await tick();
    expect(document.querySelector('iframe')).toBeNull();
  });
});

describe('Maquette3D : mobile et tablette', () => {
  it("propose un lien dans un nouvel onglet au lieu de l'iframe", () => {
    mockMobile(true);
    mockIdle();
    renderWithProviders(<Maquette3D live />);
    const link = screen.getByRole('link', { name: /ouvrir la maquette 3d/i });
    expect(link).toHaveAttribute('href', 'https://cryptoportique-viewer.vercel.app/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.queryByRole('button', { name: /explorer en 3d/i })).not.toBeInTheDocument();
    expect(document.querySelector('iframe')).toBeNull();
  });
});
