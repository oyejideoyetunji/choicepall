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
  setOptionsArray,
}) => {
  let [optionNumber, setOptionNumber] = useState(3);

  let optionLettersArray = getAlphabetsInRange(alphabets, optionNumber);

  const processSubmit = function () {
    setOptionsArray(convertObjectToArrayOfObjects(options));
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
