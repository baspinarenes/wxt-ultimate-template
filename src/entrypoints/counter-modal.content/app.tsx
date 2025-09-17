import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { DaylightIndicator } from "~/components/molecules/daylight-indicator";
import { ThemeSelector } from "~/components/molecules/theme-selector";
import { useSettingsStore } from "~/stores";
import { CloseButton, Overlay } from "./components";

export function App() {
  const { theme } = useSettingsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    onMessage({
      showCounterModalUi: () => setIsModalOpen(true),
    });
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div
      className={twMerge(
        theme,
        "fixed inset-0 z-50  flex items-center justify-center"
      )}
    >
      <Overlay onClick={handleClose} />

      <div
        className={twMerge(
          "relative bg-white dark:bg-gray-800 rounded-lg shadow-xl",
          "w-full max-w-md mx-auto",
          "dark:text-white"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={handleClose} />

        <div className="flex flex-col justify-center items-center gap-4 p-6">
          <ThemeSelector />
          <DaylightIndicator />
        </div>
      </div>
    </div>
  );
}
