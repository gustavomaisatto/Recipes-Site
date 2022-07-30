import {Container, SocialImage} from './styles.js'
import instagram from '../../../assets/instagramLogo.svg'
import facebook from '../../../assets/facebookLogo.svg'
import twitter from '../../../assets/twitterLogo.svg'
export default function Socials() {
    return (
        <Container>
            <SocialImage src={facebook} />
            <SocialImage src={twitter}  />
            <SocialImage src={instagram}  />
        </Container>
    )
}