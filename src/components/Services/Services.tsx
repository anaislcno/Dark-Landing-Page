import "./Services.scss";
import data from "./../../data/services.json";
import Wave from "./../../assets/images/bg-curvy-desktop.svg";

interface ServicesProps {
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  return (
    <div className="wave">
      <img src={Wave} className="wave__img" />
      <section className="section-services">
        {data.map((service: ServicesProps, index: number) => (
          <div key={index} className="service">
            <img
              src={service.image}
              alt={`Illustration ${service.title}`}
              className="service__img"
            />
            <h2 className="service__title">{service.title}</h2>
            <p className="service__description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
