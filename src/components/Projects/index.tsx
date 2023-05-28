import styled from "styled-components";
import PinnedRepo from "./Repo";

const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h4`
    font-size: 32px;
    color: #e1e1e6;
    letter-spacing: 0.1rem;
    margin: 0px;
`

const Text = styled.p`
    font-size: 24px;
    color: #7c7c8a;
    text-align: center;
    width: 70vw;
`

const Project: React.FC = () => {
  return (
    <Section>
      <Title>Uma coleção de projetos já realizados.</Title>
      <Text>
        Nesta seção, você encontrará uma seleção dos meus trabalhos concluídos.
        De designs elegantes a projetos criativos, utilizando tudo que aprendi
        na minha jornada, aqui está no que eu acho ser o melhor dos meus
        projetos. Explore e descubra minha paixão expressa através dos meus
        trabalhos.
      </Text>
      <PinnedRepo />
    </Section>
  );
};

export default Project;