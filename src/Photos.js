import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //checking if we have photos
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {/* loop through photos. ".src.landscape" is from the api */}
          {props.photos.map(function (photo, index) {
            return (
              //key is required to keep React happy when using the results of the map function
              <div className="col-4" key={index}>
                {/* each photo is a link to the original image */}
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    //each component has to return something.
    return null;
  }
}
