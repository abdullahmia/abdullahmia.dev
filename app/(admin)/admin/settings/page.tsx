import PasswordChangeFrom from "@/app/components/auth/password-change-form";

const Settings = () => {
  return (
    <main>
      <h2 className="text-[15px] text-[#1a1f24] font-semibold dark:text-white">
        Change Password
      </h2>
      <p className="text-[13px] text-[#51595f] dark:text-[#999999]">
        Change your admin login password!.
      </p>

      <div className="mt-8">
        <PasswordChangeFrom />
      </div>
    </main>
  );
};

export default Settings;
