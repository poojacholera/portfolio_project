import { useState } from "react";
import "./ChefDevi.css"
import { ErrorBoundary } from "react-error-boundary";

function Main(){
    const [ingredients, setIngredients] = useState([]);
    //let ingredients=['tomatoes', 'cucumber', 'basil', 'olive oil', 'chickpeas']
   
    function addIngredient(formData){
       //event.preventDefault();
       const newIngredient = formData.get("ingredient");
      
       setIngredients(prevIngredients=> 
            [...prevIngredients,newIngredient]
        );
      
      
    }
    
    const listIngredients = ingredients.map(i =>(
        <li key={i}>{i}</li>
    ));
    return(
        <>
        <main >
        <ErrorBoundary
      fallback={<p>There was an error while submitting the form</p>}
    >
            <form name="addIngredientForm" className="add-ingredient-form" action={addIngredient} >
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. basil" 
                    name="ingredient"
                />
                <button className="add-ingredient" >Add Ingredient</button>
            </form>
            </ErrorBoundary>
            <div className="container">
                <span className="list-ingredients">Ingredients</span>
                <ul>
                    {listIngredients}
                </ul>
            </div>
        </main>
        </>
    )
}export default Main;