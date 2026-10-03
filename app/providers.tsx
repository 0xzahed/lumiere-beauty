"use client";
import { StoreProvider } from "@/lib/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Overlays } from "@/components/Overlays";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isAccount = pathname?.startsWith("/account");
  return (
    <StoreProvider>
      {!isAdmin && <Header />}
      <main className="min-h-[60vh]">{children}</main>
      {!isAdmin && !isAccount && <Footer />}
      {isAccount && <Footer />}
      <Overlays />
    </StoreProvider>
  );
}
