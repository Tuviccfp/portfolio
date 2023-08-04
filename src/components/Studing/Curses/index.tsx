import styled from "styled-components"

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 725px) {
        grid-template-columns: repeat(1, 1fr);  
    }
`
const Image = styled.img`
 width: 180px;
 height: 100px;
 border-radius: 5px;
`
const Item = styled.li`
    list-style: none;
    text-align: center;
`
const Title = styled.h4`
    font-size: 18px;
    color: #e1e1e6;
    text-transform: Uppercase;
`
const SubTitle = styled.h4`
    font-size: 16px;
    color: #c4c4cc;
    margin: auto;
`
export interface ItemsCurse {
    institution: string,
    name: string,
    icon_url: string,
    icon_alt: string,
    started: number | string,
    finish: number | string,
}

interface Props {
    itemsCurse: ItemsCurse[]
}

const Curses: React.FC<Props> = ({ itemsCurse }) => {
    return (
       <List>
            {itemsCurse.map((item, index) => {
                return (
                    <Item key={index}>
                        <Image src={item.icon_url} alt=""/>
                        <Title>{item.name}</Title>
                        <SubTitle>{item.institution}</SubTitle>
                        <p>Início: {item.started}</p>
                        <p>Fim: {item.finish}</p>
                    </Item>
                )
            })}
       </List>
    )
}

export default Curses;