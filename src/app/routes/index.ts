// Une y define las rutas necesarias del proyecto
import type { RouteObject } from "react-router-dom"

import HomePage from '@pages/Home/HomePage'
import MainLayout from '@layouts/MainLayout'

const index: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      }
    ]
  },
];

export default index;
