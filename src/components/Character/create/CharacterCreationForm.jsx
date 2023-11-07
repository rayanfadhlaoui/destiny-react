import React, { useState, useEffect } from "react";
import "./CharacterCreationForm.css";
import CharacterFormService from "../../../services/character/CharacterFormService";
import UserService from "../../../services/UserService";
import CharacterService from "../../../services/CharacterService";
import { useNavigate } from "react-router-dom";

const CharacterCreationForm = () => {
  const username = UserService.getUsername();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    day: 1,
    month: "01",
    age: 19,
    username: username,
    gender: "MALE",
    race: "",
  });

  const [errorFormHandler, setErrorFormHandler] = useState({
    hasError: false,
  });

  const [raceOptions, setRaceOptions] = useState([]);
  const [monthOptions, setMonthOptions] = useState([]);

  // Simulate fetching race options with useEffect
  useEffect(() => {
    // Replace this with an actual GET request to fetch race options from an API
    const mockRaceOptions = [
      { id: "1", name: "Human" },
      { id: "2", name: "Elf" },
      { id: "3", name: "Dwarf" },
      { id: "4", name: "Orc" },
    ];

    const mockMonthOptions = [
      { key: "01", value: "January" },
      { key: "02", value: "February" },
      { key: "03", value: "March" },
      { key: "04", value: "April" },
      { key: "05", value: "May" },
      { key: "06", value: "June" },
      { key: "07", value: "July" },
      { key: "08", value: "August" },
      { key: "09", value: "September" },
      { key: "10", value: "October" },
      { key: "11", value: "November" },
      { key: "12", value: "December" },
    ];
    formData.race = mockRaceOptions[0];

    formData.month = mockMonthOptions[0];
    setMonthOptions(mockMonthOptions);
    setRaceOptions(mockRaceOptions);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.info("handleInputChange", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRaceChange = (e) => {
    const { name, value } = e.target;
    const selectedRace = raceOptions.find((race) => race.id === value);

    console.info("handleRaceChange", selectedRace);
    setFormData({
      ...formData,
      [name]: selectedRace,
    });
  };

  const handleMonthChange = (e) => {
    const monthKey = e.target.value;
    const selectedMonth = monthOptions.find((month) => month.key === monthKey);

    console.info("handleMonthChange", selectedMonth);
    setFormData({
      ...formData,
      month: selectedMonth,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorFormHandler(CharacterFormService.validate(formData));
    if (errorFormHandler.hasError) {
      console.error("Ca n'a pas marché", errorFormHandler);
    } else {
      CharacterService.createMyCharacter(formData)
        .then((response) => {
          console.info("Successful save !", response);
          navigate("/");
        })
        .catch((error) => {
          console.error("Don't know what happened !", error);
        });
    }
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">Create a Character</h2>
      <br />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {errorFormHandler.hasError && (
            <p className="form-error">The form contains error(s)</p>
          )}
          <div>
            <div>
              <label>First Name:</label>
            </div>
            {errorFormHandler.firstName && (
              <p className="form-error">{errorFormHandler.firstName}</p>
            )}
            <input
              className="form-error"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            {errorFormHandler.lastName && (
              <p className="form-error">{errorFormHandler.lastName}</p>
            )}
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Birthdate:</label>
            <div className="row">
              <div className="col-md-3">
                <input
                  type="number"
                  name="day"
                  value={formData.day}
                  min="1"
                  max="31"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-9">
                <select
                  name="month"
                  value={formData.month.key}
                  onChange={handleMonthChange}
                  className="form-control"
                >
                  {monthOptions.map((month, index) => (
                    <option key={index} value={month.key}>
                      {month.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label>Age: </label>
            <input
              className="col-md-4"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div>
            <label>Race:</label>
            <select
              name="race"
              value={formData.race.id}
              onChange={handleRaceChange}
            >
              {raceOptions.map((race, index) => (
                <option key={index} value={race.id}>
                  {race.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit">Create Character</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CharacterCreationForm;
