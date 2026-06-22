"use client";

import type { Icon } from "@phosphor-icons/react";
import { DotsThreeOutline } from "@phosphor-icons/react/dist/ssr/DotsThreeOutline";
import { House } from "@phosphor-icons/react/dist/ssr/House";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { SquaresFour } from "@phosphor-icons/react/dist/ssr/SquaresFour";
import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/theme-toggle";

const SWIPE_DISTANCE = 36;
const SWIPE_VELOCITY = 450;

const ITEMS: {
  id: string;
  href: string;
  label: string;
  Icon: Icon;
}[] = [
  { id: "home", href: "/", label: "Home", Icon: House },
  { id: "browse", href: "/browse", label: "Browse", Icon: SquaresFour },
  { id: "search", href: "/search", label: "Search", Icon: MagnifyingGlass },
  { id: "more", href: "/more", label: "More", Icon: DotsThreeOutline },
];

function NavLinks({ layoutScope }: { layoutScope: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeIndex = ITEMS.findIndex(({ href }) => href === pathname);

  function handlePanEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) {
    const movedLeft =
      info.offset.x <= -SWIPE_DISTANCE || info.velocity.x <= -SWIPE_VELOCITY;
    const movedRight =
      info.offset.x >= SWIPE_DISTANCE || info.velocity.x >= SWIPE_VELOCITY;

    if (movedLeft && activeIndex < ITEMS.length - 1) {
      router.push(ITEMS[activeIndex + 1].href);
    } else if (movedRight && activeIndex > 0) {
      router.push(ITEMS[activeIndex - 1].href);
    }
  }

  return (
    <motion.nav
      onPanEnd={handlePanEnd}
      className="glass relative z-20 flex touch-pan-y items-center justify-between gap-1 rounded-full p-1.5 text-foreground lg:justify-start lg:gap-0.5 lg:p-1 lg:shadow-none"
    >
      {ITEMS.map(({ id, href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={id}
            href={href}
            className={cn(
              "relative flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2 transition-colors duration-500 ease-out lg:flex-initial lg:px-3 lg:py-1.5",
              isActive ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`${layoutScope}-active`}
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--glass-active)" }}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <Icon
              size={18}
              weight={isActive ? "fill" : "regular"}
              className="relative z-10 lg:size-4"
            />
            <span
              className="relative z-10 overflow-hidden whitespace-nowrap text-[12px] font-semibold lg:text-[11px]"
              style={{
                maxWidth: isActive ? 80 : 0,
                opacity: isActive ? 1 : 0,
                transition: "max-width 0.32s ease, opacity 0.25s ease",
              }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
}

export function Nav() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-end px-4 pt-[max(0.75rem,env(safe-area-inset-top))] lg:hidden">
        <ThemeToggle />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <NavLinks layoutScope="mobile-nav" />
      </div>

      <div className="fixed inset-x-0 top-0 z-50 hidden items-center justify-between px-8 py-4 lg:flex xl:px-12">
        <div className="glass flex items-center gap-2.5 rounded-full px-3.5 py-2 text-foreground">
          <Sparkle weight="fill" size={20} />
          <span className="text-base font-bold tracking-tight">ASTRA-NEXT</span>
        </div>

        <div className="flex items-center gap-2">
          <NavLinks layoutScope="desktop-nav" />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
