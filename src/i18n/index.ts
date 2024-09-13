import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function appServerSideTranslations(context: GetServerSidePropsContext, ns: string[] | string) {
    const lang = 'zh'

    return {
        ...(await serverSideTranslations(lang, ns, null, ['zh', 'en']))
    }
}
