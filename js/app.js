const $=s=>document.querySelector(s),cl=(x,a,b)=>Math.min(b,Math.max(a,x)),sat=(x,a,b)=>cl((x-a)/(b-a),0,1),F=(x,d=1)=>isFinite(x)?x.toFixed(d):"";
const K={a:11.078,b:2615,c:11.544,d:2796},ATM=1.013;
const pB=t=>Math.exp(K.a-K.b/(t+273.15)),pD=t=>Math.exp(K.c-K.d/(t+273.15));
const tB=p=>K.b/(K.a-Math.log(cl(p,.5,45)))-273.15,tD=p=>K.d/(K.c-Math.log(cl(p,.5,45)))-273.15;
const S0={charge:100,drier:0,txv:100,foul:0,fan:100,wear:0,oil:90,air:100};let S={...S0},M={amb:40,ret:27},mode="sim",sig="",A,imp=0,hist=[],EV0=null,LOG=[],OD={c:.8,d:90},odT=0,odTrip=0;
const SL=[["charge","Refrigerant charge",40,115],["drier","Filter drier restriction",0,100],["txv","TXV opening",0,150],["foul","Condenser fouling",0,100],["fan","Condenser fan speed",0,100],["air","Evaporator airflow",10,100],["wear","Compressor valve wear",0,100],["oil","Oil level",0,100]];
const PR=[["preset_healthy",{}],["preset_leak",{charge:70}],["preset_drier",{drier:80}],["preset_txvc",{txv:50}],["preset_txvo",{txv:140}],["preset_cond",{foul:80}],["preset_fan",{fan:15}],["preset_comp",{wear:60}],["preset_oil",{oil:15}],["preset_over",{charge:112}],["preset_airfilter",{air:50}],["preset_evapfan",{air:15}]];
const RD=[["amb","Ambient air","t"],["ret","Return air","t"],["sup","Supply air","t"],["Ps","1 Suction P","p"],["Ts","1 Suction line","t"],["Pd","2 Discharge P","p"],["Td","2 Discharge line","t"],["Tl1","3 Liquid before drier","t"],["Tl2","4 Liquid after drier","t"],["Toil","5 Oil sump","t"],["dp","5 Oil differential P (ODPS)","p"],["oil","5 Oil level","%"]];
const cv=(v,t)=>imp?(t=="p"?v*14.5038:t=="t"?v*1.8+32:v):v,bk=(v,t)=>imp?(t=="p"?v/14.5038:t=="t"?(v-32)/1.8:v):v,un=t=>t=="p"?(imp?"psi":"bar"):t=="t"?(imp?"°F":"°C"):"%",dv=v=>imp?v*1.8:v,du=()=>imp?"°F":"K",lb=n=>imp?n.replace("°C","°F").replace(" K"," °F").replace("bar","psi"):n;
const FX={
leak:[t("fx_leak_title"),t("fx_leak_desc"),t("fx_leak_check1"),t("fx_leak_check2"),t("fx_leak_check3"),t("fx_leak_check4"),t("fx_leak_check5"),t("fx_leak_check6")],
over:[t("fx_over_title"),t("fx_over_desc"),t("fx_over_check1"),t("fx_over_check2"),t("fx_over_check3"),t("fx_over_check4")],
drier:[t("fx_drier_title"),t("fx_drier_desc"),t("fx_drier_check1"),t("fx_drier_check2"),t("fx_drier_check3"),t("fx_drier_check4"),t("fx_drier_check5")],
txvc:[t("fx_txvc_title"),t("fx_txvc_desc"),t("fx_txvc_check1"),t("fx_txvc_check2"),t("fx_txvc_check3"),t("fx_txvc_check4")],
txvo:[t("fx_txvo_title"),t("fx_txvo_desc"),t("fx_txvo_check1"),t("fx_txvo_check2"),t("fx_txvo_check3"),t("fx_txvo_check4")],
cond:[t("fx_cond_title"),t("fx_cond_desc"),t("fx_cond_check1"),t("fx_cond_check2"),t("fx_cond_check3"),t("fx_cond_check4")],
comp:[t("fx_comp_title"),t("fx_comp_desc"),t("fx_comp_check1"),t("fx_comp_check2"),t("fx_comp_check3"),t("fx_comp_check4")],
oil:[t("fx_oil_title"),t("fx_oil_desc"),t("fx_oil_check1"),t("fx_oil_check2"),t("fx_oil_check3"),t("fx_oil_check4"),t("fx_oil_check5")],
air:[t("fx_air_title"),t("fx_air_desc"),t("fx_air_check1"),t("fx_air_check2"),t("fx_air_check3"),t("fx_air_check4")],
sol:[t("fx_sol_title"),t("fx_sol_desc"),t("fx_sol_check1"),t("fx_sol_check2"),t("fx_sol_check3")]};
function sim(S,amb,ret){const L=100-S.charge,lo=Math.max(0,L),ov=Math.max(0,-L),r=S.drier/100,tx=S.txv/100,f=S.foul/100,fan=Math.max(S.fan,3)/100,w=S.wear/100;
const st=cl(r*.8+(tx<1?(1-tx)*.9:0)+lo/100*1.1,0,1.2),fl=tx>1?(tx-1)*2:0,la=(100-Math.max(S.air,10))/100,SH=cl(6+st*22-fl*7-la*8,0,40),Te=cl(5+.6*(ret-27)-st*9+fl*2+w*6-la*15,-25,25),Tc=cl(amb+15/(fan*(1-.55*f))+ov*.35-lo*.08-w*8-st*3,25,80),SC=cl(6-lo*.22+ov*.55+r*4+(tx<1?(1-tx)*6:0)+f*2,0,30),Ts=Te+SH,Td=Ts+1.35*(Tc-Te)+w*30+(100-S.oil)*.45,Tl1=tB(pD(Tc))-SC;
return{amb,ret,Ps:pD(Te)-ATM,Ts,Pd:pD(Tc)-ATM,Td,Tl1,Tl2:Tl1-r*7,Toil:45+(Tc-55)*.6+(100-S.oil)*.45+w*10+(SH-6)*.5-fl*10,oil:S.oil,sup:Math.max(Te+2,ret-12*Math.pow(100/Math.max(S.air,10),.8)*(1-st*.5-w*.3)),dp:3.2*Math.pow(cl(S.oil/50,0,1),1.5)*(1-sat(5-SH,0,5)*.35)*(1-w*.35)}}
function an(m){const Pse=Math.max(m.Ps+ATM,.6),Pde=Math.max(m.Pd+ATM,1),Te=tD(Pse),Tc=tD(Pde),Tcb=tB(Pde);return{Pse,Pde,Te,Tc,Tcb,SH:m.Ts-Te,SC:Tcb-m.Tl1,APP:Tc-m.amb,dr:m.Tl1-m.Tl2,dTe:Te-(5+.6*(m.ret-27)),ex:m.Td-(m.Ts+1.35*(Tc-Te)),dA:m.ret-m.sup}}
function score(a,m){const hs=sat(a.SH,8,18),ls=sat(a.SC,4,.5),lt=sat(-a.dTe,1,8),dr=sat(a.dr,1.5,5);return{
leak:100*(.35*hs+.4*ls+.25*lt)*(1-.7*dr),over:100*(.55*sat(a.SC,10,20)+.25*sat(a.APP,17,24)+.2*(a.SH<8&&a.SC>9?1:0)),
drier:100*(.55*dr+.25*sat(a.SH,8,16)+.2*lt),txvc:100*(.4*sat(a.SH,9,18)+.3*lt+.3*sat(a.SC,2,5))*(1-.6*dr)*(1-.5*ls),
txvo:100*(.6*sat(a.SH,4,.5)+.3*sat(a.dTe,1,5)+.1*sat(-a.ex,0,10)),cond:100*(.6*sat(a.APP,17,30)+.25*sat(m.Td,92,115)+.15*sat(m.Pd,21,27)),
comp:100*(.4*sat(a.dTe,2,7)+.3*sat(12-a.APP,0,6)+.3*sat(a.ex,5,20)),oil:100*(.45*sat(100-m.oil,50,80)+.25*sat(m.Toil,65,90)+.3*sat(m.dp,2,.8)),air:100*(.35*sat(-a.dTe,2,8)+.3*sat(a.SH,5,2)+.35*sat(a.dA,14,22))}}
function alarms(m,a){const o=[],d=(t,l)=>o.push([t,l]);
if(m.Pd>=27)d("er",t("alarm_hp"));else if(m.Pd>=24)d("wa",t("alarm_hp_wa"));
if(m.Ps<=2)d("er",t("alarm_lp"));else if(a.Te<0)d("wa",t("alarm_freeze"));
if(m.Td>=120)d("er",t("alarm_discharge"));else if(m.Td>=105)d("wa",t("alarm_discharge_wa"));
if(m.oil<25)d("er",t("alarm_oil_trip"));else if(m.oil<40)d("wa",t("alarm_oil_wa"));
if(m.Toil>=75)d("wa",t("alarm_oil_temp"));if(odTrip)d("er",t("alarm_odps_trip"));else if(m.dp<OD.c)d("wa",t("alarm_odps_timer",{t:Math.round(odT),d:OD.d}));else if(m.dp<OD.c+.5)d("wa",t("alarm_odps_low"));
if(a.SH<3)d("wa",t("alarm_sh_wa"));else if(a.SH>15)d("wa",t("alarm_sh_hi"));
if(!o.length)d("ok",t("alarm_ok"));return o}
// diagram
const col={s:"#1e6fff",d:"#e5432d",l:"#f0932b",o:"#c9a800"};
const pipes=[["s","M35 75V318H290V297"],["s","M278 272H250"],["d","M170 272H119"],["d","M107 225V172H130"],["o","M107 277V292H170"],["l","M300 172H323V125"],["l","M323 85V48H130"]];
const fan=(x,y,c)=>`<g transform="translate(${x},${y})"><g class="sp ${c}"><circle r="13" class="fn"/><path d="M-9 0H9M0-9V9M-6-6L6 6M-6 6L6-6" class="fb"/></g></g>`;
const mk=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="7" fill="#0b64c4"/><text x="${x}" y="${y+3}" text-anchor="middle" fill="#fff" font-size="9" font-weight="700">${n}</text></circle>`;
$("#dia").innerHTML=pipes.map(p=>`<path d="${p[1]}" fill="none" stroke="${col[p[0]]}" stroke-width="5"/>`).join("")+pipes.map(p=>`<path d="${p[1]}" class="fl"/>`).join("")+
`<rect x="20" y="20" width="110" height="55" rx="6" class="bx"/>${fan(52,44,"ev")}${fan(98,44,"ev")}<text x="75" y="71" text-anchor="middle" class="tx">Evaporator</text>
<rect id="ice" x="17" y="17" width="116" height="61" rx="8" fill="none" stroke="#9fdcff" stroke-width="3" stroke-dasharray="3 3" opacity="0"/>
<polygon points="150,40 163,48 150,56" class="bx"/><polygon points="176,40 163,48 176,56" class="bx"/><text x="163" y="34" text-anchor="middle" class="tx">TXV</text>
<rect x="196" y="38" width="24" height="20" rx="3" class="bx"/><text x="208" y="70" text-anchor="middle" class="tx" font-size="8">S.Valve</text>
<rect x="238" y="40" width="32" height="16" rx="8" class="bx"/><text x="256" y="70" text-anchor="middle" class="tx" font-size="8">Filter drier</text>
<rect x="311" y="85" width="24" height="40" rx="6" class="bx"/><text x="305" y="107" text-anchor="end" class="tx" font-size="8">Receiver</text>
<rect x="130" y="150" width="170" height="45" rx="6" class="bx"/><rect id="foul" x="130" y="150" width="170" height="45" rx="6" fill="#7a4b1e" opacity="0"/>${fan(175,172,"cd")}${fan(255,172,"cd")}<text x="215" y="207" text-anchor="middle" class="tx">Condenser (air-cooled)</text>
<rect id="comp" x="170" y="250" width="80" height="52" rx="8" fill="#2f9e5b"/><text x="210" y="280" text-anchor="middle" fill="#fff" font-size="10">Compressor</text>
<rect x="95" y="225" width="24" height="52" rx="8" class="bx"/><text x="92" y="253" text-anchor="end" class="tx" font-size="8">Oil sep.</text>
<rect x="278" y="245" width="24" height="52" rx="8" class="bx"/><text x="290" y="240" text-anchor="middle" class="tx" font-size="8">Accumulator</text>
<rect id="odps" x="183" y="230" width="54" height="14" rx="4" fill="#2f9e5b"/><text id="odt" x="210" y="240" text-anchor="middle" fill="#fff" font-size="8">ODPS ok</text><path d="M210 244V250" stroke="var(--mu)" stroke-width="1.5"/><g id="leak" opacity="0"><circle class="dr" cx="323" cy="72" r="2.5" fill="#f0932b"/><circle class="dr" cx="329" cy="68" r="2" fill="#f0932b" style="animation-delay:.4s"/><circle class="dr" cx="318" cy="66" r="2" fill="#f0932b" style="animation-delay:.7s"/></g>
${mk(35,200,1)}${mk(107,200,2)}${mk(323,150,3)}${mk(229,48,4)}${mk(140,292,5)}<text x="8" y="334" class="tx" font-size="8">1 suction  2 discharge  3 liquid before drier  4 after drier  5 oil</text>`;
SL.forEach(([k,n,a,b])=>$("#sl").insertAdjacentHTML("beforeend",`<label class="sl"><span data-i18n="sl_${k}">${n}</span><b id="v_${k}"></b><input type="range" id="s_${k}" min="${a}" max="${b}" value="${S[k]}"></label>`));
SL.forEach(([k])=>$("#s_"+k).oninput=e=>{S[k]=+e.target.value;up()});
PR.forEach(([k,p])=>{const b=document.createElement("button");b.textContent=t(k);b.onclick=()=>{S={...S0,...p};SL.forEach(([k])=>$("#s_"+k).value=S[k]);up()};$("#pr").append(b)});
RD.forEach(([k,n,t])=>{$("#rd").insertAdjacentHTML("beforeend",`<label class="f"><span id="l_${k}" data-i18n="lbl_${k}">${n}</span><input type="number" step="0.1" inputmode="decimal" id="r_${k}"></label>`);$("#r_"+k).oninput=e=>{const v=parseFloat(e.target.value);if(mode=="sim"&&!isFinite(v))return;M[k]=bk(v,t);up()}});
const ul=()=>{RD.forEach(([k,n,t])=>{});$("#l_oc").textContent=t("odps_cutout")+" ("+un("p")+")";$("#oc").value=F(cv(OD.c,"p"),imp?1:2)};ul();
$("#oc").oninput=e=>{const v=parseFloat(e.target.value);if(v>0)OD.c=bk(v,"p")};$("#od").oninput=e=>{const v=parseFloat(e.target.value);if(v>0)OD.d=v};$("#orb").onclick=()=>{odT=0;odTrip=0;up()};
document.querySelectorAll("#unit button").forEach(b=>b.onclick=()=>{imp=+(b.dataset.u=="im");document.querySelectorAll("#unit button").forEach(x=>x.classList.toggle("on",x==b));ul();up(1)});
document.querySelectorAll("#mode button").forEach(b=>b.onclick=()=>{mode=b.dataset.m;document.querySelectorAll("#mode button").forEach(x=>x.classList.toggle("on",x==b));$("#simc").hidden=mode=="dx";$("#dxc").hidden=mode=="sim";sig="";up()});
$("#langBtn").onclick=()=>setLang(currentLang==="en"?"id":"en");
function ph(a,m){const X=h=>30+(h-200)/320*300,Y=p=>190-(Math.log(p)-Math.log(1.5))/(Math.log(32)-Math.log(1.5))*170,hf=t=>200+1.4*t+.0035*t*t,hg=t=>405+.3*t;let L="",V="",g="";
for(let i=0;i<=30;i++){const p=Math.exp(Math.log(1.5)+(Math.log(30)-Math.log(1.5))*i/30);L+=(i?"L":"M")+X(hf(tB(p))).toFixed(1)+" "+Y(p).toFixed(1);V+=(i?"L":"M")+X(hg(tD(p))).toFixed(1)+" "+Y(p).toFixed(1)}
[2,5,10,20,30].forEach(p=>g+=`<path d="M30 ${Y(p)}H335" stroke="var(--bd)" stroke-width=".7"/><text x="2" y="${Y(p)+3}" class="tx" font-size="8">${imp?Math.round(p*14.504):p}</text>`);
const cy=(a,m)=>{const h1=hg(a.Te)+.9*a.SH,h3=hf(a.Tcb)-1.5*a.SC;return[[h1,a.Pse],[h1+.8*(m.Td-m.Ts),a.Pde],[h3,a.Pde],[h3,a.Pse]]},pl=q=>"M"+q.map(([h,p])=>X(h).toFixed(1)+" "+Y(p).toFixed(1)).join("L")+"Z";
const m0=sim(S0,m.amb,m.ret),c0=cy(an(m0),m0),c1=cy(a,m);
$("#ph").innerHTML=g+`<path d="${L}" fill="none" stroke="var(--ac)" stroke-width="1.5"/><path d="${V}" fill="none" stroke="var(--ac)" stroke-width="1.5"/><path d="${pl(c0)}" fill="none" stroke="var(--mu)" stroke-dasharray="4 3"/><path d="${pl(c1)}" fill="rgba(229,67,45,.12)" stroke="var(--er)" stroke-width="2"/>`+c1.map((q,i)=>`<text x="${X(q[0])+4}" y="${Y(q[1])-4}" class="tx" font-weight="700">${i+1}</text>`).join("")+`<text x="185" y="214" class="tx">${t("ph_axis_h")}</text><text x="2" y="12" class="tx" font-size="8">P ${imp?"psia":"bar abs"}</text>`}
function eff(){if(!EV0)return S;const t=EV0.t,f=t<2?t/2:t<8?1:Math.max(0,1-(t-8)/4),e={...S},c=EV0.c;if(c=="ice"){e.txv=S.txv+(15-S.txv)*f;e.drier=cl(S.drier+f*100,0,100)}else if(c=="fan")e.air=S.air+(15-S.air)*f;else{e.txv=S.txv*(1-f);e.drier=cl(S.drier+f*60,0,100)}return e}
function up(w){const E=eff();if(mode=="sim")M=sim(E,M.amb,M.ret);
RD.forEach(([k,n,t])=>{const e=$("#r_"+k),ro=mode=="sim"&&k!="amb"&&k!="ret";e.readOnly=ro;e.classList.toggle("ro",ro);if((mode=="sim"||w)&&document.activeElement!==e)e.value=F(cv(M[k],t),t=="p"?2:t=="%"?0:1)});
SL.forEach(([k])=>$("#v_"+k).textContent=S[k]+"%");
if(!Object.values(M).every(isFinite)){$("#dg").innerHTML="<p class='mu'>Enter every reading to see the diagnosis.</p>";sig="";return}
A=an(M);const al=alarms(M,A),tr=al.some(x=>x[0]=="er");
$("#alm").innerHTML=al.map(([t,l])=>`<span class="ch ${t}">${l}</span>`).join("");
$("#dia").classList.toggle("trip",tr);$("#odps").setAttribute("fill",odTrip?"#d12f2f":M.dp<OD.c?"#c27800":"#2f9e5b");$("#odt").textContent=odTrip?t("odps_status_trip"):M.dp<OD.c?t("odps_status_timer",{t:Math.round(odT)}):t("odps_status_ok");$("#ods").textContent=odTrip?t("odps_report_trip"):M.dp<OD.c?t("odps_report_timer",{t:Math.round(odT),d:OD.d}):t("odps_report_ok",{ci:F(cv(OD.c+.32,"p"),imp?1:2),u:un("p")});
const ap=mode=="sim"?E:{foul:100*sat(A.APP,17,32)*.6,fan:100,charge:A.SC<1.5&&A.SH>10?70:100};
$("#ice").setAttribute("opacity",A.Te<0?1:0);$("#foul").setAttribute("opacity",ap.foul/100*.7);$("#leak").setAttribute("opacity",ap.charge<92?1:0);
document.querySelectorAll(".cd").forEach(e=>{const f=ap.fan/100;e.style.animationDuration=(.8/Math.max(f,.1))+"s";e.style.animationPlayState=f<.05?"paused":""});
const C=[["Evaporating dew °C",A.Te,-99,99,-99,99],["Condensing dew °C",A.Tc,-99,99,-99,99],["Superheat K",A.SH,4,9,2,14],["Subcooling K",A.SC,3,9,1,13],["Condenser approach K",A.APP,8,18,5,24],["Drier ΔT K",A.dr,-1,1,-1,3],["Air ΔT across coil K",A.dA,8,14,5,17],["Oil differential (ODPS) bar",M.dp,OD.c+.5,4.2,OD.c,5]];
$("#calc").innerHTML=C.map(([n,v,a,b,c,d])=>`<div class="k ${v>=a&&v<=b?"ok":v>=c&&v<=d?"wa":"er"}"><span>${lb(n)}</span><b>${F(n.includes("°C")?cv(v,"t"):n.includes(" K")?dv(v):n.includes("bar")?cv(v,"p"):v,n.includes("bar")?2:1)}</b></div>`).join("").replace(/k er"><span>(Evaporating|Condensing)/g,'k"><span>$1').replace(/k ok"><span>(Evaporating|Condensing)/g,'k"><span>$1');
ph(A,M);
const sc=score(A,M),rk=Object.entries(sc).sort((a,b)=>b[1]-a[1]).slice(0,3).filter((x,i)=>i==0||x[1]>=15),sg=rk.map(x=>x[0]).join()+(rk[0][1]<25);
if(sg!=sig){sig=sg;$("#dg").innerHTML=rk[0][1]<25?`<p style="color:var(--ok)"><b>${t("rep_healthy")}</b></p>`:
rk.map(([k,v],i)=>{const f=FX[k];return`<details ${i==0?"open":""}><summary>${f[0]} (${Math.round(v)}%)</summary><div class="bar"><i style="width:${v}%"></i></div><p class="mu">${f[1]}</p><ol>${f.slice(2).map(s=>`<li><label><input type="checkbox"><span>${s}</span></label></li>`).join("")}</ol></details>`}).join("")}}
const EVT=[["ice",t("ev_ice"),"ice plug at TXV"],["fan",t("ev_fan"),"evap fan stops"],["sol",t("ev_sol"),"solenoid sticks"]];
EVT.forEach(([c,n,h])=>{const b=document.createElement("button");b.textContent=n;b.onclick=()=>{if(mode!="sim"||EV0)return;EV0={c,t:0,n,h,min:99};$("#evn").textContent=t("ev_running",{name:n})};$("#ev").append(b)});
function trd(){const X=i=>30+i*3.86,Y=p=>105-cl(p,0,8)*11.9,pts=hist.map((p,i)=>X(i+80-hist.length).toFixed(1)+","+Y(p).toFixed(1)).join(" ");
$("#tr").innerHTML=`<path d="M30 ${Y(2)}H335" stroke="var(--er)" stroke-dasharray="4 3"/><text x="32" y="${Y(2)-3}" class="tx" style="fill:var(--er)">LP cut-out ${F(cv(2,"p"),imp?0:1)}</text><text x="2" y="${Y(0)}" class="tx">0</text><text x="2" y="${Y(8)+8}" class="tx">${F(cv(8,"p"),0)}</text><polyline points="${pts}" fill="none" stroke="var(--ac)" stroke-width="2"/><text x="335" y="120" text-anchor="end" class="tx">last 40 s, ${un("p")} gauge</text>`}
setInterval(()=>{if(isFinite(M.dp)){const o=odT,t=odTrip;if(!odTrip){if(M.dp<OD.c)odT+=.5;else if(M.dp>=OD.c+.32)odT=0}if(odT>=OD.d)odTrip=1;if(Math.round(o)!=Math.round(odT)||t!=odTrip)up()}if(EV0){EV0.t+=.5;up();EV0.min=Math.min(EV0.min,M.Ps);if(EV0.t>=12){LOG.push(`${EV0.n}: suction fell to ${F(cv(EV0.min,"p"),1)} ${un("p")}, back to normal after about 12 s`);$("#evn").textContent=t("ev_back",{h:EV0.h});EV0=null;up()}}
if(isFinite(M.Ps)){hist.push(M.Ps);if(hist.length>80)hist.shift()}trd()},500);
function rep(){const E=A||an(M),sc=score(E,M),rk=Object.entries(sc).sort((a,b)=>b[1]-a[1]).slice(0,3).filter((x,i)=>i==0||x[1]>=15),al=alarms(M,E).map(x=>x[1]).join(", "),tr=x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`;
const rows=RD.map(([k,n,t])=>tr([n,F(cv(M[k],t),t=="p"?2:t=="%"?0:1)+" "+un(t)])).join(""),T=" "+un("t"),D=" "+du();
const cs=[["Evaporating dew",F(cv(E.Te,"t"))+T],["Condensing dew",F(cv(E.Tc,"t"))+T],["Superheat",F(dv(E.SH))+D],["Subcooling",F(dv(E.SC))+D],["Condenser approach",F(dv(E.APP))+D],["Drier ΔT",F(dv(E.dr))+D],["Air ΔT",F(dv(E.dA))+D]].map(tr).join("");
$("#rep").innerHTML=`<h2>${t("rep_h2")}</h2><p>${$("#rt").value||t("rep_date_label")}, ${$("#rn").value||t("rep_tech_label")}, ${new Date().toLocaleString()}<br>${t("rep_meta",{source:mode=="sim"?"simulation":"field readings"})}</p><h3>${t("rep_readings")}</h3><table class="rt">${rows}</table><h3>${t("rep_calculated")}</h3><table class="rt">${cs}</table><h3>${t("rep_alarms")}</h3><p>${al}</p><h3>${t("rep_likely")}</h3><ol>${rk.map(([k,v])=>`<li>${FX[k][0]} (${Math.round(v)}%)</li>`).join("")}</ol><h3>${t("rep_checks")}</h3><ol>${FX[rk[0][0]].slice(2).map(s=>`<li>${s}</li>`).join("")}</ol><h3>${t("rep_events")}</h3><p>${LOG.join("<br>")||t("rep_none_recorded")}</p><h3>${t("rep_notes_label")}</h3><p>${$("#rm").value.replace(/</g,"&lt;")||t("rep_none")}</p><p>${t("rep_disclaimer")}</p>`;$("#rep").style.display="block"}
$("#bp").onclick=()=>{rep();try{window.print()}catch(e){}};
$("#bc").onclick=async()=>{rep();try{await navigator.clipboard.writeText($("#rep").innerText);$("#bc").textContent=t("rep_copied")}catch(e){$("#bc").textContent=t("rep_copy_blocked")}};
up();
