import { useState } from "react";
import "./ChefDevi.css"
import { ErrorBoundary } from "react-error-boundary";
import SampleRecipe from "./SampleRecipe";
import IngredientsList from "./IngredientsList";

function Main(){
    const [ingredients, setIngredients] = useState(['all the main spices','tomatoes', 'cucumber', 'basil', 'olive oil', 'chickpeas']);
    // ingredients=['all the main spices','tomatoes', 'cucumber', 'basil', 'olive oil', 'chickpeas']
   
    function addIngredient(formData){
       //event.preventDefault();
       const newIngredient = formData.get("ingredient");
      
       setIngredients(prevIngredients=> 
            [...prevIngredients,newIngredient]
        );
    }

    const [recipeShown, setRecipeShown] = useState(false);
    const toggleRecipeShown = () => {setRecipeShown(prevRecipeShown=>!prevRecipeShown)}
    return(
        <>
        <main>
            <form name="addIngredientForm" className="add-ingredient-form" action={addIngredient} >
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. basil" 
                    name="ingredient"
                />
                <button className="add-ingredient" >Add Ingredient</button>
            </form>
            <IngredientsList ingredients = {ingredients} toggleRecipeShown={toggleRecipeShown} />
            {recipeShown && <SampleRecipe /> }
        </main>
        </>
    )
}export default Main;