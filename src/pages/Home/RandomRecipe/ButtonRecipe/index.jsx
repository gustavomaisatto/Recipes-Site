import {ButtonView} from './styles'
import playButton from '../../../../assets/playButton.svg'
import {Link} from 'react-router-dom'
export default function ButtonRecipe({categorySelect, setRecipeSelect}) {
    return (
        <Link to={'/Recipes'} style={linkStyle}>
        <ButtonView onClick={() => setRecipeSelect(categorySelect)}><img src={playButton} alt='play'></img>View Recipe</ButtonView>
        </Link>
    )
}

const linkStyle = {
    textDecoration: "none",
    color: 'blue',
    cursor: 'pointer'
    
  };