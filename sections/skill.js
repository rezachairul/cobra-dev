// sections/skill.js

// Import 


// Export
export default function Skill() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Laravel",
    "PostgreSQL",
    "GIS",
    "Docker"
  ];

  return (
    <section id="skill" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="border p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}