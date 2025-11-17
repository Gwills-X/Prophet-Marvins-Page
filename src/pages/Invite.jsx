import React from "react";
import marvinsImg from "../assets/prophetProfile.jpg"; // update the path
import loadingPic from "../assets/ChatGPT_Image_Nov_12__2025__02_02_09_PM-removebg-preview.png";
import { motion } from "framer-motion";

const Invite = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	return (
		<motion.div
			initial={{ opacity: 0, scaleX: 0.5 }}
			whileInView={{ opacity: 1, scaleX: 1 }}
			transition={{ duration: 1.5, delay: 0.5 }}
			className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-16 px-5'>
			{/* Header Section */}
			<div className='max-w-3xl text-center mb-12'>
				<motion.h1
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
					className='text-4xl font-bold text-gray-800 mb-4'>
					Invite Marvins Ogwuche
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className='text-gray-600 text-xl leading-relaxed '>
					Partner with Marvins for your next event, conference, or leadership
					session. His ministry carries a unique grace for transformation,
					clarity, and prophetic direction. Fill the form below to submit an
					official invitation.
				</motion.p>
			</div>

			{/* Form and Image */}
			<div className='flex justify-center items-center gap-10 bg-gray-100 shadow-2xl rounded-2xl p-8 max-w-5xl w-full max-md:flex-col max-lg:flex-col max-md:p-3'>
				{/* Form Section */}
				<div className='w-full'>
					<div>
						{isLoading && (
							<div className='bg-transparent w-fit h-[300px] p-4 rounded-lg shadow-lg flex justify-center items-center'>
								<div className='relative w-24 h-24'>
									<div className='absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
								</div>
								<img src={loadingPic} alt='' />
							</div>
						)}
					</div>
					<iframe
						src='https://docs.google.com/forms/d/e/1FAIpQLSfZFK2P3-lf2U3HOcZOP8YgMbHn9C8PH_EMhAqEAsOtiMB5NA/viewform?embedded=true'
						width='100%'
						height='600'
						frameBorder='0'
						marginHeight='0'
						marginWidth='0'
						title='Invite Marvins Ogwuche Form'
						className='w-full rounded-xl border-0'
						onLoad={() => setIsLoading(false)}>
						Loading…
					</iframe>
				</div>

				{/* Image Section */}
				<div className='w-full flex justify-center items-center max-w-md'>
					<img
						src={marvinsImg}
						alt='Marvins Ogwuche'
						className='w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px] rounded-full shadow-lg object-cover'
					/>
				</div>
			</div>

			{/* Footer Note */}
			<p className='text-gray-500 text-lg text-center mt-10'>
				Once submitted, our team will review your request and reach out with
				further details.
			</p>
		</motion.div>
	);
};

export default Invite;
