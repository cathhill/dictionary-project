import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  //need to use a state as these things will change in the component.
  //defaultKeyword is coming from App.js
  let [keyword, setKeyword] = useState(props.defaultKeyword);

  let [results, setResults] = useState(null);

  // loaded state create so the page can have a default search word.
  let [loaded, setLoaded] = useState(false);

  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation at https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000105844d6a860e4c9ea03ce155be754a9b";

    //"per_page=" chooses the number of images to return.
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    //Pexels api requires authentication through headers
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        {/* Sends results from handleResponse to the Results component */}
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    //if the page has not loaded, then load the page.
    load();
    return "Loading";
  }
}
