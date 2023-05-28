import { useState } from "react";
import styled from "styled-components";
import Socials, { SocialItems } from "./Socials";
import ButtonDefault from "../shared/ButtonDefault";
import About from "./About";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


const Title = styled.h3`
  color: #e1e1e6;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
`;
const Subtitle = styled.h5`
  color: #c4c4cc;
  text-align: center;
  font-size: 16px;
`;

const Test = styled.div`
white-space: nowrap;
  overflow: hidden;
  width: 22em;
  animation: type 4.3s steps(60, end) infinite; 


  &:nth-child(2){
    animation: type2 8s steps(60, end) infinite;
  }
  
  @keyframes type{ 
    from { width: 0; } 
  } 
  
  @keyframes type2{
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; } 
`;


// Dados para o componente Socials
const socialData: SocialItems[] = [
  {
    icon: "https://cdn.icon-icons.com/icons2/2716/PNG/512/whatsapp_logo_icon_172797.png",
    url_link: "https://wa.me/+5521964818546",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    url_link: "https://github.com/Tuviccfp",
  },
  {
    icon: "https://www.svgrepo.com/show/364604/instagram-logo-fill.svg",
    url_link: "https://www.instagram.com/cordtuvicdev/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733635.png",
    url_link: "https://twitter.com/DevTuvic",
  },
];

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <Section>
      <Test>
        <Title>Victor Cordeiro Fraguas</Title>
        <Subtitle>Full Stack Developer</Subtitle>
      </Test>
        <Socials socialItems={socialData} />
        <ButtonDefault click={handleClick} width={40} text="Saiba mais"/>
        {isVisible ? <About /> : ''}
    </Section>
  );
};

export default Home;
