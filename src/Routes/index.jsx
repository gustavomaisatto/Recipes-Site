import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../sessions/Header'
import LineDivisor from '../components/Header/LineDivisor';
import Recipes from '../pages/Recipes';

export default function RouterReact() {
    return(
        <Router>
    <Header></Header>
    <LineDivisor></LineDivisor>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Recipes' element={<Recipes />}></Route>
    </Routes>
    </Router>
    )
}