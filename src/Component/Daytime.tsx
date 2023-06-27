import { useState } from "react"
import { Value } from "react-calendar/dist/cjs/shared/types"

 export interface Props{
    day: Value
}

const Daytime : React.FC <{day: Value}>= ({day}: Props)  =>{
    const [mood, setMood] = useState <boolean>(false)

    const handleMood = (e : React.MouseEvent)=>{
        e.preventDefault()
        setMood(!mood)
    }
    console.log(mood)
    const handleGreenClick =(e: React.MouseEvent)=>{
        e.preventDefault()
        setMood(false)

    }
    

    return(
        <>
        <form className="DayForm">
        <div className="textarea">
            <h2>Write down your toughts</h2>
            <h4>{day?.toLocaleString()}</h4>
            <textarea placeholder="how is your day?"></textarea>
        </div>
        <button onClick={(e)=>handleMood(e)}>Choose your mood</button>
        {mood ? <ul>
            <button onClick={(e)=>handleGreenClick(e)} className="greenButton">Happy</button>
            <button className="yellowButton">Ok</button>
            <button className="redButton">Low</button>
        </ul> : <></>}
        </form>
        </>
    )
}



export default Daytime