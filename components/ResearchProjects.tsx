import React from "react";
import { researchProjects } from "@/data";

const ResearchProject = (): JSX.Element => (
  <section id="research" className="py-20 w-full">
    <h3 className="title text-center">
      My{" "}
      <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
        Research Projects
      </span>
    </h3>

    <div className="w-full mt-12 space-y-10">
      {researchProjects.map(({ id, title, description, github, techStack }) => (
        <div
          key={id}
          className="p-6 border border-white/10 rounded-xl shadow-lg bg-white/5 space-y-4"
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-white/10 px-3 py-1 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ResearchProject;
