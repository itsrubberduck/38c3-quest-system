# 38c3-quest-system

An interactive quest system for 38C3 - create and explore alternative storylines through Congress. Built with Nuxt 3, Tailwind CSS.

## Features

- 🎭 Multiple branching storylines
- ⚡ Quick play format (perfect for escalator rides)
- 🤝 Community-driven content
- 🔧 Easy to extend through JSON stories
- 🌐 Internationalization support

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Contributing Quests

### Quest Format

Quests are defined in JSON in the `quests/` directory:

```json
{
  "meta": {
    "id": "your-quest-id",
    "title": "Your Quest Title",
    "author": "Your Handle",
    "description": "Short quest description",
    "tags": ["hardware", "networking", "crypto", "etc"],
    "language": "en",
    "version": "1.0.0"
  },
  "story": {
    "firstStep": "entry",
    "steps": [
      {
        "id": "entry",
        "title": "The Beginning",
        "description": "Situation description",
        "image": "entry.png",
        "choices": [
          {
            "id": "choice1",
            "text": "What one can do",
            "nextStep": "next-step-id",
            "outcomes": ["outcome1", "outcome2"]
          }
        ]
      }
    ],
    "outcomes": {
      "outcome1": {
        "title": "Outcome Title",
        "description": "What happened...",
        "image": "outcome1.png"
      }
    }
  }
}
```

### Quest Guidelines

- 🎯 5-8 decision points (optimized for escalator play time)
- 🎭 Should fit the congress vibe
- 🔧 Tech humor welcome
- 🌐 Multiple language support appreciated
- 🎨 Images should follow the wireframe style guide

## Development

The project uses:
- [Nuxt 3](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Pinia](https://pinia.vuejs.org) for state management
- [TypeScript](https://www.typescriptlang.org)

## Links

- [Live Demo](https://ccc-quest-system.netlify.app)
- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Deployment Documentation](https://nuxt.com/docs/getting-started/deployment)
