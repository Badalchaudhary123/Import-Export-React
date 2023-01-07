import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import InputQuery from "./Components/InputQuery";
import Product from "./Components/Project";
import Subheading from "./Components/SubHeading";
import Sumbitbutton from "./Components/SubmitButton";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Product />
    <Subheading />
    <InputQuery />
    <Sumbitbutton />
  </StrictMode>
);
