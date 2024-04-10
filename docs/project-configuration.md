# ⚙️ Project Configuration

The application has been bootstraped using the command `npx create-next-app@latest` which is the main way to create a NextJS application without dealing with a complex tooling setup such as bundling, transpiling and etc.

The technologies used and configured in this project are:

### TypeScript

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static types to JavaScript, which can help catch common programming mistakes and improve code quality. TypeScript offers advanced features such as type inference, interfaces, generics, and more. It is widely used in modern web development to enhance productivity and maintainability.

For more information, you can refer to the [TypeScript documentation](https://www.typescriptlang.org/docs).

### ESLint

ESLint is a popular JavaScript linter that helps identify and fix common coding errors and enforce consistent code style. It provides a wide range of configurable rules and supports plugins to extend its functionality. ESLint can be integrated into the development workflow to automatically analyze code and provide feedback on potential issues. It is highly customizable and widely adopted in modern JavaScript projects.

For more information, you can refer to the [ESLint documentation](https://eslint.org/docs).

### Prettier

Prettier is a code formatter that helps maintain consistent code style across a project. It automatically formats code based on a set of predefined rules, ensuring that all team members follow the same formatting conventions. Prettier supports various programming languages, including JavaScript, TypeScript, CSS, HTML, and more. It can be integrated into the development workflow to format code automatically on save or as part of a build process.

For more information, you can refer to the [Prettier documentation](https://prettier.io/docs).

### NextJS

NextJS is a popular React framework for building server-side rendered (SSR) and static websites. It provides a powerful development experience with features like automatic code splitting, server-side rendering, and static site generation. NextJS also offers built-in routing, API routes, and support for TypeScript. It simplifies the development process by handling complex tasks such as bundling and transpiling, allowing developers to focus on building their applications.

For more information, you can refer to the [NextJS documentation](https://nextjs.org/docs).

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to rapidly build user interfaces. It promotes a functional and responsive design approach by offering a wide range of utility classes for common CSS properties. Tailwind CSS allows developers to quickly prototype and customize their designs without writing custom CSS. It is highly configurable and can be extended with plugins.

For more information, you can refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs).

##### Shadcn/ui

Shadcn/ui is a component library built on top of Tailwind CSS. It provides a collection of reusable UI components that follow the design principles of Tailwind CSS. Shadcn/ui simplifies the process of building user interfaces by offering ready-to-use components such as buttons, forms, modals, and more. It is highly customizable and can be easily integrated into any Tailwind CSS project.

For more information, you can refer to the [Shadcn/ui documentation](https://shadcn/ui/docs).

#### Absolute Imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as `../../../Component`. Wherever you move the file, all the imports will remain intact. Here is how to configure it:

For JavaScript (`jsconfig.json`) projects:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

For TypeScript (`tsconfig.json`) projects

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```
