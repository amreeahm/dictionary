import { useState } from 'react';
import './App.css';

const arr = [{ word: "React", meaning: "A JavaScript library for building user interfaces." }, { word: "Component", meaning: "A reusable building block in React." }, { word: "State", meaning: "An object that stores data for a component." }]

function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("")

  const search = () => {
    const word = input.slice(0, 1).toUpperCase() + input.slice(1);
    const found = arr.find((item) => item.word === word);

    if (found) {
      setMeaning(found.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }

    setInput("");
  }


  return (
    <div >
      <h1>Dictionary App</h1>
      <input placeholder="Search for a word..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={search}>Search</button>
      <h3>Definition:</h3>
      <p>{meaning}</p>
    </div>
  );
}

export default App;
