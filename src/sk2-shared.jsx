const {Button,TextLink,Lockup,Mark,ImageFrame,TextField,TextArea}=window.SaraKolataDesignSystem_4545a5;
const EU='var(--font-display)';

/* ── routes ──────────────────────────────────────────────────── */
const R={home:'#/',method:'#/karmic-recapitulation',retreat:'#/retreat-center',press:'#/speaking-press',
  about:'#/about',ladder:'#/work-with-sara',books:'#/books',stories:'#/stories',
  apply:'#/retreat-center/apply',alignment:'#/work-with-sara',booking:'#/speaking-press/booking',
  mediaKit:'#/speaking-press/media-kit',newsletter:'#/start-here'};

function useViewport(){
  const [w,setW]=React.useState(()=>window.innerWidth);
  React.useEffect(()=>{const f=()=>setW(window.innerWidth);window.addEventListener('resize',f,{passive:true});return()=>window.removeEventListener('resize',f);},[]);
  return w;
}

function Ph({children,d,style}){return <span className={'ph'+(d?' d':'')} style={style}>[{children}]</span>;}
function Photo({label,src,ratio='4 / 3',field='var(--indigo-soft)',radius,h,style,pos='center'}){
  const [failed,setFailed]=React.useState(false);
  if(src&&!failed)return <div style={{position:'relative',width:'100%',aspectRatio:h?undefined:ratio,height:h,borderRadius:radius,overflow:'hidden',background:field,...style}}><img src={src} alt={label} onError={()=>setFailed(true)} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:pos,display:'block'}}/></div>;
  return <div style={{position:'relative',width:'100%',...style}}>
    <ImageFrame ratio={h?'auto':ratio} field={field} radius={radius} style={h?{height:h}:undefined}/>
    <span className="ph d" style={{position:'absolute',left:16,bottom:16,maxWidth:'calc(100% - 32px)'}}>[PHOTO: {label}]</span>
  </div>;
}
function H({s=64,as='h2',c,i,children,style}){const T=as;return <T style={{margin:0,fontFamily:'var(--font-heading)',fontWeight:400,fontSize:Math.round(s*0.68),lineHeight:1.08,letterSpacing:'-0.02em',color:c,textWrap:'balance',...style}}>{children}</T>;}
function P({s=19,c='var(--fg2)',children,style}){return <p style={{margin:0,fontSize:s,fontWeight:300,lineHeight:1.7,maxWidth:'34em',color:c,textWrap:'pretty',...style}}>{children}</p>;}
function Num({n,style}){return <div style={{fontSize:13,fontWeight:500,letterSpacing:'0.14em',color:'var(--gold)',...style}}>{String(n).padStart(2,'0')}</div>;}
function Tagline({s=46,style}){return <div style={{fontFamily:'var(--font-accent)',fontSize:s,lineHeight:1,color:'var(--gold)',...style}}>Go to the root</div>;}
const TONES={quarry:{bg:'var(--bg)',fg:'var(--fg)'},indigo:{bg:'var(--raised)',fg:'var(--fg)'},tint:{bg:'var(--raised)',fg:'var(--fg)'},stage:{bg:'var(--bg)',fg:'var(--fg)'},sage:{bg:'var(--sage-band)',fg:'var(--obsidian)'}};
function Sec({tone='quarry',m,children,style,label,id}){const t=TONES[tone];return <section id={id} className={tone==='sage'?'sage-band':undefined} data-screen-label={label} style={{position:'relative',background:t.bg,color:t.fg,padding:m?'72px 24px':'120px 64px',display:'flex',flexDirection:'column',gap:m?36:56,...style}}>{children}</section>;}
function Rule({style}){return <div style={{height:1,background:'var(--hair)',...style}}></div>;}
function Arch({s=40,c='var(--gold)'}){return <svg width={s} height={s} viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M22 108 V56 A38 38 0 0 1 98 56 V108" stroke={c} strokeWidth="6"/><circle cx="60" cy="56" r="12" fill={c}/></svg>;}

function PlayBtn({s=72}){return <div aria-hidden="true" className="play" style={{width:s,height:s,borderRadius:'50%',border:'1px solid var(--fg)',background:'rgba(17,20,42,.55)',display:'flex',alignItems:'center',justifyContent:'center'}}><svg width={s*.26} height={s*.3} viewBox="0 0 22 26" fill="none" style={{marginLeft:s*.05}}><path d="M2 2l18 11L2 24z" fill="var(--fg)"/></svg></div>;}
function Poster({label='VIDEO: client testimonial',fill,play=72,field='var(--raised)',src,pos='center 30%',ratio='16 / 9'}){
  const [failed,setFailed]=React.useState(false);
  const img=src&&!failed;
  return <div style={{position:'relative',flex:fill?1:'none',minHeight:0,border:'1px solid var(--hair)',borderRadius:4,overflow:'hidden'}}>
    <ImageFrame ratio={fill?'auto':ratio} field={field} radius={0} style={fill?{height:'100%',minHeight:200}:undefined}/>
    {img&&<img className="poster-img" src={src} alt="" onError={()=>setFailed(true)} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:pos}}/>}
    {img&&<div style={{position:'absolute',inset:0,background:'rgba(17,20,42,.28)'}}></div>}
    <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}><PlayBtn s={play}/></div>
    {!img&&<span className="ph d" style={{position:'absolute',left:14,bottom:14,maxWidth:'calc(100% - 28px)'}}>[{label}]</span>}
  </div>;
}
function VCap({cap,title,ts=28}){return <div style={{display:'flex',flexDirection:'column',gap:10}}>
  <div style={{fontSize:14,fontWeight:500,letterSpacing:'0.04em',color:'var(--gold)'}}>{cap}</div>
  <div style={{fontFamily:EU,fontSize:ts,lineHeight:1.12,letterSpacing:ts>=32?'-0.02em':'-0.01em',color:'var(--fg)',textWrap:'balance'}}>{title}</div>
</div>;}
function VideoCard({cap,title,ts=28,wide,fill,play,label,field,src,pos,ratio,onOpen,style}){
  const btn={all:'unset',cursor:'pointer',display:wide?'grid':'flex',flexDirection:'column',gridTemplateColumns:wide?'minmax(0,1.8fr) minmax(0,1fr)':undefined,gap:wide?28:18,alignItems:wide?'end':undefined,boxSizing:'border-box',...style};
  return <button type="button" className="vcard" onClick={onOpen} aria-label={'Play: '+title} style={btn}>
    <Poster label={label} fill={fill} play={play} field={field} src={src} pos={pos} ratio={ratio}/>
    <VCap cap={cap} title={title} ts={ts}/>
  </button>;
}

