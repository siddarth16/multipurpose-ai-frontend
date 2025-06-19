
export default function Signup() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full p-2 border" />
        <input type="text" placeholder="Last Name" className="w-full p-2 border" />
        <input type="email" placeholder="Email" className="w-full p-2 border" />
        <input type="password" placeholder="Password" className="w-full p-2 border" />
        <input type="text" placeholder="Phone with Country Code" className="w-full p-2 border" />
        <input type="text" placeholder="Country" className="w-full p-2 border" />
        <a href="/tools">
          <button type="button" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Next
          </button>
        </a>
      </form>
    </div>
  );
}
