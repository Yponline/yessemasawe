"use client";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";

export const navLinks = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Me",
		href: "#about-me",
	},
	{
		label: "Skills",
		href: "#skills",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-transparent ", {
				"border-border bg-background/15 backdrop-blur-sm supports-backdrop-filter:bg-background/10":
					scrolled,
			})}>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<a className="rounded-md p-2  dark:hover:bg-muted/50" href="/">
					<Logo />
				</a>
				<div className="hidden items-center gap-2 md:flex">
					{navLinks.map((link) => (
						<Button asChild key={link.label} size="sm" variant="ghost">
							<Link href={link.href} className="text-white">
								{link.label}
							</Link>
						</Button>
					))}
					{/* <Button size="sm" variant="outline">
						Sign In
					</Button>
					<Button size="sm">Get Started</Button> */}
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
