import { Select } from "~/components";
import { useSettingsStore } from "~/stores";

export const ThemeSelector = () => {
  const { theme, setTheme } = useSettingsStore();

  return (
    <Select
      label="Theme:"
      options={[
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ]}
      onSelected={(value) => setTheme(value as WxtAppConfig["theme"])}
      selected={theme}
    />
  );
};
