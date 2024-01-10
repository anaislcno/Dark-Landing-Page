import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Productivity from "./components/Productivity/Productivity";
import Services from "./components/Services/Services";
import "./index.scss";

function App() {
  return (
    <>
      <main>
        <Header />
        <Intro />
        <div className="bg-main">
          <Services />
          <Productivity />
        </div>
      </main>
    </>
  );
}

export default App;
