const TALKS=[['The Healing Trap','Why years of insight never changed the pattern.'],['Below insight','Where patterns are actually written, and why understanding them is not enough.'],['The root and the lineage','What we inherit before we decide anything, and what changes when we go there.']];
function PressPage({m}){
  const lbl={fontSize:15,fontWeight:500};
  const gap=m?28:96;
  return <div style={{background:'var(--bg)'}}>
    <Header m={m} active="Speaking"/>
    <section data-no-rv data-screen-label="Press hero" style={{background:'var(--raised)',color:'var(--fg)',display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1.15fr)',minHeight:m?undefined:760}}>
      <div style={{padding:m?'72px 24px 48px':'120px 64px 96px',display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:m?20:28}}>
        <H as="h1" s={m?72:104} style={{lineHeight:.98}}>Speaking and press</H>
        <P s={m?18:20} c="var(--fg)">Sara Kolata is a spiritual teacher, shamanic guide and author based in the Sacred Valley of Peru. She speaks on why lasting change happens at the root, beneath insight.</P>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',flexDirection:m?'column':'row'}}><Button fullWidth={m} href={R.booking}>Booking inquiry</Button><Button variant="on-dark" fullWidth={m} href={R.mediaKit}>Download media kit</Button></div>
      </div>
      <Photo src="assets/sara-stage.jpg" label="Sara speaking" pos="center 30%" h={m?420:760} radius={0} field="var(--ceremony-indigo)"/>
    </section>
    <Sec m={m} label="Talk topics">
      <div style={{display:'flex',flexDirection:m?'column':'row',justifyContent:'space-between',alignItems:m?'flex-start':'end',gap:m?16:40}}><H s={m?48:72}>Signature talks</H><span style={{fontSize:15,fontWeight:300,color:'var(--fg2)'}}>Keynote, panel, podcast and workshop formats. In English or Spanish.</span></div>
      <ol data-stagger style={{listStyle:'none',margin:0,padding:0,borderBottom:'1px solid var(--hair)'}}>
        {TALKS.map(([t,d],i)=><li key={t} style={{display:'grid',gridTemplateColumns:m?'40px minmax(0,1fr)':'80px minmax(0,1.1fr) minmax(0,1fr)',gap:m?'8px 16px':32,padding:'32px 0',borderTop:'1px solid var(--hair)',alignItems:'baseline'}}>
          <Num n={i+1}/><H as="h3" s={m?40:52}>{t}</H><P s={m?17:19} style={{gridColumn:m?'2':undefined}}>{d}</P>
        </li>)}
      </ol>
    </Sec>
    <Sec m={m} tone="indigo" label="Reel and press">
      <div style={{position:'relative'}}><ImageFrame ratio="16 / 9" field="var(--indigo-deep)"/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:m?64:88,height:m?64:88,border:'1px solid var(--fg)',borderRadius:2,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="22" height="26" viewBox="0 0 22 26" fill="none"><path d="M2 2l18 11L2 24z" stroke="var(--fg)" strokeWidth="1.4" strokeLinejoin="round"/></svg></div></div>
        <span style={{position:'absolute',left:16,bottom:16,fontSize:14,fontWeight:500,letterSpacing:'0.04em',color:'var(--gold)'}}>Speaker reel, 2:40</span></div>
      <div style={{display:'flex',flexDirection:'column',gap:28}}>
        <H as="h3" s={m?40:44}>As heard on</H>
        <PressGrid m={m}/>
      </div>
    </Sec>
    <Sec m={m} id="media-kit" label="Media kit"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1.6fr)',gap}}>
      <div style={{display:'flex',flexDirection:'column',gap:24,alignItems:'flex-start'}}><H s={m?48:72}>Media kit</H><P>Approved photography, bios and talk descriptions for event programs and press.</P>
        <div style={{display:'flex',flexDirection:'column',gap:12,alignSelf:'stretch',maxWidth:m?undefined:360}}><Button fullWidth>Download media kit</Button><Button variant="on-dark" fullWidth>Download speaker one-sheet</Button></div>
        <div style={{fontSize:15,fontWeight:300,color:'var(--fg2)'}}>Press contact: <a href="mailto:press@sarakolata.com" style={{color:'var(--fg)'}}>press@sarakolata.com</a></div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <div style={lbl}>Approved headshots</div>
        <div style={{display:'grid',gridTemplateColumns:m?'1fr':'repeat(3,minmax(0,1fr))',gap:16}}>
          {[['Sara, direct gaze, undyed linen','var(--stone-500)'],['Sara in the valley, landscape behind','var(--apu-sage)'],['Sara, close portrait, natural light','var(--indigo-soft)']].map(([l,f])=><div key={l} style={{display:'flex',flexDirection:'column',gap:12}}><Photo label={l} ratio="4 / 5" field={f}/><div style={{fontSize:15}}><TextLink tone="dark" arrow>Download high-res</TextLink></div></div>)}
        </div>
        <div style={{fontSize:14,fontWeight:300,color:'var(--fg2)'}}>Photo credit: Lucía Mamani, Sacred Valley</div>
      </div>
    </div></Sec>
    <Sec m={m} tone="tint" label="Bios"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1.6fr)',gap:m?40:96}}>
      <div style={{display:'flex',flexDirection:'column',gap:16}}><div style={lbl}>Short bio</div><P>Sara Kolata is a spiritual teacher, shamanic guide and author of You Are God. A former London-trained architect, she now lives in the Sacred Valley of Peru, where she guides people through Karmic Recapitulation, a four-phase method that works beneath insight to resolve patterns at their root.</P><div style={{fontSize:15}}><TextLink tone="dark">Copy short bio</TextLink></div></div>
      <div style={{display:'flex',flexDirection:'column',gap:16}}><div style={lbl}>Long bio</div><div style={{display:'flex',flexDirection:'column',gap:16}}><P>Sara Kolata is a spiritual teacher, shamanic guide and author based in the Sacred Valley of Peru. Educated as an architect in London, she spent years working on global projects before burnout and a deepening sense of emptiness led her to Peru.</P><P>A vision quest in the Andes, followed by extended dietas in the Amazon with the Huni Kuin people, reshaped her life. The teachings that came through in that silence became her first book, You Are God, and the foundation of Karmic Recapitulation: a four-phase method that works at the level of the mother, the father, the lineage and the inner child, where patterns are first written.</P><P>Today Sara hosts private residencies in the Sacred Valley and guides clients worldwide through the five-month You Are God program. She speaks on why lasting change happens at the root, beneath insight, and is the author of Why You Got Sick and the forthcoming The Healing Trap.</P></div><div style={{fontSize:15}}><TextLink tone="dark">Copy long bio</TextLink></div></div>
    </div></Sec>
    <Sec m={m} id="booking" label="Booking inquiry"><div style={{display:'grid',gridTemplateColumns:m?'1fr':'minmax(0,1fr) minmax(0,1.6fr)',gap}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}><H s={m?48:72}>Booking inquiry</H><P>Tell us about your event. Sara's team replies to every inquiry.</P></div>
      <form className="dk" onSubmit={e=>e.preventDefault()} style={{display:'grid',gridTemplateColumns:m?'1fr':'1fr 1fr',gap:'24px 20px'}}>
        <TextField label="Name" required/><TextField label="Email" type="email" required/>
        <TextField label="Organization"/><TextField label="Event"/>
        <TextField label="Date" placeholder="Month and year, or exact date"/><TextField label="Audience size"/>
        <TextArea label="Message" rows={6} style={{gridColumn:'1 / -1'}}/>
        <div style={{gridColumn:'1 / -1'}}><Button type="submit" fullWidth={m}>Send inquiry</Button></div>
      </form>
    </div></Sec>
  </div>;
}
window.PressPage=PressPage;
