import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      <meta property="og:image" content="https://planmytax.ai/asset/og/planmytax.png" />
      <meta property="twitter:image" content="https://planmytax.ai/asset/og/planmytax.png" />
      <link rel="shortcut icon" href="/icons/tax.png" type="image/png" />
      <title>PlanmytaxAI </title>
      <meta property="og:title" content="PlanmytaxAI" />
      <meta name="description" content="PlanmytaxAI is the one stop platform for solving your queries related to DIY tax filing" />
      <Head />
      <body>
        <Main />
        <NextScript />

        
      </body>
    </Html>
  );
}
