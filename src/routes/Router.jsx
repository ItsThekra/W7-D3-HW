import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Home from "../pages/Home";
import JeddahReads from "../pages/JeddahReads";
import HistoricJeddah from "../pages/HistoricJeddah";
import Promenade from "../pages/Promenade";
import JeddahRally from "../pages/JeddahRally";
import QamaraGallery from "../pages/QamaraGallery";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "hom", element: <About /> },
    //   { path: "contact", element: <Contact /> },
      { path: "HistoricJeddah", element: <HistoricJeddah /> },
      { path: "JeddahRally", element: <JeddahRally /> },
      { path: "JeddahReads", element: <JeddahReads /> },
      { path: "Promenade", element: <Promenade /> },
      { path: "QamaraGallery", element: <QamaraGallery /> },    
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
