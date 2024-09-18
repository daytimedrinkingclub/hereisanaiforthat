// This component is redundant as the functionality is already implemented in app/(dashboard)/home/page.tsx.
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
}