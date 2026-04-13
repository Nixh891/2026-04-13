import { useNavigate } from 'react-router-dom'
import { useFavorites } from "../components/FavoritesContext"

function Card({id, title, img}){

    const navigate= useNavigate();
    const { toggleFavorite, isFavorite } = useFavorites()
    
      const openRecipe = ()=>{
        navigate(`/recipe/${id}`)
      }

      const favorite= isFavorite(id)

    return(
        <div className="card">

          <button
            className="favorite-btn"
            onClick={(e)=>{
              e.stopPropagation()
              toggleFavorite(id)}}
            aria-label="Toggle favorite"
            >
              {favorite ? "❤️" : "🤍"}
              </button>

            <h2>{title}</h2>
            <img src={img} alt={title}/>

            <button onClick={openRecipe}>View Full Recipe

            </button>
        </div>
    )
}





export default Card