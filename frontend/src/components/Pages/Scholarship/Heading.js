import React from "react";

function Heading() {
  return (
    <main className="font-sans bg-white">
      <div>
          <section className="bg-white mt-20">
              <div className="max-w-3xl px-6 text-center mx-auto">
                  <h2 className="text-4xl font-semibold text-gray-800">Andrew Milner Memorial Scholarship</h2>
                  <p className="text-xl text-gray-600 mt-4">
                    The goal of the 4AM camp is to honour Andrew's legacy by paying his impact
                  forward to the next generation of basketball players. All of the
                  proceeds from the camp go towards an annual scholarship in Andrew's
                  name.
                  </p>
                  <p className="text-xl text-gray-600 mt-4">
                  Andrew’s family decided the scholarship should be awarded to a BNS athlete. Preference will be given to those residing outside HRM to help alleviate the costs of travel to/from the city.
                  </p>

              </div>
          </section>
      </div>
    </main>
  );
}

export default Heading;
