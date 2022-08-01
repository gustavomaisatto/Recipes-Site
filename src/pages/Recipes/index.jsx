import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container } from "./styles";
import ForkKnife from '../../assets/ForkKnife.svg'

export default function Recipes({recipeSelect}) {
    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState('');
    function filterIngredients() {
        
            if(ingredients !== '') {
                let ingrediente  = ingredients.filter(item => item[0])
                    ingrediente.map((data) => {
                        return data
                    })
                    console.log(ingrediente)
            }
            
      
    }
    useEffect(() => {
        async function getRecipe(recipeSelect) {
            await api.get(`/lookup.php?i=${recipeSelect}`).then((response) => {
                setRecipe(response.data.meals[0])
               setIngredients(Object.keys(response.data.meals[0]).map((item) => {
                let ingredients = []
                if(item.includes('Ingredient')) {
                        ingredients.push(response.data.meals[0][item])
                    
                }
                return ingredients
            }))
                
            })
              
         }
        getRecipe(recipeSelect);

        filterIngredients();

         
    }, [])
    filterIngredients()
        return(
            <Container>
                <div id="title">
            <div id={'title-title'}>
            <h1>{recipe.strMeal}</h1>
            </div>
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
            <div id="ingredients">
            { }
            </div>
            </div>
            <div id="description">
                <h1>Instructions</h1>
            <p>{recipe.strInstructions}</p>
            </div>
            
            </Container>
        )
   
}