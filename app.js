
let PART1=[],PART2=[],PART3=[],PART4=[],ALLP1P2=[];
const SG_OLD=['p1-1','p1-8','p1-15','p1-22','p1-24','p1-28','p1-29','p1-38','p1-45','p1-52','p1-59','p2-3','p2-6','p2-9','p2-12','p2-15','p2-18','p2-22','p2-26','p2-29','p2-32','p2-36','p2-40','p2-43','p2-47','p2-50','p2-54','p2-57','p2-60'];
const BYID={};
function norm(o,part){const tag=part==='p1'?'P1':part==='p2'?'P2':part==='lw'?'LW':'SG';return{q:o.n,t:o.q,a:o.A,b:o.B,c:o.C,ans:o.answer,img:o.imageDesc,icon:o.icon||null,svg:o.svg||null,info:o.info||null,id:part+'-'+o.n,part:tag};}
function whyHtml(q){return q.info?`<span class="fb-why">💡 ${esc(q.info)}</span>`:'';}
const PICS={"p1-1":"assets/signs/q1.png","p1-8":"assets/signs/q8.png","p1-15":"assets/signs/q15.png","p1-22":"assets/signs/q22.png","p1-24":"assets/signs/q24.png","p1-28":"assets/signs/q28.png","p1-29":"assets/signs/q29.png","p1-38":"assets/signs/q38.png","p1-45":"assets/signs/q45.png","p1-52":"assets/signs/q52.png","p1-59":"assets/signs/q59.png","p2-3":"assets/signs/p2-q3.png","p2-6":"assets/signs/p2-q6.png","p2-9":"assets/signs/p2-q9.png","p2-12":"assets/signs/p2-q12.png","p2-15":"assets/signs/p2-q15.png","p2-18":"assets/signs/p2-q18.png","p2-22":"assets/signs/p2-q22.png","p2-26":"assets/signs/p2-q26.png","p2-29":"assets/signs/p2-q29.png","p2-32":"assets/signs/p2-q32.png","p2-36":"assets/signs/p2-q36.png","p2-40":"assets/signs/p2-q40.png","p2-43":"assets/signs/p2-q43.png","p2-47":"assets/signs/p2-q47.png","p2-50":"assets/signs/p2-q50.png","p2-54":"assets/signs/p2-q54.png","p2-57":"assets/signs/p2-q57.png","p2-60":"assets/signs/p2-q60.png"};
function picFor(q){return PICS[q.id]||null;}
const SVGS={
s01:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><path d="M68 50H32M32 50l11-11M32 50l11 11" stroke="#111" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s02:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><path d="M32 50h36M68 50l-11-11M68 50l-11 11" stroke="#111" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s03:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><path d="M32 57h13l12-9v24l-12-9H32z" fill="#111"/><path d="M62 49a9 9 0 010 12M67 44a16 16 0 010 22" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s04:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><g stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"><circle cx="35" cy="66" r="8"/><circle cx="65" cy="66" r="8"/><path d="M35 66l8-19h10l12 19M43 47h-9l-4-7"/></g><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s05:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><text x="50" y="65" text-anchor="middle" font-size="34" font-weight="bold" fill="#111" font-family="Arial,sans-serif">30</text></svg>',
s06:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><g stroke="#111" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M27 60V40h25v20M52 60V46h9l7 7v7"/><circle cx="37" cy="66" r="5"/><circle cx="60" cy="66" r="5"/></g><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s07:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><text x="50" y="66" text-anchor="middle" font-size="42" font-weight="bold" fill="#111" font-family="Arial,sans-serif">P</text><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s08:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#0b46c4"/><path d="M62 30L42 66M42 66l-2-12M42 66l12-2" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s09:'<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="10" fill="#0b46c4"/><circle cx="50" cy="30" r="6" fill="#fff"/><path d="M50 38v16l-8 18M50 54l9 6 3 12M50 44l-9 7M50 44l9 8M30 78h40M30 84h40" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
s10:'<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="10" fill="#0b46c4"/><g stroke="#fff" stroke-width="4" fill="none"><rect x="32" y="30" width="36" height="30" rx="4"/><path d="M32 42h36"/></g><circle cx="41" cy="66" r="3.5" fill="#fff"/><circle cx="59" cy="66" r="3.5" fill="#fff"/></svg>',
s11:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><circle cx="50" cy="34" r="6" fill="#111"/><path d="M50 42v16l-8 18M50 58l9 6 3 12M50 48l-9 7M50 48l9 8" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s12:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><g stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"><circle cx="32" cy="68" r="7"/><circle cx="62" cy="68" r="7"/><path d="M32 68l11-13M50 55h-6l-3-9M52 62h20V50H54"/></g><path d="M22 78L78 22" stroke="#d6261c" stroke-width="9"/></svg>',
s13:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#0b46c4"/><g stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"><circle cx="35" cy="66" r="8"/><circle cx="65" cy="66" r="8"/><path d="M35 66l8-19h10l12 19M43 47h-9l-4-7"/></g></svg>',
s14:'<svg viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="10" fill="#0b46c4"/><text x="50" y="68" text-anchor="middle" font-size="46" font-weight="bold" fill="#fff" font-family="Arial,sans-serif">H</text></svg>',
s15:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M34 70L46 42M66 70L54 42M38 70Q50 60 62 70" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/></svg>',
s16:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><g stroke="#111" stroke-width="4" fill="none"><rect x="38" y="50" width="24" height="18" rx="2"/><path d="M38 58h24M42 50l8-8 8 8"/></g><circle cx="44" cy="72" r="3" fill="#111"/><circle cx="56" cy="72" r="3" fill="#111"/></svg>'
};
Object.assign(SVGS,{
s17:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M41 70V36M41 36l-7 9M41 36l7 9M59 36v34M59 70l-7-9M59 70l7-9" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s18:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M38 72L46 34M62 72L54 34" stroke="#111" stroke-width="5" stroke-linecap="round"/></svg>',
s19:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M30 70L58 40" stroke="#111" stroke-width="5" stroke-linecap="round"/><circle cx="64" cy="48" r="4" fill="#111"/><circle cx="72" cy="58" r="5" fill="#111"/><circle cx="56" cy="60" r="3" fill="#111"/></svg>',
s20:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><rect x="34" y="54" width="24" height="11" fill="#111"/><path d="M38 65v8M54 65v8" stroke="#111" stroke-width="3.5"/><rect x="58" y="48" width="9" height="11" fill="#111"/><path d="M60 48l-3-5M65 48l3-5" stroke="#111" stroke-width="2.5"/></svg>',
s21:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M28 68Q50 40 72 68M24 72h52" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/></svg>',
s22:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M30 40L70 64M70 64l-12-2M70 64l-4-11" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s23:'<svg viewBox="0 0 100 70"><rect x="6" y="8" width="88" height="54" rx="6" fill="#f7c948" stroke="#111" stroke-width="3"/><path d="M32 18l16 17-16 17M54 18l16 17-16 17" stroke="#111" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s24:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M56 72V34M56 34l-7 9M56 34l7 9M32 72Q32 56 50 52" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s25:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M64 50a13 13 0 10-3 12" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M52 66l-3-9 9 1" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s26:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><circle cx="50" cy="34" r="6" fill="#111"/><path d="M50 42v16l-8 18M50 58l9 6 3 12M50 48l-9 7M50 48l9 8" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
s27:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M50 72V54M50 54L40 40M40 40l-2 10M40 40l10-2M50 54l10-14M60 40l2 10M60 40l-10-2" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s28:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><text x="50" y="60" text-anchor="middle" font-size="21" font-weight="bold" fill="#111" font-family="Arial,sans-serif">3.5m</text></svg>',
s29:'<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#fff" stroke="#d6261c" stroke-width="10"/><text x="50" y="63" text-anchor="middle" font-size="30" font-weight="bold" fill="#111" font-family="Arial,sans-serif">10t</text></svg>',
s30:'<svg viewBox="0 0 100 92"><path d="M50 8 92 84H8Z" fill="#fff" stroke="#d6261c" stroke-width="9" stroke-linejoin="round"/><path d="M64 70V54q0-14-14-14t-14 14v14" stroke="#111" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M36 68l-7-6M36 68l7-6" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
s31:'<svg viewBox="0 0 120 70"><rect x="4" y="4" width="112" height="62" rx="8" fill="#d7e800" stroke="#111" stroke-width="3"/><text x="60" y="31" text-anchor="middle" font-size="16" font-weight="bold" fill="#111" font-family="Arial,sans-serif">SCHOOL</text><text x="60" y="53" text-anchor="middle" font-size="14" font-weight="bold" fill="#111" font-family="Arial,sans-serif">SLOW DOWN</text></svg>'
});
const ICONS={
book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h13"/><path d="M9 7h7"/></svg>',
speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4.5-5.5"/><circle cx="12" cy="16" r="1.4" fill="currentColor"/></svg>',
ban:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13"/></svg>',
warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.2" r="0.6" fill="currentColor"/></svg>',
car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16v-3.5L5.2 8h10.6l2.7 4.5H21V16"/><path d="M3 16h18"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/></svg>',
train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="3" width="12" height="13" rx="2.5"/><path d="M6 10h12"/><circle cx="9.5" cy="13.5" r="0.8" fill="currentColor"/><circle cx="14.5" cy="13.5" r="0.8" fill="currentColor"/><path d="M9 19l-1.5 2M15 19l1.5 2"/></svg>',
license:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8.5" cy="11.5" r="2"/><path d="M5.5 15.5c.6-1.4 1.7-2 3-2s2.4.6 3 2"/><path d="M14 10.5h4M14 13.5h4"/></svg>',
fine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="7" width="19" height="10" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v.01M18 14v.01" stroke-linecap="round"/></svg>',
helmet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15a8 8 0 0 1 16 0v1.5H4z"/><path d="M4 15h10"/><path d="M13 10.5h4.5"/></svg>',
seatbelt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M7 3l10 18"/><rect x="13.5" y="14.5" width="6" height="5" rx="1"/></svg>',
child:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="6.5" r="2.5"/><path d="M4.5 20v-4.5L9 13l4.5 2.5V20"/><circle cx="17" cy="10" r="1.8"/><path d="M14.5 20v-3.5L17 15l2.5 1.5V20"/></svg>',
phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="8" y="2.5" width="8" height="19" rx="2"/><path d="M11 18.5h2"/></svg>',
drink:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5h4"/><path d="M10.5 2.5v4L8.5 11v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9l-2-4.5v-4"/><path d="M8.5 14.5h7"/></svg>',
doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15.5h5"/></svg>'
};
function signHtml(q){
  const pic=picFor(q);
  if(pic) return `<div class="sign">${`<img src="${pic}" alt="Traffic sign ${q.part} Q${q.q}" loading="lazy">`}${q.img?`<span><b>Sign:</b> ${esc(q.img)}</span>`:''}</div>`;
  if(q.svg&&SVGS[q.svg]) return `<div class="sign"><span class="sgpic">${SVGS[q.svg]}</span></div>`;
  if(q.icon&&ICONS[q.icon]) return `<div class="sign"><span class="lwic">${ICONS[q.icon]}</span></div>`;
  if(q.img) return `<div class="sign"><span><b>Sign:</b> ${esc(q.img)}</span></div>`;
  return '';
}

