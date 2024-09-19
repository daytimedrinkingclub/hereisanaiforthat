'use client'
import Link from 'next/link';
import { Bell, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { useUser } from '@/contexts/UserContext';

export default function Header() {
  // const [user, setUser] = useState<SupabaseUser | null>(null);
  const { user } = useUser();
  const supabase = createClient();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     setUser(user);
  //   };

  //   fetchUser();

  //   const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //     setUser(session?.user ?? null);
  //   });

  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-[#24283b] bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 flex justify-between items-center z-50 sticky top-0 border-b border-white border-opacity-10">
      <h1 className="text-xl md:text-2xl font-bold ml-16 md:ml-0 text-gray-200">HERE'S AN AI FOR THAT</h1>
      <div className="flex items-center space-x-4">
        <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-purple-600 bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer backdrop-filter backdrop-blur-sm">
                <User size={20} className="text-white" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>{user.email}</DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex space-x-2">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-200 hover:text-white">Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline" className="text-gray-200 hover:text-white">Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}