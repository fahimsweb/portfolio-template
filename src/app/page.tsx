/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Fahim's Portfolio</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="./resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegFileCode />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/fahimsweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/fahimsweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:thefmcoder@gmail.com" target="_blank"
          rel="noopener noreferrer"
        >
          <MdAlternateEmail />
          thefmcoder@gmail.com
        </a>
      </footer>
    </div>
  );
}
