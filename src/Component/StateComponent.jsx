import React from "react";
import HeaderComponent from "./Ginnit/HeaderComponent";
import HomeComponent from "./Ginnit/HomeComponent";
import { useState } from "react";

const colorRed = "red";
const colorBlue = "blue";

const StateComponent = () => {
  const [fullName, setFullName] = useState("Tai");
  const [age, setAge] = useState(1);
  const cssStyle = {
    color: "yellow",
    backgroundColor: "green",
    fontSize: "20px",
  };

  const handleChangeState = () => {
    if (fullName === "Tai") {
      setFullName("Duong");
    } else {
      setFullName("Tai");
    }
    setAge(age + 1);
  };
  return (
    <>
      <h1
        style={{
          color: age >= 20 ? colorRed : colorBlue,
          backgroundColor: age >= 20 ? colorBlue : colorRed,
        }}
      >
        Hello State
      </h1>
      <p
        style={{
          color: age >= 20 ? colorRed : colorBlue,
          backgroundColor: age >= 20 ? colorBlue : colorRed,
        }}
      >
        My name is {fullName}
      </p>
      <p style={cssStyle}>My name is {age}</p>
      {age >= 20 ? <HomeComponent /> : <HeaderComponent />}

      <button
        style={{
          border: "1px solid black",
          padding: "10px 20px",
          borderRadius: "15px",
        }}
        onClick={handleChangeState}
      >
        click
      </button>
    </>
  );
};

export default StateComponent;
