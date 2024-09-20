import { useRouter } from "next/router"
import HeadTitle from '../title'
import { useTranslation } from 'next-i18next';

export default function DashBoard() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div>
      <HeadTitle titleName='IMAGINIFTY:Beyond Your Imagination' />
      <div className='flex items-center justify-center m-4'>
        <main className='flex flex-col items-center justify-center w-full gap-y-4 border-x-2'>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
        </main>
      </div>
      <button onClick={() => router.push('/profile')}>{t('PERSONAL_CENTER')}</button><br />
      <button onClick={() => alert('666')}>{t('TEST')}</button>
    </div>
  )
}