import { useState, useEffect } from "react";
import Card from "./RecipeCard";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Convert TheMealDB meal into a cleaner object
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
      category: meal.strCategory,
      area: meal.strArea,
      instructions: meal.strInstructions,
      ingredients
    };
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        const cleanedMeals = (data.meals || []).map(transformMeal);
        setRecipes(cleanedMeals);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const search = searchTerm.toLowerCase();

    return (
      recipe.title.toLowerCase().includes(search) ||
      recipe.ingredients.some((item) =>
        item.ingredient.toLowerCase().includes(search)
      )
    );
  });

  return (
   <div className="app-container">

  <header className="app-header">
    <h1 className="app-title">Recipe Dashboard</h1>

    <Link to="/favorites" className="favorites-link">
      ❤️ Favorites
    </Link>
  </header>

  <div className="search-section">
    <SearchBar search={searchTerm} setSearch={setSearchTerm} />
  </div>

  <main className="recipe-container">
    <div className="recipe-grid">
     <p className="results-count">
  {filteredRecipes.length} recipes found
    </p>

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
          />
        ))
      ) : (
        <div className="empty-state">
          <p>No recipes found.
            Try Searching for something else.
          </p>
        </div>
      )}

    </div>
  </main>

</div>
  );
}

export default RecipeList;