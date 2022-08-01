import {Container, MenuItem} from './styles'
import {Link} from 'react-router-dom'
export default function Menu() {
    return (
      <Container>
        <Link to={'/'} style={linkStyle}>
        <MenuItem>Home</MenuItem>
        </Link>
        <Link to={'/Recipes'} style={linkStyle}>
        <MenuItem>Recipes</MenuItem>
        </Link>
        <a href='https://gustavomaisatto.github.io/Recipes-Site/'><MenuItem>Blog</MenuItem></a>
        <a href='https://gustavomaisatto.github.io/Recipes-Site/'><MenuItem>Contact</MenuItem></a>
        <a href='https://gustavomaisatto.github.io/Recipes-Site/'><MenuItem>About Us</MenuItem></a>
      </Container>  
    )
}


const linkStyle = {
    textDecoration: "none",
    color: 'blue',
    cursor: 'pointer',
  };