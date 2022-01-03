import React from "react";
import { render, screen } from "@testing-library/react";
import Result from "../pages/Result";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
test("Exam Render Test", () => {
  const history = createMemoryHistory();
  history.push("/result", {
    user: {
      name: "asd",
      gender: "asdf",
      language: "asdf",
    },
    answerList: [],
  });

  render(
    <Router history={history}>
      <Result />
    </Router>
  );
  const result = screen.getByTestId("result");
  expect(result).toBeInTheDocument();
});
