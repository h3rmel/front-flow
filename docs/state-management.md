# 🗃️ State Management

There is no need to keep all of your state in a single centralized store. There are different needs for different types of state that can be split into several types:

## Component State

The state that only a component needs, and it is not meant to be shared anywhere else. But you can pass it as prop to children components if needed. Most of the time, you want to start from here and lift the state up if needed elsewhere. For this type of state, you will usually need:

The state that only a component needs and it is not meant to be shared anywhere else. Most of the time you'll start here and lift the state up if needed.

For this type of state(s), yo will usually use in this app the [useState](https://react.dev/reference/react/useState), he serves for simpler states that are independent. But if you need something more complex, you can use [useReducer](https://react.dev/reference/react/useReducer).

## Application State

The state that controls interactive parts of the application, like opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. For this project, you'll normally use:

- [Context](https://react.dev/learn/passing-data-deeply-with-context) + [Hooks](https://react.dev/reference/react-dom/hooks)

## Form State

This is the state that tracks users input in a form.

Here we use the [React Hook Form](https://react-hook-form.com/) (Form Handling) alongside the [Zod](https://zod.dev/) (Validation).

If you want, you can see and example of use here in [this code](/src/features/colors-converter/components/colors-form.tsx).
