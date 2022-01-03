import { Typography } from "@mui/material";
import React from "react";

import { useLocation } from "react-router-dom";
import { Question } from "../interfaces/QuestionInterface";
import { User } from "../interfaces/UserInterface";

interface HistoryType {
  user: {
    user: User;
  };
  answerList: Question[];
}

function Result() {
  const [totalCorrect, setTotalCorrect] = React.useState<number>(0);

  const { state } = useLocation<HistoryType>();
  const { user, answerList } = state;

  React.useEffect(() => {
    checkAnswer();
  }, []);

  const checkAnswer = () => {
    const correctAnswerList = answerList.filter((question) => {
      const result = question.options.filter((option) => {
        let correct = false;
        if (option.checked) {
          if (option.correct) {
            correct = true;
          } else {
            correct = false;
          }
        }

        return correct;
      });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    });
    setTotalCorrect(correctAnswerList.length);
  };

  const deg = (a: number, b: number) => {
    return (360 * a) / (a + b);
  };

  return (
    <div
      data-testid="result"
      style={{
        width: "720px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Name: {user?.user?.name}</Typography>
      <Typography variant="h5">Gender: {user?.user?.gender}</Typography>
      <Typography variant="h5">Language: {user?.user?.language}</Typography>

      <h2 style={{ textAlign: "center" }}>Result: {totalCorrect}</h2>

      <hr />
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundImage: `conic-gradient(
                            green 0deg ${deg(
                              totalCorrect,
                              answerList.length - totalCorrect
                            )}deg, 
                            red ${deg(
                              totalCorrect,
                              answerList.length - totalCorrect
                            )}deg 360deg)
                            `,
          borderRadius: "50%",
          margin: "auto",
        }}
      />
    </div>
  );
}

export default Result;
