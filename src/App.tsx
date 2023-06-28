import "./App.scss";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <h2>hello!</h2>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
