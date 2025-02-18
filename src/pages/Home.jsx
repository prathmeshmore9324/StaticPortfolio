import  'react';
import bg2 from "../assets/bg2.jpg";
import pm from "../assets/pm.jpeg";

const Home = () => {  
  return (
    <div 
      className="h-screen w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg2})` }} // Background image covering the entire page
    >
      {/* Removed background gradient from inner container */}
      <div className="container mx-auto h-screen text-white flex flex-col justify-center items-center ">
        {/* Animated Content Section */}
        <div className="grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 text-center animate__animated animate__fadeIn animate__delay-1s">
          
          <div className="flex items-center justify-center m-10 bg-transparent text-center rounded-3xl max-w-48 mx-auto">
            {/* Profile Image */}
            <img
              src={pm} // Using the imported image for the profile picture
              alt="Profile"
              className="w-max h-max rounded-full border-4 border-teal-400 shadow-xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-semibold text-yellow-600 p-10 text-4xl md:text-5xl lg:text-6xl transform transition-all duration-200 ease-in-out hover:scale-x-125">
            I am Prathmesh,
            <h2> Junior Developer.</h2>
          </h1>

          {/* Subheading */}
          <h2 className="p-5 m-3 text-3xl md:text-4xl lg:text-5xl text-gray-800 transform transition-all duration-200 ease-in-out hover:scale-105">
            Working at Eptiq Technologies.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
