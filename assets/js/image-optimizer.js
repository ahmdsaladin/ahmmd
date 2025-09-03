/**
 * Advanced Image Optimization System
 * Implements lazy loading, WebP support, and responsive images
 */
class ImageOptimizer {
  constructor() {
    this.lazyImages = [];
    this.imageObserver = null;
    this.supportsWebP = false;
    this.init();
  }

  async init() {
    await this.detectWebPSupport();
    this.setupLazyLoading();
    this.optimizeExistingImages();
  }

  // Detect WebP support
  async detectWebPSupport() {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        this.supportsWebP = (webP.height === 2);
        console.log(`🖼️ WebP Support: ${this.supportsWebP ? 'Yes' : 'No'}`);
        resolve(this.supportsWebP);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  // Setup intersection observer for lazy loading
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            this.imageObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      // Observe all lazy images
      this.observeImages();
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadAllImages();
    }
  }

  // Find and observe images for lazy loading
  observeImages() {
    const images = document.querySelectorAll('img[data-src], img[loading=\"lazy\"]');
    
    images.forEach(img => {
      // Add loading placeholder
      this.addLoadingPlaceholder(img);
      
      // Add to observer
      this.imageObserver.observe(img);
      this.lazyImages.push(img);
    });

    console.log(`🔍 Found ${images.length} images for lazy loading`);
  }

  // Add loading placeholder to images
  addLoadingPlaceholder(img) {
    if (!img.src && !img.dataset.src) return;

    // Create placeholder
    const placeholder = this.createPlaceholder(img);
    img.style.background = `url(${placeholder}) center/cover no-repeat`;
    img.style.transition = 'opacity 0.3s ease';
  }

  // Create base64 placeholder
  createPlaceholder(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 10;
    canvas.height = 10;
    
    // Create gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, 10, 10);
    gradient.addColorStop(0, '#f0f0f0');
    gradient.addColorStop(1, '#e0e0e0');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 10, 10);
    
    return canvas.toDataURL('image/jpeg', 0.1);
  }

  // Load individual image
  async loadImage(img) {
    return new Promise((resolve) => {
      const imageUrl = img.dataset.src || img.src;
      
      if (!imageUrl) {
        resolve();
        return;
      }

      // Get optimized URL
      const optimizedUrl = this.getOptimizedImageUrl(imageUrl);
      
      // Create new image for preloading
      const newImg = new Image();
      
      newImg.onload = () => {
        // Apply loaded image
        img.src = optimizedUrl;
        img.classList.add('loaded');
        
        // Fade in effect
        img.style.opacity = '0';
        requestAnimationFrame(() => {
          img.style.opacity = '1';
        });
        
        // Remove data-src
        img.removeAttribute('data-src');
        
        resolve();
      };
      
      newImg.onerror = () => {
        // Fallback to original
        img.src = imageUrl;
        img.classList.add('error');
        resolve();
      };
      
      newImg.src = optimizedUrl;
    });
  }

  // Get optimized image URL
  getOptimizedImageUrl(originalUrl) {
    if (!originalUrl) return originalUrl;
    
    // Check if we should use WebP
    if (this.supportsWebP && this.canConvertToWebP(originalUrl)) {
      return this.convertToWebP(originalUrl);
    }
    
    return originalUrl;
  }

  // Check if image can be converted to WebP
  canConvertToWebP(url) {
    const webpCompatible = /\.(jpg|jpeg|png)$/i.test(url);
    const isExternal = !url.startsWith('/') && !url.includes(window.location.origin);
    
    return webpCompatible && !isExternal;
  }

  // Convert image URL to WebP
  convertToWebP(url) {
    // Simple conversion - replace extension
    return url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }

  // Optimize existing images on page
  optimizeExistingImages() {
    const existingImages = document.querySelectorAll('img:not([data-src]):not([loading=\"lazy\"])');
    
    existingImages.forEach(img => {
      if (img.complete && img.naturalHeight !== 0) {
        // Image already loaded
        this.enhanceLoadedImage(img);
      } else {
        // Image still loading
        img.addEventListener('load', () => this.enhanceLoadedImage(img));
      }
    });
  }

  // Enhance already loaded images
  enhanceLoadedImage(img) {
    // Add responsive behavior
    this.makeResponsive(img);
    
    // Add fade-in animation
    img.classList.add('enhanced');
  }

  // Make images responsive
  makeResponsive(img) {
    if (img.closest('.responsive-image')) return; // Already responsive
    
    // Wrap in responsive container
    const wrapper = document.createElement('div');
    wrapper.className = 'responsive-image';
    wrapper.style.cssText = `
      position: relative;
      overflow: hidden;
      display: inline-block;
      max-width: 100%;
    `;
    
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    
    // Make image responsive
    img.style.cssText += `
      max-width: 100%;
      height: auto;
      display: block;
    `;
  }

  // Load all images (fallback)
  loadAllImages() {
    this.lazyImages.forEach(img => this.loadImage(img));
  }

  // Preload critical images
  preloadCriticalImages() {
    const criticalImages = [
      'assets/img/logo/logo.png',
      'assets/img/logo/logo-white.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Add loading states CSS
  addLoadingStyles() {
    const style = document.createElement('style');
    style.textContent = `
      img[data-src], img[loading="lazy"] {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      img.loaded {
        opacity: 1;
      }
      
      img.error {
        opacity: 0.5;
        filter: grayscale(100%);
      }
      
      .responsive-image {
        background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
        background-size: 20px 20px;
        animation: loading-shimmer 1.5s infinite ease-in-out;
      }
      
      @keyframes loading-shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: 200px 0; }
      }
      
      .enhanced {
        animation: fadeInImage 0.5s ease-in-out;
      }
      
      @keyframes fadeInImage {
        from { opacity: 0; transform: scale(1.05); }
        to { opacity: 1; transform: scale(1); }
      }
    `;
    
    document.head.appendChild(style);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.imageOptimizer = new ImageOptimizer();
  window.imageOptimizer.addLoadingStyles();
  window.imageOptimizer.preloadCriticalImages();
});

// Update existing images to use lazy loading
document.addEventListener('DOMContentLoaded', () => {
  // Convert regular images to lazy loading (except critical ones)
  const images = document.querySelectorAll('img:not([data-critical])');
  
  images.forEach((img, index) => {
    // Skip first few images (above the fold)
    if (index < 3) return;
    
    // Convert to lazy loading
    if (img.src && !img.dataset.src) {
      img.dataset.src = img.src;
      img.src = '';
      img.loading = 'lazy';
    }
  });
});

// Export for global access
window.ImageOptimizer = ImageOptimizer;