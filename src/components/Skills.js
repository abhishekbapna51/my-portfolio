import React from "react";

const skills = {
  tools: [
    { name: "Visual Studio Code", icon: "/visual-studio-code-icon.svg" },
    { name: "Git", icon: "/git-icon.svg" },
    { name: "GitHub", icon: "/github-icon.svg" },
    { name: "StarUML", icon: "/staruml_94078.svg" },
  ],
  languages: [
    { name: "Java", icon: "/java-programming-language-icon.svg" },
    { name: "C++", icon: "/c-plus-plus-programming-language-icon.svg" },
    { name: "C", icon: "/c-program-icon.svg" },
    { name: "Python", icon: "/python-programming-language-icon.svg" },
    { name: "R", icon: "/r-programming-language-icon.svg" },
    { name: "MATLAB", icon: "/matlab-code-file-black-icon.svg" },
  ],
  web: [
    { name: "HTML", icon: "/html-icon.svg" },
    { name: "CSS", icon: "/css-icon.svg" },
    { name: "JavaScript", icon: "/js-icon.svg" },
    { name: "React.js", icon: "/react-icon.svg" },
  ],
  db: [
    { name: "SQL", icon: "/sql-file-icon.svg" },
    { name: "MongoDB", icon: "/mongodb-icon.svg" },
  ],
};

const softSkills = [
  "Problem-solving",
  "Team Collaboration",
  "Communication",
  "Analytical Thinking",
  "Logical Reasoning",
];

const Skills = () => {
  return (
    <>
      {/* Spacer div to prevent navbar from overlapping the heading */}
      <div style={{ height: "0px" }} />

      <section className="bg-white py-10 px-4 md:px-20 scroll-mt-20" id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills</h2>

        {/* Group container for hover effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 group">
          {[
            { title: "💻 Programming Languages", list: skills.languages },
            { title: "🌐 Web Development", list: skills.web },
            { title: "🗃️ Database Management", list: skills.db },
            { title: "🛠️ Tools & Software", list: skills.tools },
          ].map((section) => (
            <div
              key={section.title}
              className="bg-gray-900 text-white rounded-xl p-6 shadow-lg transition-all duration-300 transform
                group-hover:blur-sm group-hover:brightness-75 hover:!blur-none hover:!brightness-100
                hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] z-10"
            >
              <h3 className="font-bold text-lg mb-4 text-center">{section.title}</h3>
              <div className="flex flex-col gap-3">
                {section.list.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 transform transition-transform duration-300 hover:scale-105"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills Card */}
          <div
            className="bg-gray-900 text-white rounded-xl p-6 shadow-lg transition-all duration-300 transform
              group-hover:blur-sm group-hover:brightness-75 hover:!blur-none hover:!brightness-100
              hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] z-10"
          >
            <h3 className="font-bold text-lg mb-4 text-center">🤝 Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
