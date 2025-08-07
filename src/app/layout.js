import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@/contexts/UserContext';


const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});

export const metadata = {
    title: "Cozy Loops",
    description: "Aplicação de revisão de front-end",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                sizes: "any",
            }
        ],
        shortcut: "/icons/favicon.ico",
        apple: "/icons/favicon.ico",
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className={inter.className}>
                <UserProvider>{children}</UserProvider>
            </body>
        </html>
    );
}