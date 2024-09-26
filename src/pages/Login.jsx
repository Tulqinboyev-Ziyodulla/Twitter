import { useState } from 'react';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <img className="w-8 h-8 mx-auto mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" alt="Twitter" />
        <h2 className="text-center text-2xl font-bold mb-4">Log in to Twitter</h2>
        <input className="mt-2 p-2 w-full border rounded" type="text" placeholder="Phone, email, or username" />
        <input className="mt-2 p-2 w-full border rounded" type="password" placeholder="Password" />
        <button 
          className="mt-4 p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          {loading ? "Loading..." : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default Login;
