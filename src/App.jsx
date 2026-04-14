import { Routes, Route } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import RecipeList from "./components/RecipeList";
import { FavoritesProvider } from "./components/FavoritesContext";
import FavoritesPage from "./components/FavoritesPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;