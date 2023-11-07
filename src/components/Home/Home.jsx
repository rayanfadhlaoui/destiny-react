import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import CharacterService from "../../services/CharacterService";
import SquareWithText from "../common/SquareWithText ";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [myCharacter, setMyCharacter] = useState();
  const [shouldCreateCharacter, setShouldCreateCharacter] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const userName = UserService.getUsername();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await CharacterService.loadMyCharacter(userName)
      .then((myCharacter) => {
        if (myCharacter !== null) {
          setMyCharacter(myCharacter);
        } else {
          setShouldCreateCharacter(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
  const render = (
    <div className="d-flex justify-content-center">
      <SquareWithText onClick={() => navigate("/createMyCharacter")}>
        Create your character
      </SquareWithText>
    </div>
  );

  const renderCharacterExist = (
    <div className="d-flex justify-content-center">
      <SquareWithText onClick={() => navigate("/showMyCharacter")}>
        My Character
      </SquareWithText>
    </div>
  );

  return (
    <>
      <h1 className="text-body-emphasis">Hello {userName}!</h1>
      <p className="lead">you are successfully authenticated!</p>
      {errorMessage && <p>{errorMessage}</p>}
      {shouldCreateCharacter && render}
      {!shouldCreateCharacter && renderCharacterExist}
    </>
  );
};

export default Home;
