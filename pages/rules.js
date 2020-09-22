import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Rules() {
  return (
    <div>
      <Head>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-178646695-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-178646695-1');
                `,
            }}
          />
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main className="body h-auto lg:pb-48 xl:pb-56" style={{ backgroundImage: "url('hero.png')" }}>
      
        
          <Navbar />
          <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-xl md:text-4xl mt-24 pt-2 md:mt-16 ">
              Sweepstakes Rules
          </h1>
          <div className="p-6 flex flex-col xl:flex-row lg:flex-col justify-center items-center text-center">
            <h5 className="mb-24 mt-10 md:mt-16 md:mb-16 lg:mt-24 lg:mx-12 ">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm xl:max-w-md lg:max-w-md rounded-md px-2 py-6 bg-white md:p-6 lg:p-6 xl:p-6 text-sm md:text-xl " href="/uptousxcheekyboyos">Up to Us x Cheeky Boyos</a>
            </h5>
            <h5 className="lg:mx-12 md:my-20 lg:pt-8 md:text-xl">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm xl:max-w-md lg:max-w-md rounded-md bg-white text-xl md:text-xl p-6 " href="/checkandchat">Check &amp; Chat</a>
            </h5>
          </div>
          </div>
        <Footer/>
      </main>
    </div>
  )
}

