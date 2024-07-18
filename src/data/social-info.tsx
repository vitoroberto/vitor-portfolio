import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const ICON_SIZE = 34;
export const socialInfo = {
  socials: [
    {
      id: 1,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/vitoroberto/",
      icon: <FaLinkedin size={ICON_SIZE} />,
      ariaLabel: "Abra meu Linkedin para mais informações sobre mim",
    },
    {
      id: 2,
      name: "Github",
      href: "https://github.com/vitoroberto",
      icon: <FaGithub size={ICON_SIZE} />,
      ariaLabel: "Abra meu GitHub para ver os códigos dos meus projetos",
    },
  ],
};
