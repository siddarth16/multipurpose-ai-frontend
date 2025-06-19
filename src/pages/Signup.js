
export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Phone with Country Code" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" />
          <a href="/tools">
            <button type="button" className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
              Continue
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}
