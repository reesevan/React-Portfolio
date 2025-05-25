import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-white py-12 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 text-base">
          Hello! I'm a creative developer passionate about art and code. I have a deep love for creating, and this course has been a great exercise in learning new skills and building applications.
          <br /><br />
          Feel free to reach out at{" "}
          <a
            href="mailto:rees.evan1904@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            rees.evan1904@gmail.com
          </a>{" "}
          👋
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
