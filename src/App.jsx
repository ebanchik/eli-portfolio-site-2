import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
// import { WorkJournal } from "./components/WorkJournal";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <About />
        {/* <WorkJournal /> */}
        <Footer />
    </div>
  );
}

export default App;
