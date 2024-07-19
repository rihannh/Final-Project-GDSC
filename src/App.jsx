import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import RecipeList from './pages/RecipeList'
import Nutrition from './pages/Nutrition'
import BMICheck from './pages/BMICheck'
import Contact from './pages/Contact'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<RecipeList />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/bmi-check' element={<BMICheck />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
