const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Copyright Text */}
          <p className="text-sm">© {new Date().getFullYear()} Prathmesh More. All Rights Reserved.</p>
  
          {/* Social Links */}
          <ul className="flex space-x-5 mt-3 md:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/prathmesh-more-83b75b252" className="hover:text-blue-500">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/prathmeshmore9324" className="hover:text-blue-500">
                <i className="fab fa-github text-xl"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/PM54513747?t=blTE43cXRb6nFdLj2_mc7Q&s=09" className="hover:text-blue-500">
                <i className="fab fa-x text-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  