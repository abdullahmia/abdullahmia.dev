import { DisplaySwitcher } from "./components/display-switcher";
import { LinkedDevices } from "./components/linked-devices";

const Settings = () => {
  return (
    <main>
      <h2 className="text-[16px] text-[#1a1f24] font-semibold dark:text-white">
        Display, Linked Devices
      </h2>

      {/* Display Settings */}
      <DisplaySwitcher />

      {/* Linked Devices */}
      <LinkedDevices />
    </main>
  );
};

export default Settings;
