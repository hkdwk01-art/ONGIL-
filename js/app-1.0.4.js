/* 온길(ON-GIL) 모바일 웹앱 · 졸업전시용 프로토타입 (데모 데이터만 사용) */
const IMG_NAMES=['alarm','bulb','campaign','e1','e2','e3','e4','e_call','e_phone','found_hero','g1','g2','g3','g4','g5','grandma','guide_hero','home_hero','i_faq','i_head','i_map','i_qr','idcard','logo','map','n_heart','n_info','n_pin','qr1','qr2','qr3','qr_hero','qrcard','remember','safe_route','shield','siren'];
const IMG=Object.fromEntries(IMG_NAMES.map(n=>[n,`/assets/img/${n}.webp`]));

/* ---------- icons ---------- */
const sv=(d,w=2,c='currentColor',s=24)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I={
  back:sv('<path d="M15 5l-7 7 7 7"/>',2.2),
  close:sv('<path d="M6 6l12 12M18 6L6 18"/>',2),
  chev:sv('<path d="M9 5l7 7-7 7"/>',2,'currentColor',18),
  chevW:sv('<path d="M9 5l7 7-7 7"/>',2.4,'#fff',20),
  head:sv('<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 1.5-2 2.5-5 2.5"/>',1.8,'currentColor',22),
  bell:sv('<path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 004 0"/>',1.8),
  gear:sv('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',1.6),
  home:sv('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/>',1.7),
  book:sv('<path d="M12 6c-2-1.5-5-2-8-1.5v14c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-14c-3-.5-6 0-8 1.5z"/><path d="M12 6v14"/><path d="M7 9h2M7 12h2M15 9h2M15 12h2"/>',1.6),
  pen:sv('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/><path d="M3 22h18"/>',1.6),
  chat:sv('<path d="M4 5h16v11H9l-5 4z"/><circle cx="9" cy="10.5" r=".6" fill="currentColor"/><circle cx="12" cy="10.5" r=".6" fill="currentColor"/><circle cx="15" cy="10.5" r=".6" fill="currentColor"/>',1.6),
  user:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5"/>',1.6),
  phone:sv('<path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z"/>',2),
  pin:sv('<path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',2),
  bldg:sv('<path d="M4 21V5l8-2v18M12 8l8 2v11"/><path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20"/>',2),
  cal:sv('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',1.7),
  gender:sv('<circle cx="9" cy="14" r="4"/><circle cx="15" cy="9" r="4"/>',1.6),
  shieldS:sv('<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',1.7),
  people:sv('<circle cx="9" cy="8" r="3"/><path d="M3 19c.5-3 3-5 6-5s5.5 2 6 5"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14c2.5 0 4.5 1.7 5 4"/>',1.6),
  lock:sv('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',2),
  clock:sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',2,'currentColor',16),
  warn:sv('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.1"/>',2.2),
  cam:sv('<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',2),
  bellG:sv('<path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 004 0"/>',1.8,'#3C7A56',20),
  check:sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>',3,'#fff',44),
  shieldW:sv('<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" fill="#3C7A56" stroke="#3C7A56"/><path d="M8.8 12l2.2 2.2 4.2-4.2" stroke="#fff"/>',2,'#fff',30),
  mega:sv('<path d="M4 10v4h3l7 4V6L7 10z" fill="#fff"/><path d="M17 9a4 4 0 010 6"/>',2,'#fff',28),
  share:sv('<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/>',2),
  info:sv('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.1"/>',2),
  text:sv('<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',2),
  qr:sv('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.1M14 21h3M21 18v3h-2"/>',1.8),
  plus:sv('<path d="M12 5v14M5 12h14"/>',2),
  brain:sv('<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 4 3 3 0 003 3 2 2 0 003-1V5a2 2 0 00-3-1z"/><path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 4 3 3 0 01-3 3 2 2 0 01-3-1"/>',1.7),
  vibe:sv('<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M3 9v6M21 9v6"/>',1.8),
  faq:sv('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-1 .6-1.5 1.1-1.5 2.2M12 17v.1"/>',2),
};
const ARROWS={
  right:'<svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#3C7A56" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 48V28a8 8 0 018-8h22"/><path d="M36 12l8 8-8 8"/></svg>',
  left:'<svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#3C7A56" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M42 48V28a8 8 0 00-8-8H12"/><path d="M20 12l-8 8 8 8"/></svg>',
  straight:'<svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#3C7A56" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M28 50V8"/><path d="M18 18l10-10 10 10"/></svg>',
  cross:'<svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#3C7A56" stroke-width="4" stroke-linecap="round"><path d="M10 16h36M10 24h36M10 32h36M10 40h36" stroke-width="3.5" stroke-dasharray="6 5"/></svg>',
  home:'<svg width="56" height="56" viewBox="0 0 56 56" fill="#3C7A56"><path d="M28 6c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16z"/><path d="M20 24l8-7 8 7v8h-5v-5h-6v5h-5z" fill="#fff"/></svg>',
};

/* ---------- state ---------- */
const DEF={notifs:[
  {id:1,img:'n_heart',t:'발견 제보가 접수되었습니다.',d:'위치: 서울 성동구 OO동',time:'2024.05.20 14:32',go:'found',read:false},
  {id:2,img:'n_pin',t:'어르신이 이동 중입니다.',d:'현재 위치가 갱신되었습니다.',time:'2024.05.20 14:36',go:'route',read:false},
  {id:3,img:'n_info',t:'새로운 소식이 있습니다.',d:'서비스 이용 안내를 확인해보세요.',time:'2024.05.20 10:00',go:'notice',read:false}],
  reg:null,large:false,vibe:true,programs:{}};
