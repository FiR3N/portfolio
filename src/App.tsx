import "./App.scss";
import AboutMe from "./components/Blocks/AboutMe/AboutMe";
import Contact from "./components/Blocks/Contact/Contact";
import Skills from "./components/Blocks/Skills/Skills";
import StartInfo from "./components/Blocks/StartInfo/StartInfo";
import Socials from "./components/Business/Socials/Socials";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <StartInfo />
        <AboutMe />
        <Skills />
        <Contact />
        {/* <Socials /> */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
