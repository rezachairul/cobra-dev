// sections/about.js

// Import
import { CometCard } from "../components/ui/comet-card";

// Export
export default function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          About Me
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-10 items-start">

          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <CometCard>
              <div
                className="
                w-64
                rounded-xl
                border border-purple-500/40
                bg-[#0f0f11]
                p-3
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    src="/assets/img/foto_reza.JPG"
                    alt="Foto Profile Reza Chairul"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="mt-3 text-center font-mono">
                  <p className="text-sm text-white font-semibold">
                    Reza Chairul
                  </p>

                  <p className="text-xs text-purple-400">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </CometCard>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-gray-300 font-normal text-base text-justify leading-relaxed mb-4">
              Sebagai Full-Stack dan WebGIS Developer dengan latar belakang Teknik Informatika, saya berfokus pada pengembangan aplikasi web dan platform geospasial yang mampu mengubah data kompleks menjadi solusi digital yang interaktif dan bermanfaat.

              Saya berpengalaman mengembangkan berbagai sistem berbasis web menggunakan Laravel, React, Next.js, Tailwind CSS, MySQL, dan PostgreSQL, serta terlibat dalam pengembangan sistem informasi dan platform digital seperti Sistem Informasi Desa berbasis OpenSID, website SDGs Center ITERA, dan sistem manajemen inventaris untuk Divisi K3 PLN NP UPDK Bandar Lampung.

              Dengan minat pada teknologi geospasial, visualisasi data, dan pengembangan sistem web modern, saya terus mengembangkan solusi yang menggabungkan teknologi dengan kebutuhan nyata organisasi dan masyarakat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              {/* Card 1 */}
              <div className="bg-[#0b0b18] border border-purple-500/20 rounded-lg p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]transition-all duration-300">

                <p className="text-xs text-gray-400 font-mono tracking-widest">
                  Focus
                </p>
                <p className="text-purple-300 font-semibold mt-1">
                  GIS & Full-Stack
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-[#0b0b18] border border-purple-500/20 rounded-lg p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]transition-all duration-300">

                <p className="text-xs text-gray-400 font-mono tracking-widest">
                  Experience
                </p>
                <p className="text-purple-300 font-semibold mt-1">
                  3+ Years
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-[#0b0b18] border border-purple-500/20 rounded-lg p-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]transition-all duration-300">

                <p className="text-xs text-gray-400 font-mono tracking-widest">
                  Status
                </p>
                <p className="text-purple-300 font-semibold mt-1">
                  Available
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}