let bank=localStorage.getItem('lto-bank')||'p1';
let qlen=localStorage.getItem('lto-len')||'all';
let sess=[];
let answers={};
try{answers=JSON.parse(localStorage.getItem('lto-answers-v2')||'{}');}catch(e){answers={}; }
function migrateV1(){
// migrate v1 (numeric keys = part 1)
try{
  if(Object.keys(answers).length===0){
    const old=JSON.parse(localStorage.getItem('lto-a1-answers')||'{}');
    for(const k in old){
      if(/^\d+$/.test(k)&&BYID['p1-'+k]) answers['p1-'+k]=old[k];
      else if(/^\d+_pick$/.test(k)){const n=k.replace('_pick','');if(BYID['p1-'+n])answers['p1-'+n+'_pick']=old[k];}
    }
  }
}catch(e){}
}let idx=0, mistakesOnly=false, finished=false;

const stage=document.getElementById('stage'), listView=document.getElementById('listView'),
grid=document.getElementById('grid'), searchEl=document.getElementById('search'),
modeEl=document.getElementById('mode'), viewEl=document.getElementById('view'),
bankEl=document.getElementById('bank'), lenEl=document.getElementById('qlen');

function save(){localStorage.setItem('lto-answers-v2',JSON.stringify(answers));}
function persistSess(){localStorage.setItem('lto-sess-v2',JSON.stringify({bank,qlen,ids:sess}));localStorage.setItem('lto-bank',bank);localStorage.setItem('lto-len',qlen);}
function mode(){return modeEl.value;}
function view(){return viewEl.value;}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function txt(q,L){return L==='A'?q.a:L==='B'?q.b:q.c;}
function pool(){return bank==='p1'?PART1:bank==='p2'?PART2:bank==='lw'?PART3:bank==='sg'?[...SG_OLD.map(id=>BYID[id]).filter(Boolean),...PART4]:ALLP1P2;}
function wantN(){const p=pool();if(qlen==='all')return p.length;return Math.min(parseInt(qlen,10),p.length);}
function shuffled(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function buildSession(){const p=pool(),n=wantN();sess=(n>=p.length?p.map(x=>x.id):shuffled(p).slice(0,n).map(x=>x.id));idx=0;persistSess();}
function sessQs(){return sess.map(id=>BYID[id]).filter(Boolean);}
function filtered(){
  const s=searchEl.value.trim().toLowerCase();
  let arr=sessQs();
  if(mistakesOnly) arr=arr.filter(q=>answers[q.id]==='wrong');
  if(s) arr=arr.filter(q=>(q.part+' '+q.t+' '+q.a+' '+q.b+' '+q.c).toLowerCase().includes(s));
  return arr;
}
function score(){let c=0,t=0;for(const q of sessQs()){if(answers[q.id]){t++;if(answers[q.id]==='correct')c++;}}return{correct:c,total:t};}
function needPass(){return Math.ceil(sessQs().length*0.8);}

function currentList(){const f=filtered();if(!f.length)return[];if(idx>=f.length)idx=0;return f;}
function cur(){const f=currentList();return f[idx];}

function render(){
  const m=mode(), v=view();
  const blind=(m==='exam'&&!finished);
  if(blind&&mistakesOnly){mistakesOnly=false;document.getElementById('mistakesBtn').textContent='Mistakes only: OFF';}
  const f=filtered();
  document.getElementById('finishBtn').classList.toggle('hidden', m!=='exam'||finished);
  document.getElementById('mistakesBtn').classList.toggle('hidden', blind);
  const rb=document.getElementById('resultBox');
  const total=sessQs().length, need=needPass();
  if(m==='exam'&&finished){
    const {correct,total:t}=score();const pct=t?Math.round(correct/t*100):0;
    rb.innerHTML=`<div class="result"><b>${correct} / ${t} (${pct}%) ${correct>=need?'✅ PASSED':'❌ FAILED'}</b><div style="font-size:13px;color:#475569">Passing is 80% (${need}/${t}). Review below, or Reset/Retake.</div></div>`;
  } else if(m==='exam'&&!finished){
    rb.innerHTML=`<div class="result" style="border-color:#f59e0b">Exam mode — no hints. Answer all, then Finish. <b>${score().total}/${total}</b> answered.</div>`;
  } else rb.innerHTML='';
  if(v==='card'){stage.classList.remove('hidden');listView.classList.add('hidden');renderCard(f,m);}
  else{stage.classList.add('hidden');listView.classList.remove('hidden');renderList(f,m);}
  renderGrid(f);updateStats();
  document.getElementById('posLabel').textContent=f.length?`${Math.min(idx+1,f.length)} / ${f.length}`:'No match';
}

function choiceClass(q,L,m){
  const pick=answers[q.id+'_pick'], st=answers[q.id];
  if(m==='study') return L===q.ans?'choice correct':'choice';
  if(m==='exam'&&!finished) return pick===L?'choice selected':'choice';
  if((m==='practice')||(m==='exam'&&finished)){
    if(!st) return 'choice';
    if(L===q.ans) return 'choice correct';
    if(L===pick&&st==='wrong') return 'choice wrong';
    return 'choice';
  }
  return 'choice';
}

function feedbackHtml(q,m){
  const st=answers[q.id], pick=answers[q.id+'_pick'];
  const ansText=esc(txt(q,q.ans));
  if(m==='practice'&&st) return st==='correct'
    ? `<div class="feedback ok" role="status"><div class="fb-top"><span class="fb-icon">✓</span><span><span class="fb-title">Correct!</span><div class="fb-sub">Nice — you got ${q.part} Q${q.q} right.</div></span></div><span class="fb-ans">Answer: <b>[${q.ans}] ${ansText}</b></span>${whyHtml(q)}</div>`
    : `<div class="feedback no" role="alert"><div class="fb-top"><span class="fb-icon">✕</span><span><span class="fb-title">Wrong — you picked [${pick}]</span><div class="fb-sub">Correct answer is [${q.ans}].</div></span></div><span class="fb-ans">Answer: <b>[${q.ans}] ${ansText}</b></span>${whyHtml(q)}</div>`;
  if(m==='exam'&&finished&&st) return st==='correct'
    ? `<div class="feedback ok" role="status"><div class="fb-top"><span class="fb-icon">✓</span><span><span class="fb-title">Correct</span><div class="fb-sub">You picked [${pick}] on ${q.part} Q${q.q}.</div></span></div><span class="fb-ans">Answer: <b>[${q.ans}] ${ansText}</b></span>${whyHtml(q)}</div>`
    : `<div class="feedback no" role="alert"><div class="fb-top"><span class="fb-icon">✕</span><span><span class="fb-title">Wrong — you picked [${pick||'—'}]</span><div class="fb-sub">Correct answer is [${q.ans}].</div></span></div><span class="fb-ans">Answer: <b>[${q.ans}] ${ansText}</b></span>${whyHtml(q)}</div>`;
  if(m==='study') return `<div class="feedback info" role="note"><div class="fb-top"><span class="fb-icon">🔑</span><span><span class="fb-title">Answer: [${q.ans}]</span><div class="fb-sub">${ansText}</div></span></div>${whyHtml(q)}</div>`;
  return '';
}
function statusPill(q,m){
  const st=answers[q.id];
  if(m==='study') return `<span class="status key">Answer [${q.ans}]</span>`;
  if(m==='exam'&&!finished) return answers[q.id+'_pick']?`<span class="status key">Picked [${answers[q.id+'_pick']}]</span>`:`<span class="status idle">Unanswered</span>`;
  if(!st) return `<span class="status idle">Unanswered</span>`;
  return st==='correct'?`<span class="status ok">✓ Correct</span>`:`<span class="status no">✕ Wrong</span>`;
}
function whyLink(q,m){
  const st=answers[q.id];
  const show=(m==='practice'&&st)||m==='study'||(m==='exam'&&finished&&st);
  if(!show||!q.info)return'';
  return `<button class="why-link">💡 Why this answer? Tap to view the rule</button>`;
}
function openInfoModal(q){
  document.getElementById('imTitle').textContent=`${q.part} Q${q.q} — Answer [${q.ans}]`;
  document.getElementById('imAns').textContent=txt(q,q.ans);
  document.getElementById('imInfo').textContent=q.info||'';
  document.getElementById('infoModal').classList.remove('hidden');
}
function closeInfoModal(){document.getElementById('infoModal').classList.add('hidden');}

function renderCard(f,m){
  const q=cur();
  if(!q){stage.innerHTML=`<div class="card">No questions match. Clear search / mistakes filter.</div>`;return;}
  stage.innerHTML=`
  <div class="card">
    <div class="topline"><span class="qnum">${q.part} · Q${q.q}</span></div>
    <div class="qtext">${esc(q.t)}</div>
    ${signHtml(q)}
    <div class="choices">
      ${['A','B','C'].map(L=>`<button class="${choiceClass(q,L,m)}" data-id="${q.id}" data-l="${L}"><span class="letter">${L}</span><span>${esc(txt(q,L))}</span></button>`).join('')}
    </div>
    ${whyLink(q,m)}
  </div>`;
  stage.querySelectorAll('.choice').forEach(b=>b.onclick=()=>pick(b.dataset.id,b.dataset.l));
  const wb=stage.querySelector('.why-link');if(wb)wb.onclick=()=>openInfoModal(q);
}

function renderList(f,m){
  listView.innerHTML=f.map(q=>{
    return `<div class="card"><div class="topline"><span class="qnum">${q.part} · Q${q.q}</span>${statusPill(q,m)}</div>
    <div class="qtext" style="font-size:16px">${esc(q.t)}</div>
    ${signHtml(q)}
    ${feedbackHtml(q,m)}
    <div class="choices">${['A','B','C'].map(L=>`<button class="${choiceClass(q,L,m)}" data-id="${q.id}" data-l="${L}"><span class="letter">${L}</span><span>${esc(txt(q,L))}</span></button>`).join('')}</div></div>`;
  }).join('')||'<div class="card">No match.</div>';
  listView.querySelectorAll('.choice').forEach(b=>b.onclick=()=>{pick(b.dataset.id,b.dataset.l);});
}

function openJump(){document.getElementById('jumpModal').classList.remove('hidden');}
function closeJump(){document.getElementById('jumpModal').classList.add('hidden');}
function renderGrid(f){
  const blind=(mode()==='exam'&&!finished);
  grid.innerHTML='';
  f.forEach((q,i)=>{
    const st=answers[q.id];
    const cls=blind?(answers[q.id+'_pick']?'done':'skip'):(st==='correct'?'ok':st==='wrong'?'no':'skip');
    const b=document.createElement('button');
    b.className='dot '+(i===idx?'cur ':'')+cls;
    b.textContent=i+1;b.title=`${q.part} Q${q.q}`;
    b.onclick=()=>{idx=i;closeJump();render();if(view()==='card')window.scrollTo({top:0,behavior:'smooth'});};
    grid.appendChild(b);
  });
  const ms=document.getElementById('modalSub');
  if(ms) ms.textContent=f.length?`Question ${Math.min(idx+1,f.length)} of ${f.length} • green = correct, red = wrong`:'No match';
}

let toastTimer=null;
function showToast(msg,kind=''){
  const t=document.getElementById('toast');
  t.className='toast show '+kind; t.innerHTML=msg; t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{t.classList.remove('show');},2200);
}
function pick(qid,L){
  const q=BYID[qid];if(!q)return;
  if(mode()==='exam'&&finished)return;
  const wasRight=(L===q.ans);
  answers[qid+'_pick']=L;answers[qid]=(wasRight?'correct':'wrong');
  save();
  const m=mode();
  if(m==='practice') showToast(wasRight?`✓ Correct — [${q.ans}] ${esc(txt(q,q.ans))}`:`✕ Wrong — correct: [${q.ans}] ${esc(txt(q,q.ans))}`, wasRight?'ok':'no');
  else if(m==='study') showToast(`Answer: [${q.ans}] ${esc(txt(q,q.ans))}`,'key');
  render();
  const auto = view()==='card' && m!=='study';
  if(auto){
    const f=filtered();
    setTimeout(()=>{ if(idx<f.length-1){idx++;render();} }, m==='practice'?450:200);
  }
}
function updateStats(){
  const {correct,total}=score();
  const full=sessQs().length;
  const blind=(mode()==='exam'&&!finished);
  document.getElementById('sAnswered').textContent=`${total}/${full}`;
  document.getElementById('sCorrect').textContent=blind?'—':correct;
  document.getElementById('sAcc').textContent=(total&&!blind)?Math.round(correct/total*100)+'%':'—';
  document.getElementById('sLeft').textContent=full-total;
  document.getElementById('bar').style.width=(full?total/full*100:0)+'%';
  document.getElementById('tScore').textContent=blind?`${total} answered`:`${correct} / ${total} • #${cur()?(filtered().indexOf(cur())+1):'—'}`;
}

