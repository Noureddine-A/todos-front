import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import SignUp, { action as signUpAction } from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import { TodoContent } from "./components/content/TodoContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <TodoContent />,
      },
      {
        path: "auth",
        errorElement: <p>User already exists</p>,
        children: [
          {
            path: "signup",
            element: <SignUp />,
            action: signUpAction,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
