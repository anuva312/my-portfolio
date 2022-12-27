import "./App.css";
import Waves from "./components/Waves";
import Header from "./components/Header";

function App() {
  const onSectionClicked = function (sectionName) {
    console.log("Clicked on section", sectionName);
  };
  return (
    <div>
      <Waves />
      <Header onClickNavItem={onSectionClicked} />
    </div>
  );
}

export default App;
