import { useState, useEffect } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";

const MoodForm: React.FC<{ day: Value }> = ({ day }) => {
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
    localStorage.setItem("dayData", JSON.stringify(dayMoodData));
    window.location.reload();
  };

  return (
    <>
      <form className="border-solid border-4 border-orange-950 w-fit rounded-md p-2.5"  onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h2>Write down your toughts</h2>
          <h4 id="dayOfForm">{day!.toLocaleString()}</h4>
          <textarea
            id="textarea"
            placeholder="how is your day?"
          ></textarea>
        </div>

        

        <div className="justify-items-center grid">
          <button className="border-dotted rounded-md bg-orange-200 border-2 border-orange-950" onClick={(e) => handleMood(e)}>
            Choose your mood
          </button>
          {mood ? (
            <>
              <button
                onClick={(e) => handleGreenClick(e)}
                className="text-emerald-500 border-2 border-newgreen box-border w-20 font-bold my-1.5"
                style={{ backgroundColor: greenButton ? "green" : "white" }}
              >
                Happy
              </button>
              <button
                onClick={(e) => handleYellowClick(e)}
                className="text-amber-500 border-2 border-amber-700 box-border w-20 font-bold mb-1.5"
                style={{ backgroundColor: yellowButton ? "yellow" : "white" }}
              >
                Ok
              </button>
              <button
                onClick={(e) => handleRedClick(e)}
                className="text-red-500 border-2 border-red-700 box-border w-20 font-bold mb-1.5"
                style={{ backgroundColor: redButton ? "red" : "white" }}
              >
                Low
              </button>
            </>
          ) : (
            <></>
          )}

          <button className="bg-orange-200 w-20 rounded-md mt-1.5" type="submit">
            Save it
          </button>
        </div>
      </form>
    </>
  );
};

export default MoodForm;
