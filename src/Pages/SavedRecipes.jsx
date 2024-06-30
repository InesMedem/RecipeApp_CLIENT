import axios from "axios";
import { useEffect, useState } from "react";
import useGetUserId from "../hooks/useGetUserId";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserId();
  useEffect(() => {
    const fetchSaveRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSaveRecipe();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p> cooking Time: {recipe.cookingTime}(mins)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipes;
