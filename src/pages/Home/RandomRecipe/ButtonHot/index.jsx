import {Button} from './styles'
import hotButton from '../../../../assets/hotButton.svg'
export default function ButtonHot() {
    return(
        <Button>
            <img src={hotButton} alt='imagem do botão hot recipes'></img>
            Hot Recipes</Button>
    )
}