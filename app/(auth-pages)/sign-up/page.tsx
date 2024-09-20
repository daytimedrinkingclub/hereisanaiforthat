import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input className="border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200" name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            className="border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <Button type="submit" formAction={signUpAction} className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
            Sign up
          </Button>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
