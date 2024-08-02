import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { Switch, Tooltip } from "@nextui-org/react";
import { changeType } from "@/src/redux/features/theme";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux";

export const ThemeSwitcher = () => {
  const { type, isSelected, tip, color } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const { setTheme } = useTheme()

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
        showArrow
        classNames={{
          base: [
            "left-4"
          ]
        }}>
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