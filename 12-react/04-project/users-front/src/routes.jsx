import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> }
]);

export default router;
