import { ReactNode } from "react";
import { UserIcon, LanguageIcon } from "../icon"

export interface PROFILE_MENU_ITEM {
    text: string;
    icon: ReactNode;
    sub?: boolean;
    parent?: string;
}

export const PROFILE_PERFIX = '/profile'

export const PROFILE_MENU_MAP: Record<string, PROFILE_MENU_ITEM> = {
    '/': {
        text: 'SLIDEBAR_PROFILE',
        icon: <UserIcon />
    },
    '/language': {
        text: 'SLIDEBAR_LANGUAGE',
        icon: <LanguageIcon />,
    },
}