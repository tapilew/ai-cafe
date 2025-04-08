"use client";

import { useReadContract } from "wagmi";

export function ReadContract() {
  const { data: balance } = useReadContract({
    functionName: "balanceOf",
    args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
  });

  return <div>Balance: {balance?.toString()}</div>;
}
