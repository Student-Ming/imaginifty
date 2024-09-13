import CommonHome, { DashBoard } from '@/src/components/home';
import { useState } from 'react';
import { wrapper } from '@/src/redux/store';
import { appServerSideTranslations } from '@/src/i18n';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
      {isLogin ? <DashBoard /> : <CommonHome />}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {

    return {
      props: {
        ...(await appServerSideTranslations(context, ['common', 'profile'])),
      },
    };
  }
)