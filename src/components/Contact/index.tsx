import styled from "styled-components";
import Socials, { SocialItems } from "../Home/Socials";

const Title = styled.h4`
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  color: #e1e1e6;
  @media (max-width: 725px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  color: #7c7c8a;
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 550px) {
    padding: 10px;
    font-size: 20px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  height: 100vh;
`;

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

const Contact: React.FC = () => {
  return (
    <Section>
      <Title>Gostaria de entrar em contato?</Title>
      <Text>
        Abaixo está uma lista das minhas redes sociais, me envie uma mensagem em caso de dúvida ou se desejar fazer algum orçamento.
      </Text>
      <Socials socialItems={socialData}/>
    </Section>
  );
};

export default Contact;
