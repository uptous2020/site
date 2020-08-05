import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.svg" />
      </Head>

      <main>
        <section style={{backgroundImage: "url('hero.png')"}}>
          <div className="p-12 max-w-screen-md mx-auto text-white flex flex-col items-center text-center">
            <img className="h-64" src="/up_to_us_logo_white.svg" />
            <h1 className="text-4xl mt-16">
              WHO WE ARE
            </h1>
            <p className="text-2xl mt-2">
              up to us is a collective of Gen Z creators fixing some of the biggest problems facing our generation.
            </p>
            <h1 className="text-4xl mt-16">
              WHAT WE STAND FOR
            </h1>
            <p className="text-2xl description mt-2">
              we don’t want to let our future be decided by others. we want to make a change by turning our voices into votes. our generation will save the world. it’s up to us.
            </p>
          </div>
        </section>
        <section className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl mt-12">
            WHAT WE DO
          </h1>
          <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 h-auto" src="/inspire.svg" />
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
          
          
          
          <a id="contact" href="https://forms.gle/MTCuJ5spGmekjbgT9" className="mx-8 text-center text-3xl">
              WANT TO HELP?
          </a>
          <a id="contact" href="https://forms.gle/MTCuJ5spGmekjbgT9" className="mb-16 text-center text-3xl">
              CONTACT US
          </a>
          
        </section>
        <footer className="w-full p-16" style={{backgroundImage: "url('footer.png')"}}>
          <p className="text-center text-white">© 2020 Up To Us</p>
        </footer>
      </main>
    </div>
  )
}
