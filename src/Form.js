import React, { useState } from "react";

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
      <input type="search" placeholder="Type your city" onChange={updateCity} />
      <input type="Submit" value="Search" />
      <h2>{message}</h2>
    </form>
  );
}
