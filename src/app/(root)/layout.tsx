import { Footer, Header } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-full">{children}</main>
      <Footer />
    </>
  );
}
