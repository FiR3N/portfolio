import "./App.scss";
import AboutMe from "./components/Blocks/AboutMe/AboutMe";
import Skills from "./components/Blocks/Skills/Skills";
import StartInfo from "./components/Blocks/StartInfo/StartInfo";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <StartInfo />
        <AboutMe />
        <Skills />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
