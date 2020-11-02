import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full p-6"
      style={{ backgroundImage: "url('USBackground.png')" }}
    >
      <div className="flex flex-col items-center lg:flex-row xl:flex-row justify-center sm:items-center sm:flex-col md:flex-row">
        <p className="justify-center text-center text-black">© 2020 Up To Us</p>
        {/* <p className="justify-center invisible text-center text-black ml-6 lg:visible xl:visible sm:invisible md:visible"> | </p>
          <li>
            <Link href="/uptousxcheekyboyos">
              <a className=" text-black no-underline hover:text-gray-200 hover:text-underline">
                Tesla Giveaway
              </a>
            </Link>
          </li>
          <p className="justify-center invisible text-center text-black ml-6 lg:visible xl:visible sm:invisible md:invisible"> | </p>
          <li>
            <Link href="/checkandchat">
              <a className=" text-black no-underline hover:text-gray-200 hover:text-underline">
                Check and Chat
              </a>
            </Link>
          </li>  */}
        <p className="justify-center invisible text-center text-black ml-6 lg:visible xl:visible sm:invisible md:visible"></p>
        <li>
          <Link href="/privacy">
            <a className=" text-black mr-2 md:mr-2 no-underline hover:text-gray-700 hover:text-underline">
              Privacy Policy
            </a>
          </Link>
        </li>
      </div>
      <div className="flex justify-center">
        <div className="text-center px-4 pt-6 pb-2 m-2">
          <a href="https://www.tiktok.com/@2020uptous">
            <img src="tiktok_black.svg" alt="tiktok"></img>
          </a>
        </div>
        <div className="text-center px-4 pt-6 pb-2 m-2">
          <a href="https://www.instagram.com/2020uptous">
            <img src="instagram_black.svg" alt="instagram"></img>
          </a>
        </div>
        <div className="text-center pt-6 pb-2 m-2">
          <a href="https://twitter.com/2020uptous">
            <img src="twitter_black.svg" alt="twitter"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
