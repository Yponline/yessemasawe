"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";

export default function page() {
	return (
		<div>
			<div className="sticky top-0 z-50 w-full  bg-black">
				<Header />
			</div>

			<Hero className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden py-10" />

			<Footer />
		</div>
	);
}
