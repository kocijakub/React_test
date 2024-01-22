import { useState } from 'react'
import {Header} from "./Components/Test-Recepty/Header.jsx";
import {CardList} from "./Components/Test-Recepty/CardList.jsx";
import {Cards} from "./Components/Ukol-Movies/Cards.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Cards/>
    </>
  )
}

export default App
