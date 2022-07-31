import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container } from "./styles";
import ForkKnife from '../../assets/ForkKnife.svg'

export default function Recipes({recipeSelect}) {
    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState('');

    useEffect(() => {
        async function getRecipe(recipeSelect) {
            await api.get(`/lookup.php?i=${recipeSelect}`).then((response) => {
                setRecipe(response.data.meals[0]) 
                
            })
              
         }
        getRecipe(recipeSelect);

  
    }, [])
        return(
            <Container>
                <div id="title">
            <h1>{recipe.strMeal}</h1>
            <h1>Ingredients</h1>
            </div>
            <div id="class">
            <p>{recipe.strArea}</p>
            <div id="category">
                <img src={ForkKnife} alt="category" />
            <p>{recipe.strCategory}</p>
            </div>
            </div>
            <div id="main">
            <img src={recipe.strMealThumb} alt="Meal Thumb" />
            {/*ingredients.map((data) => {
                    return( 
                    <div>{data}</div>
                    )
                    
                
            })*/}
            </div>
            <div id="description">
                <h1>Instructions</h1>
            <p>{recipe.strInstructions}</p>
            </div>
            
            </Container>
        )
   
}