import "./App.css";
import Waves from "./components/Waves";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const onSectionClicked = function (sectionName) {
    const section = document.querySelector(`#${sectionName}`);
    console.log("Inside on click section", section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div>
      <Waves />
      <Header onClickNavItem={onSectionClicked} />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
