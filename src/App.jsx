import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from './components/Items'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React Practice!</h1>
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