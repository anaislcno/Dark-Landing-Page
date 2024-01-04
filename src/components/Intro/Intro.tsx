import "./Intro.scss";
import IntroIllustration from "./../../assets/images/illustration-intro.png";

const Intro = () => {
  return (
    <div className="intro">
      <img
        src={IntroIllustration}
        alt="Introduction illustration"
        className="intro__img"
      />
      <h1 className="intro__title">
        All you files in one secure location, accessible anywhere
      </h1>
      <p className="intro__text">
        Fylo stores all your most important files in one secure location. Acess
        them wherever you need, share and collaborate with friends, family, and
        co-workers
      </p>
      <button className="intro__cta">Get Started</button>
    </div>
  );
};

export default Intro;
