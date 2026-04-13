import { Routes, Route } from 'react-router-dom'
import { RecipePage } from './components/RecipePage'
import { RecipeList } from './components/RecipeList'
import { FavoritesProvider } from './components/FavoritesContext'
import { FavoritesPage } from './components/FavoritesPage'
import './App.css'

function App() {
  
  return (

    <FavoritesProvider>
    <Routes>
      <Route path="/" element={<RecipeList/>}/>

     <Route path ="/recipe/:id"  element={<RecipePage/>}/>
    
    <Route path="/favorites" element={<FavoritesPage recipes={recipes}/>}/>
      </Routes>
      </FavoritesProvider>
      
    
  

  
)}

export default App
