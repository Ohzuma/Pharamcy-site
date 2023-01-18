import About_img from "../../assets/Layer-1200.png";
import { Data } from "./AboutData";
import { useState } from "react";
const About = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="about">
      <div className="about-grid">
        <div className="about_img">
          <img src={About_img} alt="about-img" />
        </div>
        <div className="about-faq" data-aos="fade-right">
          <h1>
            <span>About</span> <span>Jevelin Clinic</span>
          </h1>
          <p>PROFESSIONAL CARE </p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem
            non sapien condimentum aliquet. Nulla facilisi. Mauris efficitur
            dolor dolor, id porta nulla interdum vitae.
          </small>
          <div className="accordion">
            {Data.map((item, i) => {
              return (
                <div className="item" key={item.id}>
                  <div
                    className={selected === i ? "title active" : "title"}
                    onClick={() => toggle(i)}
                  >
                    <h2>{item.question} </h2>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
