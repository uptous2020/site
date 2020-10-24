import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
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
      <main className="body" style={{ backgroundImage: "url('hero.png')" }}>
          {/* google tag manager */}
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPBV7FT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
          <Navbar />
          <div className="p-6 text-white flex flex-col items-center text-center">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              CONTACT US
            </h1>
            
          </div>
          <div className="pb-4 iframe-container">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDwBJ3sYS68_DOb2PGR-l_dTj8T5kYWzaGLVe4DCHgeS32eg/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        <Footer />
      </main>
    </div>
  )
}

