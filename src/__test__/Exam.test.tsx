import React from "react";
import { render, screen } from "@testing-library/react";
import Exam from "../pages/Exam";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
test("Exam Render Test", () => {
  const history = createMemoryHistory();
  history.push("/exam", {
    user: {
      name: "asd",
      gender: "asdf",
      language: "asdf",
    },
  });

  render(
    <Router history={history}>
      <Exam />
    </Router>
  );
  const exam = screen.getByTestId("exam");
  expect(exam).toBeInTheDocument();
});
