import Head from "next/head"


export default function HeadTitle(props: { titleName?: string } = { titleName: '' }) {
    const { titleName = '' } = props

    if (titleName) {
        return <Head><title>{titleName}</title></Head>
    }
    return <></>
}