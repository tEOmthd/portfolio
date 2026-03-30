import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../components/Skills';

describe('Skills', () => {
  it('affiche 17 compétences', () => {
    render(<Skills />);
    expect(screen.getAllByRole('img')).toHaveLength(17);
  });

  it('chaque image a un attribut alt non vide', () => {
    render(<Skills />);
    screen.getAllByRole('img').forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('affiche React dans les compétences', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('affiche Java dans les compétences', () => {
    render(<Skills />);
    expect(screen.getByText('Java')).toBeInTheDocument();
  });
});
