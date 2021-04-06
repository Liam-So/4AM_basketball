import React, { useState } from "react";
import Topbar from "../../Topbar/Topbar";
import Heading from "./Heading";
import "./Scholarship.css";
import HeroSection from "../../HeroSection/HeroSection"
import { homeObjOne } from "./Data";

function Scholarship() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {
      first_name,
      last_name,
      email,
      phone,
      city,
      school,
      team,
      application,
    } = e.target.elements;

    let msg = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      city: city.value,
      school: school.value,
      team: team.value,
      application: application.value,
    };

    let response = await fetch("http://localhost:8001/scholarship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(msg),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    //reset form after submit
    e.target.reset();
  };

  return (
    <>
      <Topbar transparent={true} />
      <Heading />
      <HeroSection {...homeObjOne} />
      <section className="bg-gray-100 max-w-7x1 mx-auto py-1 sm:py-5 lg:py-6 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className="mt-5 md:mt-0 md:w-9/12 mx-auto">
            <form id="application-form" onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="school"
                        className="block text-sm font-medium text-gray-700"
                      >
                        School
                      </label>
                      <input
                        type="text"
                        name="school"
                        id="school"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="team"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BNS Team
                      </label>
                      <select
                        id="team"
                        name="team"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>U15</option>
                        <option>U17</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="application"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Application Question
                      </label>
                      <p className="mt-2 text-sm text-gray-500">
                        Please share how this scholarship will impact you - you
                        may speak to how it will impact you during the season
                        with BNS this summer, how it will impact your future
                        basketball journey, and/or how it will impact you as a
                        person off the basketball court. <br />
                        <br />
                        We'd love to hear about your aspirations both on and off
                        the court. Andrew embodied strong qualities of work
                        ethic, leadership, humbleness, and gratitude, allowing
                        him to be a champion on and off the court. We encourage
                        you to highlight qualities like these in yourself. In
                        the words of Andrew, "Never forget what made you who you
                        are." (Max. 500 words).
                      </p>
                      <div className="mt-5">
                        <textarea
                          id="application"
                          name="application"
                          rows="10"
                          className="txt shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md whitespace-pre-wrap"
                          placeholder="Your response here..."
                          maxLength="3500"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {status}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scholarship;
