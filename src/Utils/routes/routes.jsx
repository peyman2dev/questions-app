import Create from "../../pages/Create";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Question from "../../pages/Question";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/question/:id",
    element: <Question />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/create",
    element: <Create />
  }
];

export default routes;
