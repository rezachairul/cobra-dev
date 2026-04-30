// sections/about.js
"use client";

// Import
import { useLanguage } from "@/context/LanguageContext";
import { CometCard } from "../components/ui/comet-card";

// Export
export default function About() {
  const { language } = useLanguage();
  
    const aboutText = {
      EN: {
        title: "About Me",
        desc: `
          As a Full-Stack and WebGIS Developer with a background in Information Technology, I focus on developing geospatial web applications and platforms that transform complex data into interactive and useful digital solutions.
          I have experience developing various web-based systems using Laravel, React, Next.js, Tailwind CSS, MySQL, and PostgreSQL. I have also been involved in the development of information systems and digital platforms such as the OpenSID-based Village Information System, the ITERA SDGs Center website, and an inventory management system for the PLN NP UPDK Bandar Lampung K3 Division.
          With a passion for geospatial technology, data visualization, and modern web system development, I continually develop solutions that combine technology with the real-world needs of organizations and communities.
        `,
        stats: {
          focus: "Focus",
          experience: "Experience",
          status: "Status",
          focusValue: "GIS & Full-Stack",
          experienceValue: "3+ Years",
          statusValue: "Available",
        }
      },
      ID: {
        title: "Tentang Saya",
        desc: `
          Sebagai Full-Stack dan WebGIS Developer dengan latar belakang Teknik Informatika, saya berfokus pada pengembangan aplikasi web dan platform geospasial yang mampu mengubah data kompleks menjadi solusi digital yang interaktif dan bermanfaat.
          Saya berpengalaman mengembangkan berbagai sistem berbasis web menggunakan Laravel, React, Next.js, Tailwind CSS, MySQL, dan PostgreSQL, serta terlibat dalam pengembangan sistem informasi dan platform digital seperti Sistem Informasi Desa berbasis OpenSID, website SDGs Center ITERA, dan sistem manajemen inventaris untuk Divisi K3 PLN NP UPDK Bandar Lampung.
          Dengan minat pada teknologi geospasial, visualisasi data, dan pengembangan sistem web modern, saya terus mengembangkan solusi yang menggabungkan teknologi dengan kebutuhan nyata organisasi dan masyarakat.
        `,
        stats: {
          focus: "Fokus",
          experience: "Pengalaman",
          status: "Status",
          focusValue: "GIS & Full-Stack",
          experienceValue: "3+ Tahun",
          statusValue: "Tersedia",
        }
      }
    };
    
    const t = aboutText[language];
    const stat = t.stats;

  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
           {t.title}
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
                bg-[var(--card-bg)]
                p-3
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
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
                  <p className="text-sm font-semibold">
                    Reza Chairul
                  </p>

                  <p className="text-xs text-purple-800 dark:text-purple-700">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </CometCard>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="font-normal text-base text-justify leading-relaxed mb-4">
              {t.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              {[
                { label: stat.focus, value: stat.focusValue },
                { label: stat.experience, value: stat.experienceValue },
                { label: stat.status, value: stat.statusValue },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-[var(--card-bg)] border border-purple-500/20 rounded-lg p-4
                    shadow-[0_0_15px_rgba(168,85,247,0.15)]
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <p className="font-mono tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-purple-800 dark:text-purple-600 font-semibold mt-1">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}