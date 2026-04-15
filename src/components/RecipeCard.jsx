import { useNavigate } from 'react-router-dom'
import { useFavorites } from "./FavoritesContext"

function Card({id, title, img}){

    const navigate= useNavigate();
    const { toggleFavorite, isFavorite } = useFavorites()
    
      const openRecipe = ()=>{
        navigate(`/recipe/${id}`)
      }

      const favorite= isFavorite(id)

    return(
        <div className="recipe-card" onClick={openRecipe}>
  
  <div className="image-wrapper">
    <img src={img} alt={title} loading="lazy" />

    <button
      className="favorite-btn"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(id);
      }}
      aria-label="Toggle favorite"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  </div>

  <div className="card-content">
    <h3 className="recipe-title">{title}</h3>

    <button
      className="view-btn"
      onClick={(e) => {
        e.stopPropagation();
        openRecipe();
      }}
    >
      View Recipe
    </button>
  </div>

</div>
    )
}





export default Card