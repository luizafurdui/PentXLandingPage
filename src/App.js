
import NavBar from './components/NavBar'
import  Blur from './assets/Ellipse.svg';

import './App.css';

function App() {
  return (
    <div className="App">
    <img
        src={Blur}
        alt="Background Blur"
        className="absolute top-0 right-0 w-[550px] h-[500px] object-cover blur-lg z-[-1] pointer-events-none"
      />      <NavBar />
    
    </div>
  );
}



export default App;
