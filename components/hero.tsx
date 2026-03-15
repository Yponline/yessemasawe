// components/Hero.tsx
import Image from "next/image"; // or your image component
import { socialLinks } from "./footer";

interface Props {
	className?: string;
}

export default function Hero({ className }: Props) {
	return (
		<section className={className}>
			{/* Subtle radial gradient overlay for depth */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />

			<div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
				{/* Your Photo – Left Side */}
				<div className="flex justify-center  md:justify-center">
					<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-zinc-700/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 group">
						<Image
							src="/your-photo.jpg" // ← Replace with your actual photo path (e.g. public/your-photo.jpg)
							alt="Yese Massawe - Software Engineer"
							fill
							className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
							priority
						/>
						{/* Optional subtle overlay/glow on hover */}
						<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
					</div>
				</div>

				{/* Text Content – Right Side */}
				<div className="text-center md:text-left">
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
						Hey, I'm Yese
						<span className="block text-4xl md:text-6xl mt-2 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
							Code • Thoughts • Dar es Salaam
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-zinc-300 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
						Software Engineer crafting modern web apps • Sharing real talk on
						React, Next.js, open source, and building in Tanzania.
					</p>

					<div className="flex flex-wrap justify-center md:justify-start gap-6">
						<a
							href="/blog"
							className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition text-lg shadow-lg shadow-purple-500/20">
							Dive into Latest Posts →
						</a>
						<a
							href="/about"
							className="px-8 py-4 border-2 border-zinc-600 text-white rounded-full font-semibold hover:bg-zinc-800 transition text-lg">
							More About Me
						</a>
					</div>

					{/* Your social icons – keep them as-is */}
					<div className="mt-12 flex justify-center md:justify-start gap-8 text-3xl text-zinc-400">
						{socialLinks.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white hover:scale-125 transition-transform">
								{item.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
