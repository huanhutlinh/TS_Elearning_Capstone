import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import "./Style/footer.css";
import { getCateCoursesAction } from "../../../redux/actions/coursesActions";
import { Link } from "react-router-dom";

export default function Footer() {
  const { arrCateCourse } = useSelector(
    (state: any) => state.CategoryCoursesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
  }, []);

  const renderCateCourses = () => {
    return arrCateCourse?.map((cateCourses: any, index: number) => {
      return (
        <li key={index}>
          <Link
            className="text-base sm:text-lg"
            to={`/courses/${cateCourses.maDanhMuc}`}
          >
            {cateCourses.tenDanhMuc}
          </Link>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <footer className="px-4 divide-y dark:bg-coolGray-800 dark:text-coolGray-100 ">
        <div className="footer container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              href="/"
              className="flex  justify-start sm:justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-start sm:justify-center rounded-full dark:bg-violet-400">
                <img
                  className="w-3/4 sm:w-4/5"
                  src="/images/logo.png"
                  alt="E - LEARNING"
                />
              </div>
            </a>
          </div>
          <div className="footer_links grid grid-cols-2 text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="footer_links_course space-y-3">
              <h3 className="font-bold text-lg sm:text-2xl tracking-wide uppercase dark:text-coolGray-50">
                Khoá học
              </h3>
              <ul className="space-y-1">{renderCateCourses()}</ul>
            </div>
            <div className="footer_links_community space-y-3">
              <h3 className="font-bold  text-lg sm:text-2xl tracking-wide uppercase dark:text-coolGray-50">
                Community
              </h3>
              <ul className="space-y-1 text-base sm:text-lg">
                <li>
                  <a href="#~">Learners</a>
                </li>
                <li>
                  <a href="#~">Parteners</a>
                </li>
                <li>
                  <a href="#~">Developers</a>
                </li>
                <li>
                  <a href="#~">Transactions</a>
                </li>
                <li>
                  <a href="#~">Blog</a>
                </li>
                <li>
                  <a href="#~">Teaching Center</a>
                </li>
              </ul>
            </div>
            <div className="footer_links_quick space-y-3">
              <h3 className="font-bold  text-lg sm:text-2xl uppercase dark:text-coolGray-50">
                Quick links
              </h3>
              <ul className="space-y-1 text-base sm:text-lg">
                <li>
                  <a href="#~">Professional Education</a>
                </li>
                <li>
                  <a href="#~">Courses</a>
                </li>
                <li>
                  <a href="#~">Admissions</a>
                </li>
                <li>
                  <a href="#~">Testimonial</a>
                </li>
                <li>
                  <a href="#~">Programs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
