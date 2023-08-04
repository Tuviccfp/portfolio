import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Nav, { PropsNav } from "./Nav";
import P1 from "../P1";
const p1Video = require("./vd/p1.mp4");
const p2video = require("./vd/valentim1.mp4");
const p2video2 = require("./vd/valentim2.mp4");
const p3video = require("./vd/aluratube1.mp4");
const p3video2 = require("./vd/aluratube2.mp4");
const p4video1 = require("./vd/project4.mp4");
const p5video1 = require("./vd/project5.mp4");

const Container = styled.div`
  width: 1520px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 725px) {
    width: 100vw;
    height: 100vh;
    background-color: black;
  }
  .info {
    @media (max-width: 725px) {
      width: 100vw;
      height: 100vh;
      margin: 0px;
      background-color: black;
    }
  }
  .text-info {
    
  }
`;

const PinnedRepo: React.FC = () => {
  const [activeProject, setActiveProject] = useState<String | null>(null);
  const [key, setKey] = useState<number>(0);

  const handleClickProject = (project: String | null) => {
    setActiveProject(project);
    setKey((prevKey) => prevKey + 1); // Incrementa a chave única ao trocar de componente
  };

  const infoNav: PropsNav[] = [
    {
      text: "Perguntas & Respostas",
      click: () => {
        setActiveProject("project1");
        handleClickProject("project1");
      },
    },
    {
      text: "Valentim Negri",
      click: () => {
        setActiveProject("project2");
        handleClickProject("project2");
      },
    },
    {
      text: "AluraTube",
      click: () => {
        setActiveProject("project3");
        handleClickProject("project3");
      },
    },
    {
      text: "Projeto 4",
      click: () => {
        setActiveProject("project4");
        handleClickProject("project4");
      },
    },
    {
      text: "Projeto 5",
      click: () => {
        setActiveProject("project5");
        handleClickProject("project5");
      },
    },
    {
      text: "Projeto 6",
      click: () => {
        setActiveProject("project6");
        handleClickProject("project6");
      },
    },
  ];

  const renderProjectComponent = () => {
    if (activeProject === "project1") {
      return (
        <P1
          key={key}
          description="Aplicação de perguntas e respostas, você posta uma pergunta, a mesma é armazenada em um banco de dados e depois exibida na página principal da aplicação. Você pode aguardar uma resposta de uma outra pessoa, ou você mesmo pode responder, as respostas funcionam da mesma forma que as perguntas, são lidas e armazenadas em um banco, tudo acontecendo atráves de um servidor node."
          video={p1Video}
          display="none"
          tech1="React/TypeScript"
          tech2="NodeJs/TypeScript"
          tech3="Mongoose"
          link_url="https://github.com/Tuviccfp/GuiaPerguntas2.0-front/blob/main/README.md"
        />
      );
    }
    if (activeProject === "project2") {
      return (
        <P1
          key={key}
          description="Uma aplicação profissional que fiz para a lavanderia do meu bairro, nele contém seções que demonstram o tipo de serviço realizado, uma área de perguntas frequentes, uma pequena aplicação NodeJs rodando na parte de depoimentos, ela tá responsável em armazenar os depoimentos do cliente conforme a sua experiência com o estabelecimento."
          video={p2video}
          video2={p2video2}
          tech1="React"
          tech2="NodeJs"
          tech3="Mongoose"
        />
      );
    }
    if (activeProject === "project3") {
      return (
        <P1
          key={key}
          description='Uma pequena aplicação realizada em um evento da rocketseat, ela é um protótipo de um perfil(canal) no youtube, exibindo alguns vídeos selecionados por mim como "favoritos", você pode fazer uma busca de vídeos. Os dados consumidos vem de uma API mocada (local) da aplicação.'
          video={p3video}
          video2={p3video2}
          tech1="React"
          link_url="https://github.com/Tuviccfp/AluraTube/blob/main/README.md"
        />
      );
    }
    if (activeProject === "project4") {
      return (
        <P1
          key={key}
          description=""
          video={p4video1}
          display="none"
          tech1=""
          tech2=""
          tech3=""
          link_url="https://github.com/Tuviccfp/GuiaPerguntas2.0-front/blob/main/README.md"
        />
      );
    }
    if (activeProject === "project5") {
      return (
        <P1
          key={key}
          description=""
          video={p5video1}
          display="none"
          tech1=""
          tech2=""
          tech3=""
          link_url=""
        />
      );
    }
    if (activeProject === "project6") {
      return <P1 key={key} />;
    }
    return null;
  };

  return (
    <Container>
      <Nav props={infoNav} />
      <div
        style={{
          width: "800px",
          height: "450px",
          marginRight: "5px",
          marginTop: "50px",
        }}
        className="info"
      >
        <p
          className="text-info"
          style={{
            color: "#7c7c8a",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "0px",
          }}
        >
          Clique nos projetos abaixo para serem exibidos.
        </p>
        {renderProjectComponent()}
      </div>
    </Container>
  );
};

export default PinnedRepo;
