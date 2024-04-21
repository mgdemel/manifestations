import { CardView } from "@/containers/CardViews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardView isToggle={false} />
    </main>
  );
}