let S;
try{S=Object.assign(structuredClone(DEF),JSON.parse(localStorage.getItem('onkil')||'{}'))}catch(e){S=structuredClone(DEF)}
const save=()=>{try{localStorage.setItem('onkil',JSON.stringify(S))}catch(e){}};
const applyLarge=()=>document.documentElement.classList.toggle('large',!!S.large);
applyLarge();
const unread=()=>S.notifs.some(n=>!n.read);
const guardian=()=>S.reg?S.reg.name:'홍길동';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- ui helpers ---------- */
const $=s=>document.querySelector(s);
let toastT;
function toast(msg,ms=2400){const t=$('#toast');t.innerHTML=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),ms)}
function vib(p=20){if(S&&S.vibe===false)return;try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}}
function sheet(html,onMount){
  closeSheet();
  const d=document.createElement('div');d.className='scrim';d.id='scrim';
  d.innerHTML=`<div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
  d.addEventListener('click',e=>{if(e.target===d)closeSheet()});
  $('#app').appendChild(d);onMount&&onMount(d);
}
function closeSheet(){const s=$('#scrim');s&&s.remove()}
function full(cls,html,onMount){
  closeFull();
  const d=document.createElement('div');d.className='full '+cls;d.id='full';d.innerHTML=html;
  $('#app').appendChild(d);onMount&&onMount(d);return d;
}
let fullCleanup=null;
function closeFull(){fullCleanup&&fullCleanup();fullCleanup=null;const f=$('#full');f&&f.remove()}

function topbar(title,{back=true,close=false,right='inq'}={}){
  const l=back?`<button class="tb-btn" data-act="back" aria-label="뒤로 가기">${close?I.close:I.back}</button>`:'<span></span>';
  let r='<span></span>';
  if(right==='inq')r=`<button class="tb-btn right" data-go="center" aria-label="문의">${I.head}문의</button>`;
  else if(right)r=right;
  return `<header class="topbar">${l}<h1>${title}</h1>${r}</header>`;
}

/* ---------- screens ---------- */
const SCREENS={};

SCREENS.home=()=>`
<div class="home-head">
  <div class="brand"><img src="${IMG.logo}" alt=""><span>온길</span></div>
  <div style="display:flex;gap:2px">
    <button class="icon-btn" data-go="notif" aria-label="알림">${I.bell}${unread()?'<i class="dot"></i>':''}</button>
    <button class="icon-btn" data-go="settings" aria-label="설정">${I.gear}</button>
  </div>
</div>
<section class="hero">
  <div class="txt">
    <h2>${esc(guardian())}님,<br><span class="g">온길과 함께해요!</span></h2>
    <p>따뜻한 귀가를 돕는 연결 서비스,<br>온길을 이용해주셔서 감사합니다.</p>
  </div>
  <img class="art" src="${IMG.home_hero}" alt="">
</section>
<div class="big2">
  <button class="bigcard o" data-go="finder">
    <span class="chip">발견자라면?</span><b>도와드릴게요</b><small>발견자 안내</small>
    <span class="circ"><img src="${IMG.siren}" alt=""></span><span class="chev">${I.chevW}</span>
  </button>
  <button class="bigcard s" data-go="register">
    <span class="chip">보호자라면?</span><b>${S.reg?'보호자 정보':'보호자 등록하기'}</b><small>${S.reg?'등록 완료 · 정보 확인':'가족 정보 미리 등록'}</small>
    <span class="circ"><img src="${IMG.idcard}" alt=""></span><span class="chev">${I.chevW}</span>
  </button>
</div>
<div class="grid4">
  <button class="g4" data-go="finder"><img src="${IMG.i_map}" alt="">발견자 안내</button>
  <button class="g4" data-go="qr"><img src="${IMG.i_qr}" alt="">QR 스캔 안내</button>
  <button class="g4" data-go="faq"><img src="${IMG.i_faq}" alt="">FAQ</button>
  <button class="g4" data-go="center"><img src="${IMG.i_head}" alt="">문의 / 센터</button>
</div>
<button class="promo" data-go="program">
  <div class="c-t"><span class="chip">치매예방 프로그램</span><b>매일 조금씩, 함께 지키는 기억</b><span class="small muted">두뇌 체조와 우리 동네 프로그램을 만나보세요.</span><span class="lnk">프로그램 보기 ›</span></div>
  <span class="p-ic">${I.brain.replace('width="24" height="24"','width="40" height="40"')}</span>
</button>
<button class="campaign" data-act="campaign">
  <div class="c-t"><span class="chip">온길 캠페인</span><b>함께 만드는 따뜻한 길</b><span class="small muted">온길 캠페인에 참여해보세요.</span><span class="lnk">캠페인 보기 ›</span></div>
  <img src="${IMG.campaign}" alt="">
</button>
<button class="rowlink" data-act="about"><span><b>온길 소개</b><span class="small">따뜻한 귀가를 돕는 연결 서비스, 온길을 소개합니다.</span></span>${I.chev}</button>
`;

SCREENS.finder=()=>`
${topbar('발견자 안내')}
<section class="ghero">
  <div class="txt"><h2>차분히 따라오세요.</h2><p>어르신이 안전하게<br>귀가할 수 있도록 온길이<br>도와드릴게요.</p></div>
  <img src="${IMG.guide_hero}" alt="">
</section>
<span class="tag-green">5단계 가이드</span>
<div class="card steps">
  ${[['g1','QR이 있는지 확인','옷이나 가방에 있는 온길 QR을 찾아보세요.','go:qr'],
     ['g2','보호자에게 연락','QR 스캔 또는 정보로 보호자와 연결해요.','act:call'],
     ['g3','현재 위치 공유','어르신의 위치를 함께 공유해요.','act:shareLoc'],
     ['g4','가까운 도움처 보기','주변의 도움 기관을 안내받아요.','act:places'],
     ['g5','필요 시 기관 연결','치매안심센터 등과 연결할 수 있어요.','act:agency']]
   .map((s,i)=>`<button class="step" data-${s[3].split(':')[0]}="${s[3].split(':')[1]}"><img src="${IMG[s[0]]}" alt=""><span><b><span class="n">${i+1}</span>${s[1]}</b><small>${s[2]}</small></span><span class="chev">${I.chev}</span></button>`).join('')}
</div>
<div class="note"><img src="${IMG.remember}" alt=""><div><b>기억하세요!</b><p>혼자 해결하지 않아도 괜찮아요.<br>온길이 함께 도와드릴게요.</p></div></div>
<div class="pad stack">
  <button class="btn orange" data-act="call">${I.phone}보호자에게 바로 연락</button>
  <button class="btn green" data-act="shareLoc">${I.pin}현재 위치 공유</button>
  <button class="btn blue" data-act="places">${I.bldg}가까운 도움처 찾기</button>
</div>`;

/* register */
let R={name:'',birth:'',gender:'남성',phone:'',code:'',relation:'',address:'',sent:false,verified:false,expected:'',left:0,editing:false};
let regTimer=null;
function progressBar(step){
  const p=(n,l)=>`<span class="p ${step>=n?'on':''}"><i>${step>n?'✓':n}</i>${l}</span>`;
  return `<div class="progress">${p(1,'정보 입력')}<span class="bar ${step>1?'on':''}"></span>${p(2,'본인 인증')}<span class="bar ${step>2?'on':''}"></span>${p(3,'등록 완료')}</div>`;
}
SCREENS.register=()=>{
  if(S.reg&&!R.editing){
    const r=S.reg;
    return `${topbar('보호자 등록',{close:true})}
    <div class="done">
      <div class="check">${I.check}</div>
      <h2>보호자 등록이 완료됐어요</h2>
      <p class="muted small">어르신이 발견되면 아래 번호로 바로 연락드릴게요.</p>
      <div class="card summary">
        <div><span>이름</span><b>${esc(r.name)}</b></div>
        <div><span>생년월일</span><b>${esc(r.birth)}</b></div>
        <div><span>성별</span><b>${esc(r.gender)}</b></div>
        <div><span>휴대폰 번호</span><b>${esc(r.phone.replace(/(\d{3})(\d{3,4})(\d{4})/,'$1-$2-$3'))}</b></div>
        <div><span>관계</span><b>${esc(r.relation)}</b></div>
        <div><span>주소</span><b>${esc(r.address)}</b></div>
      </div>
      <div class="stack">
        <button class="btn green" data-go="qr">${I.qr}어르신 QR 안내 보기</button>
        <button class="btn ghost" data-act="editReg">정보 수정하기</button>
      </div>
    </div>`;
  }
  const step=R.verified?2:1;
  const t=R.verified?`<span class="timer ok">인증 완료</span>`:R.sent?(R.left>0?`<span class="timer" id="timer">${I.clock}<span>${fmt(R.left)}</span></span>`:`<span class="timer off">시간 만료</span>`):`<span class="timer off">${I.clock}03:00</span>`;
  const rel=['아들','딸','배우자','며느리','사위','손자녀','형제자매','기타'];
  return `${topbar('보호자 등록',{close:true})}
  <div class="reg-top"><img src="${IMG.shield}" alt=""><div><h2>안전을 위한 첫걸음,<br><span>보호자 정보를 등록해주세요</span></h2><p>응급상황 및 서비스 이용 시 보호자에게 연락드릴 수 있도록 정확한 정보를 입력해주세요.</p></div></div>
  ${progressBar(step)}
  <div class="card form">
    <div class="alert">${I.bellG}<div><b>중요 안내</b><p>입력하신 정보는 보호자 확인 및 긴급 연락 용도로만 사용됩니다.</p></div></div>
    <div class="frow"><span class="ic">${I.user}</span><label for="f-name">이름</label><div class="fin"><input id="f-name" data-f="name" value="${esc(R.name)}" placeholder="이름을 입력해주세요." autocomplete="name"></div></div>
    <div class="frow"><span class="ic">${I.cal}</span><label for="f-birth">생년월일</label><div class="fin"><input id="f-birth" data-f="birth" value="${esc(R.birth)}" placeholder="YYYY.MM.DD" inputmode="numeric" maxlength="10"></div></div>
    <div class="frow"><span class="ic">${I.gender}</span><label>성별</label><div class="seg">${['남성','여성'].map(g=>`<button data-gender="${g}" class="${R.gender===g?'on':''}" aria-pressed="${R.gender===g}">${g}</button>`).join('')}</div></div>
    <div class="frow"><span class="ic">${I.phone}</span><label for="f-phone">휴대폰 번호</label><div class="fin"><input id="f-phone" data-f="phone" value="${esc(R.phone)}" placeholder="숫자만 입력" inputmode="numeric" maxlength="11" ${R.verified?'disabled':''}><button class="sbtn" data-act="sendCode" ${R.verified?'disabled':''}>${R.sent&&!R.verified?'재발송':'인증번호 발송'}</button></div></div>
    <div class="frow"><span class="ic">${I.shieldS}</span><label for="f-code">인증번호</label><div class="fin"><input id="f-code" data-f="code" value="${esc(R.code)}" placeholder="인증번호 6자리" inputmode="numeric" maxlength="6" ${R.verified||!R.sent?'disabled':''}>${t}</div></div>
    <div class="frow"><span class="ic">${I.people}</span><label for="f-rel">관계</label><div class="fin"><select id="f-rel" data-f="relation"><option value="">관계를 선택해주세요.</option>${rel.map(r=>`<option ${R.relation===r?'selected':''}>${r}</option>`).join('')}</select></div></div>
    <div class="frow"><span class="ic">${I.pin}</span><label for="f-addr">주소</label><div class="fin"><input id="f-addr" data-f="address" value="${esc(R.address)}" placeholder="주소를 검색해주세요." readonly data-act="addr"><button class="sbtn" data-act="addr">주소 검색</button></div></div>
    <button class="btn green" style="margin-top:16px" data-act="submitReg">등록 완료</button>
  </div>
  <div class="privacy">${I.lock}<div><b>개인정보 보호</b>입력하신 정보는 안전하게 암호화되어 저장되며, 본인만 관리할 수 있습니다.</div></div>`;
};
const fmt=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');

/* route */
const PATH=[[12.6,28],[15,57],[34,59],[35,66],[54,66],[57,56],[70,56],[71,40],[89,40],[89,22]];
const GUIDE=[
  {a:'right',t:'직진 후 오른쪽 길로\n돌아가세요.',m:200,p:1},
  {a:'straight',t:'연희초등학교 방향으로\n쭉 걸어가세요.',m:300,p:3},
  {a:'cross',t:'앞의 횡단보도를\n초록불에 건너세요.',m:250,p:5},
  {a:'left',t:'왼쪽 골목으로\n들어가세요.',m:250,p:7},
  {a:'right',t:'오른쪽으로 돌면\n집이 보여요.',m:200,p:8},
  {a:'home',t:'집에 도착했어요!\n수고 많으셨어요.',m:0,p:9}];
let nav={i:0,timer:null};
SCREENS.route=()=>{
  const left=GUIDE.slice(nav.i).reduce((a,g)=>a+g.m,0);
  const g=GUIDE[nav.i];const cur=nav.prev||navPos(nav.i);
  return `${topbar('경로 안내',{right:`<button class="tb-btn right outline" data-act="shareRoute">공유하기</button>`})}
  <p class="lead">어르신의 위치에서 집으로 가는<br>가장 안전한 경로를 안내합니다.</p>
  <div class="card stats"><div><small>남은 거리</small><b id="rd">${(left/1000).toFixed(1)}<em>km</em></b></div><div class="sep"></div><div><small>예상 시간</small><b id="rt">${Math.max(0,Math.round(left/80))}<em>분</em></b></div></div>
  <div class="map"><img src="${IMG.map}" alt="현재 위치에서 집까지의 경로 지도"><span class="me" id="me" style="left:${cur[0]}%;top:${cur[1]}%"></span></div>
  <div class="card turn ${g.a==='home'?'arrived':''}" id="turn" aria-live="polite"><span class="arr">${ARROWS[g.a]}</span><div><b>${g.t.replace('\n','<br>')}</b>${g.m?`<small>${g.m} m</small>`:''}</div></div>
  <div class="note"><img src="${IMG.safe_route}" alt=""><div><b>안전한 경로 안내</b><p>횡단보도와 보행자 도로를 우선으로 하는<br>안전한 경로입니다.</p></div></div>
  <div class="pad stack">
    ${g.a==='home'?`<button class="btn orange" data-act="call">${I.phone}보호자에게 도착 알리기</button>`:`<button class="btn ghost-green" data-act="nextGuide">다음 안내 보기</button>`}
    <button class="btn green" data-act="endRoute">안내 종료</button>
  </div>`;
};

SCREENS.notif=()=>`
${topbar('알림',{right:''})}
<div class="nlist">
${S.notifs.length?S.notifs.map(n=>`<button class="card nitem ${n.read?'read':'unread'}" data-notif="${n.id}"><img src="${IMG[n.img]}" alt=""><span><b>${esc(n.t)}</b><p>${esc(n.d)}</p><time>${esc(n.time)}</time></span><span class="chev" style="margin-left:auto">${I.chev}</span></button>`).join(''):'<p class="empty">새 알림이 없어요.</p>'}
</div>
<div class="pad" style="margin-top:22px"><button class="btn green" data-act="readAll" ${unread()?'':'disabled'}>모두 읽음</button></div>
<div class="note tip"><img src="${IMG.bulb}" alt="" style="mix-blend-mode:multiply"><div><b>TIP</b><p>알림을 통해 온길의 중요한 소식을<br>빠르게 확인하실 수 있습니다.</p></div></div>`;

const SITS=[['e1','낙상 사고','넘어지거나 다쳤을 때'],['e2','건강 이상','갑작스런 통증, 어지럼증 등'],['e3','길을 잃었을 때','집을 찾기 어렵거나 방향을 모를 때'],['e4','화재/위험 상황','화재, 가스 누출 등 위험한 상황']];
let sit=null;
SCREENS.emergency=()=>`
${topbar('긴급 도움 요청')}
<section class="ecard">
  <img class="alarm" src="${IMG.alarm}" alt="">
  <h2><span>긴급</span> 도움이<br>필요한 상황인가요?</h2>
  <p>보호자에게 즉시 알림이 전송되고, 빠른 도움을 받을 수 있습니다.</p>
  <img class="gm" src="${IMG.grandma}" alt="">
  <button class="btn red" data-act="sos">${I.warn}긴급 도움 요청하기</button>
</section>
<div class="sec-h"><b>긴급 상황 예시</b><button data-act="moreSit">전체보기 ${I.chev}</button></div>
<div class="egrid">${SITS.map((s,i)=>`<button class="eopt ${sit===i?'on':''}" data-sit="${i}" aria-pressed="${sit===i}"><img src="${IMG[s[0]]}" alt=""><b>${s[1]}</b><small>${s[2]}</small></button>`).join('')}</div>
<div class="card einfo"><img class="c" src="${IMG.e_call}" alt=""><div><b>긴급 연락 안내</b><p>등록된 보호자에게 자동으로 연락이 갑니다.<br>현재 위치 정보도 함께 전송됩니다.</p></div><img class="ph" src="${IMG.e_phone}" alt=""></div>
<div class="note tip red"><img src="${IMG.bulb}" alt="" style="mix-blend-mode:multiply"><div><b>TIP</b><p>위급 상황이 아닌 경우, 센터/문의에서 상담을 받아보세요. 더 정확하고 빠른 도움을 드릴 수 있어요.</p></div></div>`;

SCREENS.found=()=>`
${topbar('발견 알림')}
<section class="fhero">
  <span class="mega">${I.mega}</span>
  <h2>보호자를 찾았습니다!</h2>
  <p>주변의 도움이 필요한 어르신을 안전하게 보호자에게 연결했습니다.</p>
  <img src="${IMG.found_hero}" alt="">
</section>
<div class="card finfo">
  <h3>발견 정보</h3>
  <div class="frow2">${I.user}<span>발견 일시</span><em style="font-style:normal">2024. 05. 20 (월) 14:35</em></div>
  <div class="frow2">${I.pin}<span>발견 장소</span><em style="font-style:normal">서울특별시 강남구 테헤란로 123</em></div>
  <div class="frow2">${I.shieldS}<span>발견자</span><em style="font-style:normal">온길 도우미 김온길님</em></div>
  <button class="btn ghost-green" style="margin-top:8px;height:50px" data-act="foundDetail">상세 정보 보기</button>
</div>
<div class="okbar">${I.shieldW}<span>어르신이 안전하게 보호자에게 인계되었습니다.<br>협조해주셔서 감사합니다!</span></div>
<div class="note tip"><img src="${IMG.bulb}" alt="" style="mix-blend-mode:multiply"><div><b>TIP</b><p>주변에서 도움이 필요한 어르신을 발견하면, 온길 도우미에게 알려주세요.</p></div></div>`;

SCREENS.qr=()=>`
${topbar('QR 스캔 안내')}
<section class="qhero"><div class="txt"><h2>이렇게 <span>사용해요!</span></h2><p>온길 QR을 스캔하면<br>보호자 정보와 도움 요청 문구를 확인할 수 있어요.</p></div><img src="${IMG.qr_hero}" alt=""></section>
<span class="tag-green" style="display:table;margin:0 auto -12px">QR 사용 방법</span>
<div class="card qwrap">
  <div class="qsteps">
    <div><span class="n">1</span><img src="${IMG.qr1}" alt=""><p>어르신의 옷이나 가방에 있는 <b>온길 QR</b>을 찾아요</p></div><span class="ar">›</span>
    <div><span class="n">2</span><img src="${IMG.qr2}" alt=""><p>아래 버튼을 눌러 <b>카메라로 QR을 비춰요</b></p></div><span class="ar">›</span>
    <div><span class="n">3</span><img src="${IMG.qr3}" alt=""><p>보호자 정보와 <b>도움 요청 문구</b>를 확인해요</p></div>
  </div>
  <div class="qbox"><div class="qb"><img src="${IMG.logo}" alt="">온길</div><img class="code" src="${IMG.qrcard}" alt="온길 QR 예시"><p class="small muted" style="margin:0">가까이에서 QR을 스캔해주세요.</p></div>
  <div class="stack" style="padding:14px 12px 0">
    <button class="btn orange" data-act="scan">${I.cam}QR 연결하기</button>
    <button class="btn ghost" data-act="noScan">스캔이 안 될 때</button>
  </div>
  <div class="note tip" style="margin:14px 12px 0"><img src="${IMG.bulb}" alt="" style="mix-blend-mode:multiply"><div><b>TIP</b><p>밝은 곳에서 스캔하면 더 잘 인식돼요.<br>카메라 접근 권한을 허용해주세요.</p></div></div>
</div>`;

SCREENS.center=()=>`
<h2 class="pagetitle">센터/문의</h2>
<p class="pad muted small" style="margin:0">도움이 필요하면 언제든 연락하세요.</p>
<button class="hotline" data-go="emergency"><span style="width:52px;height:52px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none"><img src="${IMG.alarm}" alt="" style="width:34px"></span><span><b>긴급 도움 요청</b><small>보호자에게 즉시 알림과 위치를 보내요</small></span><span style="margin-left:auto">${I.chevW}</span></button>
<div class="card menu">
  <button class="mi" data-act="tel" data-num="1899-9988" data-name="치매상담콜센터"><span class="ic" style="background:var(--green-soft);color:var(--green)">${I.phone}</span><span><b>치매상담콜센터</b><small>1899-9988 · 24시간 상담</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="tel" data-num="112" data-name="경찰 (실종 신고)"><span class="ic" style="background:#E6EEF6;color:var(--blue)">${I.shieldS}</span><span><b>실종 신고</b><small>112 · 경찰에 바로 신고</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="places"><span class="ic" style="background:var(--orange-soft);color:var(--orange-d)">${I.bldg}</span><span><b>가까운 치매안심센터</b><small>주변 도움 기관 찾기</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-go="map"><span class="ic" style="background:var(--green-soft);color:var(--green)">${I.pin}</span><span><b>안심 지도</b><small>주변 안전한 도움처를 지도에서 확인</small></span><span class="chev">${I.chev}</span></button>
</div>
<div class="card menu">
  <button class="mi" data-go="notif"><span class="ic" style="background:var(--beige)">${I.bell}</span><span><b>알림</b><small>${unread()?'읽지 않은 알림이 있어요':'모든 알림을 확인했어요'}</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-go="found"><span class="ic" style="background:var(--beige)">${I.mega.replace(/#fff/g,'#3C7A56')}</span><span><b>발견 알림 내역</b><small>최근 발견·인계 기록</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-go="faq"><span class="ic" style="background:var(--beige)">${I.faq}</span><span><b>자주 묻는 질문</b><small>궁금한 점을 빠르게 확인해요</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="ask"><span class="ic" style="background:var(--beige)">${I.chat}</span><span><b>1:1 문의하기</b><small>평일 09:00 ~ 18:00 답변</small></span><span class="chev">${I.chev}</span></button>
</div>`;

SCREENS.mypage=()=>`
<h2 class="pagetitle">마이페이지</h2>
<div class="card profile"><span class="avatar">${esc(guardian()).slice(0,1)}</span><div><b style="font-size:1.1rem">${esc(guardian())}님</b><p class="small muted" style="margin:4px 0 0">${S.reg?`${esc(S.reg.relation)} 보호자 · 등록 완료`:'보호자 정보를 등록해주세요'}</p></div>${S.reg?'':`<button class="btn green" style="width:auto;height:40px;padding:0 14px;font-size:.84rem;margin-left:auto" data-go="register">등록</button>`}</div>
<div class="card menu">
  <button class="mi" data-go="qr"><span class="ic" style="background:var(--orange-soft);color:var(--orange-d)">${I.qr}</span><span><b>QR 스캔 안내</b><small>어르신 QR 사용 방법</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-go="register"><span class="ic" style="background:var(--green-soft);color:var(--green)">${I.user}</span><span><b>보호자 정보</b><small>${S.reg?'등록한 정보 확인·수정':'가족 정보 미리 등록'}</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-go="notif"><span class="ic" style="background:var(--beige)">${I.bell}</span><span><b>알림</b><small>발견·이동 소식</small></span><span class="chev">${I.chev}</span></button>
</div>
<div class="card menu">
  <button class="mi" data-go="settings"><span class="ic" style="background:var(--green-soft);color:var(--green)">${I.gear}</span><span><b>접근성 설정</b><small>큰 글씨 · 진동 · 앱 설치</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="toggleLarge" role="switch" aria-checked="${!!S.large}"><span class="ic" style="background:var(--beige)">${I.text}</span><span><b>큰 글씨로 보기</b><small>화면 글자를 더 크게 키워요</small></span><span class="switch ${S.large?'on':''}"></span></button>
  <button class="mi" data-act="install"><span class="ic" style="background:var(--beige)">${I.plus}</span><span><b>홈 화면에 앱 추가</b><small>아이콘을 눌러 바로 실행해요</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="about"><span class="ic" style="background:var(--beige)">${I.info}</span><span><b>온길 소개</b><small>버전 1.0.4 · 전화 연결 차단됨</small></span><span class="chev">${I.chev}</span></button>
  <button class="mi" data-act="reset"><span class="ic" style="background:var(--beige)">${I.close}</span><span><b>체험 데이터 초기화</b><small>등록 정보와 알림을 처음 상태로</small></span></button>
</div>`;

const FAQS=[
 ['온길 QR은 어디에 붙이나요?','어르신이 자주 입는 겉옷 안쪽, 가방, 지갑 등 눈에 잘 띄는 곳에 붙여주세요. 여러 곳에 붙여두면 발견될 가능성이 높아져요.'],
 ['발견자의 개인정보도 저장되나요?','아니요. 발견자는 별도의 가입 없이 QR 스캔만으로 보호자에게 연락할 수 있고, 발견 위치만 보호자에게 전달돼요.'],
 ['보호자는 몇 명까지 등록할 수 있나요?','한 어르신당 최대 3명의 보호자를 등록할 수 있어요. 긴급 상황에는 등록된 모든 보호자에게 동시에 알림이 가요.'],
 ['어르신이 휴대폰이 없어도 사용할 수 있나요?','네. 어르신 몸에 지닌 QR을 발견자가 스캔하는 방식이라 어르신의 휴대폰이 없어도 돼요.'],
 ['치매안심센터와는 어떻게 연결되나요?','발견자 안내의 5단계에서 가까운 치매안심센터에 바로 연락하거나, 치매상담콜센터(1899-9988)로 24시간 상담받을 수 있어요.']];
SCREENS.faq=()=>`${topbar('자주 묻는 질문',{right:''})}
<div class="card faq" style="margin:6px 18px 0">${FAQS.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>
<div class="pad" style="margin-top:18px"><button class="btn ghost" data-act="ask">원하는 답이 없나요? 1:1 문의하기</button></div>`;

/* ---------- router ---------- */
const TABS=[['home','홈',I.home],['finder','도움 요청',I.book],['register','등록하기',I.pen],['center','센터/문의',I.chat],['mypage','마이페이지',I.user]];
const TABOF={home:'home',finder:'finder',route:'finder',map:'finder',register:'register',center:'center',notif:'center',emergency:'center',found:'center',faq:'center',mypage:'mypage',qr:'mypage',program:'home',settings:'mypage'};
/* URL ↔ 화면 (QR에 이 주소를 넣으면 해당 화면이 바로 열려요) */
const PATHS={home:'/',finder:'/found',qr:'/scan',register:'/guardian',map:'/map',program:'/program',settings:'/settings',
  route:'/route',notif:'/notifications',emergency:'/emergency',found:'/found-alert',center:'/center',mypage:'/mypage',faq:'/faq'};
const ALIAS={'/finder':'finder','/qr':'qr','/register':'register','/alert':'found','/help':'emergency','/sos':'emergency','/index.html':'home'};
function screenOf(path){path=(path||'/').replace(/\/+$/,'')||'/';for(const k in PATHS)if(PATHS[k]===path)return k;return ALIAS[path]||'home'}
let current='home',idx=0,curURL='/';
function render(r=current,dir='fade'){
  if(current==='route'&&r!=='route')stopNav();
  if(current==='register'&&r!=='register')R.editing=false;
  if(current==='program'&&r!=='program')stopGame&&stopGame();
  current=r;
  const v=$('#view');
  const keep=dir==='same'?(v.querySelector('.screen')||{}).scrollTop:0;
  v.innerHTML=`<div class="screen ${dir==='same'?'':'in-'+dir}">${SCREENS[r]()}</div>`;
  if(keep)v.querySelector('.screen').scrollTop=keep;
  $('#tabs').innerHTML=TABS.map(t=>`<button class="${TABOF[r]===t[0]?'on':''}" data-tab="${t[0]}" aria-current="${TABOF[r]===t[0]?'page':'false'}">${t[2]}<span>${t[1]}</span></button>`).join('');
  if(r==='route')startNav();
  if(r==='register')bindRegister();
  if(r==='map')bindMap&&bindMap();
  document.title=r==='home'?'온길':`${TITLES[r]||''} · 온길`;
}
const TITLES={finder:'발견자 안내',qr:'QR 스캔 안내',register:'보호자 등록',map:'안심 지도',program:'치매예방 프로그램',settings:'접근성 설정',route:'경로 안내',notif:'알림',emergency:'긴급 도움 요청',found:'발견 알림',center:'센터/문의',mypage:'마이페이지',faq:'자주 묻는 질문'};
const refresh=()=>render(current,'same');
function navTo(name,query='',dir='push'){
  closeSheet();closeFull();
  const url=PATHS[name]+query;
  if(name===current&&url===curURL){const s=$('.screen');s&&s.scrollTo({top:0,behavior:'smooth'});return}
  idx++;curURL=url;
  try{history.pushState({i:idx},'',url)}catch(e){}
  render(name,dir);enter(name,new URLSearchParams(query));
}
function go(name,query=''){navTo(name,query,'push')}
function tab(t){navTo(t,'','fade')}
function back(){
  closeSheet();closeFull();
  if(idx>0){history.back();return}
  if(current!=='home'){curURL='/';try{history.replaceState({i:0},'','/')}catch(e){}render('home','pop')}
}
window.addEventListener('popstate',e=>{
  const i=(e.state&&e.state.i)||0;
  if($('#full')||$('#scrim')){ /* 열린 창만 닫고 화면은 그대로 */
    if($('#cnt'))ACT.sosCancel();else{closeFull();closeSheet()}
    try{history.pushState({i:idx},'',curURL)}catch(err){}return}
  const dir=i<idx?'pop':'push';idx=i;curURL=location.pathname+location.search;
  render(screenOf(location.pathname),dir);
});
/* 화면에 들어올 때 URL 파라미터 처리 (예: /found?id=001) */
function enter(name,params){
  const id=params.get('id');
  if(name==='finder'&&id)setTimeout(()=>elderResult(id,true),350);
  if(name==='qr'&&params.get('scan')==='1')setTimeout(()=>scanFlow(),350);
  if(name==='emergency'&&params.get('type')){const k=+params.get('type');if(SITS[k]){sit=k;refresh()}}
}

/* ---------- actions ---------- */
const ACT={
  back,
  settings(){sheet(`<h3>설정</h3><p class="desc">보기 편한 방식으로 바꿔보세요.</p>
    <button class="opt" data-act="toggleLarge"><span style="flex:1"><b>큰 글씨로 보기</b><small>화면 글자를 더 크게 키워요</small></span><span class="switch ${S.large?'on':''}"></span></button>
    <button class="opt" data-act="install"><span style="flex:1"><b>홈 화면에 앱 추가</b><small>아이콘으로 바로 실행하는 방법</small></span>${I.chev}</button>
    <button class="btn green" data-act="closeSheet" style="margin-top:6px">닫기</button>`)},
  closeSheet,
  toggleLarge(){S.large=!S.large;save();applyLarge();document.querySelectorAll('.switch').forEach(s=>s.classList.toggle('on',S.large));toast(S.large?'큰 글씨로 바꿨어요':'기본 글씨로 바꿨어요');if(!$('#scrim'))refresh()},
  install(){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.finally(()=>{deferredPrompt=null});return}
    if(isStandalone()){toast('이미 앱으로 실행 중이에요');return}
    sheet(`<h3>홈 화면에 앱 추가</h3><p class="desc">한 번만 추가해두면 앱처럼 아이콘을 눌러 바로 실행할 수 있어요.</p>
    <div class="opt"><span><b>아이폰 (Safari)</b><small>아래쪽 공유 버튼 → ‘홈 화면에 추가’를 눌러주세요.</small></span></div>
    <div class="opt"><span><b>안드로이드 (Chrome)</b><small>오른쪽 위 ⋮ 메뉴 → ‘홈 화면에 추가’를 눌러주세요.</small></span></div>
    <button class="btn green" data-act="closeSheet">확인</button>`)},
  campaign(){sheet(`<img src="${IMG.campaign}" alt="" style="width:100%;border-radius:16px;margin-bottom:14px"><h3>함께 만드는 따뜻한 길</h3><p class="desc">길을 잃은 어르신을 만났을 때, 잠시 멈춰 말을 건네는 것만으로도 큰 도움이 돼요. 온길 도우미가 되어 이웃의 안전한 귀가를 함께 지켜주세요.</p><button class="btn green" data-act="joinCampaign">캠페인 참여하기</button>`)},
  joinCampaign(){closeSheet();vib();toast('캠페인에 참여해주셔서 고마워요! 💚')},
  about(){sheet(`<div class="brand" style="margin-bottom:12px"><img src="${IMG.logo}" alt=""><span>온길</span></div><p class="desc">온길은 ‘따뜻한 길’이라는 뜻이에요. 길을 잃은 치매 어르신을 발견한 이웃이 QR 하나로 보호자와 바로 연결되고, 어르신이 안전하게 집으로 돌아갈 수 있도록 돕는 연결 서비스입니다.</p><p class="desc" style="font-size:.78rem">※ 이 앱은 체험용 시제품으로, 실제 전화·문자·위치 전송은 이루어지지 않아요.</p><button class="btn green" data-act="closeSheet">확인</button>`)},
  call(){closeSheet();callScreen(guardian(),S.reg?S.reg.relation+' 보호자':'등록된 보호자')},
  tel(el){const n=el.dataset.num,nm=el.dataset.name;closeSheet();callScreen(nm,`${n} · 체험용 연결`)},
  shareLoc(){closeSheet();sheet(`<h3>현재 위치 공유</h3><p class="desc">어르신의 현재 위치를 보호자 ${esc(curElder?curElder.g:guardian())}님에게 보내고, 집으로 가는 길을 안내해 드릴게요.</p>
    <div class="opt" style="pointer-events:none" id="locbox">${I.pin}<span><b id="locname">현재 위치 확인 중…</b><small id="locsub">위치 권한을 허용하면 실제 위치로 확인해요</small></span></div>
    <button class="btn green" data-act="doShare">${I.share}위치 보내고 길 안내 시작</button><button class="btn ghost" data-act="closeSheet" style="margin-top:10px">취소</button>`,()=>locate())},
  doShare(){closeSheet();vib([30,40,30]);addNotif('n_pin','어르신 위치가 공유되었습니다.',lastLoc||'서울 서대문구 연희동 일대 (데모)','route');toast('보호자에게 위치를 보냈어요');nav.i=0;nav.prev=null;setTimeout(()=>go('route'),350)},
  places(){closeSheet();sheet(`<h3>가까운 도움처</h3><p class="desc">현재 위치에서 가까운 순서예요.</p>
    ${PLACES.slice().sort((a,b)=>a.m-b.m).slice(0,4).map(p=>`<button class="opt" ${p.tel?`data-act="tel" data-num="${p.tel}" data-name="${p.n}"`:`data-act="demoCall" data-name="${p.n}"`}>${I.bldg}<span style="flex:1"><b>${p.n}</b><small>도보 ${p.w}분 · ${p.dist}</small></span>${I.phone}</button>`).join('')}
    <button class="btn green" data-go="map">${I.pin}안심 지도에서 보기</button>`)},
  agency(){sheet(`<h3>기관 연결</h3><p class="desc">상황에 맞는 기관에 연결해 드릴게요.</p>
    <button class="opt" data-act="tel" data-num="1899-9988" data-name="치매상담콜센터">${I.phone}<span style="flex:1"><b>치매상담콜센터</b><small>1899-9988 · 24시간</small></span></button>
    <button class="opt" data-act="tel" data-num="112" data-name="경찰 (실종 신고)">${I.shieldS}<span style="flex:1"><b>경찰 실종 신고</b><small>112</small></span></button>
    <button class="opt" data-act="toEmergency">${I.warn}<span style="flex:1"><b>긴급 도움 요청</b><small>보호자에게 긴급 알림 보내기</small></span></button>`)},
  toEmergency(){go('emergency')},
  nextGuide(){advanceNav(true)},
  endRoute(){sheet(`<h3>길 안내를 끝낼까요?</h3><p class="desc">안내를 끝내도 보호자에게 공유한 위치는 유지돼요.</p><button class="btn green" data-act="doEnd">안내 종료</button><button class="btn ghost" data-act="closeSheet" style="margin-top:10px">계속 안내받기</button>`)},
  doEnd(){closeSheet();stopNav();nav.i=0;nav.prev=null;toast('길 안내를 종료했어요');back()},
  async shareRoute(){const data={title:'온길 경로 안내',text:'어르신이 온길 안내에 따라 집으로 이동 중이에요.'};
    try{if(navigator.share){await navigator.share(data);return}}catch(e){if(e.name==='AbortError')return}
    sheet(`<h3>경로 공유하기</h3><p class="desc">공유할 방법을 선택하세요.</p>${['카카오톡','문자 메시지','보호자에게 보내기'].map(x=>`<button class="opt" data-act="sharedTo" data-to="${x}">${I.share}<span><b>${x}</b></span></button>`).join('')}`)},
  sharedTo(el){closeSheet();toast(`${el.dataset.to}(으)로 경로를 공유했어요`)},
  readAll(){S.notifs.forEach(n=>n.read=true);save();refresh();toast('모든 알림을 읽었어요')},
  notice(){sheet(`<h3>서비스 이용 안내</h3><p class="desc">온길 QR 스티커는 가까운 치매안심센터에서 무료로 받을 수 있어요. 스티커를 받은 뒤 보호자 등록을 마치면, 어르신이 발견되었을 때 바로 연락을 받을 수 있습니다.</p><button class="btn green" data-act="closeSheet">확인</button>`)},
  moreSit(){sheet(`<h3>이럴 땐 바로 요청하세요</h3><p class="desc">아래 상황 중 하나라도 해당되면 망설이지 말고 긴급 도움을 요청하세요.</p>
    ${[...SITS.map(s=>[s[1],s[2]]),['의식이 흐릴 때','불러도 반응이 약하거나 말이 어눌할 때'],['추위·더위에 노출','오랜 시간 밖에 있어 몸이 차갑거나 뜨거울 때'],['낯선 사람과 함께','어르신이 불안해하거나 위험해 보일 때']].map(s=>`<div class="opt"><span><b>${s[0]}</b><small>${s[1]}</small></span></div>`).join('')}
    <button class="btn red" data-act="sos">${I.warn}긴급 도움 요청하기</button>`)},
  sos(){closeSheet();const label=sit!=null?SITS[sit][1]:'긴급 상황';
    sheet(`<h3 style="color:var(--red)">긴급 도움을 요청할까요?</h3><p class="desc">보호자 ${esc(guardian())}님에게 <b>${label}</b> 알림과 현재 위치를 바로 보내요.</p>
    <button class="btn red" data-act="sosGo">${I.warn}요청 보내기</button><button class="btn ghost" data-act="closeSheet" style="margin-top:10px">취소</button>`)},
  sosGo(){closeSheet();sosFlow()},
  foundDetail(){sheet(`<h3>상세 정보</h3><div class="elder"><span class="avatar">김</span><div><b>김순자 어르신 (82세)</b><p class="small muted" style="margin:4px 0 0">보호자: ${esc(guardian())}님</p></div></div>
    <div class="card summary" style="box-shadow:none;border:1px solid var(--line);margin:0 0 14px"><div><span>발견 일시</span><b>2024.05.20 14:35</b></div><div><span>인계 일시</span><b>2024.05.20 15:10</b></div><div><span>인계 장소</span><b>역삼1동 주민센터</b></div><div><span>어르신 상태</span><b>건강 양호</b></div></div>
    <button class="btn green" data-act="thanks">발견자에게 감사 인사 보내기</button>`)},
  thanks(){closeSheet();vib();toast('김온길님에게 감사 인사를 보냈어요 💚')},
  scan(){scanFlow()},
  noScan(){sheet(`<h3>스캔이 안 될 때</h3><p class="desc">QR 아래에 적힌 8자리 번호를 입력해도 보호자와 연결할 수 있어요.</p>
    <div class="search"><input id="qcode" inputmode="numeric" maxlength="8" placeholder="예) 12345678"><button class="btn orange" style="width:auto;padding:0 18px;height:48px" data-act="manualCode">확인</button></div>
    <div class="opt" style="pointer-events:none"><span><b>이렇게 해보세요</b><small>· 밝은 곳으로 이동해요<br>· QR의 구김을 펴고 15~20cm 거리에서 비춰요<br>· 카메라 렌즈를 한 번 닦아요</small></span></div>
    <button class="btn ghost" data-act="agency">기관에 도움 요청하기</button>`,d=>setTimeout(()=>d.querySelector('#qcode').focus(),300))},
  manualCode(){const v=$('#qcode').value.trim();if(!/^\d{8}$/.test(v)){toast('QR 아래 숫자 8자리를 입력해주세요');$('#qcode').focus();return}closeSheet();elderResult(v.slice(-3))},
  ask(){sheet(`<h3>1:1 문의하기</h3><p class="desc">문의 내용을 남겨주시면 평일 09:00~18:00에 답변드려요.</p><textarea id="askt" rows="5" style="width:100%;border:1.5px solid var(--line);border-radius:12px;padding:12px;font:inherit;resize:none;outline:none;margin-bottom:12px" placeholder="궁금한 점을 적어주세요."></textarea><button class="btn green" data-act="askSend">문의 보내기</button>`)},
  askSend(){const t=$('#askt');if(!t.value.trim()){toast('문의 내용을 적어주세요');t.focus();return}closeSheet();toast('문의를 보냈어요. 곧 답변드릴게요.')},
  reset(){sheet(`<h3>체험 데이터를 초기화할까요?</h3><p class="desc">등록한 보호자 정보와 알림 읽음 상태가 처음으로 돌아가요.</p><button class="btn red" data-act="doReset">초기화</button><button class="btn ghost" data-act="closeSheet" style="margin-top:10px">취소</button>`)},
  doReset(){closeSheet();S=structuredClone(DEF);save();applyLarge();R={name:'',birth:'',gender:'남성',phone:'',code:'',relation:'',address:'',sent:false,verified:false,expected:'',left:0,editing:false};clearInterval(regTimer);render('home','fade');toast('처음 상태로 초기화했어요')},
  /* register */
  editReg(){R=Object.assign(R,S.reg,{sent:false,verified:true,code:'',editing:true});refresh()},
  sendCode(){const p=$('#f-phone').value.replace(/\D/g,'');R.phone=p;
    if(!/^01\d{8,9}$/.test(p)){mark('f-phone');toast('휴대폰 번호를 010으로 시작하는 숫자로 입력해주세요');return}
    R.sent=true;R.expected=String(Math.floor(100000+Math.random()*900000));R.left=179;R.code='';
    clearInterval(regTimer);regTimer=setInterval(()=>{R.left--;const t=$('#timer span');if(t)t.textContent=fmt(Math.max(0,R.left));if(R.left<=0){clearInterval(regTimer);if(current==='register')refresh()}},1000);
    refresh();setTimeout(()=>{const c=$('#f-code');c&&c.focus()},50);
    toast(`[체험용] 인증번호는 <b>${R.expected}</b> 입니다`,6000)},
  addr(){sheet(`<h3>주소 검색</h3><div class="search"><input id="aq" placeholder="동 이름이나 도로명으로 검색"></div><div id="alist"></div>`,d=>{
    const A=['서울특별시 서대문구 연희로 123','서울특별시 서대문구 연희맛로 17','서울특별시 성동구 왕십리로 222','서울특별시 강남구 테헤란로 123','충청북도 충주시 중앙로 45','충청북도 충주시 연수동 1234','경기도 성남시 분당구 정자일로 95','부산광역시 해운대구 해운대로 570'];
    const q=d.querySelector('#aq'),l=d.querySelector('#alist');
    const draw=()=>{const k=q.value.trim();const r=A.filter(a=>!k||a.includes(k));l.innerHTML=r.length?r.map(a=>`<button class="opt" data-pick="${a}">${I.pin}<span><b>${a}</b></span></button>`).join(''):'<p class="empty">검색 결과가 없어요. 다른 단어로 찾아보세요.</p>'};
    q.addEventListener('input',draw);draw();setTimeout(()=>q.focus(),300);
    l.addEventListener('click',e=>{const b=e.target.closest('[data-pick]');if(!b)return;sheet(`<h3>상세 주소</h3><p class="desc">${b.dataset.pick}</p><div class="search"><input id="ad" placeholder="동·호수 등 상세 주소 (선택)"></div><button class="btn green" data-act="addrOk" data-base="${b.dataset.pick}">이 주소로 등록</button>`,d2=>setTimeout(()=>d2.querySelector('#ad').focus(),300))});
  })},
  addrOk(el){const d=$('#ad').value.trim();R.address=el.dataset.base+(d?' '+d:'');closeSheet();refresh()},
  submitReg(){
    readForm();
    const checks=[['f-name',R.name.trim().length>=2,'이름을 2글자 이상 입력해주세요'],
      ['f-birth',validBirth(R.birth),'생년월일을 YYYY.MM.DD 형식으로 입력해주세요'],
      ['f-phone',/^01\d{8,9}$/.test(R.phone),'휴대폰 번호를 확인해주세요'],
      ['f-code',R.verified,'휴대폰 인증을 먼저 완료해주세요'],
      ['f-rel',!!R.relation,'어르신과의 관계를 선택해주세요'],
      ['f-addr',!!R.address,'주소 검색으로 주소를 입력해주세요']];
    const bad=checks.find(c=>!c[1]);
    if(bad){mark(bad[0]);toast(bad[2]);vib(60);return}
    clearInterval(regTimer);
    S.reg={name:R.name.trim(),birth:R.birth,gender:R.gender,phone:R.phone,relation:R.relation,address:R.address};save();
    R.editing=false;vib([30,50,30]);
    const v=$('.screen .progress');if(v)v.outerHTML=progressBar(3);
    setTimeout(()=>{refresh();$('.screen').scrollTop=0;toast('보호자 등록을 완료했어요')},450);
  },
};
function validBirth(b){const m=/^(\d{4})\.(\d{2})\.(\d{2})$/.exec(b);if(!m)return false;const d=new Date(+m[1],m[2]-1,+m[3]);return d.getMonth()==m[2]-1&&m[1]>1900&&d<new Date()}
function mark(id){const e=document.getElementById(id);if(!e)return;e.classList.add('err');e.scrollIntoView({block:'center',behavior:'smooth'});if(!e.disabled&&!e.readOnly)setTimeout(()=>e.focus(),300);e.addEventListener('input',()=>e.classList.remove('err'),{once:true});e.addEventListener('change',()=>e.classList.remove('err'),{once:true})}
function readForm(){document.querySelectorAll('[data-f]').forEach(i=>{if(i.dataset.f!=='code')R[i.dataset.f]=i.value})}
function bindRegister(){
  const v=$('#view');
  v.querySelectorAll('[data-f]').forEach(inp=>inp.addEventListener('input',()=>{
    const f=inp.dataset.f;
    if(f==='birth'){let d=inp.value.replace(/\D/g,'').slice(0,8);inp.value=d.length>6?`${d.slice(0,4)}.${d.slice(4,6)}.${d.slice(6)}`:d.length>4?`${d.slice(0,4)}.${d.slice(4)}`:d}
    if(f==='phone'||f==='code')inp.value=inp.value.replace(/\D/g,'');
    R[f]=inp.value;
    if(f==='code'&&inp.value.length===6){
      if(R.left<=0){toast('인증 시간이 지났어요. 인증번호를 다시 받아주세요');return}
      if(inp.value===R.expected){R.verified=true;clearInterval(regTimer);readForm();vib();refresh();toast('본인 인증을 완료했어요')}
      else{inp.classList.add('err');vib(60);toast('인증번호가 맞지 않아요. 다시 확인해주세요')}
    }
  }));
  v.querySelectorAll('select[data-f]').forEach(s=>s.addEventListener('change',()=>R.relation=s.value));
}

/* notifications */
function addNotif(img,t,d,goTo){const now=new Date();const p=n=>String(n).padStart(2,'0');
  S.notifs.unshift({id:Date.now(),img,t,d,time:`${now.getFullYear()}.${p(now.getMonth()+1)}.${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}`,go:goTo,read:false});save()}

/* nav simulation */
function navPos(i){return GUIDE[i].a==='home'?PATH[PATH.length-1]:(i===0?PATH[0]:PATH[GUIDE[i-1].p])}
function startNav(){stopNav();const target=navPos(nav.i);nav.timer=setTimeout(()=>{const me=$('#me');if(me){me.style.left=target[0]+'%';me.style.top=target[1]+'%'}nav.prev=target},60);if(GUIDE[nav.i].a!=='home')nav.auto=setInterval(()=>advanceNav(false),9000)}
function stopNav(){clearTimeout(nav.timer);clearInterval(nav.auto)}
function advanceNav(){if(nav.i>=GUIDE.length-1)return;nav.i++;vib(15);refresh();if(GUIDE[nav.i].a==='home'){toast('집에 도착했어요!');addNotif('n_heart','어르신이 집에 도착했습니다.','온길 경로 안내 완료','found')}}

/* call */
function callScreen(name,sub){
  let sec=0,t;
  full('call',`<div class="grow"></div><div class="big-av">${esc(name).slice(0,1)}</div><h2>${esc(name)}</h2><p id="cst">${esc(sub)} · 연결 중…</p><div class="grow"></div><p class="small" style="opacity:.7">체험용 화면이에요. 실제 전화는 걸리지 않아요.</p><button class="hang" data-act="hang" aria-label="통화 종료">${sv('<path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z"/>',2,'#fff',34)}</button>`,()=>{
    const c=setTimeout(()=>{vib([40,60,40]);t=setInterval(()=>{sec++;const e=$('#cst');e&&(e.textContent=`통화 중 ${fmt(sec)}`)},1000)},2200);
    fullCleanup=()=>{clearTimeout(c);clearInterval(t)};
  });
}
ACT.hang=()=>{closeFull();toast('통화를 종료했어요')};

/* sos */
function sosFlow(){
  let n=5,t;
  full('sos',`<div class="grow"></div><div class="ring">${sv('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.1"/>',2.2,'#fff',64)}</div><div class="count" id="cnt">5</div><h2>긴급 요청을 보내는 중</h2><p>잠시 후 보호자에게 알림과 위치가 전송돼요.</p><div class="grow"></div><button class="btn ghost" style="max-width:360px" data-act="sosCancel">요청 취소</button>`,()=>{
    t=setInterval(()=>{n--;vib(30);const c=$('#cnt');c&&(c.textContent=n);if(n<=0){clearInterval(t);sosSent()}},1000);
    fullCleanup=()=>clearInterval(t);
  });
}
ACT.sosCancel=()=>{closeFull();toast('긴급 요청을 취소했어요')};
function sosSent(){
  const label=sit!=null?SITS[sit][1]:'긴급 상황';
  addNotif('n_heart',`긴급 도움 요청이 전송되었습니다.`,`${label} · 현재 위치 함께 전송`,'emergency');
  fullCleanup=null;vib([80,60,80]);
  full('sos',`<div class="grow"></div><div class="check" style="width:96px;height:96px;border-radius:50%;background:#fff;display:grid;place-items:center;animation:pop .4s">${sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>',3,'#D63A33',48)}</div><h2 style="margin-top:22px">요청을 보냈어요</h2><p>보호자 ${esc(guardian())}님에게<br>${label} 알림과 현재 위치를 보냈어요.</p><div class="grow"></div><div class="stack" style="width:100%;max-width:360px"><button class="btn ghost" data-act="sosCall">${I.phone}보호자에게 전화하기</button><button class="btn" style="background:rgba(255,255,255,.18)" data-act="sos119">119에 전화하기</button><button class="btn" style="background:transparent" data-act="sosClose">닫기</button></div>`);
}
ACT.sos119=()=>{closeFull();callScreen('119 종합상황실','119 · 체험용 연결')};
ACT.sosCall=()=>{closeFull();ACT.call()};
ACT.sosClose=()=>{closeFull();refresh()};

/* scanner */
function scanFlow(){
  let stream=null,t1,t2;
  full('scan',`<div class="fake"></div><video id="cam" playsinline muted autoplay></video>
    <div class="top"><button class="tb-btn" data-act="scanClose" aria-label="닫기" style="color:#fff">${sv('<path d="M6 6l12 12M18 6L6 18"/>',2.4,'#fff',26)}</button><b>QR 스캔</b><span style="width:44px"></span></div>
    <div class="frame" id="frm"><i></i><i></i><i></i><i></i><span class="line"></span></div>
    <p class="msg" id="smsg">QR을 네모 칸 안에 맞춰주세요</p>
    <div class="bot"><button class="btn orange" data-act="scanNow" style="max-width:360px;margin:0 auto">체험용: 바로 인식하기</button></div>`,async d=>{
    fullCleanup=()=>{clearTimeout(t1);clearTimeout(t2);stream&&stream.getTracks().forEach(t=>t.stop())};
    try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});const v=d.querySelector('#cam');if(v){v.srcObject=stream}}catch(e){const m=d.querySelector('#smsg');m&&(m.textContent='카메라 없이 체험 모드로 인식할게요')}
    t1=setTimeout(()=>ACT.scanNow(),4200);
  });
}
ACT.scanClose=()=>closeFull();
ACT.scanNow=()=>{const f=$('#frm');if(!f)return;f.classList.add('hit');const l=f.querySelector('.line');l&&l.remove();$('#smsg').textContent='온길 QR을 찾았어요!';vib([30,40,30]);setTimeout(()=>{closeFull();elderResult('001')},800)};
/* 데모 어르신 데이터 (실제 개인정보 아님) */
const ELDERS={
  '001':{name:'김순자',age:82,g:'홍길동',rel:'아들',msg:'저는 기억이 잘 나지 않을 때가 있어요. 제 보호자에게 연락해 주시면 정말 고맙겠습니다.',note:'당뇨약 복용 중 · 천천히 말씀해 주세요'},
  '002':{name:'박영수',age:79,g:'박지현',rel:'딸',msg:'집에 가는 길을 잊어버렸어요. 딸에게 연락해 주세요.',note:'귀가 조금 어두우세요 · 크게 또박또박 말씀해 주세요'},
  '003':{name:'이말순',age:85,g:'최민호',rel:'손자',msg:'놀라지 마세요. 제 가족에게 연락 부탁드려요.',note:'무릎이 불편하세요 · 앉아서 기다릴 곳을 안내해 주세요'}};
function elderOf(id){const e=ELDERS[String(id).padStart(3,'0').slice(-3)];if(!e)return null;
  if(id==='001'&&S.reg)return Object.assign({},e,{g:S.reg.name,rel:S.reg.relation});return e}
let curElder=null;
function elderResult(id='001',fromQR){
  const e=elderOf(id);
  if(!e){sheet(`<h3>등록 정보를 찾을 수 없어요</h3><p class="desc">QR 번호(${esc(id)})에 연결된 어르신 정보가 없어요. 어르신 곁에 머물러 주시고, 아래 기관에 연락해 주세요.</p>
    <button class="opt" data-act="tel" data-num="112" data-name="경찰 (실종 신고)">${I.shieldS}<span style="flex:1"><b>경찰 실종 신고</b><small>112</small></span></button>
    <button class="opt" data-act="tel" data-num="1899-9988" data-name="치매상담콜센터">${I.phone}<span style="flex:1"><b>치매상담콜센터</b><small>1899-9988 · 24시간</small></span></button>`);return}
  curElder=e;
  sheet(`${fromQR?'<span class="chip" style="background:var(--green-soft);color:var(--green-d);margin-bottom:10px">온길 QR 확인 완료</span>':''}<h3>도움이 필요한 어르신이에요</h3><p class="desc">천천히, 다정하게 말을 건네주세요.</p>
  <div class="elder"><span class="avatar">${e.name[0]}</span><div><b style="font-size:1.05rem">${e.name} 어르신 (${e.age}세)</b><p class="small muted" style="margin:4px 0 0">보호자: ${esc(e.g)}님 (${esc(e.rel)})</p></div></div>
  <div class="quote"><b>도움 요청 문구</b>“${e.msg}”</div>
  <div class="opt" style="pointer-events:none;background:var(--orange-soft);border-color:transparent">${I.info}<span><b>함께 알아두세요</b><small>${e.note}</small></span></div>
  <div class="stack"><button class="btn orange" data-act="callElderG">${I.phone}보호자에게 바로 연락</button><button class="btn green" data-act="shareLoc">${I.pin}현재 위치 공유</button><button class="btn ghost" data-act="closeSheet">발견자 안내 계속 보기</button></div>`);
  addNotif('n_heart','발견 제보가 접수되었습니다.',`${e.name} 어르신 · QR 스캔으로 연결`,'found');
}
ACT.callElderG=()=>{const e=curElder||ELDERS['001'];closeSheet();callScreen(e.g,`${e.name} 어르신의 ${e.rel}`)};

/* ---------- 전시용 안전장치: 실제 전화·문자 연결 차단 ---------- */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="tel:"],a[href^="sms:"]');
  if(a){e.preventDefault();e.stopImmediatePropagation();callScreen(a.textContent.trim()||'연결','체험용 연결');}
},true);

