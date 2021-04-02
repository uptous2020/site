import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {
  SearchIcon,
  ArrowNarrowRightIcon,
  ChartBarIcon,
  FireIcon,
} from "@heroicons/react/outline";

export default function Work() {
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
        <Navbar />
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
          <div className="p-6 text-white flex flex-col items-center text-center">
            <h1 className="text-white text-2xl md:text-6xl mt-20 md:mt-16 pt-10 pb-10">
              OUR WORK
            </h1>
          </div>
        </section>
        <div className="flex justify-center">
          <div className="grid grid-cols-12 gap-4 sm:p-16 mt-16 mb-8 mx-8 md:mt-4 md:mx-0 max-w-6xl">
            <div className="col-span-12 bg-black md:p-20 sm:p-8 p-12">
              <h1 className="text-white text-left text-sm lg:text-3xl md:text-xl md:mt-8 sm:pt-4 pt-10 pb-32 max-w-5xl">
                Up to Us and MIT's Center for Constructive Communication are
                collaborating to increase trust in COVID-19 vaccines and promote
                equity in marginalized communities using a highly effective
                approach.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-8 my-4 max-w-5xl">
                <div className="col-span-2">
                  <SearchIcon className="h-12 md:h-20 md:w-20 md:my-8 text-teal-500" />
                  <h1 className="text-teal-500 text-2xl my-2 md:my-8">
                    Identify
                  </h1>
                  <p className="text-white text-sm">
                    Identify areas with lagging vaccination and high levels of
                    distrust.
                  </p>
                </div>
                <div>
                  <ArrowNarrowRightIcon className="invisible md:visible md:mt-24 h-12 w-12 text-white" />
                </div>
                <div className="col-span-2">
                  <ChartBarIcon className="h-12 md:h-20 md:w-20 md:my-8 text-orange-100" />
                  <h1 className="text-orange-100 text-2xl my-2 md:my-8">
                    Analyze
                  </h1>
                  <p className="text-white text-sm">
                    Analyze key community concerns, develop & test persuasive
                    counter messaging.
                  </p>
                </div>
                <div>
                  <ArrowNarrowRightIcon className="invisible md:visible md:mt-24 h-12 w-12 text-white" />
                </div>
                <div className="col-span-2">
                  <FireIcon className="h-12 md:h-20 md:w-20 md:my-8 text-blue-100" />
                  <h1 className="text-blue-100 text-2xl my-2 md:my-8">
                    Deploy
                  </h1>
                  <p className="text-white text-sm">
                    Deploy and scale high performing persuasive messages to the
                    community, increasing trust & mobilization.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-span-12 my-4">
              <div className=" grid grid-cols-1 md:grid-cols-9 my-4">
                <div className=" md:col-start-1 md:col-end-5 hover:opacity-75">
                  <a href="https://www.axios.com/how-gen-z-activists-are-using-tech-and-tiktok-to-promote-voting-d0aee445-307a-4812-9dc0-9ca2622bb777.html">
                    <img className="my-4 md:my-0" src="Axios.png" />
                  </a>
                </div>
                <div className=" md:col-span-4 md:col-end-10 hover:opacity-75">
                  <a href="https://www.bloomberg.com/news/videos/2020-10-31/up-to-us-getting-get-gen-z-to-vote-video">
                    <img
                      className="my-4 md:my-0 mr-auto float-right"
                      src="Bloomberg.png"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black col-span-12 my-4">
              <div className=" grid grid-cols-1 gap-8 md:grid-cols-12 p-6">
                <div className=" md:col-start-1 md:col-end-5">
                  <h1 className="text-white w-8 text-xl">Tesla Giveaway</h1>
                  <img className="mt-4" src="image 7.png" />
                </div>
                <div className="md:col-start-5 md:col-end-11 lg:mt-12">
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us partnered with popular TikTok creators, the
                    Cheeky Boyos (9.2M followers), to give away a Tesla to one
                    lucky voter that checked their voter registration status via
                    our platform, with their Tiktoks generating 6.4MM+ views.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us also worked with the organization Vote Tripling
                    to encourage young voters to recruit their friends and
                    family to check their voter registration status for
                    additional entries to the giveaway.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Overall, our Tesla Giveaway drove 42,000+ young voters to
                    check their registration status, make a voting plan, and
                    encourage family and friends to do the same.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black col-span-12 my-4">
              <div className=" grid grid-cols-1 gap-8 md:grid-cols-12 p-6 md:p-0">
                <div className=" md:col-start-1 md:col-end-5">
                  <h1 className="text-white w-64 text-xl md:m-6">
                    High Reach Content
                  </h1>
                  <img className="md:mt-56 mt-4" src="leo 1.png" />
                </div>
                <div className="md:col-start-5 md:col-end-11 md:m-3 lg:mt-12">
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us worked with partners to create and distribute
                    impactful, non-partisan content to celebrities with large
                    and engaged followings.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Influential figures who have shared out content include
                    Leonardo DiCaprio, Kerry Washington, Sacha Barron Cohen,
                    Gigi Hadid, Mark Ruffalo, Orlando Bloom, Sara Silverman,
                    Chelsea Handler, Ashton Kutcher, Rosario Dawson, and Kate
                    Hudson, among others.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Collectively, these individuals have followings in the
                    hundreds of millions, amplifying our messages all across the
                    country.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black col-span-12 my-4">
              <div className=" grid grid-cols-1 gap-8 md:grid-cols-12 md:p-0 p-6">
                <div className=" md:col-start-1 md:col-end-5 ">
                  <h1 className="text-white w-8 text-xl md:m-6">Postmates</h1>
                  <img
                    className="md:mt-40 mt-4 md:ml-2"
                    src="postmates 1.png"
                  />
                </div>
                <div className="md:col-start-5 md:col-end-11 md:m-3 lg:mt-12">
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us partnered with Postmates to incentivize young
                    voters to encourage their friends and family to make a
                    voting plan.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Each participant that recruited 3 friends to check their
                    voter registration status and make a voting plan received
                    1-month of free, unlimited delivery from Postmates.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us coordinated a peer-to-peer texting campaign to
                    promote the campaign, reaching 15,000+ young American’s in
                    less than a week.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black col-span-12 my-4">
              <div className=" grid grid-cols-1 gap-8 md:grid-cols-12 p-6">
                <div className="md:col-start-1 md:col-end-5">
                  <h1 className="text-white text-xl">
                    Persuasion + Sponsorship
                  </h1>
                  <img className="mt-8" src="persuasion_icon 1.svg" />
                </div>
                <div className="md:col-start-5 md:col-end-11 lg:mt-12">
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • Up to Us partnered with Frameshift, a message development
                    and testing organization, to identify and distribute content
                    that would persuade infrequent and distrustful voters to go
                    to the polls.
                  </p>
                  <p className="text-white text-left md:text-base text-sm my-3 lg:text-lg">
                    • As a 501(c)(3), Up to Us was able to accept significant
                    grants and donations to fund this work, and provided legal
                    review to ensure it remained non-partisan and accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
