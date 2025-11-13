import React from "react";
import marvinsImg from "../assets/prophetProfile.jpg"; // Replace with actual image path

const Partner = () => {
	return (
		<div className='flex flex-col items-center justify-center bg-gray-200 py-16 px-6 min-h-screen'>
			{/* Header Section */}
			<div className='text-center max-w-3xl mb-12'>
				<h1 className='text-4xl font-bold text-gray-800 mb-4'>
					Partner With Marvins Ogwuche
				</h1>
				<p className='text-lg text-gray-600 leading-relaxed'>
					Your partnership helps extend the reach of this ministry — advancing
					the message of transformation, prophetic insight, and Kingdom
					influence to lives and nations. Together, we build, equip, and raise
					voices for God’s move in this generation.
				</p>
			</div>

			{/* Main Content Section */}
			<div className='flex flex-wrap items-center justify-center gap-12 bg-gray-100 shadow-md rounded-2xl p-8 max-w-6xl w-full max-lg:flex-col max-lg:p-3'>
				{/* Image Section */}
				<div className=' flex justify-center'>
					<img
						src={marvinsImg}
						alt='Marvins Ogwuche'
						className='w-[500px] h-[500px] max-lg:w-[400px] max-lg:h-[400px]  max-md:w-[300px] max-md:h-[300px] rounded-full  '
					/>
				</div>

				{/* Partner Details */}
				<div className='flex-1 space-y-6'>
					{/* About Section */}
					<div>
						<h2 className='text-2xl font-semibold text-gray-800 mb-3'>
							About Marvins Ogwuche
						</h2>
						<p className='text-gray-600 leading-relaxed text-[17px]'>
							Marvins Ogwuche is a prophetic voice and teacher with a passion to
							raise Kingdom-minded leaders who shape culture and influence
							systems with divine wisdom. Through teaching, mentorship, and
							ministry, he continues to equip believers to walk in clarity,
							purpose, and power.
						</p>
					</div>

					{/* Partner Section */}
					<div>
						<h2 className='text-2xl font-semibold text-gray-800 mb-3'>
							Partner With Us
						</h2>
						<p className='text-gray-600 mb-5'>
							Kindly use the following account details to partner with Marvins
							Ogwuche Ministries International.
						</p>

						{/* Accounts */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{/* Naira Account */}
							<div className='bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition'>
								<h3 className='text-xl font-semibold text-indigo-700 mb-3'>
									Naira Account
								</h3>
								<p>
									<strong>Account Name:</strong> Marvins Ogwuche Ministries
								</p>
								<p>
									<strong>Bank Name:</strong> UBA
								</p>
								<p>
									<strong>Account Number:</strong> 2215005289
								</p>
							</div>

							{/* Dollar Account */}
							<div className='bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition'>
								<h3 className='text-xl font-semibold text-indigo-700 mb-3'>
									Dollar Account
								</h3>
								<p>
									<strong>Account Name:</strong> Marvins Ogwuche Ministries
								</p>
								<p>
									<strong>Bank Name:</strong> UBA
								</p>
								<p>
									<strong>Account Number:</strong> 2324428894
								</p>
								<p>
									<strong>Swift Code:</strong> UNAFNGLA
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Closing Note */}
			<p className='text-gray-500 text-sm text-center mt-10'>
				Thank you for your generosity and commitment to advancing God’s Kingdom.
			</p>
		</div>
	);
};

export default Partner;
