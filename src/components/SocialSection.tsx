import { SocialItem } from "./SocialItem";
import { CopyEmailButton } from "./CopyEmailButton";
import { socialInfo } from "../data/social-info";

export function SocialSection() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 text-xl">
      {socialInfo.socials.map((social) => (
        <SocialItem
          key={social.id}
          href={social.href}
          icon={social.icon}
          ariaLabel={social.ariaLabel}
        >
          {social.name}
        </SocialItem>
      ))}
      <CopyEmailButton ariaLabel="Copie meu e-mail para entrar em contato" />
    </ul>
  );
}