function goPrev(){const f=filtered();if(!f.length)return;idx=(idx-1+f.length)%f.length;render();}
function goNext(){const f=filtered();if(!f.length)return;idx=(idx+1)%f.length;render();}
document.getElementById('prevT').onclick=goPrev;
document.getElementById('nextT').onclick=goNext;

// generic confirm/info modal
let amResolve=null;
function showDialog({title='Confirm',msg='',okText='Confirm',cancelText='Cancel',hideCancel=false,danger=false}={}){
  const ov=document.getElementById('actionModal');
  document.getElementById('amTitle').textContent=title;
  document.getElementById('amMsg').textContent=msg;
  const ok=document.getElementById('amOk'), cancel=document.getElementById('amCancel');
  ok.textContent=okText; cancel.textContent=cancelText;
  ok.className='btn '+(danger?'btn-red':'btn-green');
  cancel.classList.toggle('hidden',hideCancel);
  ov.classList.remove('hidden');
  return new Promise(res=>{amResolve=res;});
}
function closeDialog(val){
  document.getElementById('actionModal').classList.add('hidden');
  if(amResolve){amResolve(val);amResolve=null;}
}
document.getElementById('amOk').onclick=()=>closeDialog(true);
document.getElementById('amCancel').onclick=()=>closeDialog(false);
document.getElementById('actionModal').addEventListener('click',e=>{if(e.target.id==='actionModal')closeDialog(false);});
function openResultModal(){
  const {correct,total}=score();const pct=total?Math.round(correct/total*100):0;
  const need=needPass();const pass=correct>=need;
  document.getElementById('rmScore').textContent=`${correct} / ${total} (${pct}%)`;
  document.getElementById('rmSub').textContent=pass?`✅ PASSED — you meet the 80% (${need}/${total}) mark.`:`❌ FAILED — you need 80% (${need}/${total}) to pass. Review below.`;
  document.getElementById('resultModal').classList.remove('hidden');
}
function closeResultModal(){document.getElementById('resultModal').classList.add('hidden');}
document.getElementById('rmReview').onclick=()=>{closeResultModal();window.scrollTo({top:0,behavior:'smooth'});};
document.getElementById('rmRetake').onclick=async()=>{
  closeResultModal();
  const ok=await showDialog({title:'Retake?',msg:'Clear all answers in this set and start over?',okText:'Retake',danger:true});
  if(ok){answers={};idx=0;finished=false;save();render();window.scrollTo({top:0,behavior:'smooth'});}
};
document.getElementById('resultModal').addEventListener('click',e=>{if(e.target.id==='resultModal')closeResultModal();});

