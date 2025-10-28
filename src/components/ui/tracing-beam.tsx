"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);



  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-800" />
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
};
