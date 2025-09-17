import { IconSettings } from "@tabler/icons-react";

export const Settings = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <IconSettings size={20} className="text-blue-500" />
          <h2 className="font-semibold">Quick Settings</h2>
        </div>
        <div className="flex items-center justify-between">
          <ThemeSelector />
          <DaylightIndicator />
        </div>
      </div>
    </div>
  );
};
