import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQItem = (fData) => {
  const [answer, setAnswer] = useState(false);

  const showAnswer = () => {
    setAnswer(!answer);
  };

  return (
    <div className='faq-item'>
      <div className='faq-question' onClick={showAnswer}>
        <h5 className='header-text question-text'>{fData.question}</h5>
        <button type='button'>
          {answer ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      <div
        className='faq-answer'
        style={{ display: answer ? "block" : "none" }}
      >
        <p className="paragraph-text answertext">{fData.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
