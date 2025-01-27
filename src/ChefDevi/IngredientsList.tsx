import { ErrorBoundary } from "react-error-boundary";
import './ChefDevi.css'

function IngredientsList(props) {

    const listIngredients = props.ingredients.map(i =>(
        <li key={i}>{i}</li>
    ));
   
    
    return(
        <>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
       
            <section className="container">
             <h2 className="list-ingredients">Ingredients on hand:</h2>
                
                <ul className="ingredient-list" aria-live="polite">
                    {listIngredients}
                </ul>
                { props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
                }
            </section>
           
            </ErrorBoundary>
        </>
    )
}export default IngredientsList;