import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
      <footer
        className="w-full p-6"
        style={{ backgroundImage: "url('footer.png')" }}
      >
        <div className="flex flex-row justify-center">
          <p className="justify-center text-center text-white">
            © 2020 Up To Us
          </p>
          <p className="justify-center text-center text-white ml-6"> | </p>
          <li>
            <Link href="/rules">
              <a className=" text-white mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                Rules
              </a>
            </Link>
          </li>
          <p className="justify-center text-center text-white ml-6"> | </p>
          <li>
            <Link href="/privacy">
              <a className=" text-white mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                Privacy Policy
              </a>
            </Link>
          </li>
        </div>
        <div className="flex justify-center">
          <div className="text-center px-4 py-2 m-2">
            <a href="https://www.tiktok.com/@2020uptous">
              <img src="tiktok.svg" alt="tiktok"></img>
            </a>
          </div>
          <div className="text-center px-4 py-2 m-2">
            <a href="https://www.instagram.com/2020uptous">
              <img src="instagram.svg" alt="instagram"></img>
            </a>
          </div>
          <div className="text-center py-2 m-2">
            <a href="https://twitter.com/2020uptous">
              <img src="twitter.svg" alt="twitter"></img>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer
