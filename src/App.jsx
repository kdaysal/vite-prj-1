import { useState, useEffect } from 'react'
import './App.css'
import Items from './components/Items'

export default function App() {
  const [listItems, setListItems] = useState([])
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    // console.log(`ListItems from useEffect: ${listItems}`)
  }, [listItems])

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(`input received as ${newItem}`)

    setListItems((prev) => [...prev, newItem])
    setNewItem('')
  }

  // runs whenever a character is typed into the <input>
  const handleChange = (e) => {
    setNewItem(e.target.value)
  }

  //clear listItems
  const handleClear = () => {
    setListItems([])
  }

  return (
    <>
      <h1>Vite + React Practice!</h1>
      <div>
        <button onClick={handleClear}>Clear List</button>
      </div>
      <label htmlFor="userInput">Add List Items:</label>
      <input
        className="user-input"
        type="text"
        id="userInput"
        onChange={handleChange}
        value={newItem}
      ></input>
      <button onClick={handleAdd}>Add it!</button>
      {!listItems.length && <p>No items on your list...SAD</p>}
      <Items listItems={listItems} />
    </>
  )
}