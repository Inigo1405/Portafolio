import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import index from './routes'


const router = createBrowserRouter(index);

export default function AppRoutes() {
  return <RouterProvider router={router} />
};
