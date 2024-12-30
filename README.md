# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Task 6

Q 6: How can you verify the action has been dispatched?
Ans: To verify that an action has been dispatched in a React-Redux application,
     Using Redux DevTools and Redux DevTools is a powerful browser extension that allows you to inspect the Redux store and see all the actions that have been dispatched along with the 
    state changes. After dispatching an action, you can view the action and the resulting state update in the DevTools panel.
    
Q 7: Explain the use of useEffect hook in React?
Ans: The useEffect hook in React is used to perform side effects in functional components. It allows you to run code after the component has rendered, such as fetching data, updating the 
     DOM, or subscribing to external events. It can be thought of as the replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class 
     components.

Q 8: What is a High Order Component (HOC)?
Ans:  A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior. HOCs are used for code reuse and composition.

Q 9: What use cases would a HOC be useful?
Ans:  HOCs are useful for Code reuse Encapsulate common logic or behavior across multiple components (e.g., authentication, logging, data fetching).
Modifying props You can inject additional props into a component, such as user data or configuration settings.
Conditional rendering Wrap a component to conditionally render based on certain conditions (e.g., loading states, access control).
Enhancing component functionality Adding lifecycle methods or managing state for a component.

Q 10: What does it indicate when a component is prefixed with use?
Ans: When a component or function is prefixed with use, it generally indicates that it is a custom hook. React's hooks, such as useState or useEffect, are used to manage state and side effects in functional components. By convention, custom hooks also start with use to signify that they follow React's hook rules, such as using only inside functional components and not being called conditionally.

Q 11: What is a Generic type in TypeScript?
Ans: A Generic type in TypeScript allows you to write flexible, reusable code by creating types that can work with multiple types of data. Instead of specifying a particular type, generics let you define a placeholder for a type that will be determined later. It helps in creating components, functions, or classes that can handle different types without losing type safety.

Q 12: What's the difference between a controlled and uncontrolled input in React?
Ans: Controlled input: In a controlled component, the input's value is controlled by the state in React. The value of the input is set by the state, and any changes to the input are updated in the state via event handlers.

Uncontrolled input: In an uncontrolled component, the input's value is not controlled by React. Instead, you use a ref to access the DOM element directly, and the input value is managed by the DOM itself.
