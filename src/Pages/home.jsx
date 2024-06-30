import axios from "axios";
import { useEffect, useState } from "react";
import useGetUserId from "../hooks/useGetUserId";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserId();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes/");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSaveRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
    fetchSaveRecipe();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes/", {
        recipeID,
        userID,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                Save{}
              </button>
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

export default Home;
