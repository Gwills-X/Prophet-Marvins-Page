import React from "react";
import { FaSpotify, FaTelegram, FaTv, FaYoutube } from "react-icons/fa";

const Messages = () => {
	return (
		<div
			className=' relative z-20 bg-gray-100 flex flex-col py-10 px-33 max-md:px-10'
			id='messages'>
			<h1 className='text-5xl font-bold self-center text-indigo-950 max-md:text-2xl	'>
				My Messages
			</h1>
			<div></div>
			<p className=' text-xl text-center font-normal my-5 text-gray-800 max-md:text-[15px]'>
				With Marvins Ogwuche, every minute counts — each moment is a journey of
				growth, revelation, and divine equipping. You’ll learn to hear God
				clearly, walk in prophetic accuracy, and apply Kingdom principles in
				everyday life. From the marketplace to ministry, Marvins empowers you to
				lead, serve, and shape your generation with wisdom and power.
			</p>
			{/* buttons */}
			<div className='grid grid-cols-3 w-full  gap-2 text-2xl p-10 [&>button]:bg-blue-400 [&>button]:p-5 [&>button]:rounded-[50px] [&>button]:text-white [&>button]:w-full [&>button]:h-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-3 max-md:p-5 max-md:text-[15px] max-md:grid-cols-1  max-xl:grid-cols-2 max-lg:text-[18px]'>
				<button>
					<FaSpotify /> Listen On Spotify
				</button>
				<button>
					<FaTelegram /> Listen On Telegram
				</button>
				<button>
					<FaTv /> Watch Ambience Tv Live
				</button>
				<button className='col-start-2 max-md:col-start-1 '>
					<FaYoutube /> Follow Marvins Ogwuche On Youtube
				</button>
			</div>
		</div>
	);
};

export default Messages;
