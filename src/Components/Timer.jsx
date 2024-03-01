import React from "react";
import './style/timer.css'
import Date from './Date'
import Counter from "./Counter";
import Buttons from "./Buttons";
function Timer(){
    return <div className="timerContainer">
        <div className="secondContainer">
            <div className="timeContainer">
                <Date/>
                <Counter/>
                <Buttons/>
            </div>
        </div>
    </div>
}

export default Timer;