import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar.js'
import HeroHeading from '../components/atoms/HeroHeading.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>

      <main>
        <section style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar/>
          
          <div className="p-12 mx-auto text-white flex flex-col items-center text-center">
          <div></div>
            <div className='rainbowText'>Test</div>
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
