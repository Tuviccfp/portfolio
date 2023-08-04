import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";

const Title = styled.h5`
    color: black;
    font-weight: bold;
    font-size: 28px;
    border: 1px solid transparent;
    height: 5%;
    background-color: whitesmoke;
    margin-bottom: 30px;
    border-radius: 5px;
`
const H5 = styled.h5`
  color: #e1e1e6;
  text-align: center;
`
const Description = styled.p`
  color: #e1e1e6;
  text-align: center;
`
const Link = styled.p`
  text-align: center;
  color: #e1e1e6
`

interface Props {
  description?: string;
  img?: string;
  video?: string;
  video2?: string;
  display?: string;
  link_url?: string;
  tech1?: string;
  tech2?: string;
  tech3?: string;
}

const P1: React.FC<Props> = ({
  description,
  img,
  video,
  video2,
  display,
  link_url,
  tech1,
  tech2,
  tech3,
}) => {""
  return (
    <Carousel className="carousel" controls>
        <Carousel.Item className="carousel-item">
          <div>
            <video className="item-video" width="800" height="445" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "450px"}}>
            <H5>Funcionalidades & mais...</H5>
            <Description>{description}</Description>
            <Link>Para ler a documentação do projeto, clique <a href={link_url}>aqui</a>.</Link>
            <H5>Linguagens utilizada:</H5>
            <ul style={{listStyle: "none", color: "#e1e1e6"}}>
              <li>
                {tech1}
              </li>
              <li>
                {tech2}
              </li>
              <li>
                {tech3}
              </li>
              <li>
                {}
              </li>
            </ul>
          </div>
        </Carousel.Item>

        <Carousel.Item className="carousel-item" style={{ display: display }}>
          <div>
            <video className="item-video" width="800" height="445" controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>
      </Carousel>
  );
};

export default P1;