import React from "react";
import marvinsImg from "../assets/prophetProfile.jpg"; // replace with the actual image path
import FormfacadeEmbed from "@formfacade/embed-react";
import loadingPic from "../assets/ChatGPT Image Nov 12, 2025, 01_17_28 PM.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Consulting = () => {
	const [loading, setLoading] = React.useState(true);
	const navigate = useNavigate();

	function handleSubmit() {
		setLoading(true);
		navigate("/");
	}
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.2 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			className='flex flex-col items-center justify-center w-full min-h-screen bg-gray-300 py-16 px-5'>
			{/* Intro Section */}
			<div className='max-w-3xl text-center mb-10'>
				<motion.h1
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className='text-4xl font-bold text-gray-800 mb-4'>
					Consult with Marvins
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className='text-gray-600 text-lg leading-relaxed'>
					With Marvins, every moment counts. His passion for people and
					prophetic insight helps individuals and organizations align with
					divine purpose, gain clarity, and move forward with wisdom and
					strategy.
				</motion.p>
			</div>

			{/* Form and Image Section */}
			<div className='flex  justify-center items-center gap-10 bg-gray-100 shadow-2xl rounded-2xl p-8 max-w-5xl w-full max-md:flex-col max-md:p-3'>
				{/* Form */}
				<div className='w-full '>
					{loading && (
						<div className='relative'>
							<div className='absolute top-50 left-50  w-24 h-24'>
								<div className='absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
							</div>
							<div className='flex justify-center items-center h-fit'>
								<img src={loadingPic} alt='' />
							</div>
						</div>
					)}
					<iframe
						src='https://docs.google.com/forms/d/e/1FAIpQLSdPHLkAHxciXARP66tYqP8sCX-qKCiLilohSXtlS-lky0XyQA/viewform?embedded=true'
						width='640'
						height='600'
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						frameBorder='10'
						marginHeight='20'
						marginWidth='0'
						onLoad={() => setLoading(false)}>
						Loading…
					</iframe>
				</div>
				{/* Image */}
				<div className=' w-full flex justify-center items-center  max-w-md'>
					<img
						src={marvinsImg}
						alt='Marvins Ogwuche'
						className='w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px] rounded-full shadow-lg '
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Consulting;
