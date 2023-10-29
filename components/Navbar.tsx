import React from "react";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-black">
      {/* Navabr content */}
      <div className=" py-4 items-center justify-center flex flex-row">
        <div className="text-white w-2/3 text-2xl font-bold">
          <Link href="/">VeriSage</Link>{" "}
        </div>
        {/* <Button
        onClick={retrieveWalletAddress}
        className="bg-blue-400 hover:bg-white hover:text-black px-8 text-lg rounded-2xl"
      >
        {metamaskAccountAddress === ""
          ? "Connect"
          : `Connected to: ${metamaskAccountAddress.substring(0, 8)}...`}{" "}
      </Button> */}
        <ConnectButton />
      </div>
    </div>
  );
}

export default Navbar;
