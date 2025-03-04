"use client";

import { projects } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-20 overflow-visible">
      <Reveal>
        <h3>
          Recent{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            projects.
          </span>
        </h3>
      </Reveal>

      <BentoGrid className="w-full py-20">
        {projects.length > 0 ? (
          projects.map((item) => <BentoGridItem key={item.id} {...item} />)
        ) : (
          <p className="text-center text-white">No projects found.</p>
        )}
      </BentoGrid>
    </section>
  );
};

export default Projects;
