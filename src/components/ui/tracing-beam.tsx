"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Component logic can be added here if needed
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
