import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
