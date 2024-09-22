import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="mx-auto max-w-2xl py-15 sm:py-24 lg:py-15 opacity-70 animate-fadeInUp">
			<div className="text-center">
				<div className="bg-gradient-to-r from-blue-800 to-blue-950 text-white p-8 rounded-lg shadow-xl">
					<h1 className="text-3xl font-bold mb-4">
						Hi there! I’m Fahim
					</h1>
					<blockquote className="mb-4 text-xl">
						A frontend software engineer with extensive experience
						in developing high-performance, user-centric web
						applications. I focus on delivering clean, maintainable
						code and creating intuitive user experiences. With a
						passion for continuous learning and collaboration, I
						thrive on tackling complex challenges and contributing
						to innovative solutions. Let’s connect!
					</blockquote>
				</div>
			</div>
		</div>
	);
};
