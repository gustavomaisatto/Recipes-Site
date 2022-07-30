import api from "../../services/api"
import React, {useState, useEffect} from 'react'
import { Container} from './styles'
import { RandomRecipe } from "./RandomRecipe";
import Categories from './Categories'
import {Link} from 'react-router-dom'
export default function Home({setRecipeSelect}) {
    const [randomRecipe, setRandomRecipe] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('Beef');
    const [categorySelected, setCategorySelected] = useState([]);
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
    useEffect(() => {
        async function fetchCategory() {
            await api.get(`/filter.php?c=${category}`)
            .then((response) => {
                setCategorySelected(response.data.meals)
            })
        }
        fetchCategory()
    }, [category])
    console.log(categorySelected)
    console.log(randomRecipe.strMealThumb)
    return(
        <Container>
             <RandomRecipe title={randomRecipe.strMeal} imageRandom={randomRecipe.strMealThumb} />
            <Categories setCategory={setCategory} categories={categories}></Categories>
            <p id="name-category">{category}</p>
            <div id="categorySelected">
            {categorySelected !== [] && categorySelected.map((category) => {
                return <Link to={'/Recipes'}  style={linkStyle}><div className="filterCategory" onClick={() => setRecipeSelect(category.idMeal)} key={category.idMeal}>
                    <img src={category.strMealThumb} alt={`${category.strMeal}`}></img>
                    <p>{category.strMeal}</p>
                    </div>
                    </Link>
            })}
            
            </div>
        </Container>
        
    )
}

const linkStyle = {
    textDecoration: "none",
    color: 'blue',
    cursor: 'pointer'
    
  };