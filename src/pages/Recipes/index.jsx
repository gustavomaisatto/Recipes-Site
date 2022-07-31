import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container } from "./styles";
import ForkKnife from '../../assets/ForkKnife.svg'

export default function Recipes({recipeSelect}) {
    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState([]);
    function getIngredients() {
                for(let i = 0; i < 20; i++) {
                    setIngredients([...ingredients, recipe.strIngredient1])
                }
            
            
        
    }
    useEffect(() => {
        async function getRecipe() {
            api.get(`/lookup.php?i=${recipeSelect}`)
            .then((response) => {
                setRecipe(response.data.meals[0])
                
            })
        }
        getRecipe() 
        getIngredients()
        
    }, [])
    console.log(ingredients)
    console.log(recipe)
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
        {ingredients.map((data) => {
            return <div>{data} </div>
        })}
        </div>
        <div id="description">
            <h1>Instructions</h1>
        <p>{recipe.strInstructions}</p>
        </div>
        
        </Container>
    )
}