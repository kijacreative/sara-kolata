const PHASE_IL=['1-mother','2-father','3-ancestral','4-child','5-integration'];
const HOME_METHOD=[['Mother','The inner world.'],['Father','The outer world.'],['Ancestral','The root of the current.'],['Inner child','The return.'],['Integration','The You Are God program.']];
const HOME_RECOG=[['The insight is there. The change isn’t.','You can explain your patterns perfectly and still live inside them.'],['The breakthrough fades.','The retreat worked for three weeks. Then life moved back in.'],['Same story, different face.','New partner, new business, same ending.']];
const CURS=[['USD','$'],['GBP','£'],['EUR','€']];
const LADDER=[
  ['The book','You Are God, ','$30','The philosophy behind the work.','Buy the book',R.books],
  ['Alignment call','One hour, free, by application',null,'A conversation about where you are and what fits.','Apply for an alignment call',R.alignment],
  ['Phase One online','','$200','The mother ceremony, guided online.','See Phase One',R.method+'/phase-1'],
  ['You Are God','Five months, ','$5,500','The full method and integration.','See the program',R.method+'/integration'],
  ['The Peru Residency','Private, 7 to 10 days, from ','$5,000','The whole path, in person.','See the residency',R.retreat]
];
/* Sample conversions, replace with the prices Sara actually charges in each currency */
const FX={'$30':{GBP:'£24',EUR:'€28'},'$200':{GBP:'£160',EUR:'€185'},'$5,500':{GBP:'£4,400',EUR:'€5,100'},'$5,000':{GBP:'£4,000',EUR:'€4,650'}};
const priceOf=(cur,pre,usd)=>usd==null?pre:<span>{pre}{cur==='USD'?usd:FX[usd][cur]}</span>;

function CurrencyToggle({cur,set}){
  return <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
    <span style={{fontSize:15,fontWeight:500,color:'var(--fg2)'}}>Prices in</span>
    <div role="group" aria-label="Currency" style={{display:'flex'}}>
      {CURS.map(([c,s],i)=>{const on=c===cur;return <button key={c} type="button" aria-pressed={on} onClick={()=>set(c)} style={{height:44,padding:'0 18px',marginLeft:i?-1:0,border:'1px solid var(--fg)',borderRadius:i===0?'2px 0 0 2px':i===2?'0 2px 2px 0':0,background:on?'var(--fg)':'transparent',color:on?'var(--bg)':'var(--fg)',fontFamily:'var(--font-body)',fontSize:15,fontWeight:500,cursor:'pointer',whiteSpace:'nowrap'}}>{c} {s}</button>;})}
    </div>
  </div>;
}

