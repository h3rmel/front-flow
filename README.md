# Atelier

It's a set of front-end tools that aims to help developers create interfaces with more ease and simplicity in their daily lives.

## Running the app

To run the app, you need to execute the following commands:

```bash
# Clone the repository
https://github.com/K4mome/atelier.git

# Install the packages
npm install

# Run the front-end on dev
npm run dev
```

If you don't run on any issues, you will see a message like this:

```bash
VITE v5.1.6  ready in 118 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Folder Structure 🗄️

```md
.
├── .vscode
├── public
└── src
    ├── _data
    ├── _languages
    ├── features
    │   └── ...
    ├── layouts
    ├── lib
    ├── pages
    ├── types
    ├── ui
    │   ├── components
    │   └── ...
    ├── app.tsx
    └── main.tsx
```

## Tech Stack 🛠️

- React
- React Router DOM
- React-hook-form
  - Zod
- Phosphor Icons
- TypeScript
- TailwindCSS
  - Shadcn/UI
  - Postcss
  - Autoprefixer
- ESLint
- Prettier
- ViteJS