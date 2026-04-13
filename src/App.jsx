import { Routes, Route } from 'react-router-dom'
import RecipePage from './components/RecipePage'
import RecipeList from './components/RecipeList'
import './App.css'

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<RecipeList/>}/>

     <Route path ="/recipe/:id"  element={<RecipePage/>}/>

      </Routes>
      
      
    
  

  
)}

export default App
