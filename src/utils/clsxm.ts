// https://github.com/lukeed/clsx#readme
import clsx, { ClassValue} from "clsx";
// https://github.com/dcastil/tailwind-merge
import { twMerge } from "tailwind-merge";

/**
 * 合并类并返回
 * @param classes 样式类
 * @returns 返回合并之后的类字符串
 */
export function clsxm(...classes: ClassValue[]) {
    return twMerge(clsx(...classes))
}