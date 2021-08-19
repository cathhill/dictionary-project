import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search() {
    alert("searching");
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
