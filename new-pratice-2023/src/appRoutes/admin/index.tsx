import LoadingFallback from "components/LoadingFallback";
import AuthenProvider from "components/AuthenProvider";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("screens/Dashboard"));

const adminRoutes = [
  {
    path: "admin",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <AuthenProvider roles={["ADMIN"]}>
          <Dashboard />
        </AuthenProvider>
      </Suspense>
    ),
    loader: LoadingFallback,
  },
];

export default adminRoutes;