document.getElementById('jumpBtn').onclick=openJump;
document.getElementById('closeModal').onclick=closeJump;
document.getElementById('jumpModal').addEventListener('click',e=>{if(e.target.id==='jumpModal')closeJump();});
document.getElementById('imClose').onclick=closeInfoModal;
document.getElementById('infoModal').addEventListener('click',e=>{if(e.target.id==='infoModal')closeInfoModal();});
document.getElementById('shuffleBtn').onclick=async()=>{
  const p=pool(), n=wantN();
  if(n<p.length){
    const ok=await showDialog({title:'New random set?',msg:`Draw a fresh random set of ${n} from ${p.length} questions? Your answers are kept.`,okText:'New set'});
    if(!ok)return;
    buildSession();
  } else {
    sess=shuffled(sess);idx=0;persistSess();
  }
  finished=false;render();
};
document.getElementById('resetBtn').onclick=async()=>{
  const ok=await showDialog({title:'Reset progress?',msg:'This will clear all answers and restart at the first question. This cannot be undone.',okText:'Reset all',danger:true});
  if(ok){answers={};idx=0;finished=false;save();render();}
};
document.getElementById('mistakesBtn').onclick=async e=>{
  if(!mistakesOnly){
    const wrongCount=sessQs().filter(q=>answers[q.id]==='wrong').length;
    if(wrongCount===0){await showDialog({title:'No mistakes yet',msg:'Answer some questions first — mistakes will show up here for focused review.',okText:'Got it',hideCancel:true});return;}
  }
  mistakesOnly=!mistakesOnly;idx=0;e.target.textContent=`Mistakes only: ${mistakesOnly?'ON':'OFF'}`;render();
};
bankEl.onchange=()=>{bank=bankEl.value;idx=0;finished=false;mistakesOnly=false;document.getElementById('mistakesBtn').textContent='Mistakes only: OFF';buildSession();render();};
lenEl.onchange=()=>{qlen=lenEl.value;idx=0;finished=false;buildSession();render();};
searchEl.oninput=()=>{idx=0;render();};
modeEl.onchange=()=>{finished=false;render();};
viewEl.onchange=render;
document.getElementById('finishBtn').onclick=async()=>{
  const {total}=score();const full=sessQs().length;
  if(total<full){
    const ok=await showDialog({title:'Finish?',msg:`You answered ${total}/${full}. Unanswered count as wrong. Finish anyway?`,okText:'Finish'});
    if(!ok)return;
  } else {
    const ok=await showDialog({title:'Submit?',msg:`All ${full} answered. Show your result now?`,okText:'Show result'});
    if(!ok)return;
  }
  finished=true;render();openResultModal();window.scrollTo({top:0,behavior:'smooth'});
};
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeJump();closeDialog(false);closeResultModal();closeInfoModal();return;}
  if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;
  if(!document.getElementById('jumpModal').classList.contains('hidden'))return;
  if(!document.getElementById('infoModal').classList.contains('hidden'))return;
  if(!document.getElementById('actionModal').classList.contains('hidden'))return;
  if(!document.getElementById('resultModal').classList.contains('hidden'))return;
  const f=filtered();if(!f.length)return;const q=cur();if(!q)return;
  if(e.key==='ArrowRight'){idx=(idx+1)%f.length;render();}
  else if(e.key==='ArrowLeft'){idx=(idx-1+f.length)%f.length;render();}
  else if(['a','A','1'].includes(e.key))pick(q.id,'A');
  else if(['b','B','2'].includes(e.key))pick(q.id,'B');
  else if(['c','C','3'].includes(e.key))pick(q.id,'C');
});

