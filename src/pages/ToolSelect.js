
export default function ToolSelect() {
  const tools = [
    { title: "Cold Email Generator", icon: "📧", link: "/cold-email" },
    { title: "Resume Optimizer", icon: "📄", link: "/resume" },
    { title: "Code Debugger", icon: "🐞", link: "/debugger" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Choose a Tool to Begin</h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all text-center"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-lg font-semibold">{tool.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
