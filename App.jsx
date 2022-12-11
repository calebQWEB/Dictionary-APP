import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Home/Home'
import Dictionary from './Dictionary/Dictionary'

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <div className='container'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='lyric' element={<Dictionary />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
