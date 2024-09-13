export const init = () => {
    console.log('gtg func hitting')
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`;
    document.body.appendChild(script);
  };
  
export const pageview = (url) => {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  };
  