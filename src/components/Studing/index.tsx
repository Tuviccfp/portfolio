import styled from "styled-components";
import Curses, { ItemsCurse } from "./Curses";
import Graduation from "./Graduation";
import { curse1, curse2, curse3 } from "./Images";

const Section = styled.section`
    height: 100vh;
    width: 100vw;
    color: #e1e1e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 725px) {
        height: 900px;
        background-color: black;
    }
    .study{
        width: 70vw;
    }
`
const TitleCurses = styled.h3`
    font-size: 22px;
    text-transform: uppercase;
    color: #e1e1e6;
    text-align: center;
    margin: auto;
    letter-spacing: 0.1rem;
    @media (max-width: 725px) {
        font-size: 20px;
        text-align: center;
    }
`
// Data items curse.
const dataCurses: ItemsCurse[] = [
    {institution: "Udemy/Cod3r", name: "Curso Web Moderno", icon_url: curse1 , icon_alt: "icon-curse", started: 20+"/"+11+"/"+2021, finish: 20+"/"+11+"/"+2023},
    {institution: "Udemy/Cod3r", name: "React Native", icon_url: curse2, icon_alt: curse2, started: 20+"/"+0+9+"/"+2022, finish: 20+"/"+0+9+"/"+2024},
    {institution: "Udemy/Nélio Alves", name: "C# Completo", icon_url: curse3, icon_alt: "", started: 20+"/"+11+"/"+2021, finish: 20+"/"+11+"/"+2023},
]

const Studing: React.FC = () => {
    return (
        <Section>
            <center>
                <div className="study">
                    <div className="graduation">
                        <Graduation title="Faculdade Digital Descomplica" text="Ciência da Computação" icon_url="https://cdn-icons-png.flaticon.com/512/42/42972.png"/>
                    </div>

                    <div className="curses">
                        <TitleCurses>Cursos</TitleCurses>
                        <Curses itemsCurse={dataCurses} />
                    </div>

                    <div style={{textAlign: 'center'}}>
                        <h5>Para mais informações, acesse meu <a href="#">linkedin</a>.</h5>
                    </div>
                </div>    
            </center>
        </Section>
    )
}

export default Studing;