import { Button, Typography } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { quiz } from "../db/question";
import { Question } from "../interfaces/QuestionInterface";
import TopControllBar from "../components/TopControllBar";
import _ from "lodash";

import { useHistory, useLocation } from "react-router-dom";
import { User } from "../interfaces/UserInterface";

interface Props {}

interface HistoryType {
  user: User;
}

function Exam(props: Props) {
  const {} = props;
  const [questionList, setQuestionList] = React.useState<Question[]>(
    quiz.questions
  );
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);

  const history = useHistory();
  const { state } = useLocation<HistoryType>();

  const changeQuestionHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const cloneQuestion = _.cloneDeep(questionList);
    cloneQuestion[currentQuestion].options[index].checked = e.target.checked;
    setQuestionList(cloneQuestion);
  };

  const navigateToResult = () => {
    history.push("/result", {
      user: state.user,
      answerList: questionList,
    });
  };

  return (
    <div
      data-testid="exam"
      style={{
        width: "720px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopControllBar
        questionList={questionList}
        changeCurrentQuestion={(index) => setCurrentQuestion(index)}
      />

      <Typography variant="h4">
        {questionList[currentQuestion].question}
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {questionList[currentQuestion].options.map((option, index) => (
          <div
            key={option.optionTitle}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => changeQuestionHandler(e, index)}
                  checked={option.checked}
                />
              }
              label={option.optionTitle}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={() => navigateToResult()}
        fullWidth={false}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
}

export default Exam;
