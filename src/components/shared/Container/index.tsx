import { ReactNode } from "react";
import styled from 'styled-components'

const ContDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #000000;
    font-family: 'Raleway', sans-serif;
`

interface Props {
    children: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <ContDiv>{children}</ContDiv>
    )
} 

export default Container