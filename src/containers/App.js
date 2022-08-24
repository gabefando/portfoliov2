import './App.css';
// import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Articles from '../components/Articles';
import Links from '../components/Links';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Navbar /> */}
        <About />
        <Projects />
        <Articles />
        <Links />
      </div>
    </div>
  );
}

export default App;
