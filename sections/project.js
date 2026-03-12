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
    <section id="project" className="py-20 px-6 bg-green-700 border-green-500 border-2 mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
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