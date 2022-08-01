import {Container} from './styles'
import categoriesImage from '../../../assets/categoriesImage.svg'
export default function Categories({categories, setCategory}) {
    return (
        <Container>
            <div id="header">
            <h1>Categories</h1>
            </div>
            <div id='container-categories'>
           {
            categories.map((data)=> {
                return (
                <div key={data.idCategory} className='category' onClick={() => setCategory(data.strCategory)}>
                    <img src={data.strCategoryThumb} alt='category'></img>
                <p>{data.strCategory}</p>
                </div>
                )
            })
           }
           </div>
        </Container>
    )
}