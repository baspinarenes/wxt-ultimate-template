import { IconEye, IconEyeOff, IconWindow } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components";
import { sendMessageToActiveTab } from "~/utils/message";

export const Home = () => {
  const mountCounterModal = async () => {
    await sendMessageToActiveTab("mountCounterModalUi");

    setTimeout(() => {
      sendMessageToActiveTab("showCounterModalUi");
    }, 50);
  };

  const unmountCounterModal = () => {
    sendMessageToActiveTab("unmountCounterModalUi");
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <div className="grid gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <IconWindow size={18} className="text-green-500" />
            <h4 className="font-medium">Modal Management</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Show/hide modal on the page with a content script
          </p>
          <div className="flex gap-2">
            <Button
              icon={<IconEye size={16} />}
              className={twMerge(
                "flex-1 bg-green-500  text-white text-sm",
                "hover:bg-green-600"
              )}
              onClick={mountCounterModal}
            >
              Show Modal
            </Button>

            <Button
              icon={<IconEyeOff size={16} />}
              className={twMerge(
                "flex-1 bg-red-500 text-white text-sm",
                "hover:bg-red-600"
              )}
              onClick={unmountCounterModal}
            >
              Hide Modal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
