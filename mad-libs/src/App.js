import React, { useState, useTransition } from 'react';
import './App.css';

function App() {
  // blank to start
  const [inputs, setInputs] = useState({
    noun1: '',
    noun2: '',
    adjective: '',
    color: '',
  });
  // blank to start
  const [story, setStory] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { noun1, noun2, adjective, color } = inputs;
    setStory(`Once upon a time, there was a ${adjective} ${noun1} that was ${color}.
              It loved to play with a ${noun2},`);
  };

  return (
    <div className="App">
      <h1>Mad Libs!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="noun1"
          placeholder="Noun 1"
          value={inputs.noun1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="noun2"
          placeholder="Noun 2"
          value={inputs.noun2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="adjective"
          placeholder="Adjective"
          value={inputs.adjective}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={inputs.color}
          onChange={handleChange}
        />
        <button type="submit">Get Story</button>
      </form>
      {story && <p>{story}</p>}
    </div>
  );
}

export default App;
