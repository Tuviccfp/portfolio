import styled from "styled-components"

const Button = styled.button<PropsStyle>`
    border: none;
    width: ${(props) => (props.width)};
    height: 43px;
    border-radius: 4px;
    background-color: #81d8f7;
    color: #000000;
    &:hover {
        background-color: #9be1fb;
    }
`
interface PropsStyle {
    width?: number
}

interface Props {
    text: string
    click?: () => void
    width?: number
}
const ButtonDefault: React.FC<Props> = ({ click, text, width }) => {
    return (
        <Button width={width} onClick={click}>{text}</Button>
    )
}

export default ButtonDefault;
