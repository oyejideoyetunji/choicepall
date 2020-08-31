import React from "react";
import "./PopularQuestions.css";

const PopularQuestions = ({ pastQuestions }) => {
  const getMostFrequentQuestions = function (pastQuestions) {
    if (pastQuestions.length < 1) return null;
    let currentMax = Number.NEGATIVE_INFINITY;

    pastQuestions.forEach((element) => {
      if (element.frequency > currentMax) {
        currentMax = element.frequency;
      }
    });

    let mostFrequentQuestions = pastQuestions.filter(
      (element, idx) => element.frequency === currentMax
    );

    return mostFrequentQuestions.length > 1
      ? [mostFrequentQuestions[0], mostFrequentQuestions[1]]
      : [mostFrequentQuestions[0]];
  };

  let mostFrequentQuestions = getMostFrequentQuestions(pastQuestions);

  return mostFrequentQuestions === null ? (
    <section className="container">
      <div className="flex-block-col">
        <h3>Your most asked question(s)</h3>
        <p>You have not asked any question yet</p>
      </div>
    </section>
  ) : (
    <section className="container">
      <div className="flex-block-col">
        <h3>Your most asked question(s)</h3>
        {mostFrequentQuestions.map((question, idx) => (
          <p key={idx}>
            Question: <em>{question.value}</em> | You asked :
            <b> {question.frequency} </b> <em> time(s) </em>
          </p>
        ))}
      </div>
    </section>
  );
};

export default PopularQuestions;
