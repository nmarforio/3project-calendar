import { Value } from "react-calendar/dist/cjs/shared/types"
import DayData from "../interfaces"

interface DayDatas{
    dayData : DayData
}


const DayCard : React.FC <DayDatas> = ({dayData}:DayDatas)=>{
    
    console.log(dayData, "TYPEOFDATA")
    return(
    <>
        <h3>Your thoughts</h3>
        <div>
            <p>{dayData.mood}</p>
            <p>{dayData.toughts}</p>
            <p>{dayData.day}</p>
        </div>
    </>
)
}

export default DayCard