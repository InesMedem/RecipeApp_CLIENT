import axios from "axios";
import { useState } from "react";
import useGetUserId from "../hooks/useGetUserId";

const CreateRecipes = () => {
  const userID = useGetUserId();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { name, value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe);
      alert("Recipe Created");
    } catch (err) {
      console.error(err);
    }
  };

  // console.log("🚀 ~ addIngredient ~ recipe:", recipe);

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        ></input>

        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => {
              handleIngredientChange(event, idx);
            }}
          ></input>
        ))}
        <button onClick={addIngredient} type="button">
          Add ingredient
        </button>

        <label htmlFor="instructions" name="instructions">
          instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageUrl">Image URL </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        ></input>

        <label htmlFor="cookingTime"> Cooking Time (mins) </label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        ></input>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateRecipes;
