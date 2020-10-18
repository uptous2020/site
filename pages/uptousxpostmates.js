import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Rules() {
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
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main className="body h-auto" style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
          <div className="p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-24">
              Up to Us x Postmates
            </h1>
            {/* <h5 className="text-white text-base md:text-base mt-4 md:mt-6">
              About
            </h5> */}
          </div>
          <h5 className="text-white text-center text-md md:text-lg mx-4 mt-6 md:mx-20 mb-8" >
            
          Up to Us and Postmates are partnering to help you get ready to vote. When you get ready to vote and 3 people use your referral link to do the same, you’ll get 30 days of Free Unlimited Delivery from Postmates. 
          </h5>
          <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
            What is Postmates?
          </h6>
          <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
          Postmates helps unlock the best of your neighborhood. Get anything delivered, anytime, anywhere. 

          </h6>
          <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
              What is Unlimited?
            </h6>
          <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
          Postmates Unlimited is a membership program that offers Free Delivery on every order over $12* from more than 600,000 restaurants, retailers and grocers. Members also enjoy exclusive discounts and offers.
          </h6>
          <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
              How do I qualify?
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
            To qualify for 30 days of Postmates Unlimited, three (3) friends must use your unique link to get ready to vote. 
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
              How do I claim the reward?
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
            When 3 people use your unique link to get ready to vote, we'll send you an email to activate your offer.
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
              Do I have to vote for the reward?
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
            No, you do not need to vote to receive the award.
            </h6>
            <h6 className="text-white text-center text-md md:text-lg mx-4 md:mx-20 my-4" >
            Voting not required in order to claim benefit. The qualifying cart size for Unlimited Free Delivery is applied by the market that you sign up in and may vary by location. Additional fees may vary and may apply. Limit 1 use per customer. Offer only valid through Tuesday, November 3, 2020 at 11:59 pm PT. Customers with multiple Postmates accounts may be excluded from this promotion. Offer is not shareable or transferable. Offer cannot be redeemed for cash or like exchanges. Postmates reserves the right to modify or terminate this offer at any time without notice. By tapping 'Try Free for 30 Days,' you acknowledge and agree that after 30 days, you will be charged $9.99 every month until you cancel. Cancel any time before the end of your trial and you won’t be charged.
            </h6>
            
        <Footer/>
      </main>
    </div>
  )
}


