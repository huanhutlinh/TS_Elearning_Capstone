import React, { Suspense, lazy } from "react";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loading from "./components/Loading/loading";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Switch>
            <HomeTemplate
              path="/"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/HomeContent")
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
