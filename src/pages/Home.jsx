const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Twitter Feed!</h1>
      <div className="w-full max-w-3xl bg-white p-4 rounded shadow-md">
        <h2 className="font-bold">What's happening</h2>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <img src="https://via.placeholder.com/100" className="w-full rounded mb-2" alt="feed" />
          <p>Delicious kebab and fresh veggies.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
