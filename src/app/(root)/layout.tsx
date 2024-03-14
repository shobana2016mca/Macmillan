import { Footer, Navbar } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
}
