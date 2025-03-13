import RouterLink from "../components/ui/RouterLink";

const NotFoundPage = () => {
  return (
    <main className="grid w-full h-screen place-content-center">
      <h1>Página no en desarrollo :)</h1>
      <RouterLink to="/" className="transition-all hover:underline hover:text-blue-500">
        Ir a Página "Mi día"
      </RouterLink>
    </main>
  );
};

export default NotFoundPage;
