
export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Hi, how are you doing today?</h1>
      <p className="mb-6">Welcome to the Multipurpose AI Solution System</p>
      <a href="/signup">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Begin
        </button>
      </a>
    </div>
  );
}
