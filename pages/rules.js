import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Rules() {
  return (
    <div>
      <Head>
        {/* google tag manager */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WPBV7FT');`}} />
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
         {/* google tag manager */}
         <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPBV7FT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
          <Navbar />
          <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-xl md:text-4xl mt-24 pt-2 md:mt-16 ">
              Sweepstakes Rules
          </h1>
          <div className="p-6 flex flex-col xl:flex-row lg:flex-col justify-center items-center text-center">
            <h5 className="mb-24 mt-10 md:mt-16 md:mb-16 lg:mt-24 lg:mx-12 ">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm rounded-md px-2 py-6 bg-white md:p-6 lg:p-6 xl:p-6 text-sm md:text-xl " href="/uptousxpostmates">Up to Us x Postmates</a>
            </h5>
            <h5 className="mb-24 mt-10 md:mt-16 md:mb-16 lg:mt-24 lg:mx-12 ">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm rounded-md px-2 py-6 bg-white md:p-6 lg:p-6 xl:p-6 text-sm md:text-xl " href="/checkandchat">Check &amp; Chat</a>
            </h5>
            <h5 className="lg:mx-12 md:my-20 lg:pt-8 md:text-xl">
              <a className="text-black hover:bg-orange-100 hover:text-white max-w-sm rounded-md bg-white text-xl md:text-xl p-6 " href="/uptousxcheekyboyos">Up to Us x Cheeky Boyos</a>
            </h5>
          </div>
          </div>
        <Footer/>
      </main>
    </div>
  )
}

