import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Error, InvoicePage, RegisterPage } from "./pages/index";
import LoginPage from "./pages/LoginPage";
import { store } from "./utils/store";

import { action as loginAction } from "./pages/LoginPage";
import { action as registerAction } from "./pages/RegisterPage";

import { loader as invoiceLoader } from "./pages/InvoicePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoicePage />,
    errorElement: <Error />,
    loader: invoiceLoader(store as any)
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction(store as any),
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction(store as any),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
