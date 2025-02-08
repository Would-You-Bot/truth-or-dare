"use client";

import { Calendar } from "lucide-react";
import AnimatedWaitlist from "./animated-waitlist";

export function Hero() {
	return (
		<div className="space-y-6 text-white">
			<div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
				<Calendar className="h-4 w-4" />
				Coming in 2025
			</div>
			<h1 className="font-bold text-4xl leading-tight sm:text-5xl md:text-6xl">
				The Ultimate <br className="hidden sm:inline" />
				Truth Or Dare <br className="hidden sm:inline" />
				Experience
			</h1>
			<p className="text-lg text-white/90 sm:text-xl md:text-2xl">
				Get ready for unforgettable moments with friends through interactive questions and dares.
				Powered by community engagement.
			</p>
			<AnimatedWaitlist />
		</div>
	);
}

