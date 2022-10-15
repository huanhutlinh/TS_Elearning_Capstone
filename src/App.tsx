import React, { Suspense, lazy } from "react";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Suspense>
          <Switch></Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
