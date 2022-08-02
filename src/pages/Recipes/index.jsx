import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container } from "./styles";
import ForkKnife from '../../assets/ForkKnife.svg'

export default function Recipes({recipeSelect}) {
    const [recipe, setRecipe] = useState('');
    const [ingredients, setIngredients] = useState('');
    async function filterIngredients() {
        await api.get(`/lookup.php?i=${recipeSelect}`).then((response) => {
            const data = response.data.meals[0]
          setIngredients(Object.keys(data).map(item => {
            if(item.includes('Ingredient')) {
                return data[item]
            }
            
          }).filter(dataFilter => {
            return dataFilter
          })) 
          
            
        })
      
    }
    async function getRecipe() {
        await api.get(`/lookup.php?i=${recipeSelect}`).then((response) => {
            setRecipe(response.data.meals[0])
        })
          
     }
    useEffect(() => {
        
        getRecipe()
        filterIngredients()

         
    }, [])
        return(
            <Container>
                <div id="title">
            <div id={'title-title'}>
            <h1>{recipe.strMeal}</h1>
            <a  href={recipe.strSource} target={'_blank'} rel="noreferrer"><p className="recipeLink">Recipe Link</p></a>
            <a  href={recipe.strYoutube} target={'_blank'} rel="noreferrer"><p className="recipeLink">Youtube Link</p></a>
            </div>
            <h1 id="ingredients-title">Ingredients</h1>
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
            {ingredients !== '' && ingredients.map((data) => {
                    return( 
                    <div className="ingredientData">{data}</div>
                    )
                    
                
            })}
            </div>
            </div>
            <div id="description">
                <h1>Instructions</h1>
            <p>{recipe.strInstructions}</p>
            </div>
            
            </Container>
        )
   
}