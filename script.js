function setTheme(t){document.body.className="theme-"+t;}

// Snow effect (basic)
const snow = document.getElementById("snow");
const canvas = document.createElement("canvas");
snow.appendChild(canvas);
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
window.addEventListener("resize",()=>{w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight;});
const flakes = [...Array(70)].map(()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*3+1,s:Math.random()+.5}));
(function loop(){
  ctx.clearRect(0,0,w,h);
  flakes.forEach(f=>{
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    ctx.fill();
    f.y+=f.s;
    if(f.y>h) f.y=0;
  });
  requestAnimationFrame(loop);
})();
