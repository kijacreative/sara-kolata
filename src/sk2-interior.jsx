const METHOD_PHASES=[
  ['Mother','The inner world.','The first relationship. How you learned to receive care, to rest and to be held, and what you did when that was not available. This becomes the template for your inner world: how you speak to yourself, and whether your own body feels like a safe place to be.','People often describe a quieter inner voice, and an easier relationship with receiving, from others and from themselves.'],
  ['Father','The outer world.','How you learned to move in the world: direction, protection, work, money and authority. Where the mother phase looks inward, this phase looks at how you meet the outer world and what you believe it will ask of you.','Many describe acting from steadiness instead of proving, and a cleaner relationship with work, money and their own authority.'],
  ['Ancestral','The root of the current.','What came down the line before you had any say. Loyalties, losses and survival strategies carried in the family, often unspoken, that still shape the choices you make.','People describe recognizing which patterns were never theirs to begin with, and standing in their lineage instead of being run by it.'],
  ['Inner child','The return.','The child who learned to survive the first three. The strategies that kept you safe then and still run your reactions now.','People often describe a return of spontaneity, and room to respond where they used to react.']
];
/* two-column grid on desktop, single column on mobile */
const g2=(m,cols)=>m?'1fr':cols;

function MethodPage({m}){
  const gap=m?28:96;
  return <div style={{background:'var(--bg)'}}>
    <Header m={m} active="The Method"/>
    <Sec m={m} tone="indigo" label="Method hero" style={{padding:m?'72px 24px 64px':'140px 64px 120px',gap:m?32:40}}>
      <H as="h1" s={m?76:128} style={{lineHeight:.96,maxWidth:1000}}>Karmic Recapitulation</H>
      <div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1.3fr) minmax(0,1fr)'),gap,alignItems:'end'}}>
        <P s={m?19:22} c="var(--fg)">Karmic Recapitulation is a four-phase method that works beneath insight, at the level where a pattern was first written: the mother, the father, the lineage, and the child who learned to survive them. The You Are God program then builds the life that follows.</P>
        <nav aria-label="Phases" style={{display:'flex',flexDirection:'column',borderTop:'1px solid var(--hair)'}}>
          {['Mother','Father','Ancestral','Inner child','Integration'].map((n,i)=><a key={n} href={R.method+'/'+(i===4?'integration':'phase-'+(i+1))} style={{display:'flex',gap:20,alignItems:'baseline',padding:'12px 0',borderBottom:'1px solid var(--hair)',textDecoration:'none',color:'var(--fg)'}}><Num n={i+1}/><span style={{fontSize:17,fontWeight:i===4?500:300}}>{n}</span></a>)}
        </nav>
      </div>
    </Sec>
    {METHOD_PHASES.map(([n,s,a,t],i)=><React.Fragment key={n}>
      <Sec m={m} id={'phase-'+(i+1)} label={'Phase '+(i+1)} style={{padding:m?'64px 24px':i===0?'120px 64px 96px':'96px 64px'}}>
        <img src={'illustrations/dark/'+['1-mother','2-father','3-ancestral','4-child'][i]+(m?'-dark.svg':'-wide-dark.svg')} alt="" style={{width:m?'60%':'100%',aspectRatio:m?'400 / 560':'1200 / 560',display:'block',borderRadius:4}}/>
        <div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.3fr)'),gap:m?8:96,borderTop:'1px solid var(--hair)',paddingTop:32}}>
          <div style={{display:'flex',flexDirection:'column',gap:16}}><Num n={i+1}/><H s={m?64:96}>{n}</H><div style={{fontFamily:'var(--font-heading)',fontStyle:'italic',fontSize:m?22:26,color:'var(--fg2)'}}>{s}</div></div>
          <div style={{display:'flex',flexDirection:'column',gap:m?28:36,paddingTop:m?20:30}}>
            <div style={{display:'flex',flexDirection:'column',gap:12}}><div style={{fontSize:15,fontWeight:500}}>What it addresses</div><P s={m?17:19}>{a}</P></div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}><div style={{fontSize:15,fontWeight:500}}>What tends to shift</div><P s={m?17:19}>{t}</P></div>
          </div>
        </div>
      </Sec>
      {i===1&&<Photo label="woven lineage textile in natural dyes, hands at the loom" h={m?320:560} radius={0} field="var(--clay)"/>}
    </React.Fragment>)}
    <Sec m={m} tone="indigo" id="integration" label="Integration"><img src={'illustrations/dark/5-integration'+(m?'-dark.svg':'-wide-dark.svg')} alt="" style={{width:m?'60%':'100%',aspectRatio:m?'400 / 560':'1200 / 560',display:'block',borderRadius:4}}/><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.3fr)'),gap:m?8:96}}>
      <div style={{display:'flex',flexDirection:'column',gap:16}}><Num n={5}/><H s={m?64:96}>Integration</H><div style={{fontFamily:'var(--font-heading)',fontStyle:'italic',fontSize:m?22:26,color:'var(--inti-gold)'}}>The You Are God program.</div></div>
      <div style={{display:'flex',flexDirection:'column',gap:28,paddingTop:m?20:30,alignItems:'flex-start'}}>
        <P c="var(--fg)">Resolution is the beginning. Over five months, the You Are God program builds the life that follows, so what changed in the four phases becomes how you live.</P>
        <ul style={{margin:0,padding:0,listStyle:'none',alignSelf:'stretch'}}>{[['Cadence','Two private sessions a month for five months, online.'],['Between sessions','Recorded transmissions and short daily practices.'],['Support','Written check-ins with Sara between sessions.'],['Close','A final integration session to set the next year.']].map(([k,v])=><li key={k} style={{display:'grid',gridTemplateColumns:m?'1fr':'160px 1fr',gap:m?4:24,padding:'14px 0',borderTop:'1px solid var(--hair)'}}><span style={{fontSize:15,fontWeight:500}}>{k}</span><span style={{fontSize:17,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{v}</span></li>)}</ul>
        <div style={{display:'flex',gap:12,flexDirection:m?'column':'row',alignSelf:m?'stretch':undefined}}><Button fullWidth={m} href={R.ladder}>See the program</Button><Button variant="on-dark" fullWidth={m} href={R.books}>Read the book</Button></div>
      </div>
    </div></Sec>
    <Sec m={m} label="Who this is for">
      <H s={m?48:72}>Is this work for you?</H>
      <div style={{display:'grid',gridTemplateColumns:g2(m,'1fr 1fr'),gap:20}}>
        {[['Who this work is for','var(--raised)',['You have done years of therapy, retreats or inner work, and the patterns keep returning.','You can explain your story and are ready to stop living inside it.','You are ready to surrender to a process, not manage it.','You can invest in the work without strain.']],
          ['Who this work is not for','transparent',['You are looking for a peak experience or a weekend of release.','You are in acute crisis and need medical or psychiatric care. Please seek that first.','You want someone else to do the work for you.','You expect guaranteed results.']]].map(([t,bg,items])=><div key={t} style={{background:bg,border:'1px solid var(--hair)',borderRadius:4,padding:m?24:40,display:'flex',flexDirection:'column',gap:24}}>
          <H as="h3" s={m?36:44}>{t}</H>
          <ul style={{margin:0,padding:0,listStyle:'none'}}>{items.map(x=><li key={x} style={{padding:'16px 0',borderTop:'1px solid var(--hair)',fontSize:m?17:18,fontWeight:300,lineHeight:1.6}}>{x}</li>)}</ul>
        </div>)}
      </div>
      <div style={{fontSize:15,fontWeight:300,color:'var(--fg2)',maxWidth:'60em'}}>Karmic Recapitulation is spiritual work. It is not medical or psychological treatment and does not replace it.</div>
    </Sec>
    <CTABand m={m} tone="indigo" title="Begin with a conversation." body="A free one-hour alignment call, by application, to see where you are and which step fits."><Button fullWidth={m} href={R.alignment}>Apply for an alignment call</Button></CTABand>
  </div>;
}

const DAY=[['First light','Quiet practice as the sun clears the ridge.'],['Morning','Private session with Sara.'],['Midday','A meal, and rest.'],['Afternoon','Integration: walking, writing, the land.'],['Evening','Reflection and a simple dinner.'],['Night','On ceremony days, ceremony held by Sara.']];
const FAQ=[['Who is the residency for?','People who have done years of inner work and are ready to go to the root. Every applicant is screened for genuine readiness, full surrender and financial capacity without strain.'],['Can I come with my partner?','Yes. The residency is fully private, for one person or a couple.'],['How long is a residency?','Between 7 and 10 days, agreed with Sara after your conversation.'],['What does it cost?','From $5,000 for 7 days. The price covers all sessions and ceremonies with Sara, private accommodation, all meals and in-valley transfers. Flights and travel insurance are not included.'],['Do I need prior experience?','No prior ceremony experience is needed. What matters is readiness: most guests arrive after years of therapy or inner work, and all complete preparation calls before arriving.'],['How do I get there?','Fly into Cusco (CUZ), usually via Lima. We collect you at the airport for the 90-minute drive down into the valley. The centre sits at around 2,870 m, lower than Cusco, and we build a gentle first day to help you acclimatise.'],['How is this different from a group program?','A residency is private and built around you. Group programs run at partner venues in the valley on set dates.']];
/* Stylised valley map: river, towns, residency marked */
function ValleyMap(){
  const towns=[['Pisac',120,96],['Calca',250,118],['Urubamba',388,176],['Ollantaytambo',520,214]];
  return <figure style={{margin:0,display:'flex',flexDirection:'column',gap:12}}>
    <svg viewBox="0 0 640 480" role="img" aria-label="Map of the Sacred Valley with the residency marked near Urubamba" style={{width:'100%',display:'block',background:'var(--raised)',border:'1px solid var(--hair)',borderRadius:4}}>
      <path d="M0 60 C120 40 200 160 320 150 S480 230 640 200" fill="none" stroke="rgba(232,228,218,.1)" strokeWidth="90" strokeLinecap="round"/>
      <path d="M0 70 C110 70 180 120 260 128 S360 170 400 182 S520 226 640 236" fill="none" stroke="#6F8AA6" strokeWidth="2.5"/>
      <path d="M40 330 L120 250 L170 300 L240 220 L310 300 L380 240 L470 330 L540 270 L620 340" fill="none" stroke="rgba(232,228,218,.35)" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M60 20 L130 0 M300 20 L360 0" stroke="rgba(232,228,218,.2)" strokeWidth="1.5"/>
      {towns.map(([n,x,y])=><g key={n}><circle cx={x} cy={y} r="4" fill="var(--fg)"/><text x={x} y={y-14} textAnchor="middle" fill="var(--fg2)" style={{font:'500 14px var(--font-body)'}}>{n}</text></g>)}
      <g transform="translate(410 230)"><circle r="18" fill="none" stroke="var(--gold)" strokeWidth="1.5"/><circle r="7" fill="var(--gold)"/><text x="28" y="5" fill="var(--gold)" style={{font:'500 15px var(--font-body)'}}>The residency</text></g>
      <g transform="translate(560 420)"><text textAnchor="middle" fill="var(--fg2)" style={{font:'500 12px var(--font-body)',letterSpacing:'.14em'}}>TO CUSCO 90 MIN</text><path d="M-56 12 H56" stroke="var(--fg2)"/></g>
      <text x="580" y="40" fill="var(--fg2)" style={{font:'500 12px var(--font-body)'}}>N</text><path d="M584 48 V80" stroke="var(--fg2)"/>
    </svg>
    <figcaption style={{fontSize:14,fontWeight:300,color:'var(--fg2)'}}>Not to scale.</figcaption>
  </figure>;
}

function RetreatPage({m}){
  const gap=m?28:96;
  return <div style={{background:'var(--bg)'}}>
    <Header m={m} active="Retreat Center"/>
    <section data-no-rv data-screen-label="Retreat hero" style={{position:'relative',height:m?640:820,display:'flex',alignItems:'flex-end',color:'var(--fg)'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 70% 80%, rgba(199,154,62,.32), #2E3452 40%, #14182C 85%)'}}></div>
      <img src="assets/residency-valley.jpg" alt="" onError={e=>{e.currentTarget.style.display='none';}} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'rgba(20,24,44,.58)'}}></div>
      <div style={{position:'relative',padding:m?'0 24px 56px':'0 64px 96px',display:'flex',flexDirection:'column',gap:m?20:28,maxWidth:1100}}>
        <H as="h1" s={m?72:120} style={{lineHeight:.98}}>The Peru Residency</H>
        <P s={m?18:22} c="var(--fg)">A private residency in the Sacred Valley. Fully private work for one person or a couple.</P>
        <div><Button fullWidth={m} href={R.apply}>Apply for a residency</Button></div>
      </div>
    </section>
    <Sec m={m} label="What it includes"><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.4fr)'),gap}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}><H s={m?48:72}>What a residency includes</H><P>Ceremony, daily integration, and the mountain. Private, 7 to 10 days.</P></div>
      <div>{[['Private work with Sara','One person or a couple, never a group.'],['Ceremony','Held by Sara, on days agreed in advance.'],['Daily integration','Time each day to work with what has moved.'],['The mountain','The land as part of the work.'],['Accommodation','A private adobe casita with garden and mountain view, a short walk from the ceremony space.'],['Meals','Three plant-based meals a day, cooked from valley produce and adapted to ceremony preparation.'],['Transfers','Return transfer from Cusco airport, and all travel within the valley.']].map(([t,d])=><div key={t} style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.3fr)'),gap:m?8:32,padding:'22px 0',borderTop:'1px solid var(--hair)'}}><H as="h3" s={30}>{t}</H><div style={{fontSize:m?17:18,fontWeight:300,lineHeight:1.6}}>{d}</div></div>)}</div>
    </div></Sec>
    <Sec m={m} tone="indigo" label="A day in the residency">
      <div style={{display:'flex',flexDirection:m?'column':'row',justifyContent:'space-between',alignItems:m?'flex-start':'end',gap:m?16:40}}><H s={m?48:72}>A day in the residency</H><span style={{fontSize:15,fontWeight:300,color:'var(--fg2)'}}>A typical day. Each residency is shaped around you.</span></div>
      {m?<ol data-stagger style={{listStyle:'none',margin:0,padding:0,borderLeft:'1px solid var(--hair)'}}>
        {DAY.map(([t,d],i)=><li key={t} style={{display:'flex',flexDirection:'column',gap:8,padding:'0 0 28px 24px',position:'relative'}}>
          <div style={{position:'absolute',left:-5,top:10,width:9,height:9,background:i===0||i===5?'var(--inti-gold)':'var(--fg)'}}></div>
          <H as="h3" s={34}>{t}</H><div style={{fontSize:16,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{d}</div>
        </li>)}
      </ol>:
      <ol data-stagger style={{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:'repeat(6,minmax(0,1fr))',position:'relative'}}>
        <div style={{position:'absolute',left:0,right:0,top:4,height:1,background:'var(--hair)'}}></div>
        {DAY.map(([t,d],i)=><li key={t} style={{display:'flex',flexDirection:'column',gap:18,paddingRight:24,position:'relative'}}>
          <div style={{width:9,height:9,background:i===0||i===5?'var(--inti-gold)':'var(--fg)'}}></div>
          <H as="h3" s={34}>{t}</H><div style={{fontSize:16,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>{d}</div>
        </li>)}
      </ol>}
    </Sec>
    <Photo src="assets/residency-valley.jpg" label="The Sacred Valley at dawn" h={m?360:620} radius={0} field="var(--stone-500)"/>
    <Sec m={m} label="Location"><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.5fr)'),gap,alignItems:'start'}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}><H s={m?48:72}>The location</H><P c="var(--fg)">Outside Urubamba, Sacred Valley of the Incas, Cusco, Peru.</P><P>Fly into Cusco (CUZ). A private transfer brings you down into the valley in about 90 minutes. Most guests arrive the afternoon before the residency begins.</P><div style={{fontSize:15,fontWeight:300,color:'var(--fg2)'}}>The exact address is shared after your application is accepted.</div></div>
      <ValleyMap/>
    </div></Sec>
    <Sec m={m} tone="indigo" label="Group programs"><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1.2fr) minmax(0,1fr)'),gap,alignItems:'center'}}>
      <Photo label="partner venue in the valley, stone courtyard" ratio="3 / 2" field="var(--indigo-soft)"/>
      <div style={{display:'flex',flexDirection:'column',gap:24,alignItems:'flex-start'}}><H s={m?44:64} c="var(--fg)">Group programs at partner venues</H><P>Group programs run at partner venues in the valley, on set dates. The same screening applies.</P><ul style={{margin:0,padding:0,listStyle:'none',alignSelf:'stretch'}}>{[['12 to 19 April 2027','Pisac'],['7 to 14 June 2027','Ollantaytambo'],['20 to 27 September 2027','Urubamba']].map(([d,v])=><li key={d} style={{display:'flex',justifyContent:'space-between',gap:16,padding:'14px 0',borderTop:'1px solid var(--hair)',fontSize:17}}><span style={{fontWeight:500}}>{d}</span><span style={{fontWeight:300,color:'var(--fg2)'}}>{v}</span></li>)}</ul><Button variant="on-dark" fullWidth={m}>See upcoming programs</Button></div>
    </div></Sec>
    <Sec m={m} tone="quarry" id="screening" label="Screening and safety"><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.3fr)'),gap}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}><H s={m?48:72}>Screening and safety</H><P c="var(--fg)">Every guest completes an application and medical screening before a residency is confirmed. No exceptions.</P></div>
      <ol data-stagger style={{listStyle:'none',margin:0,padding:0}}>{[['Application','Your history, what you have tried, and why now.'],['Medical screening',<span>A medical questionnaire reviewed by an independent physician before any ceremony, including medications, cardiac history and mental health.</span>],['Conversation with Sara','Readiness, surrender, capacity. A fit for both sides.'],['Confirmation','Dates, length and preparation agreed.']].map(([t,d],i)=><li key={t} style={{display:'grid',gridTemplateColumns:m?'40px minmax(0,1fr)':'48px minmax(0,1fr) minmax(0,1.3fr)',gap:m?'8px 16px':24,padding:'22px 0',borderTop:'1px solid var(--hair)'}}><Num n={i+1} style={{paddingTop:8}}/><H as="h3" s={30}>{t}</H><div style={{fontSize:17,fontWeight:300,lineHeight:1.6,color:'var(--fg2)',gridColumn:m?'2':undefined}}>{d}</div></li>)}
        <li style={{padding:'22px 0',borderTop:'1px solid var(--hair)',fontSize:17,fontWeight:300,lineHeight:1.6,color:'var(--fg2)'}}>A trained facilitator is on site through every ceremony, with a written emergency protocol and a private clinic 15 minutes away in Urubamba.</li>
      </ol>
    </div></Sec>
    <Sec m={m} tone="indigo" label="FAQ"><div style={{display:'grid',gridTemplateColumns:g2(m,'minmax(0,1fr) minmax(0,1.6fr)'),gap}}>
      <H s={m?48:72}>Questions</H>
      <div style={{borderBottom:'1px solid var(--hair)'}}>{FAQ.map(([q,a],i)=><details key={i} open={i<3} style={{borderTop:'1px solid var(--hair)',padding:'22px 0'}}><summary style={{cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',gap:24,fontFamily:'var(--font-heading)',fontSize:22,lineHeight:1.3}}>{q}<span aria-hidden="true" className="faq-mark" style={{fontFamily:'var(--font-body)',fontSize:22,fontWeight:300}}>+</span></summary><P s={m?17:18} style={{paddingTop:12}}>{a}</P></details>)}</div>
    </div></Sec>
    <CTABand m={m} id="apply" title="Every residency begins with an application." body="Sara reads every one herself. If it's a fit, you'll hear from her team."><Button fullWidth={m}>Apply for a residency</Button></CTABand>
  </div>;
}
Object.assign(window,{MethodPage,RetreatPage});