const NAV=[['The Method',R.method],['About',R.about],['Retreat Center',R.retreat],['Online Courses',R.ladder],['Books',R.books],['Stories',R.stories],['Speaking',R.press]];
function Lang(){return <span style={{fontSize:14,fontWeight:500,whiteSpace:'nowrap'}}>EN <span style={{color:'var(--fg2)',fontWeight:300}}>/ ES</span></span>;}

function MobileMenu({onClose,active}){
  React.useEffect(()=>{
    const k=e=>{if(e.key==='Escape')onClose();};
    document.addEventListener('keydown',k);document.body.style.overflow='hidden';
    return()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';};
  },[]);
  return <div role="dialog" aria-modal="true" aria-label="Site menu" className="menu-in" style={{position:'fixed',inset:0,zIndex:20,background:'var(--bg)',color:'var(--fg)',display:'flex',flexDirection:'column',padding:'14px 24px 32px',overflowY:'auto'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
      <a href={R.home} onClick={onClose} aria-label="Sara Kolata, home" style={{display:'flex'}}><Lockup layout="horizontal" size="sm" tone="dark"/></a>
      <button onClick={onClose} aria-label="Close menu" style={{height:48,padding:'0 14px',display:'flex',alignItems:'center',gap:10,background:'transparent',border:'1px solid var(--fg)',borderRadius:2,fontFamily:'var(--font-body)',fontSize:15,fontWeight:500,color:'var(--fg)',cursor:'pointer'}}>Close<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4"/></svg></button>
    </div>
    <nav style={{display:'flex',flexDirection:'column',marginTop:40}}>
      {NAV.map(([n,h],i)=><a key={n} href={h} onClick={onClose} className="menu-in" aria-current={active===n?'page':undefined} style={{fontFamily:'var(--font-heading)',fontSize:34,lineHeight:1.2,padding:'14px 0',borderTop:'1px solid var(--hair)',color:active===n?'var(--gold)':'var(--fg)',textDecoration:'none',animationDelay:(60+i*30)+'ms'}}>{n}</a>)}
    </nav>
    <div style={{display:'flex',flexDirection:'column',gap:20,marginTop:32}}><Lang/><Button fullWidth href={R.apply} onClick={onClose}>Apply for a residency</Button></div>
  </div>;
}

function Header({m,active,over}){
  const w=useViewport();const compact=m||w<1240;
  const [open,setOpen]=React.useState(false);
  return <header style={{position:over?'absolute':'relative',top:0,left:0,right:0,zIndex:3,background:over?'transparent':'var(--bg)',borderBottom:'1px solid var(--hair)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:m?'14px 24px':'20px 64px',gap:24,color:'var(--fg)'}}>
    <a href={R.home} aria-label="Sara Kolata, home" style={{display:'flex'}}><Lockup layout="horizontal" size="sm" tone="dark"/></a>
    {compact?<div style={{display:'flex',alignItems:'center',gap:16}}>
      <Lang/>
      {!m&&<Button href={R.apply}>Apply for a residency</Button>}
      <button aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(true)} style={{height:48,padding:'0 14px',display:'flex',alignItems:'center',gap:10,background:'transparent',border:'1px solid var(--fg)',borderRadius:2,fontFamily:'var(--font-body)',fontSize:15,fontWeight:500,color:'var(--fg)',cursor:'pointer'}}><svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M0 1h18M0 9h18" stroke="currentColor" strokeWidth="1.4"/></svg>Menu</button>
    </div>:
    <div style={{display:'flex',alignItems:'center',gap:24}}>
      <nav style={{display:'flex',gap:22}}>{NAV.map(([n,h])=><a key={n} href={h} className="navl" aria-current={active===n?'page':undefined} style={{fontSize:15,fontWeight:500,color:'var(--fg)',whiteSpace:'nowrap'}}>{n}</a>)}</nav>
      <span style={{paddingLeft:22,borderLeft:'1px solid var(--hair)'}}><Lang/></span>
      <Button href={R.apply}>Apply for a residency</Button>
    </div>}
    {open&&<MobileMenu active={active} onClose={()=>setOpen(false)}/>}
  </header>;
}

const SOC={
  Instagram:<g><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/></g>,
  YouTube:<g><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></g>,
  Substack:<g><path d="M5 4h14M5 8h14M5 12h14v8l-7-4-7 4z"/></g>
};
const FOOT=[
  ['Work with Sara',[['Alignment call',R.alignment],['Phase One online',R.ladder],['The You Are God program',R.method+'/integration'],['The Peru Residency',R.retreat]]],
  ['Books',[['You Are God',R.books],['The Healing Trap',R.books],['Why You Got Sick',R.books],['Transmissions',R.newsletter]]],
  ['Speaking',[['Speaking and press',R.press],['Media kit',R.mediaKit],['Booking inquiry',R.booking]]],
  ['About',[['Her story',R.about],['Karmic Recapitulation',R.method],['Stories',R.stories],['Contact',R.booking]]]
];
function Footer({m}){
  const col=(t,items)=><div key={t} style={{display:'flex',flexDirection:'column',gap:12}}><div style={{fontSize:13,fontWeight:500,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)'}}>{t}</div>{items.map(([l,h])=><a key={l} href={h} style={{color:'var(--fg2)',textDecoration:'none',fontSize:15,fontWeight:300}}>{l}</a>)}</div>;
  return <footer data-screen-label="Footer" style={{background:'var(--bg)',color:'var(--fg)',borderTop:'1px solid var(--hair)',padding:m?'64px 24px 32px':'96px 64px 40px',display:'flex',flexDirection:'column',gap:m?48:72}}>
    <div className="dk" style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1.3fr) minmax(0,1fr)',gap:m?40:80}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}>
        <Lockup layout="horizontal" size="md" tone="dark"/>
        <Tagline s={40}/>
      </div>
      <form onSubmit={e=>e.preventDefault()} style={{display:'flex',flexDirection:'column',gap:10}}>
        <div style={{fontFamily:'var(--font-heading)',fontSize:24,lineHeight:1.2,marginBottom:6}}>Letters from Sara</div>
        <label htmlFor="nl-footer" style={{fontSize:15,fontWeight:500}}>Email address</label>
        <div style={{display:'flex',gap:8,flexDirection:m?'column':'row'}}>
          <input id="nl-footer" type="email" required autoComplete="email" style={{flex:1,height:48,padding:'0 16px',background:'transparent',border:'1px solid var(--border-on-dark)',borderRadius:2,color:'var(--fg)',fontFamily:'var(--font-body)',fontSize:17,fontWeight:300}}/>
          <Button variant="on-dark" type="submit">Subscribe</Button>
        </div>
      </form>
    </div>
    <div style={{display:'grid',gridTemplateColumns:m?'1fr 1fr':'repeat(4,minmax(0,1fr))',gap:m?32:40}}>
      {FOOT.map(([t,items])=>col(t,items))}
    </div>
    <div style={{display:'flex',flexDirection:m?'column':'row',gap:20,justifyContent:'space-between',alignItems:m?'flex-start':'center',borderTop:'1px solid var(--hair)',paddingTop:24}}>
      <div style={{display:'flex',gap:16}}>{Object.entries(SOC).map(([k,g])=><a key={k} href="#" aria-label={k} style={{color:'var(--fg)',display:'flex',width:44,height:44,alignItems:'center',justifyContent:'center',border:'1px solid var(--hair)',borderRadius:2}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">{g}</svg></a>)}</div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'8px 24px',fontSize:13,fontWeight:300,color:'var(--fg2)'}}><span>Sacred Valley, Peru</span><span>© 2026 Kolata Unlimited, registered in England and Wales no. 12641865</span><a href="#" style={{color:'inherit'}}>Privacy and terms</a></div>
    </div>
  </footer>;
}

/* Sample press wordmarks (fictional outlets, replace with real logos) */
const PRESS=[
  ['The Inner Root','var(--font-heading)',22,400,'-0.01em','none'],
  ['RISING','var(--font-body)',17,500,'0.32em','none'],
  ['Soul Matters','var(--font-accent)',30,400,'0','none'],
  ['THE HEALING HOUR','var(--font-body)',13,500,'0.2em','none'],
  ['Andes Review','var(--font-display)',24,400,'0','none'],
  ['Deep Work Radio','var(--font-heading)',19,400,'0.02em','italic']
];
function PressGrid({m}){
  return <div data-stagger style={{display:'grid',gridTemplateColumns:m?'1fr 1fr':'repeat(6,minmax(0,1fr))',borderTop:'1px solid var(--hair)',borderLeft:'1px solid var(--hair)'}}>
    {PRESS.map(([n,f,s,w,ls,st])=><div key={n} style={{height:m?88:112,padding:'0 12px',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',borderRight:'1px solid var(--hair)',borderBottom:'1px solid var(--hair)',color:'var(--fg2)',fontFamily:f,fontSize:m?Math.round(s*.85):s,fontWeight:w,letterSpacing:ls,fontStyle:st,lineHeight:1.1}}>{n}</div>)}
  </div>;
}

/* Typographic book cover, used until real cover art exists */
function BookCover({title,field,sub='Sara Kolata'}){
  return <div style={{position:'relative',aspectRatio:'2 / 3',background:field,borderRadius:4,overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'14% 12%',boxShadow:'inset 0 0 0 1px rgba(232,228,218,.12)'}}>
    <Arch s={22} c="var(--gold)"/>
    <div style={{fontFamily:'var(--font-heading)',fontSize:'clamp(13px, 1.4vw, 19px)',lineHeight:1.1,color:'var(--fg)'}}>{title}</div>
    <div style={{fontSize:9,fontWeight:500,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--fg2)'}}>{sub}</div>
  </div>;
}

function CTABand({m,title,body,children,tone='quarry',id}){
  return <Sec m={m} tone={tone} id={id} label="Closing call to action"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1.2fr) minmax(0,1fr)',gap:m?28:80,alignItems:'end'}}>
    <H s={m?44:72}>{title}</H>
    <div style={{display:'flex',flexDirection:'column',gap:28,alignItems:'flex-start'}}>{body&&<P>{body}</P>}<div style={{display:'flex',gap:12,flexWrap:'wrap',alignSelf:m?'stretch':undefined,flexDirection:m?'column':'row'}}>{children}</div></div>
  </div></Sec>;
}

Object.assign(window,{R,useViewport,EU,Ph,Photo,H,P,Num,Tagline,Sec,Rule,Arch,PlayBtn,Poster,VCap,VideoCard,Header,Footer,CTABand,PressGrid,BookCover});
