import { lazy } from "react";
const home = lazy(() => import("../pages/home/index.jsx"));
const thankYou = lazy(() => import("../pages/thankYou/index.jsx"));
export const publicRoutes = [
  { path: "/", element: home },
  // { path: "/en", element: home },
  // { path: "/ar", element: home },
  // { path: "/fa", element: home },
  {
    path: "/thankyou",
    element: thankYou,
  },
  {
    path: "*",
    element: home,
  },
];

export const protectedRoutes = [];
