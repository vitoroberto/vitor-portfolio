import { SocialItem } from "./SocialItem";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SocialItemEmail } from "./SocialItemEmail";

export function SocialSection() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 text-xl">
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
      <SocialItemEmail ariaLabel="Copie o meu e-mail para entrar em contato" />
    </ul>
  );
}
