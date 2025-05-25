import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Evan Rees</h1>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>
        You can reach me at{' '}
        <a
          href="mailto:rees.evan1904@gmail.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          rees.evan1904@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
