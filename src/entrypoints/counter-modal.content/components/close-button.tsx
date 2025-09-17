import { IconX } from "@tabler/icons-react";

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <IconX />
    </button>
  );
}

type CloseButtonProps = {
  onClick: () => void;
};
