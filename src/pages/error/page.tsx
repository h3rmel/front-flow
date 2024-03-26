import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return <>error</>;
}
