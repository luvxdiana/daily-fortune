const CACHE_NAME = "daily-fortune-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./translations.js",
  "./manifest.json",
  "./assets/background.png",
  "./assets/logo.png",
  "./assets/cloud.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
];

// Install

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting()),
  );
});

// Activate

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      await Promise.all(
        keys
          .filter(
            (key) => key.startsWith("daily-fortune-") && key !== CACHE_NAME,
          )
          .map((key) => caches.delete(key)),
      );

      await self.clients.claim();
    }),
  );
});

// Fetch

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (
    url.origin !== self.location.origin ||
    !url.href.startsWith(self.registration.scope)
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(event.request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, response.clone());
        }

        return response;
      } catch {
        const cached = await caches.match(event.request);

        if (cached) return cached;

        if (event.request.mode === "navigate") {
          return caches.match(new URL("./index.html", self.registration.scope));
        }

        return Response.error();
      }
    })(),
  );
});
