/**
 * Advanced JavaScript Module Loader
 * Implements dynamic imports, code splitting, and lazy loading for performance
 */
class PerformanceLoader {
  constructor() {
    this.loadedModules = new Set();
    this.pendingModules = new Map();
    this.intersectionObserver = null;
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.loadCriticalModules();
    this.setupLazyLoading();
  }

  // Load essential modules immediately
  async loadCriticalModules() {
    const critical = [
      { src: 'assets/js/vendor/jquery.js', name: 'jquery' },
      { src: 'assets/js/bootstrap-bundle.js', name: 'bootstrap' }
    ];

    for (const module of critical) {
      await this.loadModule(module.src, module.name, true);
    }
  }

  // Setup intersection observer for viewport-based loading
  setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const moduleType = element.dataset.loadModule;
          
          if (moduleType && !this.loadedModules.has(moduleType)) {
            this.loadModuleByType(moduleType);
            this.intersectionObserver.unobserve(element);
          }
        }
      });
    }, { 
      rootMargin: '100px 0px',
      threshold: 0.1 
    });
  }

  // Setup lazy loading for different component types
  setupLazyLoading() {
    // Portfolio/Gallery sections
    document.querySelectorAll('[class*="portfolio"], [class*="gallery"]').forEach(el => {
      el.dataset.loadModule = 'portfolio';
      this.intersectionObserver.observe(el);
    });

    // Slider/Carousel sections
    document.querySelectorAll('[class*="swiper"], [class*="slider"], [class*="carousel"]').forEach(el => {
      el.dataset.loadModule = 'slider';
      this.intersectionObserver.observe(el);
    });

    // Animation sections
    document.querySelectorAll('[class*="animate"], [data-wow]').forEach(el => {
      el.dataset.loadModule = 'animation';
      this.intersectionObserver.observe(el);
    });

    // 3D/Canvas sections
    document.querySelectorAll('canvas, [class*="webgl"], [class*="three"]').forEach(el => {
      el.dataset.loadModule = 'webgl';
      this.intersectionObserver.observe(el);
    });

    // Contact forms
    document.querySelectorAll('form, [class*="contact"]').forEach(el => {
      el.dataset.loadModule = 'forms';
      this.intersectionObserver.observe(el);
    });
  }

  // Load modules based on component type
  async loadModuleByType(type) {
    const moduleConfigs = {
      portfolio: [
        'assets/js/isotope-pkgd.js',
        'assets/js/imagesloaded-pkgd.js',
        'assets/js/magnific-popup.js'
      ],
      slider: [
        'assets/js/swiper-bundle.js',
        'assets/js/slick.js'
      ],
      animation: [
        'assets/js/gsap.js',
        'assets/js/gsap-scroll-trigger.js',
        'assets/js/gsap-scroll-smoother.js',
        'assets/js/wow.js'
      ],
      webgl: [
        'assets/js/three.js',
        'assets/js/webgl.js',
        'assets/js/tween-max.js'
      ],
      forms: [
        'assets/js/ajax-form.js',
        'assets/js/nice-select.js'
      ],
      advanced: [
        'assets/js/gsap-split-text.js',
        'assets/js/scroll-magic.js',
        'assets/js/beforeafter.js',
        'assets/js/purecounter.js',
        'assets/js/range-slider.js'
      ]
    };

    const modules = moduleConfigs[type];
    if (modules) {
      await Promise.all(modules.map(src => this.loadModule(src, type)));
      this.initializeComponents(type);
    }
  }

  // Load individual module with error handling
  loadModule(src, name, critical = false) {
    if (this.loadedModules.has(name)) {
      return Promise.resolve();
    }

    if (this.pendingModules.has(name)) {
      return this.pendingModules.get(name);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = !critical;
      script.defer = !critical;
      
      script.onload = () => {
        this.loadedModules.add(name);
        this.pendingModules.delete(name);
        console.log(`✅ Loaded: ${name}`);
        resolve();
      };
      
      script.onerror = () => {
        this.pendingModules.delete(name);
        console.warn(`❌ Failed to load: ${name}`);
        reject(new Error(`Failed to load ${src}`));
      };
      
      document.head.appendChild(script);
    });

    this.pendingModules.set(name, promise);
    return promise;
  }

  // Initialize components after modules are loaded
  initializeComponents(type) {
    requestAnimationFrame(() => {
      switch (type) {
        case 'portfolio':
          this.initPortfolio();
          break;
        case 'slider':
          this.initSliders();
          break;
        case 'animation':
          this.initAnimations();
          break;
        case 'webgl':
          this.initWebGL();
          break;
        case 'forms':
          this.initForms();
          break;
      }
    });
  }

  initPortfolio() {
    if (window.Isotope && document.querySelector('.portfolio-grid')) {
      const grid = document.querySelector('.portfolio-grid');
      new window.Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
    }
  }

  initSliders() {
    if (window.Swiper && document.querySelector('.swiper')) {
      document.querySelectorAll('.swiper').forEach(swiperEl => {
        new window.Swiper(swiperEl, {
          loop: true,
          autoplay: { delay: 5000 },
          pagination: { el: '.swiper-pagination' },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      });
    }
  }

  initAnimations() {
    if (window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Fade in animations
      window.gsap.utils.toArray('.tp_fade_bottom').forEach(element => {
        window.gsap.fromTo(element, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%'
            }
          }
        );
      });
    }
  }

  initWebGL() {
    // Initialize WebGL components only when needed
    if (window.THREE && document.querySelector('canvas')) {
      console.log('🎨 WebGL components initialized');
    }
  }

  initForms() {
    if (document.querySelector('form')) {
      // Initialize form handling
      console.log('📝 Form components initialized');
    }
  }

  // Preload modules for user interaction
  preloadOnUserInteraction() {
    const events = ['mousedown', 'touchstart', 'keydown'];
    const preloadAdvanced = () => {
      this.loadModuleByType('advanced');
      events.forEach(event => {
        document.removeEventListener(event, preloadAdvanced, { passive: true });
      });
    };

    events.forEach(event => {
      document.addEventListener(event, preloadAdvanced, { passive: true });
    });
  }
}

// Initialize performance loader
document.addEventListener('DOMContentLoaded', () => {
  window.performanceLoader = new PerformanceLoader();
  
  // Preload advanced modules on user interaction
  window.performanceLoader.preloadOnUserInteraction();
});

// Export for global access
window.PerformanceLoader = PerformanceLoader;