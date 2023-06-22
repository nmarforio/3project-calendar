import React from 'react';
import './App.css';
import { useState } from 'react';
import Calendar from 'react-calendar';



const App : React.FC <{}> =() => {
  const [day, setDay] = useState <Date>(new Date())
  const correntYear: number = new Date().getFullYear()

  

  console.log(day)
  return (
    <div className="App">
      <title>Calendar</title>
      <header className="App-header">
        <h1>Calendar {correntYear}</h1>
      </header>
      <div className='calendar-container'>
        <Calendar onClickDay={()=>setDay} value={day}/>
      </div>
      <p className='Calendar-Day'> 
      <span className='bold'>Selected Date:</span> {day.toDateString()}</p>
    </div>
  );
}

export default App;
