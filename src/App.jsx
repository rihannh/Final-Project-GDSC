import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Recipe from './pages/Recipe'
import Nutrition from './pages/Nutrition'
import BMICheck from './pages/BMICheck'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/bmi-check' element={<BMICheck />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
