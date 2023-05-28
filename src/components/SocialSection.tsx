import { SocialItem } from "./SocialItem";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

export function SocialSection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-xl">
      <SocialItem href="https://www.linkedin.com/in/vitoroberto/">
        <FaLinkedin size={34} /> Linkedin
      </SocialItem>
      <SocialItem href="https://github.com/vitoroberto">
        <FaGithub size={34} /> Github
      </SocialItem>
      <SocialItem href="mailto:vroberto.contact@gmail.com">
        <MdEmail size={34} /> Email
      </SocialItem>
    </div>
  );
}
