
export default function ToolSelect() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Choose Your Tool</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded hover:bg-gray-100 cursor-pointer">
          <h3 className="font-semibold">Cold Email Generator</h3>
        </div>
        <div className="p-4 border rounded hover:bg-gray-100 cursor-pointer">
          <h3 className="font-semibold">Resume Optimizer</h3>
        </div>
        <div className="p-4 border rounded hover:bg-gray-100 cursor-pointer">
          <h3 className="font-semibold">Code Debugger</h3>
        </div>
      </div>
    </div>
  );
}
