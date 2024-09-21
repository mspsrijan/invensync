import { navItems } from "@/navData/nav-items";
import Link from "next/link";
import { DashboardNav } from "./dashboard-nav";

export function Sidebar() {
  return (
    <aside className="relative hidden h-screen flex-none border-r bg-card transition-all duration-500 md:block w-64">
      <div className="hidden p-5 pt-10 lg:block">
        <Link href="/dashboard" className="flex">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <span className="ml-2 text-lg font-semibold">InvenSync</span>
          </div>
        </Link>
      </div>

      <div className="py-2">
        <DashboardNav items={navItems} />
      </div>
    </aside>
  );
}
