import './App.css';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
