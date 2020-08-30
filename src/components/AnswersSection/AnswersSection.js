import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { pickRandomElementFromArray } from "../../Utills/Utills";
import "./AnswerSection.css";

const AnswersSection = ({ optionsArray, resetQuestionAndOptions }) => {
  let [answer, setAnswer] = useState(pickRandomElementFromArray(optionsArray));

  const history = useHistory();

  return (
    <section className="container">
      <div className="flex-container">
        <ul className="col-1 bold-txt-list">
          <h2>Options List</h2>
          {optionsArray.length > 0
            ? optionsArray.map((option, idx) => {
                if (answer.name === option.name) {
                  return (
                    <li
                      key={idx}
                      className="answer"
                    >{`${option.name} : ${option.value}`}</li>
                  );
                }
                return <li key={idx}>{`${option.name} : ${option.value}`}</li>;
              })
            : null}
        </ul>
        <section className="col-1 col-card">
          <button
            onClick={() => setAnswer(pickRandomElementFromArray(optionsArray))}
          >
            Ask Again
          </button>
          <button
            onClick={() => {
              resetQuestionAndOptions();
              history.push("/");
            }}
          >
            New question
          </button>
        </section>
      </div>
    </section>
  );
};

export default AnswersSection;
