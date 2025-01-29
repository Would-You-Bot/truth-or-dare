import AnimatedWaitlist from "@/components/animated-waitlist";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Testing Page",
};

export default function TestPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#FF7940] via-[#FF4D8D] to-[#B44BFF] flex items-center justify-center">
			<AnimatedWaitlist />
		</div>
	);
}
