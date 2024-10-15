
import NavBar from './components/NavBar'
import  Blur from './assets/Ellipse.svg';
import Hero from './sections/HeroSection/Hero'; 
import Clients from './sections/ClientsSection/Clients'; 
import Benefits from './sections/BenefitsSection/Benefits'; 
import Features from './sections/FeaturesSection/Features'; 
import Team from './sections/TeamSection/Team'; 
import FAQ from './sections/FAQSection/FAQ'; 
import './App.css';

function App() {
  return (
    <div className="App">
    <img
        src={Blur}
        alt="Background Blur"
        className="absolute top-0 right-0 w-[550px] h-[500px] object-cover blur-lg z-[-1] pointer-events-none"
      />  
        <NavBar />
        <Hero/>
        <Clients/>
        <Benefits/>
        <Features/>
        <Team/>
        <FAQ/>
    
    </div>
  );
}



export default App;
