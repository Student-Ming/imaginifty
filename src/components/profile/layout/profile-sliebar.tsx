import { Menu } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { PROFILE_MENU_ITEM, PROFILE_MENU_MAP, PROFILE_PERFIX } from "./router";
import { useTranslation } from "react-i18next";

export default function ProfileSlieBar() {
    const router = useRouter()
    const { t } = useTranslation('profile')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currValue = useMemo(() => {
        const path = router.route
        let key = path.replace(PROFILE_PERFIX, '')
        key = key === '' ? '/' : key
        if (PROFILE_MENU_MAP[key]) {
            if (PROFILE_MENU_MAP[key].sub) {
                return `${PROFILE_PERFIX}${PROFILE_MENU_MAP[key].parent}`
            }
            return path
        }
        return ''
    }, [router])

    const menuComponent = useMemo(() => {
        function createNode(key: string, item: PROFILE_MENU_ITEM) {
            if (item.sub) {
                return null;
            }
            return (
                {
                    key: `${PROFILE_PERFIX}${key === '/' ? '' : key}`,
                    label: t(item.text),
                    icon: item.icon
                }
            )
        }
        const keys = Object.keys(PROFILE_MENU_MAP)
        const components = keys.map((key) => createNode(key, PROFILE_MENU_MAP[key]))
        return components
    }, [t])

    if (!mounted) {
        return null;
    }

    return (
        <div className="laptop:h-full laptop:w-48 shrink-0 laptop:border-r laptop:border-[#CAD0DB] laptop:px-2 laptop:py-1">
            <Menu
                mode='vertical'
                className='profile-slidebar-memu'
                items={menuComponent}
                defaultSelectedKeys={[currValue]}
                onClick={(value) => router.push(value.key)}
            />
        </div>
    );
}