/* ---------- event delegation ---------- */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-go],[data-act],[data-tab],[data-notif],[data-gender],[data-sit]');
  if(!el)return;
  if(el.dataset.tab){tab(el.dataset.tab);return}
  if(el.dataset.go){go(el.dataset.go);return}
  if(el.dataset.notif){const n=S.notifs.find(x=>x.id==el.dataset.notif);n.read=true;save();if(n.go==='notice'){refresh();ACT.notice()}else{if(n.go==='route'){nav.i=0;nav.prev=null}go(n.go)}return}
  if(el.dataset.gender){R.gender=el.dataset.gender;readForm();refresh();return}
  if(el.dataset.sit){const i=+el.dataset.sit;sit=sit===i?null:i;refresh();if(sit!=null)toast(`‘${SITS[i][1]}’ 상황으로 요청해요`);return}
  const a=ACT[el.dataset.act];if(a){e.preventDefault&&el.tagName!=='A'&&e.preventDefault();a(el)}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#full'))closeFull();else closeSheet()}});



/* ---------- edge swipe back (Galaxy style) ---------- */
(function(){
  const EDGE=32, TRIGGER=72, MAX=96;
  const app=$('#app'), bk=$('#bk');
  let g=null;
  const canBack=()=>!!($('#full')||$('#scrim')||idx>0||current!=='home');
  function start(x,y,id){
    const r=app.getBoundingClientRect();
    const lx=x-r.left, side=lx<=EDGE?'l':(r.right-x<=EDGE?'r':null);
    if(!side||!canBack())return;
    g={side,x0:x,y0:y,id,ready:false,locked:false,top:r.top};
    bk.className='bk '+side;bk.style.top=(y-r.top)+'px';bk.style.width='0px';bk.style.opacity='0';
  }
  function move(x,y,e){
    if(!g)return;
    const dx=g.side==='l'?x-g.x0:g.x0-x, dy=Math.abs(y-g.y0);
    if(!g.locked){ if(dy>28&&dy>Math.abs(dx)*1.5){g=null;hide();return} if(dx>8)g.locked=true; else return }
    e&&e.cancelable&&e.preventDefault();
    const d=Math.max(0,Math.min(MAX,dx*0.55));
    bk.style.width=d+'px';bk.style.opacity=Math.min(1,d/40);bk.style.top=(y-g.top)+'px';
    const ready=dx*0.55>=TRIGGER*0.55&&dx>=TRIGGER;
    if(ready!==g.ready){g.ready=ready;bk.classList.toggle('ready',ready);if(ready)vib(12)}
  }
  function end(){
    if(!g)return;const go=g.ready&&g.locked;g=null;hide();
    if(!go)return;
    if($('#full')){ if($('#cnt'))ACT.sosCancel(); else closeFull(); return }
    if($('#scrim')){closeSheet();return}
    back();
  }
  function hide(){bk.classList.add('anim');bk.style.width='0px';bk.style.opacity='0';setTimeout(()=>bk.classList.remove('anim','ready'),220)}
  app.addEventListener('touchstart',e=>{if(e.touches.length===1){const t=e.touches[0];start(t.clientX,t.clientY,'t')}},{passive:true});
  app.addEventListener('touchmove',e=>{if(g&&g.id==='t'){const t=e.touches[0];move(t.clientX,t.clientY,e)}},{passive:false});
  app.addEventListener('touchend',()=>{if(g&&g.id==='t')end()});
  app.addEventListener('touchcancel',()=>{if(g){g=null;hide()}});
  /* mouse, for trying on a computer */
  app.addEventListener('mousedown',e=>{if(e.button===0){start(e.clientX,e.clientY,'m');if(g)e.preventDefault()}});
  window.addEventListener('mousemove',e=>{if(g&&g.id==='m')move(e.clientX,e.clientY,e)});
  window.addEventListener('mouseup',()=>{if(g&&g.id==='m')end()});
})();


