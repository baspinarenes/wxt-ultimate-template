import { Link, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";

export const NavigationItem = ({ to, children }: NavigationItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={twMerge(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
        "border border-gray-200 dark:border-gray-700",
        isActive
          ? "bg-blue-500 text-white border-blue-500 shadow-md"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
      )}
    >
      {children}
    </Link>
  );
};

type NavigationItemProps = {
  to: string;
  children: React.ReactNode;
};
