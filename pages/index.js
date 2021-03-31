import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ContestLink from "../components/ContestLink.js";
import Ticker from "react-ticker";

export default function Home() {
  return (
    <div>
      <Head>
        {/* google tag manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WPBV7FT');`,
          }}
        />
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
      <main>
        <section
          className="body"
          style={{ backgroundImage: "url('hero.png')" }}
        >
          {/* google tag manager */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPBV7FT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />

          <Navbar />

          <div
            id="first"
            className="p-12 mx-auto text-white flex flex-col items-center text-center"
          >
            <img
              className="md:block h-48 mt-20"
              src="/up_to_us_logo_white.svg"
            />
            <h1 id="second" className="text-2xl md:text-4xl mt-20 md:mt-16">
              WHO WE ARE
            </h1>
            <p className="px-0 lg:px-56 text-xl md:text-2xl mt-2 w-5/6">
              up to us is a collective of Gen Z creators fixing some of the
              biggest problems facing our generation.
            </p>
            <h1 className="text-2xl md:text-4xl mt-12 md:mt-16 mb-2">
              WHAT WE WORK ON:
            </h1>
            <div className="grid gap-4 items-center sm:grid-cols-1 md:grid-cols-2 m-2">
              <ContestLink
                key={1}
                description="Voting & Democratic Participation"
                photo="voting_democratic_participation_icon.svg"
              />
              <ContestLink
                key={2}
                description="Climate Change"
                photo="climate_change_icon@2x 1.svg"
              />
              <ContestLink
                key={3}
                description="Economic Security"
                photo="Layer 2.svg"
              />
              <ContestLink
                key={4}
                description="Racial & Gender Equity"
                photo="racial_gender_equity_icon.svg"
              />
              <ContestLink
                key={5}
                description="Public Health"
                photo="Layer 1.svg"
              />
              <ContestLink
                key={6}
                description="Truth & Fighting Disinformation"
                photo="truth_disinformation_icon.svg"
              />
            </div>
          </div>
        </section>
        <section
          id=""
          className="mx-auto flex flex-col items-center justify-center"
        >
          <h1 className="md:text-4xl md:mt-16 text-2xl mt-12 ">WHAT WE DO:</h1>
          <div className="my-10 md:my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 ml-10 h-auto" src="/inspire.svg" />
            <div className="md:pr-4=">
              <h2 className="text-3xl md:text-4xl pt-2 text-center md:text-left">
                INSPIRE
              </h2>
              <p className="w-64 text-center md:text-left">
                building a new way to register &amp; motivate Gen Z to vote
              </p>
            </div>
          </div>
          <div className="my-2 flex flex-col items-center md:flex-row">
            <img className="w-36 h-auto" src="/activate.svg" />
            <div className="md:pl-10">
              <h2 className="text-3xl md:text-4xl pt-2 text-center md:text-left">
                ACTIVATE
              </h2>
              <p className="w-64 text-center md:text-left">
                working with the most influential creators to activate their
                audiences to take action
              </p>
            </div>
          </div>
          <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <img className="w-36 h-auto" src="/educate.svg" />
            <div className="md:pr-10">
              <h2 className="text-3xl md:text-4xl pt-2  text-center md:text-left">
                EDUCATE
              </h2>
              <p className="w-64 text-center md:text-left">
                providing content that leads to direct action &amp; steers the
                conversation
              </p>
            </div>
          </div>
          <br></br>
        </section>
        {/* <section>
          <div className="my-4">
            <h2 className="text-xl text-center">WE WORK WITH</h2>
          </div>
          <Ticker height={200}>
            {({ index }) => (
              <>
                <image src="vote tripling 1.png"></image>
                <img src="Hawkfish.png"></img>
                <img src="rad logo 1.png"></img>
                <img src="impactiv 1.png"></img>
                <img src="flighthouse 1.png"></img>
                <img src="99clip 1.png"></img>
                <img src="Postmates-Logo.png"></img>
                <img src="mb_mitmedialab_03.png"></img>
              </>
            )}
          </Ticker>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
