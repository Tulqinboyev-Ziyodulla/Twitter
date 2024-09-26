import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <img className="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" alt="Twitter" />
        <div>
          <Link to="/login" className="text-blue-500 mx-2">Login</Link>
          <Link to="/register" className="text-blue-500 mx-2">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
