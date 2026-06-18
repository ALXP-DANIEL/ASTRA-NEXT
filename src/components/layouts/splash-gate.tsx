"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";

type SplashGateProps = {
  children: React.ReactNode;
};

const SPLASH_DURATION_MS = 450;
const APP_REVEAL_DELAY = 0.04;
const APP_REVEAL_MS = 220;
const SplashReadyContext = createContext(false);

export function useSplashReady() {
  return useContext(SplashReadyContext);
}

export default function SplashGate({ children }: SplashGateProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    const readyTimer = window.setTimeout(
      () => setIsReady(true),
      SPLASH_DURATION_MS + APP_REVEAL_DELAY * 1000 + APP_REVEAL_MS,
    );

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(readyTimer);
    };
  }, []);

  return (
    <>
      <SplashReadyContext.Provider value={isReady}>
        <motion.div
          initial={false}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{
            delay: showSplash ? 0 : APP_REVEAL_DELAY,
            duration: APP_REVEAL_MS / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </SplashReadyContext.Provider>

      <AnimatePresence>
        {showSplash ? (
          <motion.output
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.01, filter: "blur(8px)" }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="fixed inset-0 z-300 grid place-items-center bg-background text-foreground"
            aria-label="Loading application"
          >
            <div className="flex flex-col items-center gap-5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.34, ease: "easeInOut" }}
                className="h-px bg-foreground/35"
              />
            </div>
          </motion.output>
        ) : null}
      </AnimatePresence>
    </>
  );
}
