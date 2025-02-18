import  "react";
import LanguageGrid from "./LanguageGrid";

const About = () => {
  return (
    <div className="container mx-auto px-4 h-screen bg-gradient-to-r from-teal-400 to-indigo-500 text-white flex flex-col items-center overflow-hidden p-10">
      
      {/* Content Section */}
      <div className="  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center justify-center m-20 p-10 bg-white text-center rounded-3xl shadow-2xl max-w-2xl mx-auto space-y-6">

        
        {/* Name */}
        <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
          Prathmesh More
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mx-auto max-w-lg">
          As a Junior Developer, I specialize in front-end and back-end technologies like HTML, CSS, JavaScript, and React. 
          I am passionate about solving problems and creating efficient web applications. 
          Eager to learn and grow, I strive to contribute to innovative projects and expand my technical skills.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-400 transition-colors duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-400 transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="">
        <LanguageGrid />
      </div>
    </div>
  );
};

export default About;
