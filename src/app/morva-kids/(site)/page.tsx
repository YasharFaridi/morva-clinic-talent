"use client";
import React, { useEffect } from "react";
import KidsBanner from "@/app/morva-kids/components/KidsBanner";
import KidsPackages from "../components/KidsPackages";

export default function MorvaKidsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <KidsBanner />
      <KidsPackages />
    </>
  );
}
