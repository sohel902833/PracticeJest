import React from "react";
import { Option, Question } from "../interfaces/QuestionInterface";

interface Props {
  questionList: Question[];
  changeCurrentQuestion: (questionNumber: number) => void;
}

function TopControllBar({ questionList, changeCurrentQuestion }: Props) {
  const isChecked = (options: Option[]): boolean => {
    const checkedOption = options.filter((option) =>
      option.checked ? true : false
    );
    if (checkedOption.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "720px",
        margin: "0 auto",
      }}
    >
      {questionList.map((question, index) => (
        <div
          key={question.question}
          onClick={() => changeCurrentQuestion(index)}
          style={
            isChecked(question.options)
              ? {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "green",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "15px",
                }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "red",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "15px",
                }
          }
        >
          <h2>{index + 1}</h2>
        </div>
      ))}
    </div>
  );
}

export default TopControllBar;
