import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Exam from "./pages/Exam";
interface Props {}

function App(props: Props) {
  const {} = props;

  return (
    <div data-testid="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exam" component={Exam} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
