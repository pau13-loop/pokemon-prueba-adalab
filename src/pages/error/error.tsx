import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error | undefined;
  console.error(error);

  return (
    <div id="error-page" className="w-100 h-100 flex flexCol flexCenter">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.message : "Unknown error"}</i>
      </p>
    </div>
  );
}

export { ErrorPage };