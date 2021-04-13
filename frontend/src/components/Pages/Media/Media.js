import React from "react";
import Topbar from "../../Topbar/Topbar";
import ReactPlayer from "react-player/youtube";

function Media() {
  return (
    <>
      <Topbar transparent={true} />
      <section className="andrew text-center pb-10">
        <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900">
          When I Think About Andrew...
        </h1>
        <p className="mt-10 text-base text-gray-700 text-lg">
          Friends, teammates, and coaches of Andrew share special memories of
          Andrew
        </p>
        <div className="container mx-auto mt-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mx-auto px-5">
              <ReactPlayer url="https://www.youtube.com/watch?v=9tkIgVc2PIw" />
            </div>
            <div className="w-full md:w-6/12 mx-auto px-5">
              <ReactPlayer url="https://www.youtube.com/watch?v=3Zm23S8-Sdg" />
            </div>
          </div>
        </div>
      </section>

      <section className="interviews text-center bg-gray-300 pt-10 pb-10">
        <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900">
          News Interviews
        </h1>
        <p className="mt-10 text-base text-gray-700 text-lg">
          Paul Brothers talks to coaches of the 4AM Camp
        </p>
        <div className="container mx-auto mt-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mx-auto px-5">
              <h2 className="mt-2 text-base text-gray-700 text-lg">2020</h2>
              <iframe
                src="https://globalnews.ca/video/embed/7254196/"
                width="640"
                height="360"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="Iframe contains video URL"
                className="mx-auto"
              ></iframe>
            </div>
            <div className="w-full md:w-6/12 mx-auto px-5">
              <h2 className="mt-2 text-base text-gray-700 text-lg">2019</h2>
              <iframe
                src="https://globalnews.ca/video/embed/5754156/"
                width="640"
                height="360"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="Iframe contains video URL"
                className="mx-auto"
              ></iframe>
            </div>
            <div className="mt-10 mx-auto">
              <iframe
                src="https://webapps.9c9media.com/vidi-player/1.9.19/share/iframe.html?currentId=2018060&config=ctvnews/share.json&kruxId=&rsid=bellmedianewsprod,bellmediaglobalprod&siteName=CTVNews&cid=%5B%7B%22contentId%22%3A2018060%2C%22ad%22%3A%7B%22adsite%22%3A%22ctv.ctvnews%22%2C%22adzone%22%3A%22embed%22%7D%7D%5D"
                width="640"
                height="360"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="CTV News"
                className="mx-auto"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto mb-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-3/12 mx-auto px-10 text-center">
              <h1 className="font-semibold text-4xl">Articles</h1>
            </div>
            <div className="w-full md:w-9/12 mx-auto">
              <div>
                <h3 className="text-2xl font-semibold">
                  "Camp to honour 'selfless and generous' Nova Scotian"
                </h3>
                <a
                  href="https://www.cbc.ca/amp/1.5238878"
                  className="mt-4 text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed text-gray-600"
                >
                  - CBC News Article (Click here)
                </a>
                <br />
                <br />
                <h3 className="text-2xl font-semibold">
                  "'4AM Night' Dinos honour Milner"
                </h3>
                <a
                  href="https://godinos.com/news/2019/10/9/mens-basketball-dinos-honour-milner-on-4am-night-friday.aspx"
                  className="mt-4 text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed text-gray-600"
                >
                  - Dinos Article (Click here)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: REFACTOR THIS!!!! TO SOMETHING SIMILAR TO HERO SECTION */}

      <section className="pb-32 bg-gray-300 -mt-24 flex flex-wrap">
        <div className="rothesay container mx-auto">
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto">
                <iframe
                  src="https://webapps.9c9media.com/vidi-player/1.9.19/share/iframe.html?currentId=1879560&config=ctvnews/share.json&kruxId=&rsid=bellmedianewsprod,bellmediaglobalprod&siteName=CTVNews&cid=%5B%7B%22contentId%22%3A1879560%2C%22ad%22%3A%7B%22adsite%22%3A%22ctv.ctvnews%22%2C%22adzone%22%3A%22embed%22%7D%7D%5D"
                  width="640"
                  height="360"
                  frameborder="0"
                  allowfullscreen
                  scrolling="no"
                  title="CTV News"
                  className="mx-auto"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto items-center">
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Watch the Rothesay Netherwood School Basketball Program honour
                  Andrew’s impact on their program, as their first ever recruit.
                </p>
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                  In the words of Coach Damian Gay: “He loved the idea that he
                  was going to be helping to build something astronomical
                  compared to what was currently in Atlantic Canada. He was a
                  dreamer, but had the work ethic to match it.”
                </p>
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Andrew was undoubtedly an instrumental member in building the
                  program to where it is today – one of the top Prep Basketball
                  Programs in Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dinos container mx-auto">
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto">
                <iframe
                  src="https://www.youtube.com/embed/2kgtp22YufU"
                  width="640"
                  height="360"
                  frameborder="0"
                  allowfullscreen
                  scrolling="no"
                  title="Dinos Youtube"
                  className="mx-auto"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto items-center">
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                  Watch as the University of Calgary Dinos celebrate the life of
                  Andrew with a touching tribute
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="leadership award container mx-auto">
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto">
                <iframe
                  src="https://www.youtube.com/embed/SogfWJW4uT8"
                  width="640"
                  height="360"
                  frameborder="0"
                  allowfullscreen
                  scrolling="no"
                  title="Leadership award Youtube"
                  className="mx-auto"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container xl:w-6/12 mx-auto">
            <div className="flex flex-wrap items-center mt-10 md:mt-32">
              <div className="w-full md:w-9/12 mx-auto items-center">
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  At the conclusion of the 2020 season, the National Preparatory
                  Association awarded the first annual Andrew Milner Leadership
                  Award. The award bears Andrew’s name to recognize his
                  exceptional leadership and will be handed out annually to the
                  graduating senior who best exemplifies Andrew’s traits as a
                  leader – someone who sacrificed his own personal gains for the
                  greater good of his team and the people around him.
                </p>
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                  The inaugural Andrew Milner Leadership Award was awarded to
                  Jack Fifield and Caleb Sooley.
                </p>
                <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  As athletes for RNS, both Jack and Caleb played with Andrew in
                  their freshman seasons. They learned from Andrew’s leadership
                  and as Team Captains in their senior seasons they led RNS to a
                  12-0 record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;
