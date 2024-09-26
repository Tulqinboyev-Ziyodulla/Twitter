import { useState } from 'react';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">Create an account</h2>
        
        <div className="space-y-4">
          <input 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Name" 
          />
          <input 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Phone or email" 
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
            <p className="text-gray-500 text-sm mb-2">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </p>
            <div className="flex space-x-2">
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                {/* Add other months */}
              </select>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                {/* Add other days */}
              </select>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Year</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                {/* Add other years */}
              </select>
            </div>
          </div>
        </div>

        <button 
          className="mt-6 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={handleRegister}
        >
          {loading ? "Loading..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Register;