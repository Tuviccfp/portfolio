import styled from "styled-components";
import Curses, { ItemsCurse } from "./Curses";
import Graduation from "./Graduation";
import { curse1, curse2, curse3 } from "./Images";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #e1e1e6;
`
const TitleCurses = styled.h3`
    font-size: 22px;
    text-transform: uppercase;
    color: #e1e1e6;
    margin: auto;
    letter-spacing: 0.1rem;
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
            <div className="study">
                <div className="graduation">
                    <Graduation title="Faculdade Digital Descomplica" text="Ciência da Computação" icon_url="https://cdn-icons-png.flaticon.com/512/42/42972.png"/>
                </div>
                <div className="curses">
                    <TitleCurses style={{textAlign: 'center'}}>Cursos</TitleCurses>
                    <Curses itemsCurse={dataCurses}/>
                </div>
            </div>
        </Section>
    )
}

export default Studing;