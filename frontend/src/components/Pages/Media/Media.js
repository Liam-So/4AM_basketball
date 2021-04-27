import React from "react";
import Topbar from "../../Topbar/Topbar";
import Award from "../../../images/Andrew graphic.jpeg";

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
        <div className="container mx-auto mt-10 mb-5">
          <div className="items-center flex flex-wrap">
            <div className="w-full mx-auto px-5 mb-10 md:mb-0">
              <iframe
                src="https://www.youtube.com/embed/9tkIgVc2PIw"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="Remembering Andrew"
                className="mx-auto md:w-full md:h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="interviews text-center bg-gray-100 pt-10 pb-10 mb-10">
        <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900">
          News Interviews
        </h1>
        <div className="container mx-auto mt-10 flex flex-wrap mb-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mx-auto px-5 ">
              <h2 className="mt-2 text-base text-gray-700 text-lg font-bold">
                Global News 2020
              </h2>
              <iframe
                src="https://globalnews.ca/video/embed/7254196/"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="Global News 2020"
                className="mx-auto md:w-full md:h-full"
              ></iframe>
            </div>
            <div className="w-full md:w-6/12 mx-auto px-5">
              <h2 className="mt-2 text-base text-gray-700 text-lg font-bold">
                CTV News
              </h2>
              <iframe
                src="https://webapps.9c9media.com/vidi-player/1.9.19/share/iframe.html?currentId=2018060&config=ctvnews/share.json&kruxId=&rsid=bellmedianewsprod,bellmediaglobalprod&siteName=CTVNews&cid=%5B%7B%22contentId%22%3A2018060%2C%22ad%22%3A%7B%22adsite%22%3A%22ctv.ctvnews%22%2C%22adzone%22%3A%22embed%22%7D%7D%5D"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                title="CTV news"
                className="mx-auto md:w-full md:h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: REFACTOR THIS!!!! TO SOMETHING SIMILAR TO HERO SECTION */}
      <section className="Other text-center pb-10 pt-10 mt-10">
        <h1 className="mb-10 pb-10 md:mb-0 text-4xl tracking-tight font-extrabold text-gray-900">
          Other 4AM Intiatives
        </h1>
        <div className="pb-32 -mt-24 flex flex-wrap mx-auto">
          <div className="rothesay award container mx-auto flex flex-wrap 3xl:h-96 mb-10">
            <div className="container xl:w-6/12 mx-auto mb-10">
              <div className="mt-10 md:mt-32 h-full xl:h-3/4 xl:w-9/12">
                <iframe
                  src="https://webapps.9c9media.com/vidi-player/1.9.19/share/iframe.html?currentId=1879560&config=ctvnews/share.json&kruxId=&rsid=bellmedianewsprod,bellmediaglobalprod&siteName=CTVNews&cid=%5B%7B%22contentId%22%3A1879560%2C%22ad%22%3A%7B%22adsite%22%3A%22ctv.ctvnews%22%2C%22adzone%22%3A%22embed%22%7D%7D%5D"
                  frameborder="0"
                  allowfullscreen
                  scrolling="no"
                  title="CTV News"
                  className="mx-auto md:w-full md:h-full"
                ></iframe>
              </div>
            </div>
            <div className="container xl:w-6/12 mx-auto">
              <div className="flex flex-wrap items-center mt-10 md:mt-32">
                <div className="w-full md:w-9/12 mx-auto items-center">
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Watch the Rothesay Netherwood School Basketball Program
                    honour Andrew’s impact on their program, as their first ever
                    recruit.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                    In the words of Coach Damian Gay: “He loved the idea that he
                    was going to be helping to build something astronomical
                    compared to what was currently in Atlantic Canada. He was a
                    dreamer, but had the work ethic to match it.”
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Andrew was undoubtedly an instrumental member in building
                    the program to where it is today – one of the top Prep
                    Basketball Programs in Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dinos award container mx-auto flex flex-wrap 3xl:h-96 mb-10">
            <div className="container xl:w-6/12 mx-auto mb-10">
              <div className="mt-10 md:mt-32 h-full xl:h-3/4 xl:w-9/12">
                <iframe
                  src="https://www.youtube.com/embed/2kgtp22YufU"
                  frameborder="0"
                  allowfullscreen
                  scrolling="no"
                  title="Dinos Youtube"
                  className="mx-auto md:w-full md:h-full"
                ></iframe>
              </div>
            </div>
            <div className="container xl:w-6/12 mx-auto">
              <div className="flex flex-wrap items-center mt-10 md:mt-32">
                <div className="w-full md:w-9/12 mx-auto items-center">
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                    Watch as the University of Calgary Dinos celebrate the life
                    of Andrew with a touching tribute
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="leadership award container mx-auto flex flex-wrap 3xl:h-96 mb-10">
            <div className="container xl:w-6/12 mx-auto mb-10">
              <div className=" mt-10 md:mt-32 xl:h-3/4 xl:w-9/12">
                <img src={Award} alt="leadership award" />
              </div>
            </div>
            <div className="container xl:w-6/12 mx-auto">
              <div className="flex flex-wrap items-center mt-10 md:mt-32">
                <div className="w-full md:w-9/12 mx-auto items-center">
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    At the conclusion of the 2020 season, the National
                    Preparatory Association awarded the first annual Andrew
                    Milner Leadership Award. The award bears Andrew’s name to
                    recognize his exceptional leadership and will be handed out
                    annually to the graduating senior who best exemplifies
                    Andrew’s traits as a leader – someone who sacrificed his own
                    personal gains for the greater good of his team and the
                    people around him.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-bold text-gray-800 mt-0">
                    The inaugural Andrew Milner Leadership Award was awarded to
                    Jack Fifield and Caleb Sooley.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    As athletes for RNS, both Jack and Caleb played with Andrew
                    in their freshman seasons. They learned from Andrew’s
                    leadership and as Team Captains in their senior seasons they
                    led RNS to a 12-0 record.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;
