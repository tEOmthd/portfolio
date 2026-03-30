import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Hero from '../components/Hero';

// Three.js nécessite WebGL, indisponible dans jsdom — on le mock
vi.mock('three', () => {
  const canvas = document.createElement('canvas');

  function WebGLRenderer() {
    this.domElement = canvas;
    this.setPixelRatio = vi.fn();
    this.setSize = vi.fn();
    this.setClearColor = vi.fn();
    this.render = vi.fn();
    this.dispose = vi.fn();
  }

  function Scene() {
    this.add = vi.fn();
    this.remove = vi.fn();
  }

  function PerspectiveCamera() {
    this.position = { x: 0, y: 0, z: 0 };
    this.aspect = 1;
    this.updateProjectionMatrix = vi.fn();
  }

  function BufferGeometry() {
    this.setAttribute = vi.fn();
    this.dispose = vi.fn();
    this.attributes = { position: { needsUpdate: false } };
  }

  function PointsMaterial() { this.dispose = vi.fn(); }
  function LineBasicMaterial() { this.dispose = vi.fn(); }
  function Points() {}
  function LineSegments() { this.geometry = { dispose: vi.fn() }; }
  function BufferAttribute() {}

  return { WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute, Points, PointsMaterial, LineBasicMaterial, LineSegments };
});

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('Hero', () => {
  it('affiche le nom complet', () => {
    render(<Hero />);
    expect(screen.getByText('Téo Mathiaud')).toBeInTheDocument();
  });

  it('affiche le premier rôle par défaut', () => {
    render(<Hero />);
    expect(screen.getByText('Développeur Fullstack')).toBeInTheDocument();
  });

  it('affiche le lien vers les projets', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /voir mes projets/i });
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('affiche le lien CV qui ouvre dans un nouvel onglet', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /cv/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('change le rôle affiché après 3 secondes', () => {
    render(<Hero />);
    expect(screen.getByText('Développeur Fullstack')).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(3400));

    expect(screen.getByText('Étudiant BUT Informatique')).toBeInTheDocument();
  });

  it('cycle complet des rôles', () => {
    render(<Hero />);
    const roles = [
      'Développeur Fullstack',
      'Étudiant BUT Informatique',
      'React · Laravel · Java · C++',
    ];

    roles.forEach((role, i) => {
      act(() => vi.advanceTimersByTime(i === 0 ? 0 : 3400));
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });
});
