import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}