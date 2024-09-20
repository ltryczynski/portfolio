"use client";
import { useActiveSection } from "@/lib/hooks";
import H2 from "../h2";
import Project from "../project";
import Wrapper from "../wrapper";
import { projectsData } from "@/lib/data";

export default function ProjectsSection() {
  const { ref } = useActiveSection("Projects");

  return (
    <Wrapper
      ref={ref}
      className="min-h-screen border-t container border-gray-50/5 px-5 justify-start lg:px-10 mx-auto w-full h-full flex items-center flex-col gap-20   py-20"
      id="projects">
      <H2 className="lg:col-span-2 2xl:col-span-3 text-center">Projects</H2>
      <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 container">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={[...project.tags]}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </Wrapper>
  );
}
