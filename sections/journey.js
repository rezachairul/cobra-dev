// sections/journey.js

// Import 


// Export
export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          Journey
        </h2>
        <ul className="space-y-4 text-gray-200">
          <li>🎓 Studied GIS & Spatial Analysis</li>
          <li>💻 Started learning Web Development</li>
          <li>🚀 Built multiple web & GIS projects</li>
        </ul>
      </div>
    </section>
  );
}