/* ---------- 안심 지도 (/map) ---------- */
const PLACES=[
  {n:'연희동 주민센터',type:'주민센터',dist:'180m',m:180,w:3,x:7,y:47,tel:null,open:'평일 09:00~18:00'},
  {n:'연희119안전센터',type:'안전센터',dist:'420m',m:420,w:6,x:33,y:11,tel:'119',open:'24시간'},
  {n:'서대문구 치매안심센터',type:'치매안심센터',dist:'1.1km',m:1100,w:14,x:58,y:28,tel:null,open:'평일 09:00~18:00'},
  {n:'창천동 주민센터',type:'주민센터',dist:'1.2km',m:1200,w:15,x:89,y:44,tel:null,open:'평일 09:00~18:00'},
  {n:'신촌지구대',type:'경찰',dist:'1.3km',m:1300,w:17,x:74,y:84,tel:'112',open:'24시간'}];
const PTYPES=['전체','치매안심센터','주민센터','안전센터','경찰'];
let mapFilter='전체',mapSel=null;
SCREENS.map=()=>{
  const list=PLACES.map((p,i)=>({...p,i})).filter(p=>mapFilter==='전체'||p.type===mapFilter);
  return `${topbar('안심 지도')}
  <p class="lead">어르신 가까이에 있는<br>안전한 도움처를 확인하세요.</p>
  <div class="chips" role="tablist">${PTYPES.map(c=>`<button class="fchip ${mapFilter===c?'on':''}" data-mfilter="${c}" role="tab" aria-selected="${mapFilter===c}">${c}</button>`).join('')}</div>
  <div class="map"><img src="${IMG.map}" alt="주변 도움처 지도"><span class="me" style="left:12.6%;top:28%"></span>
    ${list.map(p=>`<button class="mpin ${mapSel===p.i?'on':''}" style="left:${p.x}%;top:${p.y}%" data-mpin="${p.i}" aria-label="${p.n}"><span>${p.i+1}</span></button>`).join('')}</div>
  <div class="card menu">${list.map(p=>`<div class="mi place ${mapSel===p.i?'sel':''}" data-mpin="${p.i}">
      <span class="ic num">${p.i+1}</span><span style="flex:1;min-width:0"><b>${p.n}</b><small>${p.type} · 도보 ${p.w}분 · ${p.dist} · ${p.open}</small></span>
      <span class="pact"><button data-act="${p.tel?'tel':'demoCall'}" data-num="${p.tel||''}" data-name="${p.n}" aria-label="${p.n} 전화">${I.phone}</button><button data-act="guideTo" data-name="${p.n}" aria-label="${p.n} 길 안내">${I.pin}</button></span></div>`).join('')||'<p class="empty">이 분류의 도움처가 근처에 없어요.</p>'}</div>
  <div class="note"><img src="${IMG.safe_route}" alt=""><div><b>안심 지도 안내</b><p>표시된 기관은 어르신을 잠시 보호하거나<br>보호자 연결을 도와줄 수 있어요. (데모 정보)</p></div></div>
  <div class="pad"><button class="btn green" data-act="guideTo" data-name="집">${I.home}집으로 가는 길 안내</button></div>`;
};
function bindMap(){}
ACT.guideTo=el=>{nav.i=0;nav.prev=null;toast(el.dataset.name==='집'?'집으로 가는 안전한 길을 안내해요':`${el.dataset.name}까지 안내를 시작해요`);go('route')};
ACT.demoCall=el=>{closeSheet();callScreen(el.dataset.name,'데모 기관 번호')};

