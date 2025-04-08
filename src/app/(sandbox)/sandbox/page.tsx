import { ConnectWallet } from "~/components/connect-wallet";
import { ReadContract } from "~/components/read-contract";

export default function SandboxPage() {
  return (
    <main className="flex flex-col items-center">
      <ConnectWallet />
      <ReadContract />
    </main>
  );
}
