import React, { Component, ReactComponentElement } from "react";
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
    <div >
      <title>Calendar</title>
      <header className="App-header">
        <h1 className="flex justify-center text-5xl my-4">How do you feel today?</h1>
      </header>
      <div className="flex justify-center">
        <Calendar onChange={(day) => handleChange(day!)} value={day} />
      </div>
      <div className='flex items-center justify-around mb-12 mt-5'>
      <MoodForm day={day} />
      <div className="border-solid border-4 border-orange-950 w-fit rounded-md p-2.5 bg-beigebg">{dayCardcomponent}</div>
      </div>
    </div>
  );
};

export default App;