async function boot(){
  stage.innerHTML='<div class="card">Loading questions…</div>';
  try{
    const [r1,r2,r3,r4]=await Promise.all([fetch('data/part1.json'),fetch('data/part2.json'),fetch('data/laws.json'),fetch('data/signs.json')]);
    if(!r1.ok||!r2.ok||!r3.ok||!r4.ok)throw new Error('http');
    const [d1,d2,d3,d4]=await Promise.all([r1.json(),r2.json(),r3.json(),r4.json()]);
    PART1=d1.map(o=>norm(o,'p1'));PART2=d2.map(o=>norm(o,'p2'));PART3=d3.map(o=>norm(o,'lw'));PART4=d4.map(o=>norm(o,'sg'));
    ALLP1P2=[...PART1,...PART2,...PART3,...PART4];ALLP1P2.forEach(x=>BYID[x.id]=x);
    migrateV1();
  }catch(e){stage.innerHTML='<div class="card">Could not load question files in <b>data/</b>. Open this app over http (e.g. Vercel, or <b>python3 -m http.server</b>) instead of file://.</div>';return;}
  // deep links like reviewer.html?mode=exam&len=60&bank=all
  let freshSession=false;
  try{
    const sp=new URLSearchParams(location.search);
    const b=sp.get('bank');if(['p1','p2','lw','sg','all'].includes(b))bank=b;
    const l=sp.get('len');if(['all','40','60','100'].includes(l))qlen=l;
    const md=sp.get('mode');if(md&&['practice','exam','study'].includes(md))modeEl.value=md;
    const vw=sp.get('view');if(vw&&['card','list'].includes(vw))viewEl.value=vw;
    if(sp.has('bank')||sp.has('len'))freshSession=true;
  }catch(e){}
  bankEl.value=bank;lenEl.value=qlen;
  try{
    const s=JSON.parse(localStorage.getItem('lto-sess-v2')||'null');
    if(!freshSession&&s&&s.bank===bank&&s.qlen===qlen&&Array.isArray(s.ids)&&s.ids.length&&s.ids.every(id=>BYID[id])){sess=s.ids;}
    else buildSession();
  }catch(e){buildSession();}
  if(idx>=sess.length)idx=0;
  render();
}
boot();

