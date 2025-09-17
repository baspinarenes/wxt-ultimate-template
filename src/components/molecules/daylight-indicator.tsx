import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useSettingsStore } from "~/stores";

export const DaylightIndicator = () => {
  const { theme } = useSettingsStore();

  if (theme === "light") {
    return <IconSunFilled size={48} />;
  }

  return <IconMoonFilled size={48} />;
};
