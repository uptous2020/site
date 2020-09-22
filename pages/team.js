import Head from "next/head";
import data from './teamcsv.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SocialLink = ({link,icon,alt})=>(
  <div className="text-center py-2 m-2">
      <a href={link}>
        <img src={icon} alt={alt} />
      </a>
  </div>  
);



const alts = ['LinkedIn','Instagram','TikTok','GitHub','Twitter'];
const icons = ['linkedin_black.svg','instagram_black.svg','tiktok_black.svg','github_black.svg','twitter_black.svg'];
const profilePics = ['conor.jpg','avarose.jpg','SamS.jpg','emilyds.jpg','B.jpg','alexr.jpg','hanna.jpg','shreya.jpg','alex.jpg','josh_svoboda_square.jpg','lindseykennedy.jpg','rosendo.jpg','shianne.jpg','angelo.webp','Jimbo.jpg','Long.jpg','benji.jpg','aaron.jpg','nik.jpg','anisha.jpg','eshita.jpg','ali.jpg','katie.jpg'].map(e=>`profiles/${e.length ? e : 'conor.jpg'}`);
const transformationFunction = [link=>link,name=>`https://www.instagram.com/${name}`,name=>`https://www.tiktok.com/${name}`,name=>`https://github.com/${name}`,name=>`https://twitter.com/${name}`];
const components = alts.map((alt,i)=>(link)=>()=><SocialLink link={transformationFunction[i](link)} icon={icons[i]} alt={alt}/>);

const TeamMember = ({teamObject,profilePic})=>{
  const {Name,Role,Bio} = teamObject;
  const SocialLinkComponent = alts.map(e=>[e,teamObject[e]]).filter(tuple=>tuple[1].length).map(([alt,link])=>components[alts.indexOf(alt)](link));
  return (
  <div className="flex flex-col items-center">
    <div className="w-40 h-40 m-4">
      <img
        src={profilePic}
        className="flex text-center"
        Image
      />
    </div>

    <h2 className="">{Name}</h2>
    <h3 className="mb-4">{Role}</h3>
    <p className="mb-1 w-3/5 text-center">
    {Bio}
    </p>
    <div className="flex justify-center mb-4">
      {SocialLinkComponent.map((SocialLink,i)=><SocialLink key={i}/>)}
    </div>
  </div>)
};

export default function About() {
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
      <main>
        <section
          className="body"
          style={{ backgroundImage: "url('hero.png')" }}
        >
          <Navbar />
          <div className="p-6 text-white flex flex-col items-center text-center mb-20">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16 pt-10 pb-10">
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
            {data.map((member,i)=><TeamMember key={i} teamObject={member} profilePic={profilePics[i]}/>)}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
