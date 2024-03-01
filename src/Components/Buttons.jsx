import React from "react";
import './style/buttons.css'
import Play from './PlayBtn';
import Stop from "./StopBtn";
import Reset from "./ResetBtn";
function Buttons(){
    return <div className="btnContainer">
        <Reset/>
        <Play/>
        <Stop/>
    </div>
}

export default Buttons;