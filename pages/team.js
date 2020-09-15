import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>Up To Us</title>
        <link rel="icon" href="/faviconuptous.ico" />
      </Head>
      <main>
        <section
          className="body"
          style={{ backgroundImage: "url('hero.png')" }}
        >
          <nav
            className="p-0 pr-6 mt-0 fixed w-full z-10 top-0"
            style={{ backgroundImage: "url('hero.png')" }}
          >
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex justify-center md:justify-start">
                <img
                  className="object-center mt-1 pt-3 md:pb-0 pb-2 ml-6 w-8 h-12"
                  src="/logowhite.svg"
                ></img>
                <Link href="/">
                  <a
                    className="inline-block text-white text-3l no-underline hover:text-gray-200 hover:text-underline py-6 px-1 "
                    href="https://2020upto.us"
                  >
                    up to us
                  </a>
                </Link>
              </div>
              <div>
                <ul className="mb-4 flex flex-row  justify-evenly md:justify-between text-sm md:text-base md:pt-6 md:mr-4">
                  <li className="text-orange-100 ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                    <script
                      type="text/javascript"
                      defer
                      src="https://donorbox.org/install-popup-button.js"
                    ></script>
                    <a
                      className="dbox-donation-button"
                      style={{
                        background:
                          "#000000) no-repeat 37px;color: #E69538;text-decoration: none;font-family: 'Monument'",
                      }}
                      href="https://donorbox.org/up-to-us"
                    >
                      DONATE
                    </a>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className=" text-white no-underline hover:text-gray-200 hover:text-underline">
                        CONTACT US
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="p-6 text-white flex flex-col items-center text-center mb-20">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              TEAM
            </h1>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center justify-center mb-20">
          <p className="mb-12 text-center w-2/3">
            We're a collective of Gen Z leaders and creators getting Gen Z to
            actually vote.
          </p>
          <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-2 w-2/3">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/conor.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Conor</h2>
              <h3 className="mb-4">Founder</h3>
              <p className="mb-1 w-3/5 text-center">
              Conor just wants Gen Z to vote. Before founding Up to Us, he lead Product Marketing at Tesla, helped lead Growth at Citizen, and interned for Senator Elizabeth Warren.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/conor-o-shea/">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/cnoshea">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/con060">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/hanna.png"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Hanna</h2>
              <h3 className="mb-4">Head of Content</h3>
              <p className="mb-1 w-3/5 text-center">
              She does content. What does that mean for Up to Us? Depends on the day, but always includes producing, social media, content strategy and the website — somehow she always manages to work in a car or two. 
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.tiktok.com/@2020uptous">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/2020uptous">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/alexr.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Alex Register</h2>
              <h3 className="mb-4">Head of Partnerships </h3>
              <p className="mb-1 w-3/5 text-center">
                Alex is head of Marketing + Partnerships for Daisie, former VICE
                + Tesla
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/alex-register-520a2352/">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/areuregistered/">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/avarose.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Ava</h2>
              <h3 className="mb-4">Head of Talent</h3>
              <p className="mb-1 w-3/5 text-center">
                Ava leads US Influencer Marketing for Google Hardware.
              </p>
              <div className="flex justify-center mb-4">
                <div className="flex justify-center mb-4">
                  <div className="text-center py-2 m-2">
                    <a href="https://www.linkedin.com/in/avarose/">
                      <img src="linkedin_black.svg" alt="linkedin"></img>
                    </a>
                  </div>
                  <div className="text-center px-4 py-2 m-2">
                    <a href="https://www.instagram.com/avarosebd/">
                      <img src="instagram_black.svg" alt="instagram"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/emilyds.png"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Emily</h2>
              <h3 className="mb-4">Senior Advisor, Board of Directors</h3>
              <p className="mb-1 w-3/5 text-center">
                Emily is the COO of Outvote, where she helps hundreds of
                campaigns, nonprofits, unions, and national advocacy
                organizations mobilize supporters for sweeping change in 2020.
                She runs on tea and musical theatre.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/emilyhdasilva/">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/emilydasilva">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/emilydasilva">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://tiktok.com/@alottounpack">
                    <img
                      className="w-5/6"
                      src="tiktok_black.svg"
                      alt="tiktok"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/shianne.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Shianne</h2>
              <h3 className="mb-4">Project Manager + Content</h3>
              <p className="mb-1 w-3/5 text-center">
              Shianne works in sports media account management at Optimum Sports working with Gatorade, McDonalds, BioFreeeze, & Intel.  Her dream is to own her own D&I Sports & Entertainment media consulting firm. 
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/Shianne-Baggett">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/shi_isfly">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/smbaggett">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/josh_svoboda_square.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Josh</h2>
              <h3 className="mb-4">Brand Designer</h3>
              <p className="mb-1 w-3/5 text-center">
              Josh is a graphic designer at WHOOP by day, and brand designer at Up to Us by night. He helps create and curate the visual identity and ensure that everything looks its best.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/joshsvoboda">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/joshsvo">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/joshsvo">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/@joshsvo">
                    <img src="github_black.svg" alt="github"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://tiktok.com/@joshsvo">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/anisha.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Anisha Sunkerneni</h2>
              <h3 className="mb-4">Developer + Outreach/Content</h3>
              <p className="mb-1 w-3/5 text-center">
                Anisha is a web developer and ex-medical student. She's passionate about design, medicine, technology and developing products that bring people together. Anisha enjoys asking questions that make people think.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/anishasunkerneni">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/youfoundanisha">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/youfoundanisha">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/ars394">
                    <img src="github_black.svg" alt="github"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://tiktok.com/@youfounsanisha">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/eshita.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Eshita</h2>
              <h3 className="mb-4">Developer + Outreach/Content</h3>
              <p className="mb-1 w-3/5 text-center">
              Eshita is a Data Analyst at Shareworks by Morgan Stanley. 
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/enandini/">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/enandini">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/enandini_">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/enandini">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://tiktok.com/@enandini">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/angelo.webp"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Angelo</h2>
              <h3 className="mb-4">Developer</h3>
              <p className="mb-1 w-3/5 text-center">
              Angelo is a civic-minded product manager. It is said that he has a distinct laugh.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/angelo-saraceno/">
                    <img src="linkedin_black.svg" alt="linkedin"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/ndneighbor">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://github.com/ndneighbor">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://tiktok.com/@ndneighbor">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/ali.JPG"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Ali Finkelstein</h2>
              <h3 className="mb-4">Outreach + Content</h3>
              <p className="mb-1 w-3/5 text-center">
              Ali graduated from MIT with a Master’s of Engineering and Bachelor’s of Science in Computer Science and Electrical Engineering. Ali is driven by innovation and has knowledge in the fields of security, databases, and systems. But really, she considers herself a “jack of all trades,” as she is always striving to learn new skills and new topics.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/alifinkelstein">
                    <img src="linkedin_black.svg" alt="LinkedIn"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/endingwithali">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/endingwithali">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/endingwithali">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://tiktok.com/endingwithali">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/shreya.png"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Shreya Sudarshana</h2>
              <h3 className="mb-4">Outreach + Content</h3>
              <p className="mb-1 w-3/5 text-center">
              Shreya is on the product management team at Disney+, working on consumer engagement and content discovery. 
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/sshreya/">
                    <img src="linkedin_black.svg" alt="LinkedIn"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/its.shreya">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/shreya_sud">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                {/* <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-full"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/katie.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Katie Lin</h2>
              <h3 className="mb-4">Outreach + Content</h3>
              <p className="mb-1 w-3/5 text-center">
              Katie leads product and business strategy at Couplet Coffee and studies Information Systems at Carnegie Mellon.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/katielin2001">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                {/* <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/2020uptous">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div> */}
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/ripkatie">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                {/* <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/aaron.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Aaron Son</h2>
              <h3 className="mb-4">Developer</h3>
              <p className="mb-1 w-3/5 text-center">
              Aaron is an engineer building software to transform subscription e-commerce at Scoutside.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/sonaaron">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/aaronedwardson">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/aaronwhatsupson">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/aaronprograms">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/alex.png"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Alex Rieflin</h2>
              <h3 className="mb-4">Designer</h3>
              <p className="mb-1 w-3/5 text-center">
              Alex is an independent designer building visual identity for Up to Us. He is registered to vote.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/arieflin">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/arieflin">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/arieflin">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                {/* <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div> */}
                {/* <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/nik.png"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Nikolas Huebecker</h2>
              <h3 className="mb-4">Developer</h3>
              <p className="mb-1 w-3/5 text-center">
              Nikolas is an entreprenuer and engineer currently working on a stealth startup.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/nhuebecker">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/nhuebecker">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/nhuebecker">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://github.com/nhuebecker">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://tiktok.com/nhuebecker">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/lindseykennedy.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>
{/* Marker */}
              <h2 className="">Lindsey Kennedy</h2>
              <h3 className="mb-4">Editorial Director</h3>
              <p className="mb-1 w-3/5 text-center">
              Lindsey is a fiction author and editorial director based in LA. She helped develop some of the branding for up to us.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/lindseytoldme/">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/lindseytoldme">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/lindseytoldme">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                {/* <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div> */}
                {/* <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-40 h-40 m-4">
                <img
                  src="/profiles/rosendo.jpg"
                  className="flex text-center"
                  Image
                ></img>
              </div>

              <h2 className="">Rosendo</h2>
              <h3 className="mb-4">Creative Director</h3>
              <p className="mb-1 w-3/5 text-center">
              Rosendo is a photographer and creative director living in Los Angeles.
              </p>
              <div className="flex justify-center mb-4">
                <div className="text-center py-2 m-2">
                  <a href="https://www.linkedin.com/in/rosendo-ayala-09766085/">
                    <img src="linkedin_black.svg" alt="tiktok"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://www.instagram.com/rousendo">
                    <img src="instagram_black.svg" alt="instagram"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/donrousendo">
                    <img src="twitter_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center px-4 py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img src="github_black.svg" alt="twitter"></img>
                  </a>
                </div>
                <div className="text-center py-2 m-2">
                  <a href="https://twitter.com/2020uptous">
                    <img
                      className="w-2/3"
                      src="tiktok_black.svg"
                      alt="twitter"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          <br></br>
          </div>
        </section>
        <footer
          className="w-full p-6"
          style={{ backgroundImage: "url('footer.png')" }}
        >
          <p className="justify-center text-center text-white">
            © 2020 Up To Us
          </p>
          <div className="flex justify-center">
            <div className="text-center px-4 py-2 m-2">
              <a href="https://www.tiktok.com/@2020uptous">
                <img src="tiktok.svg" alt="tiktok"></img>
              </a>
            </div>
            <div className="text-center px-4 py-2 m-2">
              <a href="https://www.instagram.com/2020uptous">
                <img src="instagram.svg" alt="instagram"></img>
              </a>
            </div>
            <div className="text-center py-2 m-2">
              <a href="https://twitter.com/2020uptous">
                <img src="twitter.svg" alt="twitter"></img>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
