interface Project {
  name: string;
  icon: string;
  href: string;
}

const RightSidebar = () => {
  const projects: Project[] = [
    { name: "Bloggify", icon: "💬", href: "https://kaiblog.vercel.app" },
    { name: "Donezo", icon: "📝", href: "https://donezo-psi.vercel.app/" },
    { name: "CodeX", icon: "📝", href: "https://ai-codexx.vercel.app/" },
    { name: "Quizzer", icon: "⚙️", href: "https://quizzer-navy.vercel.app/" },
  ];

  return (
    <div className="fixed right-5 top-1/4 space-y-4 hidden md:block">
      <div className="bg-white shadow-lg rounded-2xl p-4 w-64">
        <h2 className="font-bold mb-2">Full Stack Projects:</h2>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:underline cursor-pointer"
              >
                <span>{project.icon}</span>
                <span>{project.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;