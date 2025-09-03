"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { BiScatterChart } from "react-icons/bi";
import { RiRobot2Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

import { FiUploadCloud } from "react-icons/fi";

const items = [
  { href: "/", label: "Dashboard", icon: <AiOutlineDashboard /> },
  { href: "/prediksi", label: "Prediksi", icon: <GiNetworkBars /> },
  { href: "/clustering", label: "Clustering", icon: <BiScatterChart /> },
  { href: "/chatbot", label: "Chatbot LLM", icon: <RiRobot2Line /> },
  { href: "/tentang", label: "Tentang", icon: <BsInfoCircle /> },
  { href: "/upload", label: "Upload CSV", icon: <FiUploadCloud /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="glass-2 h-screen w-64 p-4 sticky top-0 hidden md:flex flex-col rounded-2xl">
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <Image src="/logo-pemda.png" alt="Logo Pemda" width={36} height={36} />
        <div className="text-sm">
          <p className="font-semibold">Dashboard SDGs</p>
          <p className="text-neutral-300">Pemerintah Daerah Kecamatan Wates</p>
        </div>
      </div>
      <nav className="mt-4 flex-1 space-y-1">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                active ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <span className="text-lg opacity-80">{it.icon}</span>
              <span className="text-sm">{it.label}</span>
            </Link>
          );
        })}
      </nav>
      <p className="text-[11px] text-neutral-400">© {new Date().getFullYear()} Pemerintah Daerah Kecamatan Wates</p>
    </aside>
  );
}
