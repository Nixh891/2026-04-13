import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // same transformation logic used in RecipeList
  function transformMeal(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient,
          measure: measure || ""
        });
      }
    }

    return {
      id: meal.idMeal,
      title: meal.strMeal,
      image: meal.strMealThumb,
      instructions: meal.strInstructions,
      ingredients
    };
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const cleanedMeal = transformMeal(data.meals[0]);
        setRecipe(cleanedMeal);
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) return <p>Loading recipe...</p>;

  return (
    <div className="recipe-page">
      <h1>{recipe.title}</h1>

      <img src={recipe.image} alt={recipe.title} />

      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePage;