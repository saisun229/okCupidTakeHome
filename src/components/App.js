import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./form/form";
import EssayText from "./essayText/essayText";
import EssayEdit from "./essayEdit/essayEdit";

require("./App.scss");

const App = () => (
  <Router>
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Form />
          <EssayText />
        </Route>
        <Route path="/edit">
          <EssayEdit />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
