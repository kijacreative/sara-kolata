/* Hash router: #/<page>/<section>. Unknown first segments are treated as sections of the home page. */
const PAGES={
  '':{C:HomePage,title:'Sara Kolata, Go to the root'},
  'karmic-recapitulation':{C:MethodPage,title:'Karmic Recapitulation, Sara Kolata'},
  'retreat-center':{C:RetreatPage,title:'The Peru Residency, Sara Kolata'},
  'speaking-press':{C:PressPage,title:'Speaking and press, Sara Kolata'}
};
function parse(){
  const segs=(location.hash.replace(/^#\/?/,'')||'').split('/').filter(Boolean);
  if(PAGES[segs[0]])return {page:segs[0],section:segs[1]||null};
  return {page:'',section:segs[0]||null};
}

function App(){
  const [route,setRoute]=React.useState(parse);
  const m=useViewport()<900;
  React.useEffect(()=>{
    const f=()=>setRoute(parse());
    window.addEventListener('hashchange',f);
    return()=>window.removeEventListener('hashchange',f);
  },[]);
  const {C,title}=PAGES[route.page];
  React.useLayoutEffect(()=>{
    document.title=title;
    const el=route.section&&document.getElementById(route.section);
    if(el)el.scrollIntoView({block:'start',behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'});
  },[route.page,route.section]);
  return <C m={m}/>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
