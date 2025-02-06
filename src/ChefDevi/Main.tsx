import { useEffect, useRef, useState } from "react";
import "./ChefDevi.css"
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

function Main(){
    const [ingredients, setIngredients] = useState(['all the main spices','tomatoes', 'pasta', 'basil', 'olive oil', ]);
    // ingredients=['all the main spices','tomatoes', 'pasta', 'basil', 'olive oil', 'chickpeas']
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef<HTMLAreaElement>(null);
   // const [recipeShown, setRecipeShown] = useState();
//@ts-ignore
    function addIngredient(formData){
       //event.preventDefault();
       const newIngredient = formData.get("ingredient");
       setIngredients(prevIngredients=> 
            [...prevIngredients,newIngredient]
        );
    }
    const getRecipe =async () => {
       const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
       //@ts-ignore
      setRecipe(generatedRecipeMarkdown);
    }
    useEffect(()=>{
        if(recipe!==null &&  recipeSection.current!== null){
           
            recipeSection.current.scrollIntoView({behavior:'smooth'});
        //  works well with iFrame  
        //  const yCoord =recipeSection.current.getBoundingClientRect().top;
        //    window.scroll({
        //     top:yCoord,
        //     behavior:"smooth"
        //    });
        }
    },[recipe]) ;

    
    return(
        <>
        <main className="chefdevi-main">
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
                <IngredientsList ingredients = {ingredients} getRecipe={getRecipe} ref={recipeSection} />
            }
           
            {recipe && <Recipe recipe={recipe}/> }
        </main>
        </>
    )
}export default Main;