import React, { useState, useEffect } from "react";
import RegisterItem from "./RegisterItem/RegisterItem";
import axios from "../../../axios";
import Topbar from "../../Topbar/Topbar";
import Logo from "../../../images/logo.png"

function Register() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/registration");

      setProducts(req.data);
    }

    fetchData();
  }, []);

  const availableProducts = products.filter(product => product.sku > 0);

  const EmptyCamp = () => (
    <div className="gradient text-gray-600 min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">Sorry...</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
          Registrations are currently closed.
          </div>
          <div className="text-lg mb-8">
            Stay tuned to our social media accounts or Registration announcements. Thank you for your interest!
          </div>
        </div>
      </div>
    </div>
  );

  const RegisterCamp = () => (
    <main className="font-sans bg-white">
        <div>
            <section className="bg-white mt-20 mb-20">
                <div className="max-w-2xl px-6 text-center mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">Registration now open!</h2>
                    <p className="text-gray-600 mt-4">The 2020 4AM Camp will run the week of August 17-20, 2020 at the Caledonia Jr High Outdoor Courts. The cost of the camp is $100. All proceeds from the camp go towards the Andrew Milner Memorial Scholarship.</p>
                    <p className="text-gray-600 mt-4">Click here to read how we will be delivering our basketball program while complying with the NS Provincal Health Guidelines in regard to the COVID-19 pandemic. We are commiteed to holding thesafety of our athletes and coaches as our top prioity. Athletes will be required to sign a awiver at the start of the camp and fill out COVID-19 screenings in advance of the camp and daily during the camp.</p>

                </div>
            </section>
          
            <section className="pattern">
                <div className="flex flex-col pb-16 md:px-12 lg:flex-row lg:px-60 xl:px-96">
                {availableProducts.map((product) => (
                    <div className="flex container mx-auto max-w-sm w-full p-4 sm:w-1/2">
                      <RegisterItem product={product}/>
                    </div>
                  ))}
                </div>
            </section>
        </div>
    </main>
  );

  return (
    <div>
      <Topbar transparent={true}/>
      {availableProducts.length ? <RegisterCamp /> : <EmptyCamp />}
    </div>
  );
}

export default Register;
