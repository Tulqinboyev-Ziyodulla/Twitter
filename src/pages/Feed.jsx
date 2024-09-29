import React, { useState } from 'react';

// Feed komponenti foydalanuvchilar tomonidan tweetlar yozish va ko'rsatish uchun
const Feed = ({ addTweet, tweets = [] }) => {
  // Tweet matni, foydalanuvchi nomi va avatar manzilini saqlash uchun useState hooklarini ishlatamiz
  const [tweetText, setTweetText] = useState(''); // Tweet matni
  const [username, setUsername] = useState(''); // Foydalanuvchi nomi
  const [avatar, setAvatar] = useState(''); // Foydalanuvchi rasm manzili

  // Tweetni qo'shish funksiyasi
  const handleTweet = () => {
    // Agar tweet matni, foydalanuvchi nomi va avatar bo'sh bo'lmasa
    if (tweetText.trim() !== '' && username.trim() !== '' && avatar.trim() !== '') {
      addTweet({
        id: Date.now(), // Har bir tweet uchun unikal ID
        text: tweetText, // Tweet matni
        user: username, // Foydalanuvchi nomi
        avatar: avatar, // Foydalanuvchi rasm manzili
      });
      // Kiritilgan ma'lumotlarni bo'shatamiz
      setTweetText(''); // Tweet kiritilgandan keyin inputni bo'shatamiz
      setUsername(''); // Foydalanuvchi nomini bo'shatamiz
      setAvatar(''); // Rasm manzilini bo'shatamiz
    } else {
      console.error("Tweet matni, foydalanuvchi nomi va rasm manzili bo'sh bo'lmasligi kerak."); // Xatolik xabari
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="border-b p-4">
        {/* Tweet matnini kiritish uchun input */}
        <input
          type="text"
          placeholder="What’s happening?"
          className="w-full p-2 rounded-lg border-gray-300 shadow-sm"
          value={tweetText}  // Inputdagi qiymat
          onChange={(e) => setTweetText(e.target.value)}  // Harf kiritilganda holatni o'zgartirish
        />
        {/* Foydalanuvchi nomini kiritish uchun input */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 rounded-lg border-gray-300 shadow-sm mt-2"
          value={username}  // Foydalanuvchi nomi
          onChange={(e) => setUsername(e.target.value)}  // Foydalanuvchi nomini o'zgartirish
        />
        {/* Avatar URL'sini kiritish uchun input */}
        <input
          type="text"
          placeholder="Avatar URL"
          className="w-full p-2 rounded-lg border-gray-300 shadow-sm mt-2"
          value={avatar}  // Foydalanuvchi rasm manzili
          onChange={(e) => setAvatar(e.target.value)}  // Rasm manzilini o'zgartirish
        />
        {/* Tweetni qo'shish tugmasi */}
        <button
          onClick={handleTweet}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Tweet
        </button>
      </div>

      {/* Tweetlarni ko'rsatish */}
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={tweet.id} className="border-b p-4 flex">
            {/* Foydalanuvchi rasmiga avatar */}
            <img src={tweet.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{tweet.user}</p> {/* Foydalanuvchi nomi */}
              <p className="text-sm">{tweet.text}</p> {/* Tweet matni */}
            </div>
          </div>
        ))
      ) : (
        <p className="p-4">No tweets available.</p> // Agar tweetlar bo'lmasa, shuni ko'rsatamiz
      )}
    </div>
  );
};

export default Feed; // Komponentni eksport qilamiz
