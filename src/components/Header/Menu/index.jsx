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
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>About Us</MenuItem>
      </Container>  
    )
}


const linkStyle = {
    textDecoration: "none",
    color: 'blue',
    cursor: 'pointer'
  };