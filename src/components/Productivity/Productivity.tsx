import "./Productivity.scss";
import ProductivityIllustration from "./../../assets/images/illustration-stay-productive.png";
import Arrow from "./../../assets/images/icon-arrow.svg";

const Productivity = () => {
  return (
    <section className="productivity">
      <img className="productivity__img" src={ProductivityIllustration} />
      <div className="description">
        <h1 className="description__title">
          Stay productive, wherever you are
        </h1>
        <p className="description__p">
          Never let location an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br /> <br /> Securely
          share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>
        <a className="description__link" href="#">
          See how Fylo works <img src={Arrow} className="description__arrow" />
        </a>
      </div>
    </section>
  );
};

export default Productivity;
