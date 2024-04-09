import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, InvoicePage, RegisterPage } from "./pages/index";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoicePage />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
