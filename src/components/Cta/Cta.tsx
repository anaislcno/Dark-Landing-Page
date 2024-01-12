import { useState } from "react";
import "./Cta.scss";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Please enter your email");
      return;
    } else if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <article className="article">
      <div className="cta">
        <h3 className="cta__title">Get early access today</h3>
        <p className="cta__text">
          It only takes a minute to sign up, and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form id="form" onSubmit={handleSubmit} noValidate>
          <div className="column">
            <label className="input__label" htmlFor="email"></label>
            <input
              className="input__shape"
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <small className="error__message">{emailError}</small>
          </div>
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
