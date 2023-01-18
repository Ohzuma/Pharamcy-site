import { Data } from "../About/AboutData";
import { useState } from "react";
const Faq = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="Faq-Page" >
        <div className="lh" data-aos="fade-right">
          <div className="heading">
            <span>Frequently Asked</span>
            <span>Questions</span>
            {/* <button>View All</button> */}
          </div>
        </div>
        <div className="rh" data-aos="fade-left">
          <div className="accordion_page">
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
    
    </>
  );
};

export default Faq;
