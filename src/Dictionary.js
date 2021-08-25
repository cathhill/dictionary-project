import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  //need to use a state as these things will change in the component.
  //defaultKeyword is coming from App.js
  let [keyword, setKeyword] = useState(props.defaultKeyword);

  let [results, setResults] = useState(null);

  // loaded state create so the page can have a default search word.
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search() {
    //documentation at https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    //Tells it that the page is loaded.
    setLoaded(true);
    //will search for the default keyword because nothing has been typed yet.
    search();
  }

  if (loaded) {
    //if the page show the form below

    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
        </section>
        {/* Sends results from handleResponse to the Results component */}
        <Results results={results} />
      </div>
    );
  } else {
    //if the page has not loaded, then load the page.
    load();
    return "Loading";
  }
}
