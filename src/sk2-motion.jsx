/* Motion helpers. Rules (OpenDesign animation-discipline, on the brand's --ease-settle):
   reveal once, never loop; under 500ms; reduced motion gets opacity only (see index.html). */

const reducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll reveal. Every direct child of a page <section> fades up as it enters the viewport.
   Children of a [data-stagger] list reveal one by one, 70ms apart, capped at 350ms.
   Sections marked [data-no-rv] (heroes) are left alone. Classes are only ever added here,
   so nothing is hidden if IntersectionObserver is missing. Returns a cleanup function. */
function revealSections(root){
  if(!root||!('IntersectionObserver' in window))return ()=>{};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{rootMargin:'0px 0px -6% 0px',threshold:.06});
  /* re-runs (breakpoint change) reach elements marked by an earlier, now disconnected observer:
     anything not yet revealed is observed again so it can never stay hidden */
  const mark=(el,d)=>{if(el.classList.contains('in'))return;el.classList.add('rv');if(d)el.style.setProperty('--rv-d',d+'ms');io.observe(el);};
  root.querySelectorAll('section:not([data-no-rv])').forEach(sec=>{
    [...sec.children].forEach(ch=>{
      if(ch.matches('header,[role="dialog"]'))return;
      const groups=ch.matches('[data-stagger]')?[ch]:[...ch.querySelectorAll('[data-stagger]')];
      if(groups.length)groups.forEach(g=>[...g.children].forEach((c,i)=>mark(c,Math.min(i,5)*70)));
      else mark(ch);
    });
  });
  return ()=>io.disconnect();
}

/* Moves focus past the header to the page's h1 (WCAG 2.4.1). A plain #main link would be
   read as a route by the hash router, so this is handled in script. */
function SkipLink(){
  const go=e=>{
    e.preventDefault();
    const h=document.querySelector('main h1')||document.getElementById('main');
    if(!h)return;
    h.setAttribute('tabindex','-1');h.style.outline='none';
    h.focus({preventScroll:true});h.scrollIntoView({block:'center'});
  };
  return <a className="skip" href="#main" onClick={go}>Skip to content</a>;
}

/* Hero entrance plays once per visit, not on every return to the home page. */
let heroPlayed=false;
function useHeroEntrance(){
  const [play]=React.useState(()=>!heroPlayed&&!reducedMotion());
  React.useEffect(()=>{heroPlayed=true;},[]);
  return i=>play?{className:'rise',style:{'--rv-d':(i*90)+'ms'}}:{};
}

Object.assign(window,{reducedMotion,revealSections,SkipLink,useHeroEntrance});
