import { UserProfileRootLayout } from "@/src/components/profile/layout/rootLayout";
import { appServerSideTranslations } from "@/src/i18n";
import { wrapper } from "@/src/redux/store";

export default function ProfilePage() {
  return (
    <UserProfileRootLayout>
      <div>欢迎！这里是个人中心</div>
    </UserProfileRootLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {

    return {
      props: {
        ...(await appServerSideTranslations(context, ['profile']))
      }
    }
  }
)