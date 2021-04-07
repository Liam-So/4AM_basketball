import React from "react";
import Topbar from "../../Topbar/Topbar";
import ReactPlayer from "react-player/youtube";

function Media() {
  return (
    <>
      <Topbar />
      <section className="andrew text-center sm: mx-10 md:mx-20">
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

      <section className="interviews text-center sm: mx-10 md:mx-20">
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
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Media;
