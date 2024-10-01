import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        <div className="bg-[#01384D] h-40">
          
        </div>
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src="https://picsum.photos/500/500"
            alt="Profile"
          />
        </div>
      </div>

      <div className="mt-12 px-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Bobur</h1>
            <p className="text-gray-600">@bobur_mavlonov</p>
            <p className="text-black text-xl">UX/UI designer at <span className=' text-blue-500 cursor-pointer'>@abutechuz</span></p>
          </div>
          <button className=" border-x-2 border-y-4 mt-[-80px] text-black px-4 py-2 rounded-lg">Edit profile</button>
        </div>

        <div className="mt-4 flex space-x-4">
          <p className="text-gray-700">
            <span className="font-bold">67</span> Following
          </p>
          <p className="text-gray-700">
            <span className="font-bold">47</span> Followers
          </p>
        </div>
      </div>

      <div className="border-b border-gray-300 mt-6 flex justify-center ">
        <ul className="flex space-x-4 px-6">
          <li className="text-blue-500 font-bold border-b-2 border-blue-500 pb-2">Tweets</li>
          <li className="text-gray-500">Tweets & replies</li>
          <li className="text-gray-500">Media</li>
          <li className="text-gray-500">Likes</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
