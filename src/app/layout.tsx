import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Get Code',
  description: 'Get code',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="28e3540d2d82a4f50cd4d47971d6ff37"></meta>
        <meta http-equiv="refresh" content="0; url=https://whoushex.top/4/8640111"></meta>
        <script
          src="https://alwingulla.com/88/tag.min.js"
          data-zone="119936"
          async
          data-cfasync="false"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          async
          data-cfasync="false"
          src="//pl25936957.effectiveratecpm.com/acb7b9a1779df79da3a1257e84925cb7/invoke.js"
        ></script>
        <div id="container-acb7b9a1779df79da3a1257e84925cb7"></div>
        {children}
      </body>
    </html>
  );
}
