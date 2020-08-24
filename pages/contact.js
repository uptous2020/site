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
        <section className="body" style={{backgroundImage: "url('hero.png')"}}>
            {/* nav bar*/}
            <nav className="p-0 pr-6 mt-0 fixed w-full z-10 top-0" style={{backgroundImage: "url('hero.png')"}}>
                  <div class="flex md:flex-row flex-col justify-between">
                      <div class="flex justify-center md:justify-start ">
                        <img class="object-center mt-1 pt-3 md:pb-0 pb-2 ml-6 w-8 h-12" src="/logowhite.svg"></img>
                        <Link href="/">
                            <a class="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-1 " href="https://2020upto.us">up to us</a>
                        </Link>
                      </div> 
                      <div>  
                        <ul class="mb-4 flex flex-row  justify-evenly md:justify-between text-sm md:text-base md:pt-6 md:mr-4">
                        <li class="text-orange-100 ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                            <script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"></script>
                            <a class="dbox-donation-button" style={{background: "#000000) no-repeat 37px;color: #E69538;text-decoration: none;font-family: 'Monument';"}} href="https://donorbox.org/up-to-us">DONATE</a>
                          </li>
                          <li>
                            <Link href="/contact"><a class=" text-white no-underline hover:text-gray-200 hover:text-underline">CONTACT US</a></Link>
                          </li>
                        </ul>
                      </div>
                  </div>
            </nav>
          <div className="p-6 text-white flex flex-col items-center text-center">
            {/* <img className="hidden md:block h-64 mt-16 md:mt-6" src="/up_to_us_logo_white.svg" /> */}
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              CONTACT US
            </h1>
            <br></br>
            <div className="iframe-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDwBJ3sYS68_DOb2PGR-l_dTj8T5kYWzaGLVe4DCHgeS32eg/viewform?embedded=true" width="640" height="765" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
           
          </div>
        </section>
        <footer className="w-full p-6" style={{backgroundImage: "url('footer.png')"}}>
          <p className="text-center text-white">© 2020 Up To Us</p>
        </footer>
      </main>
    </div>
  )
}

