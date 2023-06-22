import React from "react";
import "./App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import Daytime from "./Component/Daytime";

const App: React.FC<{}> = () => {
  const [day, setDay] = useState<Value>(new Date());
 
  
  const handleChange = (day:Value) => {
    setDay(day)
    console.log(day)
    

  };


  return (
    <div className="App">
      <title>Calendar</title>
      <header className="App-header">
        <h1>React Calendar</h1>
      </header>
      <div className="calendar-container">
        <Calendar onChange={(day)=>handleChange(day)} value={day} />
      </div>
      <div className="DayClendar"></div>
      <Daytime/>
    </div>

  );
};

export default App;
