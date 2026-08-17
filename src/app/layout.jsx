import '../index.css'

export const metadata = {
  title: 'Cronos Auto',
  description: 'Automatização de folhas de ponto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="app-root">{children}</div>
      </body>
    </html>
  )
}
