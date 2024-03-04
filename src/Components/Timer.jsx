import React, { useState, useEffect } from "react";
import './style/timer.css'
import Date from './Date'
import Counter from "./Counter";
import Play from "./PlayBtn";
import Reset from "./ResetBtn";
import Stop from "./StopBtn";

function Timer(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => prevMinutes + 1);
                        return 0;
                    }else {
                        return prevSeconds + 1;
                    }
                });
            }, 100);

            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
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
                        <Stop />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
