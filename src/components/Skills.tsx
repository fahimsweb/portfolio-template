// components/SkillsSection.js

import { skillSets } from "@/constants";

export default function Skills() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-x-0 bg-transparent p-4 md:flex-row md:space-x-8 md:p-8">
      {skillSets.map((skill) => (
        <div
          key={skill.id}
          className="group flex cursor-pointer flex-col items-center transition-transform duration-300"
        >
          <div className="mb-2 transform text-3xl transition-transform duration-300 group-hover:scale-125">
            {skill.icon}
          </div>
          <span className="transform text-lg text-white opacity-0 transition-opacity transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}
