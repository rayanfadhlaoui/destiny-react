import httpRequest from "./HttpRequest";

const loadMyCharacter = (username) => {
  return httpRequest
    .get(`/character/myCharacter/${username}`)
    .then((response) => {
      if (response.status === 404) {
        return null;
      } else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
};

const createMyCharacter = (formData) => {
  const characterRequest = mapToRequest(formData);
  return httpRequest
    .post("/character/myCharacter", characterRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
};

const mapToRequest = (formData) => {
  const birthdate =
    formData.day + "/" + formData.month.key + "/" + formData.age;
  console.info(formData.race);
  return {
    firstName: formData.firstName,
    lastName: formData.lastName,
    birthdate: birthdate,
    gender: formData.gender,
    username: formData.username,
    race: formData.race,
  };
};

const CharacterService = {
  loadMyCharacter,
  createMyCharacter,
};

export default CharacterService;
