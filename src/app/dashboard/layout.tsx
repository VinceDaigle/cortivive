import { Sidebar } from "@/components/dashboard/sidebar";
import { Providers } from "@/components/providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="min-h-screen bg-cream">
        <Sidebar />
        <main className="md:ml-64 pb-20 md:pb-0">
          <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
        </main>
      </div>
    </Providers>
  );
}
