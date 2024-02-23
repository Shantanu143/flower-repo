import { createBrowserRouter } from "react-router-dom";
import DashbordLyout from "./dashbord/DashbordLyout.jsx";
import AddFlower from "./dashbord/components/AddFlower.jsx";
import App from "./App.jsx";
import EditFlower from "./dashbord/components/EditFlower.jsx";
import ManageFlowers from "./dashbord/components/ManageFlowers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashbord",
    element: <DashbordLyout />,
    children: [
      {
        path: "/dashbord/addflower",
        element: <AddFlower />,
      },
      {
        path: "/dashbord/editflower",
        element: <EditFlower />,
      },
      {
        path: "/dashbord/manageflower",
        element: <ManageFlowers />,
      },
   
    ],
  },
]);

export default router;
