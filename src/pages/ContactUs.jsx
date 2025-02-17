import "react";

const Contact = () => {
  return (
    <div className=" container mx-auto px-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-indigo-500 p-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-white mb-6">
        Contact Me
      </h1>

      {/* Form */}
      <form className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-8 shadow-lg rounded-lg w-96 space-y-6">
        
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border-2 border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-medium mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full px-4 py-2 border-2 border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-700 transition text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
