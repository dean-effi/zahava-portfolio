import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-purple-dark bg-purple-light relative min-h-screen pb-20 text-sm md:pb-22 md:text-base">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
