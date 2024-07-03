import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdCheck } from "@react-icons/all-files/md/MdCheck";
import { useState } from "react";

type propTypes = {
  ariaLabel: string;
};

export function SocialItemEmail({ ...props }: propTypes) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText("vroberto.contact@gmail.com");
    setCopied(true);
  }

  function onMouseLeave() {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <li>
      <button
        className="flex items-center gap-2 rounded-md p-2 px-4 py-2 duration-200 ease-out hover:scale-105 hover:bg-gray-200 hover:text-blue-700 active:scale-95 dark:hover:bg-neutral-800 dark:hover:text-purple-600"
        aria-label={props.ariaLabel}
        onClick={copyToClipboard}
        onMouseLeave={onMouseLeave}
      >
        {copied ? <MdCheck size={34} /> : <MdEmail size={34} />}
        {copied ? "Copiado!" : "Email"}
      </button>
    </li>
  );
}