function LadderSection({m,cur:init='USD',flush}){
  const [cur,setCur]=React.useState(init);
  const price=(p,u)=><div style={{fontSize:15,fontWeight:500,color:'var(--gold)'}}>{priceOf(cur,p,u)}</div>;
  return <Sec m={m} id="work-with-sara" label="Ways to work with Sara" style={flush?undefined:{paddingTop:0}}>
    {!flush&&<Rule style={{marginBottom:m?8:24}}/>}
    <div style={{display:'flex',flexDirection:'column',gap:m?20:28}}>
      <H s={m?48:72}>Every step prepares the next.</H>
      <CurrencyToggle cur={cur} set={setCur}/>
    </div>
    {m?<ol data-stagger style={{listStyle:'none',margin:0,padding:0}}>
      {LADDER.map(([t,p,u,d,l,h],i)=>{const top=i===4;return <li key={t} style={{borderTop:'1px solid '+(top?'var(--gold)':'var(--hair)'),background:top?'var(--raised)':'transparent',borderRadius:top?4:0,padding:top?'24px 20px':'24px 0',display:'grid',gridTemplateColumns:'36px 1fr',gap:12}}>
        <Num n={i+1} style={{paddingTop:8}}/>
        <div style={{display:'flex',flexDirection:'column',gap:8}}><H as="h3" s={32}>{t}</H>{price(p,u)}<div style={{fontSize:17,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{d}</div><div style={{fontSize:16,paddingTop:4}}><TextLink tone="dark" arrow href={h}>{l}</TextLink></div></div>
      </li>;})}
    </ol>:
    <ol data-stagger style={{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',gap:12,alignItems:'end'}}>
      {LADDER.map(([t,p,u,d,l,h],i)=>{const top=i===4;return <li key={t} style={{display:'flex',flexDirection:'column',background:top?'var(--raised)':'transparent',borderRadius:top?4:0}}>
        <div style={{display:'flex',flexDirection:'column',gap:10,padding:top?'28px 24px 24px':'0 12px 24px 0'}}>
          <H as="h3" s={34}>{t}</H>{price(p,u)}
          <div style={{fontSize:16,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{d}</div>
          <div style={{fontSize:16,paddingTop:4}}><TextLink tone="dark" arrow href={h}>{l}</TextLink></div>
        </div>
        <div style={{height:56+i*64,borderTop:'1px solid '+(top?'var(--gold)':'var(--fg)'),borderLeft:top?'none':'1px solid var(--hair)',borderRight:top?'none':'1px solid var(--hair)',padding:top?'16px 24px':16,boxSizing:'border-box'}}><Num n={i+1}/></div>
      </li>;})}
    </ol>}
  </Sec>;
}

/* Hero sky: static still underneath, live shader on top. The live sky runs longer than five seconds,
   so it gets a pause control (WCAG 2.2.2); it also comes to rest on its own after the sunset. */
function LiveSky({m}){
  const ref=React.useRef(null),ctl=React.useRef(null);
  const still=window.SK_SKY&&window.SK_SKY[m?'m':'d'];
  const [live,setLive]=React.useState(false);
  const [paused,setPaused]=React.useState(false);
  React.useEffect(()=>{
    if(!window.SK_SKY_LIVE||reducedMotion())return;
    const c=window.SK_SKY_LIVE(ref.current,m?'m':'d',setPaused);
    ctl.current=c;setPaused(false);setLive(true);
    return ()=>{c.stop();ctl.current=null;setLive(false);};
  },[m]);
  const toggle=()=>{const c=ctl.current;if(!c)return;paused?c.play():c.pause();};
  return <>
    {still&&<img src={still} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>}
    <canvas ref={ref} aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:live?1:0,transition:'opacity var(--dur-slow) var(--ease-settle)'}}/>
    {live&&<button type="button" className="sky-toggle" onClick={toggle} aria-label={paused?'Play the sky animation':'Pause the sky animation'} title={paused?'Play the sky':'Pause the sky'}
      style={{position:'absolute',zIndex:2,right:m?24:64,...(m?{top:96}:{bottom:88}),width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',padding:0,background:'rgba(17,20,42,.35)',border:'1px solid var(--border-on-dark)',borderRadius:2,color:'var(--fg)',cursor:'pointer'}}>
      {paused?<svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true"><path d="M2 1.5l11 6.5-11 6.5z"/></svg>
             :<svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true"><rect x="2" y="1.5" width="3" height="13"/><rect x="9" y="1.5" width="3" height="13"/></svg>}
    </button>}
  </>;
}

function Hero({m}){
  const wide=useViewport()>=1240;
  const enter=useHeroEntrance();
  return <section data-no-rv data-screen-label="Hero" style={{position:'relative',height:m?'max(100svh, 720px)':900,display:'flex',alignItems:'flex-end',color:'var(--fg)',overflow:'hidden',background:'radial-gradient(ellipse at 70% 75%, rgba(199,154,62,.45), #1F2440 35%, #11142A 75%)'}}>
    <LiveSky m={m}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(17,20,42,.94) 0%, rgba(17,20,42,.72) 33%, rgba(17,20,42,0) 62%)',pointerEvents:'none'}}></div>
    <Header m={m} over/>
    <div style={{position:'relative',padding:m?'0 24px 56px':'0 64px 88px',display:'flex',flexDirection:'column',gap:m?20:26,maxWidth:1312}}>
      <div {...enter(0)}><Tagline s={m?34:46}/></div>
      <div {...enter(1)}><H as="h1" s={m?76:150} style={{lineHeight:.98,letterSpacing:'-0.025em'}}><span style={{display:'block',whiteSpace:wide?'nowrap':'normal'}}>You've done the work.</span><span style={{display:'block',whiteSpace:wide?'nowrap':'normal'}}>You're still here.</span></H></div>
      <div {...enter(2)}><P s={m?18:21} c="var(--fg2)" style={{maxWidth:'30em'}}>There is a reason for that. Karmic Recapitulation works below insight, where the pattern was first written.</P></div>
      <div {...enter(3)}><div style={{display:'flex',gap:12,paddingTop:6,flexDirection:m?'column':'row'}}><Button fullWidth={m} href={R.method}>Read the method</Button><Button variant="on-dark" fullWidth={m} href={R.alignment}>Apply for an alignment call</Button></div></div>
    </div>
  </section>;
}

function HomePage({m}){
  return <div style={{background:'var(--bg)',color:'var(--fg)'}}>
    <Hero m={m}/>

    <Sec m={m} label="Recognition" style={{gap:m?28:48}}>
      <P s={m?19:22}>Most of the people who find Sara have already tried everything.</P>
      <div data-stagger>{HOME_RECOG.map(([t,d],i)=><div key={i} style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,2.3fr) minmax(0,1fr)',gap:m?14:64,alignItems:'end',padding:m?'28px 0':'48px 0',borderTop:'1px solid var(--hair)',borderBottom:i===2?'1px solid var(--hair)':'none'}}>
        <h2 style={{margin:0,fontFamily:EU,fontWeight:400,fontSize:m?48:108,lineHeight:1.02,letterSpacing:'-0.02em',textWrap:'balance'}}>{t}</h2>
        <P s={m?17:19} style={{paddingBottom:m?0:14}}>{d}</P>
      </div>)}</div>
    </Sec>

    <Sec m={m} tone="indigo" label="The method">
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <H s={m?52:88}>Karmic Recapitulation</H>
        <P s={m?18:20}>A four-phase method that goes to the root, then builds the life that follows.</P>
      </div>
      <P s={m?20:26} c="var(--fg)" style={{maxWidth:'30em',lineHeight:1.55}}>It begins with safety. Healing isn't about becoming stronger at carrying pain. It's about becoming safe enough to let it move.</P>
      <VideoCard cap="Sara explains the method" title="What Karmic Recapitulation is, and how it works" ts={m?30:48} play={m?64:104} label="VIDEO: Sara on Karmic Recapitulation" field="var(--indigo-deep)" src="assets/images-9.jpg" pos="center 28%"/>
      <div style={{display:'flex',flexDirection:'column',gap:m?28:44,paddingTop:m?8:24}}>
        {m?<ol data-stagger style={{listStyle:'none',margin:0,padding:0}}>
          {HOME_METHOD.map(([n,d],i)=><li key={n} style={{display:'grid',gridTemplateColumns:'88px 1fr',gap:20,alignItems:'center',padding:'20px 0',borderTop:'1px solid var(--hair)'}}>
            <img src={'illustrations/dark/'+PHASE_IL[i]+'-dark.svg'} alt="" style={{width:88,aspectRatio:'400 / 560',display:'block',borderRadius:4}}/>
            <div style={{display:'flex',flexDirection:'column',gap:4}}><H as="h3" s={40}><span style={{color:'var(--gold)',fontFamily:EU,marginRight:10}}>{i+1}</span>{n}</H><div style={{fontSize:17,fontWeight:300,color:'var(--fg2)'}}>{d}</div></div>
          </li>)}
        </ol>:
        <ol data-stagger style={{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',gap:32}}>
          {HOME_METHOD.map(([n,d],i)=><li key={n} style={{display:'flex',flexDirection:'column',gap:10}}>
            <img src={'illustrations/dark/'+PHASE_IL[i]+'-dark.svg'} alt="" style={{width:'100%',aspectRatio:'400 / 560',display:'block',borderRadius:4,marginBottom:20}}/>
            <div style={{fontFamily:EU,fontSize:120,lineHeight:.85,color:'var(--gold)'}}>{i+1}</div>
            <H as="h3" s={46} style={{marginTop:18}}>{n}</H>
            <div style={{fontSize:17,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{d}</div>
          </li>)}
        </ol>}
        <div style={{display:'flex',alignItems:'center',gap:16}} aria-hidden="true"><Arch s={m?32:40}/><div style={{flex:1,height:1,background:'var(--gold)'}}></div></div>
      </div>
      <div style={{fontSize:17}}><TextLink tone="dark" arrow href={R.method}>Read how it works</TextLink></div>
    </Sec>

    <Sec m={m} id="about" label="Meet Sara"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1fr)',gap:m?32:96,alignItems:'center'}}>
      <Photo src="assets/sara-portrait.jpg" label="Sara Kolata" ratio="4 / 5" pos="center 20%" field="var(--stone-500)"/>
      <div style={{display:'flex',flexDirection:'column',gap:28}}>
        <H s={m?48:72}>From architect to guide.</H>
        <P>I was an architect, educated in London and working on global projects. From the outside it looked like success. Underneath, my nervous system was collapsing, and I was chasing love, money and meaning from a quiet emptiness.</P>
        <P>A vision quest in the mountains of Peru gave me everything I prayed for, then took it all away. In silence in the Amazon with the Huni Kuin people, the teachings that became You Are God came through. Today I live in the Sacred Valley, guiding others home to the same truth.</P>
        <div style={{fontSize:17}}><TextLink tone="dark" arrow href={R.about}>Her story</TextLink></div>
      </div>
    </div></Sec>

    <LadderSection m={m}/>

    <section data-screen-label="The residency" style={{background:'var(--raised)',color:'var(--fg)'}}>
      <Photo src="assets/residency-valley.jpg" label="The Sacred Valley at dawn" pos={m?'30% center':'center'} h={m?420:720} radius={0} field="var(--stone-500)"/>
      <div style={{padding:m?'56px 24px 72px':'96px 64px 120px',display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1fr)',gap:m?28:96}}>
        <H s={m?48:72}>A private residency in the Sacred Valley.</H>
        <div style={{display:'flex',flexDirection:'column',gap:20,alignItems:'flex-start'}}>
          <P c="var(--fg)">An immersive, fully private residency for one person or a couple. We work closely together, combining ceremony with grounded integration, so the change lands in your body, your relationships and your daily life.</P>
          <P>The centre is just outside Urubamba, in the heart of the Sacred Valley, Peru. Group programs run at partner venues in the valley.</P>
          <div style={{fontSize:15,fontWeight:300,color:'var(--fg2)',paddingTop:16,borderTop:'1px solid var(--hair)',alignSelf:'stretch'}}>Every residency begins with an application, medical screening and a conversation.</div>
          <Button fullWidth={m} href={R.retreat}>Apply for a residency</Button>
        </div>
      </div>
    </section>

    <Sec m={m} id="books" label="Books"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1.5fr) minmax(0,1fr)',gap:m?48:80}}>
      <div style={{display:'flex',flexDirection:'column',gap:28}}>
        <Photo src="assets/book-you-are-god.webp" label="You Are God by Sara Kolata" ratio="3 / 2" field="var(--stone-500)"/>
        <div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) auto',gap:24,alignItems:'end'}}>
          <div style={{display:'flex',flexDirection:'column',gap:16}}><H s={m?52:72}>You Are God</H><P s={18}>Teachings that came through in silence, deep in the Amazon. Not lessons to study, but memories rising to be remembered: you are not broken, not lost, but the Infinite remembering its own light.</P></div>
          <Button fullWidth={m}>Buy the book, $30</Button>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        {[['The Healing Trap','Coming spring 2027','Why insight alone never moved the pattern, and what does.'],['Why You Got Sick','Available now in paperback and ebook','The body as messenger: illness read as a signal, not a sentence.']].map(([t,st,blurb],i)=><div key={t} style={{display:'grid',gridTemplateColumns:m?'96px 1fr':'132px 1fr',gap:24,padding:'28px 0',borderTop:'1px solid var(--hair)',borderBottom:i===1?'1px solid var(--hair)':'none',alignItems:'start'}}>
          <BookCover title={t} field={i?'var(--apu-sage)':'var(--indigo-soft)'}/>
          <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'flex-start'}}><H as="h3" s={34}>{t}</H><div style={{fontSize:14,fontWeight:500,letterSpacing:'0.04em',color:'var(--gold)'}}>{st}</div><div style={{fontSize:16,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{blurb}</div><div style={{fontSize:16}}><TextLink tone="dark" arrow>About the book</TextLink></div></div>
        </div>)}
      </div>
    </div></Sec>

    <Sec m={m} tone="indigo" label="Press and stages">
      <H s={m?48:72}>As heard on</H>
      <PressGrid m={m}/>
      <div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1.6fr) minmax(0,1fr)',gap:m?28:64,alignItems:'end'}}>
        <Photo src="assets/sara-stage.jpg" label="Sara speaking" pos="center 38%" ratio="16 / 9" field="var(--indigo-deep)" style={{outline:'1px solid var(--hair)'}}/>
        <div style={{display:'flex',flexDirection:'column',gap:20}}><H as="h3" s={m?40:52}>Booking Sara to speak.</H><div style={{fontSize:17}}><TextLink tone="dark" arrow href={R.press}>Speaking and press</TextLink></div></div>
      </div>
    </Sec>

    <StoriesSection m={m}/>

    <Sec m={m} tone="sage" id="start-here" label="Email signup"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1fr)',gap:m?28:96,alignItems:'end'}}>
      <div style={{display:'flex',flexDirection:'column',gap:20}}><H s={m?52:88} c="var(--obsidian)">Start here.</H><P s={20} c="var(--obsidian)" style={{fontWeight:400}}>The You Are God transmissions, free to your inbox. Living teachings spoken from Source, each one a key to who you already are.</P></div>
      <form onSubmit={e=>e.preventDefault()} style={{display:'flex',flexDirection:m?'column':'row',gap:12,alignItems:m?'stretch':'flex-end'}}>
        <TextField label="Email address" type="email" style={{flex:1}}/>
        <Button type="submit">Send me the transmissions</Button>
      </form>
    </div></Sec>

  </div>;
}
Object.assign(window,{HomePage,LadderSection});
