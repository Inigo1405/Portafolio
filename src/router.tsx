import Home from "@pages/home";
import {
     createBrowserRouter,
     Link,
     Route,
     RouterProvider,
     Routes
} from "react-router-dom";



export const router = createBrowserRouter([
     {
          path: "/",
          element: <Home />
     },
])