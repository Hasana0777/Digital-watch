import { useState, useEffect} from "react";
import"./App.css";
function Watch(){ 
const [currentTime , setCurrentTime] = useState(new Date());
useEffect(() => {
   const timer = setInterval(() => {
    setCurrentTime(new Date());
   },1000);

   return () => clearInterval(timer);
}, []); 

const formatrailtohome = (hour) => {
    return hour===0?12:hour>12?hour-12:hour;
}
const formatTimewithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
}
const formatDate = (date) => {
    const option = { weekday: "long" , year: "numeric", month: "long",day : "numeric"};

    return date.toLocaleDateString(undefined,option);
}
return (
    <> 
   <div className="digital-clock">
    <h1>Digital clock</h1>
    <div className = "time">
        {formatTimewithLeadingZero(formatrailtohome(currentTime.getHours()))}
        :{formatTimewithLeadingZero(currentTime.getMinutes())}
        :{formatTimewithLeadingZero(currentTime.getSeconds())}
    </div>
    <div className="day">{formatDate(currentTime)}</div>
   </div>
    </>
  );
  };




export default Watch;