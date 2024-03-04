import React, { useState, useEffect } from "react";
import './style/counter.css';

function Counter(props) {

    
    return (
        <div className="time">
            <h1>{props.hours} :</h1>
            <h1>{props.minutes} :</h1>
            <h1>{props.seconds}</h1>
        </div>
    );
}

export default Counter;
