import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  let inputname = useRef();

  useEffect(() => {
    inputname.current?.focus();
  }, []);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");

  let [hobbies, setHobbies] = useState([""]);
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [ageError, setAgeError] = useState("");

  let handleHobbyChange = (index, value) => {
    let newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  let addHobby = () => {
    setHobbies([...hobbies, ""]);
  };
  let removeHobby = () => {
    let updatedHobbies = [...hobbies];
    updatedHobbies.pop();
    setHobbies(updatedHobbies);
  };

  let handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };
  let handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  let handleAgeChange = (event) => {
    setAge(event.target.value);
    setAgeError("");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError("Name is Required");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is Required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (!age) {
      setAgeError("Age is required");
      isValid = false;
    } else if (Number(age) <= 10) {
      setAgeError("Age must be greater than 10");
      isValid = false;
    }

    if (isValid) {
      alert("Form Submitted Successfully");
      console.log(`Form Submitted:`);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Age: ${age}`);
      console.log(`Hobbies: `, hobbies);

      setName("");
      setEmail("");
      setAge("");
      setHobbies([""]);
    }
  };

  return (
    <div id="register">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            ref={inputname}
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={handleAgeChange}
          />
          {ageError && <div>{ageError}</div>}
        </div>

        <div>
          <label>Hobbies</label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobbyField">
              <input
                type="text"
                placeholder={`Hobby #${index + 1}`}
                value={hobby}
                onChange={(e) => handleHobbyChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeHobby()}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addHobby}>
            Add Hobby
          </button>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
