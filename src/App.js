import "./App.css";
import CompaniesLogos from "./components/CompaniesLogos";
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
      <CompaniesLogos />
    </div>
  );
}

export default App;
