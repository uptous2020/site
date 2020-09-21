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
      
        <section className="body h-auto" style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
          <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16 ">
              Sweepstakes Rules
          </h1>
          <div className="p-6 flex flex-col xl:flex-row lg:flex-col justify-center items-center text-center">
            <h1 className="mt-32 xl:mt-20 lg:mt-20 mx-10 md:mt-16 lg:mb-20 xl:mb-20">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-md rounded-md p-6 bg-white text-xl md:text-xl " href="/teslagiveaway">Up to Us x Cheeky Boyos</a>
            </h1>
            <h1 className="mt-20 mb-8 lg:mb-20 xl:mb-20 lg:mt-20 xl:mt-20 mx-10 md:mt-16">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-md rounded-md bg-white text-xl md:text-xl p-6 " href="/checkandchat">Check and Chat Promotion</a>
            </h1>
          </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  )
}

