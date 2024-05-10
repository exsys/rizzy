import DexScreener from "@/components/icons/dexscreener";
import Jupiter from "@/components/icons/jupiter";
import Telegram from "@/components/icons/telegram";
import TwitterX from "@/components/icons/twitterx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col justify-center items-center relative gap-10 sm:gap-6">
        <div className="hidden sm:flex absolute top-16 justify-between items-center w-full px-10 xl:px-20">
          <div className="flex items-center gap-10">
            <Link href={""} target="_blank"
              className="cursor-pointer">
              <TwitterX className="w-16 h-16 fill-white hover:fill-gray-400 transition-all" />
            </Link>
            <Link href={""} target="_blank"
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

        <div className="-mt-20 flex justify-center">
          <video controls autoPlay loop>
            <source src="/videos/rizzy.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="text-5xl font-semibold">
          $rizzy
        </h1>

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
