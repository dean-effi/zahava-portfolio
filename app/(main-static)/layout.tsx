import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-purple-dark bg-purple-light">
      <Nav />
      <h1>AAAAAAAAAAA</h1>
      {children}

      <Footer />
    </div>
  );
}
