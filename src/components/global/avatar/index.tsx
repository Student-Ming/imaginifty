import React from "react"
import { Image } from "@nextui-org/react"
import { clsxm } from "@/src/utils/clsxm"


type AvatarShape = 'round' | 'circle'

interface params {
    size?: number,
    imageSrc: string,
    name?: string,
    style?: any,
    className?: string,
    shape?: AvatarShape,
    onClick?: () => void,
    imgClassName?: string,
}

export const Avatar = ({ size = 32, imageSrc, name, style, className, shape = 'round', onClick, imgClassName = '' }: params) => {

    return (
        <div className={clsxm(className, { 'rounded-full': shape === 'circle' })}
            style={{ width: size, height: size, ...style }}>
            <Image
                object-fit="cover"
                style={{ height: size, width: size }}
                height={size}
                width={size}
                src={imageSrc}
                alt={name || ''}
                className={imgClassName}
            />

        </div>
    )
}