import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: -30px;
`;

const Item = styled.li`
    list-style: none;
`;

const Icon = styled.img`
@keyframes iconanimation {
  0% {
      width: 40px;
      height: 40px;
  }
  50% {
      width: 50px;
      height: 50px
  }
  100 {
    width: 55px;
    height: 55px;
  }
}
  background-color: #e1e1e6;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  &:hover {
    animation-name: iconanimation;
    animation-duration: 1s;
  }

`;

export interface SocialItems {
  icon: string;
  url_link: string;
}

interface Props {
    socialItems: SocialItems[]
}

const Socials: React.FC<Props> = ({ socialItems }) => {
  return (
    <List>
        {socialItems.map((item, index) => {
            return (
            <Item key={index}>
                <a href={item.url_link}>
                <Icon src={item.icon} />
                </a>
            </Item>          
            )
        })}
    </List>
  );
};

export default Socials;
