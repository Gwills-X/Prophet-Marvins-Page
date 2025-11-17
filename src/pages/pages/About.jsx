import React from "react";
import aboutPic from "../../assets/prophetProfile.jpg";
import { FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
	const array = [1, 2, 3, 4, 5];
	return (
		<div
			className='bg-gray-100 relative z-20 flex justify-center items-center text-center p-10 max-md:p-5 gap-10 w-full max-md:w-full '
			id='about'>
			<div className='flex flex-col'>
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className='text-5xl text-gray-400 max-md:text-3xl'>
					About Me
				</motion.h1>

				<div className='text-blue-400 flex gap-0 self-center mt-2'>
					{array.map((ar, index) => (
						<div key={index}>
							<FaMinus />
						</div>
					))}
				</div>

				<div className='flex justify-between items-center gap-5 w-full px-20 lg:px-5 max-md:flex-col max-lg:flex-col max-lg:px-0 max-md:px-0 max-lg:gap-10 mt-0'>
					<motion.p
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
						className='text-gray-600 text-[20px] max-md:text-[15px] w-full'>
						Marvins Ogwuche is a prophetic voice and teacher who carries a
						distinct grace to unveil the wisdom, power, and glory of God to his
						generation. Rooted in deep prayer and devotion, he reflects an
						unwavering commitment to intimacy with God and the accurate teaching
						of His Word, burning with a passion to see believers firmly
						established, strengthened, and enthroned in their spiritual
						assignments. From the early days of quiet encounters in prayer,
						Marvins developed a deep sensitivity to the Spirit’s leading—a
						journey that shaped his calling and ignited his desire to help
						believers hear God accurately, walk in alignment with divine
						purpose, and express God’s wisdom in everyday life. Over the years,
						his ministry has grown into a prophetic expression marked by
						revelation, clarity, and sound teaching, expressed through spoken
						word, written content, and teaching sessions, all aimed at unveiling
						the realities of the Kingdom and equipping men and women to discern
						divine patterns and manifest God’s power in their generation.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, scale: 0.4 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.5 }}
						className='w-1/2 max-md:w-full overflow-hidden rounded-full self-center text-center flex flex-col justify-center items-center '>
						<img
							src={aboutPic}
							className='w-[500px] h-[500px] max-xl:w-[400px] max-xl:h-[400px] max-lg:w-[300px] max-lg:h-[300px]  bg-top rounded-full  '
							alt=''
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
