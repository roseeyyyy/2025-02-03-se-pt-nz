import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BitcoinRates from '../public/Exer1/BitcoinRates'
//import Home from '../public/Exer4/Home'
//import Login from '../public/Exer4/Login'
import Navbar from '../public/Exer4/NavBar'
import BitcoinRates2 from '../public/Exer2/BitcoinRates2'
import Emoji from '../public/Exer3/Emoji'
import { EmojiProvider } from '../public/Exer3/EmojiContext'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../public/Exer5/theme'

import Home from '../public/Exer5/Home'
import Login from '../public/Exer5/Login'
import NavBar from '../public/Exer5/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme = {theme}>
    <EmojiProvider>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoin-rates" element={<BitcoinRates2 />} />
        </Routes>
        <Emoji></Emoji>
      </div>
    </Router>
    </EmojiProvider>
    </ThemeProvider>
  )
}

export default App
