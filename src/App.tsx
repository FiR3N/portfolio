import "./assets/styles/app.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Layout from "./components/UI/Layout/Layout";
import { ThemeProvider } from "./contexts/Themecontext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills isSimple={false} />
        <Projects />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
