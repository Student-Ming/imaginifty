import Head from 'next/head'
import { Button, Spacer } from '@nextui-org/react';
import { ThemeSwitcher } from '@/src/components/global/ThemeSwitcher'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function Home() {
  return (
    <div>
      <Head><title>IMAGINIFTY:Beyond Your Imagination</title></Head>
      <header className='flex justify-end items-center h-[65px] bg-gradient-to-r from-[#04367b] from-10% via-[#080e17] via-30% to-[#33174a] to-90%'>
        <ThemeSwitcher />
        <Spacer x={4} />
        <SignedOut>
          <SignInButton>
            <button className='text-cyan-300'>Sign in</button>
          </SignInButton>
        </SignedOut>
        <SignedIn><UserButton /></SignedIn>
        <Spacer x={10} />
      </header>
      <div className='flex justify-center items-center m-4'>
        <main className='flex flex-col justify-center items-center gap-y-4 w-full border-x-2'>
          <p>888之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
        </main>
      </div>
    </div>
  );
}
