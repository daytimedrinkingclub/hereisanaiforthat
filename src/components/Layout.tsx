"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon, MenuIcon, MountainIcon, SearchIcon } from "lucide-react";
// Import all your icon components here

export default function Layout({ children }) {
  const router = useRouter();

  const handleNavigation = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body dark:bg-muted dark:text-card-foreground">
      <header className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-muted dark:border-card bg-primary dark:bg-card">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold text-primary-foreground dark:text-card-foreground"
          onClick={(e) => handleNavigation(e, "/")}
        >
          <MountainIcon className="w-6 h-6" />
          <span>AI Tool Finder</span>
        </Link>
        <Button variant="ghost" size="icon" className="sm:hidden text-primary-foreground dark:text-card-foreground">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <div className="flex flex-1">
        <nav className="hidden sm:flex flex-col items-start gap-4 bg-muted p-4 border-r border-muted dark:bg-card dark:border-card">
          {/* Repeat this pattern for all your navigation links */}
          <Link href="/" className="flex items-center gap-2 hover:underline" onClick={(e) => handleNavigation(e, "/")}>
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link href="/search" className="flex items-center gap-2 hover:underline" onClick={(e) => handleNavigation(e, "/search")}>
            <SearchIcon className="w-5 h-5" />
            <span>Search</span>
          </Link>
          {/* Add the rest of your navigation links here */}
        </nav>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
      <footer className="flex items-center justify-center h-16 px-4 sm:px-6 bg-muted border-t border-muted text-sm dark:bg-card dark:border-card">
        {/* Your footer content */}
      </footer>
    </div>
  );
}