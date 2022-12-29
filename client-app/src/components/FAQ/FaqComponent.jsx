import React from "react";
import { faqData } from "./data";
import FAQItem from "./FAQItem";
import "./styles/_faq-style.scss";

const FaqComponent = () => {
  return (
    <div className='faq-component'>
      <h1 className='header-text'>Pyetjet e shpeshta</h1>
      <div className='faq-container'>
        {faqData.map((fData, i) => {
          return <FAQItem question={fData.question} answer={fData.answer} key={i}/>;
        })}
      </div>
    </div>
  );
};

export default FaqComponent;
