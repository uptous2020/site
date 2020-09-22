import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Privacy() {
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
      <main className="body" style={{ backgroundImage: "url('hero.png')" }}>
          <Navbar />
          <div className="p-6 flex flex-col justify-center text-center">
          <h1 className="text-white text-2xl md:text-4xl mt-32 md:mt-24">
               Privacy Policy
             </h1>
             <h5 className="text-white text-sm md:text-base mt-4 md:mt-2">
               Effective September 21, 2020
             </h5>
          </div>
          <div className="p-6 flex flex-col justify-center text-left">
             <h5 className="text-white text-left text-md md:text-lg mx-4 mt-4 md:mt-0 md:mx-20 mb-4" >
          This Up to Us Privacy Policy applies to any website, mobile application, and other online service owned or operated by Up to Us, Inc. (“Up to Us”) that posts a link to or includes this Privacy Policy (collectively, the “Services”). This Privacy Policy applies to information we collect through the Services and information we collect offline, which we may combine with online data. This Privacy Policy describes our information collection practices, such as the types of information we may collect regarding visitors to the Services and how we may use or share that information.
          </h5>
          {/* <a name="audience"></a> */}
          <h5 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4">
          By accessing any part of the Services, or by otherwise providing information to Up to Us, you agree to the collection, disclosure, and use of your information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, do not access or use the Services or provide personal information to us.
          </h5>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4 " >
            GENERAL AUDIENCE
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Our Services are intended for a general audience and not intended for use by or targeted to those younger than the age of 16. We do not knowingly collect personal information from those younger than the age of 16.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            INFORMATION WE MAY COLLECT THROUGH THE SERVICES
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          We collect information from you directly, automatically when you visit the Services, and sometimes from third parties. Some of this information may be considered “personal information” under various applicable laws. We consider information that identifies you as a specific, identified individual to be personal information (such as contact information), and we treat additional information, including IP addresses and cookie identifiers, as “personal information” where required by applicable law. And, if we combine information we consider to be non-personal with personal information, we will treat that combined information as personal information under this Privacy Policy and as required by law. Note that we may de-identify personal information so that it is non-personal, such as aggregating or converting it to a code, sometimes using a function commonly known as a “hash”. We will treat de-identified information as non-personal to the fullest extent allowed by applicable law.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
              Information You Provide to Us Directly 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Up to Us may ask you to provide information directly when you interact with us, such as contact information (including your name, phone number, mailing address, and email address), other information about you, such as demographic information (ZIP code and gender, for example), and information about your interests and preferences. You may provide personal information, demographic data and other information through various forms and features on the Services or when you otherwise interact with us. 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
              Information We Collect Automatically as You Access the Services
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          We may use a variety of technologies that automatically or passively collect certain information about your use of the Services whenever you visit or interact with the Services (“Usage Information”). We may also work with third-party business partners (including service providers and third-party analytics or advertising services) and these third parties may use similar technologies to collect Usage Information when you use the Services. 

          Usage Information may include the browser or operating system you are using, the URL that referred you to our Services, the search terms you entered into a search engine that led you to our Services, all of the areas within our Services that you visit, and the time of day, the next website you visit after leaving our Services, among other information. We may use this Usage Information for a variety of purposes, including analyzing trends, administering the Services, gathering demographic information about our user base as a whole, and enhancing or otherwise improving the Services. 

          In addition, we automatically collect your IP address or other unique identifier (“Device Identifier”) for your computer, mobile phone, or other device used to access the Services. A Device Identifier is a number that is automatically assigned to your device used to access the Services, and our servers identify your device by its Device Identifier. We may be able to collect or infer your approximate location based on your Device Identifier or similar information we collect. 
          
          We use the following types of tracking technologies to automatically collect information when you interact with us online: 

          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Cookies and Local Storage: A cookie is a data file placed on your computer or other device when it is used to visit the Services. We may use both session and persistent cookies (which remain on your computer after the browser has been closed). You can find more information about cookies and how they work at <a href="https://www.allaboutcookies.org">All About Cookies</a>. Certain web browsers and browser add-ons may also provide additional local data storage mechanisms. Cookies and local storage may be used for many purposes, including, without limitation, remembering you and your preferences and tracking your visits to our Services. Most browsers provide you with the ability to disable or decline cookies and local storage. You will need to check your browser’s settings for further information. If you disable cookies, adjust privacy settings on your device, restrict local storage, or otherwise limit these technologies, you may not be able to use some features of the Services. 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Pixel tags: Pixel tags are small graphic images or other web programming code (also known as “web beacons”, “1x1 GIFs” or “clear GIFs”) that may be included in our web pages and e-mail messages. Pixel tags or similar technologies may be used for a number of purposes, including to count visitors to the Services, monitor how users navigate the Services, and compile statistics about usage of the Services and response rates to our e-mail messages.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Embedded Scripts: An embedded script is programming code that is designed to collect information about your interactions with the Services, such as the links you click on. The code is temporarily downloaded onto your device from our server or a third-party service provider, is active only while you are connected to a Service, and is deactivated or deleted thereafter.
 
          In addition, we may use a variety of other technologies that collect similar information for security and fraud detection purposes.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Social Media Interactions
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Functionality on the Services may permit interactions between the Services and a third-party service, such as Instagram or Twitter (“Social-Media Features”). For example, you may be able to use Social-Media Features to “like” or “share” content from the Services on a social platform and to otherwise connect the Services to a third-party service. If you choose to share content or to otherwise post information through the Services to a third-party service, that information may be publicly displayed. We and the third party may both have access to certain information about you and your use of the Services and the third-party service. These third-party social media companies may collect information about your visit to a Service through the Social-Media Features we have integrated into the Services. The information we collect in connection with Social-Media Features is subject to this Privacy Policy. The information collected and stored by the third party remains subject to the third party’s privacy practices.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Information Third Parties Provide About You 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          We may receive information about you from third parties. For example, if you make a donation to us through a third-party service provider that we use to collect donations or if you participate in a promotion that we are sponsoring on a third party’s platform, we may receive information about you from that third party - including personal information and Usage Information. We may also supplement the information we collect with outside records from third parties, publicly accessible websites, or public databases. We may combine the information we receive from third parties with information we collect through the Services. In those cases, we will apply this Privacy Policy to the combined information.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
              HOW WE MAY USE THE INFORMATION COLLECTED
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            We may use the information we collect (including your personal information and Usage Information) in order to: 
            <ul class="list-disc">
              <li>allow you to participate in the Services and other services provided by Up to Us; </li>
              <li>provide you with information or services that you have requested or agreed to receive or that we otherwise believe will interest you, including information and offers from us and our third-party partners;</li>
              <li>personalize your experience and tailor content we display to you, both on the Services and elsewhere online;</li>
              <li>process information you provide, including verifying that your email address is active and valid;</li>
              <li>process donations or other payments and fulfill transactions;</li>
              <li>provide support services, including responding to your inquiries;</li>
              <li>communicate with you regarding your use of the Services (such as about a donation or other transaction or your participation in a promotion) or other administrative communications, including, in our discretion, changes to the Services’ Privacy Policy, or any of our other terms or policies;</li>
              <li>protect Up to Us, our Services, and our donors, volunteers and other visitors from errors, misuse of the Services, fraud, or any criminal activity, to detect and troubleshoot problems, to resolve disputes, and to enforce applicable agreements and policies for the Services;</li>
              <li>further internal business purposes, such as to improve the Services or other services or programming offered by Up to Us and to comply with regulatory and legal obligations; or as otherwise disclosed in this Privacy Policy, as disclosed at the time you provide your information, or otherwise with your consent.</li>
            </ul>
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            WHEN WE DISCLOSE YOUR INFORMATION TO THIRD PARTIES
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Up to Us may share non-personal information, such as Usage Information and de-identified or aggregated user statistics, with third parties in our discretion. In addition, Up to Us may share information we have collected about you, including, without limitation, personal information and Usage Information, as disclosed at the time you provide your information or otherwise with your consent, as described elsewhere in this Privacy Policy, and in the following circumstances:
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Third Parties Providing Services on Our Behalf
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          We may share information with third parties who perform services on our behalf, such as website hosting, processing information, sending email or other communications, processing donations or other payments, running promotions, providing marketing assistance and data analysis, and performing other services. We may provide access to your personal information to such third parties in order for them to perform these services. 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Cobranded and Other Partners
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Cobranded partners are entities with whom we work to offer a service or feature. You can typically tell when you are accessing a service offered by a cobranded partner because the cobranded partner’s name will be featured prominently. You may be asked to provide information about yourself to utilize a feature offered by a cobranded partner. In doing so, you may be providing your information to both us and to the cobranded partner, or we may share your information with the cobranded partner in order to allow you to participate in the feature. Please note that the cobranded partner’s policies – and not this Privacy Policy – will apply to the cobranded partner’s collection and use of your information.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            We may also share personal information with other like-minded organizations, groups or causes  that share our principles or objectives, with organizations that facilitate information sharing among such parties, and with other third-party partners.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Administrative and Legal Reasons
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Up to Us may transfer and disclose information, including your personal information, Usage Information, and Device Identifier (e.g. IP address) with third parties to comply with a legal obligation, when we believe in good faith that the law requires it; at the request of government or investigatory authorities conducting an investigation; to verify or enforce our applicable Services terms and policies; or otherwise to protect our rights, property, safety, or security or that of other Services visitors or the public, such as when we are investigating potential fraud. For example, we may share information to respond to a court order or subpoena. We may also use Device Identifiers to identify users, and may do so in cooperation with copyright owners, Internet service providers, wireless service providers, or law enforcement agencies, in our discretion.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Sweepstakes, Contests, Promotions
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          We may offer sweepstakes, contests, or other promotions (any, a “Promotion”), that may require registration. By participating in a Promotion, you are agreeing to the provisions, conditions, or official rules that govern the Promotion, which may require specific requirements of you (including, without limitation, and except where prohibited by law, allowing the sponsor(s) of the Promotion to use your name, voice, likeness, or other indicia of persona in advertising or marketing materials). If you choose to enter a Promotion, personal information may be disclosed to third parties or the public in connection with the administration of such Promotion, including, without limitation, in connection with winner selection, prize fulfillment, as required by law or permitted by the Promotion’s terms or official rules (such as on a winners list).  
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            Business Transfers
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          In the event Up to Us goes through a business transition (such as a merger or acquisition by another company, including, without limitation, during the course of any due diligence process), your personal information will likely be among the assets transferred. By providing your personal information, you agree that we may transfer such information to the acquiring entity without your further consent. 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            THIRD-PARTY LINKS AND CONTENT
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          The Services may link to or incorporate websites or content hosted and served by third parties over which we have no control and which are governed by the privacy policies and business practices of those third parties. Up to Us is not responsible for the privacy practices or business practices of any third party.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            THIRD-PARTY ANALYTICS AND ADVERTISING PROVIDERS AND SIMILAR THIRD PARTIES
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            We work with (or may in the future work with) analytics partners, network advertisers, and other business partners to provide us with information regarding traffic on the Services (including pages viewed and the actions taken when visiting the Services), to serve advertisements elsewhere online (both our own and those of organizations with which we may partner), and to provide us with information regarding the use of the Services and the effectiveness of our advertisements. These third parties may set and access their own tracking technologies on your device (including cookies and pixel tags) and may otherwise collect or have access to information about your visits to and activity on the Services as well as other websites or online services. Some of these parties may collect personal information from you over time when you visit the Services or other websites and services. We may share Usage Information about visitors with these third-party analytics providers, advertising companies, and other third parties. 

            While we may use a variety of partners to perform advertising and analytics services, some of these companies may be members of the Network Advertising Initiative ("NAI”) or the Digital Advertising Alliance ("DAA") Self-Regulatory Program for Online Behavioral Advertising. You may want to visit <a href="http://www.networkadvertising.org/managing/opt_out.asp">Network Advising</a>, which provides information regarding targeted advertising and the "opt-out" procedures of NAI members. You may also want to visit <a href="http://www.aboutads.info/choices/">About Ads</a>, which provides information regarding targeted advertising and offers an “opt-out” by participating companies in the DAA Self-Regulatory Program. 
            
            We may use Google Analytics, which uses cookies and similar technologies to collect and analyze information about use of the Services and report on activities and trends. This service may also collect information regarding the use of other websites and online services. You can learn about Google’s practices by going to www.google.com/policies/privacy/‌partners/, and opt out by downloading the Google Analytics opt-out browser add-on, available at <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt Out</a>.
            
            Please note that opting out through these mechanisms does not opt you out of being served advertising. You will continue to receive generic ads while online.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            HOW WE RESPOND TO “DO NOT TRACK” SIGNALS 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. There is no consensus among industry participants as to what “Do Not Track” means in this context. Like many websites and online services, our Services do not alter their practices when they receive a “Do Not Track” signal from a visitor’s browser except as specifically required by law. To find out more about “Do Not Track,” please visit <a href="https://www.allaboutdnt.com">All About DNT</a>.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            DATA SECURITY
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Up to Us uses commercially reasonable security methods -- including administrative, technical, and physical measures -- to safeguard your personal information against loss, theft, and misuse, as well as unauthorized access, disclosure, alteration, and destruction.

          However, no system can be guaranteed 100% secure. We therefore cannot ensure or warrant the security of any information that you transmit to us, or that we transmit to you, or guarantee that it will be free from unauthorized access by third parties. You use the Services and provide us with information at your own initiative and risk.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            CONSENT TO TRANSFER AND STORAGE IN THE UNITED STATES 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Up to Us is a United States company. Please be aware that information we collect will be transferred to and processed in the United States and other countries. By using the Services, or providing us with any information, you fully understand and unambiguously consent to this transfer, processing, and storage of your information in the United States and other jurisdictions, the privacy laws of which may not be as comprehensive as those in the country where you reside and/or are a citizen. As a result, this information may be subject to access requests from governments, courts, or law enforcement in the United States and other countries according to laws in those jurisdictions.
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            YOUR CHOICES
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          You can unsubscribe from marketing emails through the opt-out mechanism included in each marketing email we send to you. Note that we reserve the right to send you certain email or postal communications relating to your use of our Services, service announcements, notices of changes to this Privacy Policy or our other terms, or similar administrative or transactional messages, and these transactional account messages may be unaffected if you choose to opt-out from email marketing communications.  
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            CHANGES TO PRIVACY POLICY 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          To the extent allowed by applicable law, Up to Us reserves the right to change or modify this Privacy Policy in our discretion at any time and will notify you of material changes by posting the changed or modified Privacy Policy on our Services. We may also provide notice to you in other ways in other discretion, such as through contact information you have provided. Any changes will be effective immediately upon the posting of the revised Privacy Policy unless otherwise specified, and your continued use of the Services after the effective date of the revised Privacy Policy (or such other act as specified in the revised Privacy Policy) will constitute your consent to those changes to the fullest extent allowed by applicable law. We will not use your personal information in a manner materially different than promised at the time the information was collected without giving you the chance to consent (which may be opt-out consent or which may occur through your continued use of the Services) to the new policy, as required.  
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
            NOTICE TO NEVADA RESIDENTS 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4" >
          Pursuant to Nevada law, consumers in Nevada have the right to opt-out of the sale of certain personally identifiable information we have collected about you through our Services.  Please note that Up to Us does not currently sell your covered information as those terms are defined under applicable Nevada law. However, you may still submit an opt-out of future sales and we will honor that request as required by Nevada law, if Up to Us were to engage in such a sale in the future. If you are a Nevada resident and would like to opt-out of future sales of your information, you must submit your request to support@2020upto.us. Your request must include “Nevada Opt-Out” in the subject line and the email should include your full name, street address, city, state, and zip code. Please contact us from the email address you have used to interact with us, or else provide us with that email address so that we can contact you if needed regarding this request.  If you previously provided a phone number to us, including it will assist us in making sure we identify you as someone who wants to proactively opt-out and processing your request. We are not responsible for requests that do not come through the designated request mechanism or do not contain sufficient information to allow us to process your request. You may also be required to take reasonable steps as we determine from time to time in order to verify your identity and/or the authenticity of the request. We will respond to your request within sixty (60) days either confirming that your request has been processed or indicating that we need an additional thirty (30) days to complete the request.
          </h6>
          <h6 className="text-white text-left md:mr-0 md:pr-0 mr-10 pr-40 text-md md:text-lg mx-4 md:mx-20 my-4" >
            CONTACT US 
          </h6>
          <h6 className="text-white text-left text-md md:text-lg mx-4 md:mx-20 my-4 pb-12" >
          If you have questions or concerns about Up to Us's Privacy Policy or data collection or use, please send an email to support@2020upto.us.
          </h6>
          </div>
        <Footer/>
      </main>
    </div>
  )
}

