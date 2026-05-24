# FORM ATELIER Design System

## Principles

- Editorial hierarchy before decoration.
- Large typography, generous whitespace, restrained motion.
- Functional controls remain quiet, clear and tactile.
- Components should be data-driven and reusable across future services, resources and case studies.

## Tokens

- `paper`, `ink`, `graphite`, `mist`, `line`, `moss`, `clay`, `steel`.
- Radius: 0 to 8px for core UI.
- Motion: opacity, y-axis reveals, small scale changes and parallax only where they support reading.

## Components

- `Button`: primary, secondary and ghost actions.
- `Section`: consistent editorial spacing and optional numbered eyebrow.
- `Reveal`: reusable Framer Motion entrance primitive.
- `ProjectCard`: immersive case study preview.
- `ContactForm`: conversion-focused lead form.
- `MDXComponents`: reusable project body blocks, image grids, quotes and statistics.

## Content Model

Case studies are MDX documents in `content/projects`. Frontmatter controls listing data, SEO-ready metadata, services, technologies and statistics. MDX body controls the reusable project storytelling blocks.
