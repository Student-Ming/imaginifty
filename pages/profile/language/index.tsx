import { Select, Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { UserProfileRootLayout } from "@/src/components/profile/layout/rootLayout";
import { wrapper } from "@/src/redux/store";
import { appServerSideTranslations } from "@/src/i18n";
import { useVerificationCode } from "@/src/hooks/use-verification-code";

export default function LanguagePage() {
    const { t, i18n } = useTranslation('profile')
    const [mounted, setMounted] = useState(false);
    const [language, setLanguage] = useState('zh-CN')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { countdown, isButtonDisabled, startCountdown } = useVerificationCode(5)

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const localLanguage = localStorage.getItem('language') || 'zh-CN'
        i18n.changeLanguage(localLanguage);
        setLanguage(localLanguage)
    }, [i18n]);

    const changeLang = () => {
        setIsModalOpen(true)
        startCountdown()
    };

    const reload = () => {
        localStorage.setItem('language', language)
        window.location.reload()
    }

    if (!mounted) {
        return null;
    }

    return (
        <UserProfileRootLayout>
            <div className="flex justify-center gap-1">
                <Select
                    defaultValue={language}
                    style={{ width: '50%' }}
                    aria-label="Select Language"
                    onChange={(value) => setLanguage(value)}
                    options={[
                        { value: 'zh-CN', label: '简体中文' },
                        { value: 'en-US', label: 'English' },
                    ]}
                />
                <Button
                    type='primary'
                    autoInsertSpace={false}
                    onClick={changeLang}
                    disabled={language === (localStorage.getItem('language') || 'zh-CN')}
                >{t('SAVE')}</Button>
            </div>
            <Modal
                title={t('CHANGE_LANGUAGE_DIALOG_TITLE')}
                open={isModalOpen}
                style={{ top: 150 }}
                closable={false}
                footer={[
                    <Button
                        key='reload'
                        type='primary'
                        onClick={reload}
                        disabled={isButtonDisabled}>
                        {t('RELOAD')}{countdown > 0 ? `(${countdown})` : ''}
                    </Button>
                ]}
            >
                <p>{t('CHANGE_LANGUAGE_DIALOG_CONTENT')}</p>
            </Modal>
        </UserProfileRootLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {

        return {
            props: {
                ...(await appServerSideTranslations(context, ['common', 'profile']))
            }
        }
    }
)