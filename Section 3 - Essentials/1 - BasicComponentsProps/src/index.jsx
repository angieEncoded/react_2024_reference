import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root"); // GEt the root starting point
ReactDOM.createRoot(entryPoint).render(<App />); // Render the application into the entrypoint
