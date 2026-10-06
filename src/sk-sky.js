(function(){
var fs=[
'precision highp float;',
'uniform vec2 r;uniform float t;uniform vec2 sp;uniform float k;uniform float sr;',
'float h(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}',
'float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}',
'float fb(vec2 p){float v=0.,a=.5;for(int i=0;i<6;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}',
'void main(){',
' vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;',
' float T=t*.045;',
' vec2 q=vec2(fb(uv*1.4+vec2(0.,T)),fb(uv*1.4+vec2(5.2,-T)));',
' vec2 w=vec2(fb(uv*2.2+q+vec2(1.7,9.2)+.2*T),fb(uv*2.2+q+vec2(8.3,2.8)-.2*T));',
' float f=fb(uv*1.8+w);',
' vec3 ink=vec3(.067,.078,.165);vec3 night=vec3(.122,.141,.251);vec3 red=vec3(.557,.165,.208);vec3 gold=vec3(.78,.604,.243);',
' vec3 col=mix(ink,night,smoothstep(.2,.9,f));',
' col=mix(col,red*.85,smoothstep(.5,1.05,f*length(w))*.6);',
' float d=length((uv-sp)*vec2(1.,1.08));',
' float sun=smoothstep(sr,sr-.012,d);',
' float glow=exp(-d*3.4/max(k,.6))*.8;',
' col+=gold*glow*(.5+.5*f);',
' col=mix(col,gold*1.12,sun*.95);',
' float dx=(uv.x-sp.x)/k;',
' float ridge=-.24+.26*exp(-abs(dx+.32)*4.)+.2*exp(-abs(dx-.34)*4.5)+.025*sin(dx*13.)+.035*fb(vec2(dx*6.,1.));',
' float ridge2=-.36+.1*exp(-abs(dx+.7)*3.)+.13*exp(-abs(dx-.78)*2.6)+.04*fb(vec2(dx*9.,4.));',
' col=mix(col,night*.6+gold*glow*.07,smoothstep(ridge+.003,ridge-.003,uv.y));',
' col=mix(col,ink*.8,smoothstep(ridge2+.003,ridge2-.003,uv.y));',
' col+=h(gl_FragCoord.xy)*.035-.017;',
' gl_FragColor=vec4(pow(col,vec3(.92)),1.);',
'}'].join('\n');

/* Compile the shader onto a canvas. Returns a draw(t) function, or null if WebGL is unavailable. */
function setup(c,sx,k,sr,keep){
  var gl=c.getContext('webgl',{preserveDrawingBuffer:!!keep,antialias:false});
  if(!gl)return null;
  function sh(tp,src){var x=gl.createShader(tp);gl.shaderSource(x,src);gl.compileShader(x);return gl.getShaderParameter(x,gl.COMPILE_STATUS)?x:null;}
  var a=sh(gl.VERTEX_SHADER,'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'),b=sh(gl.FRAGMENT_SHADER,fs);
  if(!a||!b)return null;
  var pr=gl.createProgram();gl.attachShader(pr,a);gl.attachShader(pr,b);gl.linkProgram(pr);gl.useProgram(pr);
  var bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  var lc=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(lc);gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
  var uR=gl.getUniformLocation(pr,'r'),uT=gl.getUniformLocation(pr,'t');
  gl.uniform2f(gl.getUniformLocation(pr,'sp'),sx,-.09);
  gl.uniform1f(gl.getUniformLocation(pr,'k'),k);
  gl.uniform1f(gl.getUniformLocation(pr,'sr'),sr);
  return {gl:gl,draw:function(t){gl.viewport(0,0,c.width,c.height);gl.uniform2f(uR,c.width,c.height);gl.uniform1f(uT,t);gl.drawArrays(gl.TRIANGLES,0,3);}};
}

/* Static still, used as the poster and for reduced motion. */
function render(w,h,sx,k,sr){
  try{
    var c=document.createElement('canvas');c.width=w;c.height=h;
    var s=setup(c,sx,k,sr,true);if(!s)return null;
    s.draw(12.0);
    var url=c.toDataURL('image/jpeg',.9);
    var ext=s.gl.getExtension('WEBGL_lose_context');if(ext)ext.loseContext();
    return url;
  }catch(e){return null;}
}
var P={d:[.44,1,.085],m:[.07,.42,.06]};
window.SK_SKY={d:render(2160,1350,P.d[0],P.d[1],P.d[2]),m:render(780,1688,P.m[0],P.m[1],P.m[2])};

/* Live sky: animates the same field slowly on a canvas. Returns a stop() function. */
window.SK_SKY_LIVE=function(c,mode){
  var p=P[mode]||P.d,s;
  try{s=setup(c,p[0],p[1],p[2],false);}catch(e){s=null;}
  if(!s)return function(){};
  var raf=0,t0=performance.now(),visible=true;
  function size(){var dpr=Math.min(window.devicePixelRatio||1,1.5),w=Math.round(c.clientWidth*dpr),h=Math.round(c.clientHeight*dpr);if(c.width!==w||c.height!==h){c.width=w;c.height=h;}}
  function loop(now){if(visible){size();s.draw(12.0+(now-t0)/1000);}raf=requestAnimationFrame(loop);}
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(e){visible=e[0].isIntersecting;}):null;
  if(io)io.observe(c);
  raf=requestAnimationFrame(loop);
  return function(){cancelAnimationFrame(raf);if(io)io.disconnect();var ext=s.gl.getExtension('WEBGL_lose_context');if(ext)ext.loseContext();};
};
})();
