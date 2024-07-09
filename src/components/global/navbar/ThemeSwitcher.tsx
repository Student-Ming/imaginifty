import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { Switch, Tooltip } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="mt-1">
      <Tooltip
        content={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
        delay={50}
        closeDelay={200}
        color={theme === 'light' ? 'default' : 'secondary'}
        offset={-45}>
        <Switch
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