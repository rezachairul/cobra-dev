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
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
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