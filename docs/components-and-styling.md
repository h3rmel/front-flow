# 🧱 Components And Styling

## Naming

The project has the following naming definitions for the codebase:

- `kebab-case`: Used for the files in general.
- `PascalCase`: Used for components in general, also interfaces and types.
- `camelCase`: Used for variables, functions and hooks.
- `SCREAMING_SNAKE_CASE`: Used for constants and static data.

## Components

The React components have some rules to be followed when developing in this project:

### Code Organization

The code needs to be organized in this way:

```tsx
// 1. Imports
import * as React from "react";

// 1.1. Interface & Types
interface IPost { ... }
type PostInfo = { ... }

// 1.2. Constants
const DATA = [...]

// 2. Component
export function Component({ ... }: { ... }): JSX.Element {
  // 3. States (useStates, useMemos, constants, etc.)
  const [post, setPost] = useState<IPost>({} as IPost);

  // 3.1. Hooks
  const { translate } = useLanguage();

  // 3.2. Handlers
  function handleChange() {}
  function onSubmit() {}

  // 3.3 Getters
  function getPost() {}

  // 3.4 Renders
  function renderAvailablePosts() {}

  // 3.5 Others
  function doSomething() {}

  // 3.6 Effects
  useEffect(() => {}, []);

  // 3.7 Return
  return (
    <main>
      ...
    </main>
  );
}
```

**Note**: This need to be and will be reviewd and every single PR.

### Formatting

The code formatting is controlled by the Prettier and ESLint, so just use them before commiting any changes.

To run them, use the `npm|yarn|pnpm run lint`.

## Regions

In this codebase we use the directive `#regions`, they serve to group code blocks, improving the organization and legibility of the code.

Let's see an example of this directive:

```ts
// #region Validation Methods

function validateNameSize(name: string): boolean {
  return name.length > 3;
}

function validateEmail(email: string): boolean {
  return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}

// #endregion
```

### Rules to use `#regions`

You need to consider and follow this set of rules when applying `#regions` to your code:

1. Context: All the grouped code needs to be in the same context, example: All validation methods, all event handling methods, etc.
2. Number of Things: You need to have a good amount of things to group in a `#region`, for me, I use the following rule: If it's more than 2, needs a `#region`.
3. Things to group: You will normally use it to group functions, constants, states and variables.

You can see some examples of `#region` use in [this file](/src/features/colors-converter/components/colors-form.tsx).

## Styling

This project is styled with 2 technologies that work alongside each other:

1. [TailwindCSS](https://tailwindcss.com/)
2. [Shadcn/ui](https://ui.shadcn.com/)

Note: Shadcn/ui consists in a component library created on top of [Radix UI](https://www.radix-ui.com/) and Tailwind CSS.
