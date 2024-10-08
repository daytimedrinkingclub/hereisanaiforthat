import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input 
          name="email" 
          placeholder="you@example.com" 
          required 
          className="border border-gray-300 rounded-md p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
          className="border border-gray-300 rounded-md p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <Button type="submit" formAction={signInAction} className="bg-blue-600 text-white hover:bg-blue-100 transition-colors duration-200 hover:bg-transparent">
          Sign in
        </Button>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
