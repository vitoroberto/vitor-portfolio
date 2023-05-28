import { info } from "../data/info";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <section className="mt-16">
      <h2 className="text-center text-2xl">Projetos</h2>
      <div className="my-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {info.projects.map((project) => (
          <ProjectItem
            key={project.id}
            src={project.thumbnail}
            href={project.liveUrl}
            githubUrl={project.githubUrl}
            name={project.name}
            alt={project.alt}
          />
        ))}
      </div>
    </section>
  );
}
