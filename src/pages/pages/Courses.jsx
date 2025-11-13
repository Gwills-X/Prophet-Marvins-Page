import React from "react";

const Courses = () => {
	return (
		<div className=' relative z-20 bg-white flex flex-col ' id='courses'>
			<div className='p-20 text-center max-md:p-5'>
				<h1 className='text-5xl mb-3 font-bold self-center text-indigo-950 max-md:text-2xl'>
					Mentorship Platforms
				</h1>
				<p className='text-gray-600 text-xl max-md:text-[15px] w-full'>
					Equipping believers for spiritual depth, prophetic accuracy, and
					Kingdom impact. These mentorship tracks are designed to raise a
					generation of believers who are spiritually attuned, scripturally
					grounded, and strategically positioned for influence in ministry and
					the marketplace.
				</p>
				<div className='flex text-gray-600 text-xl px-10 w-full justify-center items-start py-10 gap-6 max-md:flex max-md:flex-col max-md:px-5 [&>div]:w-1/3 [&>div]:flex [&>div]:flex-col [&>div]:gap-5 max-md:[&>div]:w-full [&_h2]:text-2xl [&_h2]:font-semibold max-md:[&_h2]:text-xl [&_p]:max-md:text-[15px] max-lg:grid max-lg:grid-cols-2 max-lg:px-0 max-xl:px-0 [&>div]:max-lg:w-full '>
					<div>
						<h2>🔹 School of Prophets</h2>
						<p>
							Hearing. Discerning. Declaring. <br /> A training hub for
							prophetic development — helping believers grow in sensitivity to
							the Holy Spirit, understand prophetic operations, and cultivate
							the character that sustains authentic prophetic ministry. Learn to
							interpret divine signals, steward revelation, and walk in
							accuracy.
						</p>
					</div>

					<div>
						<h2>🔹 Marketplace Ministry</h2>
						<p>
							Kingdom Influence in Everyday Spaces. <br />
							This course bridges faith and purpose in professional, business,
							and leadership environments. It empowers believers to express
							God’s wisdom and power in their daily work, shaping culture with
							Kingdom values. Transform your sphere of influence through divine
							strategy and excellence.
						</p>
					</div>

					<div>
						<h2>🔹 School of Service (Five-Fold Ministry Track)</h2>
						<p>
							Raising Voices for the Kingdom. <br /> A specialized program for
							those called into the five-fold ministry — Apostles, Prophets,
							Evangelists, Pastors, and Teachers. Focused on spiritual
							formation, ministry structure, and stewardship of divine
							assignments. Be equipped to serve, build, and lead with grace and
							accuracy.
						</p>
					</div>
				</div>

				{/* join mentorship buttons */}
				<div className='bg-gray-100 p-10 max-md:p-5 rounded-lg text-gray-700 text-center max-w-md mx-auto [&_h2]:text-3xl [&_h2]:font-bold [&_p]:mt-5 [&_p]:text-lg max-md:[&_h2]:text-2xl max-md:[&_p]:text-[15px] '>
					<h2>🌿 Join the Mentorship Journey</h2>
					<p>
						Every course is a pathway to transformation — designed to strengthen
						your walk with God, refine your gifting, and position you for
						effective Kingdom service.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Courses;
