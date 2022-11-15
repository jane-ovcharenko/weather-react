import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is 19°C in ${query}`);
  }

  function updateCity(event) {
    setQuery(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type your city"
            autoFocus="on"
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input type="Submit" value="Search" className="btn btn-light" />
        </div>
      </div>
    </form>
  );
}
