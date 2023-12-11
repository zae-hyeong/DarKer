import "./App.css";
import Main from "./Component/Main/Main";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import ProductDetail from "./Component/Product/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Component/RootLayout";
import ErrorPage from "./Component/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Main />, index: true },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "product/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider className="App" router={router} />;
}

export default App;
