"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function page() {
	return (
		<div>
			<div className="h-screen bg-black">
				<Header />
			</div>
			<Footer />
		</div>
	);
}
