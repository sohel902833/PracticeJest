import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("Home Render Test", () => {
  const history = createMemoryHistory();

  history.push("/");

  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
