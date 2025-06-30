// This file is a part of the Next.js application and serves as the main entry point for the home page.
import Navbar from './components/templates/Navbar'
import HeroWrapper from "./components/templates/HeroWrapper";
import About from './components/templates/About'
import Works from './components/templates/Works'
import Skill from './components/templates/Skill'
import Contact from './components/templates/Contact'
import SplashCursor from './components/ui/SpalshCursor'
import ScrollToTopButton from './components/ui/ScrollTopButton';

export const metadata = {
  title: "Home | CobraDev",
  description: "CobraDev - Portfolio of a GIS and Web Developer",
};

export default function Home() {
  return (
    <>
      {/* Splash Cursor */}
      <SplashCursor />

      {/* Menu */}
      <Navbar />
      <HeroWrapper />
      <About />
      <Works />
      <Skill />
      <Contact />
      <ScrollToTopButton />
    </>
  )
}