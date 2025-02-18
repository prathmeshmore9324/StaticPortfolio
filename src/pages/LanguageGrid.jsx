/* eslint-disable react/prop-types */
import  "react";
import { FaJs, FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";


const languages = [
  { name: "JavaScript", icon: FaJs },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "React", icon: FaReact },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
];

const LanguageCard = ({ name, icon: Icon }) => {
  return (
    <div className="w-24 h-24 flex flex-col items-center justify-center shadow-md rounded-lg bg-white hover:bg-gray-100 transition ">
      <div className="flex flex-col items-center">
        <Icon className="text-3xl text-blue-500" />
        <p className="text-slate-700 text-sm font-semibold mt-2">{name}</p>
      </div>
    </div>
  );
};

const LanguageGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-7 p-8">
  {languages.map((lang, index) => {
    let link = "#"; // Default link

    switch (lang.name) {
      case "JavaScript":
        link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
        break;
      case "Python":
        link = "https://www.python.org/";
        break;
      case "Java":
        link = "https://www.oracle.com/java/";
        break;
      case "React":
        link = "https://react.dev/";
        break;
      case "HTML":
        link = "https://developer.mozilla.org/en-US/docs/Web/HTML";
        break;
      case "CSS":
        link = "https://developer.mozilla.org/en-US/docs/Web/CSS";
        break;
      default:
        link = "#";
        break;
    }

    return (
      <a key={index} href={link} target="_blank" rel="noopener noreferrer">
        <LanguageCard name={lang.name} icon={lang.icon} />
      </a>
    );
  })}
</div>
  );
};

export default LanguageGrid;
