import { useState } from 'react'
import {Header} from "./Components/Header.jsx";
import {CardList} from "./Components/CardList.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <CardList/>
    </>
  )
}

export default App