import { z } from "zod";

export interface Email {
	from: string;
	subject: string;
}

export interface EmailData extends Email {
	email: string;
}

export interface EmailProps extends EmailData {
	to: string[] | string;
}

export interface BatchEmailProps extends EmailProps {
	text: string;
}

export const EmailSchema = z.object({
	email: z.string().email("Invalid email address"),
});
