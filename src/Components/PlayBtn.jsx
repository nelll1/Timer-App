import React from "react";
import './style/playbtn.css';

function Play(){
    return <div className="playcontainer">
    <label>
      <input className="play-btn" type="checkbox"/>
      <div className="play-icon"></div>
      <div className="pause-icon"></div>
    </label>
  </div>
}

export default Play;