import React, { useState } from 'react';
import Container from './components/shared/Container';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Projects';
import Studing from './components/Studing';
import Contact from './components/Contact';


function App() {
  const [currentComponent, setCurrentComponent] = useState<string>('Início')
  
  const renderComponent = () => {
    switch (currentComponent) {
      case 'Início':
      return <Home />;

      case 'Projetos':
      return <Project />;

      case 'Formação':
      return <Studing />

      case 'Contatos':
      return <Contact/>
      default:
        return null
    }
  }

  return (
    <Container>
      <Header setCurrentComponent={setCurrentComponent}/>
      {renderComponent()}
    </Container>
  );
}

export default App;
