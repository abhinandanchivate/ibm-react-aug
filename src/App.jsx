//import "./App.css";
import Alert from "./core/components/layouts/Alert";
import Footer from "./core/components/layouts/Footer";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";
import RootRouter from "./RootRouter";

function App() {
  const appName = "MyConnector";

  return (
    <>
      <Header appName={appName} />
      <Alert />
      <RootRouter />
      <Footer />
    </>
  );
}

export default App;
