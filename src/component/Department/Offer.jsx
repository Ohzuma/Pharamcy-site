import React from "react";
import { Data } from "./OfferData";
const Offer = () => {
  return (
    <>
   <div className="offer_main">
   <div className="offer">
        <div className="offer-header">
          <h1>Our Special Offers </h1>
          <p>START TO BE HEALTHY TODAY </p>
        </div>
        <div className="plans">
          {Data.map((data,i) => {
            const {
              headingText,
              headingNum,
              itemOne,
              itemTwo,
              itemThree,
              itemFour,
              itemFiv,
              itemSix,
              itemSeven,
              btn,
            } = data;
            return (
              <div className="plans_offer" key={i}>
                <h3>{headingText}</h3>
                <h1>
                  <span>$ </span> 
                  <span>{headingNum}</span>
                </h1>
                <p>{itemOne}</p>
                <p>{itemTwo}</p>
                <p>{itemThree}</p>
                <p>{itemFour}</p>
                <p>{itemFiv}</p>
                <p>{itemSix}</p>
                <p>{itemSeven}</p>
                <button type="button">{btn}</button>
              </div>
            );
          })}
        </div>
      </div>
   </div>
    </>
  );
};

export default Offer;
