import React from 'react'
import Topbar from '../../Topbar/Topbar'
import Check from '../../../images/failed.png'

function PaymentFailed() {
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
                        <h3 class="pt-2 text-center text-xl text-gray-900 font-medium leading-8 ">Something went wrong</h3>
                        <div class="pt-3 text-center text-gray-400 text-s font-semibold">
                            <p>There was an error processing your payment request.</p>
                        </div>

                        <div class="pt-2 text-center text-gray-400 text-s font-semibold">
                            <p>We are sorry for the inconvenience... Please try again.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default PaymentFailed
