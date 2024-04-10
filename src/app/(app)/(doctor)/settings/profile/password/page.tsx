import SettingsTile from "../../components/SettingsTile";
import UpdatePasswordFormContainer from "../components/UpdatePasswordFormContainer";


export const metadata = {
  title: 'Update Password',
};

const ProfilePasswordSettingsPage = () => {
  return (
    <SettingsTile heading={'Password'} subHeading={'Update your password'}>
      <UpdatePasswordFormContainer />
    </SettingsTile>
  );
};

export default ProfilePasswordSettingsPage;
