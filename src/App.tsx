import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, InvoicePage } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvoicePage />,
  },
  // {
  //   path: "/auth/",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "register",
  //       element: <div>register</div>,
  //     },
  //     {
  //       path: "login",
  //       element: <div>login</div>,
  //     },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
