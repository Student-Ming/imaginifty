import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { Switch, Tooltip } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { themeState } from "@/src/redux/features/theme";
import { changeType } from "@/src/redux/features/theme";
import { useEffect } from "react";

interface params {
  theme: themeState
}

export const ThemeSwitcher = () => {
  const { type, isSelected, tip, color } = useSelector((state: params) => state.theme)
  const { setTheme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    setTheme(type)
  }, [type])

  return (
    <div className="mt-1">
      <Tooltip
        content={tip}
        delay={50}
        closeDelay={200}
        color={color}
        placement="bottom"
        showArrow>
        <Switch
          defaultSelected={isSelected}
          size="md"
          color="secondary"
          startContent={<MoonStar />}
          endContent={<Sun />}
          onChange={() => dispatch(changeType())}
        />
      </Tooltip>
    </div>
  )
};