/* ---------- 치매예방 프로그램 (/program) ---------- */
const PROGRAMS=[
  {id:'p1',t:'기억력 쑥쑥 교실',where:'서대문구 치매안심센터',when:'매주 월·수 10:00',tag:'인지 훈련',c:'var(--green-soft)',tc:'var(--green-d)'},
  {id:'p2',t:'함께 걷는 온길 산책',where:'안산 자락길 입구',when:'매주 화·목 09:30',tag:'신체 활동',c:'var(--orange-soft)',tc:'var(--orange-d)'},
  {id:'p3',t:'추억 그리기 미술 치료',where:'연희동 주민센터 2층',when:'매주 금 14:00',tag:'정서 지원',c:'#E6EEF6',tc:'var(--blue)'},
  {id:'p4',t:'어르신 노래 교실',where:'창천동 주민센터',when:'매주 토 11:00',tag:'사회 활동',c:'var(--beige)',tc:'var(--ink)'}];
SCREENS.program=()=>`${topbar('치매예방 프로그램')}
  <div class="pad"><h2 class="ptitle">매일 조금씩,<br>함께 지키는 기억</h2><p class="small muted" style="margin:6px 0 14px">가까운 곳의 치매예방 프로그램에 참여해보세요.</p></div>
  <section class="brainbox"><div><span class="chip">오늘의 두뇌 체조</span><b>숫자 기억하기</b><p>화면의 숫자를 3초 동안 보고<br>똑같이 입력해 보세요.</p>${S.brain?`<small>최고 기록 ${S.brain}단계</small>`:''}</div><button class="btn orange" data-act="startGame">시작하기</button></section>
  <div class="sec-h"><b>우리 동네 프로그램</b><span class="small muted">데모 일정</span></div>
  <div class="plist">${PROGRAMS.map(p=>{const on=!!S.programs[p.id];return `<div class="card prog">
    <span class="chip" style="background:${p.c};color:${p.tc}">${p.tag}</span><b>${p.t}</b>
    <p>${I.pin.replace('width="24" height="24"','width="15" height="15"')}${p.where}</p><p>${I.clock}${p.when}</p>
    <button class="btn ${on?'ghost-green':'green'}" data-prog="${p.id}">${on?'✓ 신청 완료 · 취소하기':'신청하기'}</button></div>`}).join('')}</div>`;
