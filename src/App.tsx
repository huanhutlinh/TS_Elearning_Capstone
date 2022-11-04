import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading/loading";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomeTemplate from "./templates/Home/HomeTemplate";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import CoursesTemplate from "./templates/Home/Pages/Courses/CoursesTemplate";

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
            <HomeTemplate
              path="/courses"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Courses"))}
            />
            <HomeTemplate
              path="/courses/detail/:id"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/DetailsCourse")
              )}
            />
            <CoursesTemplate
              path="/courses/:cate"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/Courses/CourseEachCate")
              )}
            />
            <HomeTemplate
              path="/contact"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Contact"))}
            />
            <HomeTemplate
              path="/profile"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/UserPages/Profile")
              )}
            />
            <HomeTemplate
              path="/alert"
              exact
              Component={lazy(
                () => import("./templates/PageNotFound/AlertPage")
              )}
            />
            <UserTemplate
              path="/signup"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/UserPages/SignUp")
              )}
            />
            <UserTemplate
              path="/signin"
              exact
              Component={lazy(
                () => import("./templates/Home/Pages/UserPages/SignIn")
              )}
            />
            <CheckoutTemplate
              path="/checkout/:id"
              exact
              Component={lazy(
                () =>
                  import("./templates/CheckoutTemplate/CheckoutPage/checkout")
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
