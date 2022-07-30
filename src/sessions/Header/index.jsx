import Logo from "../../components/Header/Logo";
import Menu from "../../components/Header/Menu";
import Socials from "../../components/Header/Socials";
import { ContainerHeader } from "./styles";

export default function Header() {
    return (
        <ContainerHeader>
        <Logo></Logo>
        <Menu></Menu>
        <Socials></Socials>
        </ContainerHeader>
    )
}