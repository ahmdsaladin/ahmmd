/**
 * Critical CSS optimization for above-the-fold content
 * Extracts essential styles for initial render performance
 */
(function() {
  'use strict';

  // Critical CSS for immediate render (extracted from main.css)
  const criticalCSS = `
    /* Reset & Base */
    *,::after,::before{box-sizing:border-box}
    body,html{margin:0;padding:0;scroll-behavior:smooth}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.6;color:#333}
    
    /* Header Critical Styles */
    .tp-header-area{position:fixed;top:0;left:0;right:0;z-index:999;transition:all .3s ease}
    .tp-header-logo img{max-height:40px;width:auto}
    .tp-transparent{background:transparent}
    .container{max-width:1200px;margin:0 auto;padding:0 15px}
    .row{display:flex;flex-wrap:wrap;margin:0 -15px}
    .col-xl-2,.col-xl-8{padding:0 15px}
    .col-xl-2{flex:0 0 16.666667%}
    .col-xl-8{flex:0 0 66.666667%}
    .align-items-center{align-items:center}
    .justify-content-between{justify-content:space-between}
    .d-flex{display:flex}
    .d-none{display:none}
    @media (min-width:1200px){.d-xl-block{display:block!important}}
    
    /* Navigation Critical */
    .tp-main-menu-content ul{list-style:none;margin:0;padding:0;display:flex}
    .tp-main-menu-content li{margin:0 20px}
    .tp-main-menu-content a{text-decoration:none;color:#fff;font-weight:500;transition:color .3s ease}
    
    /* Loading Animation */
    .page-loader{position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999;display:flex;align-items:center;justify-content:center}
    .loader-spinner{width:50px;height:50px;border:3px solid #333;border-top:3px solid #fff;border-radius:50%;animation:spin 1s linear infinite}
    @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
  `;

  // Function to inject critical CSS
  function injectCriticalCSS() {
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.id = 'critical-css';
    document.head.insertBefore(style, document.head.firstChild);
  }

  // Function to async load non-critical CSS
  function loadNonCriticalCSS() {
    const nonCriticalStyles = [
      'assets/css/animate.css',
      'assets/css/swiper-bundle.css',
      'assets/css/slick.css',
      'assets/css/magnific-popup.css',
      'assets/css/spacing.css',
      'assets/css/custom-animation.css'
    ];

    nonCriticalStyles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = function() {
        this.media = 'all';
      };
      document.head.appendChild(link);
    });
  }

  // Function to preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      { href: 'assets/css/bootstrap.css', as: 'style' },
      { href: 'assets/css/main.css', as: 'style' },
      { href: 'assets/js/main.js', as: 'script' },
      { href: 'assets/img/logo/logo.png', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'style') {
        link.onload = function() {
          const styleLink = document.createElement('link');
          styleLink.rel = 'stylesheet';
          styleLink.href = this.href;
          document.head.appendChild(styleLink);
        };
      }
      document.head.appendChild(link);
    });
  }

  // Initialize critical CSS optimization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectCriticalCSS();
      preloadCriticalResources();
      
      // Load non-critical CSS after initial render
      requestAnimationFrame(() => {
        setTimeout(loadNonCriticalCSS, 100);
      });
    });
  } else {
    injectCriticalCSS();
    preloadCriticalResources();
    loadNonCriticalCSS();
  }

})();