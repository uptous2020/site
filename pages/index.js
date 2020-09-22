import Head from "next/head";
import Link from "next/link";
import Map from "../components/molecules/map";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import MapGL, { Source, Layer } from "react-map-gl";
import ContestLink from "../components/ContestLink";
import contests from "./contests.json"

const cheekyObj =   {
    "influencerName": "The Cheeky Boyos",
    "socialLink": "https://www.tiktok.com/@cheekyboyos?language=en&u_code=d37chme9dc9fk2&utm_campaign=client_share&app=musically&utm_medium=ios&user_id=6625415756434046982&tt_from=copy&utm_source=copy&source=h5_m",
    "influencerPhoto": "https://static-content.vercel.app/images/cheeky_boyos_outvote_profile.png",
    "contestName": "https://www.outvote.io/campaigns/up-to-us/check_registration?referral_hash=e5f49ef4d3d4519c91ff52240e9c19f1b6fb048d",
    "isVisible": "TRUE"
  }

const LandingContent = (props) => {
  const { visible } = props;
  
  const mapView = <>
          <div className="h-full w-full relative">
            <div className='rainbowText z-40 absolute flex flex-col text-center'>
              <p>21,732</p>   
            </div>
            <Map cHeight="800px" className='map'/>
          </div>
  </>;
  const aboutText = (
    <>
      <div className="p-12 mx-auto text-white flex flex-col items-center text-center">
      <img
        className="hidden md:block h-64 mt-16 md:mt-6"
        src="/up_to_us_logo_white.svg"
      />
      <h1 className="text-2xl md:text-4xl mt-20 md:mt-16">WHO WE ARE</h1>
      <p className="px-0 lg:px-56 text-xl md:text-xl mt-2">
        up to us is a collective of Gen Z creators fixing some of the biggest
        problems facing our generation.
      </p>
      <h1 className="text-2xl md:text-4xl mt-12 md:mt-16">WHAT WE STAND FOR</h1>
      <p className="text-xl md:text-xl description mt-2 pb-4">
        we don’t want to let our future be decided by others. we want to make a
        change by turning our voices into votes. our generation will save the
        world.<br></br>it’s up to us.
      </p>
      </div>
    </>
  );

  return visible ? mapView : aboutText;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>

      <main>
        <section style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
          {/* bruh */}
          <LandingContent visible={false} />
          {/* <div className="h-full w-full relative">
            <div className='rainbowText z-40 absolute flex flex-col text-center'>
              <p>21,732</p>   
            </div>
            <Map cHeight="450px" className='map'/>
          </div> */}
        </section>
        <section>
          <div className="mx-auto mb-8 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl md:mt-16 text-2xl mt-12">
              Check Your Registration Status
            </h1>
            <p className="text-center md:text-left">
              and be entered to win some of these prizes
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4">
              <ContestLink bgColor="orange-600" description="Win a Tesla from the Cheeky Boyos" {...cheekyObj}/>
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
                building a new way to register & motivate Gen Z to vote
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
                providing content that leads to direct action & steers the
                conversation
              </p>
            </div>
          </div>
          <br></br>
        </section>
        <Footer />
      </main>
    </div>
  );
}
