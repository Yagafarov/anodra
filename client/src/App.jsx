import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './fonts/stylesheet.css';
import './style.css';
import About from "./pages/About";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div classNameName="app">
      <div classNameName="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
