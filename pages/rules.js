import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Rules() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main>
      
        <section className="body h-auto lg:pb-48 xl:pb-56" style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
          <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-xl md:text-4xl mt-24 pt-2 md:mt-16 ">
              Sweepstakes Rules
          </h1>
          <div className="p-6 flex flex-col xl:flex-row lg:flex-col justify-center items-center text-center">
            <h1 className="mb-24 mt-10 md:mt-16 md:mb-16 lg:mt-24 lg:mx-12 md:text-xl">
            {/* mt-32 xl:mt-20 lg:mt-20 mx-10 md:mt-16 lg:mb-20 xl:mb-20 */}
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm xl:max-w-md lg:max-w-md rounded-md p-6 bg-white text-xl md:text-xl " href="/teslagiveaway">Tesla Giveaway</a>
            </h1>
            <h1 className="lg:mx-12 md:my-20 lg:pt-8 md:text-xl">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm xl:max-w-md lg:max-w-md rounded-md bg-white text-xl md:text-xl p-6 " href="/checkandchat">Check &amp; Chat</a>
            </h1>
          </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  )
}

