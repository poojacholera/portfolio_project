import { ErrorBoundary } from "react-error-boundary";
import './ChefDevi.css'

function IngredientsList(props) {

    const listIngredients = props.ingredients.map(i =>(
        <li className="ingredient-list-items" key={i}>{i}</li>
    ));
   
    
    return(
        <>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
       
            <section className="container">
             <h2 className="ingredient-list-header">Ingredients on hand:</h2>
                <div className="ingredient-list-container">
                    <ul className="ingredient-list" aria-live="polite">
                        {listIngredients}
                    </ul>
                </div>
                
                { props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div ref={props.ref}>
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