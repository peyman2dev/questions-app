import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Utils/routes/routes";

const App = () => {
  const appRouting = useRoutes(routes);
  
  return appRouting;
};

export default App;
