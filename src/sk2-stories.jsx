const STORIES=[
['psychologist','Psychologist, 37','After 12 years of therapy, she finally stopped abandoning herself.',1],
['nurse','Nurse, 56','Twelve years of therapy. Nine months later, the old reaction never came.',1],
['actor','Actor, 54','I almost didn’t join because it was online. It became the deepest work of my life.',1],
['gestalt','Gestalt therapist, 29','She stopped looking outside herself and found God within.',1],
['energy-healer','Energy healer, 44','Twenty years chasing freedom. Three months later, he had left his job.',1],
['writer','Writer, 57','Money used to make me disappear. This time I stayed.',1],
['clinical-therapist','Clinical therapist, 46, New York','I’ve never experienced anything that reached this deep.',0],
['veteran','Military veteran, 34','She couldn’t digest vegetable soup. The day after one ceremony, she ate pizza.',0],
['wine-farmer','Wine farmer, 38','My body had no boundaries because I never had any.',0],
['unemployed','Arrived unemployed, 54','No money and no direction. Five months later he built an online business.',0],
['model','Model, 25','She’d worked with Amazonian tribes for years. She still couldn’t step into her light.',0],
['babysitter','Babysitter, 37','I’d been moving so fast I never had to feel any of it.',0]];
const VSRC=k=>'assets/testimonials/v-'+k+'.jpg';

function PlayerOverlay({i=0,m,onClose}){
  const [k,cap,title,v]=STORIES[i];
  const closeRef=React.useRef(null);
  React.useEffect(()=>{
    const prev=document.activeElement;
    const key=e=>{if(e.key==='Escape')onClose();};
    document.addEventListener('keydown',key);document.body.style.overflow='hidden';
    const b=closeRef.current&&closeRef.current.querySelector('button');if(b)b.focus();
    return()=>{document.removeEventListener('keydown',key);document.body.style.overflow='';if(prev&&prev.focus)prev.focus();};
  },[]);
  return <div role="dialog" aria-modal="true" aria-label={title} onClick={e=>{if(e.target===e.currentTarget)onClose();}} style={{position:'fixed',inset:0,zIndex:30,background:'rgba(17,20,42,.9)',display:'flex',alignItems:'center',justifyContent:'center',padding:m?24:64,overflowY:'auto'}}>
    <div style={{width:'100%',maxWidth:1040,display:'flex',flexDirection:'column',gap:m?16:24}}>
      <div ref={closeRef} style={{display:'flex',justifyContent:'flex-end'}}><Button variant="on-dark" size="sm" onClick={onClose}><span style={{display:'inline-flex',alignItems:'center',gap:10}}>Close<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4"/></svg></span></Button></div>
      <div style={v?{width:'min(100%, 46vh)',margin:'0 auto'}:undefined}><Poster play={m?64:96} field="var(--indigo-deep)" src={VSRC(k)} pos="center" ratio={v?'9 / 16':'16 / 9'} label={'VIDEO: '+cap}/></div>
      <VCap cap={cap} title={title} ts={m?28:40}/>
    </div>
  </div>;
}

function StoriesSection({m}){
  const [open,setOpen]=React.useState(null);
  const w=useViewport();const cols=m?2:w<1200?3:6;
  return <Sec m={m} id="stories" label="In their own words">
    <div style={{display:'flex',flexDirection:'column',gap:20}}>
      <H s={m?48:72}>In their own words.</H>
      <P s={m?18:20} style={{maxWidth:'38em'}}>Recorded straight after their Karmic Recapitulation sessions. Every one-to-one client, online or at the retreat centre in Peru, also receives the five-month You Are God program.</P>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat('+cols+',minmax(0,1fr))',gap:m?'32px 16px':'44px 20px'}}>
      {STORIES.map(([k,c,t,v],i)=>v?<VideoCard key={k} cap={c} title={t} src={VSRC(k)} pos="center 25%" ratio="9 / 16" ts={m?18:22} play={m?48:56} label="VIDEO" onOpen={()=>setOpen(i)}/>:null)}
    </div>
    <div style={{display:'grid',gridTemplateColumns:m?'1fr':'repeat(3,minmax(0,1fr))',gap:m?40:'48px 24px'}}>
      {STORIES.map(([k,c,t,v],i)=>v?null:<VideoCard key={k} cap={c} title={t} src={VSRC(k)} pos="center" ts={m?24:28} play={m?60:64} label="VIDEO: client testimonial" onOpen={()=>setOpen(i)}/>)}
    </div>
    <figure style={{margin:m?'16px 0':'40px auto',display:'flex',flexDirection:'column',gap:24,alignItems:'center',textAlign:'center',maxWidth:1000}}>
      <blockquote style={{margin:0,fontFamily:'var(--font-accent)',fontSize:m?40:76,lineHeight:1.15,color:'var(--fg)',textWrap:'balance'}}>“I’ve never experienced anything that reached this deep.”</blockquote>
      <figcaption style={{fontSize:15,fontWeight:500,letterSpacing:'0.04em',color:'var(--gold)'}}>Raven, clinical therapist, New York</figcaption>
    </figure>
    <div style={{fontSize:14,fontWeight:300,lineHeight:1.7,color:'var(--fg2)',maxWidth:'62em'}}>Testimonials reflect real client experiences, shared with permission. Names are shared with each client’s consent, and where a story is voiced by an actor, it is labelled on its card. Individual results vary. This work is not a substitute for medical, psychological or psychiatric care.</div>
    {open!==null&&<PlayerOverlay i={open} m={m} onClose={()=>setOpen(null)}/>}
  </Sec>;
}
Object.assign(window,{StoriesSection,PlayerOverlay});
