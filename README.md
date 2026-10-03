# 온길 (ON-GIL) · 졸업전시용 모바일 웹앱/PWA

길을 잃은 치매 어르신과 보호자를 이어주는 귀가 연결 서비스의 체험판입니다.
모든 어르신·보호자 정보는 데모 데이터이며, 서버 없이 브라우저에서만 동작합니다.

## 실행
    npx serve -s . -l 3000      # 또는 npm run dev
    → http://localhost:3000

## 주소(QR에 넣는 URL)
| 주소 | 화면 |
|---|---|
| `/` | 온길 메인 |
| `/found` | 발견자 안내 |
| `/found?id=001` | 발견자 안내 + 데모 어르신 정보 → 보호자 연결 (001·002·003) |
| `/scan` | QR 스캔 안내 (`/scan?scan=1` 이면 스캐너 바로 실행) |
| `/guardian` | 보호자 등록 |
| `/map` | 안심 지도 |
| `/program` | 치매예방 프로그램 |
| `/settings` | 접근성·큰글씨 설정 |
| `/emergency` | 긴급 도움 요청 |
| `/route` `/notifications` `/found-alert` `/center` `/mypage` `/faq` | 기타 화면 |

## 구조
    index.html              앱 진입점 · 스플래시 · PWA 메타 태그
    manifest.webmanifest    PWA 설정 (standalone, 아이콘, 색상)
    sw.js                   Service Worker (오프라인 캐시)
    vercel.json             모든 주소를 index.html로 연결 + 캐시 헤더
    css/app.css             디자인
    js/app-1.0.6.js           화면·라우팅·기능 (수정 시 파일 이름의 버전도 올려주세요)
    js/vendor/              QR 인식(jsQR, Apache-2.0) · QR 생성(qrcode-generator, MIT)
    assets/img/             일러스트·아이콘 (AI 업스케일 고화질)
    icons/                  앱 아이콘

## 참고
- 전시용으로, 앱을 새로 열 때마다 모든 체험 기록(보호자 등록, 알림, 설정 등)이 초기화됩니다.
- 전시용 안전을 위해 112 · 119 · 치매상담콜센터를 포함한 모든 전화는 실제로 걸리지 않고 체험용 통화 화면만 보여줍니다.
- 보호자 통화, 인증번호, 기관 번호 등은 모두 체험용 화면입니다.
- 코드를 수정해 다시 배포할 때는 `sw.js`의 `VERSION` 값을 올려주세요.
