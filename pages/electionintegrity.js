import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Footer from "../components/AltFooter.js";

const LandingContent = (props) => {
  const { visible } = props;

  const mapView = (
    <>
      <div className="h-full w-full relative mt-5">
        <div
          className="map-bg-overlay z-40 flex flex-col text-center w-full"
          style={{ backgroundImage: "url(hero-transparent.png)" }}
        >
          <h1 className="text-3xl md:text-7xl lg:text-8xl text-black tracking-widest">
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
          {/* https://www.outvote.io/campaigns/up-to-us/check_registration */}
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
        {/*<Navbar /> */}
        <div className="p-12 mx-auto text-white flex flex-col items-center text-center">
          <h1 className="mt-16 text-3xl md:text-7xl lg:text-8xl text-black tracking-widest">
            Patience
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-4xl text-white tracking-widest">
            The results might take awhile.
          </h2>
        </div>
        <div className="p-12 mx-auto text-white flex flex-col w-5/6 md:w-2/3">
          <h1 className="text-lg md:text-4xl mt-4 md:mt-16">WHO WE ARE</h1>
          <p className="text-md md:text-2xl description mt-2 pb-4">
            We are a group of Gen Z voters fixing some of the biggest problems
            facing our generation.
          </p>
          <h1 className="text-lg md:text-4xl mt-12 md:mt-16">
            WHAT WE STAND FOR
          </h1>
          <p className="text-md md:text-2xl description mt-2 pb-4">
            We are part of the UNITED States of America - let’s not lose sight
            of our common purpose. No matter who wins, we believe in good
            sportsmanship, standing by American democracy and ensuring that
            every citizen’s vote is counted, including those who choose to vote
            by mail.
          </p>
          <p className="mt-12 text-md md:text-2xl description mt-2 pb-4">
            What’s normal in an unusual year? Counting every American’s vote.
          </p>
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
          {/* <Navbar /> */}
          {/* bruh */}
          <LandingContent visible={false} numberOfSignup={numberOfSignup} />
          {/* <div className="h-full w-full relative">
            <div className='rainbowText z-40 absolute flex flex-col text-center'>
              <p>21,732</p>   
            </div>
            <Map cHeight="450px" className='map'/>
          </div> */}
        </section>

        <section className="map-topheader mx-auto flex flex-col items-center justify-center">
          <section>
            {/* <div className="mx-auto mb-8 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl md:mt-16 text-xl mt-8 mb-8 px-6 md:px-0 " >
              Check Your Registration Status
            </h1>
            <p className="text-left pr-12 pl-8 md:pr-0 md:pl-0">
            Use one of the links below to enter for a chance to win a prize*^
            </p> */}
            {/* <h1 className="md:text-4xl md:mt-16 text-2xl mt-12" >
              Check Your Registration Status
            </h1>
            <p className="text-center md:text-left">
            Use one of the links below to enter for a chance to win a prize*^
            </p> */}
            {/* </div> */}

            {/* <div className="flex flex-col items-center mb-12">
            <div className="mb-4">
              <ContestLink bgColor="orange-600" description="Win a Tesla from the Cheeky Boyos*" {...cheekyObj}/>
            </div>
            <div className="grid gap-4 items-center sm:grid-cols-1 md:grid-cols-2">
              {contests.filter(({isVisible}) => {
                if (isVisible == "FALSE") {
                  return false
                }
                return true
              }).map((contestObj, i) => (
                  <ContestLink key={i} {...contestObj} />
                )
              )
              }
            </div>
          </div> */}
          </section>
          <section className="mx-auto flex flex-col items-center justify-center mb-8 ">
            <h1 className="-mt-16 lg:-mt-40 mb-8 text-center w-2/3 text-2xl">
              Graphics
            </h1>
            <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-3 w-2/3">
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-BIGFOOT.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <h3 className="mb-4">Download</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-UFO.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <h3 className="mb-4">Download</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-LIGHTNING.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <h3 className="mb-4">Download</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-SHARK.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <h3 className="mb-4">Download</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 h-2/3 m-4">
                  <img
                    src="/content/VoterFraudIllo-SELFIES.png"
                    className="flex text-center"
                    Image
                  ></img>
                </div>
                <h3 className="mb-4">Download</h3>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
}
