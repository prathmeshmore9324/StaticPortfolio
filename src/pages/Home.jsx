//import React from'react'
import pm from "../assets/pm.jpeg";
const Home = () => {  

  return (
    <div className="container mx-auto px-4 h-screen bg-gradient-to-r from-teal-400 to-indigo-500 text-white flex flex-col justify-center items-center p-10">

      {/* Animated Content Section */}
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center animate__animated animate__fadeIn animate__delay-1s">

        <div className="flex  items-center justify-center m-10  bg-transparent text-center rounded-3xl max-w-48 mx-auto ">
        
                {/* Profile Image */}
                <img
                  src={pm} // Use your image here
                  alt="Profile"
                  className="w-max h-max rounded-full border-4 border-teal-400 shadow-xl"
                />
                </div>

        {/* Main Heading */}
        <h1 className="font-semibold text-green-800 p-5 m-3 text-4xl md:text-5xl lg:text-6xl transform transition-all duration-200 ease-in-out hover:scale-x-125">
           I am Prathmesh , Junior Developer .
        </h1>

        {/* Subheading */}
        <h2 className="p-5 m-3 text-3xl md:text-4xl lg:text-5xl text-gray-800 transform transition-all duration-200 ease-in-out hover:scale-105">
          Working at Eptiq Technologies.
        </h2>
      </div>
    </div>
  )
}

export default Home 
