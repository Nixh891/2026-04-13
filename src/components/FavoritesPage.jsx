import { useFavorites } from "./FavoritesContext";
import Card from "./RecipeCard";

function FavoritesPage({recipes}) {

  const { favorites } = useFavorites();

  const favoriteRecipes = recipes.filter(recipe =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h1>Your Favorites</h1>

      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.img}
          />
        ))
      )}

    </div>
  );
}

export default FavoritesPage;