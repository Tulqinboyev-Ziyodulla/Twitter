import React, { useContext, useState } from 'react';
import { Context } from '../context/Index';
import { ModeIcon, SaveImgIcon, StatsIcon, GiftIcon, SimailIcon, CalendarIcon } from "../assets/images/Icons";
import Button from '../components/Button';

const Avatar = "https://picsum.photos/800/800";

function Feed() {
  const { postList, setPostList } = useContext(Context);
  const token = localStorage.getItem("token");
  let parsedToken = null;

  try {
    parsedToken = JSON.parse(token);
  } catch (error) {
    console.error("Token JSON formatida emas:", token);
  }

  const [postValue, setPostValue] = useState(""); 
  const [postImg, setPostImg] = useState("");

  function handleSubmitPost(e) {
    e.preventDefault();
    const currentPostList = Array.isArray(postList) ? postList : [];
    const newPostId = currentPostList.length ? currentPostList[currentPostList.length - 1].id + 1 : 1;

    const data = {
      id: newPostId,
      name: parsedToken?.login || "Anonim",
      imgUrl: Avatar,
      email: "@inner · 25m",
      description: postValue,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statistika: null,
      postImg: postImg
    };

    setPostList([data, ...currentPostList]); // Bu yerda xato yo'q
    setPostValue("");
    setPostImg("");
  }

  return (
    <div className='w-[80%] flex'>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-auto'>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Feed</h2>
          <button><ModeIcon /></button>
        </div>
        <form onSubmit={handleSubmitPost} autoComplete='off' className='pb-[46px] relative pl-[22px] items-start flex space-x-[15px] border-b-[1px] w-full border-slate-400'>
          <img src={Avatar} alt="Random img" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[10px]'>
            <input
              value={postValue}
              onChange={(e) => setPostValue(e.target.value)}
              className='font-semibold mb-[53px] text-[22px] placeholder:text-[#828282] outline-none'
              type="text"
              placeholder='What’s happening'
              name='postValue'
            />
            <div className='flex w-full space-x-[22px]'>
              <label htmlFor="file-upload" className='cursor-pointer'>
                <SaveImgIcon />
              </label>
              <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} id="file-upload" type="file" className='hidden' />
              <label htmlFor="gift-upload" className='cursor-pointer'>
                <GiftIcon />
              </label>
              <input id="gift-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <StatsIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
              <label htmlFor="simail-upload" className='cursor-pointer'>
                <SimailIcon />
              </label>
              <input id="simail-upload" type="file" className='hidden' />
              <label htmlFor="calendar-upload" className='cursor-pointer'>
                <CalendarIcon />
              </label>
              <input id="calendar-upload" type="file" className='hidden' />
            </div>
          </div>
          <Button
            width={108}
            extraStyle={`duration-300 absolute bottom-[5px] right-[18px] ${postValue ? "" : "opacity-[40%]"}`}
            title={"Tweet"}
            type={"submit"}
          />
        </form>
        {/* <ul>{currentPostList.length > 0 && currentPostList.map(item => <PostItem key={item.id} item={item} />)}</ul> */}
      </div>
    </div>
  );
}

export default Feed;