let game=null;
function stopGame(){if(game){clearTimeout(game.t);clearInterval(game.iv);game=null}}
ACT.startGame=()=>{stopGame();game={lv:1};gameRound()};
function gameRound(){
  const len=game.lv+2, num=Array.from({length:len},()=>Math.floor(Math.random()*10)).join('');game.num=num;
  let s=3;
  sheet(`<h3>${game.lv}단계 · 숫자를 기억해 주세요</h3><p class="desc">숫자는 <b id="gs">3</b>초 뒤에 사라져요.</p><div class="gnum">${num.split('').join(' ')}</div>`);
  game.iv=setInterval(()=>{s--;const e=$('#gs');e&&(e.textContent=s);if(s<=0){clearInterval(game.iv);gameAsk()}},1000);
}
function gameAsk(){
  if(!game)return;
  sheet(`<h3>방금 본 숫자를 입력해 주세요</h3><p class="desc">${game.num.length}자리 숫자예요.</p><div class="search"><input id="ga" inputmode="numeric" maxlength="${game.num.length}" placeholder="숫자 입력" style="font-size:1.4rem;text-align:center;letter-spacing:.3em"></div><button class="btn orange" data-act="gameCheck">확인</button>`,d=>setTimeout(()=>d.querySelector('#ga').focus(),250));
}
ACT.gameCheck=()=>{
  if(!game)return;const v=$('#ga').value.trim();
  if(v===game.num){vib([20,40,20]);const lv=game.lv;if(!S.brain||lv>S.brain){S.brain=lv;save()}
    sheet(`<div class="done" style="padding:6px 0"><div class="check">${I.check}</div><h2>정답이에요!</h2><p class="muted small">${lv}단계를 통과했어요.</p></div><div class="stack"><button class="btn orange" data-act="gameNext">${lv+1}단계 도전하기</button><button class="btn ghost" data-act="gameEnd">그만하기</button></div>`)}
  else{vib(60);sheet(`<h3>아쉬워요, 다시 해볼까요?</h3><p class="desc">정답은 <b>${game.num}</b>였어요. 천천히 소리 내어 읽으면 더 잘 기억돼요.</p><div class="stack"><button class="btn orange" data-act="startGame">처음부터 다시</button><button class="btn ghost" data-act="gameEnd">그만하기</button></div>`)}
};
ACT.gameNext=()=>{game.lv++;gameRound()};
ACT.gameEnd=()=>{stopGame();closeSheet();refresh()};

