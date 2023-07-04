import { useState, useEffect } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

const Daytime: React.FC<{ day: Value }> = ({ day }) => {
  const [mood, setMood] = useState<boolean>(false);
  const [redButton, setRedButton] = useState<boolean>(false);
  const [greenButton, setGreenButton] = useState<boolean>(false);
  const [yellowButton, setYellowButton] = useState<boolean>(false);
  const [decidedMood, setDecidedMood] = useState<string>("");

  const handleMood = (e: React.MouseEvent) => {
    e.preventDefault();
    setMood(!mood);
  };

  const handleGreenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setGreenButton(!greenButton);
    setYellowButton(false);
    setRedButton(false);
    setDecidedMood("Happy");
  };
  const handleYellowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setYellowButton(!yellowButton);
    setGreenButton(false);
    setRedButton(false);
    setDecidedMood("Ok");
  };
  const handleRedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setRedButton(!redButton);
    setGreenButton(false);
    setYellowButton(false);
    setDecidedMood("Low");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textareaData: string = e.currentTarget.textarea.value;
    const dayMoodData: object = {
      mood: decidedMood,
      toughts: textareaData,
      day: day,
    };
    localStorage.setItem('dayData', JSON.stringify(dayMoodData))
    console.log(dayMoodData, "halo");
  };
  

  return (
    <>
      <form className="DayForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="textareaDiv">
          <h2>Write down your toughts</h2>
          <h4 id="dayOfForm">{day?.toLocaleString()}</h4>
          <textarea id="textarea" placeholder="how is your day?"></textarea>
        </div>
        <button onClick={(e) => handleMood(e)}>Choose your mood</button>
        {mood ? (
          <>
            <button
              onClick={(e) => handleGreenClick(e)}
              className="greenButton"
              style={{ backgroundColor: greenButton ? "green" : "white" }}
            >
              Happy
            </button>
            <button
              onClick={(e) => handleYellowClick(e)}
              className="yellowButton"
              style={{ backgroundColor: yellowButton ? "yellow" : "white" }}
            >
              Ok
            </button>
            <button
              onClick={(e) => handleRedClick(e)}
              className="redButton"
              style={{ backgroundColor: redButton ? "red" : "white" }}
            >
              Low
            </button>
          </>
        ) : (
          <></>
        )}

        <button type="submit">Save it</button>
      </form>
    </>
  );
};

export default Daytime;
