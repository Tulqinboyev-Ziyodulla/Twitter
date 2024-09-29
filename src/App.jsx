import React, { useContext, useState } from 'react';
import './App.css';
import Dashboard from './routes/DashboardRoutes';
import LoginRoutes from './routes/LoginRoutes';
import { Context } from './context/Index';
import Feed from './pages/Feed'; // Feed komponentini import qilish

function App() {
  const { token } = useContext(Context);
  const [tweets, setTweets] = useState([]); // Tweetlar uchun holat

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]); // Yangi tweetni qo'shish
  };

  if (token) {
    return (
      <Dashboard>
        <Feed addTweet={addTweet} tweets={tweets} /> {/* Feed komponentini chaqirish */}
      </Dashboard>
    );
  } else {
    return <LoginRoutes />;
  }
}

export default App;
