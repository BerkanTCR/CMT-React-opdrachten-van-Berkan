import { useState, useEffect } from "react";

const Clock = () => {

const [currentTime, setCurrentTime] = useState(new Date())

useEffect(() => {

    const intervalID = setInterval(()=> {
            setCurrentTime(new Date())
    },1000);

    return () => {
        clearInterval(intervalID);
    }



}, []); 

    return ( 
        <h2>{currentTime.toLocaleTimeString()}</h2>
     );
}
 
export default Clock ;    