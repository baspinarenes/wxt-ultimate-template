import { twMerge } from "tailwind-merge";

export function Button({ onClick, icon, className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "border border-gray-300 dark:border-none rounded-md px-4 py-2 gap-2 cursor-pointer flex items-center justify-center transition-all duration-200",
        "hover:bg-gray-100 focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

type ButtonProps = {
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};
