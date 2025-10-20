import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
function Newsletter() {
  return (
    <div className="relative w-full flex justify-center -mb-20 mt-15">
      <div className="bg-black text-white w-[90%] md:w-[80%] rounded-3xl py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 shadow-lg">

       
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-xl text-center md:text-left">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          
          <div className="flex items-center bg-white text-black px-4 py-3 rounded-full w-full md:w-80">
            <FaRegEnvelope className="mr-3 opacity-70" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="outline-none w-full"
            />
          </div>

          
          <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-black hover:text-white hover:border-white 
    transition text  border border-transparent ">
            Send Us For Notification
          </button>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
