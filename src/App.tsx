import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Productivity from "./components/Productivity/Productivity";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
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
          <Testimonials />
        </div>
      </main>
    </>
  );
}

export default App;
