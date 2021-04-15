import React from "react";
import Topbar from "../../Topbar/Topbar";
import image from "../../../images/donate.JPG"
import { motion } from 'framer-motion'

function Donate() {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <Topbar transparent={true}/>
      <div className="py-16">
        <div className="container m-auto px-6">

        <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-2xl font-bold leading-tight mb-5 capitalize">  Thank you in advance for your generous support! </h1>
                <p className="text-l">  If you would like to donate to our cause, you can do so through the links below. Your donation will go directly towards the Andrew Milner Memorial Scholarship Fund. This scholarship is presented to an athlete playing for Basketball Nova Scotia that truly embodies the character of Andrew- traits like work ethic, leadership, humbleness, and gratitude. </p>

                <div className="py-4 flex justify-center md:justify-start">
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                      <input type="hidden" name="hosted_button_id" value="N7M2RLZ8WXB78" />
                      <input className="h-32" type="image" src="https://www.svgrepo.com/show/86407/donate.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                      <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" />
                    </form>
                </div>

              </div>
              <div className="lg:w-5/12 order-2">
                <img src={image}
                alt="" className="rounded"/>
              </div>
          </div>

        </div>
      </div>
      </motion.div>
  );
}

export default Donate;
