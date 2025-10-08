"use client";
import React, { useEffect } from "react";
import MorvaKidsBanner from "@/components/morva-kids/MorvaKidsBanner";

export default function MorvaKidsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <MorvaKidsBanner />
    </>
  );
}
