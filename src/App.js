import "./App.css";
import Waves from "./components/Waves";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const onSectionClicked = function (sectionName) {
    console.log("Clicked on section", sectionName);
  };
  return (
    <div>
      <Waves />
      <Header onClickNavItem={onSectionClicked} />
      <About />
    </div>
  );
}

export default App;
