import React, { useState, useEffect } from "react";
import './style/timer.css'
import Date from './Date'
import Counter from "./Counter";
import Play from "./PlayBtn";
import Reset from "./ResetBtn";
import Beat from './Beat';
function Timer(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isRunning) { //if isRunning is true it will run the interval below
            const id = setInterval(() => { //set interval
                setSeconds(prevSeconds => { //set Seconds to run
                    if (prevSeconds === 59) { // if previous second reach 59 it will add 1 in the minutes and then it will return 0
                        setMinutes(prevMinutes => { //set Minutes
                            if(prevMinutes === 59){ //if previous minutes reach 59 it will add 1 in the hours then it will return 0 
                                setHours(prevHours => prevHours + 1) //add 1 in hours
                                return 0 // return 0 to the value of previous minutes
                            }else{
                                return prevMinutes + 1 //add 1 in prevMinutes if it reach 59
                            }
                        });
                        return 0;  //return value to 0 in the prevSecond if it reach 59
                    }else {
                        return prevSeconds + 1; //add 1 in previous second if its not equal to 59
                    }
                });
            }, 10); //interval time

            setIntervalId(id);
        } else {
            clearInterval(intervalId);//if is Running is false it will stop the execution
        }

        return () => clearInterval(intervalId); //if is Running is false it will stop the execution
    }, [isRunning]);  //it will run only on the first render

    const toggleTimer = () => {
        setIsRunning(!isRunning); //set false
    };

    const resetTimer = () => { //reset
        setIsRunning(false); //set false to 
        setSeconds(0); //set to 0
        setMinutes(0); //set to 0
    };

    return (
        <div className="timerContainer">
            <div className="secondContainer">
                <div className="timeContainer">
                    <Date/>
                    <Counter seconds={seconds} minutes={minutes} hours={hours}/>
                    <div className="btnContainer">
                        <Reset onClick={resetTimer}/>
                        <Play onClick={toggleTimer} isRunning={isRunning}/>
                        <Beat/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
