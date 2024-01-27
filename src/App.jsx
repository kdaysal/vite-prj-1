import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from './components/Items'

export default function App() {
  const [listItems, setListItems] = useState([])

  const handleSubmit = (e) => {
    console.log('input submitted!')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }



  return (
    <>
      <h1>Vite + React Practice!</h1>
      <label htmlFor="userInput">Add List Items:</label>
      <input
        type="text"
        id="userInput"
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Add it!</button>
      <Items />
    </>
  )
}

//export default App
/*
<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/