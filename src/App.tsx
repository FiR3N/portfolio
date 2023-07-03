import "./App.scss";
import StartInfo from "./components/Blocks/StartInfo/StartInfo";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <StartInfo />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
