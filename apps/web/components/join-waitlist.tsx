import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { DialogProps } from "@radix-ui/react-dialog";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import Turnstile from "react-turnstile";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email(),
});

interface JoinWaitlistProps extends DialogProps {
	children: ReactNode;
}

type DialogData = {
	title: string;
	description: string;
};

const initialDialogData: DialogData = {
	title: "Join Waitlist",
	description: "Be the first to know when we launch.",
};

const confirmEmailDialogData: DialogData = {
	title: "Confirm your email address",
	description:
		"We've sent a confirmation email to your inbox. Please click the link in the email to confirm your email address.",
};

export function JoinWaitlist({ children, ...props }: JoinWaitlistProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [isVerified, setIsVerified] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (!isVerified) {
			toast.error("Unable to verify if you are a human.\nPlease refresh the page and try again.");
			form.setError("email", {
				message: "Unable to verify if you are a human.\nPlease refresh the page and try again.",
			});
			return;
		}

		try {
			const response = await fetch("/api/waitlist/add", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: values.email }),
			});

			if (!response.ok) {
				toast.error("Failed to add email to waitlist");
				form.setError("email", { message: "Failed to add email to waitlist" });
			}

			toast.success("Email successfully registered to the waitlist!", {
				description: "Check your inbox and confirm your email to actually join the waitlist.",
				duration: 5000,
				icon: <CircleCheckBig className="mr-2 size-5" />,
			});
			form.reset();
			setOpen(false);
		} catch (error) {
			toast.error(
				"An error occurred while adding your email to the waitlist. Please try again later."
			);
			form.setError("email", {
				message:
					"An error occurred while adding your email to the waitlist. Please try again later.",
			});
			throw new Error(error instanceof Error ? error.message : "Failed to add email to waitlist");
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen} {...props}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Join Waitlist</DialogTitle>
					<DialogDescription>Be the first to know when we launch.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="example@email.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Turnstile
							sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
							action="verify"
							cData="verifyLegitUser"
							size="invisible"
							appearance="execute"
							onLoad={(_, bound) => bound.execute()}
							onVerify={() => setIsVerified(true)}
						/>
						<DialogFooter className="flex gap-2">
							<Button
								className="w-full"
								variant="outline"
								onClick={() => setOpen(false)}
								type="button"
							>
								Cancel
							</Button>
							<Button className="w-full" type="submit">
								Submit
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

