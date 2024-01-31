import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ParentComponent from "./ParentComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>
);
