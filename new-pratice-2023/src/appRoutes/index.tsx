import LoadingFallback from "components/LoadingFallback";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home";

const HomePage = lazy(() => import("screens/Home"));
const NotFoundPage = lazy(() => import("screens/NotFound"));

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
    loader: LoadingFallback,
    children: [homeRoutes],
  },
]);

export default appRoutes;
