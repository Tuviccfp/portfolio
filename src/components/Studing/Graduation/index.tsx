import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    background-color: #7c7c8a;
    align: left;
    border-radius: 5px;
`
const Title = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: auto;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 18px;
    text-transform: Uppercase;
`
const Text = styled.text`
    color: #7c7c8a;
    font-size: 18px;
`


interface Props {
    title: string,
    text: string,
    icon_url: string
}

const Graduation: React.FC<Props> = ({ title, text, icon_url }) => {
  return (
    <Container>
      <Title>
        <Image src={icon_url} alt="Icone de um chapéu de formatura" />
        {title}
      </Title>
      <Text>Graduação: {text}</Text>
    </Container>
  );
};

export default Graduation;
