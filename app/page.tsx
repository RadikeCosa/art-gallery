import Header from "@/components/layout/Header";
import Gallery from "@/components/gallery/Gallery";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}
