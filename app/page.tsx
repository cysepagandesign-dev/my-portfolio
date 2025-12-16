import About from "@/components/sections/About";
import { Contacts } from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contacts />
    </>
  );
}
