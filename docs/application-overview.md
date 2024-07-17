# 💻 Application Overview

The application consists in a set of front-end tools that the user can access and use it at free will.

## Get Started

Prerequisites:

- Node 20+
- PNPM 8+

To set up the app execute the following commands.

```bash
git clone https://github.com/k4mome/front-flow.git

cd front-flow

pnpm install

pnpm run dev
```

### Commands Summary

Here are the CLI commands that this project contains:

#### `pnpm run dev`

Starts the application in development mode.

#### `pnpm run build`

Build the application, returning the files in the `/build` folder.

#### `pnpm run start`

Starts the build provided by `pnpm run build` command in a server locally.

#### `pnpm run n:lint`

Lint the code using the rules written in `.eslintrc.json` and `.prettierrc` files.