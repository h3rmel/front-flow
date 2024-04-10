# 🚄 Performance

## Component and state optimizations

- Do not put everything in a single state. That might trigger unnecessary re-renders. Instead split the global state into multiple stores according to where it is being used.
- Keep the state as close as possible to where it is being used. This will prevent re-rendering components that do not depend on the updated state.
- If you have a piece of state that is initialized by an expensive computation, use the state initializer function instead of executing it directly because the expensive function will be run only once as it is supposed to. e.g:

```tsx
// instead of this which would be executed on every re-render:
const [state, setState] = useState<something>(myExpensiveFn());

// prefer this which is executed only once:
const [state, setState] = useState<something>(() => myExpensiveFn());
```

- 

### Image Optimization

You can check how to optimize images with NextJS in the following link:

[<Image>](https://nextjs.org/docs/pages/api-reference/components/image)

### Script Optimization

You can check how to optimize scripts with NextJS in the following link:

[Script Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/scripts)

### Web vitals

Since Google started taking web vitals in account when indexing websites, you should keep an eye on web vitals scores from [Lighthouse](https://web.dev/measure/) and [Pagespeed Insights](https://pagespeed.web.dev/).