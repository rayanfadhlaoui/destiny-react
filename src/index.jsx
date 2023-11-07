import { createRoot } from "react-dom/client";
import App from "./components/App";
import UserService from "./services/UserService";
import "./index.css";


const renderApp = () => createRoot(document.getElementById("app")).render(<App store={""}/>);

UserService.initKeycloak(renderApp);
