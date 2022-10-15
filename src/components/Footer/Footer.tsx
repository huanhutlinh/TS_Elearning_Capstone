import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Fragment>
      <div className="container">
        <LazyLoad>
          <div
            className="py-10 sm:py-16 px-5 mt-10 sm:mt-0 sm:px-0 mb-12 sm:mb-24 mx-5 sm:mx-0 flex justify-center rounded-3xl"
            style={{
              backgroundImage: 'url("/images/bgNewsletter.png")',
              backgroundPosition: "center center",
              backgroundSize: "1400px auto",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#0A033C",
            }}
          >
            <div className="text-center">
              <h2 className="text-xl sm:text-5xl text-white font-semibold leading-tight">
                Subscribe For Get Update
                <br />
                Every New Courses
              </h2>
              <p className="text-sm sm:text-xl text-gray-400 leading-normal">
                20k+ students daily learn with Cybersoft. Subscribe for new
                courses.
              </p>
              <form>
                <div className="mt-7 sm:mt-24 flex flex-row">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-3/5 px-3 py-2 lg:p-3 rounded-l-lg sm:w-2/3"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base p-5 rounded-r-lg transition-colors
                w-2/5 sm:w-1/3 dark:bg-blue-400 dark:text-coolGray-900"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </LazyLoad>
      </div>
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
                {/* <h1 style={{fontSize:30}}>E - LEARNING</h1> */}
              </div>
            </a>
          </div>
          <div className="footer_links grid grid-cols-2 text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="footer_links_course space-y-3">
              <h3 className="font-bold text-lg sm:text-2xl tracking-wide uppercase dark:text-coolGray-50">
                Khoá học
              </h3>
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
