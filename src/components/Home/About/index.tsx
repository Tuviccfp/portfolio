import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const cursorAnimation = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`;

const Container = styled.div``;

const AnimatedText = styled.p`
  color: #c4c4cc;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  width: 30vw;
  text-align: center;
  margin-top: 30px;
  white-space: pre-line; /* Mantém as quebras de linha */
`;

const Cursor = styled.span`
  display: inline-block;
  background-color: white;
  margin-left: 2px;
  height: 25px;
  width: 4px;
  animation: ${cursorAnimation} 0.4s infinite;
`;

const About: React.FC = () => {
  const text = `Me chamo Victor, nascido no Rio de Janeiro.
  Tenho 26 anos de idade.
  Durante a pandemia, decidi me dedicar a um sonho, que era estudar Tecnologia.
  Dentre as oportunidades que ela tem a nos oferecer, escolhi ser programador e desde então venho me aprimorando ao máximo.
  Sempre é muito gratificante aprender algo novo e colocá-lo em prática.`;

  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const typeText = () => {
      if (isMounted && currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text.charAt(currentIndex));
        currentIndex++;
        setTimeout(typeText, 100); // Tempo entre cada caractere digitado
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [text]);

  return (
    <Container>
      <AnimatedText>
        {currentText}
        <Cursor />
      </AnimatedText>
    </Container>
  );
};

export default About;
