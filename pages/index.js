import Head from 'next/head'
// import '../styles.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>

      <main>
        <section style={{backgroundImage: "url('hero.png')"}}>
        
{/*nav bar*/}

<nav className="p-0 pr-6 mt-0 fixed w-full z-10 top-0" style={{backgroundImage: "url('hero.png')"}}>
                {/* nav bar*/}
                  <div class="flex md:flex-row flex-col justify-between">
                      <div class="flex justify-center md:justify-start ">
                        <img class="object-center mt-1 pt-3 md:pb-0 pb-2 ml-6 w-8 h-12" src="/logowhite.svg" href="2020upto.us"></img>
                        <div>
                            <a class="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-1 " href="https://2020upto.us">up to us</a>
                        </div>
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




          <div className="p-12 mx-auto text-white flex flex-col items-center text-center">
            <img className="hidden md:block h-64 mt-16 md:mt-6" src="/up_to_us_logo_white.svg" />
            <h1 className="text-2xl md:text-4xl mt-20 md:mt-16">
              WHO WE ARE
            </h1>
            <p className="px-0 lg:px-56 text-xl md:text-2xl mt-2">
              up to us is a collective of Gen Z creators fixing some of the biggest problems facing our generation.
            </p>
            <h1 className="text-2xl md:text-4xl mt-12 md:mt-16">
              WHAT WE STAND FOR
            </h1>
            <p className="text-xl md:text-2xl description mt-2 pb-4">
              we don’t want to let our future be decided by others. we want to make a change by turning our voices into votes. our generation will save the world.<br></br>it’s up to us.
            </p>
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
        <footer className="w-full p-6" style={{backgroundImage: "url('footer.png')"}}>
          <p className="text-center text-white">© 2020 Up To Us</p>
        </footer>
      </main>
    </div>
  )
}

