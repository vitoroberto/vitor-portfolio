import { SocialItem } from "./SocialItem";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

export function SocialSection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-xl">
      <SocialItem
        href="https://www.linkedin.com/in/vitoroberto/"
        ariaLabel="Abra meu Linkedin para mais informações sobre mim"
      >
        <FaLinkedin size={34} /> Linkedin
      </SocialItem>
      <SocialItem
        href="https://github.com/vitoroberto"
        ariaLabel="Abra meu GitHub para ver os códigos dos meus projetos"
      >
        <FaGithub size={34} /> GitHub
      </SocialItem>
      <SocialItem
        href="mailto:vroberto.contact@gmail.com"
        ariaLabel="Entre em contato por Email"
      >
        <MdEmail size={34} /> Email
      </SocialItem>
    </div>
  );
}
