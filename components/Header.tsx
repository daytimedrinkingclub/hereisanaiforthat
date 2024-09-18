import Link from 'next/link';
import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#24283b] bg-opacity-70 backdrop-filter backdrop-blur-lg p-4 flex justify-between items-center z-50 sticky top-0 border-b border-white border-opacity-10">
      <h1 className="text-xl md:text-2xl font-bold ml-16 md:ml-0 text-gray-200">HERE'S AN AI FOR THAT</h1>
      <div className="flex items-center space-x-4">
        <Bell size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
        <Link href="/profile">
          <div className="bg-purple-600 bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer backdrop-filter backdrop-blur-sm">
            <User size={20} className="text-white" />
          </div>
        </Link>
      </div>
    </header>
  );
}