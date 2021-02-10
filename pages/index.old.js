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
        {/* google analytics */}
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>

      <main>
        <section className="body">
          {/* google tag manager */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPBV7FT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Navbar />
          {/* bruh */}

          <LandingContent visible={false} numberOfSignup={numberOfSignup} />
        </section>
        <section className="map-topheader mx-auto flex flex-col items-center justify-center">
          <section>
            <section className="mx-auto flex flex-col items-center justify-center mb-8">
              <h1 className="-mt-16 lg:-mt-40 mb-8 text-center w-2/3 text-2xl">
                Videos
              </h1>
              <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-3 w-2/3">
                <div className="flex flex-col items-center">
                  <div className="w-2/3 h-2/3 m-4">
                    <img
                      src="/content/cookievote.gif"
                      className="flex text-center"
                      autoPlay
                    />
                  </div>
                  <a
                    href="/content/CookieVote.mp4"
                    className="mb-4"
                    download="CookieVote"
                  >
                    Download
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2/3 h-2/3 m-4">
                    <img
                      src="/content/slothvote.gif"
                      className="flex text-center"
                      autoPlay
                    />
                  </div>
                  <a
                    href="/content/SlothVote.mp4"
                    className="mb-4"
                    download="SlothVote"
                  >
                    Download
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2/3 h-2/3 m-4">
                    <img
                      src="/content/linevote.gif"
                      className="flex text-center"
                      autoPlay
                    />
                  </div>
                  <a
                    href="/content/LineVote.mp4"
                    className="mb-4"
                    download="LineVote"
                  >
                    Download
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2/3 h-2/3 m-4">
                    <img
                      src="/content/whiskeysquare.gif"
                      className="flex text-center"
                      autoPlay
                    />
                  </div>
                  <a
                    href="/content/WhiskeyVote.mp4"
                    className="mb-4"
                    download="WhiskeyVote"
                  >
                    Download
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2/3 h-2/3 m-4">
                    <img
                      src="/content/hamiltonsquare.gif"
                      className="flex text-center"
                      autoPlay
                    />
                  </div>
                  <a
                    href="/content/HamiltonVote.mp4"
                    className="mb-4"
                    download="HamiltonVote"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
          </section>
          <section className="mx-auto flex flex-col items-center justify-center mb-20">
            <h1 className="mt-8 mb-8 text-center w-2/3 text-2xl">Graphics</h1>
            <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-3 w-2/3">
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudFriday-10.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudFriday-10.png"
                  className="mb-4"
                  download="DrivingInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudFriday-11.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudFriday-11.png"
                  className="mb-4"
                  download="PowerballInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudSaturday-12.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudSaturday-12.png"
                  className="mb-4"
                  download="HurricaneInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-BIGFOOT.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudIllo-BIGFOOT.png"
                  className="mb-4"
                  download="BigfootInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-UFO.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudIllo-UFO.png"
                  className="mb-4"
                  download="UFOInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-LIGHTNING.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudIllo-LIGHTNING.png"
                  className="mb-4"
                  download="LightningInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-SHARK.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudIllo-SHARK.png"
                  className="mb-4"
                  download="SharkInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-SELFIES.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/VoterFraudIllo-SELFIES.png"
                  className="mb-4"
                  download="SelfiesInfo"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/earhartvote.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/earhartvote.png"
                  className="mb-4"
                  download="earheartvote"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/hamiltonvote.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/hamiltonvote.png"
                  className="mb-4"
                  download="hamiltonvote"
                >
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/whiskeyvote.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <a
                  href="/content/whiskeyvote.png"
                  className="mb-4"
                  download="whiskeyvote"
                >
                  Download
                </a>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
}
