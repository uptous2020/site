import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main>
        <section className="body" style={{ backgroundImage: "url('hero.png')" }}>
          <nav className="p-0 pr-6 mt-0 fixed w-full z-10 top-0" style={{ backgroundImage: "url('hero.png')" }}>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex justify-center md:justify-start">
                <img className="object-center mt-1 pt-3 md:pb-0 pb-2 ml-6 w-8 h-12" src="/logowhite.svg"></img>
                <Link href="/">
                  <a className="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-1 " href="https://2020upto.us">up to us</a>
                </Link>
              </div>
              <div>
                <ul className="mb-4 flex flex-row  justify-evenly md:justify-between text-sm md:text-base md:pt-6 md:mr-4">
                  <li className="text-orange-100 ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                    <script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"></script>
                    <a className="dbox-donation-button" style={{ background: "#000000) no-repeat 37px;color: #E69538;text-decoration: none;font-family: 'Monument'" }} href="https://donorbox.org/up-to-us">DONATE</a>
                  </li>
                  <li>
                    <Link href="/about"><a className=" text-white ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">ABOUT US</a></Link>
                  </li>
                  <li>
                    <Link href="/contact"><a className=" text-white no-underline hover:text-gray-200 hover:text-underline">CONTACT US</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="p-6 text-white flex flex-col items-center text-center">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              ABOUT US
            </h1>
            
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center justify-center">
          <h1 className="md:text-4xl md:mt-16 text-2xl mt-12 ">
            WHAT WE DO:
          </h1>
          <div className="my-10 md:my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 ml-10 h-auto" src="/inspire.svg" />
            <div className="md:pr-4=">
              <h2 className="text-3xl md:text-4xl pt-2 text-center md:text-left">INSPIRE</h2>
              <p className="w-64 text-center md:text-left">building a new way to register & motivate Gen Z to vote</p>
            </div>
          </div>
          <div className="my-2 flex flex-col items-center md:flex-row">
            <img className="w-36 h-auto" src="/activate.svg" />
            <div className="md:pl-10">
              <h2 className="text-3xl md:text-4xl pt-2 text-center md:text-left">ACTIVATE</h2>
              <p className="w-64 text-center md:text-left">working with the most influential creators to activate their audiences to take action</p>
            </div>
          </div>
          <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 h-auto" src="/educate.svg" />
            <div className="md:pr-10">
              <h2 className="text-3xl md:text-4xl pt-2  text-center md:text-left">EDUCATE</h2>
              <p className="w-64 text-center md:text-left">providing content that leads to direct action & steers the conversation</p>
            </div>
          </div>
          <br></br>
        </section>
        <footer className="w-full p-6" style={{ backgroundImage: "url('footer.png')" }}>
          <p className="justify-center text-center text-white">© 2020 Up To Us</p>
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
      </main>
    </div>
  )
}