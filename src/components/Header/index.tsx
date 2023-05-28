import styled from "styled-components";
import Menu, { MenuItem } from "./Menu";

const Nav = styled.nav`
    display: flex; 
    justify-content: flex-end;
    width: 100vw;
    margin-right: 300px;
    @media (max-width: 768px) {
        margin-right: 0px;
        justify-conten: center;
    }
`
const dataMenu: MenuItem[] = [
    {text: 'Início'},
    {text: 'Projetos'},
    {text: 'Formação'},
    {text: 'Contatos'},
]

interface Props {
    setCurrentComponent: (component: string) => void
}

const Header: React.FC<Props> = ({ setCurrentComponent }) => {
    return (
        <Nav>
            <Menu setCurrentComponent={setCurrentComponent} itemsMenu={dataMenu}/>
        </Nav>
    )
}

export default Header;