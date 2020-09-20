import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main>
        <section className="body" style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
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

