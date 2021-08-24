import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {/* below is the word searched for */}
        <h2>{props.results.word}</h2>
        {/* loop through synonyms from results */}
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              {/* sending a property called phonetics (from the mapping) to the Phonetics component */}
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        {/* loop through meanings from results */}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {/* sending a property called meaning (from the mapping) to the Meaning component */}
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
  //only display something if there are results, otherwise display nothing. A component has to return something therefore use "null".Results sent from Dictionary.js
}
