import React from "react";
import Topbar from "../../Topbar/Topbar";
import Slider from "./Slider";
import { motion } from "framer-motion"

function Why() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('images/2.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            <Topbar />
          </div>
          <div className="container relative mt-5 mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl">
                  "Never forget what made you who you are".
                </h1>
                <p className="mt-4 text-lg text-gray-300">- Andrew Milner</p>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-32 bg-gray-300 -mt-24 flex flex-wrap">
          <div className="carousel w-9/12 mx-auto xl:hidden">
            <Slider />
          </div>
          <div className="container hidden xl:flex w-full xl:w-6/12 mx-auto">
            <div className="flex flex-wrap">
              <div className="2xl:pt-12 pt-6 w-full 2xl:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 ">
                  <img
                    src="images/sike.jpg"
                    alt=""
                    className="shadow-lg rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full 2xl:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 ">
                  <img
                    src="images/beat.jpg"
                    alt=""
                    className="shadow-lg rounded-lg"
                  />
                </div>
              </div>

              <div className="2xl:pt-10 pt-6 w-full 2xl:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-8 ">
                  <img
                    src="images/ankles.jpg"
                    alt=""
                    className="shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Impact beyond the lines of the basketball court
                </h3>
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Residing in Antigonish, Andrew's passion for basketball meant
                  sacrificing time and money in order to play for the Nova
                  Scotia Provincial Team. But all of this paid off in 2015, when
                  Andrew and his U17 BNS teammates won a National Championship
                  on Nova Scotian soil and again the following summer.
                </p>
                <br />
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Andrew was an exceptional leader, never wanting or needing any
                  recognition. He wasn't the MVP or Tournament All-Star in
                  either of the National Championships, and the average fan
                  probably wouldn't recognize his impact. But his coaches and
                  teammates did. Andrew did all the little things, things that
                  no statistic or box score could quanitfy.
                </p>
                <br />
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                  He was a leader in every sense of the word.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 mx-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg mb-5"
                  src="images/coach.jpg"
                />
              </div>
              <div className="w-full md:w-6/12 mx-auto">
                <div>
                  <h3 className="text-3xl font-semibold">Paying it forward</h3>
                  <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed text-gray-600">
                    After his time at Rothesay Netherwood School, Andrew joined
                    the Calgary Dinos. During his rookie season, the Dinos would
                    win the U Sports National Championship, their first ever
                    National Title, and bringing Andrew's Championship count to
                    3.
                  </p>
                  <br />
                  <p className="mt-4 text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed text-gray-600">
                    However, one of the most inspiring accomplishments of
                    Andrew's career was the impact he made on aspiring young
                    basketball players through Calgary's Develop a Dino program.
                    Andrew was a coach, role model, and friend to all kids in
                    the program - one of many acts that truly exemplifies
                    Andrew's leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-48">
          <div className="container mx-auto">
            <div className="flex flex-wrap mx-auto">
              <div className="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mx-auto">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/damian.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Coach Damian Gay</h5>
                    <p className="mt-1 text-sm text-gray-500 font-semibold">
                      "Not too many kids his age have a legitimate legacy - its
                      inspiring."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:mb-0 mb-12 px-4 mx-auto">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/calgary_heads.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Coach Dan Vanhooren</h5>
                    <p className="mt-1 text-sm text-gray-500 font-semibold">
                      "In all my years of coaching, I've never come across a
                      better leader."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Why;
