import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn("mx-auto max-w-3xl px-6 py-24")}>
      <h1 className="text-3xl font-bold">Клининг — уборка квартир и офисов</h1>
      <p className="mt-4 text-lg">Рассчитайте стоимость уборки за минуту и оставьте заявку.</p>
    </main>
  );
}
