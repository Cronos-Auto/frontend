import type { Metadata } from "next";
import { Provider } from "../components/provider";
import { basePath } from "../lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cronos Auto",
  description: "Cronos Auto",
  icons: { icon: `${basePath}/favicon.ico` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
