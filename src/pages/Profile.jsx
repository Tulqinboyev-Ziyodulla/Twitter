import React from 'react';

const Profile = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="relative bg-blue-600 h-32 rounded-t-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"
          alt="Profile Avatar"
          className="absolute bottom-0 left-4 w-20 h-20 rounded-full border-4 border-white"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Bobur Mavlonov</h2>
        <p className="text-gray-600">@bobur_mavlonov</p>
        <p className="mt-2">
          Umumiy delegat | Frontend developer. UMS haqida hamma yangiliklar shu yerda.
        </p>
      </div>
    </div>
  );
};

export default Profile;
