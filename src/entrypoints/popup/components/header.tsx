import { IconHome, IconSettings } from "@tabler/icons-react";
import { NavigationItem } from "./navigation-item";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center mb-4">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          WXT Ultimate Template
        </h1>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          WXT + React + Zustand + TailwindCSS
        </span>
      </div>

      <div id="navigations" className="flex gap-2 w-full justify-center mb-4">
        <NavigationItem to="/">
          <IconHome size={16} />
          Home
        </NavigationItem>
        <NavigationItem to="/settings">
          <IconSettings size={16} />
          Settings
        </NavigationItem>
      </div>
    </div>
  );
};
