"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Icons } from "@/navData/icons";
import { LayoutDashboardIcon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardNav({ items, isMobileNav, setOpen }) {
  const pathname = usePathname();

  if (!items?.length) {
    return null;
  }

  const handleLinkClick = () => {
    if (isMobileNav && setOpen) {
      setOpen(false);
    }
  };

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <nav>
      <Link
        href="/dashboard"
        onClick={handleLinkClick}
        className="px-5 py-3 flex justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline"
      >
        <LayoutDashboardIcon className="mr-2 h-5 w-5" />
        <span className="truncate flex-grow text-left">Dashboard</span>
      </Link>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger className="px-5 py-3 justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline focus:bg-accent focus:text-accent-foreground outline-none [&[data-state=open]_.icon]:rotate-0">
                <Icon className="icon mr-2 h-5 w-5" />
                <span className="truncate flex-grow text-left">
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {item.subitems && item.subitems.length > 0 ? (
                  <div className="ml-4 space-y-1">
                    {item.subitems.map((subitem, subIndex) => {
                      const SubIcon = Icons[subitem.icon || "arrowRight"];
                      return (
                        <Link
                          key={subIndex}
                          href={subitem.disabled ? "/" : subitem.href}
                          className={cn(
                            "flex items-center gap-2 px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            subitem.disabled && "cursor-not-allowed opacity-80",
                            isActive(subitem.href) &&
                              "bg-accent text-accent-foreground"
                          )}
                          onClick={handleLinkClick}
                        >
                          <SubIcon className="h-4 w-4" /> {subitem.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Link
        href="/dashboard/settings"
        className={cn(
          "px-5 py-3 flex justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline focus:bg-accent focus:text-accent-foreground",
          isActive("/dashboard/settings") && "bg-accent text-accent-foreground"
        )}
        onClick={handleLinkClick}
      >
        <Settings className="mr-2 h-5 w-5" />
        <span className="truncate flex-grow text-left">Settings</span>
      </Link>
    </nav>
  );
}
