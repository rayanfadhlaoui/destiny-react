import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Welcome from "./Welcome";
import UnAuthenticatedNav from "./Nav/UnAuthenticatedNav";
import AuthenticatedNav from "./Nav/AuthenticatedNav";
import CharacterCreationForm from "./Character/create/CharacterCreationForm";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <RenderOnAnonymous>
        <UnAuthenticatedNav />
        <Welcome/>
      </RenderOnAnonymous>
      <RenderOnAuthenticated>
        <AuthenticatedNav />
        <div className="my-5 p-5 bg-body-secondary rounded-3">
          <Routes>
            <Route path="/createMyCharacter" element={<CharacterCreationForm/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </RenderOnAuthenticated>
    </div>
 
  </BrowserRouter>
);

export default App;
