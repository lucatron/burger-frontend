import HomePage from "../pages/HomePage/HomePage";
import DiscoverPage from "../pages/DiscoverPage/DiscoverPage";

type AppRoute = {
  path: string;
  element: JSX.Element;
};

export const appRoutes: AppRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/discover", element: <DiscoverPage /> },
];
