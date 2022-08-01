import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../sessions/Header'
import LineDivisor from '../components/Header/LineDivisor';
import Recipes from '../pages/Recipes';
import {useState} from 'react'

export default function RouterReact() {
    const [recipeSelect, setRecipeSelect] = useState('52813');
    return(
        <Router basename={process.env.PUBLIC_URL}>
    <Header></Header>
    <LineDivisor></LineDivisor>
    <Routes>
      <Route path='/' element={<Home setRecipeSelect={setRecipeSelect} />}></Route>
      <Route path='/Recipes' element={<Recipes setRecipeSelect={setRecipeSelect} recipeSelect={recipeSelect} />}></Route>
    </Routes>
    </Router>
    )
}