import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section
			className='relative flex items-center justify-start w-screen h-screen overflow-hidden max-md:flex-col'
			id='home'>
			{/* Right Text Section (desktop only) */}
			<div className='bg-gray-900 text-white w-1/2 h-full flex flex-col justify-center items-start px-20 max-lg:px-10 z-20 max-md:hidden'>
				<motion.h1
					initial={{ opacity: 0, x: 50, rotate: 90, fontSize: "16px" }}
					whileInView={{ opacity: 1, x: 0, rotate: 0, fontSize: "48px" }}
					transition={{ duration: 1.5 }}
					// viewport={{ once: true }}
					className='text-6xl font-bold mb-6 leading-tight'>
					Marvins <br /> Ogwuche
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
					className='text-xl leading-relaxed'>
					A prophetic voice sent to bring clarity, direction, and the wisdom of
					God to a generation desperate to hear Him. Releasing revelation that
					awakens purpose and transforms lives.
				</motion.p>
			</div>
			{/* Background Image Section */}
			<div className='relative w-1/2 h-full max-md:w-full max-md:h-full'>
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
					className='profile w-full h-full'></motion.div>

				{/* Text overlay on mobile */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:hidden bg-black/50'>
					<motion.h1
						initial={{ opacity: 0, x: 50, rotate: 90, fontSize: "16px" }}
						whileInView={{ opacity: 1, x: 0, rotate: 0, fontSize: "48px" }}
						transition={{ duration: 1.5 }}
						className='text-4xl font-bold mb-4 text-white'>
						Marvins <br /> Ogwuche
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5 }}
						className='text-lg text-gray-200 leading-relaxed'>
						A prophetic voice and teacher called to bring clarity, direction,
						and spiritual insight to this generation. Rooted in prayer and
						devotion, his ministry is marked by revelation, sound teaching, and
						a passion for helping believers hear God accurately. He equips men
						and women to discern divine patterns, walk in purpose, and manifest
						God’s wisdom and power in their generation.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
