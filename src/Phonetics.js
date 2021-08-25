import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  //check if definition has any phonetics:

  return (
    <div className="Phonetics">
      {/* for each synonym, loop through them and display the synonym */}
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
