import { useState } from "react";
import "./ChefDevi.css"
import SampleRecipe from "./SampleRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromHF,getRecipeFromMistral } from "./ai";

function Main(){
    const [ingredients, setIngredients] = useState(['all the main spices','tomatoes', 'pasta', 'basil', 'olive oil', ]);
    // ingredients=['all the main spices','tomatoes', 'pasta', 'basil', 'olive oil', 'chickpeas']
   
    function addIngredient(formData){
       //event.preventDefault();
       const newIngredient = formData.get("ingredient");
       setIngredients(prevIngredients=> 
            [...prevIngredients,newIngredient]
        );
    }
    const [recipe, setRecipe] = useState("");
   // const [recipeShown, setRecipeShown] = useState();
    const getRecipe =async () => {
   // setRecipeShown(prevRecipeShown =>
        //     !prevRecipeShown
        // )
       const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
     //  const recipeMarkdown = getRecipeFromHF(ingredients);
      // console.log("HF"+recipeMarkdown)
      setRecipe(generatedRecipeMarkdown);
    }
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
            { ingredients.length > 0 && 
                <IngredientsList ingredients = {ingredients} getRecipe={getRecipe} />
            }
           
            {recipe && <SampleRecipe recipe={recipe}/> }
        </main>
        </>
    )
}export default Main;