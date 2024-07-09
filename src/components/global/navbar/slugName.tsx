import { clsxm } from "@/src/utils/clsxm";
import Link from "next/link";
import { Fragment } from "react";


interface params {
    slugName: string;
    useLink: boolean;
    slugLink: string;
    className?: string;
}

export const SlugName = (props: params) => {
    const { slugLink, slugName, useLink = true, className } = props;

    return (
        <Fragment>
            <div
                className={clsxm('text-xl max-xl:text-base text-white truncate', className)}
                style={{ direction: 'rtl' }}>
                <span
                    style={{ direction: 'ltr', unicodeBidi: 'embed' }}
                    className="leading-[29px]">
                    <Link href={slugLink}>
                        <span>
                            <span className={'hover:underline underline-offset-2'}>{slugName}</span>
                        </span>
                    </Link>
                </span>
            </div>
        </Fragment>
    )
}