/* ---------- 접근성 설정 (/settings) ---------- */
SCREENS.settings=()=>`${topbar('접근성 설정',{right:''})}
  <p class="pad muted small" style="margin:4px 0 0">보기 편하고 쓰기 쉬운 방식으로 바꿔보세요.</p>
  <div class="card menu">
    <button class="mi" data-act="toggleLarge" role="switch" aria-checked="${!!S.large}"><span class="ic" style="background:var(--beige)">${I.text}</span><span><b>큰 글씨로 보기</b><small>화면 글자를 더 크게 키워요</small></span><span class="switch ${S.large?'on':''}"></span></button>
    <button class="mi" data-act="toggleVibe" role="switch" aria-checked="${S.vibe!==false}"><span class="ic" style="background:var(--beige)">${I.vibe}</span><span><b>진동으로 알려주기</b><small>버튼을 누르거나 알림이 오면 진동해요</small></span><span class="switch ${S.vibe!==false?'on':''}"></span></button>
  </div>
  <div class="card preview"><small class="muted">미리보기</small><b>홍길동님, 온길과 함께해요!</b><p>따뜻한 귀가를 돕는 연결 서비스예요.</p></div>
  <div class="card menu">
    <button class="mi" data-act="install"><span class="ic" style="background:var(--beige)">${I.plus}</span><span><b>홈 화면에 앱 추가</b><small>${isStandalone()?'지금 앱으로 실행 중이에요':'아이콘을 눌러 바로 실행해요'}</small></span><span class="chev">${I.chev}</span></button>
    <button class="mi" data-act="about"><span class="ic" style="background:var(--beige)">${I.info}</span><span><b>온길 소개</b><small>버전 1.0.4 · 전화 연결 차단됨</small></span><span class="chev">${I.chev}</span></button>
    <button class="mi" data-act="reset"><span class="ic" style="background:var(--beige)">${I.close}</span><span><b>체험 데이터 초기화</b><small>등록 정보와 알림을 처음 상태로</small></span></button>
  </div>`;
