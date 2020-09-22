import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Navbar() {

    const [currentPage, setCurrentPage] = useState("/")
    const pages = ["/team", "/contact"];

    useEffect(() => {
        // get the current route, log it to console for testing
        setCurrentPage(window.location.pathname)
        console.log(`The current pages are ${pages}`)
        console.log(
            `the page is ${currentPage} and the window is ${window.location.pathname}`
        );
    })
    return (
        <nav className="flex p-0 mt-0 fixed justify-center w-full z-10 top-0"
             style={{backgroundImage: "url('hero.png')"}}>
            <div className="flex md:flex-row flex-col justify-between">
                <div className="flex justify-center md:justify-between md:pr-20">
                    <img className="mt-3 w-8 h-12" src="/logowhite.svg" href="2020upto.us"></img>
                    <div>
                        <a className="inline-block text-white text-3xl mr-12 md:mr-0 no-underline hover:text-gray-200 hover:text-underline py-6 px-1 "
                           href="https://2020upto.us">up to us</a>
                    </div>
                </div>
                <div className="flex">
                    <ul className="self-center flex flex-row justify-evenly md:justify-between text-sm md:text-base">
                        <li>
                          <Link href="/about">
                            <a className=" text-white no-underline md:ml-4 mr-2 md:mr-10 hover:text-gray-200 hover:text-underline">
                              ABOUT
                            </a>
                          </Link>
                        </li>
                        {
                            pages.filter((page) => {
                                if (page == currentPage) {
                                    return false
                                }
                                return true
                            }).map((pageRoute, ID) => (
                                <li key={ID}>
                                    <Link href={`${pageRoute}`}>
                                        <a className=" text-white no-underline mr-2 md:mr-10 hover:text-gray-200 hover:text-underline">
                                            {pageRoute.slice(1, pageRoute.length).toUpperCase()}
                                        </a>
                                    </Link>
                                </li>)
                            )
                        }
                        <li className="text-orange-100 no-underline mr-10 mb-4 md:mr-0 hover:text-gray-200 hover:text-underline">
                            <script
                                type="text/javascript"
                                defer
                                src="https://donorbox.org/install-popup-button.js"
                            />
                            <a
                                className="dbox-donation-button"
                                style={{
                                    background:
                                        "#000000) no-repeat 37px;color: #E69538;text-decoration: none;font-family: 'Monument'",
                                }}
                                href="https://donorbox.org/up-to-us"
                            >
                                DONATE
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            {/* JSX */}
        </nav>
    )

}