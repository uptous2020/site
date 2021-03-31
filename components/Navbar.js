import Link from "next/link";
import { useState, useEffect } from "react";
import { HideBetween } from "react-hide-on-scroll";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("/");
  const pages = ["/", "/team", "/contact", "/ourwork"];

  useEffect(() => {
    // get the current route, log it to console for testing
    setCurrentPage(window.location.pathname);
    console.log(`The current pages are ${pages}`);
    console.log(
      `the page is ${currentPage} and the window is ${window.location.pathname}`
    );
  });
  return (
    <nav
      className="flex p-0 mt-0 fixed justify-center w-full z-10 top-0 sm:w-100"
      style={{ backgroundImage: "url('hero.png')" }}
    >
      <div className="w-full flex lg:flex-row flex-col justify-between py-3">
        <div className="flex justify-center lg:justify-between">
          {currentPage === "/" ? (
            <HideBetween
              className="transition-opacity duration-500 ease-in-out"
              div
              startDivID="first"
              endDivID="second"
            >
              <img
                className="mt-1 w-8 h-10 lg:ml-8 "
                src="/logowhite.svg"
                href="2020upto.us"
              ></img>
              <div>
                <a
                  className="ease-in-out inline-block text-white text-xl md:mr-0 no-underline hover:text-gray-200 hover:text-underline py-3 px-1 "
                  href="/"
                >
                  up to us
                </a>
              </div>
            </HideBetween>
          ) : (
            <div className="flex justify-center md:justify-between">
              <img
                className="mt-1 w-8 h-10 ml-8 "
                src="/logowhite.svg"
                href="2020upto.us"
              ></img>
              <div>
                <a
                  className="ease-in-out inline-block text-white text-xl md:mr-0 no-underline hover:text-gray-200 hover:text-underline py-3 px-1 "
                  href="/"
                >
                  up to us
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <ul className="self-center flex flex-row mt-4 justify-evenly text-xs sm:text-sm">
            {currentPage === "/team" ? (
              <li className="">
                <Link href="/team">
                  <a className=" text-white border-b-4 border-orange-600 mx-4 hover:text-gray-200 hover:text-underline">
                    TEAM
                  </a>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/team">
                  <a className=" text-white no-underline mx-4 hover:text-gray-200 hover:text-underline">
                    TEAM
                  </a>
                </Link>
              </li>
            )}
            {currentPage === "/ourwork" ? (
              <li>
                <Link href="/ourwork">
                  <a className=" text-white border-b-4 border-orange-600 mx-4 hover:text-gray-200 hover:text-underline">
                    OUR WORK
                  </a>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/ourwork">
                  <a className=" text-white no-underline mx-4 hover:text-gray-200 hover:text-underline">
                    OUR WORK
                  </a>
                </Link>
              </li>
            )}
            {currentPage === "/contact" ? (
              <li>
                <Link href="/contact">
                  <a className=" text-white border-b-4 border-orange-600 mx-4 hover:text-gray-200 hover:text-underline">
                    CONTACT
                  </a>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/contact">
                  <a className=" text-white no-underline mx-4 hover:text-gray-200 hover:text-underline">
                    CONTACT
                  </a>
                </Link>
              </li>
            )}
            <li className=" text-white no-underline mx-4 mb-4 ">
              <script
                type="text/javascript"
                defer
                src="https://donorbox.org/install-popup-button.js"
              />
              <a
                className="text-white bg-orange-600 p-2 rounded-md"
                href="https://donorbox.org/up-to-us"
              >
                DONATE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
