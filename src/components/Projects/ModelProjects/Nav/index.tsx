import { Dropdown, DropdownButton } from "react-bootstrap";
import './style.css'

interface PropsComponent {
  props: PropsNav[];
}
export interface PropsNav {
  text: string;
  click?: () => void;
}

const renderElementP = () => {
  return (
    <p className="dropdown-item">Projetos</p>
  )
}

const Nav: React.FC<PropsComponent> = ({ props }) => {
    return (
        <DropdownButton id="dropdown-basic-button" title={renderElementP()}>
            {props.map((item, index) => (
                <Dropdown.Item key={index} onClick={item.click}>{item.text}</Dropdown.Item>
            ))}
        </DropdownButton>
        );
};

export default Nav;
