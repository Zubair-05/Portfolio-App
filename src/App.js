import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from 'theme-ui';
import theme from './theme'; // Import your custom theme
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {


  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}<div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        <ScrollToTopButton/>
      </div>
    </ThemeProvider>

  );
}

export default App;
