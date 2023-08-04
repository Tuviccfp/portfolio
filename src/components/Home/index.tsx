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
  animation: animate 3.5s linear infinite;

  @keyframes animate{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 1.2;
    }
    100%{
      opacity: 0;
    }
  }
`;


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
        <ButtonDefault click={handleClick} width={40} text="Saiba mais"/>
        {isVisible ? <About /> : ''}
    </Section>
  );
};

export default Home;

// //white-space: nowrap;
// overflow: hidden;
// width: 22em;
// animation: type 4.3s steps(60, end) infinite; 


// &:nth-child(2){
//   animation: type2 8s steps(60, end) infinite;
// }

// @keyframes type{ 
//   from { width: 0; } 
// } 

// @keyframes type2{
//   0%{width: 0;}
//   50%{width: 0;}
//   100%{ width: 100; } 