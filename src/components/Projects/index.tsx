import styled from "styled-components";
import PinnedRepo from "./ModelProjects";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  @media (max-width: 725px) {
    height: 900px;
    background-color: black;
    margin: 0px;
    width: 100vw;
  }
`;

const Title = styled.h4`
  font-size: 28px;
  color: #e1e1e6;
  margin: 0px;
  @media (max-width: 725px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 20px;
  color: #7c7c8a;
  text-align: center;
  width: 70vw;
  @media (max-width: 725px) {
    font-size: 18px;
  }
`;

const Project: React.FC = () => {
  return (
    <Section>
      <Title>Uma coleção de projetos já realizados.</Title>
      <Text>
        Nesta seção, você encontrará uma seleção dos meus trabalhos concluídos.
        De designs elegantes à projetos criativos, utilizando tudo que aprendi
        na minha jornada, aqui está no que eu acho ser o melhor dos meus
        projetos. Explore e descubra minha paixão expressa através dos meus
        trabalhos.
      </Text>
      <PinnedRepo />
    </Section>
  );
};

export default Project;
