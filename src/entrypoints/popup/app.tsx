import { Route, Routes } from "react-router";
import { twMerge } from "tailwind-merge";
import { useSettingsStore } from "~/stores";
import { Header } from "./components";
import { Home } from "./routes/home";
import { Settings } from "./routes/settings";

export function App() {
  const { theme } = useSettingsStore();

  return (
    <div
      className={twMerge(
        theme,
        "flex flex-col gap-4 px-6 py-4 min-h-[350px] w-[400px]",
        "bg-gray-50 dark:bg-gray-900 dark:text-white"
      )}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
