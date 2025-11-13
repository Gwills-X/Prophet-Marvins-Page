import React from "react";
import aboutPic from "../../assets/prophetProfile.jpg";
import { FaLine, FaMinus } from "react-icons/fa";
import { FaLinesLeaning } from "react-icons/fa6";

const About = () => {
	const array = [1, 2, 3, 4, 5];
	return (
		<div
			className='bg-gray-100 relative z-20 flex justify-center items-center text-center p-10 max-md:p-5 gap-10 w-full max-md:w-full '
			id='about'>
			<div className='flex flex-col'>
				<h1 className='text-5xl text-gray-400 max-md:text-3xl'>About Me</h1>

				<div className='text-blue-400 flex gap-0 self-center mt-2'>
					{array.map((ar, index) => (
						<div key={index}>
							<FaMinus />
						</div>
					))}
				</div>

				<div className='flex justify-between items-center gap-5 w-full px-20 lg:px-5 max-md:flex-col max-lg:flex-col max-lg:px-0 max-md:px-0 max-lg:gap-10 mt-0'>
					<p className='text-gray-600 text-[22px] max-md:text-[15px] w-full'>
						Marvins Ogwuche is an emerging prophetic voice, teacher, and
						communicator of God’s wisdom—raised with a divine assignment to
						bring clarity, direction, and spiritual insight to this generation.
						His journey began in the quiet places of prayer and devotion, where
						a deep hunger for God’s presence birthed encounters that shaped his
						calling. From those early moments of sensitivity to the Spirit’s
						leading, Marvins discovered a passion to help believers hear God
						accurately, walk in alignment, and express His wisdom in everyday
						life. Over the years, his ministry has evolved into a prophetic
						expression marked by revelation, sound teaching, and a heart for
						people. Whether through spoken word, written content, or teaching
						sessions, Marvins seeks to unveil the realities of the
						Kingdom—equipping men and women to discern divine patterns,
						understand their purpose, and manifest God’s power in their
						generation.
					</p>

					<div className='w-1/2 max-md:w-full overflow-hidden rounded-full self-center text-center flex flex-col justify-center items-center '>
						<img
							src={aboutPic}
							className='w-[500px] h-[500px] max-xl:w-[400px] max-xl:h-[400px] max-lg:w-[300px] max-lg:h-[300px]  bg-top rounded-full  '
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
