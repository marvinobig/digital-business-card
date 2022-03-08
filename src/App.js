import Header from "./components/Header";
import Title from "./components/Title";
import SocialBtn from "./components/SocialBtns";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Socials";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Title />
      <SocialBtn />
      <About />
      <Interests />
      <Socials />
    </div>
  );
}

export default App;
