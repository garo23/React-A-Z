import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const user = { firstName: "Gosho", age: 20 };

root.render(
  <StrictMode>
    {/* {App(user)} */}
    <App header="string" {...user} friends={["Ivan"]}>
      <h1>
        {user.firstName}
        {user.age}
      </h1>
    </App>
  </StrictMode>
);
