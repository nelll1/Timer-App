import React, { useState, useEffect } from "react";
import './style/counter.css';

function Counter() {
    const [minutes, setMinutes] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setMinutes(prevMinutes => prevMinutes + 1);
    //     }, 1);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    return (
        <div className="time">
            <h1>{minutes}</h1>
            <h1>29:</h1>
            <h1>00</h1>
        </div>
    );
}

export default Counter;
