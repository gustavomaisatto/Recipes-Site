import {Container} from './styles'
import categoriesImage from '../../../assets/categoriesImage.svg'
export default function Categories({categories}) {
    return (
        <Container>
            <div id="header">
            <h1>Categories</h1>
            <button>View All Categories</button>
            </div>
            <div id='container-categories'>
           {
            categories.map((data)=> {
                return (
                <div className='category'>
                    <img src={data.strCategoryThumb} alt='category'></img>
                <p key={data.idCategory}>{data.strCategory}</p>
                </div>
                )
            })
           }
           </div>
        </Container>
    )
}