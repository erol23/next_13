import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Learning NextJS",
  description: "Web development NextJS",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, cs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
