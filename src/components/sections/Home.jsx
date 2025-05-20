import {Link} from 'react-scroll';
export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center z-10 px-4 py-20 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            <span className="block animate-fadeIn">Hi, I'm Anshul</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          <span className="font-medium text-gray-800">Computer Science undergrad @ DTU</span> passionate about 
          <span className="text-blue-600 font-medium"> competitive programming</span>, 
          <span className="text-purple-600 font-medium"> machine learning</span>, and 
          <span className="text-indigo-600 font-medium"> web development</span>. I build solutions that blend logic with creativity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
                to="projects" 
                smooth={"easeInOutCubic"} 
                duration={1200}
                offset={-70}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg cursor-pointer hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 transition-all"
                >
                View Projects
            </Link>

            <Link 
                to="contact" 
                smooth={"easeInOutCubic"} 
                duration={1200}
                offset={-70}
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg cursor-pointer hover:bg-indigo-50 hover:-translate-y-1 transition-all"
                >
                Contact Me
            </Link>
        </div>
      </div>
    </section>
  );
}