import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./index.scss";

function App() {
  return (
    <>
      <main>
        <Header />
        <Intro />
        <Services />
      </main>
    </>
  );
}

export default App;
