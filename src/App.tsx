import React, { Component, ReactComponentElement } from "react";
import "./App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import MoodForm from "./Components/MoodForm";
import DayCard from "./Components/DayCard";

const App: React.FC<{}> = () => {
  const [day, setDay] = useState<Value>(new Date());

  const handleChange = (day: Value) => {
    setDay(day!);
    console.log(day);
  };

  const storageData = localStorage.getItem("dayData");
  const dayData = JSON.parse(storageData!);
  console.log(dayData, "Homepage");

  const dayCardcomponent = dayData ? (
    <DayCard dayData={dayData} />
  ) : (
    <div></div>
  );

  return (
    <div className="App">
      <title>Calendar</title>
      <header className="App-header">
        <h1>How do you feel today?</h1>
      </header>
      <div className="calendar-container">
        <Calendar onChange={(day) => handleChange(day!)} value={day} />
      </div>
      <MoodForm day={day} />
      <div className="cardDiv">{dayCardcomponent}</div>
    </div>
  );
};

export default App;
