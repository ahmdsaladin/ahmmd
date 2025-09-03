/**
 * Advanced Service Worker for Portfolio Site
 * Implements cache-first for static assets and network-first for dynamic content
 */

const CACHE_NAME = 'ahmmd-portfolio-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/assets/css/bootstrap.css',
  '/assets/css/main.css',
  '/assets/js/vendor/jquery.js',
  '/assets/js/bootstrap-bundle.js',
  '/assets/js/main.js',
  '/assets/js/critical-css.js',
  '/assets/js/performance-loader.js',
  '/assets/img/logo/logo.png',
  '/assets/img/logo/logo-white.png'
];

// Assets to cache on demand
const CACHEABLE_ROUTES = [
  /^\/assets\/css\//,
  /^\/assets\/js\//,
  /^\/assets\/img\//,
  /^\/assets\/fonts\//
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache critical assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📦 Caching critical assets...');
        return cache.addAll(CRITICAL_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('✅ Service Worker activated');
  
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  event.respondWith(handleRequest(request));
});

// Main request handler with caching strategies
async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache-first for static assets
    if (isStaticAsset(url.pathname)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Strategy 2: Network-first for HTML pages
    if (isHTMLPage(url.pathname)) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Strategy 3: Stale-while-revalidate for images
    if (isImage(url.pathname)) {
      return await staleWhileRevalidate(request, STATIC_CACHE);
    }
    
    // Default: Network-first
    return await networkFirst(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('❌ Fetch failed:', error);
    return await getFallback(request);
  }
}

// Cache-first strategy (for CSS, JS, fonts)
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Update cache in background
    updateCache(request, cacheName);
    return cachedResponse;
  }
  
  // Fetch and cache
  return await fetchAndCache(request, cacheName);
}

// Network-first strategy (for HTML pages)
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const responseClone = networkResponse.clone();
      caches.open(cacheName).then(cache => {
        cache.put(request, responseClone);
      });
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale-while-revalidate strategy (for images)
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  const fetchPromise = fetchAndCache(request, cacheName);
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  return await fetchPromise;
}

// Fetch and cache helper
async function fetchAndCache(request, cacheName) {
  const response = await fetch(request);
  
  if (response.ok) {
    const responseClone = response.clone();
    const cache = await caches.open(cacheName);
    await cache.put(request, responseClone);
  }
  
  return response;
}

// Update cache in background
function updateCache(request, cacheName) {
  fetch(request).then(response => {
    if (response.ok) {
      caches.open(cacheName).then(cache => {
        cache.put(request, response);
      });
    }
  }).catch(() => {
    // Silently fail background updates
  });
}

// Get fallback response
async function getFallback(request) {
  const url = new URL(request.url);
  
  // Fallback for HTML pages
  if (isHTMLPage(url.pathname)) {
    const cachedIndex = await caches.match('/index.html');
    if (cachedIndex) return cachedIndex;
  }
  
  // Fallback for images
  if (isImage(url.pathname)) {
    const fallbackImage = await caches.match('/assets/img/logo/logo.png');
    if (fallbackImage) return fallbackImage;
  }
  
  // Generic fallback
  return new Response('Offline - Content not available', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}

// Helper functions
function isStaticAsset(pathname) {
  return CACHEABLE_ROUTES.some(pattern => pattern.test(pathname)) &&
         !pathname.includes('.html');
}

function isHTMLPage(pathname) {
  return pathname.endsWith('.html') || pathname === '/';
}

function isImage(pathname) {
  return /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(pathname);
}

// Background sync for forms (if needed)
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions when back online
  console.log('📡 Syncing contact form...');
}

// Push notifications setup (optional)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/assets/img/logo/logo.png',
      badge: '/assets/img/logo/logo.png'
    });
  }
});

console.log('🚀 Service Worker loaded successfully');