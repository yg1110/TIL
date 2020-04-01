import React from "../node_modules/@types/react";
import ReactDOM from "../node_modules/@types/react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <br />
    <App />
    <br />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
