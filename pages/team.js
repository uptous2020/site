import Head from "next/head";
import data from "./teamcsv.json";
import data2 from "./teamcsv2.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const SocialLink = ({ link, icon, alt }) => (
  <div className="text-center py-2 m-2">
    <a href={link}>
      <img src={icon} alt={alt} />
    </a>
  </div>
);

const alts = ["LinkedIn", "Instagram", "TikTok", "GitHub", "Twitter"];
const icons = [
  "linkedin_black.svg",
  "instagram_black.svg",
  "tiktok_black.svg",
  "github_black.svg",
  "twitter_black.svg",
];
const profilePics = [
  "conor.jpg",
  "avarose.jpg",
  "SamS.jpg",
  "emilyds.jpg",
  "B.jpg",
  "alexr.jpg",
  "coreywerner.jpg",
].map((e) => `profiles/${e.length ? e : "conor.jpg"}`);

const profilePics2 = [
  "cullen.jpg",
  "alex.jpg",
  "shreya.jpg",
  "josh_svoboda_square.jpg",
  "angelo.webp",
  "lindseykennedy.jpg",
  "rosendo.jpg",
  "shianne.jpg",
  "hanna.jpg",
  "Jimbo.jpg",
  "Long.jpg",
  "benji.jpg",
  "aaron.jpg",
  "nik.jpg",
  "anisha.jpg",
  "eshita.jpg",
  "ali.jpg",
  "katie.jpg",
].map((e) => `profiles/${e.length ? e : "hanna.jpg"}`);

const transformationFunction = [
  (link) => link,
  (name) => `https://www.instagram.com/${name}`,
  (name) => `https://www.tiktok.com/${name}`,
  (name) => `https://github.com/${name}`,
  (name) => `https://twitter.com/${name}`,
];
const components = alts.map((alt, i) => (link) => () => (
  <SocialLink
    link={transformationFunction[i](link)}
    icon={icons[i]}
    alt={alt}
  />
));

const TeamMember = ({ teamObject, profilePic }) => {
  const { Name, Role, Bio, Vaccine, Voting } = teamObject;
  const SocialLinkComponent = alts
    .map((e) => [e, teamObject[e]])
    .filter((tuple) => tuple[0].length)
    .map(([alt, link]) => components[alts.indexOf(alt)](link));
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="w-40 h-40 m-4">
        <img src={profilePic} className="flex text-center" Image />
      </div>
      <h2 className="">{Name}</h2>
      <h3 className="mb-4">{Role}</h3>
      <p className="mb-1 w-3/5 text-center">{Bio}</p>
      <div className="flex justify-center mb-4">
        {SocialLinkComponent.map((SocialLink, i) => (
          <SocialLink key={i} />
        ))}
      </div>
      <div className="flex mx-4 justify-between mb-4 p-2">
        {Vaccine === "" || Vaccine === undefined ? (
          <div></div>
        ) : (
          <div className="mx-2 mr-8 text-center h-7 w-32 container mx-auto border-2 border-black rounded">
            <p className="py-2">{Vaccine}</p>
          </div>
        )}
        {Voting === "" || Voting === undefined ? (
          <div></div>
        ) : (
          <div className="mx-2 text-center h-7 w-32 container mx-auto border-2 border-black rounded">
            <p className="py-2">{Voting}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function About() {
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
          <div className="p-6 text-white flex flex-col items-center text-center mb-20">
            <h1 className="text-white text-2xl md:text-6xl mt-20 md:mt-16 pt-10 pb-10">
              TEAM
            </h1>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center justify-center mb-20">
          <p className="mb-12 text-center w-2/3">
            We're a collection of Gen Z leaders fixing some of the biggest
            problems facing our generation.
          </p>
          <div className="flex items-center border-orange-100 border-3 rounded-md px-4 py-1">
            <Link href="/contact">
              <a className="text-orange-100 pr-4">GET INVOLVED </a>
            </Link>
            <ArrowNarrowRightIcon className="h-10 w-10 text-orange-100" />
          </div>
          <h1 className="text-black text-5xl md:text-6xl mt-20 md:mt-16 pt-10 pb-10">
            LEADERSHIP
          </h1>
          <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-2 w-2/3">
            {data.map((member, i) => (
              <TeamMember
                key={i}
                teamObject={member}
                profilePic={profilePics[i]}
              />
            ))}
          </div>
          <h1 className="text-black text-5xl md:text-6xl mt-20 md:mt-16 pt-10 pb-10">
            CONTRIBUTORS
          </h1>
          <div className="mx-auto sm:grid grid-cols-1 w-full md: grid-cols-2 w-2/3">
            {data2.map((member, i) => (
              <TeamMember
                key={i}
                teamObject={member}
                profilePic={profilePics2[i]}
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
