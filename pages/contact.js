import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
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
                  {/* <li>
                    <Link href="/about">
                      <a className=" text-white no-underline ml-4 mr-2 md:mr-10 hover:text-gray-200 hover:text-underline">
                        ABOUT
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/team">
                      <a className=" text-white no-underline ml-4 mr-2 md:mr-10 hover:text-gray-200 hover:text-underline">
                        TEAM
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className=" text-white no-underline ml-4 mr-2 md:mr-10 hover:text-gray-200 hover:text-underline">
                        CONTACT
                      </a>
                    </Link>
                  </li>
                  <li className="text-orange-100 ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                    <script
                      type="text/javascript"
                      defer
                      src="https://donorbox.org/install-popup-button.js"
                    ></script>
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
          </nav>
          <div className="p-6 text-white flex flex-col items-center text-center">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              CONTACT US
            </h1>
            
          </div>
          <div className="iframe-container">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDwBJ3sYS68_DOb2PGR-l_dTj8T5kYWzaGLVe4DCHgeS32eg/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </section>
        <footer className="w-full p-6" style={{ backgroundImage: "url('footer.png')" }}>
        <div className="flex flex-row justify-center">
            <p className="justify-center text-center text-white">© 2020 Up To Us</p>
            <p className="justify-center text-center text-white ml-6"> | </p>
            <li>
                      <Link href="/rules">
                        <a className=" text-white mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline" >
                          Rules
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
      </main>
    </div>
  )
}

