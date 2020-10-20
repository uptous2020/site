import {useState,useEffect} from 'react';
import axios from 'axios';
import Head from "next/head";
import Link from "next/link";
import Map from "../components/molecules/map";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import ContestLink from "../components/ContestLink";
import contests from "./contests.json"

const cheekyObj =   {
    "influencerName": "The Cheeky Boyos",
    "socialLink": "https://www.tiktok.com/@cheekyboyos?language=en&u_code=d37chme9dc9fk2&utm_campaign=client_share&app=musically&utm_medium=ios&user_id=6625415756434046982&tt_from=copy&utm_source=copy&source=h5_m",
    "influencerPhoto": "https://static-content.vercel.app/images/cheeky_boyos_outvote_profile.png",
    "contestName": "https://www.outvote.io/campaigns/up-to-us-cheeky-boyos/check_registration",
    "isVisible": "TRUE"
};


const LandingContent = (props) => {
  const { visible,numberOfSignup } = props;

  
  const mapView = <>
          <div className="h-full w-full relative mt-5" >
            <div className='map-bg-overlay z-40 flex flex-col text-center w-full' style={{backgroundImage:'url(hero-transparent.png)'}}>
              <h1 className='text-6xl md:text-7xl lg:text-8xl rainbowText tracking-widest'>{numberOfSignup.toLocaleString()}</h1>
              <h2 className='text-lg md:text-2xl lg:text-4xl text-white tracking-widest'>READY TO VOTE IN THE 2020 ELECTION</h2>
              <div className='inline mt-8'>
                <a className='p-3 pl-5 pr-5 rounded-md text-white inline-block' style={{backgroundColor:'#E69538'}} href='https://www.outvote.io/campaigns/up-to-us-x-postmates/ready_to_vote?postmates_enabled=true'>Get Ready to Vote</a>
              </div>
              {/* https://www.outvote.io/campaigns/up-to-us/check_registration */}
              <p className='mt-4 text-center text-white p-4'>Find the easiest and safest way to vote in your state</p>
            </div>
            <div className="-mt-8">
              <Map cHeight="800px" className='map'/>
            </div>
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

const url = 'https://ndneighbor-datatransformation.zeet.app/numberOfRegistration'
// const url = 'http://localhost:8000/numberOfRegistration'
const getRequest = ()=>axios.get(url);

export default function Home() {
  const [numberOfSignup,setNumberOfSignup] = useState(0);

  const getData = async ()=>{
    const {data} = await getRequest();
    setNumberOfSignup(data.number)
  }

  useEffect(()=>{
    getData()
  })

  return (
    <div>
      <Head>
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
        <section>
          <Navbar />
          {/* bruh */}

          <LandingContent visible={true} numberOfSignup={numberOfSignup}/>

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

          {/* <h1 className="md:text-4xl md:mt-16 text-2xl mt-12 ">WHAT WE DO:</h1>
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
          </div> */}
          {/* <div className="my-16 flex flex-col items-center md:flex-row-reverse">
            <div className="md:pr-10">
              <p className="text-sm mb-8 w-256 text-center px-16">
              * Up to Us x Cheeky Boyos Sweepstakes: VOTER REGISTRATION NOT REQ’D TO ENTER. NO PURCH. NEC.; REG./PURCH. WILL NOT INCREASE CHANCES OF WINNING. 48 US & DC (excl. NY & FL) age 18+ only. Begins 12:00:00am ET on 9/22/20; ends 2:59:59am ET on 10/5/20. SUBJ. TO RULES AT 2020upto.us/uptousxcheekyboyos. Must participate thru outvote.io/campaigns/up-to-us-cheeky-boyos/check_registration to be eligible. Limit 1 std. & 500 bonus entries/person. Prize ARV: $46790. Odds of winning depend on # of elig. entries recv’d. Void where prohib. Sponsor: Up to Us, Inc., 206 Ave A #4A, NY, NY 10009

              </p>
              <p className='text-sm w-256 text-center px-16'>
              ^ Check & Chat Promotion: VOTER REGISTRATION NOT REQ’D TO ENTER. NO PURCH. NEC.; REG./PURCH. WILL NOT INCREASE CHANCES OF WINNING. Subj. to rules at 2020upto.us/checkandchat. 50 US & DC age 18+ only. Promotion consists of multiple separate sweepstakes: one for each influencer. Each sweepstakes begins when influencer posts link to individ. entry page & ends 2:59:59am ET on 10/1/20. Use the links above to access specific influencer’s sweepstakes entry page. Entry into 1 sweeps ≠ entry into any other sweeps in this promotion. Limit 1 std. & 500 bonus entries/person. Must respond to prize notice within 6 hours. Prize has no retail value & may be awarded as social DM or audio/video chat. See rules for details. Odds of winning depend on # of elig. entries recv’d for appl. sweepstakes. Void where prohib. Sponsor: Up to Us, Inc., 206 Ave A #4A, NY, NY 10009
              </p>
            </div>
          </div>  */}
          {/* <br></br> */}
        </section>
        <Footer />
      </main>
    </div>
  );
}
