const Profile = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        <div className="w-full max-w-3xl bg-white p-4 rounded shadow-md">
          <h2 className="font-bold">Bohur Maxlonov</h2>
          <p>@bohurmaxlonov</p>
          <div className="mt-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" className="w-full rounded mb-2" alt="profile" />
            <p>This is your profile bio and description.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  