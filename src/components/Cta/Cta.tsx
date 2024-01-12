import "./Cta.scss";

const Cta = () => {
  return (
    <article className="article">
      <div className="cta">
        <h3 className="cta__title">Get early access today</h3>
        <p className="cta__text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form id="form">
          <label className="input__label" htmlFor="email"></label>
          <input
            className="input__shape"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
          />
          <input
            type="submit"
            value="Get Started For Free"
            className="btn__submit"
          />
        </form>
      </div>
    </article>
  );
};

export default Cta;
