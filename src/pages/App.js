
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Hey there 👋</h1>
      <p className="text-lg mb-6 max-w-md drop-shadow-sm">Welcome to <strong>AI Toolkit Hub</strong> — your all-in-one solution for smart productivity. Choose your tool, optimize your workflow, and let AI do the heavy lifting.</p>
      <a href="/signup">
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition-all">
          Get Started
        </button>
      </a>
    </div>
  );
}
