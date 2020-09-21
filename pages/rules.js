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
          <div className="p-6 flex flex-row justify-center items-center text-center">
            <h1 className="text-black hover:text-orange-500 max-w-sm bg-white text-xl md:text-xl mt-40 mx-10 p-4 md:mt-16">
              <a href="/teslagiveaway">Up to Us x Cheeky Boyos Giveaway</a>
            </h1>
            <h1 className="text-black hover:text-orange-500 max-w-sm bg-white text-xl md:text-xl mt-40 mx-10 p-4 md:mt-16">
              <a href="/checkandchat">Check and Chat Promotion</a>
            </h1>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  )
}

