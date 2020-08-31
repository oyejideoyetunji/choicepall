import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/Header";
import PopularQuestions from "../PopularQuestions/PopularQuestions";
import FormSection from "../FormSection/FormSection";
import AnswersSection from "../AnswersSection/AnswersSection";
import "./App.css";

function App() {
  let [question, setQuestion] = useState("");
  let [pastQuestions, setPastQuestions] = useState([]);
  let [options, setOptions] = useState({});
  let [optionsArray, setOptionsArray] = useState([]);

  const resetQuestionAndOptions = function () {
    setQuestion("");
    setOptions({});
  };

  return (
    <div className="App">
      <Router>
        <Route path="/" render={(props) => <Header {...props} />} />
        <Route
          path="/"
          render={(props) => (
            <PopularQuestions pastQuestions={pastQuestions} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <FormSection
              question={question}
              setQuestion={setQuestion}
              options={options}
              setOptions={setOptions}
              pastQuestions={pastQuestions}
              setPastQuestions={setPastQuestions}
              setOptionsArray={setOptionsArray}
              {...props}
            />
          )}
        />
        <Route
          path="/answers"
          render={(props) => (
            <AnswersSection
              question={question}
              optionsArray={optionsArray}
              resetQuestionAndOptions={resetQuestionAndOptions}
              {...props}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
