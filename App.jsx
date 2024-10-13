import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home' // Ensure this path is correct
import Js from './components/js.quiz/Js' // Update this path to point to the new folder
import REAct from './components/react/REAct'
import Html from './components/html/Html'
import Css from './components/css/Css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/js" element={<Js />} />
          <Route path="/quiz/react" element={<REAct />} />
          <Route path="/quiz/html" element={<Html />} />
          <Route path="/quiz/css" element={<Css />} />
        
        </Routes>
      </div>
    </Router>
  )
}

export default App
