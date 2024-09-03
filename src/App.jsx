import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InterfaceTicket } from './DatVe/InterfaceTicket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InterfaceTicket/>
    </>
  )
}

export default App
