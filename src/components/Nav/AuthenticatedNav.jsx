import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Import the CSS file
import { useLocation } from "react-router-dom";
import UserService from "../../services/UserService";

const AuthenticatedNav = () => {
  const path = window.location.pathname;
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
/*
  useEffect(() => {
    if (!isLoaded) {
      // fetchData();
    }
  }, []);

  const fetchData = async () => {
    /*console.log("fetchData");

    if (keycloak.authenticated) {
      console.log("fetchData inside");

      try {
        const userProfile = await keycloak.loadUserProfile();
        console.log("Retrieved user profile:", userProfile);
      } catch (error) {
        console.error("Failed to load user profile:", error);
      }
      setIsLoaded(true);
    }
    console.log("fetchData end");*/
  /*};
*/

  const linkClassProvider = new LinkClassProvider(path);
  return (
    <nav>
      <ul>
        {/*
        <li>
          <Link className={linkClassProvider.get("/")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={linkClassProvider.get("/profile")} to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className={linkClassProvider.get("/public")} to="/public">
            Public
          </Link>
        </li>
        <li>
          <Link className={linkClassProvider.get("/lands")} to="/lands">
            Private
          </Link>
        </li>
        <li>
          <Link className={linkClassProvider.get("/lands2")} to="/lands2">
            Private2
          </Link>
  </li>*/}
        <li className="right">
          <button
            onClick={() =>
              UserService.isLoggedIn()
                ? UserService.doLogout()
                : UserService.doLogin()
            }
          >
            {UserService.isLoggedIn() ? "Log Out" : "Log In"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

class LinkClassProvider {
  constructor(currentPath) {
    this.currentPath = currentPath;
  }

  get(path) {
    return path === this.currentPath ? "active" : "";
  }
}

export default AuthenticatedNav;
