import React from "react"
import { clsxm } from "@/src/utils/clsxm"

type AvatarShape = 'round' | 'circle'

interface params {
    imgSrc: string,
    imgdesc?: string,
    size?: number,
    style?: any,
    className?: string,
    shape?: AvatarShape,
    imgClassName?: string,
}

export const Avatar = ({ size = 32, imgSrc, imgdesc = '', style, className, shape = 'round', imgClassName = '' }: params) => {

    return (
        <div className={clsxm(className, { 'rounded-full': shape === 'circle' })}
            style={{ width: size, height: size, ...style }}>
            <img
                object-fit="cover"
                style={{ height: size, width: size }}
                height={size}
                width={size}
                src={imgSrc}
                alt={imgdesc}
                className={imgClassName}
            />

        </div>
    )
}