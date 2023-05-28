import React from "react";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    list-style: none;
    @media (max-width: 768px) {
      gap: 10px;
      margin-right: 6px;
    }
`
const Item = styled.li`
    color: #e1e1e6;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    cursor: pointer;
    margin: auto;
    background-image: linear-gradient(
          transparent 0%,
          transparent 90%,
          #c4c4cc 98%,
          #c4c4cc 100%
        );
        background-repeat: no-repeat;
        background-size: 0% 100%;
        background-position-x: right;
        transition: background-size 300ms;
        &:hover {
          background-size: 100% 100%;
          background-position-x: left;
        }
      }
    }
`

export interface MenuItem {
  text: string
}

interface Props {
  itemsMenu: MenuItem[],
  setCurrentComponent: (component: string) => void
}

const Menu: React.FC<Props> = ({ itemsMenu, setCurrentComponent }) => {
  const handleClick = (component: string) => {
    setCurrentComponent(component)
  }

  return (
    <List>
      {itemsMenu.map((item, index) => {
        return (
          <Item onClick={() => handleClick(item.text)} key={index}>{item.text}</Item>
        )
      })}
    </List>
  );
};

export default Menu;
