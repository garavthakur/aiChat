import type { Metadata } from "next";
import Script from "next/script";
import './css/style.css';



export const metadata: Metadata = {
  title: "ai bot",
  description: "ai bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
    
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
       
        <link href="css/style.css" rel="stylesheet" />
        <title>Document</title>
        <link rel="stylesheet" href="./css/style.css" />
      </head>
      <body>
        {children}
        <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>
        <Script src="/js/script.js" strategy="lazyOnload" />

  
      </body>
      
    
    </html>
  );
}