ACT.toggleVibe=()=>{S.vibe=S.vibe===false;save();refresh();vib(30);toast(S.vibe?'진동을 켰어요':'진동을 껐어요')};

/* ---------- 위치 (권한 허용 시 실제 위치, 아니면 데모 위치) ---------- */
let lastLoc=null;
function locate(){
  const nm=()=>$('#locname'),sb=()=>$('#locsub');
  const demo=msg=>{lastLoc='서울 서대문구 연희동 일대 (데모)';nm()&&(nm().textContent='서울 서대문구 연희동 일대');sb()&&(sb().textContent=msg)};
  if(!('geolocation' in navigator)||!window.isSecureContext){demo('데모 위치를 사용해요');return}
  navigator.geolocation.getCurrentPosition(p=>{
    const {latitude:la,longitude:lo,accuracy:ac}=p.coords;
    lastLoc=`위도 ${la.toFixed(4)}, 경도 ${lo.toFixed(4)}`;
    nm()&&(nm().textContent='현재 위치를 확인했어요');sb()&&(sb().textContent=`${lastLoc} · 정확도 약 ${Math.round(ac)}m`);
  },()=>demo('위치 권한이 없어 데모 위치를 사용해요'),{enableHighAccuracy:true,timeout:7000,maximumAge:60000});
}

/* ---------- 앱 설치 · 실행 ---------- */
let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
function isStandalone(){try{return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}catch(e){return false}}

document.addEventListener('click',e=>{
  const f=e.target.closest('[data-mfilter]');if(f){mapFilter=f.dataset.mfilter;mapSel=null;refresh();return}
  const pr=e.target.closest('[data-prog]');if(pr){const id=pr.dataset.prog,p=PROGRAMS.find(x=>x.id===id);
    if(S.programs[id]){delete S.programs[id];save();refresh();toast(`‘${p.t}’ 신청을 취소했어요`)}
    else{S.programs[id]=true;save();vib([20,40,20]);refresh();toast(`‘${p.t}’ 신청을 완료했어요`)}return}
  const mp=e.target.closest('[data-mpin]');if(mp&&!e.target.closest('.pact')){const i=+mp.dataset.mpin;mapSel=mapSel===i?null:i;refresh();
    if(mapSel!=null){const row=document.querySelector(`.place[data-mpin="${i}"]`);row&&row.scrollIntoView({block:'nearest',behavior:'smooth'})}}
});

function boot(){
  const name=screenOf(location.pathname),q=location.search;
  idx=0;curURL='/';
  try{history.replaceState({i:0},'','/')}catch(e){}
  render('home','fade');
  if(name!=='home'){ /* QR로 특정 기능에 바로 들어와도 뒤로 가기는 온길 홈으로 */
    idx=1;curURL=PATHS[name]+q;
    try{history.pushState({i:1},'',curURL)}catch(e){}
    render(name,'fade');
  }
  const sp=document.getElementById('splash');
  const done=()=>{if(sp){sp.classList.add('out');setTimeout(()=>sp.remove(),350)}enter(name,new URLSearchParams(q))};
  const wait=Math.max(0,700-(performance.now()-(window.__t0||0)));
  setTimeout(done,wait);
  if('serviceWorker' in navigator&&(location.protocol==='https:'||['localhost','127.0.0.1'].includes(location.hostname))){
    window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'}).then(r=>r.update()).catch(()=>{}));
    let reloaded=false;
    navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloaded)return;reloaded=true;location.reload()});
  }
}
boot();
