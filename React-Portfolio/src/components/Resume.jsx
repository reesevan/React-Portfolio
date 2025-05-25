import React from 'react';

const Resume = () => {
    return (
        <div className="p-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Resume</h2>
            <p>Download my resume <a href="/resume.pdf" className="text-blue-500 underline" download>here</a>.</p>
        </div>
    );
};

export default Resume;
