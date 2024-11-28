
// App.js

import About from './component/About';
import BootstrapCore from './component/BootstrapCore';
import Contact from './component/Contact';
import CoreTheme from './component/CoreTheme';
import Footer from './component/Footer';
import Masthead from './component/Masthead';
import Navigation from './component/Navigation';
import Projects from './component/Projects';
import SBForms from './component/SBForms';
import { Signup } from './component/Signup';
import './css/styles.css'; 
function App() {
  return (
    <div className="App">
      <Navigation />
      <Masthead />
      <About />
      <Projects />
      <Contact />
      <SBForms />
      <Signup />
      <Footer />
      <BootstrapCore/>
      <CoreTheme/>
    </div>
  );
}

export default App;
