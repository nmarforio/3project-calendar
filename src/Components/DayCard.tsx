import { Value } from "react-calendar/dist/cjs/shared/types";
import DayData from "../interfaces";

interface DayDatas {
  dayData: DayData;
}

const DayCard: React.FC<DayDatas> = ({ dayData }: DayDatas) => {

    const dateString: string[] = dayData.day.split("");
    let newDateString : string[] = []
  for (let i = 0; i < dateString.length; i++){
    if (i <= 9 ){
        let date = dateString!.at(i)
        newDateString.push(date!) }
    }
  
  console.log(newDateString, 'After push')
   return (
    <>
   
      <h3>Your thoughts</h3>
      <div>
        <p>{dayData.mood}</p>
        <p>{dayData.toughts}</p>
        <p>{newDateString.join('')}</p>
      </div>
  
    </>
  );
      
};

export default DayCard;
