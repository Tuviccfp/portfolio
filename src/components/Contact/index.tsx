import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ButtonDefault from "../shared/ButtonDefault";
import axios from "axios";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  height: 100vh;
`;

const Title = styled.h4`
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  color: #e1e1e6;
`;
const Text = styled.p`
  color: #7c7c8a;
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 550px) {
    padding: 10px;
  }
`;
const Form = styled.form`
  margin: auto;
`;
const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: none;
`;
const Label = styled.label`
  text-transform: uppercase;
  margin: 3px;
  letter-spacing: 0.1rem;
  font-size: 15px;
`;
const Input = styled.input`
  width: 400px;
  height: 48px;
  padding-horizontal: 16px;
  border-radius: 4px;
  margin-bottom: 15px;
  &:focus {
    border: 3px solid #9be1fb;
  }
  &:hover {
    border: 3px solid #9be1fb;
  }
  @media (max-width: 550px) {
  }
`;
const TextArea = styled.textarea`
  width: 400px;
  height: 108px;
  padding-horizontal: 16px;
  border-radius: 4px;
  &:focus {
    border: 3px solid #9be1fb;
  }
  &:hover {
    border: 3px solid #9be1fb;
  }
`;

interface StyledComponentsProps {
  visible: boolean;
}
const ModelAproved = styled.div<StyledComponentsProps>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  margin: auto;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: green;
  width: 10vw;
  height: 4vh;
  color: #000000;
  padding: 10px;
  margin-top: 8px;
  text-align: center;
  align-items: center;
`;

const ModelError = styled.div<StyledComponentsProps>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  margin: auto;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: red;
  width: 10vw;
  height: 4vh;
  color: #e1e1e6;
  padding: 10px;
  margin-top: 8px;
  text-align: center;
  align-items: center;
`;

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [aproved, setAproved] = useState<string>("");
  const [isVisibleAproved, setIsVisibleAproved] = useState<boolean>(false);
  const [isVisibleError, setIsVisibleError] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name == '' || email == '' || subject == '' || message == '') {
      setError('Não é permitido campos vázios.')
      setIsVisibleError(true)
      setTimeout(() => {
        setIsVisibleError(false)
      }, 4000)
    }

    await axios
      .post("http://localhost:8080/api/contact", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((result) => {
        console.log("Enviado", result);
        setAproved("E-mail enviado com sucesso.");
        setIsVisibleAproved(true);
        setTimeout(() => {
          setIsVisibleAproved(false);
        }, 4000);
      })
      .catch((error) => {
        console.log("Erro ao enviar", error);
        setError('Erro ao enviar o e-mail.')
      });
  };

  return (
    <Section>
      <Title>Gostaria de entrar em contato?</Title>
      <Text>
        Para entrar em contato comigo, basta enviar seu nome, e-mail e uma
        mensagem se desejar.
      </Text>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Label htmlFor="email">Seu Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="joao@exemplo.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Label htmlFor="subject">Assunto:</Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Exemplo: Orçamento"
            value={subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
          />
          <Label htmlFor="mensagem">Mensagem:</Label>
          <TextArea
            name="mensagem"
            id="mensagem"
            cols={15}
            rows={5}
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          ></TextArea>
        </Fieldset>
        <ButtonDefault text="Enviar" />
      </Form>
      {aproved && <ModelAproved visible={isVisibleAproved}>{aproved}</ModelAproved>}
      {error && <ModelError visible={isVisibleError}>{error}</ModelError>}          
    </Section>
  );
};

export default Contact;
