"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

const NavBar = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  // Auto-scroll when a nav item is clicked
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      className="sticky top-0 left-0 h-screen shadow-lg backdrop-blur-3xl border-r-2 border-white/10 w-16 flex flex-col z-50 justify-center gap-y-12 p-6"
    >
      {navItems.map(({ name, link }, index) => {
        const sectionId = link.substring(1);
        const isActive = activeSection === sectionId;

        return (
          <button
            key={`nav-item-${index}`}
            onClick={() => handleScroll(sectionId)}
            className={cn(
              "flex items-center justify-center transition-all duration-150 ease-in-out h-[80px]",
              isActive && "scale-110"
            )}
          >
            <span
              className={cn(
                "text-sm font-extrabold cursor-pointer px-3 py-2 rounded-md transform rotate-90",
                isActive
                  ? "bg-slate-900/[0.8] text-white font-bold border border-white"
                  : "opacity-50 hover:opacity-100"
              )}
            >
              {name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
