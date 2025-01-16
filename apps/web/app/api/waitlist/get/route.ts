import { prisma } from "@/helpers/prisma";

export async function GET(req: Request) {
	if (req.method !== "GET") {
		return new Response(JSON.stringify({ error: "Method not allowed" }), {
			status: 405,
		});
	}

	try {
		const response = await prisma.waitlistWeb.findMany({
			select: {
				email: true,
			},
		});

		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({
				error: "Failed to retrieve waitlist emails",
				details: error instanceof Error ? error.message : String(error),
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}
