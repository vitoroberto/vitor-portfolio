import type { ReactNode } from "react";

type propTypes = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

export function SocialItem({ ...props }: propTypes) {
  return (
    <li>
      <a
        className="flex items-center gap-2 rounded-md p-2 px-4 py-2 duration-200 ease-out hover:scale-105 hover:bg-gray-200 hover:text-blue-700 active:scale-95 dark:hover:bg-neutral-800 dark:hover:text-purple-600"
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={props.ariaLabel}
      >
        {props.children}
      </a>
    </li>
  );
}
