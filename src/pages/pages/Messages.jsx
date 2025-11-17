import React from "react";
import { FaSpotify, FaTelegram, FaTv, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Messages = () => {
	return (
		<div
			className=' overflow-hidden relative z-20 bg-gray-100 flex flex-col py-10 px-33 max-md:px-10'
			id='messages'>
			<motion.h1
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, type: "spring" }}
				viewport={{ once: false }}
				className='text-5xl font-bold self-center text-indigo-950 max-md:text-2xl	'>
				My Messages
			</motion.h1>
			<div></div>
			<motion.p
				initial={{ opacity: 0, scaleX: 0.2 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				transition={{ duration: 1.5 }}
				className=' text-xl text-center font-normal my-5 text-gray-800 max-md:text-[15px]'>
				With Marvins Ogwuche, every minute counts — each moment is a journey of
				growth, revelation, and divine equipping. You’ll learn to hear God
				clearly, walk in prophetic accuracy, and apply Kingdom principles in
				everyday life. From the marketplace to ministry, Marvins empowers you to
				lead, serve, and shape your generation with wisdom and power.
			</motion.p>
			{/* buttons */}
			<div className='grid grid-cols-3 w-full  gap-2 text-xl p-10 [&>button]:bg-blue-400 [&>button]:p-5 [&>button]:rounded-[50px] [&>button]:text-white [&>button]:w-full [&>button]:h-full [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-3 max-md:p-5 max-md:text-[15px] max-md:grid-cols-1  max-xl:grid-cols-2 max-lg:text-[18px]'>
				<motion.button
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}>
					<a
						href='https://www.instagram.com/iammarvins1?igsh=MXhrZ3pzeWlhNHBydA%3D%3D&utm_source=qr'
						target='_blank'>
						<FaSpotify /> Follow Me On Instagram
					</a>
				</motion.button>
				<motion.button
					initial={{ opacity: 0, y: -200 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}>
					<a
						href='https://www.facebook.com/share/1aG8SY7654/?mibextid=wwXIfr'
						target='_blank'>
						<FaTelegram /> Follow Me On FaceBook
					</a>
				</motion.button>
				<motion.button
					initial={{ opacity: 0, scale: 0.6 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
					className=' '>
					<a
						href='https://youtube.com/@marvinsogwuche?si=-oxBcP0YffC7QlUY'
						target='_blank'>
						<FaYoutube /> Follow Marvins Ogwuche On Youtube
					</a>
				</motion.button>
			</div>
		</div>
	);
};

export default Messages;
