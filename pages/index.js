import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const LandingContent = (props) => {
  const { visible } = props;

  const mapView = (
    <>
      <div className="h-full w-full relative mt-5">
        <div
          className="map-bg-overlay z-40 flex flex-col text-center w-full"
          style={{ backgroundImage: "url(hero-transparent.png)" }}
        >
          <h1 className="text-3xl md:text-7xl lg:text-8xl rainbowText tracking-widest">
            Patience
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-4xl text-white tracking-widest">
            The results might take awhile.
          </h2>
          <div className="inline mt-8">
            <a
              className="p-3 pl-5 pr-5 rounded-md text-white inline-block"
              style={{ backgroundColor: "#E69538" }}
              href="https://www.outvote.io/campaigns/up-to-us-x-postmates/ready_to_vote?postmates_enabled=true"
            >
              Get Ready to Vote
            </a>
          </div>
          <p className="mt-4 text-center text-white p-4">
            Find the easiest and safest way to vote in your state
          </p>
        </div>
        <div className="-mt-8"></div>
      </div>
    </>
  );
  const aboutText = (
    <>
      <section className="body" style={{ backgroundImage: "url('hero.png')" }}>
        {/* google tag manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPBV7FT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar />
        <div className="mt-8 p-12 mx-auto text-white flex flex-col items-center">
          <h1 className="mt-20 rainbowText text-3xl md:text-7xl lg:text-7xl text-white tracking-widest">
            Patience
          </h1>
          <h2 className="text-lg font-snazzy mb-2 md:text-2xl lg:text-4xl text-white text-center tracking-widest w-7/8">
            What’s normal in an unusual year? <br /> Counting every American’s
            vote.
          </h2>
        </div>
        <div className="-mt-12 p-12 mx-auto text-white flex flex-col w-7/8 lg:w-2/3 md:text-left">
          <h3 className="font-bold text-lg md:text-2xl md:mt-8">
            EVERY VOTE CAST ON OR BEFORE NOVEMBER 3 DESERVES TO BE COUNTED
          </h3>
          <p className="text-md md:text-xl description mt-2 pb-4">
            It’s normal to count legitimate votes for days after the polls close
            — it happens every election. This year more people voted by mail
            than ever before, so it may take some time to count all the votes
            and know the results.
          </p>
          <p className="text-md md:text-xl description mt-2 pb-4">
            Results may swing back and forth and either candidate could declare
            a victory before we actually know the results. If this happens, we
            must stay calm and let the Electoral College work so the will of the
            people can be heard.
          </p>
          <h3 className="font-bold text-lg md:text-2xl mt-4 md:mt-8">
            FOR A WHILE, RESULTS MAY BE UNCLEAR
          </h3>
          <p className="text-md md:text-xl description mt-2 pb-4">
            We are part of the United States of America, and have come together
            with a common purpose. We believe in good sportsmanship, standing by
            American democracy and ensuring that every citizen’s vote is
            counted, including those who choose to vote by mail — no matter who
            wins.
          </p>
          <h3 className="font-bold text-lg md:text-2xl mt-4 md:mt-8">
            IT’S NORMAL AND HAS HAPPENED BEFORE
          </h3>
          <p className="text-md md:text-xl description mt-2 pb-4">
            In 1960, 1968, 1976, 2000, 2004 and 2016 we did not know the
            Presidential winner before midnight on election night. Electors
            usually formally cast their votes about 30 days after Election Day,
            and those can still take a few weeks to count. This year, it’s no
            different.
          </p>
          <div className="flex-col justify-center flex flex-col items-center">
            <div className="my-12 md:w-2/3 ">
              <img
                src="/content/white.png"
                className="flex text-center"
                autoPlay
              />
            </div>
          </div>

          {/*
          In 1960, 1968, 1976, 2000, 2004 and 2016 we did not know the Presidential winner before midnight on election night. Electors usually formally cast their votes about 30 days after Election Day, and those can still take a few weeks to count. 
          //
          This year, it’s no different.
          */}
        </div>
      </section>
    </>
  );

  return visible ? mapView : aboutText;
};

const url =
  "https://ndneighbor-datatransformation.zeet.app/numberOfRegistration";
// const url = 'http://localhost:8000/numberOfRegistration'
const getRequest = () => axios.get(url);

export default function Home() {
  const [numberOfSignup, setNumberOfSignup] = useState(0);

  const getData = async () => {
    const { data } = await getRequest();
    setNumberOfSignup(data.number);
  };

  useEffect(() => {
    getData();
  });

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
          <div className="p-12 mx-auto text-white flex flex-col items-center text-center">
            <img
              className="hidden md:block h-64 mt-20"
              src="/up_to_us_logo_white.svg"
            />
            <h1 className="text-2xl md:text-4xl mt-20 md:mt-16">WHO WE ARE</h1>
            <p className="px-0 lg:px-56 text-xl md:text-2xl mt-2">
              up to us is a collective of Gen Z creators fixing some of the
              biggest problems facing our generation.
            </p>
            <h1 className="text-2xl md:text-4xl mt-12 md:mt-16">
              WHAT WE STAND FOR
            </h1>
            <p className="text-xl md:text-2xl description mt-2 pb-4">
              we don’t want to let our future be decided by others. we want to
              make a change by turning our voices into votes. our generation
              will save the world.<br></br>it’s up to us.
            </p>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center justify-center">
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
      </main>
      <Footer />
    </div>
  );
}
