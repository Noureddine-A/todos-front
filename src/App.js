import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import SignUp, { action as signUpAction } from "./components/auth/SignUp";
import Login, {action as loginAction} from "./components/auth/Login";
import {action as logoutAction} from './components/auth/Logout';
import { TodoContent } from "./components/content/TodoContent";
import { tokenLoader } from "./components/auth/util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <TodoContent />,
      },
      {
        path: "auth",
        children: [
          {
            path: "signup",
            element: <SignUp />,
            action: signUpAction,
          },
          {
            path: "login",
            element: <Login />,
            action: loginAction
          },
          {
            path: "logout",
            action: logoutAction
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
