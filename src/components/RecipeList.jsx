import { useState, useEffect } from 'react'
import Card from './RecipeCard'
import SearchBar from './SearchBar'


function RecipeList(){
const [recipes, setRecipes] = useState([])
const [search, setSearch]=useState("")
  

    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response)=>response.json())
      .then((data)=>{
        setRecipes(data.meals || []);//store in state
      })
      .catch((error)=>{
        console.error("Error fetching recipes;", error);
      });
    }, [])//runs once when component mounts

      const filteredRecipes= recipes.filter(recipe=>
    recipe.strMeal.toLowerCase().includes(search.toLowerCase()))
      

      return(
    <div className="App">

      <h1 className="text-4x1 font-bold text-center text-blue-600">Recipe Dashboard</h1>
        <SearchBar search={search} setSearch={setSearch}/>
        

          <div className="card-container">

          {filteredRecipes.length > 0 ?(
          
          filteredRecipes.map((recipe)=>(
            <Card
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            img={recipe.strMealThumb}
            
            />

            
          ))
        ) : (
            <p>No recipes found.</p>
        )}
        </div>
        </div>
      )
    }



    export default RecipeList