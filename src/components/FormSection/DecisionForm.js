import React from "react";
import { useHistory } from "react-router-dom";

const DecisionForm = ({
  question,
  setQuestion,
  options,
  setOptions,
  optionNumber,
  setOptionNumber,
  optionLettersArray,
  processSubmit,
}) => {
  const history = useHistory();

  const handleSubmit = function (event) {
    event.preventDefault();
    processSubmit();
    history.push("/answers");
  };

  const handleInputChange = function (event) {
    if (event.target.name === "question") {
      return setQuestion(event.target.value);
    }
    return setOptions({ ...options, [event.target.name]: event.target.value });
  };

  const handleAddOption = function () {
    return setOptionNumber(optionNumber + 1);
  };

  const handleRemoveChoice = function () {
    setOptionNumber(optionNumber - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="ctr-frm">
      <div className="frm-grp">
        <label>Decision</label>
        <div className="frm-wrp">
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleInputChange}
            placeholder="Q: Enter your question here"
            required
          />
          <span className="focus-span"></span>
        </div>
      </div>
      <div className="frm-grp">
        <label>Options</label>
        {optionLettersArray.map((letter, idx) => {
          let optionValue = options[letter] || "";
          return (
            <div className="frm-wrp" key={idx}>
              <input
                placeholder={`${letter}:`}
                name={letter}
                type="text"
                value={optionValue}
                onChange={handleInputChange}
                required
              />
              {idx === optionLettersArray.length - 1 ? (
                <span
                  className={
                    optionNumber > 2
                      ? "inline-btn-sm"
                      : "inline-btn-sm disabled-btn"
                  }
                  onClick={optionNumber > 2 ? handleRemoveChoice : null}
                >
                  Remove
                </span>
              ) : null}
              <span className="focus-span"></span>
            </div>
          );
        })}
      </div>
      <div className="frm-grp">
        {optionNumber < 26 ? (
          <span onClick={handleAddOption} className="lft-btn">
            <i className="fas fa-plus-circle"></i>
            Option
          </span>
        ) : (
          <span className="lft-btn disabled-btn">
            <i className="fas fa-plus-circle"></i>
            Option
          </span>
        )}
        <input type="submit" value="DECISIDE" />
      </div>
    </form>
  );
};

export default DecisionForm;
