import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

type PropTypes = {
  href: string;
  githubUrl: string;
  src: string;
  name: string;
  alt: string;
};

export function ProjectItem({ ...props }: PropTypes) {
  return (
    <div className="group relative max-h-[25rem] w-full overflow-hidden">
      <div className="absolute right-4 top-4 z-10 flex items-center">
        <a
          href={props.githubUrl}
          className="rounded-full bg-black/50 p-3 text-white backdrop-blur-md"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Abra a página desse projeto no GitHub"
        >
          <FaGithub size={22} />
        </a>
      </div>
      <a href={props.href} target="_blank" rel="noreferrer noopener">
        <img
          className="h-auto w-full scale-100 transition duration-700 hover:scale-110"
          src={props.src}
          width="100%"
          height="100%"
          alt={props.alt}
        />
      </a>
      <div className="absolute bottom-0 left-0 w-full translate-y-[100%] bg-black/50 p-4 text-white backdrop-blur-md transition duration-500 group-hover:translate-y-0 dark:text-white">
        <h3 className="mr-2 text-xl">{props.name}</h3>
      </div>
    </div>
  );
}
