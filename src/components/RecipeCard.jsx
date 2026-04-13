import { useNavigate } from 'react-router-dom'

function Card({id, title, img}){

    const navigate= useNavigate();
    
      const openRecipe = ()=>{
        navigate(`/recipe/${id}`)
      }

    return(
        <div className="card">
            <h2>{title}</h2>
            <img src={img} alt={title}/>
            <button onClick={openRecipe}>View Full Recipe</button>
        </div>
    )
}





export default Card