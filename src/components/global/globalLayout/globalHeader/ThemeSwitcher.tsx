import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { Switch, Tooltip } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const {t} = useTranslation('common')

  const tip = useMemo(() => { return theme === 'dark' ? t('LIGHT_THEME') : t('DARK_THEME') }, [theme])
  const color = useMemo(() => { return theme === 'dark' ? 'secondary' : 'default' }, [theme])

  // 解决React hydration 警告
  // 通常发生在服务器端渲染 (SSR) 和客户端渲染 (CSR) 之间的状态不一致时。
  // data-selected 属性的值在服务器端渲染时为 null，而在客户端渲染时为 true，这导致了不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-1">
      <Tooltip
        content={tip}
        delay={50}
        closeDelay={200}
        color={color}
        placement="bottom"
        showArrow
        classNames={{
          base: [
            "left-4"
          ]
        }}>
        <Switch
          defaultSelected={theme === 'dark'}
          size="md"
          color="secondary"
          startContent={<MoonStar />}
          endContent={<Sun />}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </Tooltip>
    </div>
  )
};