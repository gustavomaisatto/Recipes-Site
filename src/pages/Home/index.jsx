import api from "../../services/api"
import React, {useState, useEffect} from 'react'
import { Container} from './styles'
import { RandomRecipe } from "./RandomRecipe";
import Categories from './Categories'
export default function Home() {
    const [randomRecipe, setRandomRecipe] = useState('');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = async () => { await  api.get('/lookup.php?i=52813').then((response) => {
            setRandomRecipe(response.data.meals[0])
            
        }).catch(error => console.log(error))
    }
        response()
        }
        fetchData();
        async function fetchCategories() {
            const response = async () => {await api.get('/categories.php')
            .then((response) => {
                setCategories(response.data.categories)
            })
        .catch((error) => console.log(error))}
        response();
        }
        fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(randomRecipe.strMealThumb)
    return(
        <Container>
             <RandomRecipe title={randomRecipe.strMeal} imageRandom={randomRecipe.strMealThumb} />
            <Categories categories={categories}></Categories>
        </Container>
        
    )
}