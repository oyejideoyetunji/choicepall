import React, { useState } from "react";
import alphabets from "./alphabets";
import DecisionForm from "./DecisionForm";
import "./FormSection.css";
import {
  getAlphabetsInRange,
  convertObjectToArrayOfObjects,
} from "../../Utills/Utills";

const FormSection = ({
  question,
  setQuestion,
  options,
  setOptions,
  pastQuestions,
  setPastQuestions,
  setOptionsArray,
}) => {
  let [optionNumber, setOptionNumber] = useState(3);

  let optionLettersArray = getAlphabetsInRange(alphabets, optionNumber);

  const updatePastQuestions = function (question, pastQuestions) {
    if (pastQuestions.length < 1) {
      pastQuestions.push({ value: question, frequency: 1 });
      return pastQuestions;
    }

    pastQuestions.forEach((element) => {
      if (element.value === question) {
        element.frequency += 1;
      } else {
        pastQuestions.push({ value: question, frequency: 1 });
      }
    });

    return pastQuestions;
  };

  const processSubmit = function () {
    setOptionsArray(convertObjectToArrayOfObjects(options));
    setPastQuestions(updatePastQuestions(question, pastQuestions));
    console.log(pastQuestions);
  };

  return (
    <main className="container">
      <DecisionForm
        optionLettersArray={optionLettersArray}
        optionNumber={optionNumber}
        setOptionNumber={setOptionNumber}
        question={question}
        setQuestion={setQuestion}
        options={options}
        setOptions={setOptions}
        processSubmit={processSubmit}
      />
    </main>
  );
};

export default FormSection;
