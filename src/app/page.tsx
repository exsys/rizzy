"use client";
import { useEffect, useRef } from "react";
import DexScreener from "@/components/icons/dexscreener";
import Jupiter from "@/components/icons/jupiter";
import Telegram from "@/components/icons/telegram";
import TwitterX from "@/components/icons/twitterx";
import Link from "next/link";
import styles from "./home.module.sass";

export default function Home() {
  const vidRef: any = useRef();

  useEffect(() => {
    if (!vidRef) return;
    vidRef.current.muted = false;
  }, [vidRef]);

  return (
    <main className="h-full text-white">
      <div className="h-full flex flex-col justify-center items-center relative gap-10 sm:gap-6">
        <div className="hidden sm:flex absolute top-16 justify-between items-center w-full px-10 xl:px-20">
          <div className="flex items-center gap-10">
            <Link href={"https://twitter.com/rizzycto_sol"} target="_blank"
              className="cursor-pointer">
              <TwitterX className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
            </Link>
            <Link href={"https://t.me/RizzCatCTOPortal"} target="_blank"
              className="cursor-pointer">
              <Telegram className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <Link href={"https://dexscreener.com/solana/et7nj5v6d8vakztxutskczjm6e7fy38gko9qyyawgxju"}
              className="cursor-pointer" target="_blank">
              <DexScreener className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
            </Link>
            <Link href={"https://jup.ag/swap/SOL-D239BxTpnwTsbigZGKiD7xw444D7FcLtjBJdf94pVhjF"} target="_blank"
              className="cursor-pointer">
              <Jupiter className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
            </Link>
          </div>
        </div>

        <div className="-mt-[80px] flex justify-center">
          <video controls autoPlay loop muted ref={vidRef}>
            <source src="/videos/rizzy.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`${styles["glitch-wrapper"]} -mt-8`}>
          <h1 className={`text-5xl font-semibold ${styles["glitch"]}`}>
            $rizzy
          </h1>
        </div>

        <nav className="flex gap-8 items-center sm:hidden">
          <Link href={""} target="_blank"
            className="cursor-pointer">
            <TwitterX className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
          </Link>
          <Link href={""} target="_blank"
            className="cursor-pointer">
            <Telegram className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
          </Link>

          <Link href={"https://dexscreener.com/solana/et7nj5v6d8vakztxutskczjm6e7fy38gko9qyyawgxju"}
            className="cursor-pointer" target="_blank">
            <DexScreener className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
          </Link>
          <Link href={"https://jup.ag/swap/SOL-D239BxTpnwTsbigZGKiD7xw444D7FcLtjBJdf94pVhjF"} target="_blank"
            className="cursor-pointer">
            <Jupiter className="w-12 h-12 fill-white hover:fill-gray-400 transition-all" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
