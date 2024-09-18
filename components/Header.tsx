import Link from 'next/link';
import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#24283b] p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HERE'S AN AI FOR THAT</h1>
      <div className="flex items-center space-x-4">
        <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
        <Link href="/profile">
          <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <User size={20} className="text-white" />
          </div>
        </Link>
      </div>
    </header>
  );
}