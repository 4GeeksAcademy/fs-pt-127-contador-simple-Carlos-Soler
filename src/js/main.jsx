import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS básico
import "../styles/index.css";


import SecondsCounter from "./components/SecondsCounter";

let secondsPassed = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SecondsCounter seconds={secondsPassed} />);

setInterval(() => {
    secondsPassed++;
    root.render(<SecondsCounter seconds={secondsPassed} />);
}, 1000);
