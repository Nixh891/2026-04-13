import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function RecipePage(){
    const { id }= useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then(data=> setRecipe(data.meals[0]))
        .catch(err=> console.error("Error fetching recipe:", err))
    }, [id])

    if(!recipe) return<p>Loading recipe...</p>

    return(
        <div classNAme="recipe-page">
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.streMealThumb} alt={recipe.strMeal}/>
            <h2>Intructions</h2>
            <p>{recipe.strInstructions}</p>

            <h2>Ingredients</h2>
            <ul>
                {Array.from({ length: 20}, (_, i)=> i+1)
                .map(i=>{
                    const ingredient = recipe[`strIngredient${id}`]
                    const measure = recipe[`strMeasure ${i}`]

                    if (ingredient && ingredient.trim() !== ""){
                        return <li key={i}>{ingredient} - {measure}</li>
                    }
                    return null
                })}
            </ul>
        </div>
    )
}


export default RecipePage