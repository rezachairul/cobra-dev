// app/home/page.js

import React from 'react';

import Navbar from '../../components/navbar';
import Hero from '../../sections/hero';
import About from '../../sections/about';
import Skill from '../../sections/skill';
import Project from '../../sections/project';
import Journey from '../../sections/journey';
import Contact from '../../sections/contact';
import Footer from '../../components/footer';

export const metadata = {
  title: "Home",
};

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}