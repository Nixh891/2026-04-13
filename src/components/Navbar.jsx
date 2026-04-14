import { NavLink } from "react-router-dom"
import { useFavorites } from "./FavoritesContext"


function Navbar(){
    const { favorites } = useFavorites()

    return(
        <nav className="navbar">
            <h2>Recipe Finder</h2>

            <div className="nav-links">
                <NavLink to= "/RecipeList" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Home</NavLink>
                <NavLink to= "/FavoritesPage" className={({ isActive }) =>
    isActive ? "active-link" : ""
  }>Favorites ❤️ ({favorites.length})</NavLink>

            </div>
        </nav>
    )
}

export default Navbar