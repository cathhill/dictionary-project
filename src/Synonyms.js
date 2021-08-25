import React from "react";
import "./Synonyms.css";

//receiving synonyms from Meaning.js
export default function Synonyms(props) {
  //check if definition has any synonyms:
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {/* for each synonym, loop through them and display the synonym */}
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
