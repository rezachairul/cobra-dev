import React from "react";
import { Timeline } from "../ui/timeline";

// import BlurText from "../ui/BlurText";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

import {
  IconBrandGithub
} from "@tabler/icons-react";

export default function Works() {
    const data = [
      {
        title: "2025",
        content: (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto">

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    hellomuse.site
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Showcasing Visual-Driven Creative Projects
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2025_Muse.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project Muse" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="http://hellomuse.site/"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://github.com/rezachairul/project_kak_moessss.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    Star Warship
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Star Warship is a simple arcade game
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2025_Game.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project Game Star Warship" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://github.com/rezachairul/Project-Tubes-PBO-2025.git"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#https://github.com/rezachairul/Project-Tubes-PBO-2025.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>      
              
              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    Sistem Monitoring Inventori K4 - PLN UPDK
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300">
                    UPDK PLN Inventory Management System
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2025_PLN.jpg"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project PLN" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="hhttps://simotork4.my.id/"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://github.com/TaufiqAhmadMaulana/sistem-invenK4.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

            </div>
          </div>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto">
                       
              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    Ruang Nada
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm text-justify max-w-sm mt-2 dark:text-neutral-300">
                    Ruang Nada is a mobile app designed to simplify the process of borrowing music equipment and studio rooms at the Music Arts Organization (UKM BSM) of ITERA
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2024_IMK.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project IMK" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://www.figma.com/proto/8eSCQS7N1X6A7FHc0TSyqk/YOK-IMK-YOK?page-id=1%3A9&node-id=396-3596&p=f&viewport=142%2C403%2C0.07&t=ZmkhfcO3LtChU6hj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=396%3A3570&show-proto-sidebar=1"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    SDGS Center ITERA
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm text-justify max-w-sm mt-2 dark:text-neutral-300">
                    Advancing Sustainable Development in ITERA
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2024_SDGS_Center_Itera.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project SDGS Center Itera" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://sdgs.itera.ac.id/"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              
            </div>
          </div>
        ),
      },
      {
        title: "Early 2023",
        content: (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-auto">

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    Perpusda Lampung
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Online catalog and user management system
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2023_KSI_Perpus.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project Perpusda" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://github.com/rezachairul/KSI_RB_Tubes-Kel-3.git"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="https://github.com/rezachairul/KSI_RB_Tubes-Kel-3.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    Sistem Informasi Desa
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm text-justify max-w-sm mt-2 dark:text-neutral-300">
                    Managing village data and services
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2023_KKN.jpg"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project KKN" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl text-left font-bold text-neutral-600 dark:text-white">
                    Bandar Lampung Health Facilities Map
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm text-justify max-w-sm mt-2 dark:text-neutral-300">
                    Mapping health facilities in Bandar Lampung
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/assets/img/project/P_2023_FaskesBDL.png"
                      height="1000"
                      width="1000"
                      className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Project Faskes BDL" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <IconBrandGithub size={16} />
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>              
            </div>
          </div>
        ),
      },
    ];
    return (
        <section id="works" className="py-16 px-6 bg-black text-white text-center">
            <Timeline data={data} />
        </section>
    );
}
