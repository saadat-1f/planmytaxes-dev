export const init = () => {
    // console.log('gtm hitting')
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GTAG);
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM}`;
    document.body.appendChild(script);
  };
  
  export const pageview = (url) => {
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('config', process.env.NEXT_PUBLIC_GTAG, {
      page_path: url,
    });
  };
  