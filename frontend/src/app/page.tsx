import SDGCard from "@/components/SDGCard";
import Revenue from "@/components/Revenue";

const dummy = [
  { goalNo: 1, title: "Tanpa Kemiskinan", progress: 62, metric: "Kemiskinan: 8.3%" },
  { goalNo: 2, title: "Tanpa Kelaparan", progress: 55, metric: "Stunting: 18%" },
  { goalNo: 3, title: "Kesehatan yang Baik", progress: 71, metric: "UHH: 73.5 th" },
  { goalNo: 4, title: "Pendidikan Berkualitas", progress: 68, metric: "APS SMA: 89%" },
  { goalNo: 5, title: "Kesetaraan Gender", progress: 60, metric: "Partisipasi Kerja: 54%" },
  { goalNo: 6, title: "Air Bersih & Sanitasi", progress: 64, metric: "Akses: 84%" },
  { goalNo: 7, title: "Energi Bersih", progress: 52, metric: "RE Share: 14%" },
  { goalNo: 8, title: "Pekerjaan Layak", progress: 66, metric: "TPT: 5.2%" },
  { goalNo: 9, title: "Industri, Inovasi", progress: 58, metric: "IKM: 71" },
  { goalNo: 10, title: "Berkurangnya Kesenjangan", progress: 58, metric: "Gini: 0.38" },
  { goalNo: 11, title: "Kota & Pemukiman", progress: 63, metric: "Layak Huni: 76%" },
  { goalNo: 12, title: "Konsumsi Bertanggung Jawab", progress: 50, metric: "Daur Ulang: 21%" },
  { goalNo: 13, title: "Aksi Iklim", progress: 57, metric: "Emisi/intensitas: ↓" },
  { goalNo: 14, title: "Ekosistem Lautan", progress: 49, metric: "Kawasan Lindung: 6%" },
  { goalNo: 15, title: "Ekosistem Daratan", progress: 61, metric: "Hutan: 50%" },
  { goalNo: 16, title: "Institusi Kuat", progress: 65, metric: "SPBE: B+" },
  { goalNo: 17, title: "Kemitraan", progress: 70, metric: "Kolaborasi: 12 MoU" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="glass-2 p-4 rounded-2xl sticky top-0 z-10">
        <h1 className="text-xl font-semibold drop-shadow-md">Ringkasan SDGs</h1>
        <p className="text-sm text-neutral-200/80">Pilih wilayah & indikator untuk melihat perkembangan.</p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummy.map(d => <SDGCard key={d.goalNo} {...d} />)}
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        <div className="glass-4 p-4 rounded-2xl">
          <h2 className="font-semibold mb-2 drop-shadow">Tren Indikator Kesehatan</h2>
          <Revenue />
        </div>
        <div className="glass-4 p-4 rounded-2xl">
          <h2 className="font-semibold mb-2 drop-shadow">Catatan Kebijakan</h2>
          <ul className="list-disc pl-5 text-sm text-neutral-200/90">
            <li>Program prioritas 2025 fokus stunting & air bersih.</li>
            <li>Integrasi data puskesmas dan BPS untuk pemutakhiran triwulanan.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
