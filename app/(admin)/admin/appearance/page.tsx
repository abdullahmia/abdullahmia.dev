import { DisplaySwitcher } from "./components/display-switcher";

const Settings = () => {
  return (
    <main>
      <h2 className="text-[16px] text-[#1a1f24] font-semibold dark:text-white">
        Display, Links, and Integrations
      </h2>

      {/* Display Settings */}
      <DisplaySwitcher />
    </main>
  );
};

export default Settings;
