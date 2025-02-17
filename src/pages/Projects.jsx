import "react";

const Projects = () => {
  const projects = [
    {
      title: "Password Generator",
      description: "That's great! A Password Generator built with React.js can be a handy tool for users who need secure and random passwords. It allows users to customize the password's length and character types (like numbers, symbols, etc.), and ensures that the generated passwords are both secure and unique.",
      technologies: ["React JS"],
      link: "https://github.com/prathmeshmore9324/PasswordGenerator", // GitHub or live demo link
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A simple two-player console-based game implemented in Java. Players alternate placing X or O on a 3x3 grid, with the goal of getting three marks in a row, column, or diagonal. The game checks for a winner after every move and displays the result (win or draw).",
      technologies: ["Java"],
      link: "https://github.com/prathmeshmore9324/tic-tac-toe", // GitHub or live demo link
    },
    {
      title: "Currency Convertor",
      description:
        "A simple console-based Currency Converter built in Java. It allows the user to convert an amount from one currency to another using predefined exchange rates. The program prompts the user to input the amount and select the currencies, then performs the conversion and displays the result.",
      technologies: ["Java"],
      link: "https://github.com/prathmeshmore9324/CurrencyConvertor", // GitHub or live demo link
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 min-h-screen bg-gradient-to-r from-teal-400 to-indigo-500 text-white p-10">
      <h1 className=" text-3xl font-semibold text-center mb-8 text-white p-20">My Projects</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-teal-500 mb-4">{project.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-teal-200 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 text-sm font-semibold mt-4 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
