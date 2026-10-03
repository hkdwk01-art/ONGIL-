/* 온길 Service Worker — 한 번 접속하면 전시장 와이파이가 불안정해도 앱이 열려요 */
const VERSION = 'ongil-v1.0.4';
const SHELL = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.webmanifest',
  '/css/app.css',
  '/js/app-1.0.4.js',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/assets/img/alarm.webp',
  '/assets/img/bulb.webp',
  '/assets/img/campaign.webp',
  '/assets/img/e1.webp',
  '/assets/img/e2.webp',
  '/assets/img/e3.webp',
  '/assets/img/e4.webp',
  '/assets/img/e_call.webp',
  '/assets/img/e_phone.webp',
  '/assets/img/found_hero.webp',
  '/assets/img/g1.webp',
  '/assets/img/g2.webp',
  '/assets/img/g3.webp',
  '/assets/img/g4.webp',
  '/assets/img/g5.webp',
  '/assets/img/grandma.webp',
  '/assets/img/guide_hero.webp',
  '/assets/img/home_hero.webp',
  '/assets/img/i_faq.webp',
  '/assets/img/i_head.webp',
  '/assets/img/i_map.webp',
  '/assets/img/i_qr.webp',
  '/assets/img/idcard.webp',
  '/assets/img/logo.webp',
  '/assets/img/map.webp',
  '/assets/img/n_heart.webp',
  '/assets/img/n_info.webp',
  '/assets/img/n_pin.webp',
  '/assets/img/qr1.webp',
  '/assets/img/qr2.webp',
  '/assets/img/qr3.webp',
  '/assets/img/qr_hero.webp',
  '/assets/img/qrcard.webp',
  '/assets/img/remember.webp',
  '/assets/img/safe_route.webp',
  '/assets/img/shield.webp',
  '/assets/img/siren.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 화면 이동(/found?id=001 등): 네트워크 우선, 실패 시 저장된 앱 화면
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put('/index.html',
  '/404.html', copy));
        return res;
      }).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // 구글 폰트: 저장된 것 먼저 쓰고 뒤에서 갱신
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(VERSION + '-fonts').then(async c => {
        const hit = await c.match(req);
        const net = fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      })
    );
    return;
  }

  // 같은 출처의 CSS·JS·이미지: 항상 최신 파일을 먼저 받고, 인터넷이 끊겼을 때만 저장본 사용
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }))
    );
  }
});
