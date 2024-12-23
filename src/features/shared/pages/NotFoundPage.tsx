import { LinkRouter } from "../components/router/LinkRouter";

const NotFoundPage = () => {
  return (
    <main className="grid w-full h-screen place-content-center">
      <h1>Página no en desarrollo :)</h1>
      <LinkRouter
        to="/"
        className="transition-all hover:underline hover:text-blue-500"
      >
        Ir a Página "Mi día"
      </LinkRouter>
    </main>
  );
};

export default NotFoundPage;
