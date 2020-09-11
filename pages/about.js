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
                    <Link href="/about">
                      <a className=" text-white ml-4 mr-2 md:mr-10 no-underline hover:text-gray-200 hover:text-underline">
                        TEAM
                      </a>
                    </Link>
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
          <div className="p-6 text-white flex flex-col items-center text-center">
            <h1 className="text-white text-2xl md:text-4xl mt-20 md:mt-16">
              TEAM
            </h1>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center justify-center">
          <p className="m-12 text-center">
            We're a collective of Gen Z leaders and creators getting Gen Z to
            actually vote.
          </p>
          <div class="mx-auto sm:grid grid-cols-1 md: grid-cols-2">
            <div class="flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
                        <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
            <div class="mt-16 flex flex-col items-center">
              <div class="w-40 h-40 m-4">
                <img src="/angelo.webp" class="flex text-center" Image></img>
              </div>

              <h2 class="">Conor O'Shea</h2>
              <h3 class="mb-4">Creator, Head of Something</h3>
              <p class="mb-1 w-3/5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum diam elit, eu tristique lectus lacinia
                et. Duis nec lacus mauris. Duis porttitor placerat euismod.
                Nullam vitae erat erat. Mauris condimentum pellentesque
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
          </div>
          <br></br>
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
