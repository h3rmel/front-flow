import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  // TODO: Create the ErrorBoundary instead of ErrorPage (needs to be in the /components/ directory)
  console.log(error);

  return <>error</>;
}
