import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>

      <main>
      <section style={{backgroundImage: "url('hero.png')"}}>
          <div className="p-12 w-full mx-auto text-white flex flex-col items-center text-center">
            <img className="h-64 mt-16" src="/up_to_us_logo_white.svg" />
            {/* nav bar */}
              <nav className="p-0 pr-6 mt-0 fixed w-full z-10 top-0" style={{backgroundImage: "url('hero.png')"}}>
                {/* name and logo */}
                  <div class="flex flex-row justify-between">
                      <div class="flex items-center">
                        <img class="object-center pt-4 mt-0 ml-6 w-8 h-16" src="/white_nav.svg" href="2020upto.us"></img>
                        <div>
                            <a class="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-2 " href="https://2020upto.us">up to us</a>
                        </div>
                      </div> 
                      <div>  
                        <ul class="list-reset lg:flex justify-end flex-1 items-center">
                          <li class="inline-block py-1 px-10 text-white text-2xl no-underline hover:text-gray-200 hover:text-underline">
                            <script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"></script>
                            <a class="dbox-donation-button" style={{background: "#000000) no-repeat 37px color: #E69538text-decoration: none;font-family: 'Monument';display: inline-block;font-size: 16px;padding: 15px 38px;padding-left: 75px;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;"}} href="https://donorbox.org/up-to-us">DONATE</a>
                          </li>
                          <li class="mr-3">
                            <a class="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-2 " href="https://forms.gle/MTCuJ5spGmekjbgT9">CONTACT US</a>
                          </li>
                        </ul>
                      </div>
                  </div>
            </nav>
            <h1 className="text-3xl mt-16">
              WHO WE ARE
            </h1>
            <p className="text-2xl mt-2">
              up to us is a collective of Gen Z creators fixing some of the biggest problems facing our generation.
            </p>
            <h1 className="text-3xl mt-16">
              WHAT WE STAND FOR
            </h1>
            <p className="text-2xl description mt-2 pb-4">
              we don’t want to let our future be decided by others. we want to make a change by turning our voices into votes. our generation will save the world.<br></br>it’s up to us.
            </p>
          </div>
        </section>
        <section className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl mt-16">
            WHAT WE DO:
          </h1>
          <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 h-auto ml-10" src="/inspire.svg" />
            <div className="md:pr-4=">
              <h2 className="text-4xl text-center md:text-left">INSPIRE</h2>
              <p className="w-64 text-center md:text-left">building a new way to register & motivate Gen Z to vote</p>
            </div>
          </div>
          <div className="my-2 flex flex-col items-center md:flex-row">
            <img className="w-36 h-auto" src="/activate.svg" />
            <div className="md:pl-10">
              <h2 className="text-4xl text-center md:text-left">ACTIVATE</h2>
              <p className="w-64 text-center md:text-left">working with the most influential creators to activate their audiences to take action</p>
            </div>
          </div>
          <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 h-auto" src="/educate.svg" />
            <div className="md:pr-10">
              <h2 className="text-4xl text-center md:text-left">EDUCATE</h2>
              <p className="w-64 text-center md:text-left">providing content that leads to direct action & steers the conversation</p>
            </div>
          </div>
          
      



     
  {/* container */}
	<div class="container shadow-lg mx-auto bg-white mt-8 md:mt-18">
	</div>

  {/* JS snippet to get the nav toggle working properly */}
	{/* <script>
		  document.getElementById('nav-toggle').onclick = function(){
			document.getElementById("nav-content").classList.toggle("hidden");
		}
	</script> */}

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDwBJ3sYS68_DOb2PGR-l_dTj8T5kYWzaGLVe4DCHgeS32eg/viewform?embedded=true" width="640" height="765" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  
    </section>
        <footer className="w-full p-8" style={{backgroundImage: "url('footer.png')"}}>
          <p className="text-center text-white">© 2020 Up To Us</p>
        </footer>
      </main>
    </div>
  )
}


