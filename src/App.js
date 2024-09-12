import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import { TodoContent } from "./components/content/TodoContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <TodoContent/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
