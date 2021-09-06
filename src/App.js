import 'normalize.css';
import './styles/globals.css';
import Hero from "./components/Hero/Hero";
import {Container} from "./app.styles";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Container>
      <Hero />
      <Skills />
      <Education />
      <Portfolio />
      <Contacts />
    </Container>
  );
}

export default App;
