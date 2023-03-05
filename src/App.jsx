import React from "react";
import { createRoot } from "react-dom/client";

import SearchPanel from "./components/searchPanel";

const App = () => {
  return (
    <>
      < SearchPanel />
      <h1 className="text-3xl bg-gray-300">asdasd</h1>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
