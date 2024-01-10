import "./Testimonials.scss";
import QuotationMark from "./../../assets/images/bg-quotes.png";
import Satish from "./../../assets/images/profile-1.jpg";
import Bruce from "./../../assets/images/profile-2.jpg";
import Iva from "./../../assets/images/profile-3.jpg";

function Testimonials() {
  const testimonialData = [
    { name: "Satish Patel", image: Satish },
    { name: "Bruce McKenzie", image: Bruce },
    { name: "Iva Boyd", image: Iva },
  ];
  const commonText = [
    "Fylo has improved our team productivity by an order of magnitude. Since the switch our team has become a well-oiled collaboration machine.",
  ];
  const commonRole = ["Founder & CEO, Huddle"];

  return (
    <section className="testimonials">
      <img className="testimonials__quote" src={QuotationMark} />
      <div className="cards__container">
        {testimonialData.map((testimonial, index) => (
          <div className="cards" key={index}>
            <p className="cards__text">{commonText}</p>
            <div className="cards__profile">
              <img
                src={testimonial.image}
                className="cards__img"
                alt={`Picture ${testimonial.name}`}
              />
              <div className="cards__person">
                <h3 className="cards__name">{testimonial.name}</h3>
                <p className="cards__role">{commonRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
