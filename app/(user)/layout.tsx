import "@/app/globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "../Components/Footer";

type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className=" flex-1 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
