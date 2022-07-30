import {ButtonView} from './styles'
import playButton from '../../../../assets/playButton.svg'
export default function ButtonRecipe() {
    return (
        <ButtonView><img src={playButton} alt='play'></img>View Recipe</ButtonView>
    )
}