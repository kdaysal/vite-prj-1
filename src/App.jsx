import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from './components/Items'

export default function App() {
  const [listItems, setListItems] = useState([])
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    console.log(`ListItems from useEffect: ${listItems}`)
  }, [listItems])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`input received as ${newItem}`)

    setListItems((prev) => [...prev, newItem])
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setNewItem(e.target.value)
  }

  return (
    <>
      <h1>Vite + React Practice!</h1>
      <label htmlFor="userInput">Add List Items:</label>
      <input
        type="text"
        id="userInput"
        onChange={handleChange}
        value={newItem}
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