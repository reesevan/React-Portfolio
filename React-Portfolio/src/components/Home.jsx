// components/Home.jsx

import Logo from './Logo';

const Navbar = () => (
  <nav>
    <Logo />
    {/* other nav items */}
  </nav>
);

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 text-center px-6">
      <Navbar />

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Evan Rees: <span className="text-blue-600">Artist, Coder, Creator</span>
      </h1>

      <img
        src="/Screen Shot 2022-11-17 at 11.59.28 AM.jpg"
        alt="Evan Rees"
        className="w-32 h-32 rounded-full mb-4 shadow-md object-cover"
      />

      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        Welcome to my portfolio
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600 text-base">
          Hello! I'm a creative developer passionate about art and code. 👋
        </p>
      </div>
    </section>
  );
};

export default Home;
