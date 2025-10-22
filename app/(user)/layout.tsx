import "@/app/globals.css";
import Navbar from "@/app/Components/Navbar";

type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  return (
    <html>
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
