import { useRouter } from "next/router"
import HeadTitle from '../title'
import { useTranslation } from 'next-i18next';
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function DashBoard() {
  const [language, setLanguage] = useState('zh-CN')
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const localLanguage = localStorage.getItem('language') || 'zh-CN'
    i18n.changeLanguage(localLanguage);
    setLanguage(localLanguage)
  }, [language, i18n]);

  const onValuesChange = (selectedKeys: any) => {
    setLanguage(selectedKeys.currentKey)
    localStorage.setItem('language', selectedKeys.currentKey)
    window.location.reload()
  };

  if (!mounted) {
    return null;
  }
  
  return (
    <div>
      <HeadTitle titleName='IMAGINIFTY:Beyond Your Imagination' />
      <div className='flex justify-center items-center m-4'>
        <main className='flex flex-col justify-center items-center gap-y-4 w-full border-x-2'>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
        </main>
      </div>
      <button onClick={() => router.push('/mine')}>{t('PERSONAL_CENTER')}</button><br />
      <button onClick={() => alert('666')}>{t('TEST')}</button>
      <div className="flex justify-center">
        <Select
          radius="sm"
          variant="bordered"
          aria-label="Select Language"
          className="max-w-xs"
          disallowEmptySelection
          defaultSelectedKeys={[language]}
          onSelectionChange={onValuesChange}
        >
          <SelectItem key='zh-CN'>简体中文</SelectItem>
          <SelectItem key='en-US'>English</SelectItem>
        </Select>
      </div>
    </div>
  )
}