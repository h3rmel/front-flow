# 🗄️ Project Structure

The project code looks like this:

```bash
.
|
+-- .husky          # Git Hooks & Commit Lint configurations
|
+-- .vscode         # Some VSCode enforce settings
|
+-- docs            # The project's documentation
|
+-- src             # The project's codebase
    |
    +-- app         # The App Router from NextJS
    |
    +-- data        # Data application (JSON, CSV files, etc.)
    |
    +-- features    # Features of the project separate by folders
    |
    +-- lib         # Internal/External Libraries preconfiguration
    |
    +-- types       # Base types used across the application
    |
    +-- ui          # All user interface code related (React components)
    |
    +-- utils       # Utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `feature` folder, which should contain different feature-based things. Every 'feature folder' should contain domain specific code for a given feature. This will allow you to keep the functionalities scoped to a feature and not mix its declarations with shared things.

A feature could have the following structure:

```bash
src/feature/colors-converter
|
+-- components        # Components scoped to the feature
|
+-- hooks             # Hooks scoped to the feature
|
+-- types             # Types scoped to the feature
|
+-- utils             # Utils scoped to the feature
|
+-- index.ts          # Entry point of the feature
|
+-- interface.tsx     # The interface of the feature (works for the `page.tsx` component of the route)
|
+-- skeleton.tsx      # The skeleton interface of the feature (works for the `loading.tsx` component of the route)
```

In this case, you use the `index.ts` to export the `interface.tsx` and what it is necessary to run the feature. (like providers and etc.) 

With this, you should import stuff from other features only by using:

```tsx
import { ColorsConverterInterface } from '@/features/colors-converter';
```

and not

```tsx
import { ColorsConverterInterface } from '@/features/colors-converter/interface.tsx';
```

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

````js
{
  rules: {}
  'no-restricted-imports': [
    'error',
    {
      patterns: ['@/features/*/*']
    }
  ],
  // ...Rest of the applications rules
}
```
````
