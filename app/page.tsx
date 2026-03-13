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

			<Hero />

			<Footer />
		</div>
	);
}
