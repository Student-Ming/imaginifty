import { NavBar } from '@/src/components/global/navbar';
import { HomeIndex } from '@/src/components/home';

export default function Home() {
  return (
    <div>
      <header><NavBar></NavBar></header>
      <HomeIndex></HomeIndex>
    </div>
  );
}
