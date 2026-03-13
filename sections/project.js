// sections/project.js

// Import 


// Export
export default function Project() {
  const projects = [
    {
      title: "GIS Dashboard",
      desc: "Web-based spatial analysis dashboard."
    },
    {
      title: "Company Profile",
      desc: "Modern responsive company profile website."
    },
  ];

  return (
    <section id="project" className="py-20 px-6 mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          Projects       
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>      
    </section>
  );
}