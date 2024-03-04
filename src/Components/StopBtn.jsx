import React from "react";
import './style/resetbtn.css'
function Pause(props){
    return <button type="button" className="button" onClick={props.stopCount}>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
    <path fill="currentColor" fillRule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clipRule="evenodd"/>
</svg>
  </button>
}

export default Pause;
