import LoadingFallback from "components/LoadingFallback";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("screens/Home"));

const homeRoutes = [
  {
    path: "home",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage />
      </Suspense>
    ),
    loader: LoadingFallback,
  },
];

export default homeRoutes;
