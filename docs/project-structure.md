# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```bash
src
|
+-- _data             # Data application (JSON, CSV files, etc.)
|
+-- _langauges        # Internationalization (i18n)
|
+-- app               # The App Router from NextJS
|
+-- lib               # Different Libraries preconfiguration
|
+-- types             # Base types used across the application
|
+-- ui                # All user interface code related (React components)
|
+-- utils             # Utility functions
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
```

In this case, you use the `index.ts` to export all its content to make it more organized to import and use it.

With this, you should import stuff from other features only by using:

```tsx
import { ColorsButton } from '@/features/colors-converter';
```

and ont

```tsx
import { ColorsButton } from '@/features/colors-converter/components/colors-button.tsx';
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
