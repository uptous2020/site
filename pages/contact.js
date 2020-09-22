import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main className="body" style={{ backgroundImage: "url('hero.png')" }}>
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

