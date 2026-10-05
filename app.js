
let PART1=[],PART2=[],PART3=[],ALLP1P2=[];
const BYID={};
function norm(o,part){const tag=part==='p1'?'P1':part==='p2'?'P2':'LW';return{q:o.n,t:o.q,a:o.A,b:o.B,c:o.C,ans:o.answer,img:o.imageDesc,icon:o.icon||null,info:o.info||null,id:part+'-'+o.n,part:tag};}
function whyHtml(q){return q.info?`<span class="fb-why">💡 ${esc(q.info)}</span>`:'';}
const PICS={"p1-1":"assets/signs/q1.png","p1-8":"assets/signs/q8.png","p1-15":"assets/signs/q15.png","p1-22":"assets/signs/q22.png","p1-24":"assets/signs/q24.png","p1-28":"assets/signs/q28.png","p1-29":"assets/signs/q29.png","p1-38":"assets/signs/q38.png","p1-45":"assets/signs/q45.png","p1-52":"assets/signs/q52.png","p1-59":"assets/signs/q59.png","p2-3":"assets/signs/p2-q3.png","p2-6":"assets/signs/p2-q6.png","p2-9":"assets/signs/p2-q9.png","p2-12":"assets/signs/p2-q12.png","p2-15":"assets/signs/p2-q15.png","p2-18":"assets/signs/p2-q18.png","p2-22":"assets/signs/p2-q22.png","p2-26":"assets/signs/p2-q26.png","p2-29":"assets/signs/p2-q29.png","p2-32":"assets/signs/p2-q32.png","p2-36":"assets/signs/p2-q36.png","p2-40":"assets/signs/p2-q40.png","p2-43":"assets/signs/p2-q43.png","p2-47":"assets/signs/p2-q47.png","p2-50":"assets/signs/p2-q50.png","p2-54":"assets/signs/p2-q54.png","p2-57":"assets/signs/p2-q57.png","p2-60":"assets/signs/p2-q60.png"};
function picFor(q){return PICS[q.id]||null;}
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
function pool(){return bank==='p1'?PART1:bank==='p2'?PART2:bank==='lw'?PART3:ALLP1P2;}
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
    const [r1,r2,r3]=await Promise.all([fetch('data/part1.json'),fetch('data/part2.json'),fetch('data/laws.json')]);
    if(!r1.ok||!r2.ok||!r3.ok)throw new Error('http');
    const [d1,d2,d3]=await Promise.all([r1.json(),r2.json(),r3.json()]);
    PART1=d1.map(o=>norm(o,'p1'));PART2=d2.map(o=>norm(o,'p2'));PART3=d3.map(o=>norm(o,'lw'));
    ALLP1P2=[...PART1,...PART2,...PART3];ALLP1P2.forEach(x=>BYID[x.id]=x);
    migrateV1();
  }catch(e){stage.innerHTML='<div class="card">Could not load question files in <b>data/</b>. Open this app over http (e.g. Vercel, or <b>python3 -m http.server</b>) instead of file://.</div>';return;}
  // deep links like reviewer.html?mode=exam&len=60&bank=all
  let freshSession=false;
  try{
    const sp=new URLSearchParams(location.search);
    const b=sp.get('bank');if(['p1','p2','lw','all'].includes(b))bank=b;
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

