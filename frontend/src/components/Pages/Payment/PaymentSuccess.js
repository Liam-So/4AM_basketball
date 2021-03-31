import React from 'react'
import Topbar from "../../Topbar/Topbar";
import Check from '../../../images/success.png';

function PaymentSuccess() {
    return (
        <div>
            <Topbar transparent={true} />
            <div class="flex items-center w-full justify-center" style={{height: '71vh'}}>
            <div class="max-w-xs">
                <div class="bg-white shadow-xl rounded-lg py-3">
                    <div class="photo-wrapper p-2">
                        <img class="w-32 h-32 rounded-full mx-auto" src={Check} alt="check"/>
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-xl text-gray-900 font-medium leading-8 ">You are all set!</h3>
                        <div class="text-center text-gray-400 text-s font-semibold">
                            <p>Thank you for your purchase. You should receive a confirmation email shortly.</p>
                        </div>

                        <div class="pt-12 text-center text-gray-400 text-s font-semibold">
                            <p>Be sure to check out our social media accounts for future updates.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default PaymentSuccess
