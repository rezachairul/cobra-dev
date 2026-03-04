// sections/hero.js

// Import 


// Export
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 border-gray-500 border-2">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Reza 👋
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Fullstack & GIS Developer passionate about building modern web applications
        and geospatial solutions.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#projects" className="bg-black text-white px-6 py-2 rounded-lg">
          View Projects
        </a>
        <a href="#contact" className="border px-6 py-2 rounded-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
}