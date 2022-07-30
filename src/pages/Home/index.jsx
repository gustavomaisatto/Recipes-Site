import api from "../../services/api"
import React, {useState, useEffect} from 'react'
import { Container} from './styles'
import { RandomRecipe } from "./RandomRecipe";
import { getRandom } from "../../services/api";
export default function Home() {
    const [randomRecipe, setRandomRecipe] = useState('');
    useEffect(() => {
        async function fetchData() {
          const response = async () => { await  api.get('/lookup.php?i=52813').then((response) => {
            setRandomRecipe(response.data.meals[0])
            
        }).catch(error => console.log(error))
    }
        response()
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(randomRecipe.strMealThumb)
    return(
        <Container>
            { randomRecipe !== '' && <RandomRecipe title={randomRecipe.strMeal} imageRandom={randomRecipe.strMealThumb} />}
        </Container>
        
    )
}