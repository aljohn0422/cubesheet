var i_=Object.defineProperty;var Lp=i=>{throw TypeError(i)};var r_=(i,e,t)=>e in i?i_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var F=(i,e,t)=>r_(i,typeof e!="symbol"?e+"":e,t),qh=(i,e,t)=>e.has(i)||Lp("Cannot "+t);var b=(i,e,t)=>(qh(i,e,"read from private field"),t?t.call(i):e.get(i)),J=(i,e,t)=>e.has(i)?Lp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),he=(i,e,t,n)=>(qh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Qe=(i,e,t)=>(qh(i,e,"access private method"),t);var Pl=(i,e,t,n)=>({set _(r){he(i,e,r,t)},get _(){return b(i,e,n)}});import"./Bg9kRutz.js";import{p as Qi,y as Ft,d as er,g as Yt,w as rh,A as _t,as as sh,B as vt,z as rn,C as bt,at as kd,u as Tf,G as Bd,h as zc}from"./3A8eJu0O.js";import{c as Xn,a as mt,t as on,s as Mr,e as s_,r as a_}from"./CWkCRZO7.js";import{u as o_,a as l_,b as Yh,s as bo,c as ah,m as c_,d as gl,I as Af,e as Ef,D as u_,f as h_,g as d_,X as f_,h as p_,P as m_,i as oi,B as Pp,j as Dp,k as Np,l as Up,S as g_}from"./x2FqO4wf.js";import{p as jt,i as Oc,r as Da,b as oh,l as Cf,s as Ta,c as Hn}from"./Vxqj_fK5.js";import{p as v_}from"./qisOO_td.js";import{_ as pt}from"./C1FmrZbK.js";import"./4x3YFF9K.js";import{b as x_}from"./De_r6stD.js";var y_=on("<button><!></button>");function __(i,e){Qi(e,!0);let t=jt(e,"id",19,o_),n=jt(e,"ref",15,null),r=jt(e,"disabled",3,!1),s=Da(e,["$$slots","$$events","$$legacy","id","ref","children","child","disabled"]);const a=l_({id:Yh.with(()=>t()),ref:Yh.with(()=>n(),h=>n(h)),disabled:Yh.with(()=>!!r())}),o=rh(()=>c_(s,a.props));var l=Xn(),c=Ft(l);{var u=h=>{var f=Xn(),p=Ft(f);bo(p,()=>e.child,()=>({props:Yt(o)})),mt(h,f)},d=h=>{var f=y_();let p;var v=_t(f);bo(v,()=>e.children??sh),vt(f),rn(()=>p=ah(f,p,{...Yt(o)})),mt(h,f)};Oc(c,h=>{e.child?h(u):h(d,!1)})}mt(i,l),er()}var M_=on("<div></div>");function w_(i,e){Qi(e,!0);let t=jt(e,"ref",15,null),n=Da(e,["$$slots","$$events","$$legacy","ref","class"]);var r=M_();let s;oh(r,a=>t(a),()=>t()),rn(a=>s=ah(r,s,{class:a,...n}),[()=>gl("bg-muted animate-pulse rounded-md",e.class)]),mt(i,r),er()}function S_(i,e){const t=Cf(e,["children","$$slots","$$events","$$legacy"]);Af(i,Ta({name:"pause"},()=>t,{iconNode:[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]],children:(r,s)=>{var a=Xn(),o=Ft(a);Ef(o,e,"default",{}),mt(r,a)},$$slots:{default:!0}}))}function b_(i,e){const t=Cf(e,["children","$$slots","$$events","$$legacy"]);Af(i,Ta({name:"play"},()=>t,{iconNode:[["polygon",{points:"6 3 20 12 6 21 6 3"}]],children:(r,s)=>{var a=Xn(),o=Ft(a);Ef(o,e,"default",{}),mt(r,a)},$$slots:{default:!0}}))}function T_(i,e){const t=Cf(e,["children","$$slots","$$events","$$legacy"]);Af(i,Ta({name:"square"},()=>t,{iconNode:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]],children:(r,s)=>{var a=Xn(),o=Ft(a);Ef(o,e,"default",{}),mt(r,a)},$$slots:{default:!0}}))}var A_=on("<div><!></div>");function Av(i,e){Qi(e,!0);let t=jt(e,"ref",15,null),n=Da(e,["$$slots","$$events","$$legacy","ref","class","children"]);var r=A_();let s;var a=_t(r);bo(a,()=>e.children??sh),vt(r),oh(r,o=>t(o),()=>t()),rn(o=>s=ah(r,s,{class:o,...n}),[()=>gl("bg-card text-card-foreground rounded-lg border shadow-sm",e.class)]),mt(i,r),er()}var E_=on("<div><!></div>");function Ev(i,e){Qi(e,!0);let t=jt(e,"ref",15,null),n=Da(e,["$$slots","$$events","$$legacy","ref","class","children"]);var r=E_();let s;var a=_t(r);bo(a,()=>e.children??sh),vt(r),oh(r,o=>t(o),()=>t()),rn(o=>s=ah(r,s,{class:o,...n}),[()=>gl("p-6",e.class)]),mt(i,r),er()}function C_(i,e){Qi(e,!0);let t=jt(e,"ref",15,null),n=Da(e,["$$slots","$$events","$$legacy","ref","class"]);var r=Xn(),s=Ft(r);const a=rh(()=>gl("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",e.class));Hn(s,()=>u_,(o,l)=>{l(o,Ta({get class(){return Yt(a)}},()=>n,{get ref(){return t()},set ref(c){t(c)}}))}),mt(i,r),er()}var R_=on('<!> <span class="sr-only">Close</span>',1),I_=on("<!> <!>",1),L_=on("<!> <!>",1);function P_(i,e){Qi(e,!0);let t=jt(e,"ref",15,null),n=Da(e,["$$slots","$$events","$$legacy","ref","class","portalProps","children"]);var r=Xn(),s=Ft(r);Hn(s,()=>U_,(a,o)=>{o(a,Ta(()=>e.portalProps,{children:(l,c)=>{var u=L_(),d=Ft(u);Hn(d,()=>C_,(p,v)=>{v(p,{})});var h=bt(d,2);const f=rh(()=>gl("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",e.class));Hn(h,()=>h_,(p,v)=>{v(p,Ta({get class(){return Yt(f)}},()=>n,{get ref(){return t()},set ref(g){t(g)},children:(g,m)=>{var _=I_(),y=Ft(_);bo(y,()=>e.children??sh);var x=bt(y,2);Hn(x,()=>d_,(P,A)=>{A(P,{class:"ring-offset-background focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(C,I)=>{var S=R_(),M=Ft(S);f_(M,{class:"size-4"}),kd(2),mt(C,S)},$$slots:{default:!0}})}),mt(g,_)},$$slots:{default:!0}}))}),mt(l,u)},$$slots:{default:!0}}))}),mt(i,r),er()}const D_=p_,N_=__,U_=m_;var Cv=class{is(i){return this instanceof i}as(i){return this instanceof i?this:null}},Er=class extends Cv{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}};function z_(i,e=!0){if(!e)return i;switch(i){case 1:return-1;case-1:return 1}}function Rv(i,e){return e===-1?Array.from(i).reverse():i}function O_(i){return Array.from(i).reverse()}function*F_(i,e){e===-1?yield*k_(i):yield*i}function*k_(i){for(const e of Array.from(i).reverse())yield e}var Vd=2147483647,Gd="2^31 - 1",B_=-2147483648,ss,as,Ms,Gn=(Ms=class extends Er{constructor(t,n){super();J(this,ss);J(this,as);he(this,ss,To(t)),he(this,as,To(n))}get A(){return b(this,ss)}get B(){return b(this,as)}isIdentical(t){const n=t.as(Ms);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new Ms(b(this,as),b(this,ss))}*experimentalExpand(t=1,n){n??(n=1/0),n===0?yield t===1?this:this.invert():t===1?(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(-1,n-1),yield*this.B.experimentalExpand(-1,n-1)):(yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(-1,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(t){return`[${b(this,ss).toString(t)}, ${b(this,as).toString(t)}]`}},ss=new WeakMap,as=new WeakMap,Ms),ca,ua,ws,Tn=(ws=class extends Er{constructor(t,n){super();J(this,ca);J(this,ua);he(this,ca,To(t)),he(this,ua,To(n))}get A(){return b(this,ca)}get B(){return b(this,ua)}isIdentical(t){const n=t.as(ws);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new ws(b(this,ca),b(this,ua).invert())}*experimentalExpand(t,n){n??(n=1/0),n===0?yield t===1?this:this.invert():(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(t,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(t){return`[${this.A.toString(t)}: ${this.B.toString(t)}]`}},ca=new WeakMap,ua=new WeakMap,ws),pr,ha,Na=(ha=class extends Er{constructor(t){super();J(this,pr);if(t.includes(`
`)||t.includes("\r"))throw new Error("LineComment cannot contain newline");he(this,pr,t)}get text(){return b(this,pr)}isIdentical(t){const n=t;return t.is(ha)&&b(this,pr)===b(n,pr)}invert(){return this}*experimentalExpand(t=1,n=1/0){yield this}toString(t){return`//${b(this,pr)}`}},pr=new WeakMap,ha),wr=class Iv extends Er{toString(e){return`
`}isIdentical(e){return e.is(Iv)}invert(){return this}*experimentalExpand(e=1,t=1/0){yield this}},pn=class Lv extends Er{constructor(){super(...arguments);F(this,"experimentalNISSGrouping")}toString(t){return"."}isIdentical(t){return t.is(Lv)}invert(){return this}*experimentalExpand(t=1,n=1/0){yield this}},os,jg,Hd=(jg=class{constructor(){J(this,os,[])}push(i){b(this,os).push(i)}experimentalPushAlg(i){for(const e of i.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return b(this,os).length}toAlg(){return new Se(b(this,os))}reset(){he(this,os,[])}},os=new WeakMap,jg);function Dl(i,e){return i?parseInt(i):e}var zp=/^(\d+)?('?)/,V_=/^[_\dA-Za-z]/,G_=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,H_=/^[^\n]*/,W_=/^(-?\d+), ?/,X_=/^(-?\d+)\)/;function Pv(i){return new Rf().parseAlg(i)}function q_(i){return new Rf().parseMove(i)}function Y_(i){return new Rf().parseQuantumMove(i)}var Nn=Symbol("startCharIndex"),gi=Symbol("endCharIndex");function Gt(i,e,t){const n=i;return n[Nn]=e,n[gi]=t,n}function $_(i,e){return Nn in i&&(e[Nn]=i[Nn]),gi in i&&(e[gi]=i[gi]),e}var Mn,Fe,da,Jg,Rf=(Jg=class{constructor(){J(this,Mn,"");J(this,Fe,0);J(this,da,[])}parseAlg(i){he(this,Mn,i),he(this,Fe,0);const e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const t=Array.from(e.childAlgNodes());if(b(this,da).length>0)for(const a of b(this,da).reverse())t.push(a);const n=new Se(t),{[Nn]:r,[gi]:s}=e;return Gt(n,r,s),n}parseMove(i){he(this,Mn,i),he(this,Fe,0);const e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(i){he(this,Mn,i),he(this,Fe,0);const e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(b(this,Fe)!==b(this,Mn).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(i){let e=b(this,Fe),t=b(this,Fe);const n=new Hd;let r=!1;const s=a=>{if(r)throw new Error(`Unexpected character at index ${a}. Are you missing a space?`)};e:for(;b(this,Fe)<b(this,Mn).length;){const a=b(this,Fe);if(i.includes(b(this,Mn)[b(this,Fe)]))return Gt(n.toAlg(),e,t);if(this.tryConsumeNext(" ")){r=!1,n.experimentalNumAlgNodes()===0&&(e=b(this,Fe));continue e}else if(V_.test(b(this,Mn)[b(this,Fe)])){s(a);const o=this.parseMoveImpl();n.push(o),r=!0,t=b(this,Fe);continue e}else if(this.tryConsumeNext("(")){s(a);const o=this.tryRegex(W_);if(o){const l=o[1],c=b(this,Fe),u=this.parseRegex(X_),d=Gt(new N(new Gi("U_SQ_"),parseInt(l)),a+1,a+1+l.length),h=Gt(new N(new Gi("D_SQ_"),parseInt(u[1])),c,b(this,Fe)-1),f=Gt(new Se([d,h]),a+1,b(this,Fe)-1);n.push(Gt(new dn(f),a,b(this,Fe))),r=!0,t=b(this,Fe);continue e}else{const l=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const c=this.parseAmount();n.push(Gt(new dn(l,c),a,b(this,Fe))),r=!0,t=b(this,Fe);continue e}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const o=this.parseAlgWithStopping([")"]);this.popNext();const l=new dn(o,-1),c=new pn;l.experimentalNISSPlaceholder=c,c.experimentalNISSGrouping=l,b(this,da).push(l),n.push(c)}else if(this.tryConsumeNext("[")){s(a);const o=this.parseAlgWithStopping([",",":"]),l=this.popNext(),c=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let u;switch(l){case":":{u=Gt(new Tn(o,c),a,b(this,Fe)),r=!0,t=b(this,Fe);break}case",":{u=Gt(new Gn(o,c),a,b(this,Fe)),r=!0,t=b(this,Fe);break}default:throw new Error("unexpected parsing error")}const d=b(this,Fe),h=this.parseAmount();if(h===1)n.push(u);else{const f=Gt(new Se([u]),a,d),p=Gt(new dn(f,h),a,b(this,Fe));n.push(p)}r=!0,t=b(this,Fe);continue e}else if(this.tryConsumeNext(`
`)){n.push(Gt(new wr,a,b(this,Fe))),r=!1,t=b(this,Fe);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){s(a);const[o]=this.parseRegex(H_);n.push(Gt(new Na(o),a,b(this,Fe))),r=!1,t=b(this,Fe);continue e}else{n.push(Gt(new N("_SLASH_"),a,b(this,Fe))),r=!0,t=b(this,Fe);continue e}else if(this.tryConsumeNext(".")){s(a),n.push(Gt(new pn,a,b(this,Fe))),r=!0,t=b(this,Fe);continue e}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(b(this,Fe)!==b(this,Mn).length)throw new Error("did not finish parsing?");if(i.length>0)throw new Error("expected stopping");return Gt(n.toAlg(),e,t)}parseQuantumMoveImpl(){const[,,,i,e,t]=this.parseRegex(G_);return new Gi(t,Dl(e,void 0),Dl(i,void 0))}parseMoveImpl(){const i=b(this,Fe);if(this.tryConsumeNext("/"))return Gt(new N("_SLASH_"),i,b(this,Fe));let e=this.parseQuantumMoveImpl(),[t,n]=this.parseAmountAndTrackEmptyAbsAmount();const r=this.parseMoveSuffix();if(r){if(t<0)throw new Error("uh-oh");if((r==="++"||r==="--")&&t!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((r==="++"||r==="--")&&!n)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((r==="+"||r==="-")&&n)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");r.startsWith("+")&&(e=e.modified({family:`${e.family}_${r==="+"?"PLUS":"PLUSPLUS"}_`})),r.startsWith("-")&&(e=e.modified({family:`${e.family}_${r==="-"?"PLUS":"PLUSPLUS"}_`}),t*=-1)}return Gt(new N(e,t),i,b(this,Fe))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const i=b(this,Fe),[,e,t]=this.parseRegex(zp);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${i}: An amount can only start with 0 if it's exactly the digit 0.`);return[Dl(e,1)*(t==="'"?-1:1),!e]}parseAmount(){const i=b(this,Fe),[,e,t]=this.parseRegex(zp);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${i}: An amount number can only start with 0 if it's exactly the digit 0.`);return Dl(e,1)*(t==="'"?-1:1)}parseRegex(i){const e=i.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return he(this,Fe,b(this,Fe)+e[0].length),e}tryRegex(i){const e=i.exec(this.remaining());return e===null?null:(he(this,Fe,b(this,Fe)+e[0].length),e)}remaining(){return b(this,Mn).slice(b(this,Fe))}popNext(){const i=b(this,Mn)[b(this,Fe)];return Pl(this,Fe)._++,i}tryConsumeNext(i){return b(this,Mn)[b(this,Fe)]===i?(Pl(this,Fe)._++,!0):!1}mustConsumeNext(i){const e=this.popNext();if(e!==i)throw new Error(`expected \`${i}\` while parsing, encountered ${e}`);return e}},Mn=new WeakMap,Fe=new WeakMap,da=new WeakMap,Jg),Op=new Set;function Dv(i){Op.has(i)||(console.warn(i),Op.add(i))}var Wd=class{constructor(i,e=1){F(this,"quantum");F(this,"amount");if(this.quantum=i,this.amount=e,!Number.isInteger(this.amount)||this.amount<B_||this.amount>Vd)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${Gd}.`)}suffix(){let i="";const e=Math.abs(this.amount);return e!==1&&(i+=e),this.amount<0&&(i+="'"),i}isIdentical(i){return this.quantum.isIdentical(i.quantum)&&this.amount===i.amount}*experimentalExpand(i,e){const t=Math.abs(this.amount),n=z_(i,this.amount<0);for(let r=0;r<t;r++)yield*this.quantum.experimentalExpand(n,e)}},Di,$t,Zt,Ss,Gi=(Ss=class extends Cv{constructor(t,n,r){super();J(this,Di);J(this,$t);J(this,Zt);if(he(this,Di,t),he(this,$t,n??null),he(this,Zt,r??null),Object.freeze(this),b(this,$t)!==null&&(!Number.isInteger(b(this,$t))||b(this,$t)<1||b(this,$t)>Vd))throw new Error(`QuantumMove inner layer must be a positive integer below ${Gd}.`);if(b(this,Zt)!==null&&(!Number.isInteger(b(this,Zt))||b(this,Zt)<1||b(this,Zt)>Vd))throw new Error(`QuantumMove outer layer must be a positive integer below ${Gd}.`);if(b(this,Zt)!==null&&b(this,$t)!==null&&b(this,$t)<=b(this,Zt))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(b(this,Zt)!==null&&b(this,$t)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(t){return Y_(t)}modified(t){return new Ss(t.family??b(this,Di),t.innerLayer??b(this,$t),t.outerLayer??b(this,Zt))}isIdentical(t){const n=t;return t.is(Ss)&&b(this,Di)===b(n,Di)&&b(this,$t)===b(n,$t)&&b(this,Zt)===b(n,Zt)}get family(){return b(this,Di)}get outerLayer(){return b(this,Zt)}get innerLayer(){return b(this,$t)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(t){let n=b(this,Di);return b(this,$t)!==null&&(n=String(b(this,$t))+n,b(this,Zt)!==null&&(n=`${String(b(this,Zt))}-${n}`)),n}},Di=new WeakMap,$t=new WeakMap,Zt=new WeakMap,Ss),qt,Eu,Zo,Xd,di,N=(di=class extends Er{constructor(...t){super();J(this,Zo);J(this,qt);J(this,Eu);if(typeof t[0]=="string")if(t[1]??null){he(this,qt,new Wd(Gi.fromString(t[0]),t[1]));return}else return di.fromString(t[0]);he(this,qt,new Wd(t[0],t[1]))}isIdentical(t){const n=t.as(di);return!!n&&b(this,qt).isIdentical(b(n,qt))}invert(){return $_(this,new di(b(this,qt).quantum,Qe(this,Zo,Xd).call(this)?this.amount:-this.amount))}*experimentalExpand(t=1){t===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return b(this,qt).quantum}modified(t){return new di(b(this,qt).quantum.modified(t),t.amount??this.amount)}static fromString(t){return q_(t)}get amount(){return b(this,qt).amount}get type(){return Dv("deprecated: type"),"blockMove"}get family(){return b(this,qt).quantum.family??void 0}get outerLayer(){return b(this,qt).quantum.outerLayer??void 0}get innerLayer(){return b(this,qt).quantum.innerLayer??void 0}toString(t){if((t==null?void 0:t.notation)!=="LGN"){if(Qe(this,Zo,Xd).call(this))return"/";if(this.family.endsWith("_PLUS_"))return b(this,qt).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const n=Math.abs(this.amount);return b(this,qt).quantum.toString().slice(0,-10)+(n===1?"":n)+(this.amount<0?"--":"++")}}return b(this,qt).quantum.toString(t)+b(this,qt).suffix()}},qt=new WeakMap,Eu=new WeakMap,Zo=new WeakSet,Xd=function(){return this.isIdentical(b(this,Eu)??he(this,Eu,new di("_SLASH_")))},di),Z_=class{constructor(){F(this,"quantumU_SQ_",null);F(this,"quantumD_SQ_",null)}format(i,e){if((e==null?void 0:e.notation)==="LGN"||i.amount!==1)return null;const t=this.tuple(i);return t?`(${t.map(n=>n.amount).join(", ")})`:null}tuple(i){var t,n;if(i.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new Gi("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new Gi("D_SQ_"));const e=i.alg;if(e.experimentalNumChildAlgNodes()===2){const[r,s]=e.childAlgNodes();if((t=r.as(N))!=null&&t.quantum.isIdentical(this.quantumU_SQ_)&&((n=s.as(N))!=null&&n.quantum.isIdentical(this.quantumD_SQ_)))return[r,s]}return null}},$h=new Z_,wn,Cu,Nv,br,dn=(br=class extends Er{constructor(t,n){super();J(this,Cu);J(this,wn);F(this,"experimentalNISSPlaceholder");const r=To(t);he(this,wn,new Wd(r,n))}isIdentical(t){const n=t;return t.is(br)&&b(this,wn).isIdentical(b(n,wn))}get alg(){return b(this,wn).quantum}get amount(){return b(this,wn).amount}get experimentalRepetitionSuffix(){return b(this,wn).suffix()}invert(){const t=$h.tuple(this);if(t){const[n,r]=t;return new br(new Se([n.invert(),r.invert()]))}return new br(b(this,wn).quantum,-b(this,wn).amount)}*experimentalExpand(t=1,n){n??(n=1/0),n===0?yield t===1?this:this.invert():yield*b(this,wn).experimentalExpand(t,n-1)}static fromString(){throw new Error("unimplemented")}toString(t){return $h.format(this,t)??`${Qe(this,Cu,Nv).call(this,t)}${b(this,wn).suffix()}`}experimentalAsSquare1Tuple(){return $h.tuple(this)}},wn=new WeakMap,Cu=new WeakSet,Nv=function(t){const n=b(this,wn).quantum.toString(t),r=this.alg.childAlgNodes(),{value:s}=r.next();return r.next().done&&(s!=null&&s.is(Gn)||s!=null&&s.is(Tn))?n:`(${n})`},br);function Pi(i,e){return i instanceof e}function K_(i){return Pi(i,dn)||Pi(i,Na)||Pi(i,Gn)||Pi(i,Tn)||Pi(i,N)||Pi(i,wr)||Pi(i,pn)}function Uv(i,e,t){if(e.is(dn))return i.traverseGrouping(e,t);if(e.is(N))return i.traverseMove(e,t);if(e.is(Gn))return i.traverseCommutator(e,t);if(e.is(Tn))return i.traverseConjugate(e,t);if(e.is(pn))return i.traversePause(e,t);if(e.is(wr))return i.traverseNewline(e,t);if(e.is(Na))return i.traverseLineComment(e,t);throw new Error("unknown AlgNode")}function zv(i){if(i.is(dn)||i.is(N)||i.is(Gn)||i.is(Tn)||i.is(pn)||i.is(wr)||i.is(Na))return i;throw new Error("internal error: expected AlgNode")}var Ua=class{traverseAlgNode(i,e){return Uv(this,i,e)}traverseIntoAlgNode(i,e){return zv(this.traverseAlgNode(i,e))}},Is=class extends Ua{traverseAlgNode(i){return Uv(this,i,void 0)}traverseIntoAlgNode(i){return zv(this.traverseAlgNode(i))}};function Fn(i,e){const t=new i(...e??[]);return t.traverseAlg.bind(t)}var j_="any-direction",Ov=class{constructor(i={}){this.config=i}cancelQuantum(){const{cancel:i}=this.config;return i===!0?j_:i===!1?"none":(i==null?void 0:i.directional)??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:i}=this.config;return i===!0||i===!1?"canonical-centered":i!=null&&i.puzzleSpecificModWrap?i==null?void 0:i.puzzleSpecificModWrap:(i==null?void 0:i.directional)==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){var i;return((i=this.config.puzzleLoader)==null?void 0:i.puzzleSpecificSimplifyOptions)??this.config.puzzleSpecificSimplifyOptions}};function J_(i,e){return i*Math.sign(e.amount)>=0}function Fv(i,e,t=0){return((i-t)%e+e)%e+t}function kv(i,e,t){var l;const n=new Ov(t),r=Array.from(i.childAlgNodes());let s=[e];function a(){return new Se([...r,...s])}function o(c){var p;if(n.cancelPuzzleSpecificModWrap()==="none")return c;const u=(p=n.puzzleSpecificSimplifyOptions())==null?void 0:p.quantumMoveOrder;if(!u)return c;const d=u(e.quantum);let h;switch(n.cancelPuzzleSpecificModWrap()){case"gravity":{h=-Math.floor((d-(c.amount<0?0:1))/2);break}case"canonical-centered":{h=-Math.floor((d-1)/2);break}case"canonical-positive":{h=0;break}case"preserve-sign":{h=c.amount<0?1-d:0;break}default:throw new Error("Unknown mod wrap")}const f=Fv(c.amount,d,h);return c.modified({amount:f})}if(n.cancelAny()){let c;const u=(l=n.puzzleSpecificSimplifyOptions())==null?void 0:l.axis;if(u)c=v=>u.areQuantumMovesSameAxis(e.quantum,v.quantum);else{const v=e.quantum.toString();c=g=>g.quantum.toString()===v}const d=n.cancelQuantum()==="same-direction",h=new Map;h.set(e.quantum.toString(),Math.sign(e.amount));let f;for(f=r.length-1;f>=0;f--){const v=r[f].as(N);if(!v||!c(v))break;const g=v.quantum.toString();if(d){const m=h.get(g);if(m&&!J_(m,v))break;h.set(g,Math.sign(v.amount))}}const p=[...r.splice(f+1),e];if(u)s=u.simplifySameAxisMoves(p,n.cancelPuzzleSpecificModWrap()!=="none");else{const v=p.reduce((g,m)=>g+m.amount,0);if(h.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new N(e.quantum,v)]}}return s=s.map(c=>o(c)).filter(c=>c.amount!==0),a()}function Q_(i,e,t){const n=e.as(N);return n?kv(i,n,t):new Se([...i.childAlgNodes(),e])}var Ru,Dn,qd,lo,Yd,Qg,eM=(Qg=class extends Ua{constructor(){super(...arguments);J(this,Dn);J(this,Ru)}*traverseAlg(e,t){if(t.depth===0){yield*e.childAlgNodes();return}let n=[];const r=Qe(this,Dn,lo).call(this,t);for(const s of e.childAlgNodes())for(const a of this.traverseAlgNode(s,r))n=Array.from(Q_(new Se(n),a,r).childAlgNodes());for(const s of n)yield s}*traverseGrouping(e,t){if(t.depth===0){yield e;return}if(e.amount===0)return;const n=new dn(this.traverseAlg(e.alg,Qe(this,Dn,lo).call(this,t)),e.amount);if(n.alg.experimentalIsEmpty())return;const r=Qe(this,Dn,qd).call(this).get(e);r&&(n.experimentalNISSPlaceholder=r,r.experimentalNISSGrouping=n),yield n}*traverseMove(e,t){yield e}*traverseCommutator(e,t){if(t.depth===0){yield e;return}const n=Qe(this,Dn,lo).call(this,t),r=new Gn(this.traverseAlg(e.A,n),this.traverseAlg(e.B,n));r.A.experimentalIsEmpty()||r.B.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||Qe(this,Dn,Yd).call(this,r.A,r.B,t)||(yield r)}*traverseConjugate(e,t){if(t.depth===0){yield e;return}const n=Qe(this,Dn,lo).call(this,t),r=new Tn(this.traverseAlg(e.A,n),this.traverseAlg(e.B,n));if(!r.B.experimentalIsEmpty()){if(r.A.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||Qe(this,Dn,Yd).call(this,r.A,r.B,t)){yield*e.B.childAlgNodes();return}yield r}}*traversePause(e,t){if(e.experimentalNISSGrouping){const n=new pn;Qe(this,Dn,qd).call(this).set(e.experimentalNISSGrouping,n),yield n}else yield e}*traverseNewline(e,t){yield e}*traverseLineComment(e,t){yield e}},Ru=new WeakMap,Dn=new WeakSet,qd=function(){return b(this,Ru)??he(this,Ru,new Map)},lo=function(e){return{...e,depth:e.depth?e.depth-1:null}},Yd=function(e,t,n){var r,s,a,o;if(e.experimentalNumChildAlgNodes()===1&&t.experimentalNumChildAlgNodes()===1){const l=(r=Array.from(e.childAlgNodes())[0])==null?void 0:r.as(N),c=(s=Array.from(t.childAlgNodes())[0])==null?void 0:s.as(N);if(!(l&&c))return!1;if(c.quantum.isIdentical(l.quantum)||(o=(a=new Ov(n).puzzleSpecificSimplifyOptions())==null?void 0:a.axis)!=null&&o.areQuantumMovesSameAxis(l.quantum,c.quantum))return!0}return!1},Qg),tM=Fn(eM);function Fp(i){if(!i)return[];if(Pi(i,Se))return i.childAlgNodes();if(typeof i=="string")return Pv(i).childAlgNodes();const e=i;if(typeof e[Symbol.iterator]=="function")return e;throw new Error("Invalid AlgNode")}function To(i){return Pi(i,Se)?i:new Se(i)}var Sn,fi,Se=(fi=class extends Er{constructor(t){super();J(this,Sn);he(this,Sn,Array.from(Fp(t)));for(const n of b(this,Sn))if(!K_(n))throw new Error("An alg can only contain alg nodes.")}isIdentical(t){const n=t;if(!t.is(fi))return!1;const r=Array.from(b(this,Sn)),s=Array.from(b(n,Sn));if(r.length!==s.length)return!1;for(let a=0;a<r.length;a++)if(!r[a].isIdentical(s[a]))return!1;return!0}invert(){return new fi(O_(Array.from(b(this,Sn)).map(t=>t.invert())))}*experimentalExpand(t=1,n){n??(n=1/0);for(const r of Rv(b(this,Sn),t))yield*r.experimentalExpand(t,n)}expand(t){return new fi(this.experimentalExpand(1,(t==null?void 0:t.depth)??1/0))}*experimentalLeafMoves(){for(const t of this.experimentalExpand())t.is(N)&&(yield t)}concat(t){return new fi(Array.from(b(this,Sn)).concat(Array.from(Fp(t))))}experimentalIsEmpty(){for(const t of b(this,Sn))return!1;return!0}static fromString(t){return Pv(t)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const t of b(this,Sn))yield t}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(b(this,Sn)).length}get type(){return Dv("deprecated: type"),"sequence"}toString(t){var s,a;let n="",r=null;for(const o of b(this,Sn)){r&&(n+=nM(r,o));const l=(s=o.as(pn))==null?void 0:s.experimentalNISSGrouping;if(l){if(l.amount!==-1)throw new Error("Invalid NISS Grouping amount!");n+=`^(${l.alg.toString(t)})`}else(a=o.as(dn))!=null&&a.experimentalNISSPlaceholder||(n+=o.toString(t));r=o}return n}experimentalSimplify(t){return new fi(tM(this,t??{}))}simplify(t){return this.experimentalSimplify(t)}},Sn=new WeakMap,fi);function nM(i,e){var t;return i.is(wr)||e.is(wr)||(t=e.as(dn))!=null&&t.experimentalNISSPlaceholder?"":i.is(Na)&&!e.is(wr)?`
`:" "}new Se([new N("R",1),new N("U",1),new N("R",-1),new N("U",1),new N("R",1),new N("U",-2),new N("R",-1)]),new Se([new N("R",1),new N("U",2),new N("R",-1),new N("U",-1),new N("R",1),new N("U",-1),new N("R",-1)]),new Se([new Gn(new Se([new N("R",1),new N("U",1),new N("R",-2)]),new Se([new Tn(new Se([new N("R",1)]),new Se([new N("U",1)]))]))]),new Se([new N("R",1),new N("U",-1),new N("L",-1),new N("U",1),new N("R",-1),new N("U",-1),new N("L",1),new N("U",1)]),new Se([new N("x",-1),new Gn(new Se([new Tn(new Se([new N("R",1)]),new Se([new N("U",-1)]))]),new Se([new N("D",1)])),new Gn(new Se([new Tn(new Se([new N("R",1)]),new Se([new N("U",1)]))]),new Se([new N("D",1)])),new N("x",1)]),new Se([new Tn(new Se([new N("F",1)]),new Se([new Gn(new Se([new N("U",1)]),new Se([new N("R",1)]))]))]),new Se([new Tn(new Se([new N("R",2)]),new Se([new Gn(new Se([new N("F",2)]),new Se([new N("R",-1),new N("B",-1),new N("R",1)]))]))]),new Se([new N("F",1),new N("U",1),new N("R",1),new N("U",-1),new N("R",-1),new N("F",-1)]),new Se([new N("R",1),new N("U",1),new N("R",-1),new N("U",-1),new N("R",-1),new N("F",1),new N("R",2),new N("U",-1),new N("R",-1),new N("U",-1),new N("R",1),new N("U",1),new N("R",-1),new N("F",-1)]),new Se([new Tn(new Se([new N("F",1)]),new Se([new dn(new Se([new Gn(new Se([new N("R",1)]),new Se([new N("U",1)]))]),3)]))]),new Se([new pn,new pn,new pn]);function $d(i,e,t){const n={};for(const r of i.orbits){const s=e[r.orbitName],a=t[r.orbitName];if(Fc(r.numOrientations,a))n[r.orbitName]=s;else if(Fc(r.numOrientations,s))n[r.orbitName]=a;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let l=0;l<r.numPieces;l++)o[l]=s.permutation[a.permutation[l]];n[r.orbitName]={permutation:o,orientationDelta:s.orientationDelta}}else{const l=new Array(r.numPieces);for(let c=0;c<r.numPieces;c++)l[c]=(s.orientationDelta[a.permutation[c]]+a.orientationDelta[c])%r.numOrientations,o[c]=s.permutation[a.permutation[c]];n[r.orbitName]={permutation:o,orientationDelta:l}}}}return n}function kp(i,e,t){const n={};for(const r of i.orbits){const s=e[r.orbitName],a=t[r.orbitName];if(Fc(r.numOrientations,a))n[r.orbitName]=s;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let c=0;c<r.numPieces;c++)o[c]=s.pieces[a.permutation[c]];const l={pieces:o,orientation:s.orientation};n[r.orbitName]=l}else{const l=new Array(r.numPieces),c=s.orientationMod?new Array(r.numPieces):void 0;for(let d=0;d<r.numPieces;d++){const h=a.permutation[d];let f=r.numOrientations;if(s.orientationMod){const p=s.orientationMod[h];c[d]=p,f=p||r.numOrientations}l[d]=(s.orientation[h]+a.orientationDelta[d])%f,o[d]=s.pieces[h]}const u={pieces:o,orientation:l};c&&(u.orientationMod=c),n[r.orbitName]=u}}}return n}var Bp=new Map;function iM(i){const e=Bp.get(i);if(e)return e;const t=new Array(i),n=new Array(i);for(let s=0;s<i;s++)t[s]=s,n[s]=0;const r={permutation:t,orientationDelta:n};return Bp.set(i,r),r}function rM(i){const e={};for(const t of i.orbits)e[t.orbitName]=iM(t.numPieces);return e}function sM(i,e){function t(r,s){var c;const a=r.toString(),o=i.definition.moves[a];if(o)return Aa(i,o,s);const l=(c=i.definition.derivedMoves)==null?void 0:c[a];if(l)return Aa(i,i.algToTransformation(l).transformationData,s)}const n=t(e.quantum,e.amount)??t(e,1)??t(e.invert,-1);if(n)return n;throw new Error(`Invalid move for KPuzzle (${i.name()}): ${e}`)}var If=class Rc{constructor(e,t){this.kpuzzle=e,this.patternData=t}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(e){const t=kp(e.kpuzzle.definition,e.kpuzzle.definition.defaultPattern,e.transformationData);return new Rc(e.kpuzzle,t)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(e.isIdentityTransformation())return new Rc(this.kpuzzle,this.patternData);const t=kp(this.kpuzzle.definition,this.patternData,e.transformationData);return new Rc(this.kpuzzle,t)}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}isIdentical(e){return cM(this.kpuzzle,this.patternData,e.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;const e={};for(const[t,n]of Object.entries(this.patternData)){const r={permutation:n.pieces,orientationDelta:n.orientation};e[t]=r}return new na(this.kpuzzle,e)}experimentalIsSolved(e){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,e)}},ls,ti,na=(ti=class{constructor(e,t){J(this,ls);this.kpuzzle=e,this.transformationData=t}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new ti(this.kpuzzle,Bv(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return b(this,ls)??he(this,ls,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(e){const t=new ti(e,rM(e.definition));return he(t,ls,!0),t}isIdentical(e){return oM(this.kpuzzle,this.transformationData,e.transformationData)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(this.kpuzzle!==e.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${e.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return b(this,ls)?new ti(this.kpuzzle,e.transformationData):b(e,ls)?new ti(this.kpuzzle,this.transformationData):new ti(this.kpuzzle,$d(this.kpuzzle.definition,this.transformationData,e.transformationData))}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}toKPattern(){return If.fromTransformation(this)}repetitionOrder(){return dM(this.kpuzzle.definition,this)}selfMultiply(e){return new ti(this.kpuzzle,Aa(this.kpuzzle,this.transformationData,e))}},ls=new WeakMap,ti);function Fc(i,e){e.permutation||console.log(e);const{permutation:t}=e,n=t.length;for(let r=0;r<n;r++)if(t[r]!==r)return!1;if(i>1){const{orientationDelta:r}=e;for(let s=0;s<n;s++)if(r[s]!==0)return!1}return!0}function aM(i,e,t,n={}){for(let r=0;r<i.numPieces;r++)if(!(n!=null&&n.ignorePieceOrientations)&&e.orientationDelta[r]!==t.orientationDelta[r]||!(n!=null&&n.ignorePiecePermutation)&&e.permutation[r]!==t.permutation[r])return!1;return!0}function oM(i,e,t){for(const n of i.definition.orbits)if(!aM(n,e[n.orbitName],t[n.orbitName]))return!1;return!0}function lM(i,e,t,n={}){var r,s;for(let a=0;a<i.numPieces;a++)if(!(n!=null&&n.ignorePieceOrientations)&&(e.orientation[a]!==t.orientation[a]||(((r=e.orientationMod)==null?void 0:r[a])??0)!==(((s=t.orientationMod)==null?void 0:s[a])??0))||!(n!=null&&n.ignorePieceIndices)&&e.pieces[a]!==t.pieces[a])return!1;return!0}function cM(i,e,t){for(const n of i.definition.orbits)if(!lM(n,e[n.orbitName],t[n.orbitName]))return!1;return!0}function Bv(i,e){const t={};for(const n of i.definition.orbits){const r=e[n.orbitName];if(Fc(n.numOrientations,r))t[n.orbitName]=r;else if(n.numOrientations===1){const s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)s[r.permutation[a]]=a;t[n.orbitName]={permutation:s,orientationDelta:r.orientationDelta}}else{const s=new Array(n.numPieces),a=new Array(n.numPieces);for(let o=0;o<n.numPieces;o++){const l=r.permutation[o];s[l]=o,a[l]=(n.numOrientations-r.orientationDelta[o]+n.numOrientations)%n.numOrientations}t[n.orbitName]={permutation:s,orientationDelta:a}}}return t}function Aa(i,e,t){if(t===1)return e;if(t<0)return Aa(i,Bv(i,e),-t);if(t===0){const{transformationData:s}=i.identityTransformation();return s}let n=e;t!==2&&(n=Aa(i,e,Math.floor(t/2)));const r=$d(i.definition,n,n);return t%2===0?r:$d(i.definition,e,r)}var uM=class extends Ua{traverseAlg(i,e){let t=null;for(const n of i.childAlgNodes())t?t=t.applyTransformation(this.traverseAlgNode(n,e)):t=this.traverseAlgNode(n,e);return t??e.identityTransformation()}traverseGrouping(i,e){const t=this.traverseAlg(i.alg,e);return new na(e,Aa(e,t.transformationData,i.amount))}traverseMove(i,e){return e.moveToTransformation(i)}traverseCommutator(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,e);return t.applyTransformation(n).applyTransformation(t.invert()).applyTransformation(n.invert())}traverseConjugate(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,e);return t.applyTransformation(n).applyTransformation(t.invert())}traversePause(i,e){return e.identityTransformation()}traverseNewline(i,e){return e.identityTransformation()}traverseLineComment(i,e){return e.identityTransformation()}},hM=Fn(uM);function Zd(i,e){return e?Zd(e,i%e):i}function dM(i,e){let t=1;for(const n of i.orbits){const r=e.transformationData[n.orbitName],s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)if(!s[a]){let o=a,l=0,c=0;for(;s[o]=!0,l=l+r.orientationDelta[o],c=c+1,o=r.permutation[o],o!==a;);l!==0&&(c=c*n.numOrientations/Zd(n.numOrientations,Math.abs(l))),t=t*c/Zd(t,c)}}return t}var Ko,fa,Iu,ev,tr=(ev=class{constructor(i,e){F(this,"experimentalPGNotation");J(this,Ko);J(this,fa,new Map);J(this,Iu);this.definition=i,this.experimentalPGNotation=e==null?void 0:e.experimentalPGNotation}lookupOrbitDefinition(i){return b(this,Ko)||he(this,Ko,(()=>{const e={};for(const t of this.definition.orbits)e[t.orbitName]=t;return e})()),b(this,Ko)[i]}name(){return this.definition.name}identityTransformation(){return na.experimentalConstructIdentity(this)}moveToTransformation(i){typeof i=="string"&&(i=new N(i));const e=i.toString(),t=b(this,fa).get(e);if(t)return new na(this,t);if(this.experimentalPGNotation){const r=this.experimentalPGNotation.lookupMove(i);if(!r)throw new Error(`could not map to internal move: ${i}`);return b(this,fa).set(e,r),new na(this,r)}const n=sM(this,i);return b(this,fa).set(e,n),new na(this,n)}algToTransformation(i){return typeof i=="string"&&(i=new Se(i)),hM(i,this)}toTransformation(i){var e,t;return typeof i=="string"?this.algToTransformation(i):(e=i==null?void 0:i.is)!=null&&e.call(i,Se)?this.algToTransformation(i):(t=i==null?void 0:i.is)!=null&&t.call(i,N)?this.moveToTransformation(i):i}defaultPattern(){return new If(this,this.definition.defaultPattern)}canConvertDefaultPatternToUniqueTransformation(){return b(this,Iu)??he(this,Iu,(()=>{for(const i of this.definition.orbits){const e=new Array(i.numPieces).fill(!1);for(const t of this.definition.defaultPattern[i.orbitName].pieces)e[t]=!0;for(const t of e)if(!t)return!1}return!0})())}},Ko=new WeakMap,fa=new WeakMap,Iu=new WeakMap,ev),Vv=class Ic extends Promise{constructor(e){super(t=>{t()}),this._executor=e}static from(e){return new Ic(t=>{t(e())})}static resolve(e){return new Ic(t=>{t(e)})}static reject(e){return new Ic((t,n)=>{n(e)})}then(e,t){return this._promise=this._promise||new Promise(this._executor),this._promise.then(e,t)}catch(e){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(e)}};function Lf(i){return new Vv(e=>{e(i())})}function dP(i,e,t,n,r){var l;const a=i.orbits[e].pieces[t];if(a===null)return Vn;const o=(l=a.facelets)==null?void 0:l[n];return o===null?Vn:typeof o=="string"?o:(console.log(o),o.mask)}var Kr=class{constructor(i,e){F(this,"stickerings",new Map);for(const t of i.definition.orbits)this.stickerings.set(t.orbitName,new Array(t.numPieces).fill(e))}},Vn="regular",Dt="ignored",Us="oriented",fM="experimentalOriented2",Xa="invisible",Ur="dim",qa="mystery",pM={Regular:{facelets:[Vn,Vn,Vn,Vn,Vn]},Ignored:{facelets:[Dt,Dt,Dt,Dt,Dt]},OrientationStickers:{facelets:[Us,Us,Us,Us,Us]},IgnoreNonPrimary:{facelets:[Vn,Dt,Dt,Dt,Dt]},Invisible:{facelets:[Xa,Xa,Xa,Xa,Xa]},PermuteNonPrimary:{facelets:[Ur,Vn,Vn,Vn,Vn]},Dim:{facelets:[Ur,Ur,Ur,Ur,Ur]},Ignoriented:{facelets:[Ur,Dt,Dt,Dt,Dt]},OrientationWithoutPermutation:{facelets:[Us,Dt,Dt,Dt,Dt]},ExperimentalOrientationWithoutPermutation2:{facelets:[fM,Dt,Dt,Dt,Dt]},Mystery:{facelets:[qa,qa,qa,qa,qa]}};function Gv(i){return pM[i]}var Hv=class extends Kr{constructor(i){super(i,"Regular")}set(i,e){for(const[t,n]of this.stickerings.entries())for(let r=0;r<n.length;r++)i.stickerings.get(t)[r]&&(n[r]=e);return this}toStickeringMask(){const i={orbits:{}};for(const[e,t]of this.stickerings.entries()){const n=[],r={pieces:n};i.orbits[e]=r;for(const s of t)n.push(Gv(s))}return i}},Wv=class{constructor(i){this.kpuzzle=i}and(i){const e=new Kr(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)e:for(let n=0;n<t.numPieces;n++){e.stickerings.get(t.orbitName)[n]=!0;for(const r of i)if(!r.stickerings.get(t.orbitName)[n]){e.stickerings.get(t.orbitName)[n]=!1;continue e}}return e}or(i){const e=new Kr(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)e:for(let n=0;n<t.numPieces;n++){e.stickerings.get(t.orbitName)[n]=!1;for(const r of i)if(r.stickerings.get(t.orbitName)[n]){e.stickerings.get(t.orbitName)[n]=!0;continue e}}return e}not(i){const e=new Kr(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)for(let n=0;n<t.numPieces;n++)e.stickerings.get(t.orbitName)[n]=!i.stickerings.get(t.orbitName)[n];return e}all(){return this.and(this.moves([]))}move(i){const e=this.kpuzzle.moveToTransformation(i),t=new Kr(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)for(let r=0;r<n.numPieces;r++)(e.transformationData[n.orbitName].permutation[r]!==r||e.transformationData[n.orbitName].orientationDelta[r]!==0)&&(t.stickerings.get(n.orbitName)[r]=!0);return t}moves(i){return i.map(e=>this.move(e))}orbits(i){const e=new Kr(this.kpuzzle,!1);for(const t of i)e.stickerings.get(t).fill(!0);return e}orbitPrefix(i){const e=new Kr(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)t.orbitName.startsWith(i)&&e.stickerings.get(t.orbitName).fill(!0);return e}},Vp="Last Layer",Gp="Last Slot",Zn={"3x3x3":Vp,megaminx:Vp},rr={"3x3x3":Gp,megaminx:Gp},mM={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:Zn},PLL:{groups:Zn},LL:{groups:Zn},EOLL:{groups:Zn},COLL:{groups:Zn},OCLL:{groups:Zn},CPLL:{groups:Zn},CLL:{groups:Zn},EPLL:{groups:Zn},ELL:{groups:Zn},ZBLL:{groups:Zn},LS:{groups:rr},LSOLL:{groups:rr},LSOCLL:{groups:rr},ELS:{groups:rr},CLS:{groups:rr},ZBLS:{groups:rr},VLS:{groups:rr},WVLS:{groups:rr},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},FirstBlock:{groups:{"3x3x3":"Roux"}},SecondBlock:{groups:{"3x3x3":"Roux"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},EODF:{groups:{"3x3x3":"Nautilus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"opposite-centers":{groups:{"4x4x4":"Reduction"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};async function Ao(i,e){return(await gM(i,e)).toStickeringMask()}async function gM(i,e){const t=await i.kpuzzle(),n=new Hv(t),r=new Wv(t),s=()=>r.move("U"),a=()=>r.or(r.moves(["U","D"])),o=()=>r.or(r.moves(["L","R"])),l=()=>r.not(o()),c=()=>r.not(s()),u=()=>r.orbitPrefix("CENTER"),d=I=>r.and([r.move(I),u()]),h=()=>r.orbitPrefix("EDGE"),f=I=>r.and([r.and(r.moves(I)),h()]),p=()=>r.or([r.orbitPrefix("CORNER"),r.orbitPrefix("C4RNER"),r.orbitPrefix("C5RNER")]),v=()=>r.or([l(),r.and([s(),h()])]),g=()=>r.and([s(),u()]),m=()=>r.and([r.and(r.moves(["F","R"])),h()]),_=()=>r.and([r.and(r.moves(["F","R"])),p(),r.not(s())]),y=()=>r.or([_(),m()]);function x(){n.set(c(),"Dim")}function P(){n.set(s(),"PermuteNonPrimary"),n.set(g(),"Dim")}function A(){n.set(s(),"IgnoreNonPrimary"),n.set(g(),"Regular")}function C(){n.set(s(),"Ignoriented"),n.set(g(),"Dim")}switch(e){case"full":break;case"PLL":{x(),P();break}case"CLS":{x(),n.set(_(),"Regular"),n.set(s(),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),p()]),"IgnoreNonPrimary");break}case"OLL":{x(),A();break}case"EOLL":{x(),A(),n.set(r.and([s(),p()]),"Ignored");break}case"COLL":{x(),n.set(r.and([s(),h()]),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),p()]),"Regular");break}case"OCLL":{x(),C(),n.set(r.and([s(),p()]),"IgnoreNonPrimary");break}case"CPLL":{x(),n.set(r.and([p(),s()]),"PermuteNonPrimary"),n.set(r.and([r.not(p()),s()]),"Dim");break}case"CLL":{x(),n.set(r.not(r.and([p(),s()])),"Dim");break}case"EPLL":{x(),n.set(s(),"Dim"),n.set(r.and([s(),h()]),"PermuteNonPrimary");break}case"ELL":{x(),n.set(s(),"Dim"),n.set(r.and([s(),h()]),"Regular");break}case"ELS":{x(),A(),n.set(r.and([s(),p()]),"Ignored"),n.set(m(),"Regular"),n.set(_(),"Ignored");break}case"LL":{x();break}case"F2L":{n.set(s(),"Ignored");break}case"ZBLL":{x(),n.set(s(),"PermuteNonPrimary"),n.set(g(),"Dim"),n.set(r.and([s(),p()]),"Regular");break}case"ZBLS":{x(),n.set(y(),"Regular"),A(),n.set(r.and([s(),p()]),"Ignored");break}case"VLS":{x(),n.set(y(),"Regular"),A();break}case"WVLS":{x(),n.set(y(),"Regular"),n.set(r.and([s(),h()]),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),p()]),"IgnoreNonPrimary");break}case"LS":{x(),n.set(y(),"Regular"),n.set(s(),"Ignored"),n.set(g(),"Dim");break}case"LSOLL":{x(),A(),n.set(y(),"Regular");break}case"LSOCLL":{x(),C(),n.set(r.and([s(),p()]),"IgnoreNonPrimary"),n.set(y(),"Regular");break}case"EO":{n.set(p(),"Ignored"),n.set(h(),"OrientationWithoutPermutation");break}case"EOline":{n.set(p(),"Ignored"),n.set(h(),"OrientationWithoutPermutation"),n.set(r.and(r.moves(["D","M"])),"Regular");break}case"EOcross":{n.set(h(),"OrientationWithoutPermutation"),n.set(r.move("D"),"Regular"),n.set(p(),"Ignored");break}case"CMLL":{n.set(c(),"Dim"),n.set(v(),"Ignored"),n.set(r.and([s(),p()]),"Regular");break}case"L10P":{n.set(r.not(v()),"Dim"),n.set(r.and([p(),s()]),"Regular");break}case"L6E":{n.set(r.not(v()),"Dim");break}case"L6EO":{n.set(r.not(v()),"Dim"),n.set(v(),"ExperimentalOrientationWithoutPermutation2"),n.set(r.and([u(),a()]),"ExperimentalOrientationWithoutPermutation2"),n.set(r.and([r.move("M"),r.move("E")]),"Ignored");break}case"Daisy":{n.set(r.all(),"Ignored"),n.set(u(),"Dim"),n.set(r.and([r.move("D"),u()]),"Regular"),n.set(r.and([r.move("U"),h()]),"IgnoreNonPrimary");break}case"Cross":{n.set(r.all(),"Ignored"),n.set(u(),"Dim"),n.set(r.and([r.move("D"),u()]),"Regular"),n.set(r.and([r.move("D"),h()]),"Regular");break}case"2x2x2":{n.set(r.or(r.moves(["U","F","R"])),"Ignored"),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim");break}case"2x2x3":{n.set(r.all(),"Dim"),n.set(r.or(r.moves(["U","F","R"])),"Ignored"),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim"),n.set(r.and([r.move("F"),r.not(r.or(r.moves(["U","R"])))]),"Regular");break}case"G1":{n.set(r.all(),"ExperimentalOrientationWithoutPermutation2"),n.set(r.or(r.moves(["E"])),"OrientationWithoutPermutation"),n.set(r.and(r.moves(["E","S"])),"Ignored");break}case"L2C":{n.set(r.or(r.moves(["L","R","B","D"])),"Dim"),n.set(r.not(u()),"Ignored");break}case"PBL":{n.set(r.all(),"Ignored"),n.set(r.or(r.moves(["U","D"])),"PermuteNonPrimary");break}case"FirstBlock":{n.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),"Ignored"),n.set(d("R"),"Dim");break}case"SecondBlock":{n.set(r.not(r.and([r.and(r.moves(["L"])),r.not(s())])),"Ignored"),n.set(r.and([r.and(r.moves(["L"])),r.not(s())]),"Dim"),n.set(r.and([r.and(r.moves(["R"])),r.not(s())]),"Regular");break}case"EODF":{x(),n.set(r.or([_(),r.and([s(),p()])]),"Ignored"),n.set(r.or([r.and([s(),h()]),m()]),"OrientationWithoutPermutation"),n.set(f(["D","F"]),"Regular"),n.set(d("F"),"Regular");break}case"Void Cube":{n.set(u(),"Invisible");break}case"picture":case"invisible":{n.set(r.all(),"Invisible");break}case"centers-only":{n.set(r.not(u()),"Ignored");break}case"opposite-centers":{n.set(r.not(r.and([u(),r.or(r.moves(["U","D"]))])),"Ignored");break}default:console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),"Dim")}return n}async function lh(i,e){const t=[],n=[];for(const[r,s]of Object.entries(mM))s.groups&&(i in s.groups?t.push(r):e!=null&&e.use3x3x3Fallbacks&&"3x3x3"in s.groups&&n.push(r));return t.concat(n)}function Tt(i){let e=null;return()=>e??(e=i())}async function Pf(i){return(await pt(()=>import("./CyCjVKmt.js"),[],import.meta.url)).getPuzzleGeometryByName(i,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function Xv(i,e,t){const n=await i,r=n.getKPuzzleDefinition(!0);r.name=e;const s=await pt(()=>import("./CyCjVKmt.js"),[],import.meta.url),a=new s.ExperimentalPGNotation(n,n.getOrbitsDef(!0));if(t){const o=new Set(t);for(const[l,c]of Object.entries(r.defaultPattern))o.has(l)&&(c.orientationMod=new Array(c.pieces.length).fill(1))}return new tr(a.remapKPuzzleDefinition(r),{experimentalPGNotation:a})}var jo,Lu,Pu,Du,tv,Sr=(tv=class{constructor(i){F(this,"pgId");F(this,"id");F(this,"fullName");F(this,"inventedBy");F(this,"inventionYear");J(this,jo);J(this,Lu);J(this,Pu);J(this,Du);F(this,"puzzleSpecificSimplifyOptionsPromise",qv(this.kpuzzle.bind(this)));this.pgId=i.pgID,this.id=i.id,this.fullName=i.fullName,this.inventedBy=i.inventedBy,this.inventionYear=i.inventionYear,he(this,jo,i.setOrientationModTo1ForPiecesOfOrbits)}pg(){return b(this,Lu)??he(this,Lu,Pf(this.pgId??this.id))}kpuzzle(){return b(this,Pu)??he(this,Pu,Xv(this.pg(),this.id,b(this,jo)))}svg(){return b(this,Du)??he(this,Du,(async()=>(await this.pg()).generatesvg())())}},jo=new WeakMap,Lu=new WeakMap,Pu=new WeakMap,Du=new WeakMap,tv),co=class extends Sr{constructor(){super(...arguments);F(this,"stickerings",()=>lh(this.id,{use3x3x3Fallbacks:!0}))}stickeringMask(e){return Ao(this,e)}};function qv(i){return new Vv(async e=>{const t=await i();e({quantumMoveOrder:n=>t.moveToTransformation(new N(n)).repetitionOrder()})})}var kc={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};async function vM(i){const e=await(i.puzzleSpecificSimplifyOptions??i.puzzleSpecificSimplifyOptionsPromise);return e?{puzzleLoader:{puzzleSpecificSimplifyOptions:e}}:{}}function Yv(i){const t=i.experimentalToTransformation().invert().transformationData.CORNERS;return t.permutation[6]*3+t.orientationDelta[6]}var Hp=new Array(24);function xM(i){{const e=["","z","x","z'","x'","x2"].map(n=>Se.fromString(n)),t=new Se("y");for(const n of e){let r=i.algToTransformation(n);for(let s=0;s<4;s++){r=r.applyAlg(t);const a=Yv(r.toKPattern());Hp[a]={transformation:r.invert(),alg:n.concat(t)}}}}return Hp}function yM(i){const e=Yv(i),{transformation:t,alg:n}=xM(i.kpuzzle)[e];return{normalizedPattern:i.applyTransformation(t),normalizationAlg:n.invert()}}function _M(i,e){return e.ignorePuzzleOrientation&&(i=yM(i).normalizedPattern),!!i.experimentalToTransformation().isIdentityTransformation()}async function Bc(i,e){return(await pt(()=>import("./CyCjVKmt.js"),[],import.meta.url)).getPuzzleGeometryByDesc(i,{allMoves:!0,orientCenters:!0,addRotations:!0,...e})}async function $v(i,e){const t=Bc(i,e);return Xv(t,`description: ${i}`)}var MM=1;function wM(i,e){const t=MM++;let n=null;const r=async()=>n??(n=$v(i));return{id:`custom-${t}`,fullName:(e==null?void 0:e.fullName)??`Custom Puzzle (instance #${t})`,kpuzzle:r,svg:async()=>(await Bc(i)).generatesvg(),pg:async()=>Bc(i),puzzleSpecificSimplifyOptionsPromise:qv(r)}}var Zv=new tr(kc);kc.experimentalIsPatternSolved=TM;function Kv(i){const e=i.patternData.CENTERS.pieces[0],t=i.patternData.CENTERS.pieces[5],n=i.patternData.CENTERS.pieces[1];let r=n;return e<n&&r--,t<n&&r--,[e,r]}var Wp=new Array(6).fill(0).map(()=>new Array(6));function SM(){{const i=["","z","x","z'","x'","x2"].map(t=>Se.fromString(t)),e=new Se("y");for(const t of i){let n=Zv.algToTransformation(t);for(let r=0;r<4;r++){n=n.applyAlg(e);const[s,a]=Kv(n.toKPattern());Wp[s][a]=n.invert()}}}return Wp}function bM(i){const[e,t]=Kv(i),n=SM()[e][t];return i.applyTransformation(n)}function TM(i,e){var t;return e.ignorePuzzleOrientation&&(i=bM(i)),e.ignoreCenterOrientation&&(i=new If(i.kpuzzle,{EDGES:i.patternData.EDGES,CORNERS:i.patternData.CORNERS,CENTERS:{pieces:i.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!((t=i.experimentalToTransformation())!=null&&t.isIdentityTransformation())}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="170",AM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},EM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jv=0,Kd=1,Jv=2,CM=3,RM=0,Df=1,Qv=2,li=3,$i=0,mn=1,hi=2,Hi=0,vs=1,jd=2,Jd=3,Qd=4,ex=5,fr=100,tx=101,nx=102,ix=103,rx=104,sx=200,ax=201,ox=202,lx=203,Vc=204,Gc=205,cx=206,ux=207,hx=208,dx=209,fx=210,px=211,mx=212,gx=213,vx=214,Hc=0,Wc=1,Xc=2,bs=3,qc=4,Yc=5,$c=6,Zc=7,vl=0,xx=1,yx=2,Wi=0,_x=1,Mx=2,wx=3,Sx=4,bx=5,Tx=6,Ax=7,ef="attached",Ex="detached",uh=300,Zi=301,Tr=302,Eo=303,Co=304,za=306,Ro=1e3,Wn=1001,Io=1002,Jt=1003,Nf=1004,IM=1004,ia=1005,LM=1005,kt=1006,po=1007,PM=1007,pi=1008,DM=1008,_i=1009,Uf=1010,zf=1011,Ea=1012,hh=1013,Ki=1014,En=1015,Oa=1016,dh=1017,fh=1018,Ts=1020,Of=35902,Ff=1021,kf=1022,fn=1023,Bf=1024,Vf=1025,xs=1026,As=1027,ph=1028,xl=1029,Gf=1030,mh=1031,NM=1032,gh=1033,mo=33776,go=33777,vo=33778,xo=33779,Kc=35840,jc=35841,Jc=35842,Qc=35843,eu=36196,tu=37492,nu=37496,iu=37808,ru=37809,su=37810,au=37811,ou=37812,lu=37813,cu=37814,uu=37815,hu=37816,du=37817,fu=37818,pu=37819,mu=37820,gu=37821,yo=36492,vu=36494,xu=36495,Hf=36283,yu=36284,_u=36285,Mu=36286,Cx=2200,Rx=2201,Ix=2202,Lo=2300,wu=2301,Lc=2302,es=2400,ts=2401,Po=2402,vh=2500,Wf=2501,UM=0,zM=1,OM=2,Lx=3200,Px=3201,FM=3202,kM=3203,Cr=0,Dx=1,ki="",bn="srgb",Rr="srgb-linear",yl="linear",ft="srgb",BM=0,jr=7680,VM=7681,GM=7682,HM=7683,WM=34055,XM=34056,qM=5386,YM=512,$M=513,ZM=514,KM=515,jM=516,JM=517,QM=518,tf=519,Nx=512,Ux=513,zx=514,Xf=515,Ox=516,Fx=517,kx=518,Bx=519,Do=35044,ew=35048,tw=35040,nw=35045,iw=35049,rw=35041,sw=35046,aw=35050,ow=35042,lw="100",nf="300 es",mi=2e3,No=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xp=1234567;const ys=Math.PI/180,Ca=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function qf(i,e){return(i%e+e)%e}function cw(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function uw(i,e,t){return i!==e?(t-i)/(e-i):0}function _o(i,e,t){return(1-t)*i+t*e}function hw(i,e,t,n){return _o(i,e,1-Math.exp(-t*n))}function dw(i,e=1){return e-Math.abs(qf(i,e*2)-e)}function fw(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pw(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mw(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gw(i,e){return i+Math.random()*(e-i)}function vw(i){return i*(.5-Math.random())}function xw(i){i!==void 0&&(Xp=i);let e=Xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yw(i){return i*ys}function _w(i){return i*Ca}function Mw(i){return(i&i-1)===0&&i!==0}function ww(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sw(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bw(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tw={DEG2RAD:ys,RAD2DEG:Ca,generateUUID:Un,clamp:Lt,euclideanModulo:qf,mapLinear:cw,inverseLerp:uw,lerp:_o,damp:hw,pingpong:dw,smoothstep:fw,smootherstep:pw,randInt:mw,randFloat:gw,randFloatSpread:vw,seededRandom:xw,degToRad:yw,radToDeg:_w,isPowerOfTwo:Mw,ceilPowerOfTwo:ww,floorPowerOfTwo:Sw,setQuaternionFromProperEuler:bw,normalize:Ye,denormalize:hn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=r[0],g=r[3],m=r[6],_=r[1],y=r[4],x=r[7],P=r[2],A=r[5],C=r[8];return s[0]=a*v+o*_+l*P,s[3]=a*g+o*y+l*A,s[6]=a*m+o*x+l*C,s[1]=c*v+u*_+d*P,s[4]=c*g+u*y+d*A,s[7]=c*m+u*x+d*C,s[2]=h*v+f*_+p*P,s[5]=h*g+f*y+p*A,s[8]=h*m+f*x+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,p=t*d+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zh=new qe;function Vx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Aw={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ra(i,e){return new Aw[i](e)}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gx(){const i=Uo("canvas");return i.style.display="block",i}const qp={};function uo(i){i in qp||(qp[i]=!0,console.warn(i))}function Ew(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Cw(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rw(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(i.r=la(i.r),i.g=la(i.g),i.b=la(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?yl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yp=[.64,.33,.3,.6,.15,.06],$p=[.2126,.7152,.0722],Zp=[.3127,.329],Kp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jp=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Rr]:{primaries:Yp,whitePoint:Zp,transfer:yl,toXYZ:Kp,fromXYZ:jp,luminanceCoefficients:$p,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Yp,whitePoint:Zp,transfer:ft,toXYZ:Kp,fromXYZ:jp,luminanceCoefficients:$p,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let zs;class Hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=Uo("canvas")),zs.width=e.width,zs.height=e.height;const n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iw=0;class ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kh(r[a].image)):s.push(Kh(r[a]))}else s=Kh(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lw=0;class Pt extends wi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Wn,r=Wn,s=kt,a=pi,o=fn,l=_i,c=Pt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Un(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=uh;Pt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,P=(m+1)/2,A=(u+h)/4,C=(d+v)/4,I=(p+g)/4;return y>x&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=C/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=I/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=C/s,r=I/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Wx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pw extends ni{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new xh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Yf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dw extends ni{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Yf(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Cn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[a+0],f=s[a+1],p=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==p){let g=1-o;const m=l*h+c*f+u*p+d*v,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),A=Math.atan2(P,m*_);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P}const x=o*_;if(l=l*g+h*x,c=c*g+f*x,u=u*g+p*x,d=d*g+v*x,g===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),f=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jh=new R,Jp=new Cn;class gn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),Ul.subVectors(this.max,Ya),Os.subVectors(e.a,Ya),Fs.subVectors(e.b,Ya),ks.subVectors(e.c,Ya),sr.subVectors(Fs,Os),ar.subVectors(ks,Fs),zr.subVectors(Os,ks);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-zr.z,zr.y,sr.z,0,-sr.x,ar.z,0,-ar.x,zr.z,0,-zr.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-zr.y,zr.x,0];return!Jh(t,Os,Fs,ks,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Jh(t,Os,Fs,ks,Ul))?!1:(zl.crossVectors(sr,ar),t=[zl.x,zl.y,zl.z],Jh(t,Os,Fs,ks,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new R,new R,new R,new R,new R,new R,new R,new R],Kn=new R,Nl=new gn,Os=new R,Fs=new R,ks=new R,sr=new R,ar=new R,zr=new R,Ya=new R,Ul=new R,zl=new R,Or=new R;function Jh(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Or.fromArray(i,s);const o=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=n.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nw=new gn,$a=new R,Qh=new R;class sn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nw.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Qh)),this.expandByPoint($a.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new R,ed=new R,Ol=new R,or=new R,td=new R,Fl=new R,nd=new R;class Fa{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ed.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),or.copy(this.origin).sub(ed);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ol),o=or.dot(this.direction),l=-or.dot(Ol),c=or.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ed).addScaledVector(Ol,h),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),r=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,r,s){td.subVectors(t,e),Fl.subVectors(n,e),nd.crossVectors(td,Fl);let a=this.direction.dot(nd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;or.subVectors(this.origin,e);const l=o*this.direction.dot(Fl.crossVectors(or,Fl));if(l<0)return null;const c=o*this.direction.dot(td.cross(or));if(c<0||l+c>a)return null;const u=-o*or.dot(nd);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,r,s,a,o,l,c,u,d,h,f,p,v,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,f,p,v,g)}set(e,t,n,r,s,a,o,l,c,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uw,e,zw)}lookAt(e,t,n){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),lr.crossVectors(n,Ln),lr.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),lr.crossVectors(n,Ln)),lr.normalize(),kl.crossVectors(Ln,lr),r[0]=lr.x,r[4]=kl.x,r[8]=Ln.x,r[1]=lr.y,r[5]=kl.y,r[9]=Ln.y,r[2]=lr.z,r[6]=kl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],y=n[7],x=n[11],P=n[15],A=r[0],C=r[4],I=r[8],S=r[12],M=r[1],D=r[5],V=r[9],B=r[13],G=r[2],j=r[6],X=r[10],ne=r[14],q=r[3],le=r[7],fe=r[11],be=r[15];return s[0]=a*A+o*M+l*G+c*q,s[4]=a*C+o*D+l*j+c*le,s[8]=a*I+o*V+l*X+c*fe,s[12]=a*S+o*B+l*ne+c*be,s[1]=u*A+d*M+h*G+f*q,s[5]=u*C+d*D+h*j+f*le,s[9]=u*I+d*V+h*X+f*fe,s[13]=u*S+d*B+h*ne+f*be,s[2]=p*A+v*M+g*G+m*q,s[6]=p*C+v*D+g*j+m*le,s[10]=p*I+v*V+g*X+m*fe,s[14]=p*S+v*B+g*ne+m*be,s[3]=_*A+y*M+x*G+P*q,s[7]=_*C+y*D+x*j+P*le,s[11]=_*I+y*V+x*X+P*fe,s[15]=_*S+y*B+x*ne+P*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+s*l*d-r*c*d-s*o*h+n*c*h+r*o*f-n*l*f)+v*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+g*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*u-n*c*u)+m*(-r*o*u-t*l*d+t*o*h+r*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=d*g*c-v*h*c+v*l*f-o*g*f-d*l*m+o*h*m,y=p*h*c-u*g*c-p*l*f+a*g*f+u*l*m-a*h*m,x=u*v*c-p*d*c+p*o*f-a*v*f-u*o*m+a*d*m,P=p*d*l-u*v*l-p*o*h+a*v*h+u*o*g-a*d*g,A=t*_+n*y+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(v*h*s-d*g*s-v*r*f+n*g*f+d*r*m-n*h*m)*C,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*m+n*l*m)*C,e[3]=(d*l*s-o*h*s-d*r*c+n*h*c+o*r*f-n*l*f)*C,e[4]=y*C,e[5]=(u*g*s-p*h*s+p*r*f-t*g*f-u*r*m+t*h*m)*C,e[6]=(p*l*s-a*g*s-p*r*c+t*g*c+a*r*m-t*l*m)*C,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*C,e[8]=x*C,e[9]=(p*d*s-u*v*s-p*n*f+t*v*f+u*n*m-t*d*m)*C,e[10]=(a*v*s-p*o*s+p*n*c-t*v*c-a*n*m+t*o*m)*C,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*f-t*o*f)*C,e[12]=P*C,e[13]=(u*v*r-p*d*r+p*n*h-t*v*h-u*n*g+t*d*g)*C,e[14]=(p*o*r-a*v*r-p*n*l+t*v*l+a*n*g-t*o*g)*C,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,p=s*d,v=a*u,g=a*d,m=o*d,_=l*c,y=l*u,x=l*d,P=n.x,A=n.y,C=n.z;return r[0]=(1-(v+m))*P,r[1]=(f+x)*P,r[2]=(p-y)*P,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(h+m))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(p+y)*C,r[9]=(g-_)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const a=Bs.set(r[4],r[5],r[6]).length(),o=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,u=1/a,d=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,p;if(o===mi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===No)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mi){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(a-s),h=(t+e)*c,f=(n+r)*u;let p,v;if(o===mi)p=(a+s)*d,v=-2*d;else if(o===No)p=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bs=new R,jn=new Ve,Uw=new R(0,0,0),zw=new R(1,1,1),lr=new R,kl=new R,Ln=new R,Qp=new Ve,em=new Cn;class zn{constructor(e=0,t=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ow=0;const tm=new R,Vs=new Cn,Ci=new Ve,Bl=new R,Za=new R,Fw=new R,kw=new Cn,nm=new R(1,0,0),im=new R(0,1,0),rm=new R(0,0,1),sm={type:"added"},Bw={type:"removed"},Gs={type:"childadded",child:null},id={type:"childremoved",child:null};class at extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new R,t=new zn,n=new Cn,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,t){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Za,Bl,this.up):Ci.lookAt(Bl,Za,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bw),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,Fw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,kw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}at.DEFAULT_UP=new R(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new R,Ri=new R,rd=new R,Ii=new R,Hs=new R,Ws=new R,am=new R,sd=new R,ad=new R,od=new R,ld=new st,cd=new st,ud=new st;class An{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Jn.subVectors(r,t),Ri.subVectors(n,t),rd.subVectors(e,t);const a=Jn.dot(Jn),o=Jn.dot(Ri),l=Jn.dot(rd),c=Ri.dot(Ri),u=Ri.dot(rd),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,n),ud.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ld,s.x),a.addScaledVector(cd,s.y),a.addScaledVector(ud,s.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Hs.subVectors(r,n),Ws.subVectors(s,n),sd.subVectors(e,n);const l=Hs.dot(sd),c=Ws.dot(sd);if(l<=0&&c<=0)return t.copy(n);ad.subVectors(e,r);const u=Hs.dot(ad),d=Ws.dot(ad);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hs,a);od.subVectors(e,s);const f=Hs.dot(od),p=Ws.dot(od);if(p>=0&&f<=p)return t.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ws,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return am.subVectors(s,r),o=(d-u)/(d-u+(f-p)),t.copy(r).addScaledVector(am,o);const m=1/(g+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Hs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function hd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=qf(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hd(a,s,e+1/3),this.g=hd(a,s,e),this.b=hd(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Xx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return nt.fromWorkingColorSpace(tn.copy(this),e),Math.round(Lt(tn.r*255,0,255))*65536+Math.round(Lt(tn.g*255,0,255))*256+Math.round(Lt(tn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,s=tn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=bn){nt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Vl);const n=_o(cr.h,Vl.h,t),r=_o(cr.s,Vl.s,t),s=_o(cr.l,Vl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new _e;_e.NAMES=Xx;let Vw=0;class ln extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Un(),this.name="",this.blending=vs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ir extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bi=Gw();function Gw(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function _n(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Lt(i,-65504,65504),Bi.floatView[0]=i;const e=Bi.uint32View[0],t=e>>23&511;return Bi.baseTable[t]+((e&8388607)>>Bi.shiftTable[t])}function ho(i){const e=i>>10;return Bi.uint32View[0]=Bi.mantissaTable[Bi.offsetTable[e]+(i&1023)]+Bi.exponentTable[e],Bi.floatView[0]}const Hw={toHalfFloat:_n,fromHalfFloat:ho},zt=new R,Gl=new te;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class Ww extends gt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Xw extends gt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class qw extends gt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Yw extends gt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class $f extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $w extends gt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Zf extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zw extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ho(this.array[e*this.itemSize]);return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=_n(t),this}getY(e){let t=ho(this.array[e*this.itemSize+1]);return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=_n(t),this}getZ(e){let t=ho(this.array[e*this.itemSize+2]);return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=_n(t),this}getW(e){let t=ho(this.array[e*this.itemSize+3]);return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=_n(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=_n(t),this.array[e+1]=_n(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=_n(t),this.array[e+1]=_n(n),this.array[e+2]=_n(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=_n(t),this.array[e+1]=_n(n),this.array[e+2]=_n(r),this.array[e+3]=_n(s),this}}class Re extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kw=0;const Bn=new Ve,dd=new at,Xs=new R,Pn=new gn,Ka=new gn,Ht=new R;class je extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Zf:$f)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Pn.min,Ka.min),Pn.expandByPoint(Ht),Ht.addVectors(Pn.max,Ka.max),Pn.expandByPoint(Ht)):(Pn.expandByPoint(Ka.min),Pn.expandByPoint(Ka.max))}Pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(e,c),Ht.add(Xs)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new R,l[I]=new R;const c=new R,u=new R,d=new R,h=new te,f=new te,p=new te,v=new R,g=new R;function m(I,S,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,M),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),o[I].add(v),o[S].add(v),o[M].add(v),l[I].add(g),l[S].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,S=_.length;I<S;++I){const M=_[I],D=M.start,V=M.count;for(let B=D,G=D+V;B<G;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new R,x=new R,P=new R,A=new R;function C(I){P.fromBufferAttribute(r,I),A.copy(P);const S=o[I];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(A,S);const D=x.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,S=_.length;I<S;++I){const M=_[I],D=M.start,V=M.count;for(let B=D,G=D+V;B<G;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new gt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Ve,Fr=new Fa,Hl=new sn,lm=new R,Wl=new R,Xl=new R,ql=new R,fd=new R,Yl=new R,cm=new R,$l=new R;class Ot extends at{constructor(e=new je,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(fd.fromBufferAttribute(d,e),a?Yl.addScaledVector(fd,u):Yl.addScaledVector(fd.sub(t),u))}t.add(Yl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Hl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Hl,lm)===null||Fr.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(om),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const A=o.getX(x),C=o.getX(x+1),I=o.getX(x+2);r=Zl(this,m,e,n,c,u,d,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);r=Zl(this,a,e,n,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const A=x,C=x+1,I=x+2;r=Zl(this,m,e,n,c,u,d,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,y=g+1,x=g+2;r=Zl(this,a,e,n,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function jw(i,e,t,n,r,s,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===$i,o),l===null)return null;$l.copy(o),$l.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:i}}function Zl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Wl),i.getVertexPosition(l,Xl),i.getVertexPosition(c,ql);const u=jw(i,e,t,n,Wl,Xl,ql,cm);if(u){const d=new R;An.getBarycoord(cm,Wl,Xl,ql,d),r&&(u.uv=An.getInterpolatedAttribute(r,o,l,c,d,new te)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,l,c,d,new te)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};An.getNormal(Wl,Xl,ql,h.normal),u.face=h,u.barycoord=d}return u}class Ls extends je{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,r,a,2),p("x","z","y",1,-1,e,n,-t,r,a,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function p(v,g,m,_,y,x,P,A,C,I,S){const M=x/C,D=P/I,V=x/2,B=P/2,G=A/2,j=C+1,X=I+1;let ne=0,q=0;const le=new R;for(let fe=0;fe<X;fe++){const be=fe*D-B;for(let He=0;He<j;He++){const ot=He*M-V;le[v]=ot*_,le[g]=be*y,le[m]=G,c.push(le.x,le.y,le.z),le[v]=0,le[g]=0,le[m]=A>0?1:-1,u.push(le.x,le.y,le.z),d.push(He/C),d.push(1-fe/I),ne+=1}}for(let fe=0;fe<I;fe++)for(let be=0;be<C;be++){const He=h+be+j*fe,ot=h+be+j*(fe+1),$=h+(be+1)+j*(fe+1),se=h+(be+1)+j*fe;l.push(He,ot,se),l.push(ot,$,se),q+=6}o.addGroup(f,q,S),f+=q,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ra(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Ra(i[t]);for(const r in n)e[r]=n[r]}return e}function Jw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Yx={clone:Ra,merge:un};var Qw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qw,this.fragmentShader=eS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=Jw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _h extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new R,um=new te,hm=new te;class Kt extends _h{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,um,hm),t.subVectors(hm,um)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ys=1;class $x extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(qs,Ys,e,t);r.layers=this.layers,this.add(r);const s=new Kt(qs,Ys,e,t);s.layers=this.layers,this.add(s);const a=new Kt(qs,Ys,e,t);a.layers=this.layers,this.add(a);const o=new Kt(qs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Kt(qs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new Kt(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class _l extends Pt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _l(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ls(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Hi});s.uniforms.tEquirect.value=t;const a=new Ot(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=kt),new $x(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const pd=new R,tS=new R,nS=new qe;class dr{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pd.subVectors(n,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nS.getNormalMatrix(e),r=this.coplanarPoint(pd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new sn,Kl=new R;class Ml{constructor(e=new dr,t=new dr,n=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],p=r[9],v=r[10],g=r[11],m=r[12],_=r[13],y=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,g-f,x-m).normalize(),n[1].setComponents(l+s,h+c,g+f,x+m).normalize(),n[2].setComponents(l+a,h+u,g+p,x+_).normalize(),n[3].setComponents(l-a,h-u,g-p,x-_).normalize(),n[4].setComponents(l-o,h-d,g-v,x-y).normalize(),t===mi)n[5].setComponents(l+o,h+d,g+v,x+y).normalize();else if(t===No)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kx(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function iS(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ka extends je{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*h-a;for(let y=0;y<c;y++){const x=y*d-s;p.push(x,-_,0),v.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const y=_+c*m,x=_+c*(m+1),P=_+1+c*(m+1),A=_+1+c*m;f.push(y,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var rS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ES=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ib=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:rS,alphahash_pars_fragment:sS,alphamap_fragment:aS,alphamap_pars_fragment:oS,alphatest_fragment:lS,alphatest_pars_fragment:cS,aomap_fragment:uS,aomap_pars_fragment:hS,batching_pars_vertex:dS,batching_vertex:fS,begin_vertex:pS,beginnormal_vertex:mS,bsdfs:gS,iridescence_fragment:vS,bumpmap_pars_fragment:xS,clipping_planes_fragment:yS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:MS,clipping_planes_vertex:wS,color_fragment:SS,color_pars_fragment:bS,color_pars_vertex:TS,color_vertex:AS,common:ES,cube_uv_reflection_fragment:CS,defaultnormal_vertex:RS,displacementmap_pars_vertex:IS,displacementmap_vertex:LS,emissivemap_fragment:PS,emissivemap_pars_fragment:DS,colorspace_fragment:NS,colorspace_pars_fragment:US,envmap_fragment:zS,envmap_common_pars_fragment:OS,envmap_pars_fragment:FS,envmap_pars_vertex:kS,envmap_physical_pars_fragment:KS,envmap_vertex:BS,fog_vertex:VS,fog_pars_vertex:GS,fog_fragment:HS,fog_pars_fragment:WS,gradientmap_pars_fragment:XS,lightmap_pars_fragment:qS,lights_lambert_fragment:YS,lights_lambert_pars_fragment:$S,lights_pars_begin:ZS,lights_toon_fragment:jS,lights_toon_pars_fragment:JS,lights_phong_fragment:QS,lights_phong_pars_fragment:eb,lights_physical_fragment:tb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:rb,lights_fragment_end:sb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:ub,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:fb,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:vb,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:_b,normal_fragment_begin:Mb,normal_fragment_maps:wb,normal_pars_fragment:Sb,normal_pars_vertex:bb,normal_vertex:Tb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Ib,opaque_fragment:Lb,packing:Pb,premultiplied_alpha_fragment:Db,project_vertex:Nb,dithering_fragment:Ub,dithering_pars_fragment:zb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Gb,skinbase_vertex:Hb,skinning_pars_vertex:Wb,skinning_vertex:Xb,skinnormal_vertex:qb,specularmap_fragment:Yb,specularmap_pars_fragment:$b,tonemapping_fragment:Zb,tonemapping_pars_fragment:Kb,transmission_fragment:jb,transmission_pars_fragment:Jb,uv_pars_fragment:Qb,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:aT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distanceRGBA_vert:hT,distanceRGBA_frag:dT,equirect_vert:fT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:vT,meshbasic_frag:xT,meshlambert_vert:yT,meshlambert_frag:_T,meshmatcap_vert:MT,meshmatcap_frag:wT,meshnormal_vert:ST,meshnormal_frag:bT,meshphong_vert:TT,meshphong_frag:AT,meshphysical_vert:ET,meshphysical_frag:CT,meshtoon_vert:RT,meshtoon_frag:IT,points_vert:LT,points_frag:PT,shadow_vert:DT,shadow_frag:NT,sprite_vert:UT,sprite_frag:zT},pe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ei={basic:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:un([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:un([pe.lights,pe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ei.physical={uniforms:un([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const jl={r:0,b:0,g:0},Br=new zn,OT=new Ve;function FT(i,e,t,n,r,s,a){const o=new _e(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=p(_);x===null?m(o,l):x&&x.isColor&&(m(x,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===za)?(u===void 0&&(u=new Ot(new Ls(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ra(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(y.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Br)),u.material.toneMapped=nt.getTransfer(x.colorSpace)!==ft,(d!==x||h!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ot(new ka(2,2),new ii({name:"BackgroundMaterial",uniforms:Ra(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(jl,qx(i)),n.buffers.color.setClear(jl.r,jl.g,jl.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:v,addToRenderList:g}}function kT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(M,D,V,B,G){let j=!1;const X=d(B,V,D);s!==X&&(s=X,c(s.object)),j=f(M,B,V,G),j&&p(M,B,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,D,V,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,D,V){const B=V.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let j=G[D.id];j===void 0&&(j={},G[D.id]=j);let X=j[B];return X===void 0&&(X=h(l()),j[B]=X),X}function h(M){const D=[],V=[],B=[];for(let G=0;G<t;G++)D[G]=0,V[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,V,B){const G=s.attributes,j=D.attributes;let X=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){const fe=G[q];let be=j[q];if(be===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function p(M,D,V,B){const G={},j=D.attributes;let X=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){let fe=j[q];fe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),G[q]=be,X++}s.attributes=G,s.attributesNum=X,s.index=B}function v(){const M=s.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function g(M){m(M,0)}function m(M,D){const V=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;V[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),G[M]!==D&&(i.vertexAttribDivisor(M,D),G[M]=D)}function _(){const M=s.newAttributes,D=s.enabledAttributes;for(let V=0,B=D.length;V<B;V++)D[V]!==M[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function y(M,D,V,B,G,j,X){X===!0?i.vertexAttribIPointer(M,D,V,G,j):i.vertexAttribPointer(M,D,V,B,G,j)}function x(M,D,V,B){v();const G=B.attributes,j=V.getAttributes(),X=D.defaultAttributeValues;for(const ne in j){const q=j[ne];if(q.location>=0){let le=G[ne];if(le===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const fe=le.normalized,be=le.itemSize,He=e.get(le);if(He===void 0)continue;const ot=He.buffer,$=He.type,se=He.bytesPerElement,Ae=$===i.INT||$===i.UNSIGNED_INT||le.gpuType===hh;if(le.isInterleavedBufferAttribute){const ue=le.data,Ue=ue.stride,Ge=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<q.locationSize;Oe++)m(q.location+Oe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<q.locationSize;Oe++)g(q.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Oe=0;Oe<q.locationSize;Oe++)y(q.location+Oe,be/q.locationSize,$,fe,Ue*se,(Ge+be/q.locationSize*Oe)*se,Ae)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,be/q.locationSize,$,fe,be*se,be/q.locationSize*ue*se,Ae)}}else if(X!==void 0){const fe=X[ne];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(q.location,fe);break;case 3:i.vertexAttrib3fv(q.location,fe);break;case 4:i.vertexAttrib4fv(q.location,fe);break;default:i.vertexAttrib1fv(q.location,fe)}}}}_()}function P(){I();for(const M in n){const D=n[M];for(const V in D){const B=D[V];for(const G in B)u(B[G].object),delete B[G];delete D[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const V in D){const B=D[V];for(const G in B)u(B[G].object),delete B[G];delete D[V]}delete n[M.id]}function C(M){for(const D in n){const V=n[D];if(V[M.id]===void 0)continue;const B=V[M.id];for(const G in B)u(B[G].object),delete B[G];delete V[M.id]}}function I(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function BT(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v]*h[v];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VT(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_i&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function GT(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new dr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const _=s?0:n,y=_*4;let x=m.clippingState||null;l.value=x,x=u(p,h,y,f);for(let P=0;P!==y;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(d[y]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function HT(i){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=Zi:o===Co&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===Co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zx(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mh extends _h{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sa=4,dm=[.125,.215,.35,.446,.526,.582],Qr=20,md=new Mh,fm=new _e;let gd=null,vd=0,xd=0,yd=!1;const Jr=(1+Math.sqrt(5))/2,$s=1/Jr,pm=[new R(-Jr,$s,0),new R(Jr,$s,0),new R(-$s,0,Jr),new R($s,0,Jr),new R(0,Jr,-$s),new R(0,Jr,$s),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,xd),this._renderer.xr.enabled=yd,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Oa,format:fn,colorSpace:Rr,depthBuffer:!1},r=mm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(s)),this._blurMaterial=XT(s,e,t)}return r}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,n,r){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(fm),u.toneMapping=Wi,u.autoClear=!1;const f=new Ir({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),p=new Ot(new Ls,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(fm),v=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;Jl(r,_*y,m>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zi||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,md)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pm[(r-s-1)%pm.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ot(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qr-1),v=s/p,g=isFinite(s)?1+Math.floor(u*v):Qr;g>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qr}`);const m=[];let _=0;for(let C=0;C<Qr;++C){const I=C/v,S=Math.exp(-I*I/2);m.push(S),C===0?_+=S:C<g&&(_+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;const x=this._sizeLods[r],P=3*x*(r>y-sa?r-y+sa:0),A=4*(this._cubeSize-x);Jl(t,P,A,3*x,2*x),l.setRenderTarget(t),l.render(d,md)}}function WT(i){const e=[],t=[],n=[];let r=i;const s=i-sa+1+dm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-sa?l=dm[a-i+sa-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,I=A>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(S,v*p*A),y.set(h,g*p*A);const M=[A,A,A,A,A,A];x.set(M,m*p*A)}const P=new je;P.setAttribute("position",new gt(_,v)),P.setAttribute("uv",new gt(y,g)),P.setAttribute("faceIndex",new gt(x,m)),e.push(P),r>sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mm(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function XT(i,e,t){const n=new Float32Array(Qr),r=new R(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function gm(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function vm(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qT(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===Co,u=l===Zi||l===Tr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new rf(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new rf(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function YT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $T(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);for(const p in h.morphAttributes){const v=h.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const P=_[y+0],A=_[y+1],C=_[y+2];h.push(P,A,A,C,C,P)}}else if(p!==void 0){const _=p.array;v=p.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const P=y+0,A=y+1,C=y+2;h.push(P,A,A,C,C,P)}}else return;const g=new(Vx(h)?Zf:$f)(h,1);g.version=v;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ZT(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function d(h,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/a,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];t.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function KT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jT(i,e,t){const n=new WeakMap,r=new st;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*P*4*d),C=new xh(A,x,P,d);C.type=En,C.needsUpdate=!0;const I=y*4;for(let M=0;M<d;M++){const D=g[M],V=m[M],B=_[M],G=x*P*4*M;for(let j=0;j<D.count;j++){const X=j*I;f===!0&&(r.fromBufferAttribute(D,j),A[G+X+0]=r.x,A[G+X+1]=r.y,A[G+X+2]=r.z,A[G+X+3]=0),p===!0&&(r.fromBufferAttribute(V,j),A[G+X+4]=r.x,A[G+X+5]=r.y,A[G+X+6]=r.z,A[G+X+7]=0),v===!0&&(r.fromBufferAttribute(B,j),A[G+X+8]=r.x,A[G+X+9]=r.y,A[G+X+10]=r.z,A[G+X+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new te(x,P)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function JT(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class jf extends Pt{constructor(e,t,n,r,s,a,o,l,c,u=xs){if(u!==xs&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Ki),n===void 0&&u===As&&(n=Ts),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jx=new Pt,xm=new jf(1,1),Jx=new xh,Qx=new Yf,e0=new _l,ym=[],_m=[],Mm=new Float32Array(16),wm=new Float32Array(9),Sm=new Float32Array(4);function Ba(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wh(i,e){let t=_m[e];t===void 0&&(t=new Int32Array(e),_m[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function QT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function iA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Sm.set(n),i.uniformMatrix2fv(this.addr,!1,Sm),Vt(t,n)}}function rA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;wm.set(n),i.uniformMatrix3fv(this.addr,!1,wm),Vt(t,n)}}function sA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Mm.set(n),i.uniformMatrix4fv(this.addr,!1,Mm),Vt(t,n)}}function aA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function lA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function uA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function dA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function fA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function pA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xm.compareFunction=Xf,s=xm):s=jx,t.setTexture2D(e||s,r)}function mA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qx,r)}function gA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||e0,r)}function vA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jx,r)}function xA(i){switch(i){case 5126:return QT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return hA;case 36295:return dA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}function yA(i,e){i.uniform1fv(this.addr,e)}function _A(i,e){const t=Ba(e,this.size,2);i.uniform2fv(this.addr,t)}function MA(i,e){const t=Ba(e,this.size,3);i.uniform3fv(this.addr,t)}function wA(i,e){const t=Ba(e,this.size,4);i.uniform4fv(this.addr,t)}function SA(i,e){const t=Ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bA(i,e){const t=Ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TA(i,e){const t=Ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AA(i,e){i.uniform1iv(this.addr,e)}function EA(i,e){i.uniform2iv(this.addr,e)}function CA(i,e){i.uniform3iv(this.addr,e)}function RA(i,e){i.uniform4iv(this.addr,e)}function IA(i,e){i.uniform1uiv(this.addr,e)}function LA(i,e){i.uniform2uiv(this.addr,e)}function PA(i,e){i.uniform3uiv(this.addr,e)}function DA(i,e){i.uniform4uiv(this.addr,e)}function NA(i,e,t){const n=this.cache,r=e.length,s=wh(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||jx,s[a])}function UA(i,e,t){const n=this.cache,r=e.length,s=wh(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qx,s[a])}function zA(i,e,t){const n=this.cache,r=e.length,s=wh(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||e0,s[a])}function OA(i,e,t){const n=this.cache,r=e.length,s=wh(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Jx,s[a])}function FA(i){switch(i){case 5126:return yA;case 35664:return _A;case 35665:return MA;case 35666:return wA;case 35674:return SA;case 35675:return bA;case 35676:return TA;case 5124:case 35670:return AA;case 35667:case 35671:return EA;case 35668:case 35672:return CA;case 35669:case 35673:return RA;case 5125:return IA;case 36294:return LA;case 36295:return PA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return OA}}class kA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class BA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FA(t.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function bm(i,e){i.seq.push(e),i.map[e.id]=e}function GA(i,e,t){const n=i.name,r=n.length;for(_d.lastIndex=0;;){const s=_d.exec(n),a=_d.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bm(t,c===void 0?new kA(o,i,e):new BA(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new VA(o),bm(t,d)),t=d}}}class Pc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);GA(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Tm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const HA=37297;let WA=0;function XA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Am=new qe;function qA(i){nt._getMatrix(Am,nt.workingColorSpace,i);const e=`mat3( ${Am.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case yl:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Em(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+XA(i.getShaderSource(e),a)}else return r}function YA(i,e){const t=qA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $A(i,e){let t;switch(e){case _x:t="Linear";break;case Mx:t="Reinhard";break;case wx:t="Cineon";break;case Sx:t="ACESFilmic";break;case Tx:t="AgX";break;case Ax:t="Neutral";break;case bx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new R;function ZA(){nt.getLuminanceCoefficients(Ql);const i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function jA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fo(i){return i!==""}function Cm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(i){return i.replace(QA,tE)}const eE=new Map;function tE(i,e){let t=Ke[e];if(t===void 0){const n=eE.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sf(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(i){return i.replace(nE,iE)}function iE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Tr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case xx:e="ENVMAP_BLENDING_MIX";break;case yx:e="ENVMAP_BLENDING_ADD";break}return e}function lE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rE(t),c=sE(t),u=aE(t),d=oE(t),h=lE(t),f=KA(t),p=jA(s),v=r.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fo).join(`
`),m.length>0&&(m+=`
`)):(g=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),m=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Wi?$A("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,YA("linearToOutputTexel",t.outputColorSpace),ZA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),a=sf(a),a=Cm(a,t),a=Rm(a,t),o=sf(o),o=Cm(o,t),o=Rm(o,t),a=Im(a),o=Im(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+g+a,x=_+m+o,P=Tm(r,r.VERTEX_SHADER,y),A=Tm(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(A).trim();let j=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,A);else{const ne=Em(r,P,"vertex"),q=Em(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ne+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||G==="")&&(X=!1);X&&(D.diagnostics={runnable:j,programLog:V,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:m}})}r.deleteShader(P),r.deleteShader(A),I=new Pc(r,v),S=JA(r,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,HA)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let uE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dE(e),t.set(e,n)),n}}class dE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function fE(i,e,t,n,r,s,a){const o=new yh,l=new hE,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,D,V,B){const G=V.fog,j=B.geometry,X=S.isMeshStandardMaterial?V.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),q=ne&&ne.mapping===za?ne.image.height:null,le=p[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,be=fe!==void 0?fe.length:0;let He=0;j.morphAttributes.position!==void 0&&(He=1),j.morphAttributes.normal!==void 0&&(He=2),j.morphAttributes.color!==void 0&&(He=3);let ot,$,se,Ae;if(le){const dt=ei[le];ot=dt.vertexShader,$=dt.fragmentShader}else ot=S.vertexShader,$=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const ue=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Ge=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,tt=!!S.map,Q=!!S.matcap,oe=!!ne,L=!!S.aoMap,Ne=!!S.lightMap,re=!!S.bumpMap,Te=!!S.normalMap,de=!!S.displacementMap,ke=!!S.emissiveMap,Me=!!S.metalnessMap,E=!!S.roughnessMap,w=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,ie=S.iridescence>0,K=S.sheen>0,Ie=S.transmission>0,me=w&&!!S.anisotropyMap,we=k&&!!S.clearcoatMap,et=k&&!!S.clearcoatNormalMap,ae=k&&!!S.clearcoatRoughnessMap,Ee=ie&&!!S.iridescenceMap,Be=ie&&!!S.iridescenceThicknessMap,We=K&&!!S.sheenColorMap,Ce=K&&!!S.sheenRoughnessMap,it=!!S.specularMap,Je=!!S.specularColorMap,xt=!!S.specularIntensityMap,U=Ie&&!!S.transmissionMap,ge=Ie&&!!S.thicknessMap,Y=!!S.gradientMap,ee=!!S.alphaMap,ye=S.alphaTest>0,ve=!!S.alphaHash,$e=!!S.extensions;let Rt=Wi;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const Qt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:ot,fragmentShader:$,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&B.instanceColor!==null,instancingMorph:Ge&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rr,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:Q,envMap:oe,envMapMode:oe&&ne.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:Ne,bumpMap:re,normalMap:Te,displacementMap:h&&de,emissiveMap:ke,normalMapObjectSpace:Te&&S.normalMapType===Dx,normalMapTangentSpace:Te&&S.normalMapType===Cr,metalnessMap:Me,roughnessMap:E,anisotropy:w,anisotropyMap:me,clearcoat:k,clearcoatMap:we,clearcoatNormalMap:et,clearcoatRoughnessMap:ae,dispersion:Z,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:K,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:it,specularColorMap:Je,specularIntensityMap:xt,transmission:Ie,transmissionMap:U,thicknessMap:ge,gradientMap:Y,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ye,alphaHash:ve,combine:S.combine,mapUv:tt&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Ne&&v(S.lightMap.channel),bumpMapUv:re&&v(S.bumpMap.channel),normalMapUv:Te&&v(S.normalMap.channel),displacementMapUv:de&&v(S.displacementMap.channel),emissiveMapUv:ke&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:me&&v(S.anisotropyMap.channel),clearcoatMapUv:we&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(S.sheenRoughnessMap.channel),specularMapUv:it&&v(S.specularMap.channel),specularColorMapUv:Je&&v(S.specularColorMap.channel),specularIntensityMapUv:xt&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:ge&&v(S.thicknessMap.channel),alphaMapUv:ee&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Te||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(tt||ee),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ue,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:ke&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=p[S.type];let D;if(M){const V=ei[M];D=Yx.clone(V.uniforms)}else D=S.uniforms;return D}function P(S,M){let D;for(let V=0,B=u.length;V<B;V++){const G=u[V];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new cE(i,M,S,s),u.push(D)),D}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:I}}function pE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,h,f,p,v,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),e++,m}function o(d,h,f,p,v,g){const m=a(d,h,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(d,h,f,p,v,g){const m=a(d,h,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||mE),n.length>1&&n.sort(h||Pm),r.length>1&&r.sort(h||Pm)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function gE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Dm,i.set(n,[a])):r>=s.length?(a=new Dm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new _e};break;case"SpotLight":t={position:new R,direction:new R,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function xE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yE=0;function _E(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ME(i){const e=new vE,t=xE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Ve,a=new Ve;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,y=0,x=0,P=0,A=0,C=0;c.sort(_E);for(let S=0,M=c.length;S<M;S++){const D=c[S],V=D.color,B=D.intensity,G=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*B,d+=V.g*B,h+=V.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);C++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[v]=X;const ne=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,ne.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[v]=ne.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=j,x++}v++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=X,p++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==P||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=P,I.numLightProbes=C,n.version=yE++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Nm(i){const e=new ME(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function wE(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nm(i),e.set(r,[o])):s>=a.length?(o=new Nm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jf extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TE(i,e,t){let n=new Ml;const r=new te,s=new te,a=new st,o=new Jf({depthPacking:Px}),l=new Qf,c={},u=t.maxTextureSize,d={[$i]:mn,[mn]:$i,[hi]:hi},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:SE,fragmentShader:bE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new je;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let m=this.type;this.render=function(A,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Hi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=m!==li&&this.type===li,G=m===li&&this.type!==li;for(let j=0,X=A.length;j<X;j++){const ne=A[j],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const le=q.getFrameExtents();if(r.multiply(le),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,q.mapSize.y=s.y)),q.map===null||B===!0||G===!0){const be=this.type!==li?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new ni(r.x,r.y,be),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const fe=q.getViewportCount();for(let be=0;be<fe;be++){const He=q.getViewport(be);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),V.viewport(a),q.updateMatrices(ne,be),n=q.getFrustum(),x(C,I,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===li&&_(q,I),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,D)};function _(A,C){const I=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,I,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,I,f,v,null)}function y(A,C,I,S){let M=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,B=C.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let j=G[B];j===void 0&&(j=M.clone(),G[B]=j,C.addEventListener("dispose",P)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,S===li?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=I}return M}function x(A,C,I,S,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const B=e.update(A),G=A.material;if(Array.isArray(G)){const j=B.groups;for(let X=0,ne=j.length;X<ne;X++){const q=j[X],le=G[q.materialIndex];if(le&&le.visible){const fe=y(A,le,S,M);A.onBeforeShadow(i,A,C,I,B,fe,q),i.renderBufferDirect(I,null,B,fe,A,q),A.onAfterShadow(i,A,C,I,B,fe,q)}}}else if(G.visible){const j=y(A,G,S,M);A.onBeforeShadow(i,A,C,I,B,j,null),i.renderBufferDirect(I,null,B,j,A,null),A.onAfterShadow(i,A,C,I,B,j,null)}}const V=A.children;for(let B=0,G=V.length;B<G;B++)x(V[B],C,I,S,M)}function P(A){A.target.removeEventListener("dispose",P);for(const I in c){const S=c[I],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const AE={[Hc]:Wc,[Xc]:$c,[qc]:Zc,[bs]:Yc,[Wc]:Hc,[$c]:Xc,[Zc]:qc,[Yc]:bs};function EE(i,e){function t(){let U=!1;const ge=new st;let Y=null;const ee=new st(0,0,0,0);return{setMask:function(ye){Y!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ve,$e,Rt,Qt){Qt===!0&&(ye*=Rt,ve*=Rt,$e*=Rt),ge.set(ye,ve,$e,Rt),ee.equals(ge)===!1&&(i.clearColor(ye,ve,$e,Rt),ee.copy(ge))},reset:function(){U=!1,Y=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,Y=null,ee=null,ye=null;return{setReversed:function(ve){if(ge!==ve){const $e=e.get("EXT_clip_control");ge?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Rt=ye;ye=null,this.setClear(Rt)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?ue(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ve){Y!==ve&&!U&&(i.depthMask(ve),Y=ve)},setFunc:function(ve){if(ge&&(ve=AE[ve]),ee!==ve){switch(ve){case Hc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case qc:i.depthFunc(i.EQUAL);break;case Yc:i.depthFunc(i.GEQUAL);break;case $c:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ve}},setLocked:function(ve){U=ve},setClear:function(ve){ye!==ve&&(ge&&(ve=1-ve),i.clearDepth(ve),ye=ve)},reset:function(){U=!1,Y=null,ee=null,ye=null,ge=!1}}}function r(){let U=!1,ge=null,Y=null,ee=null,ye=null,ve=null,$e=null,Rt=null,Qt=null;return{setTest:function(dt){U||(dt?ue(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(dt){ge!==dt&&!U&&(i.stencilMask(dt),ge=dt)},setFunc:function(dt,Yn,bi){(Y!==dt||ee!==Yn||ye!==bi)&&(i.stencilFunc(dt,Yn,bi),Y=dt,ee=Yn,ye=bi)},setOp:function(dt,Yn,bi){(ve!==dt||$e!==Yn||Rt!==bi)&&(i.stencilOp(dt,Yn,bi),ve=dt,$e=Yn,Rt=bi)},setLocked:function(dt){U=dt},setClear:function(dt){Qt!==dt&&(i.clearStencil(dt),Qt=dt)},reset:function(){U=!1,ge=null,Y=null,ee=null,ye=null,ve=null,$e=null,Rt=null,Qt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,P=null,A=null,C=new _e(0,0,0),I=0,S=!1,M=null,D=null,V=null,B=null,G=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ne>=2);let le=null,fe={};const be=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),ot=new st().fromArray(be),$=new st().fromArray(He);function se(U,ge,Y,ee){const ye=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Y;$e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ge+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ve}const Ae={};Ae[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(bs),re(!1),Te(Kd),ue(i.CULL_FACE),L(Hi);function ue(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ue(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ge(U,ge){return d[U]!==ge?(i.bindFramebuffer(U,ge),d[U]=ge,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(U,ge){let Y=f,ee=!1;if(U){Y=h.get(ge),Y===void 0&&(Y=[],h.set(ge,Y));const ye=U.textures;if(Y.length!==ye.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,$e=ye.length;ve<$e;ve++)Y[ve]=i.COLOR_ATTACHMENT0+ve;Y.length=ye.length,ee=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ee=!0);ee&&i.drawBuffers(Y)}function tt(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const Q={[fr]:i.FUNC_ADD,[tx]:i.FUNC_SUBTRACT,[nx]:i.FUNC_REVERSE_SUBTRACT};Q[ix]=i.MIN,Q[rx]=i.MAX;const oe={[sx]:i.ZERO,[ax]:i.ONE,[ox]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[fx]:i.SRC_ALPHA_SATURATE,[hx]:i.DST_COLOR,[cx]:i.DST_ALPHA,[lx]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[dx]:i.ONE_MINUS_DST_COLOR,[ux]:i.ONE_MINUS_DST_ALPHA,[px]:i.CONSTANT_COLOR,[mx]:i.ONE_MINUS_CONSTANT_COLOR,[gx]:i.CONSTANT_ALPHA,[vx]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,ge,Y,ee,ye,ve,$e,Rt,Qt,dt){if(U===Hi){v===!0&&(Ue(i.BLEND),v=!1);return}if(v===!1&&(ue(i.BLEND),v=!0),U!==ex){if(U!==g||dt!==S){if((m!==fr||x!==fr)&&(i.blendEquation(i.FUNC_ADD),m=fr,x=fr),dt)switch(U){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jd:i.blendFunc(i.ONE,i.ONE);break;case Jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,y=null,P=null,A=null,C.set(0,0,0),I=0,g=U,S=dt}return}ye=ye||ge,ve=ve||Y,$e=$e||ee,(ge!==m||ye!==x)&&(i.blendEquationSeparate(Q[ge],Q[ye]),m=ge,x=ye),(Y!==_||ee!==y||ve!==P||$e!==A)&&(i.blendFuncSeparate(oe[Y],oe[ee],oe[ve],oe[$e]),_=Y,y=ee,P=ve,A=$e),(Rt.equals(C)===!1||Qt!==I)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Qt),C.copy(Rt),I=Qt),g=U,S=!1}function Ne(U,ge){U.side===hi?Ue(i.CULL_FACE):ue(i.CULL_FACE);let Y=U.side===mn;ge&&(Y=!Y),re(Y),U.blending===vs&&U.transparent===!1?L(Hi):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ke(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Te(U){U!==jv?(ue(i.CULL_FACE),U!==D&&(U===Kd?i.cullFace(i.BACK):U===Jv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),D=U}function de(U){U!==V&&(X&&i.lineWidth(U),V=U)}function ke(U,ge,Y){U?(ue(i.POLYGON_OFFSET_FILL),(B!==ge||G!==Y)&&(i.polygonOffset(ge,Y),B=ge,G=Y)):Ue(i.POLYGON_OFFSET_FILL)}function Me(U){U?ue(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+j-1),le!==U&&(i.activeTexture(U),le=U)}function w(U,ge,Y){Y===void 0&&(le===null?Y=i.TEXTURE0+j-1:Y=le);let ee=fe[Y];ee===void 0&&(ee={type:void 0,texture:void 0},fe[Y]=ee),(ee.type!==U||ee.texture!==ge)&&(le!==Y&&(i.activeTexture(Y),le=Y),i.bindTexture(U,ge||Ae[U]),ee.type=U,ee.texture=ge)}function k(){const U=fe[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(U){ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function Ce(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function it(U,ge){let Y=c.get(ge);Y===void 0&&(Y=new WeakMap,c.set(ge,Y));let ee=Y.get(U);ee===void 0&&(ee=i.getUniformBlockIndex(ge,U.name),Y.set(U,ee))}function Je(U,ge){const ee=c.get(ge).get(U);l.get(ge)!==ee&&(i.uniformBlockBinding(ge,ee,U.__bindingPointIndex),l.set(ge,ee))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,fe={},d={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,y=null,x=null,P=null,A=null,C=new _e(0,0,0),I=0,S=!1,M=null,D=null,V=null,B=null,G=null,ot.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ue,bindFramebuffer:Ge,drawBuffers:Oe,useProgram:tt,setBlending:L,setMaterial:Ne,setFlipSided:re,setCullFace:Te,setLineWidth:de,setPolygonOffset:ke,setScissorTest:Me,activeTexture:E,bindTexture:w,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:Be,updateUBOMapping:it,uniformBlockBinding:Je,texStorage2D:et,texStorage3D:ae,texSubImage2D:K,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:we,scissor:We,viewport:Ce,reset:xt}}function CE(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function RE(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function IE(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function af(i,e,t,n){const r=LE(n);switch(t){case Ff:return i*e;case Bf:return i*e;case Vf:return i*e*2;case ph:return i*e/r.components*r.byteLength;case xl:return i*e/r.components*r.byteLength;case Gf:return i*e*2/r.components*r.byteLength;case mh:return i*e*2/r.components*r.byteLength;case kf:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case gh:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case Qc:return Math.max(i,16)*Math.max(e,8)/4;case Kc:case Jc:return Math.max(i,8)*Math.max(e,8)/2;case eu:case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case vu:case xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hf:case yu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _u:case Mu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LE(i){switch(i){case _i:case Uf:return{byteLength:1,components:1};case Ea:case zf:case Oa:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case Ki:case hh:case En:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const PE={contain:CE,cover:RE,fill:IE,getByteLength:af};function DE(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,w){return f?new OffscreenCanvas(E,w):Uo("canvas")}function v(E,w,k){let Z=1;const ie=Me(E);if((ie.width>k||ie.height>k)&&(Z=k/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor(Z*ie.width),Ie=Math.floor(Z*ie.height);d===void 0&&(d=p(K,Ie));const me=w?p(K,Ie):d;return me.width=K,me.height=Ie,me.getContext("2d").drawImage(E,0,0,K,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+Ie+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,w,k,Z,ie=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=w;if(w===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),w===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),w===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),w===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),w===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),w===i.RGBA){const Ie=ie?yl:nt.getTransfer(Z);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Ie===ft?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(E,w){let k;return E?w===null||w===Ki||w===Ts?k=i.DEPTH24_STENCIL8:w===En?k=i.DEPTH32F_STENCIL8:w===Ea&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ki||w===Ts?k=i.DEPTH_COMPONENT24:w===En?k=i.DEPTH_COMPONENT32F:w===Ea&&(k=i.DEPTH_COMPONENT16),k}function P(E,w){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==kt?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function A(E){const w=E.target;w.removeEventListener("dispose",A),I(w),w.isVideoTexture&&u.delete(w)}function C(E){const w=E.target;w.removeEventListener("dispose",C),M(w)}function I(E){const w=n.get(E);if(w.__webglInit===void 0)return;const k=E.source,Z=h.get(k);if(Z){const ie=Z[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(E),Object.keys(Z).length===0&&h.delete(k)}n.remove(E)}function S(E){const w=n.get(E);i.deleteTexture(w.__webglTexture);const k=E.source,Z=h.get(k);delete Z[w.__cacheKey],a.memory.textures--}function M(E){const w=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let ie=0;ie<w.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=E.textures;for(let Z=0,ie=k.length;Z<ie;Z++){const K=n.get(k[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(E)}let D=0;function V(){D=0}function B(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function G(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function j(E,w){const k=n.get(E);if(E.isVideoTexture&&de(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,E,w);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function X(E,w){const k=n.get(E);if(E.version>0&&k.__version!==E.version){$(k,E,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function ne(E,w){const k=n.get(E);if(E.version>0&&k.__version!==E.version){$(k,E,w);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function q(E,w){const k=n.get(E);if(E.version>0&&k.__version!==E.version){se(k,E,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}const le={[Ro]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},fe={[Jt]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},be={[Nx]:i.NEVER,[Bx]:i.ALWAYS,[Ux]:i.LESS,[Xf]:i.LEQUAL,[zx]:i.EQUAL,[kx]:i.GEQUAL,[Ox]:i.GREATER,[Fx]:i.NOTEQUAL};function He(E,w){if(w.type===En&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kt||w.magFilter===po||w.magFilter===ia||w.magFilter===pi||w.minFilter===kt||w.minFilter===po||w.minFilter===ia||w.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,le[w.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[w.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[w.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,fe[w.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==ia&&w.minFilter!==pi||w.type===En&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ot(E,w){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",A));const Z=w.source;let ie=h.get(Z);ie===void 0&&(ie={},h.set(Z,ie));const K=G(w);if(K!==E.__cacheKey){ie[K]===void 0&&(ie[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ie[K].usedTimes++;const Ie=ie[E.__cacheKey];Ie!==void 0&&(ie[E.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(w)),E.__cacheKey=K,E.__webglTexture=ie[K].texture}return k}function $(E,w,k){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=ot(E,w),K=w.source;t.bindTexture(Z,E.__webglTexture,i.TEXTURE0+k);const Ie=n.get(K);if(K.version!==Ie.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const me=nt.getPrimaries(nt.workingColorSpace),we=w.colorSpace===ki?null:nt.getPrimaries(w.colorSpace),et=w.colorSpace===ki||me===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ae=v(w.image,!1,r.maxTextureSize);ae=ke(w,ae);const Ee=s.convert(w.format,w.colorSpace),Be=s.convert(w.type);let We=y(w.internalFormat,Ee,Be,w.colorSpace,w.isVideoTexture);He(Z,w);let Ce;const it=w.mipmaps,Je=w.isVideoTexture!==!0,xt=Ie.__version===void 0||ie===!0,U=K.dataReady,ge=P(w,ae);if(w.isDepthTexture)We=x(w.format===As,w.type),xt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,We,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,We,ae.width,ae.height,0,Ee,Be,null));else if(w.isDataTexture)if(it.length>0){Je&&xt&&t.texStorage2D(i.TEXTURE_2D,ge,We,it[0].width,it[0].height);for(let Y=0,ee=it.length;Y<ee;Y++)Ce=it[Y],Je?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,Ee,Be,Ce.data):t.texImage2D(i.TEXTURE_2D,Y,We,Ce.width,Ce.height,0,Ee,Be,Ce.data);w.generateMipmaps=!1}else Je?(xt&&t.texStorage2D(i.TEXTURE_2D,ge,We,ae.width,ae.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Be,ae.data)):t.texImage2D(i.TEXTURE_2D,0,We,ae.width,ae.height,0,Ee,Be,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,We,it[0].width,it[0].height,ae.depth);for(let Y=0,ee=it.length;Y<ee;Y++)if(Ce=it[Y],w.format!==fn)if(Ee!==null)if(Je){if(U)if(w.layerUpdates.size>0){const ye=af(Ce.width,Ce.height,w.format,w.type);for(const ve of w.layerUpdates){const $e=Ce.data.subarray(ve*ye/Ce.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ve,Ce.width,Ce.height,1,Ee,$e)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ce.width,Ce.height,ae.depth,Ee,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,We,Ce.width,Ce.height,ae.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ce.width,Ce.height,ae.depth,Ee,Be,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,We,Ce.width,Ce.height,ae.depth,0,Ee,Be,Ce.data)}else{Je&&xt&&t.texStorage2D(i.TEXTURE_2D,ge,We,it[0].width,it[0].height);for(let Y=0,ee=it.length;Y<ee;Y++)Ce=it[Y],w.format!==fn?Ee!==null?Je?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,Ee,Be,Ce.data):t.texImage2D(i.TEXTURE_2D,Y,We,Ce.width,Ce.height,0,Ee,Be,Ce.data)}else if(w.isDataArrayTexture)if(Je){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,We,ae.width,ae.height,ae.depth),U)if(w.layerUpdates.size>0){const Y=af(ae.width,ae.height,w.format,w.type);for(const ee of w.layerUpdates){const ye=ae.data.subarray(ee*Y/ae.data.BYTES_PER_ELEMENT,(ee+1)*Y/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Ee,Be,ye)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(w.isData3DTexture)Je?(xt&&t.texStorage3D(i.TEXTURE_3D,ge,We,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)):t.texImage3D(i.TEXTURE_3D,0,We,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(w.isFramebufferTexture){if(xt)if(Je)t.texStorage2D(i.TEXTURE_2D,ge,We,ae.width,ae.height);else{let Y=ae.width,ee=ae.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,We,Y,ee,0,Ee,Be,null),Y>>=1,ee>>=1}}else if(it.length>0){if(Je&&xt){const Y=Me(it[0]);t.texStorage2D(i.TEXTURE_2D,ge,We,Y.width,Y.height)}for(let Y=0,ee=it.length;Y<ee;Y++)Ce=it[Y],Je?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee,Be,Ce):t.texImage2D(i.TEXTURE_2D,Y,We,Ee,Be,Ce);w.generateMipmaps=!1}else if(Je){if(xt){const Y=Me(ae);t.texStorage2D(i.TEXTURE_2D,ge,We,Y.width,Y.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Be,ae)}else t.texImage2D(i.TEXTURE_2D,0,We,Ee,Be,ae);g(w)&&m(Z),Ie.__version=K.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function se(E,w,k){if(w.image.length!==6)return;const Z=ot(E,w),ie=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);const K=n.get(ie);if(ie.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);const Ie=nt.getPrimaries(nt.workingColorSpace),me=w.colorSpace===ki?null:nt.getPrimaries(w.colorSpace),we=w.colorSpace===ki||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!et&&!ae?Ee[ee]=v(w.image[ee],!0,r.maxCubemapSize):Ee[ee]=ae?w.image[ee].image:w.image[ee],Ee[ee]=ke(w,Ee[ee]);const Be=Ee[0],We=s.convert(w.format,w.colorSpace),Ce=s.convert(w.type),it=y(w.internalFormat,We,Ce,w.colorSpace),Je=w.isVideoTexture!==!0,xt=K.__version===void 0||Z===!0,U=ie.dataReady;let ge=P(w,Be);He(i.TEXTURE_CUBE_MAP,w);let Y;if(et){Je&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,it,Be.width,Be.height);for(let ee=0;ee<6;ee++){Y=Ee[ee].mipmaps;for(let ye=0;ye<Y.length;ye++){const ve=Y[ye];w.format!==fn?We!==null?Je?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,it,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,ve.width,ve.height,We,Ce,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,it,ve.width,ve.height,0,We,Ce,ve.data)}}}else{if(Y=w.mipmaps,Je&&xt){Y.length>0&&ge++;const ee=Me(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,it,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,We,Ce,Ee[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,Ee[ee].width,Ee[ee].height,0,We,Ce,Ee[ee].data);for(let ye=0;ye<Y.length;ye++){const $e=Y[ye].image[ee].image;Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,$e.width,$e.height,We,Ce,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,it,$e.width,$e.height,0,We,Ce,$e.data)}}else{Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,We,Ce,Ee[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,We,Ce,Ee[ee]);for(let ye=0;ye<Y.length;ye++){const ve=Y[ye];Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,We,Ce,ve.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,it,We,Ce,ve.image[ee])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),K.__version=ie.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function Ae(E,w,k,Z,ie,K){const Ie=s.convert(k.format,k.colorSpace),me=s.convert(k.type),we=y(k.internalFormat,Ie,me,k.colorSpace),et=n.get(w),ae=n.get(k);if(ae.__renderTarget=w,!et.__hasExternalTextures){const Ee=Math.max(1,w.width>>K),Be=Math.max(1,w.height>>K);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,we,Ee,Be,w.depth,0,Ie,me,null):t.texImage2D(ie,K,we,Ee,Be,0,Ie,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Te(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,0,re(w)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,ae.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(E,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),w.depthBuffer){const Z=w.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,K=x(w.stencilBuffer,ie),Ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=re(w);Te(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,K,w.width,w.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,E)}else{const Z=w.textures;for(let ie=0;ie<Z.length;ie++){const K=Z[ie],Ie=s.convert(K.format,K.colorSpace),me=s.convert(K.type),we=y(K.internalFormat,Ie,me,K.colorSpace),et=re(w);k&&Te(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,we,w.width,w.height):Te(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const ie=Z.__webglTexture,K=re(w);if(w.depthTexture.format===xs)Te(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(w.depthTexture.format===As)Te(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ge(E){const w=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=Z}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,E)}else if(k){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),ue(w.__webglDepthbuffer[Z],E,!1);else{const ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ue(w.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(E,w,k){const Z=n.get(E);w!==void 0&&Ae(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ge(E)}function tt(E){const w=E.texture,k=n.get(E),Z=n.get(w);E.addEventListener("dispose",C);const ie=E.textures,K=E.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[me]=[];for(let we=0;we<w.mipmaps.length;we++)k.__webglFramebuffer[me][we]=i.createFramebuffer()}else k.__webglFramebuffer[me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)k.__webglFramebuffer[me]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let me=0,we=ie.length;me<we;me++){const et=n.get(ie[me]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Te(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const we=ie[me];k.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[me]);const et=s.convert(we.format,we.colorSpace),ae=s.convert(we.type),Ee=y(we.internalFormat,et,ae,we.colorSpace,E.isXRRenderTarget===!0),Be=re(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,k.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),He(i.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)Ae(k.__webglFramebuffer[me][we],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else Ae(k.__webglFramebuffer[me],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let me=0,we=ie.length;me<we;me++){const et=ie[me],ae=n.get(et);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),He(i.TEXTURE_2D,et),Ae(k.__webglFramebuffer,E,et,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),g(et)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Z.__webglTexture),He(me,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)Ae(k.__webglFramebuffer[we],E,w,i.COLOR_ATTACHMENT0,me,we);else Ae(k.__webglFramebuffer,E,w,i.COLOR_ATTACHMENT0,me,0);g(w)&&m(me),t.unbindTexture()}E.depthBuffer&&Ge(E)}function Q(E){const w=E.textures;for(let k=0,Z=w.length;k<Z;k++){const ie=w[k];if(g(ie)){const K=_(E),Ie=n.get(ie).__webglTexture;t.bindTexture(K,Ie),m(K),t.unbindTexture()}}}const oe=[],L=[];function Ne(E){if(E.samples>0){if(Te(E)===!1){const w=E.textures,k=E.width,Z=E.height;let ie=i.COLOR_BUFFER_BIT;const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(E),me=w.length>1;if(me)for(let we=0;we<w.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<w.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const et=n.get(w[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,ie,i.NEAREST),l===!0&&(oe.length=0,L.length=0,oe.push(i.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<w.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const et=n.get(w[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const w=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function re(E){return Math.min(r.maxSamples,E.samples)}function Te(E){const w=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(E){const w=a.render.frame;u.get(E)!==w&&(u.set(E,w),E.update())}function ke(E,w){const k=E.colorSpace,Z=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Rr&&k!==ki&&(nt.getTransfer(k)===ft?(Z!==fn||ie!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=Oe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Te}function t0(i,e){function t(n,r=ki){let s;const a=nt.getTransfer(r);if(n===_i)return i.UNSIGNED_BYTE;if(n===dh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uf)return i.BYTE;if(n===zf)return i.SHORT;if(n===Ea)return i.UNSIGNED_SHORT;if(n===hh)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Oa)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===kf)return i.RGB;if(n===fn)return i.RGBA;if(n===Bf)return i.LUMINANCE;if(n===Vf)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Gf)return i.RG;if(n===mh)return i.RG_INTEGER;if(n===gh)return i.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===xo)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kc||n===jc||n===Jc||n===Qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===eu||n===tu)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===iu||n===ru||n===su||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===iu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ru)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===su)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===au)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ou)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===du)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===vu||n===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hf||n===yu||n===_u||n===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class n0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new aa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:UE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends wi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const v=new OE,g=t.getContextAttributes();let m=null,_=null;const y=[],x=[],P=new te;let A=null;const C=new Kt;C.viewport=new st;const I=new Kt;I.viewport=new st;const S=[C,I],M=new n0;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new Md,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new Md,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new Md,y[$]=se),se.getHandSpace()};function B($){const se=x.indexOf($.inputSource);if(se===-1)return;const Ae=y[se];Ae!==void 0&&(Ae.update($.inputSource,$.frame,c||a),Ae.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let $=0;$<y.length;$++){const se=x[$];se!==null&&(x[$]=null,y[$].disconnect(se))}D=null,V=null,v.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,_=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ni(f.framebufferWidth,f.framebufferHeight,{format:fn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,Ae=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?As:xs,Ae=g.stencil?Ts:Ki);const Ue={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ni(h.textureWidth,h.textureHeight,{format:fn,type:_i,depthTexture:new jf(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j($){for(let se=0;se<$.removed.length;se++){const Ae=$.removed[se],ue=x.indexOf(Ae);ue>=0&&(x[ue]=null,y[ue].disconnect(Ae))}for(let se=0;se<$.added.length;se++){const Ae=$.added[se];let ue=x.indexOf(Ae);if(ue===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=x.length){x.push(Ae),ue=Ge;break}else if(x[Ge]===null){x[Ge]=Ae,ue=Ge;break}if(ue===-1)break}const Ue=y[ue];Ue&&Ue.connect(Ae)}}const X=new R,ne=new R;function q($,se,Ae){X.setFromMatrixPosition(se.matrixWorld),ne.setFromMatrixPosition(Ae.matrixWorld);const ue=X.distanceTo(ne),Ue=se.projectionMatrix.elements,Ge=Ae.projectionMatrix.elements,Oe=Ue[14]/(Ue[10]-1),tt=Ue[14]/(Ue[10]+1),Q=(Ue[9]+1)/Ue[5],oe=(Ue[9]-1)/Ue[5],L=(Ue[8]-1)/Ue[0],Ne=(Ge[8]+1)/Ge[0],re=Oe*L,Te=Oe*Ne,de=ue/(-L+Ne),ke=de*-L;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(de),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Me=Oe+de,E=tt+de,w=re-ke,k=Te+(ue-ke),Z=Q*tt/E*Me,ie=oe*tt/E*Me;$.projectionMatrix.makePerspective(w,k,Z,ie,Me,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function le($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,Ae=$.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),M.near=I.near=C.near=se,M.far=I.far=C.far=Ae,(D!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,V=M.far),C.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;const ue=$.parent,Ue=M.cameras;le(M,ue);for(let Ge=0;Ge<Ue.length;Ge++)le(Ue[Ge],ue);Ue.length===2?q(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),fe($,M,ue)};function fe($,se,Ae){Ae===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ca*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let be=null;function He($,se){if(u=se.getViewerPose(c||a),p=se,u!==null){const Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ue=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Ge=0;Ge<Ae.length;Ge++){const Oe=Ae[Ge];let tt=null;if(f!==null)tt=f.getViewport(Oe);else{const oe=d.getViewSubImage(h,Oe);tt=oe.viewport,Ge===0&&(e.setRenderTargetTextures(_,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let Q=S[Ge];Q===void 0&&(Q=new Kt,Q.layers.enable(Ge),Q.viewport=new st,S[Ge]=Q),Q.matrix.fromArray(Oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(tt.x,tt.y,tt.width,tt.height),Ge===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Q)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ge=d.getDepthInformation(Ae[0]);Ge&&Ge.isValid&&Ge.texture&&v.init(e,Ge,r.renderState)}}for(let Ae=0;Ae<y.length;Ae++){const ue=x[Ae],Ue=y[Ae];ue!==null&&Ue!==void 0&&Ue.update(ue,se,c||a)}be&&be($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),p=null}const ot=new Kx;ot.setAnimationLoop(He),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Vr=new zn,kE=new Ve;function BE(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,qx(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,Vr.copy(x),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(Vr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function VE(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(p(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",g));const P=y.program;n.updateUBOMapping(_,P);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const y=d();_.__bindingPointIndex=y;const x=i.createBuffer(),P=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],x=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,M=I.length;S<M;S++){const D=I[S];if(f(D,A,S,P)===!0){const V=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let j=0;j<B.length;j++){const X=B[j],ne=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+G,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,G),G+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,P){const A=_.value,C=y+"_"+x;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const I=P[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(_){const y=_.uniforms;let x=0;const P=16;for(let C=0,I=y.length;C<I;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,D=S.length;M<D;M++){const V=S[M],B=Array.isArray(V.value)?V.value:[V.value];for(let G=0,j=B.length;G<j;G++){const X=B[G],ne=v(X),q=x%P,le=q%ne.boundary,fe=q+le;x+=le,fe!==0&&P-fe<ne.storage&&(x+=P-fe),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ne.storage}}}const A=x%P;return A>0&&(x+=P-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class GE{constructor(e={}){const{canvas:t=Gx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let P=!1,A=0,C=0,I=null,S=-1,M=null;const D=new st,V=new st;let B=null;const G=new _e(0);let j=0,X=t.width,ne=t.height,q=1,le=null,fe=null;const be=new st(0,0,X,ne),He=new st(0,0,X,ne);let ot=!1;const $=new Ml;let se=!1,Ae=!1;const ue=new Ve,Ue=new Ve,Ge=new R,Oe=new st,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function oe(){return I===null?q:1}let L=n;function Ne(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){const z="webgl2";if(L=Ne(z,T),L===null)throw Ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,Te,de,ke,Me,E,w,k,Z,ie,K,Ie,me,we,et,ae,Ee,Be,We,Ce,it,Je,xt,U;function ge(){re=new YT(L),re.init(),Je=new t0(L,re),Te=new VT(L,re,e,Je),de=new EE(L,re),Te.reverseDepthBuffer&&h&&de.buffers.depth.setReversed(!0),ke=new KT(L),Me=new pE,E=new DE(L,re,de,Me,Te,Je,ke),w=new HT(x),k=new qT(x),Z=new iS(L),xt=new kT(L,Z),ie=new $T(L,Z,ke,xt),K=new JT(L,ie,Z,ke),We=new jT(L,Te,E),ae=new GT(Me),Ie=new fE(x,w,k,re,Te,xt,ae),me=new BE(x,Me),we=new gE,et=new wE(re),Be=new FT(x,w,k,de,K,f,l),Ee=new TE(x,K,Te),U=new VE(L,ke,Te,de),Ce=new BT(L,re,ke),it=new ZT(L,re,ke),ke.programs=Ie.programs,x.capabilities=Te,x.extensions=re,x.properties=Me,x.renderLists=we,x.shadowMap=Ee,x.state=de,x.info=ke}ge();const Y=new FE(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(X,ne,!1))},this.getSize=function(T){return T.set(X,ne)},this.setSize=function(T,z,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ne=z,t.width=Math.floor(T*q),t.height=Math.floor(z*q),H===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(X*q,ne*q).floor()},this.setDrawingBufferSize=function(T,z,H){X=T,ne=z,q=H,t.width=Math.floor(T*H),t.height=Math.floor(z*H),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,z,H,W){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,z,H,W),de.viewport(D.copy(be).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,z,H,W){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,z,H,W),de.scissor(V.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){de.setScissorTest(ot=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(T=!0,z=!0,H=!0){let W=0;if(T){let O=!1;if(I!==null){const ce=I.texture.format;O=ce===gh||ce===mh||ce===xl}if(O){const ce=I.texture.type,xe=ce===_i||ce===Ki||ce===Ea||ce===Ts||ce===dh||ce===fh,Le=Be.getClearColor(),Pe=Be.getClearAlpha(),Xe=Le.r,Ze=Le.g,De=Le.b;xe?(p[0]=Xe,p[1]=Ze,p[2]=De,p[3]=Pe,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Xe,v[1]=Ze,v[2]=De,v[3]=Pe,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}z&&(W|=L.DEPTH_BUFFER_BIT),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),we.dispose(),et.dispose(),Me.dispose(),w.dispose(),k.dispose(),K.dispose(),xt.dispose(),U.dispose(),Ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Sp),Y.removeEventListener("sessionend",bp),Nr.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=ke.autoReset,z=Ee.enabled,H=Ee.autoUpdate,W=Ee.needsUpdate,O=Ee.type;ge(),ke.autoReset=T,Ee.enabled=z,Ee.autoUpdate=H,Ee.needsUpdate=W,Ee.type=O}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const z=T.target;z.removeEventListener("dispose",$e),Rt(z)}function Rt(T){Qt(T),Me.remove(T)}function Qt(T){const z=Me.get(T).programs;z!==void 0&&(z.forEach(function(H){Ie.releaseProgram(H)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,H,W,O,ce){z===null&&(z=tt);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Le=e_(T,z,H,W,O);de.setMaterial(W,xe);let Pe=H.index,Xe=1;if(W.wireframe===!0){if(Pe=ie.getWireframeAttribute(H),Pe===void 0)return;Xe=2}const Ze=H.drawRange,De=H.attributes.position;let lt=Ze.start*Xe,yt=(Ze.start+Ze.count)*Xe;ce!==null&&(lt=Math.max(lt,ce.start*Xe),yt=Math.min(yt,(ce.start+ce.count)*Xe)),Pe!==null?(lt=Math.max(lt,0),yt=Math.min(yt,Pe.count)):De!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,De.count));const wt=yt-lt;if(wt<0||wt===1/0)return;xt.setup(O,W,Le,H,Pe);let xn,ut=Ce;if(Pe!==null&&(xn=Z.get(Pe),ut=it,ut.setIndex(xn)),O.isMesh)W.wireframe===!0?(de.setLineWidth(W.wireframeLinewidth*oe()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(O.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),de.setLineWidth(ze*oe()),O.isLineSegments?ut.setMode(L.LINES):O.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else O.isPoints?ut.setMode(L.POINTS):O.isSprite&&ut.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,Ti=O._multiDrawCounts,ht=O._multiDrawCount,$n=Pe?Z.get(Pe).bytesPerElement:1,Ns=Me.get(W).currentProgram.getUniforms();for(let In=0;In<ht;In++)Ns.setValue(L,"_gl_DrawID",In),ut.render(ze[In]/$n,Ti[In])}else if(O.isInstancedMesh)ut.renderInstances(lt,wt,O.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ti=Math.min(H.instanceCount,ze);ut.renderInstances(lt,wt,Ti)}else ut.render(lt,wt)};function dt(T,z,H){T.transparent===!0&&T.side===hi&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,Ll(T,z,H),T.side=$i,T.needsUpdate=!0,Ll(T,z,H),T.side=hi):Ll(T,z,H)}this.compile=function(T,z,H=null){H===null&&(H=T),m=et.get(H),m.init(z),y.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==H&&T.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Le=ce[xe];dt(Le,H,O),W.add(Le)}else dt(ce,H,O),W.add(ce)}),y.pop(),m=null,W},this.compileAsync=function(T,z,H=null){const W=this.compile(T,z,H);return new Promise(O=>{function ce(){if(W.forEach(function(xe){Me.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){O(T);return}setTimeout(ce,10)}re.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Yn=null;function bi(T){Yn&&Yn(T)}function Sp(){Nr.stop()}function bp(){Nr.start()}const Nr=new Kx;Nr.setAnimationLoop(bi),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(T){Yn=T,Y.setAnimationLoop(T),T===null?Nr.stop():Nr.start()},Y.addEventListener("sessionstart",Sp),Y.addEventListener("sessionend",bp),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,I),m=et.get(T,y.length),m.init(z),y.push(m),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(Ue),Ae=this.localClippingEnabled,se=ae.init(this.clippingPlanes,Ae),g=we.get(T,_.length),g.init(),_.push(g),Y.enabled===!0&&Y.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Xh(ce,z,-1/0,x.sortObjects)}Xh(T,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(le,fe),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Be.addToRenderList(g,T),this.info.render.frame++,se===!0&&ae.beginShadows();const H=m.state.shadowsArray;Ee.render(H,T,z),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(m.setupLights(),z.isArrayCamera){const ce=z.cameras;if(O.length>0)for(let xe=0,Le=ce.length;xe<Le;xe++){const Pe=ce[xe];Ap(W,O,T,Pe)}Q&&Be.render(T);for(let xe=0,Le=ce.length;xe<Le;xe++){const Pe=ce[xe];Tp(g,T,Pe,Pe.viewport)}}else O.length>0&&Ap(W,O,T,z),Q&&Be.render(T),Tp(g,T,z);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,z),xt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],se===!0&&ae.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Xh(T,z,H,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const xe=K.update(T),Le=T.material;Le.visible&&g.push(T,xe,Le,H,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const xe=K.update(T),Le=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(Le)){const Pe=xe.groups;for(let Xe=0,Ze=Pe.length;Xe<Ze;Xe++){const De=Pe[Xe],lt=Le[De.materialIndex];lt&&lt.visible&&g.push(T,xe,lt,H,Oe.z,De)}}else Le.visible&&g.push(T,xe,Le,H,Oe.z,null)}}const ce=T.children;for(let xe=0,Le=ce.length;xe<Le;xe++)Xh(ce[xe],z,H,W)}function Tp(T,z,H,W){const O=T.opaque,ce=T.transmissive,xe=T.transparent;m.setupLightsView(H),se===!0&&ae.setGlobalState(x.clippingPlanes,H),W&&de.viewport(D.copy(W)),O.length>0&&Il(O,z,H),ce.length>0&&Il(ce,z,H),xe.length>0&&Il(xe,z,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ap(T,z,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ni(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Oa:_i,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],xe=W.viewport||D;ce.setSize(xe.z,xe.w);const Le=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Be.render(H);const Pe=x.toneMapping;x.toneMapping=Wi;const Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),se===!0&&ae.setGlobalState(x.clippingPlanes,W),Il(T,H,W),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let De=0,lt=z.length;De<lt;De++){const yt=z[De],wt=yt.object,xn=yt.geometry,ut=yt.material,ze=yt.group;if(ut.side===hi&&wt.layers.test(W.layers)){const Ti=ut.side;ut.side=mn,ut.needsUpdate=!0,Ep(wt,H,W,xn,ut,ze),ut.side=Ti,ut.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}x.setRenderTarget(Le),x.setClearColor(G,j),Xe!==void 0&&(W.viewport=Xe),x.toneMapping=Pe}function Il(T,z,H){const W=z.isScene===!0?z.overrideMaterial:null;for(let O=0,ce=T.length;O<ce;O++){const xe=T[O],Le=xe.object,Pe=xe.geometry,Xe=W===null?xe.material:W,Ze=xe.group;Le.layers.test(H.layers)&&Ep(Le,z,H,Pe,Xe,Ze)}}function Ep(T,z,H,W,O,ce){T.onBeforeRender(x,z,H,W,O,ce),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,z,H,W,T,ce),O.transparent===!0&&O.side===hi&&O.forceSinglePass===!1?(O.side=mn,O.needsUpdate=!0,x.renderBufferDirect(H,z,W,O,T,ce),O.side=$i,O.needsUpdate=!0,x.renderBufferDirect(H,z,W,O,T,ce),O.side=hi):x.renderBufferDirect(H,z,W,O,T,ce),T.onAfterRender(x,z,H,W,O,ce)}function Ll(T,z,H){z.isScene!==!0&&(z=tt);const W=Me.get(T),O=m.state.lights,ce=m.state.shadowsArray,xe=O.state.version,Le=Ie.getParameters(T,O.state,ce,z,H),Pe=Ie.getProgramCacheKey(Le);let Xe=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?k:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",$e),Xe=new Map,W.programs=Xe);let Ze=Xe.get(Pe);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===xe)return Rp(T,Le),Ze}else Le.uniforms=Ie.getUniforms(T),T.onBeforeCompile(Le,x),Ze=Ie.acquireProgram(Le,Pe),Xe.set(Pe,Ze),W.uniforms=Le.uniforms;const De=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=ae.uniform),Rp(T,Le),W.needsLights=n_(T),W.lightsStateVersion=xe,W.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ze,W.uniformsList=null,Ze}function Cp(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Pc.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Rp(T,z){const H=Me.get(T);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.batchingColor=z.batchingColor,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function e_(T,z,H,W,O){z.isScene!==!0&&(z=tt),E.resetTextureUnits();const ce=z.fog,xe=W.isMeshStandardMaterial?z.environment:null,Le=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Rr,Pe=(W.isMeshStandardMaterial?k:w).get(W.envMap||xe),Xe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,yt=!!H.morphAttributes.color;let wt=Wi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=x.toneMapping);const xn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=xn!==void 0?xn.length:0,ze=Me.get(W),Ti=m.state.lights;if(se===!0&&(Ae===!0||T!==M)){const kn=T===M&&W.id===S;ae.setState(W,T,kn)}let ht=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ti.state.version||ze.outputColorSpace!==Le||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Pe||W.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ae.numPlanes||ze.numIntersection!==ae.numIntersection)||ze.vertexAlphas!==Xe||ze.vertexTangents!==Ze||ze.morphTargets!==De||ze.morphNormals!==lt||ze.morphColors!==yt||ze.toneMapping!==wt||ze.morphTargetsCount!==ut)&&(ht=!0):(ht=!0,ze.__version=W.version);let $n=ze.currentProgram;ht===!0&&($n=Ll(W,z,O));let Ns=!1,In=!1,Ha=!1;const St=$n.getUniforms(),ai=ze.uniforms;if(de.useProgram($n.program)&&(Ns=!0,In=!0,Ha=!0),W.id!==S&&(S=W.id,In=!0),Ns||M!==T){de.buffers.depth.getReversed()?(ue.copy(T.projectionMatrix),Cw(ue),Rw(ue),St.setValue(L,"projectionMatrix",ue)):St.setValue(L,"projectionMatrix",T.projectionMatrix),St.setValue(L,"viewMatrix",T.matrixWorldInverse);const nr=St.map.cameraPosition;nr!==void 0&&nr.setValue(L,Ge.setFromMatrixPosition(T.matrixWorld)),Te.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,In=!0,Ha=!0)}if(O.isSkinnedMesh){St.setOptional(L,O,"bindMatrix"),St.setOptional(L,O,"bindMatrixInverse");const kn=O.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),St.setValue(L,"boneTexture",kn.boneTexture,E))}O.isBatchedMesh&&(St.setOptional(L,O,"batchingTexture"),St.setValue(L,"batchingTexture",O._matricesTexture,E),St.setOptional(L,O,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",O._indirectTexture,E),St.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",O._colorsTexture,E));const Wa=H.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0)&&We.update(O,H,$n),(In||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,St.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ai.envMap.value=Pe,ai.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),In&&(St.setValue(L,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&t_(ai,Ha),ce&&W.fog===!0&&me.refreshFogUniforms(ai,ce),me.refreshMaterialUniforms(ai,W,q,ne,m.state.transmissionRenderTarget[T.id]),Pc.upload(L,Cp(ze),ai,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pc.upload(L,Cp(ze),ai,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(L,"center",O.center),St.setValue(L,"modelViewMatrix",O.modelViewMatrix),St.setValue(L,"normalMatrix",O.normalMatrix),St.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kn=W.uniformsGroups;for(let nr=0,ir=kn.length;nr<ir;nr++){const Ip=kn[nr];U.update(Ip,$n),U.bind(Ip,$n)}}return $n}function t_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function n_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,z,H){Me.get(T.texture).__webglTexture=z,Me.get(T.depthTexture).__webglTexture=H;const W=Me.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const H=Me.get(T);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,H=0){I=T,A=z,C=H;let W=!0,O=null,ce=!1,xe=!1;if(T){const Pe=Me.get(T);if(Pe.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Pe.__hasExternalTextures)E.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&Me.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(xe=!0);const Ze=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[z])?O=Ze[z][H]:O=Ze[z],ce=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?O=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?O=Ze[H]:O=Ze,D.copy(T.viewport),V.copy(T.scissor),B=T.scissorTest}else D.copy(be).multiplyScalar(q).floor(),V.copy(He).multiplyScalar(q).floor(),B=ot;if(de.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&de.drawBuffers(T,O),de.viewport(D),de.scissor(V),de.setScissorTest(B),ce){const Pe=Me.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,H)}else if(xe){const Pe=Me.get(T.texture),Xe=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,Xe)}S=-1},this.readRenderTargetPixels=function(T,z,H,W,O,ce,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Le=Le[xe]),Le){de.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Pe=T.texture,Xe=Pe.format,Ze=Pe.type;if(!Te.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&H>=0&&H<=T.height-O&&L.readPixels(z,H,W,O,Je.convert(Xe),Je.convert(Ze),ce)}finally{const Pe=I!==null?Me.get(I).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,z,H,W,O,ce,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Le=Le[xe]),Le){const Pe=T.texture,Xe=Pe.format,Ze=Pe.type;if(!Te.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-W&&H>=0&&H<=T.height-O){de.bindFramebuffer(L.FRAMEBUFFER,Le);const De=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(z,H,W,O,Je.convert(Xe),Je.convert(Ze),0);const lt=I!==null?Me.get(I).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,lt);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ew(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(De),L.deleteSync(yt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,H=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-H),O=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),xe=z!==null?z.x:0,Le=z!==null?z.y:0;E.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,xe,Le,O,ce),de.unbindTexture()},this.copyTextureToTexture=function(T,z,H=null,W=null,O=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],z=arguments[2],O=arguments[3]||0,H=null);let ce,xe,Le,Pe,Xe,Ze,De,lt,yt;const wt=T.isCompressedTexture?T.mipmaps[O]:T.image;H!==null?(ce=H.max.x-H.min.x,xe=H.max.y-H.min.y,Le=H.isBox3?H.max.z-H.min.z:1,Pe=H.min.x,Xe=H.min.y,Ze=H.isBox3?H.min.z:0):(ce=wt.width,xe=wt.height,Le=wt.depth||1,Pe=0,Xe=0,Ze=0),W!==null?(De=W.x,lt=W.y,yt=W.z):(De=0,lt=0,yt=0);const xn=Je.convert(z.format),ut=Je.convert(z.type);let ze;z.isData3DTexture?(E.setTexture3D(z,0),ze=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(E.setTexture2DArray(z,0),ze=L.TEXTURE_2D_ARRAY):(E.setTexture2D(z,0),ze=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Ti=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$n=L.getParameter(L.UNPACK_SKIP_PIXELS),Ns=L.getParameter(L.UNPACK_SKIP_ROWS),In=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const Ha=T.isDataArrayTexture||T.isData3DTexture,St=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ai=Me.get(T),Wa=Me.get(z),kn=Me.get(ai.__renderTarget),nr=Me.get(Wa.__renderTarget);de.bindFramebuffer(L.READ_FRAMEBUFFER,kn.__webglFramebuffer),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let ir=0;ir<Le;ir++)Ha&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(T).__webglTexture,O,Ze+ir),T.isDepthTexture?(St&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(z).__webglTexture,O,yt+ir),L.blitFramebuffer(Pe,Xe,ce,xe,De,lt,ce,xe,L.DEPTH_BUFFER_BIT,L.NEAREST)):St?L.copyTexSubImage3D(ze,O,De,lt,yt+ir,Pe,Xe,ce,xe):L.copyTexSubImage2D(ze,O,De,lt,yt+ir,Pe,Xe,ce,xe);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ze,O,De,lt,yt,ce,xe,Le,xn,ut,wt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,O,De,lt,yt,ce,xe,Le,xn,wt.data):L.texSubImage3D(ze,O,De,lt,yt,ce,xe,Le,xn,ut,wt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,De,lt,ce,xe,xn,ut,wt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,De,lt,wt.width,wt.height,xn,wt.data):L.texSubImage2D(L.TEXTURE_2D,O,De,lt,ce,xe,xn,ut,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ti),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$n),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ns),L.pixelStorei(L.UNPACK_SKIP_IMAGES,In),O===0&&z.generateMipmaps&&L.generateMipmap(ze),de.unbindTexture()},this.copyTextureToTexture3D=function(T,z,H=null,W=null,O=0){return T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,T=arguments[2],z=arguments[3],O=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,H,W,O)},this.initRenderTarget=function(T){Me.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),de.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,de.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Sh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i0 extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Th{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new R;class Es{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Es(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ep extends ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zs;const ja=new R,Ks=new R,js=new R,Js=new te,Ja=new te,r0=new Ve,ec=new R,Qa=new R,tc=new R,Um=new te,wd=new te,zm=new te;class s0 extends at{constructor(e=new ep){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Th(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Es(n,3,0,!1)),Zs.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),r0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;nc(ec.set(-.5,-.5,0),js,a,Ks,r,s),nc(Qa.set(.5,-.5,0),js,a,Ks,r,s),nc(tc.set(.5,.5,0),js,a,Ks,r,s),Um.set(0,0),wd.set(1,0),zm.set(1,1);let o=e.ray.intersectTriangle(ec,Qa,tc,!1,ja);if(o===null&&(nc(Qa.set(-.5,.5,0),js,a,Ks,r,s),wd.set(0,1),o=e.ray.intersectTriangle(ec,tc,Qa,!1,ja),o===null))return;const l=e.ray.origin.distanceTo(ja);l<e.near||l>e.far||t.push({distance:l,point:ja.clone(),uv:An.getInterpolation(ja,ec,Qa,tc,Um,wd,zm,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nc(i,e,t,n,r,s){Js.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ja.x=s*Js.x-r*Js.y,Ja.y=r*Js.x+s*Js.y):Ja.copy(Js),i.copy(e),i.x+=Ja.x,i.y+=Ja.y,i.applyMatrix4(r0)}const ic=new R,Om=new R;class a0 extends at{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ic.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(ic);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ic.setFromMatrixPosition(e.matrixWorld),Om.setFromMatrixPosition(this.matrixWorld);const n=ic.distanceTo(Om)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Fm=new R,km=new st,Bm=new st,HE=new R,Vm=new Ve,rc=new R,Sd=new sn,Gm=new Ve,bd=new Fa;class o0 extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ef,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sd.copy(this.boundingSphere),Sd.applyMatrix4(r),e.ray.intersectsSphere(Sd)!==!1&&(Gm.copy(r).invert(),bd.copy(e.ray).applyMatrix4(Gm),!(this.boundingBox!==null&&bd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;km.fromBufferAttribute(r.attributes.skinIndex,e),Bm.fromBufferAttribute(r.attributes.skinWeight,e),Fm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Bm.getComponent(s);if(a!==0){const o=km.getComponent(s);Vm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(HE.copy(Fm).applyMatrix4(Vm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tp extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vi extends Pt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Jt,u=Jt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hm=new Ve,WE=new Ve;class Ah{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:WE;Hm.multiplyMatrices(o,t[s]),Hm.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ah(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vi(t,e,e,fn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new tp),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Ia extends gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new Ve,Wm=new Ve,sc=[],Xm=new gn,XE=new Ve,eo=new Ot,to=new sn;class l0 extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,XE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Xm.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Xm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),to.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),Wm.multiplyMatrices(n,Qs),eo.matrixWorld=Wm,eo.raycast(e,sc);for(let a=0,o=sc.length;a<o;a++){const l=sc[a];l.instanceId=s,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(r*this.count),r,this.count,ph,En));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Td(i,e){return i-e}function qE(i,e){return i.z-e.z}function YE(i,e){return e.z-i.z}class $E{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}}const yn=new Ve,ZE=new _e(1,1,1),Ad=new Ml,ac=new gn,Gr=new sn,no=new R,qm=new R,KE=new R,Ed=new $E,nn=new Ot,oc=[];function jE(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Hr(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class c0 extends Ot{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,r){super(new je,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new vi(t,e,e,fn,En);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new vi(t,e,e,xl,Ki);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new vi(t,e,e,fn,En);n.colorSpace=nt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new gt(u,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new gt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingBoxAt(s,ac).applyMatrix4(yn),e.union(ac)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingSphereAt(s,Gr).applyMatrix4(yn),e.union(Gr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Td),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;yn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(ZE.toArray(a.image.data,r*4),a.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?a.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Td),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(r&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);jE(d,h,l);const f=d.itemSize;for(let p=d.count,v=c;p<v;p++){const g=l+p;for(let m=0;m<f;m++)h.setComponent(g,m,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(r){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)s.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)s.setX(u+h,l);s.needsUpdate=!0,s.addUpdateRange(u,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,r=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),s=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=r[a],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=s.index,p=f.array,v=e-d;for(let g=u;g<u+h;g++)p[g]=p[g]+v;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=s.attributes;for(const f in h){const p=h[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,u*g,(u+d)*g),p.addUpdateRange(e*g,d*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const s=new gn,a=n.index,o=n.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let u=l;a&&(u=a.getX(u)),s.expandByPoint(no.fromBufferAttribute(o,u))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const s=new sn;this.getBoundingBoxAt(e,ac),ac.getCenter(s.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=r.start,u=r.start+r.count;c<u;c++){let d=c;a&&(d=a.getX(d)),no.fromBufferAttribute(o,d),l=Math.max(l,s.center.distanceToSquared(no))}s.radius=Math.sqrt(l),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,r=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(r,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,r=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=r.length||r[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Td);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),s=new Int32Array(e);Hr(this._multiDrawCounts,r),Hr(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Hr(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Hr(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Hr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new je,this._initializeGeometry(s));const a=this.geometry;s.index&&Hr(s.index.array,a.index.array);for(const o in s.attributes)Hr(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,a=this.geometry;nn.material=this.material,nn.geometry.index=a.index,nn.geometry.attributes=a.attributes,nn.geometry.boundingBox===null&&(nn.geometry.boundingBox=new gn),nn.geometry.boundingSphere===null&&(nn.geometry.boundingSphere=new sn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=r[c];nn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,nn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,nn.geometry.boundingBox),this.getBoundingSphereAt(c,nn.geometry.boundingSphere),nn.raycast(e,oc);for(let d=0,h=oc.length;d<h;d++){const f=oc[d];f.object=this,f.batchId=o,t.push(f)}oc.length=0}nn.material=null,nn.geometry.index=null,nn.geometry.attributes={},nn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,h=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;h&&(yn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ad.setFromProjectionMatrix(yn,e.coordinateSystem));let v=0;if(this.sortObjects){yn.copy(this.matrixWorld).invert(),no.setFromMatrixPosition(n.matrixWorld).applyMatrix4(yn),qm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(yn);for(let _=0,y=l.length;_<y;_++)if(l[_].visible&&l[_].active){const x=l[_].geometryIndex;this.getMatrixAt(_,yn),this.getBoundingSphereAt(x,Gr).applyMatrix4(yn);let P=!1;if(h&&(P=!Ad.intersectsSphere(Gr)),!P){const A=d[x],C=KE.subVectors(Gr.center,no).dot(qm);Ed.push(A.start,A.count,C,_)}}const g=Ed.list,m=this.customSort;m===null?g.sort(s.transparent?YE:qE):m.call(this,g,n);for(let _=0,y=g.length;_<y;_++){const x=g[_];c[v]=x.start*o,u[v]=x.count,p[v]=x.index,v++}Ed.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const _=l[g].geometryIndex;let y=!1;if(h&&(this.getMatrixAt(g,yn),this.getBoundingSphereAt(_,Gr).applyMatrix4(yn),y=!Ad.intersectsSphere(Gr)),!y){const x=d[_];c[v]=x.start*o,u[v]=x.count,p[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class vn extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Su=new R,bu=new R,Ym=new Ve,io=new Fa,lc=new sn,Cd=new R,$m=new R;class Ar extends at{constructor(e=new je,t=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Su.fromBufferAttribute(t,r-1),bu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Su.distanceTo(bu);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;Ym.copy(r).invert(),io.copy(e.ray).applyMatrix4(Ym);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=u.getX(v),_=u.getX(v+1),y=cc(this,e,io,l,m,_);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=cc(this,e,io,l,v,g);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=cc(this,e,io,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=cc(this,e,io,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cc(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Su.fromBufferAttribute(a,r),bu.fromBufferAttribute(a,s),t.distanceSqToSegment(Su,bu,Cd,$m)>n)return;Cd.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cd);if(!(l<e.near||l>e.far))return{distance:l,point:$m.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Zm=new R,Km=new R;class Si extends Ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Zm.fromBufferAttribute(t,r),Km.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zm.distanceTo(Km);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u0 extends Ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new Ve,of=new Fa,uc=new sn,hc=new R;class h0 extends at{constructor(e=new je,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(r),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;jm.copy(r).invert(),of.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const g=c.getX(p);hc.fromBufferAttribute(d,g),Jm(hc,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)hc.fromBufferAttribute(d,p),Jm(hc,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jm(i,e,t,n,r,s,a){const o=of.distanceSqToPoint(i);if(o<t){const l=new R;of.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class JE extends Pt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:kt,this.magFilter=s!==void 0?s:kt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class QE extends Pt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Jt,this.minFilter=Jt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Eh extends Pt{constructor(e,t,n,r,s,a,o,l,c,u,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class e1 extends Eh{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Wn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t1 extends Eh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Zi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class n1 extends Pt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(a-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new te:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],a=[],o=new R,l=new Ve;for(let f=0;f<=e;f++){const p=f/e;r[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Lt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Lt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ch extends ri{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class d0 extends Ch{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ip(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const dc=new R,Rd=new ip,Id=new ip,Ld=new ip;class f0 extends ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(dc.subVectors(r[0],r[1]).add(r[0]),c=dc);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(dc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Rd.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,g),Id.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,g),Ld.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Rd.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Id.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ld.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Rd.calc(l),Id.calc(l),Ld.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qm(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function i1(i,e){const t=1-i;return t*t*e}function r1(i,e){return 2*(1-i)*i*e}function s1(i,e){return i*i*e}function Mo(i,e,t,n){return i1(i,e)+r1(i,t)+s1(i,n)}function a1(i,e){const t=1-i;return t*t*t*e}function o1(i,e){const t=1-i;return 3*t*t*i*e}function l1(i,e){return 3*(1-i)*i*i*e}function c1(i,e){return i*i*i*e}function wo(i,e,t,n,r){return a1(i,e)+o1(i,t)+l1(i,n)+c1(i,r)}class rp extends ri{constructor(e=new te,t=new te,n=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new te){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,r.x,s.x,a.x,o.x),wo(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p0 extends ri{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,r.x,s.x,a.x,o.x),wo(e,r.y,s.y,a.y,o.y),wo(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends ri{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m0 extends ri{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ap extends ri{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mo(e,r.x,s.x,a.x),Mo(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends ri{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Mo(e,r.x,s.x,a.x),Mo(e,r.y,s.y,a.y),Mo(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Qm(o,l.x,c.x,u.x,d.x),Qm(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new te().fromArray(r))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:d0,CatmullRomCurve3:f0,CubicBezierCurve:rp,CubicBezierCurve3:p0,EllipseCurve:Ch,LineCurve:sp,LineCurve3:m0,QuadraticBezierCurve:ap,QuadraticBezierCurve3:op,SplineCurve:lp});class g0 extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Tu[r.type]().fromJSON(r))}return this}}class zo extends g0{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sp(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ap(this.currentPoint.clone(),new te(e,t),new te(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new rp(this.currentPoint.clone(),new te(e,t),new te(n,r),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new Ch(e,t,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wl extends je{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Lt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new R,h=new te,f=new R,p=new R,v=new R;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){const y=n+_*u*r,x=Math.sin(y),P=Math.cos(y);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*x,d.y=e[A].y,d.z=e[A].x*P,a.push(d.x,d.y,d.z),h.x=_/t,h.y=A/(e.length-1),o.push(h.x,h.y);const C=l[3*A+0]*x,I=l[3*A+1],S=l[3*A+0]*P;c.push(C,I,S)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,P=x,A=x+e.length,C=x+e.length+1,I=x+1;s.push(P,A,I),s.push(C,I,A)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.points,e.segments,e.phiStart,e.phiLength)}}class Rh extends wl{constructor(e=1,t=1,n=4,r=8){const s=new zo;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Rh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ih extends je{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new R,u=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Va extends je{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2));function _(){const x=new R,P=new R;let A=0;const C=(t-e)/n;for(let I=0;I<=s;I++){const S=[],M=I/s,D=M*(t-e)+e;for(let V=0;V<=r;V++){const B=V/r,G=B*l+o,j=Math.sin(G),X=Math.cos(G);P.x=D*j,P.y=-M*n+g,P.z=D*X,d.push(P.x,P.y,P.z),x.set(j,C,X).normalize(),h.push(x.x,x.y,x.z),f.push(B,1-M),S.push(p++)}v.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const M=v[S][I],D=v[S+1][I],V=v[S+1][I+1],B=v[S][I+1];(e>0||S!==0)&&(u.push(M,D,B),A+=3),(t>0||S!==s-1)&&(u.push(D,V,B),A+=3)}c.addGroup(m,A,0),m+=A}function y(x){const P=p,A=new te,C=new R;let I=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,g*M,0),h.push(0,M,0),f.push(.5,.5),p++;const D=p;for(let V=0;V<=r;V++){const G=V/r*l+o,j=Math.cos(G),X=Math.sin(G);C.x=S*X,C.y=g*M,C.z=S*j,d.push(C.x,C.y,C.z),h.push(0,M,0),A.x=j*.5+.5,A.y=X*.5*M+.5,f.push(A.x,A.y),p++}for(let V=0;V<r;V++){const B=P+V,G=D+V;x===!0?u.push(G,G+1,B):u.push(G+1,G,B),I+=3}c.addGroup(m,I,x===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lh extends Va{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends je{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new R,x=new R,P=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],x),f(t[A+2],P),l(y,x,P,_)}function l(_,y,x,P){const A=P+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const S=_.clone().lerp(x,I/A),M=y.clone().lerp(x,I/A),D=A-I;for(let V=0;V<=D;V++)V===0&&I===A?C[I][V]=S:C[I][V]=S.clone().lerp(M,V/D)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const M=Math.floor(S/2);S%2===0?(h(C[I][M+1]),h(C[I+1][M]),h(C[I][M])):(h(C[I][M+1]),h(C[I+1][M+1]),h(C[I+1][M]))}}function c(_){const y=new R;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const _=new R;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=g(_)/2/Math.PI+.5,P=m(_)/Math.PI+.5;a.push(x,1-P)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],P=a[_+4],A=Math.max(y,x,P),C=Math.min(y,x,P);A>.9&&C<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function p(){const _=new R,y=new R,x=new R,P=new R,A=new te,C=new te,I=new te;for(let S=0,M=0;S<s.length;S+=9,M+=6){_.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),P.copy(_).add(y).add(x).divideScalar(3);const D=g(P);v(A,M+0,_,D),v(C,M+2,y,D),v(I,M+4,x,D)}}function v(_,y,x,P){P<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=P/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.vertices,e.indices,e.radius,e.details)}}class Ph extends Lr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ph(e.radius,e.detail)}}const fc=new R,pc=new R,Pd=new R,mc=new An;class v0 extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ys*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=mc;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),mc.getNormal(Pd),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],P=d[y],A=mc[u[_]],C=mc[u[y]],I=`${x}_${P}`,S=`${P}_${x}`;S in h&&h[S]?(Pd.dot(h[S].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),h[S]=null):I in h||(h[I]={index0:c[_],index1:c[y],normal:Pd.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:g}=h[p];fc.fromBufferAttribute(o,v),pc.fromBufferAttribute(o,g),f.push(fc.x,fc.y,fc.z),f.push(pc.x,pc.y,pc.z)}this.setAttribute("position",new Re(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _s extends zo{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new zo().fromJSON(r))}return this}}const u1={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=x0(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,d,h,f;if(n&&(s=m1(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let p=t;p<r;p+=t)d=i[p],h=i[p+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Oo(s,a,t,o,l,f,0),a}};function x0(i,e,t,n,r){let s,a;if(r===A1(i,e,t,n)>0)for(s=e;s<t;s+=n)a=eg(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=eg(s,i[s],i[s+1],a);return a&&Dh(a,a.next)&&(ko(a),a=a.next),a}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Dh(t,t.next)||Ct(t.prev,t,t.next)===0)){if(ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&_1(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?d1(i,n,r,s):h1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ko(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=f1(Cs(i),e,t),Oo(i,e,t,n,r,s,2)):a===2&&p1(i,e,t,n,r,s):Oo(Cs(i),e,t,n,r,s,1);break}}}function h1(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,h=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&oa(r,o,s,l,a,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function d1(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Ct(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,d=s.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,m=lf(f,p,e,t,n),_=lf(v,g,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==a&&oa(o,u,l,d,c,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&oa(o,u,l,d,c,h,x.x,x.y)&&Ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==r&&y!==a&&oa(o,u,l,d,c,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&oa(o,u,l,d,c,h,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function f1(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Dh(r,s)&&y0(r,n,n.next,s)&&Fo(r,s)&&Fo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ko(n),ko(n.next),n=i=s),n=n.next}while(n!==i);return Cs(n)}function p1(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S1(a,o)){let l=_0(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Oo(a,e,t,n,r,s,0),Oo(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function m1(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=x0(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(w1(c));for(r.sort(g1),s=0;s<r.length;s++)t=v1(r[s],t);return t}function g1(i,e){return i.x-e.x}function v1(i,e){const t=x1(i,e);if(!t)return e;const n=_0(t,i);return Cs(n,n.next),Cs(t,t.next)}function x1(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&oa(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),Fo(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&y1(r,t)))&&(r=t,u=d)),t=t.next;while(t!==o);return r}function y1(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function _1(i,e,t,n){let r=i;do r.z===0&&(r.z=lf(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,M1(r)}function M1(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function lf(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function w1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oa(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function S1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!b1(i,e)&&(Fo(i,e)&&Fo(e,i)&&T1(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Dh(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Dh(i,e){return i.x===e.x&&i.y===e.y}function y0(i,e,t,n){const r=vc(Ct(i,e,t)),s=vc(Ct(i,e,n)),a=vc(Ct(t,n,i)),o=vc(Ct(t,n,e));return!!(r!==s&&a!==o||r===0&&gc(i,t,e)||s===0&&gc(i,n,e)||a===0&&gc(t,i,n)||o===0&&gc(t,e,n))}function gc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vc(i){return i>0?1:i<0?-1:0}function b1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&y0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function T1(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _0(i,e){const t=new cf(i.i,i.x,i.y),n=new cf(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function eg(i,e,t,n){const r=new cf(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cf(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A1(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class xi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];tg(e),ng(n,e);let a=e.length;t.forEach(tg);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,ng(n,t[l]);const o=u1.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function tg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ng(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Nh extends je{constructor(e=new _s([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:E1;let y,x=!1,P,A,C,I;m&&(y=m.getSpacedPoints(u),x=!0,h=!1,P=m.computeFrenetFrames(u,!1),A=new R,C=new R,I=new R),h||(g=0,f=0,p=0,v=0);const S=o.extractPoints(c);let M=S.shape;const D=S.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let Q=0,oe=D.length;Q<oe;Q++){const L=D[Q];xi.isClockWise(L)&&(D[Q]=L.reverse())}}const B=xi.triangulateShape(M,D),G=M;for(let Q=0,oe=D.length;Q<oe;Q++){const L=D[Q];M=M.concat(L)}function j(Q,oe,L){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(oe,L)}const X=M.length,ne=B.length;function q(Q,oe,L){let Ne,re,Te;const de=Q.x-oe.x,ke=Q.y-oe.y,Me=L.x-Q.x,E=L.y-Q.y,w=de*de+ke*ke,k=de*E-ke*Me;if(Math.abs(k)>Number.EPSILON){const Z=Math.sqrt(w),ie=Math.sqrt(Me*Me+E*E),K=oe.x-ke/Z,Ie=oe.y+de/Z,me=L.x-E/ie,we=L.y+Me/ie,et=((me-K)*E-(we-Ie)*Me)/(de*E-ke*Me);Ne=K+de*et-Q.x,re=Ie+ke*et-Q.y;const ae=Ne*Ne+re*re;if(ae<=2)return new te(Ne,re);Te=Math.sqrt(ae/2)}else{let Z=!1;de>Number.EPSILON?Me>Number.EPSILON&&(Z=!0):de<-Number.EPSILON?Me<-Number.EPSILON&&(Z=!0):Math.sign(ke)===Math.sign(E)&&(Z=!0),Z?(Ne=-ke,re=de,Te=Math.sqrt(w)):(Ne=de,re=ke,Te=Math.sqrt(w/2))}return new te(Ne/Te,re/Te)}const le=[];for(let Q=0,oe=G.length,L=oe-1,Ne=Q+1;Q<oe;Q++,L++,Ne++)L===oe&&(L=0),Ne===oe&&(Ne=0),le[Q]=q(G[Q],G[L],G[Ne]);const fe=[];let be,He=le.concat();for(let Q=0,oe=D.length;Q<oe;Q++){const L=D[Q];be=[];for(let Ne=0,re=L.length,Te=re-1,de=Ne+1;Ne<re;Ne++,Te++,de++)Te===re&&(Te=0),de===re&&(de=0),be[Ne]=q(L[Ne],L[Te],L[de]);fe.push(be),He=He.concat(be)}for(let Q=0;Q<g;Q++){const oe=Q/g,L=f*Math.cos(oe*Math.PI/2),Ne=p*Math.sin(oe*Math.PI/2)+v;for(let re=0,Te=G.length;re<Te;re++){const de=j(G[re],le[re],Ne);ue(de.x,de.y,-L)}for(let re=0,Te=D.length;re<Te;re++){const de=D[re];be=fe[re];for(let ke=0,Me=de.length;ke<Me;ke++){const E=j(de[ke],be[ke],Ne);ue(E.x,E.y,-L)}}}const ot=p+v;for(let Q=0;Q<X;Q++){const oe=h?j(M[Q],He[Q],ot):M[Q];x?(C.copy(P.normals[0]).multiplyScalar(oe.x),A.copy(P.binormals[0]).multiplyScalar(oe.y),I.copy(y[0]).add(C).add(A),ue(I.x,I.y,I.z)):ue(oe.x,oe.y,0)}for(let Q=1;Q<=u;Q++)for(let oe=0;oe<X;oe++){const L=h?j(M[oe],He[oe],ot):M[oe];x?(C.copy(P.normals[Q]).multiplyScalar(L.x),A.copy(P.binormals[Q]).multiplyScalar(L.y),I.copy(y[Q]).add(C).add(A),ue(I.x,I.y,I.z)):ue(L.x,L.y,d/u*Q)}for(let Q=g-1;Q>=0;Q--){const oe=Q/g,L=f*Math.cos(oe*Math.PI/2),Ne=p*Math.sin(oe*Math.PI/2)+v;for(let re=0,Te=G.length;re<Te;re++){const de=j(G[re],le[re],Ne);ue(de.x,de.y,d+L)}for(let re=0,Te=D.length;re<Te;re++){const de=D[re];be=fe[re];for(let ke=0,Me=de.length;ke<Me;ke++){const E=j(de[ke],be[ke],Ne);x?ue(E.x,E.y+y[u-1].y,y[u-1].x+L):ue(E.x,E.y,d+L)}}}$(),se();function $(){const Q=r.length/3;if(h){let oe=0,L=X*oe;for(let Ne=0;Ne<ne;Ne++){const re=B[Ne];Ue(re[2]+L,re[1]+L,re[0]+L)}oe=u+g*2,L=X*oe;for(let Ne=0;Ne<ne;Ne++){const re=B[Ne];Ue(re[0]+L,re[1]+L,re[2]+L)}}else{for(let oe=0;oe<ne;oe++){const L=B[oe];Ue(L[2],L[1],L[0])}for(let oe=0;oe<ne;oe++){const L=B[oe];Ue(L[0]+X*u,L[1]+X*u,L[2]+X*u)}}n.addGroup(Q,r.length/3-Q,0)}function se(){const Q=r.length/3;let oe=0;Ae(G,oe),oe+=G.length;for(let L=0,Ne=D.length;L<Ne;L++){const re=D[L];Ae(re,oe),oe+=re.length}n.addGroup(Q,r.length/3-Q,1)}function Ae(Q,oe){let L=Q.length;for(;--L>=0;){const Ne=L;let re=L-1;re<0&&(re=Q.length-1);for(let Te=0,de=u+g*2;Te<de;Te++){const ke=X*Te,Me=X*(Te+1),E=oe+Ne+ke,w=oe+re+ke,k=oe+re+Me,Z=oe+Ne+Me;Ge(E,w,k,Z)}}}function ue(Q,oe,L){l.push(Q),l.push(oe),l.push(L)}function Ue(Q,oe,L){Oe(Q),Oe(oe),Oe(L);const Ne=r.length/3,re=_.generateTopUV(n,r,Ne-3,Ne-2,Ne-1);tt(re[0]),tt(re[1]),tt(re[2])}function Ge(Q,oe,L,Ne){Oe(Q),Oe(oe),Oe(Ne),Oe(oe),Oe(L),Oe(Ne);const re=r.length/3,Te=_.generateSideWallUV(n,r,re-6,re-3,re-2,re-1);tt(Te[0]),tt(Te[1]),tt(Te[3]),tt(Te[1]),tt(Te[2]),tt(Te[3])}function Oe(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function tt(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tu[r.type]().fromJSON(r)),new Nh(n,e.options)}}const E1={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new te(s,a),new te(o,l),new te(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[r*3],f=e[r*3+1],p=e[r*3+2],v=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-d),new te(h,1-p),new te(v,1-m)]:[new te(o,1-l),new te(u,1-d),new te(f,1-p),new te(g,1-m)]}};function C1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Uh extends Lr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uh(e.radius,e.detail)}}class Sl extends Lr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sl(e.radius,e.detail)}}class zh extends je{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,f=new R,p=new te;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){const m=s+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<r;v++){const g=v*(n+1);for(let m=0;m<n;m++){const _=m+g,y=_,x=_+n+1,P=_+n+2,A=_+1;o.push(y,x,A),o.push(x,P,A)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oh extends je{constructor(e=new _s([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2));function c(u){const d=r.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;xi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];xi.isClockWise(_)===!0&&(p[g]=_.reverse())}const v=xi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){const _=v[g],y=_[0]+d,x=_[1]+d,P=_[2]+d;n.push(y,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return R1(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Oh(n,e.curveSegments)}}function R1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class bl extends je{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new R,h=new R,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const A=P/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(A+x,1-y),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const y=u[m][_+1],x=u[m][_],P=u[m+1][_],A=u[m+1][_+1];(m!==0||a>0)&&f.push(y,x,A),(m!==n-1||l<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fh extends Lr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fh(e.radius,e.detail)}}class kh extends je{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new R,d=new R,h=new R;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){const v=p/r*s,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(p/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){const v=(r+1)*f+p-1,g=(r+1)*(f-1)+p-1,m=(r+1)*(f-1)+p,_=(r+1)*f+p;a.push(v,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bh extends je{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],d=new R,h=new R,f=new R,p=new R,v=new R,g=new R,m=new R;for(let y=0;y<=n;++y){const x=y/n*s*Math.PI*2;_(x,s,a,e,f),_(x+.01,s,a,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let P=0;P<=r;++P){const A=P/r*Math.PI*2,C=-t*Math.cos(A),I=t*Math.sin(A);d.x=f.x+(C*m.x+I*v.x),d.y=f.y+(C*m.y+I*v.y),d.z=f.z+(C*m.z+I*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(y/n),u.push(P/r)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){const P=(r+1)*(y-1)+(x-1),A=(r+1)*y+(x-1),C=(r+1)*y+x,I=(r+1)*(y-1)+x;o.push(P,A,I),o.push(A,C,I)}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2));function _(y,x,P,A,C){const I=Math.cos(y),S=Math.sin(y),M=P/x*y,D=Math.cos(M);C.x=A*(2+D)*.5*I,C.y=A*(2+D)*S*.5,C.z=A*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Vh extends je{constructor(e=new op(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new te;let u=new R;const d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2));function v(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),_(),m()}function g(y){u=e.getPointAt(y/t,u);const x=a.normals[y],P=a.binormals[y];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,I=Math.sin(C),S=-Math.cos(C);l.x=S*x.x+I*P.x,l.y=S*x.y+I*P.y,l.z=S*x.z+I*P.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){const P=(r+1)*(y-1)+(x-1),A=(r+1)*y+(x-1),C=(r+1)*y+x,I=(r+1)*(y-1)+x;p.push(P,A,I),p.push(A,C,I)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)c.x=y/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vh(new Tu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class M0 extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new R,s=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let p=h,v=h+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),_=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),ig(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,d),ig(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ig(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var rg=Object.freeze({__proto__:null,BoxGeometry:Ls,CapsuleGeometry:Rh,CircleGeometry:Ih,ConeGeometry:Lh,CylinderGeometry:Va,DodecahedronGeometry:Ph,EdgesGeometry:v0,ExtrudeGeometry:Nh,IcosahedronGeometry:Uh,LatheGeometry:wl,OctahedronGeometry:Sl,PlaneGeometry:ka,PolyhedronGeometry:Lr,RingGeometry:zh,ShapeGeometry:Oh,SphereGeometry:bl,TetrahedronGeometry:Fh,TorusGeometry:kh,TorusKnotGeometry:Bh,TubeGeometry:Vh,WireframeGeometry:M0});class w0 extends ln{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class S0 extends ii{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class cp extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends cp{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class T0 extends ln{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class A0 extends ln{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class E0 extends ln{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class C0 extends ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R0 extends ln{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I0 extends vn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function is(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function L0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function P0(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function uf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function up(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function I1(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*r;if(!(p<t||p>=n)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=is(d,c.times.constructor),c.values=is(h,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function L1(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=o.times.length-1;let v;if(s<=o.times[0]){const m=u,_=d-u;v=o.values.slice(m,_)}else if(s>=o.times[p]){const m=p*d+u,_=m+d-u;v=o.values.slice(m,_)}else{const m=o.createInterpolant(),_=u,y=d-u;m.evaluate(s),v=m.resultBuffer.slice(_,y)}l==="quaternion"&&new Cn().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const _=m*f+h;if(l==="quaternion")Cn.multiplyQuaternionsFlat(c.values,_,v,0,c.values,_);else{const y=f-h*2;for(let x=0;x<y;++x)c.values[_+x]-=v[x]}}}return i.blendMode=Wf,i}const P1={convertArray:is,isTypedArray:L0,getKeyframeOrder:P0,sortedArray:uf,flattenJSON:up,subclip:I1,makeClipAdditive:L1};class Tl{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class D0 extends Tl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:s=e,o=2*t-n;break;case Po:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ts:a=e,l=2*n-t;break;case Po:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,_=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,y=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let P=0;P!==o;++P)s[P]=m*a[u+P]+_*a[c+P]+y*a[l+P]+x*a[d+P];return s}}class hp extends Tl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}}class N0 extends Tl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new N0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new D0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case wu:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return wu;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&L0(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Lc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=wu;class Ps extends si{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Lo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class dp extends si{}dp.prototype.ValueTypeName="color";class Bo extends si{}Bo.prototype.ValueTypeName="number";class U0 extends Tl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Cn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Al extends si{InterpolantFactoryMethodLinear(e){return new U0(this.times,this.values,this.getValueSize(),e)}}Al.prototype.ValueTypeName="quaternion";Al.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends si{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Lo;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Vo extends si{}Vo.prototype.ValueTypeName="vector";class Go{constructor(e="",t=-1,n=[],r=vh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(N1(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(si.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=P0(l);l=uf(l,1,u),c=uf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Bo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,p,v){if(f.length!==0){const g=[],m=[];up(f,g,m,p),g.length!==0&&v.push(new d(h,g,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let v=0;v<h[p].morphTargets.length;v++)f[h[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let _=0;_!==h[p].morphTargets.length;++_){const y=h[p];g.push(y.time),m.push(y.morphTarget===v?1:0)}r.push(new Bo(".morphTargetInfluence["+v+"]",g,m))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(Vo,f+".position",h,"pos",r),n(Al,f+".quaternion",h,"rot",r),n(Vo,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bo;case"vector":case"vector2":case"vector3":case"vector4":return Vo;case"color":return dp;case"quaternion":return Al;case"bool":case"boolean":return Ps;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function N1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D1(i.type);if(i.times===void 0){const t=[],n=[];up(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fp{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const z0=new fp;class Rn{constructor(e){this.manager=e!==void 0?e:z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class U1 extends Error{constructor(e,t){super(e),this.response=t}}class ji extends Rn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:r});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Li[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){_();function _(){d.read().then(({done:y,value:x})=>{if(y)m.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let A=0,C=u.length;A<C;A++){const I=u[A];I.onProgress&&I.onProgress(P)}m.enqueue(x),_()}},y=>{m.error(y)})}}});return new Response(g)}else throw new U1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Vi.add(e,c);const u=Li[e];delete Li[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class z1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new ji(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=Go.parse(e[n]);t.push(r)}return t}}class O1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=[],o=new Eh,l=new ji(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=s.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=kt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=s.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),a[p].format=h.format,a[p].width=h.width,a[p].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=kt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}}class Ho extends Rn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Uo("img");function l(){u(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class F1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=new _l;s.colorSpace=bn;const a=new Ho(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class k1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new vi,o=new ji(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Wn,a.wrapT=c.wrapT!==void 0?c.wrapT:Wn,a.magFilter=c.magFilter!==void 0?c.magFilter:kt,a.minFilter=c.minFilter!==void 0?c.minFilter:kt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=pi),c.mipmapCount===1&&(a.minFilter=kt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class B1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=new Pt,a=new Ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Pr extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class O0 extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dd=new Ve,sg=new R,ag=new R;class pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ag),t.updateMatrixWorld(),Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class V1 extends pp{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ca*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F0 extends Pr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new V1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const og=new Ve,ro=new R,Nd=new R;class G1 extends pp{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),Nd.copy(n.position),Nd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nd),n.updateMatrixWorld(),r.makeTranslation(-ro.x,-ro.y,-ro.z),og.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og)}}class k0 extends Pr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H1 extends pp{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B0 extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new H1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V0 extends Pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class G0 extends Pr{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class H0{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class W0 extends Pr{constructor(e=new H0,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Gh extends Rn{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,a=new ji(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new _e().setHex(a.value);break;case"v2":r.uniforms[s].value=new te().fromArray(a.value);break;case"v3":r.uniforms[s].value=new R().fromArray(a.value);break;case"v4":r.uniforms[s].value=new st().fromArray(a.value);break;case"m3":r.uniforms[s].value=new qe().fromArray(a.value);break;case"m4":r.uniforms[s].value=new Ve().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new te().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Gh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:w0,SpriteMaterial:ep,RawShaderMaterial:S0,ShaderMaterial:ii,PointsMaterial:np,MeshPhysicalMaterial:b0,MeshStandardMaterial:cp,MeshPhongMaterial:T0,MeshToonMaterial:A0,MeshNormalMaterial:E0,MeshLambertMaterial:C0,MeshDepthMaterial:Jf,MeshDistanceMaterial:Qf,MeshBasicMaterial:Ir,MeshMatcapMaterial:R0,LineDashedMaterial:I0,LineBasicMaterial:vn,Material:ln};return new t[e]}}class hf{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class X0 extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class q0 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new ji(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),_=ra(g.type,m),y=new Th(_,g.stride);return y.uuid=g.uuid,t[p]=y,y}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new X0:new je,o=e.data.index;if(o!==void 0){const f=ra(o.type,o.array);a.setIndex(new gt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=r(e.data,p.data);v=new Es(g,p.itemSize,p.offset,p.normalized)}else{const g=ra(p.type,p.array),m=p.isInstancedBufferAttribute?Ia:gt;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];let y;if(_.isInterleavedBufferAttribute){const x=r(e.data,_.data);y=new Es(x,_.itemSize,_.offset,_.normalized)}else{const x=ra(_.type,_.array);y=new gt(x,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),v.push(y)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const f=new R;h.center!==void 0&&f.fromArray(h.center),a.boundingSphere=new sn(f,h.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class W1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=this.path===""?hf.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ji(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?hf.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new ji(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new _s().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Ah().fromJSON(e[s],r);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new q0;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in rg?o=rg[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new Gh;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=Go.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:ra(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new fp(t);s=new Ho(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new vi(m.data,m.width,m.height)))}r[d.uuid]=new ns(f)}else{const f=o(d.url);r[d.uuid]=new ns(f)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return a.data?{data:ra(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new Ho(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=await s(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new vi(p.data,p.width,p.height)))}n[l.uuid]=new ns(u)}else{const u=await s(l.url);n[l.uuid]=new ns(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new _l,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new vi:u=new Pt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,X1)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],lg),u.wrapT=n(o.wrap[1],lg)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,cg)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,cg)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,n,r,s){let a;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function c(h){return r[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),r[h]}let u,d;switch(e.type){case"Scene":a=new i0,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new bh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Sh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Mh(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new V0(e.color,e.intensity);break;case"DirectionalLight":a=new B0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new k0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new G0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new F0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new O0(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new W0().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new o0(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new Ot(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const h=e.count,f=e.instanceMatrix,p=e.instanceColor;a=new l0(u,d,h),a.instanceMatrix=new Ia(new Float32Array(f.array),16),p!==void 0&&(a.instanceColor=new Ia(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new c0(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const g=new gn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const m=new sn;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new a0;break;case"Line":a=new Ar(o(e.geometry),l(e.material));break;case"LineLoop":a=new u0(o(e.geometry),l(e.material));break;case"LineSegments":a=new Si(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new h0(o(e.geometry),l(e.material));break;case"Sprite":a=new s0(l(e.material));break;case"Group":a=new aa;break;case"Bone":a=new tp;break;default:a=new at}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,r,s))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new at}})}}const X1={UVMapping:uh,CubeReflectionMapping:Zi,CubeRefractionMapping:Tr,EquirectangularReflectionMapping:Eo,EquirectangularRefractionMapping:Co,CubeUVReflectionMapping:za},lg={RepeatWrapping:Ro,ClampToEdgeWrapping:Wn,MirroredRepeatWrapping:Io},cg={NearestFilter:Jt,NearestMipmapNearestFilter:Nf,NearestMipmapLinearFilter:ia,LinearFilter:kt,LinearMipmapNearestFilter:po,LinearMipmapLinearFilter:pi};class q1 extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,l),s.manager.itemStart(e)}}let xc;class mp{static getContext(){return xc===void 0&&(xc=new(window.AudioContext||window.webkitAudioContext)),xc}static setContext(e){xc=e}}class Y1 extends Rn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new ji(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);mp.getContext().decodeAudioData(c,function(d){t(d)}).catch(o)}catch(c){o(c)}},n,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}const ug=new Ve,hg=new Ve,Wr=new Ve;class $1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Wr.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(ys*t.fov*.5)/t.zoom;let o,l;hg.elements[12]=-r,ug.elements[12]=r,o=-a*t.aspect+s,l=a*t.aspect+s,Wr.elements[0]=2*t.near/(l-o),Wr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Wr),o=-a*t.aspect-s,l=a*t.aspect-s,Wr.elements[0]=2*t.near/(l-o),Wr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Wr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(hg),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ug)}}class Y0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dg(){return performance.now()}const Xr=new R,fg=new Cn,Z1=new R,qr=new R;class K1 extends at{constructor(){super(),this.type="AudioListener",this.context=mp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Y0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Xr,fg,Z1),qr.set(0,0,-1).applyQuaternion(fg),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Xr.x,r),t.positionY.linearRampToValueAtTime(Xr.y,r),t.positionZ.linearRampToValueAtTime(Xr.z,r),t.forwardX.linearRampToValueAtTime(qr.x,r),t.forwardY.linearRampToValueAtTime(qr.y,r),t.forwardZ.linearRampToValueAtTime(qr.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Xr.x,Xr.y,Xr.z),t.setOrientation(qr.x,qr.y,qr.z,n.x,n.y,n.z)}}class $0 extends at{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Yr=new R,pg=new Cn,j1=new R,$r=new R;class J1 extends $0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Yr,pg,j1),$r.set(0,0,1).applyQuaternion(pg);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Yr.x,n),t.positionY.linearRampToValueAtTime(Yr.y,n),t.positionZ.linearRampToValueAtTime(Yr.z,n),t.orientationX.linearRampToValueAtTime($r.x,n),t.orientationY.linearRampToValueAtTime($r.y,n),t.orientationZ.linearRampToValueAtTime($r.z,n)}else t.setPosition(Yr.x,Yr.y,Yr.z),t.setOrientation($r.x,$r.y,$r.z)}}class Q1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Z0{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Cn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;Cn.multiplyQuaternionsFlat(e,a,e,t,e,n),Cn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const gp="\\[\\]\\.:\\/",eC=new RegExp("["+gp+"]","g"),vp="[^"+gp+"]",tC="[^"+gp.replace("\\.","")+"]",nC=/((?:WC+[\/:])*)/.source.replace("WC",vp),iC=/(WCOD+)?/.source.replace("WCOD",tC),rC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vp),sC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vp),aC=new RegExp("^"+nC+iC+rC+sC+"$"),oC=["material","materials","bones","map"];class lC{constructor(e,t,n){const r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eC,"")}static parseTrackName(e){const t=aC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);oC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=lC;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cC{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Un(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(h);for(let v=0,g=a;v!==g;++v)s[v].push(new rt(h,n[v],r[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=h;for(let m=0,_=a;m!==_;++m){const y=s[m],x=y[v];let P=y[p];y[p]=x,P===void 0&&(P=new rt(h,n[m],r[m])),y[v]=P}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const d=s++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,p=r;f!==p;++f){const v=n[f],g=v[d],m=v[u];v[u]=g,v[d]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<s){const h=--s,f=e[h],p=--a,v=e[p];t[f.uuid]=d,e[d]=f,t[v.uuid]=h,e[h]=v,e.pop();for(let g=0,m=r;g!==m;++g){const _=n[g],y=_[h],x=_[p];_[d]=y,_[h]=x,_.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,v=r;p!==v;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);r=s.length,n[e]=r,a.push(e),o.push(t),s.push(d);for(let h=u,f=l.length;h!==f;++h){const p=l[h];d[h]=new rt(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),r[n]=r[o],r.pop()}}}class K0{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:es,endingEnd:es};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Wf:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case vh:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===Ix;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Cx){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=ts,r.endingEnd=ts):(e?r.endingStart=this.zeroSlopeAtStart?ts:es:r.endingStart=Po,t?r.endingEnd=this.zeroSlopeAtEnd?ts:es:r.endingEnd=Po)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const uC=new Float32Array(1);class hC extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=r[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;p=new Z0(rt.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hp(new Float32Array(2),new Float32Array(2),1,uC),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Go.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=vh),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new K0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Go.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class xp{constructor(e){this.value=e}clone(){return new xp(this.value.clone===void 0?this.value:this.value.clone())}}let dC=0;class fC extends wi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:dC++}),this.name="",this.usage=Do,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class pC extends Th{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class mC{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const mg=new Ve;class gC{constructor(e,t,n=0,r=1/0){this.ray=new Fa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,t=!0,n=[]){return df(e,this,n,t),n.sort(gg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)df(e[r],this,n,t);return n.sort(gg),n}}function gg(i,e){return i.distance-e.distance}function df(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)df(s[a],e,t,!0)}}class vC{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xC{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class yp{constructor(e,t,n,r){yp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}const vg=new te;class yC{constructor(e=new te(1/0,1/0),t=new te(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xg=new R,yc=new R;class _C{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xg.subVectors(e,this.start),yc.subVectors(this.end,this.start);const n=yc.dot(yc);let s=yc.dot(xg)/n;return t&&(s=Lt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const yg=new R;class MC extends at{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new je,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Re(r,3));const s=new vn({fog:!1,toneMapped:!1});this.cone=new Si(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),yg.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(yg),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const hr=new R,_c=new Ve,Ud=new Ve;class wC extends Si{constructor(e){const t=j0(e),n=new je,r=[],s=[],a=new _e(0,0,1),o=new _e(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Re(r,3)),n.setAttribute("color",new Re(s,3));const l=new vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Ud.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(_c.multiplyMatrices(Ud,o.matrixWorld),hr.setFromMatrixPosition(_c),r.setXYZ(a,hr.x,hr.y,hr.z),_c.multiplyMatrices(Ud,o.parent.matrixWorld),hr.setFromMatrixPosition(_c),r.setXYZ(a+1,hr.x,hr.y,hr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function j0(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,j0(i.children[t]));return e}class SC extends Ot{constructor(e,t,n){const r=new bl(t,4,2),s=new Ir({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const bC=new R,_g=new _e,Mg=new _e;class TC extends at{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new Sl(t);r.rotateY(Math.PI*.5),this.material=new Ir({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new gt(a,3)),this.add(new Ot(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");_g.copy(this.light.color),Mg.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?_g:Mg;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(bC.setFromMatrixPosition(this.light.matrixWorld).negate())}}class AC extends Si{constructor(e=10,t=10,n=4473924,r=8947848){n=new _e(n),r=new _e(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=h===s?n:r;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new je;u.setAttribute("position",new Re(l,3)),u.setAttribute("color",new Re(c,3));const d=new vn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class EC extends Si{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new _e(s),a=new _e(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,p);const v=d&1?s:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){const h=d&1?s:a,f=e-e/n*d;for(let p=0;p<r;p++){let v=p/r*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(h.r,h.g,h.b),v=(p+1)/r*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(h.r,h.g,h.b)}}const c=new je;c.setAttribute("position",new Re(o,3)),c.setAttribute("color",new Re(l,3));const u=new vn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const wg=new R,Mc=new R,Sg=new R;class CC extends at{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new je;r.setAttribute("position",new Re([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new vn({fog:!1,toneMapped:!1});this.lightPlane=new Ar(r,s),this.add(this.lightPlane),r=new je,r.setAttribute("position",new Re([0,0,0,0,0,1],3)),this.targetLine=new Ar(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),wg.setFromMatrixPosition(this.light.matrixWorld),Mc.setFromMatrixPosition(this.light.target.matrixWorld),Sg.subVectors(Mc,wg),this.lightPlane.lookAt(Mc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Mc),this.targetLine.scale.z=Sg.length()}}const wc=new R,It=new _h;class RC extends Si{constructor(e){const t=new je,n=new vn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){r.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(r.length/3-1)}t.setAttribute("position",new Re(r,3)),t.setAttribute("color",new Re(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new _e(16755200),u=new _e(16711680),d=new _e(43775),h=new _e(16777215),f=new _e(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;It.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Nt("c",t,e,It,0,0,-1),Nt("t",t,e,It,0,0,1),Nt("n1",t,e,It,-1,-1,-1),Nt("n2",t,e,It,n,-1,-1),Nt("n3",t,e,It,-1,r,-1),Nt("n4",t,e,It,n,r,-1),Nt("f1",t,e,It,-1,-1,1),Nt("f2",t,e,It,n,-1,1),Nt("f3",t,e,It,-1,r,1),Nt("f4",t,e,It,n,r,1),Nt("u1",t,e,It,n*.7,r*1.1,-1),Nt("u2",t,e,It,-1*.7,r*1.1,-1),Nt("u3",t,e,It,0,r*2,-1),Nt("cf1",t,e,It,-1,0,1),Nt("cf2",t,e,It,n,0,1),Nt("cf3",t,e,It,0,-1,1),Nt("cf4",t,e,It,0,r,1),Nt("cn1",t,e,It,-1,0,-1),Nt("cn2",t,e,It,n,0,-1),Nt("cn3",t,e,It,0,-1,-1),Nt("cn4",t,e,It,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(i,e,t,n,r,s,a){wc.set(r,s,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],wc.x,wc.y,wc.z)}}const Sc=new gn;class IC extends Si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new je;s.setIndex(new gt(n,1)),s.setAttribute("position",new gt(r,3)),super(s,new vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Sc.setFromObject(this.object),Sc.isEmpty())return;const t=Sc.min,n=Sc.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class LC extends Si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new je;s.setIndex(new gt(n,1)),s.setAttribute("position",new Re(r,3)),super(s,new vn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class PC extends Ar{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new je;a.setAttribute("position",new Re(s,3)),a.computeBoundingSphere(),super(a,new vn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new je;l.setAttribute("position",new Re(o,3)),l.computeBoundingSphere(),this.add(new Ot(l,new Ir({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const bg=new R;let bc,zd;class DC extends at{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",bc===void 0&&(bc=new je,bc.setAttribute("position",new Re([0,0,0,0,1,0],3)),zd=new Va(0,.5,1,5,1),zd.translate(0,-.5,0)),this.position.copy(t),this.line=new Ar(bc,new vn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ot(zd,new Ir({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bg,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class NC extends Si{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new je;r.setAttribute("position",new Re(t,3)),r.setAttribute("color",new Re(n,3));const s=new vn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new _e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class UC{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const _=[];for(let y=0,x=m.length;y<x;y++){const P=m[y],A=new _s;A.curves=P.curves,_.push(A)}return _}function n(m,_){const y=_.length;let x=!1;for(let P=y-1,A=0;A<y;P=A++){let C=_[P],I=_[A],S=I.x-C.x,M=I.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=_[A],S=-S,I=_[P],M=-M),m.y<C.y||m.y>I.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const D=M*(m.x-C.x)-S*(m.y-C.y);if(D===0)return!0;if(D<0)continue;x=!x}}else{if(m.y!==C.y)continue;if(I.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=I.x)return!0}}return x}const r=xi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new _s,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],p=0,v;h[p]=void 0,f[p]=[];for(let m=0,_=s.length;m<_;m++)o=s[m],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&h[p]&&p++,h[p]={s:new _s,p:v},h[p].s.curves=o.curves,u&&p++,f[p]=[]):f[p].push({h:o,p:v[0]});if(!h[0])return t(s);if(h.length>1){let m=!1,_=0;for(let y=0,x=h.length;y<x;y++)d[y]=[];for(let y=0,x=h.length;y<x;y++){const P=f[y];for(let A=0;A<P.length;A++){const C=P[A];let I=!0;for(let S=0;S<h.length;S++)n(C.p,h[S].p)&&(y!==S&&_++,I?(I=!1,d[S].push(C)):m=!0);I&&d[y].push(C)}}_>0&&m===!1&&(f=d)}let g;for(let m=0,_=h.length;m<_;m++){l=h[m].s,c.push(l),g=f[m];for(let y=0,x=g.length;y<x;y++)l.holes.push(g[y].h)}return c}}class zC extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class OC extends ni{constructor(e=1,t=1,n=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);const fP=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sx,AddEquation:fr,AddOperation:yx,AdditiveAnimationBlendMode:Wf,AdditiveBlending:jd,AgXToneMapping:Tx,AlphaFormat:Ff,AlwaysCompare:Bx,AlwaysDepth:Wc,AlwaysStencilFunc:tf,AmbientLight:V0,AnimationAction:K0,AnimationClip:Go,AnimationLoader:z1,AnimationMixer:hC,AnimationObjectGroup:cC,AnimationUtils:P1,ArcCurve:d0,ArrayCamera:n0,ArrowHelper:DC,AttachedBindMode:ef,Audio:$0,AudioAnalyser:Q1,AudioContext:mp,AudioListener:K1,AudioLoader:Y1,AxesHelper:NC,BackSide:mn,BasicDepthPacking:Lx,BasicShadowMap:RM,BatchedMesh:c0,Bone:tp,BooleanKeyframeTrack:Ps,Box2:yC,Box3:gn,Box3Helper:LC,BoxGeometry:Ls,BoxHelper:IC,BufferAttribute:gt,BufferGeometry:je,BufferGeometryLoader:q0,ByteType:Uf,Cache:Vi,Camera:_h,CameraHelper:RC,CanvasTexture:n1,CapsuleGeometry:Rh,CatmullRomCurve3:f0,CineonToneMapping:wx,CircleGeometry:Ih,ClampToEdgeWrapping:Wn,Clock:Y0,Color:_e,ColorKeyframeTrack:dp,ColorManagement:nt,CompressedArrayTexture:e1,CompressedCubeTexture:t1,CompressedTexture:Eh,CompressedTextureLoader:O1,ConeGeometry:Lh,ConstantAlphaFactor:gx,ConstantColorFactor:px,Controls:zC,CubeCamera:$x,CubeReflectionMapping:Zi,CubeRefractionMapping:Tr,CubeTexture:_l,CubeTextureLoader:F1,CubeUVReflectionMapping:za,CubicBezierCurve:rp,CubicBezierCurve3:p0,CubicInterpolant:D0,CullFaceBack:Kd,CullFaceFront:Jv,CullFaceFrontBack:CM,CullFaceNone:jv,Curve:ri,CurvePath:g0,CustomBlending:ex,CustomToneMapping:bx,CylinderGeometry:Va,Cylindrical:xC,Data3DTexture:Yf,DataArrayTexture:xh,DataTexture:vi,DataTextureLoader:k1,DataUtils:Hw,DecrementStencilOp:HM,DecrementWrapStencilOp:XM,DefaultLoadingManager:z0,DepthFormat:xs,DepthStencilFormat:As,DepthTexture:jf,DetachedBindMode:Ex,DirectionalLight:B0,DirectionalLightHelper:CC,DiscreteInterpolant:N0,DodecahedronGeometry:Ph,DoubleSide:hi,DstAlphaFactor:cx,DstColorFactor:hx,DynamicCopyUsage:aw,DynamicDrawUsage:ew,DynamicReadUsage:iw,EdgesGeometry:v0,EllipseCurve:Ch,EqualCompare:zx,EqualDepth:qc,EqualStencilFunc:ZM,EquirectangularReflectionMapping:Eo,EquirectangularRefractionMapping:Co,Euler:zn,EventDispatcher:wi,ExtrudeGeometry:Nh,FileLoader:ji,Float16BufferAttribute:Zw,Float32BufferAttribute:Re,FloatType:En,Fog:bh,FogExp2:Sh,FramebufferTexture:QE,FrontSide:$i,Frustum:Ml,GLBufferAttribute:mC,GLSL1:lw,GLSL3:nf,GreaterCompare:Ox,GreaterDepth:$c,GreaterEqualCompare:kx,GreaterEqualDepth:Yc,GreaterEqualStencilFunc:QM,GreaterStencilFunc:jM,GridHelper:AC,Group:aa,HalfFloatType:Oa,HemisphereLight:O0,HemisphereLightHelper:TC,IcosahedronGeometry:Uh,ImageBitmapLoader:q1,ImageLoader:Ho,ImageUtils:Hx,IncrementStencilOp:GM,IncrementWrapStencilOp:WM,InstancedBufferAttribute:Ia,InstancedBufferGeometry:X0,InstancedInterleavedBuffer:pC,InstancedMesh:l0,Int16BufferAttribute:Yw,Int32BufferAttribute:$w,Int8BufferAttribute:Ww,IntType:hh,InterleavedBuffer:Th,InterleavedBufferAttribute:Es,Interpolant:Tl,InterpolateDiscrete:Lo,InterpolateLinear:wu,InterpolateSmooth:Lc,InvertStencilOp:qM,KeepStencilOp:jr,KeyframeTrack:si,LOD:a0,LatheGeometry:wl,Layers:yh,LessCompare:Ux,LessDepth:Xc,LessEqualCompare:Xf,LessEqualDepth:bs,LessEqualStencilFunc:KM,LessStencilFunc:$M,Light:Pr,LightProbe:W0,Line:Ar,Line3:_C,LineBasicMaterial:vn,LineCurve:sp,LineCurve3:m0,LineDashedMaterial:I0,LineLoop:u0,LineSegments:Si,LinearFilter:kt,LinearInterpolant:hp,LinearMipMapLinearFilter:DM,LinearMipMapNearestFilter:PM,LinearMipmapLinearFilter:pi,LinearMipmapNearestFilter:po,LinearSRGBColorSpace:Rr,LinearToneMapping:_x,LinearTransfer:yl,Loader:Rn,LoaderUtils:hf,LoadingManager:fp,LoopOnce:Cx,LoopPingPong:Ix,LoopRepeat:Rx,LuminanceAlphaFormat:Vf,LuminanceFormat:Bf,MOUSE:AM,Material:ln,MaterialLoader:Gh,MathUtils:Tw,Matrix2:yp,Matrix3:qe,Matrix4:Ve,MaxEquation:rx,Mesh:Ot,MeshBasicMaterial:Ir,MeshDepthMaterial:Jf,MeshDistanceMaterial:Qf,MeshLambertMaterial:C0,MeshMatcapMaterial:R0,MeshNormalMaterial:E0,MeshPhongMaterial:T0,MeshPhysicalMaterial:b0,MeshStandardMaterial:cp,MeshToonMaterial:A0,MinEquation:ix,MirroredRepeatWrapping:Io,MixOperation:xx,MultiplyBlending:Qd,MultiplyOperation:vl,NearestFilter:Jt,NearestMipMapLinearFilter:LM,NearestMipMapNearestFilter:IM,NearestMipmapLinearFilter:ia,NearestMipmapNearestFilter:Nf,NeutralToneMapping:Ax,NeverCompare:Nx,NeverDepth:Hc,NeverStencilFunc:YM,NoBlending:Hi,NoColorSpace:ki,NoToneMapping:Wi,NormalAnimationBlendMode:vh,NormalBlending:vs,NotEqualCompare:Fx,NotEqualDepth:Zc,NotEqualStencilFunc:JM,NumberKeyframeTrack:Bo,Object3D:at,ObjectLoader:W1,ObjectSpaceNormalMap:Dx,OctahedronGeometry:Sl,OneFactor:ax,OneMinusConstantAlphaFactor:vx,OneMinusConstantColorFactor:mx,OneMinusDstAlphaFactor:ux,OneMinusDstColorFactor:dx,OneMinusSrcAlphaFactor:Gc,OneMinusSrcColorFactor:lx,OrthographicCamera:Mh,PCFShadowMap:Df,PCFSoftShadowMap:Qv,PMREMGenerator:rf,Path:zo,PerspectiveCamera:Kt,Plane:dr,PlaneGeometry:ka,PlaneHelper:PC,PointLight:k0,PointLightHelper:SC,Points:h0,PointsMaterial:np,PolarGridHelper:EC,PolyhedronGeometry:Lr,PositionalAudio:J1,PropertyBinding:rt,PropertyMixer:Z0,QuadraticBezierCurve:ap,QuadraticBezierCurve3:op,Quaternion:Cn,QuaternionKeyframeTrack:Al,QuaternionLinearInterpolant:U0,RED_GREEN_RGTC2_Format:_u,RED_RGTC1_Format:Hf,REVISION:ch,RGBADepthPacking:Px,RGBAFormat:fn,RGBAIntegerFormat:gh,RGBA_ASTC_10x10_Format:pu,RGBA_ASTC_10x5_Format:hu,RGBA_ASTC_10x6_Format:du,RGBA_ASTC_10x8_Format:fu,RGBA_ASTC_12x10_Format:mu,RGBA_ASTC_12x12_Format:gu,RGBA_ASTC_4x4_Format:iu,RGBA_ASTC_5x4_Format:ru,RGBA_ASTC_5x5_Format:su,RGBA_ASTC_6x5_Format:au,RGBA_ASTC_6x6_Format:ou,RGBA_ASTC_8x5_Format:lu,RGBA_ASTC_8x6_Format:cu,RGBA_ASTC_8x8_Format:uu,RGBA_BPTC_Format:yo,RGBA_ETC2_EAC_Format:nu,RGBA_PVRTC_2BPPV1_Format:Qc,RGBA_PVRTC_4BPPV1_Format:Jc,RGBA_S3TC_DXT1_Format:go,RGBA_S3TC_DXT3_Format:vo,RGBA_S3TC_DXT5_Format:xo,RGBDepthPacking:FM,RGBFormat:kf,RGBIntegerFormat:NM,RGB_BPTC_SIGNED_Format:vu,RGB_BPTC_UNSIGNED_Format:xu,RGB_ETC1_Format:eu,RGB_ETC2_Format:tu,RGB_PVRTC_2BPPV1_Format:jc,RGB_PVRTC_4BPPV1_Format:Kc,RGB_S3TC_DXT1_Format:mo,RGDepthPacking:kM,RGFormat:Gf,RGIntegerFormat:mh,RawShaderMaterial:S0,Ray:Fa,Raycaster:gC,RectAreaLight:G0,RedFormat:ph,RedIntegerFormat:xl,ReinhardToneMapping:Mx,RenderTarget:Wx,RepeatWrapping:Ro,ReplaceStencilOp:VM,ReverseSubtractEquation:nx,RingGeometry:zh,SIGNED_RED_GREEN_RGTC2_Format:Mu,SIGNED_RED_RGTC1_Format:yu,SRGBColorSpace:bn,SRGBTransfer:ft,Scene:i0,ShaderChunk:Ke,ShaderLib:ei,ShaderMaterial:ii,ShadowMaterial:w0,Shape:_s,ShapeGeometry:Oh,ShapePath:UC,ShapeUtils:xi,ShortType:zf,Skeleton:Ah,SkeletonHelper:wC,SkinnedMesh:o0,Source:ns,Sphere:sn,SphereGeometry:bl,Spherical:vC,SphericalHarmonics3:H0,SplineCurve:lp,SpotLight:F0,SpotLightHelper:MC,Sprite:s0,SpriteMaterial:ep,SrcAlphaFactor:Vc,SrcAlphaSaturateFactor:fx,SrcColorFactor:ox,StaticCopyUsage:sw,StaticDrawUsage:Do,StaticReadUsage:nw,StereoCamera:$1,StreamCopyUsage:ow,StreamDrawUsage:tw,StreamReadUsage:rw,StringKeyframeTrack:Ds,SubtractEquation:tx,SubtractiveBlending:Jd,TOUCH:EM,TangentSpaceNormalMap:Cr,TetrahedronGeometry:Fh,Texture:Pt,TextureLoader:B1,TextureUtils:PE,TorusGeometry:kh,TorusKnotGeometry:Bh,Triangle:An,TriangleFanDrawMode:OM,TriangleStripDrawMode:zM,TrianglesDrawMode:UM,TubeGeometry:Vh,UVMapping:uh,Uint16BufferAttribute:$f,Uint32BufferAttribute:Zf,Uint8BufferAttribute:Xw,Uint8ClampedBufferAttribute:qw,Uniform:xp,UniformsGroup:fC,UniformsLib:pe,UniformsUtils:Yx,UnsignedByteType:_i,UnsignedInt248Type:Ts,UnsignedInt5999Type:Of,UnsignedIntType:Ki,UnsignedShort4444Type:dh,UnsignedShort5551Type:fh,UnsignedShortType:Ea,VSMShadowMap:li,Vector2:te,Vector3:R,Vector4:st,VectorKeyframeTrack:Vo,VideoTexture:JE,WebGL3DRenderTarget:Dw,WebGLArrayRenderTarget:Pw,WebGLCoordinateSystem:mi,WebGLCubeRenderTarget:Zx,WebGLMultipleRenderTargets:OC,WebGLRenderTarget:ni,WebGLRenderer:GE,WebGLUtils:t0,WebGPUCoordinateSystem:No,WireframeGeometry:M0,WrapAroundEnding:Po,ZeroCurvatureEnding:es,ZeroFactor:sx,ZeroSlopeEnding:ts,ZeroStencilOp:BM,createCanvasElement:Gx},Symbol.toStringTag,{value:"Module"}));var Nu,Jo,nv,Hh=(nv=class{constructor(){J(this,Nu,0);J(this,Jo,0)}queue(i){return new Promise(async(e,t)=>{try{const n=++Pl(this,Nu)._,r=await i;n>b(this,Jo)&&(he(this,Jo,n),e(r))}catch(n){t(n)}})}},Nu=new WeakMap,Jo=new WeakMap,nv),J0=0,cs,pa,La,ey,us,ty,ma,iv,Q0=(iv=class{constructor(){J(this,La);J(this,cs,new Set);F(this,"lastSourceGeneration",0);J(this,pa,new Set);J(this,us,!1);J(this,ma,new Map)}canReuse(i,e){return i===e||this.canReuseValue(i,e)}canReuseValue(i,e){return!1}debugGetChildren(){return Array.from(b(this,cs).values())}addChild(i){b(this,cs).add(i)}removeChild(i){b(this,cs).delete(i)}markStale(i){if(i.detail.generation!==J0)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==i.detail.generation){this.lastSourceGeneration=i.detail.generation;for(const e of b(this,cs))e.markStale(i);Qe(this,La,ey).call(this)}}addRawListener(i,e){b(this,pa).add(i),e!=null&&e.initial&&i()}removeRawListener(i){b(this,pa).delete(i)}addFreshListener(i){const e=new Hh;let t=null;const n=async()=>{const r=await e.queue(this.get());t!==null&&this.canReuse(t,r)||(t=r,i(r))};b(this,ma).set(i,n),this.addRawListener(n,{initial:!0})}removeFreshListener(i){this.removeRawListener(b(this,ma).get(i)),b(this,ma).delete(i)}},cs=new WeakMap,pa=new WeakMap,La=new WeakSet,ey=function(){b(this,us)||(he(this,us,!0),setTimeout(()=>Qe(this,La,ty).call(this),0))},us=new WeakMap,ty=function(){if(!b(this,us))throw new Error("Invalid dispatch state!");for(const i of b(this,pa))i();he(this,us,!1)},ma=new WeakMap,iv),ci,rv,Dr=(rv=class extends Q0{constructor(e){super();J(this,ci);he(this,ci,Lf(()=>this.getDefaultValue())),e&&he(this,ci,this.deriveFromPromiseOrValue(e,b(this,ci)))}set(e){he(this,ci,this.deriveFromPromiseOrValue(e,b(this,ci)));const t={sourceProp:this,value:b(this,ci),generation:++J0};this.markStale(new CustomEvent("stale",{detail:t}))}async get(){return b(this,ci)}async deriveFromPromiseOrValue(e,t){return this.derive(await e,t)}},ci=new WeakMap,rv),Mt=class extends Dr{derive(i){return i}},Wo=Symbol("no value"),mr,Qo,ga,Pa,ny,iy,sv,At=(sv=class extends Q0{constructor(e,t){super();J(this,Pa);J(this,mr);J(this,Qo,null);J(this,ga,null);this.userVisibleErrorTracker=t,he(this,mr,e);for(const n of Object.values(e))n.addChild(this)}async get(){var n,r;const e=this.lastSourceGeneration;if(((n=b(this,ga))==null?void 0:n.generation)===e)return b(this,ga).output;const t={generation:e,output:Qe(this,Pa,iy).call(this,Qe(this,Pa,ny).call(this),e,b(this,Qo))};return he(this,ga,t),(r=this.userVisibleErrorTracker)==null||r.reset(),t.output}},mr=new WeakMap,Qo=new WeakMap,ga=new WeakMap,Pa=new WeakSet,ny=async function(){const e={};for(const[n,r]of Object.entries(b(this,mr)))e[n]=r.get();const t={};for(const n in b(this,mr))t[n]=await e[n];return t},iy=async function(e,t,n=null){const r=await e,s=o=>(he(this,Qo,{inputs:r,output:Promise.resolve(o),generation:t}),o);if(!n)return s(await this.derive(r));const a=n.inputs;for(const o in b(this,mr))if(!b(this,mr)[o].canReuse(r[o],a[o]))return s(await this.derive(r));return n.output},sv),va,av,El=(av=class{constructor(){J(this,va,[])}addListener(i,e){let t=!1;const n=r=>{t||e(r)};i.addFreshListener(n),b(this,va).push(()=>{i.removeFreshListener(n),t=!0})}addMultiListener3(i,e){this.addMultiListener(i,e)}addMultiListener(i,e){let t=!1,n=i.length-1;const r=async s=>{if(n>0){n--;return}if(t)return;const a=i.map(l=>l.get()),o=await Promise.all(a);e(o)};for(const s of i)s.addFreshListener(r);b(this,va).push(()=>{for(const s of i)s.removeFreshListener(r);t=!0})}disconnect(){for(const i of b(this,va))i()}},va=new WeakMap,av),Ga=class{constructor(i){F(this,"animFrameID",null);F(this,"animFrame",this.animFrameWrapper.bind(this));this.callback=i}requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||(this.animFrameID=requestAnimationFrame(this.animFrame))}cancelAnimFrame(){this.animFrameID&&(cancelAnimationFrame(this.animFrameID),this.animFrameID=0)}animFrameWrapper(i){this.animFrameID=0,this.callback(i)}},pP={floating:!0,none:!0},FC=class extends Mt{getDefaultValue(){return"auto"}},kC=Math.PI*2,Xo=360/kC,BC=class{},qo;globalThis.HTMLElement?qo=globalThis.HTMLElement:qo=BC;var VC=class{define(){}},an;globalThis.customElements?an=globalThis.customElements:an=new VC;var On,GC=class{replaceSync(){}};globalThis.CSSStyleSheet?On=globalThis.CSSStyleSheet:On=GC;var qn=class extends qo{constructor(e){super();F(this,"shadow");F(this,"contentWrapper");this.shadow=this.attachShadow({mode:(e==null?void 0:e.mode)??"closed"}),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add("wrapper"),this.shadow.appendChild(this.contentWrapper)}addCSS(e){this.shadow.adoptedStyleSheets.push(e)}removeCSS(e){const t=this.shadow.adoptedStyleSheets.indexOf(e);typeof t<"u"&&this.shadow.adoptedStyleSheets.splice(t,t+1)}addElement(e){return this.contentWrapper.appendChild(e)}prependElement(e){this.contentWrapper.prepend(e)}removeElement(e){return this.contentWrapper.removeChild(e)}};an.define("twisty-managed-custom-element",qn);var HC=null;async function ry(){return HC??(HC=pt(()=>import("./CnPjBglJ.js"),[],import.meta.url))}var yi=Lf(async()=>(await ry()).T3I);function ff(){return devicePixelRatio||1}var sy=new On;sy.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);var Tg=.1,hs,ds,xa,Ji,ay,oy,pf,ov,WC=(ov=class extends EventTarget{constructor(e){super();J(this,Ji);J(this,hs,new Map);J(this,ds,new Map);J(this,xa,!1);this.target=e}start(){this.addTargetListener("pointerdown",this.onPointerDown.bind(this)),this.addTargetListener("contextmenu",e=>{e.preventDefault()}),this.addTargetListener("touchmove",e=>e.preventDefault()),this.addTargetListener("dblclick",e=>e.preventDefault())}stop(){for(const[e,t]of b(this,ds).entries())this.target.removeEventListener(e,t);b(this,ds).clear(),he(this,xa,!1)}addTargetListener(e,t){b(this,ds).has(e)||(this.target.addEventListener(e,t),b(this,ds).set(e,t))}onPointerDown(e){Qe(this,Ji,ay).call(this);const t={attachedInfo:{},hasMoved:!1,lastClientX:e.clientX,lastClientY:e.clientY,lastTimeStamp:e.timeStamp};b(this,hs).set(e.pointerId,t),this.target.setPointerCapture(e.pointerId)}onPointerMove(e){const t=Qe(this,Ji,pf).call(this,e).movementInfo;t&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("move",{detail:t})))}onPointerUp(e){const t=Qe(this,Ji,pf).call(this,e),n=b(this,hs).get(e.pointerId);Qe(this,Ji,oy).call(this,e),this.target.releasePointerCapture(e.pointerId);let r;if(t.hasMoved)r=new CustomEvent("up",{detail:{attachedInfo:n.attachedInfo}});else{const{altKey:s,ctrlKey:a,metaKey:o,shiftKey:l}=e;r=new CustomEvent("press",{detail:{normalizedX:e.offsetX/this.target.offsetWidth*2-1,normalizedY:1-e.offsetY/this.target.offsetHeight*2,rightClick:!!(e.button&2),keys:{altKey:s,ctrlOrMetaKey:a||o,shiftKey:l}}})}this.dispatchEvent(r)}},hs=new WeakMap,ds=new WeakMap,xa=new WeakMap,Ji=new WeakSet,ay=function(){b(this,xa)||(this.addTargetListener("pointermove",this.onPointerMove.bind(this)),this.addTargetListener("pointerup",this.onPointerUp.bind(this)),he(this,xa,!0))},oy=function(e){b(this,hs).delete(e.pointerId)},pf=function(e){const t=b(this,hs).get(e.pointerId);if(!t)return{movementInfo:null,hasMoved:!1};let n;return(e.movementX??0)!==0||(e.movementY??0)!==0?n={attachedInfo:t.attachedInfo,movementX:e.movementX,movementY:e.movementY,elapsedMs:e.timeStamp-t.lastTimeStamp}:n={attachedInfo:t.attachedInfo,movementX:e.clientX-t.lastClientX,movementY:e.clientY-t.lastClientY,elapsedMs:e.timeStamp-t.lastTimeStamp},t.lastClientX=e.clientX,t.lastClientY=e.clientY,t.lastTimeStamp=e.timeStamp,Math.abs(n.movementX)<Tg&&Math.abs(n.movementY)<Tg?{movementInfo:null,hasMoved:t.hasMoved}:(t.hasMoved=!0,{movementInfo:n,hasMoved:t.hasMoved})},ov),So=[];async function ly(i,e,t,n){So.length===0&&So.push(_p());const r=await So[0];return r.setSize(i,e),r.render(t,n),r.domElement}async function XC(i,e,t,n,r){if(i===0||e===0)return;So.length===0&&So.push(_p());const s=await ly(i,e,n,r),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.drawImage(s,0,0)}async function _p(){const i=(await yi).WebGLRenderer,e=new i({antialias:!0,alpha:!0});return e.outputColorSpace=Rr,e.setPixelRatio(ff()),e}var qC=!0,Od=500,YC=50,$C=.75;function Ag(i){return(Math.exp(1-i)-(1-i))/(1-Math.E)+1}var ZC=class{constructor(i,e,t,n){F(this,"scheduler",new Ga(this.render.bind(this)));F(this,"lastTimestamp");this.startTimestamp=i,this.momentumX=e,this.momentumY=t,this.callback=n,this.scheduler.requestAnimFrame(),this.lastTimestamp=i}render(i){const e=(this.lastTimestamp-this.startTimestamp)/Od,t=Math.min(1,(i-this.startTimestamp)/Od);if(e===0&&t>YC/Od)return;const n=Ag(t)-Ag(e);this.callback(this.momentumX*n*1e3,this.momentumY*n*1e3),t<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=i}},KC=class{constructor(i,e,t,n){F(this,"experimentalInertia",qC);F(this,"onMovementBound",this.onMovement.bind(this));F(this,"experimentalHasBeenMoved",!1);this.model=i,this.mirror=e,this.canvas=t,this.dragTracker=n,this.dragTracker.addEventListener("move",this.onMove.bind(this)),this.dragTracker.addEventListener("up",this.onUp.bind(this))}temperMovement(i){return Math.sign(i)*Math.log(Math.abs(i*10)+1)/6}onMove(i){var r;(r=i.detail).attachedInfo??(r.attachedInfo={});const{temperedX:e,temperedY:t}=this.onMovement(i.detail.movementX,i.detail.movementY),n=i.detail.attachedInfo;n.lastTemperedX=e*10,n.lastTemperedY=t*10,n.timestamp=i.timeStamp}onMovement(i,e){const t=this.mirror?-1:1,n=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),r=this.temperMovement(i/n),s=this.temperMovement(e/n*$C);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{const a=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:a.latitude+2*s*Xo*t,longitude:a.longitude-2*r*Xo}})()),{temperedX:r,temperedY:s}}onUp(i){i.preventDefault(),"lastTemperedX"in i.detail.attachedInfo&&"lastTemperedY"in i.detail.attachedInfo&&"timestamp"in i.detail.attachedInfo&&i.timeStamp-i.detail.attachedInfo.timestamp<60&&new ZC(i.timeStamp,i.detail.attachedInfo.lastTemperedX,i.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};async function cy(i,e,t=!1){const n=new(await yi).Spherical(e.distance,(90-(t?-1:1)*e.latitude)/Xo,((t?180:0)+e.longitude)/Xo);n.makeSafe(),i.position.setFromSpherical(n),i.lookAt(0,0,0)}var Eg=0,jC=2,uy=!1;function JC(){return Eg<jC?(Eg++,!1):(uy=!0,!0)}function mP(){return uy}var Mi,hy,Uu,el,tl,gf,zu,Ou,Fu,vf,ku,Bu,ya,_a,Vu,lv,mf=(lv=class extends qn{constructor(e,t,n){super();J(this,Mi);F(this,"scene",null);F(this,"stats",null);F(this,"rendererIsShared",JC());F(this,"loadingElement",null);J(this,Uu,new Hh);J(this,el,0);J(this,tl,0);J(this,zu,null);J(this,Ou,null);J(this,Fu,null);J(this,ku,null);J(this,Bu,null);J(this,ya,[]);J(this,_a,null);J(this,Vu,new Ga(this.render.bind(this)));this.model=e,this.options=n,this.scene=t??null,this.loadingElement=this.addElement(document.createElement("div")),this.loadingElement.classList.add("loading")}async connectedCallback(){this.addCSS(sy),this.addElement((await this.canvasInfo()).canvas),Qe(this,Mi,gf).call(this),new ResizeObserver(Qe(this,Mi,gf).bind(this)).observe(this.contentWrapper),this.orbitControls(),Qe(this,Mi,hy).call(this),this.scheduleRender()}async clearCanvas(){if(this.rendererIsShared){const e=await this.canvasInfo();e.context.clearRect(0,0,e.canvas.width,e.canvas.height)}else{const t=(await this.renderer()).getContext();t.clear(t.COLOR_BUFFER_BIT)}}async renderer(){if(this.rendererIsShared)throw new Error("renderer expected to be shared.");return b(this,zu)??he(this,zu,_p())}async canvasInfo(){return b(this,Ou)??he(this,Ou,(async()=>{var n;let e;if(this.rendererIsShared)e=this.addElement(document.createElement("canvas"));else{const r=await this.renderer();e=this.addElement(r.domElement)}(n=this.loadingElement)==null||n.remove();const t=e.getContext("2d");return{canvas:e,context:t}})())}async camera(){return b(this,ku)??he(this,ku,(async()=>{var t;const e=new(await yi).PerspectiveCamera(20,1,.1,20);return e.position.copy(new(await yi).Vector3(2,4,4).multiplyScalar((t=this.options)!=null&&t.backView?-1:1)),e.lookAt(0,0,0),e})())}async orbitControls(){return b(this,Bu)??he(this,Bu,(async()=>{var t;const e=new KC(this.model,!!((t=this.options)!=null&&t.backView),(await this.canvasInfo()).canvas,await Qe(this,Mi,vf).call(this));return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async n=>{var s;const r=await this.camera();cy(r,n,(s=this.options)==null?void 0:s.backView),this.scheduleRender()}),e})())}addListener(e,t){e.addFreshListener(t),b(this,ya).push(()=>{e.removeFreshListener(t)})}disconnect(){for(const e of b(this,ya))e();he(this,ya,[])}experimentalNextRenderFinishedCallback(e){he(this,_a,e)}async render(){var r,s,a;if(!this.scene)throw new Error("Attempted to render without a scene");(r=this.stats)==null||r.begin();const[e,t,n]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?XC(b(this,el),b(this,tl),n.canvas,e,t):(await this.renderer()).render(e,t),(s=this.stats)==null||s.end(),(a=b(this,_a))==null||a.call(this),he(this,_a,null)}scheduleRender(){b(this,Vu).requestAnimFrame()}},Mi=new WeakSet,hy=async function(){(await Qe(this,Mi,vf).call(this)).addEventListener("press",async t=>{await this.model.twistySceneModel.movePressInput.get()==="basic"&&this.dispatchEvent(new CustomEvent("press",{detail:{pressInfo:t.detail,cameraPromise:this.camera()}}))})},Uu=new WeakMap,el=new WeakMap,tl=new WeakMap,gf=async function(){const e=await b(this,Uu).queue(this.camera()),t=this.contentWrapper.clientWidth,n=this.contentWrapper.clientHeight;he(this,el,t),he(this,tl,n);const r=0;let s=0,a=0;if(n>t&&(a=n-t,s=-Math.floor(.5*a)),e.aspect=t/n,e.setViewOffset(t,n-a,r,s,t,n),e.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){const o=await this.canvasInfo();o.canvas.width=t*ff(),o.canvas.height=n*ff(),o.canvas.style.width=`${t.toString()}px`,o.canvas.style.height=`${n.toString()}px`}else(await this.renderer()).setSize(t,n,!0);this.scheduleRender()},zu=new WeakMap,Ou=new WeakMap,Fu=new WeakMap,vf=async function(){return b(this,Fu)??he(this,Fu,(async()=>{var t;const e=new WC((await this.canvasInfo()).canvas);return(t=this.model)==null||t.twistySceneModel.dragInput.addFreshListener(n=>{let r=!1;switch(n){case"auto":{e.start(),r=!0;break}case"none":{e.stop();break}}this.contentWrapper.classList.toggle("drag-input-enabled",r)}),e})())},ku=new WeakMap,Bu=new WeakMap,ya=new WeakMap,_a=new WeakMap,Vu=new WeakMap,lv);an.define("twisty-3d-vantage",mf);function QC(i){return i.endsWith("v")||["x","y","z"].includes(i)?"Rotation":i.startsWith("2")||["M","E","S"].includes(i)?"Inner":"Outer"}var so;function eR(){if(so)return so;so={};const i=[...Object.keys(kc.moves),...Object.keys(kc.derivedMoves)];for(const e of i)so[e]=QC(e);return so}var dy={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function tR(i,e){const t=dy[i];if(!t)throw new Error(`Invalid metric for 3x3x3: ${i}`);const n=eR(),r=e.quantum.toString();if(!(r in n))throw new Error(`Invalid move for 3x3x3 ${i}: ${r}`);const s=n[r],{constantFactor:a,amountFactor:o,zeroAmount:l}=t[s];return e.amount===0?l:a+o*Math.abs(e.amount)}var Cl=class extends Is{constructor(i){super(),this.metric=i}traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){const e=i.alg;return this.traverseAlg(e)*Math.abs(i.amount)}traverseMove(i){return this.metric(i)}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 0}traverseNewline(i){return 0}traverseLineComment(i){return 0}},nR=class extends Is{traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){const e=i.alg;return this.traverseAlg(e)*Math.abs(i.amount)}traverseMove(i){return 1}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 1}traverseNewline(i){return 1}traverseLineComment(i){return 1}};function fy(i){return"A"<=i&&i<="Z"}function py(i){const e=i.family;return fy(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function iR(i){return 1}function my(i){const e=i.family;return fy(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function rR(i){return Math.abs(i.amount)*my(i)}Fn(Cl,[py]);var sR=Fn(Cl,[iR]),aR=Fn(Cl,[rR]),oR=Fn(Cl,[my]),lR=Fn(nR,[py]);function cR(i,e,t){if(i.id==="3x3x3"){if(e in dy)return Fn(Cl,[n=>tR(e,n)])(t)}else switch(e){case"ETM":return sR(t);case"RBTM":{if(i.pg)return oR(t);break}case"RBQTM":{if(i.pg)return aR(t);break}}throw new Error("Unsupported puzzle or metric.")}var uR=class extends Is{traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){return this.traverseAlg(i.alg)*Math.abs(i.amount)}traverseMove(i){return 1}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 1}traverseNewline(i){return 0}traverseLineComment(i){return 0}},hR=Fn(uR),gy={id:"2x2x2",fullName:"2×2×2 Cube",kpuzzle:Tt(async()=>{const i=new tr((await pt(async()=>{const{cube2x2x2JSON:e}=await import("./Ce2s_gCL.js");return{cube2x2x2JSON:e}},[],import.meta.url)).cube2x2x2JSON);return i.definition.experimentalIsPatternSolved=_M,i}),svg:async()=>(await pt(async()=>{const{cube2x2x2SVG:i}=await import("./Ce2s_gCL.js");return{cube2x2x2SVG:i}},[],import.meta.url)).cube2x2x2SVG,llSVG:Tt(async()=>(await pt(async()=>{const{cube2x2x2LLSVG:i}=await import("./Ce2s_gCL.js");return{cube2x2x2LLSVG:i}},[],import.meta.url)).cube2x2x2LLSVG),pg:Tt(async()=>Pf("2x2x2")),stickeringMask:i=>Ao(gy,i),stickerings:()=>lh("2x2x2",{use3x3x3Fallbacks:!0})},dR={KeyI:new N("R"),KeyK:new N("R'"),KeyW:new N("B"),KeyO:new N("B'"),KeyS:new N("D"),KeyL:new N("D'"),KeyD:new N("L"),KeyE:new N("L'"),KeyJ:new N("U"),KeyF:new N("U'"),KeyH:new N("F"),KeyG:new N("F'"),KeyC:new N("l"),KeyR:new N("l'"),KeyU:new N("r"),KeyM:new N("r'"),KeyX:new N("d"),Comma:new N("d'"),KeyT:new N("x"),KeyY:new N("x"),KeyV:new N("x'"),KeyN:new N("x'"),Semicolon:new N("y"),KeyA:new N("y'"),KeyP:new N("z"),KeyQ:new N("z'"),KeyZ:new N("M'"),KeyB:new N("M"),Period:new N("M'"),Backquote:new pn};function Wt(i,e,t,n){const r=[];for(const s of i){const a=N.fromString(s),{family:o,amount:l}=a;if(![-1,1].includes(l))throw new Error("Invalid config move");r.push({family:o,direction:l,type:e,from:t,to:n})}return r}var Rs={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Wt(["R"],0,0,3),...Wt(["L'"],1,0,3),...Wt(["r","Rw"],2,0,2),...Wt(["l'","Lw'"],3,0,2),...Wt(["M'"],4,1,2),...Wt(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Wt(["U"],0,0,3),...Wt(["D'"],1,0,3),...Wt(["u","Uw"],2,0,2),...Wt(["d'","Dw'"],3,0,2),...Wt(["E'"],4,1,2),...Wt(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...Wt(["F"],0,0,3),...Wt(["B'"],1,0,3),...Wt(["f","Fw"],2,0,3),...Wt(["b'","Bw'"],3,0,3),...Wt(["S"],4,1,2),...Wt(["z","Fv","Bv'"],5,0,3)]}},Yo={};for(const[i,e]of Object.entries(Rs))for(const t of e.moveSourceInfos)Yo[t.family]={axis:i,moveSourceInfo:t};var vy={},cv;for(const i of Object.keys(Rs)){const e={};vy[i]=e;for(const t of Rs[i].moveSourceInfos)(e[cv=t.type]??(e[cv]=[])).push(t)}var xy={};for(const i of Object.keys(Rs)){const e=new Map;xy[i]=e;for(const t of Rs[i].moveSourceInfos)e.get(t.from)||e.set(t.from,t)}function Cg(i,e){var n;const t=(n=vy[i][e])==null?void 0:n[0];if(!t)throw new Error(`Could not find a reference move (axis: ${i}, move source type: ${e})`);return t}var fR=(i,e)=>Yo[i.family].axis===Yo[e.family].axis;function pR(i,e,t,n){if(e+1===t){const h=xy[i].get(e);if(h)return new N(new Gi(h.family),n*h.direction)}const r=Rs[i],{sliceDiameter:s}=r;if(e===0&&t===s){const h=Cg(i,5);return new N(new Gi(h.family),n*h.direction)}const a=e+t>s;a&&([e,t]=[s-t,s-e]);let o=e+1,l=t;const c=o===l;c&&(l=null),o===1&&(o=null),c&&o===1&&(l=null),!c&&l===2&&(l=null);const d=Cg(i,c?a?1:0:a?3:2);return new N(new Gi(d.family,l,o),n*d.direction)}function mR(i,e=!0){if(i.length===0)return[];const t=Yo[i[0].family].axis,n=Rs[t],{sliceDiameter:r}=n,s=new Map;let a=null;function o(h,f){let p=(s.get(h)??0)+f;e&&(p=p%4+5%4-1),p===0?s.delete(h):s.set(h,p)}let l=0;for(const h of Array.from(i).reverse()){l++;const{moveSourceInfo:f}=Yo[h.family],p=h.amount*f.direction;switch(f.type){case 0:{const v=(h.innerLayer??1)-1;o(v,p),o(v+1,-p);break}case 1:{const v=r-(h.innerLayer??1);o(v,p),o(v+1,-p);break}case 2:{o((h.outerLayer??1)-1,p),o(h.innerLayer??2,-p);break}case 3:{o(r-(h.innerLayer??2),p),o(r-((h.outerLayer??1)-1),-p);break}case 4:{o(f.from,p),o(f.to,-p);break}case 5:{o(0,p),o(r,-p);break}}[0,2].includes(s.size)&&(a={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!a)return i;let[c,u]=a.sliceDeltas.keys();c>u&&([c,u]=[u,c]);const d=a.sliceDeltas.get(c);return[...i.slice(0,-a.suffixLength),...d!==0?[pR(t,c,u,d)]:[]]}var gR={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:fR,simplifySameAxisMoves:mR}},Mp={id:"3x3x3",fullName:"3×3×3 Cube",inventedBy:["Ernő Rubik"],inventionYear:1974,kpuzzle:Tt(async()=>Zv),svg:Tt(async()=>(await pt(async()=>{const{cube3x3x3SVG:i}=await import("./fR7zXD4k.js");return{cube3x3x3SVG:i}},[],import.meta.url)).cube3x3x3SVG),llSVG:Tt(async()=>(await pt(async()=>{const{cube3x3x3LLSVG:i}=await import("./fR7zXD4k.js");return{cube3x3x3LLSVG:i}},[],import.meta.url)).cube3x3x3LLSVG),llFaceSVG:Tt(async()=>(await pt(async()=>{const{cube3x3x3LLFaceSVG:i}=await import("./fR7zXD4k.js");return{cube3x3x3LLFaceSVG:i}},[],import.meta.url)).cube3x3x3LLFaceSVG),pg:Tt(async()=>Pf("3x3x3")),stickeringMask:i=>Ao(Mp,i),stickerings:()=>lh("3x3x3"),puzzleSpecificSimplifyOptions:gR,keyMapping:async()=>dR},yy=new co({id:"4x4x4",fullName:"4×4×4 Cube"});yy.llSVG=Tt(async()=>(await pt(async()=>{const{cube4x4x4LLSVG:i}=await import("./BNnOy5ao.js");return{cube4x4x4LLSVG:i}},[],import.meta.url)).cube4x4x4LLSVG);async function _y(i,e){const t=await i.kpuzzle(),n=new Hv(t),r=new Wv(t),s=()=>r.and([r.move("U"),r.not(r.or(r.moves(["F","BL","BR"])))]),a=()=>r.and([r.move("U"),r.not(r.move("F"))]),o=()=>r.or([a(),r.and([r.move("F"),r.not(r.or(r.moves(["U","BL","BR"])))])]),l=()=>r.not(r.or([r.and([r.move("U"),r.move("F")]),r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])])),c=()=>r.not(r.or([r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])]));switch(e){case"full":break;case"experimental-fto-fc":{n.set(r.not(s()),"Ignored");break}case"experimental-fto-f2t":{n.set(r.not(a()),"Ignored"),n.set(s(),"Dim");break}case"experimental-fto-sc":{n.set(r.not(o()),"Ignored"),n.set(a(),"Dim");break}case"experimental-fto-l2c":{n.set(r.not(l()),"Ignored"),n.set(o(),"Dim");break}case"experimental-fto-lbt":{n.set(r.not(c()),"Ignored"),n.set(l(),"Dim");break}case"experimental-fto-l3t":{n.set(c(),"Dim");break}default:console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),"Dim")}return n.toStickeringMask()}async function vR(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var My={KeyI:new N("R"),KeyK:new N("R'"),KeyW:new N("B"),KeyO:new N("B'"),KeyS:new N("D"),KeyL:new N("D'"),KeyD:new N("L"),KeyE:new N("L'"),KeyJ:new N("U"),KeyF:new N("U'"),KeyH:new N("F"),KeyG:new N("F'"),KeyN:new N("Rv'"),KeyC:new N("l"),KeyR:new N("l'"),KeyU:new N("r"),KeyM:new N("r'"),KeyX:new N("d"),Comma:new N("d'"),KeyT:new N("Lv'"),KeyY:new N("Rv"),KeyV:new N("Lv"),Semicolon:new N("Uv"),KeyA:new N("Uv'"),KeyP:new N("BR'"),KeyQ:new N("BL"),KeyZ:new N("BL'"),KeyB:new N("T"),Period:new N("BR"),Backquote:new pn},xR=class extends Sr{constructor(){super({pgID:"skewb diamond",id:"baby_fto",fullName:"Baby FTO",inventedBy:["Uwe Mèffert"],setOrientationModTo1ForPiecesOfOrbits:["CENTERS"]});F(this,"svg",Tt(async()=>(await pt(async()=>{const{babyFTOSVG:e}=await import("./cOWAxRTA.js");return{babyFTOSVG:e}},[],import.meta.url)).babyFTOSVG));F(this,"keyMapping",async()=>My)}stickeringMask(e){return _y(this,e)}},yR=new xR,_R={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{clockJSON:i}=await import("./Ce2s_gCL.js");return{clockJSON:i}},[],import.meta.url)).clockJSON)),svg:Tt(async()=>(await pt(async()=>{const{clockSVG:i}=await import("./Ce2s_gCL.js");return{clockSVG:i}},[],import.meta.url)).clockSVG)},MR=class extends Sr{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});F(this,"stickerings",vR);F(this,"svg",Tt(async()=>(await pt(async()=>{const{ftoSVG:e}=await import("./cOWAxRTA.js");return{ftoSVG:e}},[],import.meta.url)).ftoSVG));F(this,"keyMapping",async()=>My)}stickeringMask(e){return _y(this,e)}},wR=new MR,Rg="d f 0.56",SR={id:"kilominx",fullName:"Kilominx",kpuzzle:Tt(()=>$v(Rg,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>Bc(Rg,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:Tt(async()=>(await pt(async()=>{const{kilominxSVG:i}=await import("./cOWAxRTA.js");return{kilominxSVG:i}},[],import.meta.url)).kilominxSVG)},bR={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{loopoverJSON:i}=await import("./cOWAxRTA.js");return{loopoverJSON:i}},[],import.meta.url)).loopoverJSON)),svg:async()=>(await pt(async()=>{const{loopoverSVG:i}=await import("./cOWAxRTA.js");return{loopoverSVG:i}},[],import.meta.url)).loopoverSVG};async function TR(i,e){return(await wy()).includes(e)?Ao(i,e):(console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),Ao(i,"full"))}var AR=Lf(()=>lh("megaminx"));function wy(){return AR}var ER={KeyI:new N("R"),KeyK:new N("R'"),KeyW:new N("B"),KeyO:new N("B'"),KeyS:new N("FR"),KeyL:new N("FR'"),KeyD:new N("L"),KeyE:new N("L'"),KeyJ:new N("U"),KeyF:new N("U'"),KeyH:new N("F"),KeyG:new N("F'"),KeyC:new N("Lw"),KeyR:new N("Lw'"),KeyU:new N("Rw"),KeyM:new N("Rw'"),KeyX:new N("d"),Comma:new N("d'"),KeyT:new N("Rv"),KeyY:new N("Rv"),KeyV:new N("Rv'"),KeyN:new N("Rv'"),Semicolon:new N("y"),KeyA:new N("y'"),KeyP:new N("z"),KeyQ:new N("z'"),KeyZ:new N("2L'"),KeyB:new N("2R"),Period:new N("2R'"),Backquote:new pn},CR=class extends Sr{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});F(this,"stickerings",wy);F(this,"llSVG",Tt(async()=>(await pt(async()=>{const{megaminxLLSVG:e}=await import("./Cm8jQJ-N.js");return{megaminxLLSVG:e}},[],import.meta.url)).megaminxLLSVG));F(this,"keyMapping",async()=>ER)}stickeringMask(e){return TR(this,e)}},RR=new CR,IR={id:"melindas2x2x2x2",fullName:"Melinda's 2×2×2×2",inventedBy:["Melinda Green"],kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{melindas2x2x2x2OrbitJSON:i}=await import("./Ce2s_gCL.js");return{melindas2x2x2x2OrbitJSON:i}},[],import.meta.url)).melindas2x2x2x2OrbitJSON)),svg:Tt(async()=>(await pt(async()=>{const{melindas2x2x2x2OrbitSVG:i}=await import("./Ce2s_gCL.js");return{melindas2x2x2x2OrbitSVG:i}},[],import.meta.url)).melindas2x2x2x2OrbitSVG)},LR=class extends Sr{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});F(this,"svg",Tt(async()=>(await pt(async()=>{const{pyraminxSVG:e}=await import("./Ce2s_gCL.js");return{pyraminxSVG:e}},[],import.meta.url)).pyraminxSVG))}},PR=new LR,DR={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{rediCubeJSON:i}=await import("./cOWAxRTA.js");return{rediCubeJSON:i}},[],import.meta.url)).rediCubeJSON)),svg:async()=>(await pt(async()=>{const{rediCubeSVG:i}=await import("./cOWAxRTA.js");return{rediCubeSVG:i}},[],import.meta.url)).rediCubeSVG},NR={id:"square1",fullName:"Square-1",inventedBy:["Karel Hršel","Vojtech Kopský"],inventionYear:1990,kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{sq1HyperOrbitJSON:i}=await import("./Ce2s_gCL.js");return{sq1HyperOrbitJSON:i}},[],import.meta.url)).sq1HyperOrbitJSON)),svg:Tt(async()=>(await pt(async()=>{const{sq1HyperOrbitSVG:i}=await import("./Ce2s_gCL.js");return{sq1HyperOrbitSVG:i}},[],import.meta.url)).sq1HyperOrbitSVG)},UR={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:Tt(async()=>new tr((await pt(async()=>{const{triQuadJSON:i}=await import("./Ce2s_gCL.js");return{triQuadJSON:i}},[],import.meta.url)).triQuadJSON)),svg:Tt(async()=>(await pt(async()=>{const{triQuadSVG:i}=await import("./Ce2s_gCL.js");return{triQuadSVG:i}},[],import.meta.url)).triQuadSVG)},Sy={"3x3x3":Mp,"2x2x2":gy,"4x4x4":yy,"5x5x5":new co({id:"5x5x5",fullName:"5×5×5 Cube"}),"6x6x6":new co({id:"6x6x6",fullName:"6×6×6 Cube"}),"7x7x7":new co({id:"7x7x7",fullName:"7×7×7 Cube"}),"40x40x40":new co({id:"40x40x40",fullName:"40×40×40 Cube"}),clock:_R,megaminx:RR,pyraminx:PR,skewb:new Sr({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:NR,fto:wR,gigaminx:new Sr({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Sr({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:SR,redi_cube:DR,melindas2x2x2x2:IR,loopover:bR,tri_quad:UR,baby_fto:yR};function xf(i,e){if(i===e)return!0;if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function Ig(i,e,t){if(i===e)return!0;if(i.length!==e.length)return!1;for(let n=0;n<i.length;n++)if(!t(i[n],e[n]))return!1;return!0}function yf(i,e,t){return Fv(i,t-e,e)}var zR=class{constructor(i){F(this,"catchingUp",!1);F(this,"pendingFrame",!1);F(this,"tempoScale");F(this,"scheduler",new Ga(this.animFrame.bind(this)));F(this,"catchUpMs",500);F(this,"lastTimestamp",0);this.model=i,i.tempoScale.addFreshListener(e=>{this.tempoScale=e})}start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}animFrame(i){this.scheduler.requestAnimFrame();const e=this.tempoScale*(i-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=i,this.model.catchUpMove.set((async()=>{const t=await this.model.catchUpMove.get();if(t.move===null)return t;const n=t.amount+e;return n>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:t.move,amount:n})})())}},nl,_f,Gu,uv,OR=(uv=class{constructor(i,e){J(this,nl);F(this,"playing",!1);F(this,"direction",1);F(this,"catchUpHelper");F(this,"model");F(this,"lastDatestamp",0);F(this,"lastTimestampPromise");F(this,"scheduler",new Ga(this.animFrame.bind(this)));J(this,Gu,new Hh);this.delegate=e,this.model=i,this.lastTimestampPromise=Qe(this,nl,_f).call(this),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new zR(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}async onPlayingProp(i){i.playing!==this.playing&&(i.playing?this.play(i):this.pause())}async onCatchUpMoveProp(i){const e=i.move!==null;e!==this.catchUpHelper.catchingUp&&(e?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}jumpToStart(i){this.model.timestampRequest.set("start"),this.pause(),i!=null&&i.flash&&this.delegate.flash()}jumpToEnd(i){this.model.timestampRequest.set("end"),this.pause(),i!=null&&i.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}async play(i){const e=(i==null?void 0:i.direction)??1,t=await this.model.coarseTimelineInfo.get();((i==null?void 0:i.autoSkipToOtherEndIfStartingAtBoundary)??!0)&&(e===1&&t.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),e===-1&&t.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:e,untilBoundary:(i==null?void 0:i.untilBoundary)??"entire-timeline",loop:(i==null?void 0:i.loop)??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=Qe(this,nl,_f).call(this),this.scheduler.requestAnimFrame()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}async animFrame(i){this.playing&&this.scheduler.requestAnimFrame();const e=this.lastDatestamp,t=await b(this,Gu).queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[n,r,s,a,o]=t;if(!n.playing){this.playing=!1;return}let l=o.earliestEnd;(o.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(l=s.end);let c=o.latestStart;(o.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(c=s.start);let u=(i-e)*this.direction*a;u=Math.max(u,1),u*=n.direction;let d=r+u,h=null;d>=l?n.loop?d=yf(d,s.start,s.end):(d===s.end?h="end":d=l,this.playing=!1,this.model.playingInfo.set({playing:!1})):d<=c&&(n.loop?d=yf(d,s.start,s.end):(d===s.start?h="start":d=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=i,this.lastTimestampPromise=Promise.resolve(d),this.model.timestampRequest.set(h??d)}},nl=new WeakSet,_f=async function(){return(await this.model.detailedTimelineInfo.get()).timestamp},Gu=new WeakMap,uv),FR=class{constructor(i,e){F(this,"animationController");this.model=i,this.animationController=new OR(i,e)}jumpToStart(i){this.animationController.jumpToStart(i)}jumpToEnd(i){this.animationController.jumpToEnd(i)}togglePlay(i){typeof i>"u"&&this.animationController.playPause(),i?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){const i=document.createElement("a");i.href=await this.model.twizzleLink(),i.target="_blank",i.click()}},kR={"bottom-row":!0,none:!0},BR=class extends Mt{getDefaultValue(){return"auto"}},wp=new On;wp.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Tc="http://www.w3.org/2000/svg",Lg="data-copy-id",Pg=0;function VR(){return Pg+=1,`svg${Pg.toString()}`}var GR={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},HR=class{constructor(i,e,t,n=!1){F(this,"wrapperElement");F(this,"svgElement");F(this,"gradientDefs");F(this,"originalColors",{});F(this,"gradients",{});F(this,"svgID");if(this.kpuzzle=i,this.showUnknownOrientations=n,!e)throw new Error(`No SVG definition for puzzle type: ${i.name()}`);this.svgID=VR(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=e;const r=this.wrapperElement.querySelector("svg");if(!r)throw new Error("Could not get SVG element");if(this.svgElement=r,Tc!==r.namespaceURI)throw new Error("Unexpected XML namespace");r.style.maxWidth="100%",r.style.maxHeight="100%",this.gradientDefs=document.createElementNS(Tc,"defs"),r.insertBefore(this.gradientDefs,r.firstChild);for(const s of i.definition.orbits)for(let a=0;a<s.numPieces;a++)for(let o=0;o<s.numOrientations;o++){const l=this.elementID(s.orbitName,a,o),c=this.elementByID(l);let u=c==null?void 0:c.style.fill;t?(()=>{const d=t.orbits;if(!d)return;const h=d[s.orbitName];if(!h)return;const f=h.pieces[a];if(!f)return;const p=f.facelets[o];if(!p)return;const v=typeof p=="string"?p:p==null?void 0:p.mask,g=GR[v];typeof g=="string"?u=g:g&&(u=g[u])})():u=c==null?void 0:c.style.fill,this.originalColors[l]=u,this.gradients[l]=this.newGradient(l,u),this.gradientDefs.appendChild(this.gradients[l]),c==null||c.setAttribute("style",`fill: url(#grad-${this.svgID}-${l})`)}for(const s of Array.from(r.querySelectorAll(`[${Lg}]`))){const a=s.getAttribute(Lg);s.setAttribute("style",`fill: url(#grad-${this.svgID}-${a})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}drawPattern(i,e,t){this.draw(i,e,t)}draw(i,e,t){var r;const n=e==null?void 0:e.experimentalToTransformation();if(!i)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(const s of i.kpuzzle.definition.orbits){const a=i.patternData[s.orbitName],o=n?n.transformationData[s.orbitName]:null;for(let l=0;l<s.numPieces;l++)for(let c=0;c<s.numOrientations;c++){const u=this.elementID(s.orbitName,l,c),d=this.elementID(s.orbitName,a.pieces[l],(s.numOrientations-a.orientation[l]+c)%s.numOrientations);let h=!1;if(o){const f=this.elementID(s.orbitName,o.permutation[l],(s.numOrientations-o.orientationDelta[l]+c)%s.numOrientations);d===f&&(h=!0),t=t||0;const p=100*(1-t*t*(2-t*t));this.gradients[u].children[0].setAttribute("stop-color",this.originalColors[d]),this.gradients[u].children[0].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[u].children[1].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[u].children[2].setAttribute("offset",`${p}%`),this.gradients[u].children[3].setAttribute("offset",`${p}%`),this.gradients[u].children[3].setAttribute("stop-color",this.originalColors[f])}else h=!0;h&&(this.showUnknownOrientations&&((r=a.orientationMod)==null?void 0:r[l])===1?(this.gradients[u].children[0].setAttribute("stop-color","#000"),this.gradients[u].children[0].setAttribute("offset","5%"),this.gradients[u].children[1].setAttribute("offset","5%"),this.gradients[u].children[2].setAttribute("offset","20%"),this.gradients[u].children[3].setAttribute("offset","20%"),this.gradients[u].children[3].setAttribute("stop-color",this.originalColors[d])):(this.gradients[u].children[0].setAttribute("stop-color",this.originalColors[d]),this.gradients[u].children[0].setAttribute("offset","100%"),this.gradients[u].children[1].setAttribute("offset","100%"),this.gradients[u].children[2].setAttribute("offset","100%"),this.gradients[u].children[3].setAttribute("offset","100%")))}}}newGradient(i,e){const t=document.createElementNS(Tc,"radialGradient");t.setAttribute("id",`grad-${this.svgID}-${i}`),t.setAttribute("r","70.7107%");const n=[{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e}];for(const r of n){const s=document.createElementNS(Tc,"stop");s.setAttribute("offset",`${r.offset}%`),s.setAttribute("stop-color",r.color),s.setAttribute("stop-opacity","1"),t.appendChild(s)}return t}elementID(i,e,t){return`${i}-l${e}-o${t}`}elementByID(i){return this.wrapperElement.querySelector(`#${i}`)}},by=new On;by.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`);var Ma,wa,hv,Ty=(hv=class extends qn{constructor(e,t,n,r,s){var a;super();F(this,"svgWrapper");F(this,"scheduler",new Ga(this.render.bind(this)));J(this,Ma,null);J(this,wa,new El);this.model=e,this.kpuzzle=t,this.svgSource=n,this.options=r,this.puzzleLoader=s,this.addCSS(by),this.resetSVG(),b(this,wa).addListener(this.model.puzzleID,o=>{(s==null?void 0:s.id)!==o&&this.disconnect()}),b(this,wa).addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),(a=this.options)!=null&&a.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}disconnect(){b(this,wa).disconnect()}onPositionChange(e){var t;try{if(e.movesInProgress.length>0){const n=e.movesInProgress[0].move;let r=n;e.movesInProgress[0].direction===-1&&(r=n.invert());const s=e.pattern.applyMove(r);this.svgWrapper.draw(e.pattern,s,e.movesInProgress[0].fraction)}else this.svgWrapper.draw(e.pattern),he(this,Ma,e)}catch(n){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",(t=this.puzzleLoader)==null?void 0:t.id,n),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(e){this.resetSVG(e)}resetSVG(e){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new HR(this.kpuzzle,this.svgSource,e),this.addElement(this.svgWrapper.wrapperElement),b(this,Ma)&&this.onPositionChange(b(this,Ma)))}render(){}},Ma=new WeakMap,wa=new WeakMap,hv);an.define("twisty-2d-puzzle",Ty);var il,Hu,dv,WR=(dv=class{constructor(i,e,t,n){J(this,il,new El);J(this,Hu,null);this.model=i,this.schedulable=e,this.puzzleLoader=t,this.effectiveVisualization=n,this.twisty2DPuzzle(),b(this,il).addListener(this.model.twistySceneModel.stickeringMask,async r=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(r)})}disconnect(){b(this,il).disconnect()}scheduleRender(){}async twisty2DPuzzle(){return b(this,Hu)??he(this,Hu,(async()=>{const i=this.effectiveVisualization==="experimental-2D-LL-face"?this.puzzleLoader.llFaceSVG():this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new Ty(this.model,await this.puzzleLoader.kpuzzle(),await i,{},this.puzzleLoader)})())}},il=new WeakMap,Hu=new WeakMap,dv),rl,Wu,gr,fv,Ay=(fv=class extends qn{constructor(e,t){super();J(this,rl,new El);J(this,Wu);J(this,gr,null);this.model=e,this.effectiveVisualization=t}disconnect(){b(this,rl).disconnect()}async connectedCallback(){this.addCSS(wp),this.model&&b(this,rl).addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}async scene(){return b(this,Wu)??he(this,Wu,(async()=>new(await yi).Scene)())}scheduleRender(){var e;(e=b(this,gr))==null||e.scheduleRender()}currentTwisty2DPuzzleWrapper(){return b(this,gr)}async setCurrentTwisty2DPuzzleWrapper(e){const t=b(this,gr);he(this,gr,e),t==null||t.disconnect();const n=e.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await n)}async onPuzzleLoader(e){var n;(n=b(this,gr))==null||n.disconnect();const t=new WR(this.model.twistyPlayerModel,this,e,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(t)}},rl=new WeakMap,Wu=new WeakMap,gr=new WeakMap,fv);an.define("twisty-2d-scene-wrapper",Ay);var vr,pv,Wh=(pv=class{constructor(i,e,t){J(this,vr,null);this.elem=i,this.prefix=e,this.validSuffixes=t}clearValue(){b(this,vr)&&this.elem.contentWrapper.classList.remove(b(this,vr)),he(this,vr,null)}setValue(i){if(!this.validSuffixes.includes(i))throw new Error(`Invalid suffix: ${i}`);const e=`${this.prefix}${i}`,t=b(this,vr)!==e;return t&&(this.clearValue(),this.elem.contentWrapper.classList.add(e),he(this,vr,e)),t}},vr=new WeakMap,pv),sl,mv,Ey=(mv=class{constructor(){J(this,sl);F(this,"reject");F(this,"promise",new Promise((i,e)=>{he(this,sl,i),this.reject=e}))}handleNewValue(i){b(this,sl).call(this,i)}},sl=new WeakMap,mv),Qn,Xu,gv,Cy=(gv=class extends EventTarget{constructor(e,t,n,r){super();J(this,Qn,new El);J(this,Xu,null);this.model=e,this.schedulable=t,this.puzzleLoader=n,this.visualizationStrategy=r,this.twisty3DPuzzle(),b(this,Qn).addListener(this.model.puzzleLoader,s=>{this.puzzleLoader.id!==s.id&&this.disconnect()}),b(this,Qn).addListener(this.model.legacyPosition,async s=>{try{(await this.twisty3DPuzzle()).onPositionChange(s),this.scheduleRender()}catch{this.disconnect()}}),b(this,Qn).addListener(this.model.twistySceneModel.hintFacelet,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:s==="auto"?"floating":s}),this.scheduleRender()}),b(this,Qn).addListener(this.model.twistySceneModel.foundationDisplay,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:s!=="none"}),this.scheduleRender()}),b(this,Qn).addListener(this.model.twistySceneModel.stickeringMask,async s=>{(await this.twisty3DPuzzle()).setStickeringMask(s),this.scheduleRender()}),b(this,Qn).addListener(this.model.twistySceneModel.faceletScale,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:s}),this.scheduleRender()}),b(this,Qn).addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async s=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(s[0].specialBehaviour==="picture",s[1],s[2]),this.scheduleRender())})}disconnect(){b(this,Qn).disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}async twisty3DPuzzle(){return b(this,Xu)??he(this,Xu,(async()=>{const e=ry();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){const[t,n,r,s]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get()]);return(await e).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:t,hintSprite:n,experimentalStickeringMask:r,initialHintFaceletsAnimation:s})}else{const[t,n,r,s]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),a=(await e).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,t==="auto"?"floating":t,s,this.puzzleLoader.id==="kilominx");return a.then(o=>o.experimentalUpdateTexture(!0,n??void 0,r??void 0)),a}})())}async raycastMove(e,t){const n=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in n)){console.info("not PG3D! skipping raycast");return}const r=n.experimentalGetControlTargets(),[s,a]=await Promise.all([e,this.model.twistySceneModel.movePressCancelOptions.get()]),o=s.intersectObjects(r);if(o.length>0){const l=n.getClosestMoveToAxis(o[0].point,t);l?this.model.experimentalAddMove(l.move,{cancel:a}):console.info("Skipping move!")}}},Qn=new WeakMap,Xu=new WeakMap,gv),qu,Sa,Ni,Yu,fs,Ui,al,$u,vv,Mf=(vv=class extends qn{constructor(e){super();J(this,qu,new Wh(this,"back-view-",["auto","none","side-by-side","top-right"]));J(this,Sa,new El);J(this,Ni,null);J(this,Yu);J(this,fs,new Set);J(this,Ui,null);J(this,al,new Ey);J(this,$u,new Hh);this.model=e}disconnect(){b(this,Sa).disconnect()}async connectedCallback(){this.addCSS(wp);const e=new mf(this.model,this);this.addVantage(e),this.model&&(b(this,Sa).addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),b(this,Sa).addListener(this.model.backView,this.onBackView.bind(this))),this.scheduleRender()}setBackView(e){const t=["side-by-side","top-right"].includes(e),n=b(this,Ni)!==null;b(this,qu).setValue(e),t?n||(he(this,Ni,new mf(this.model,this,{backView:!0})),this.addVantage(b(this,Ni)),this.scheduleRender()):b(this,Ni)&&(this.removeVantage(b(this,Ni)),he(this,Ni,null))}onBackView(e){this.setBackView(e)}async onPress(e){const t=b(this,Ui);if(!t){console.info("no wrapper; skipping scene wrapper press!");return}const n=(async()=>{const[r,s]=await Promise.all([e.detail.cameraPromise,yi]),a=new s.Raycaster,o=new(await yi).Vector2(e.detail.pressInfo.normalizedX,e.detail.pressInfo.normalizedY);return a.setFromCamera(o,r),a})();t.raycastMove(n,{invert:!e.detail.pressInfo.rightClick,depth:e.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":e.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}async scene(){return b(this,Yu)??he(this,Yu,(async()=>new(await yi).Scene)())}addVantage(e){e.addEventListener("press",this.onPress.bind(this)),b(this,fs).add(e),this.contentWrapper.appendChild(e)}removeVantage(e){var t;b(this,fs).delete(e),e.remove(),e.disconnect(),(t=b(this,Ui))==null||t.disconnect()}experimentalVantages(){return b(this,fs).values()}scheduleRender(){for(const e of b(this,fs))e.scheduleRender()}async setCurrentTwisty3DPuzzleWrapper(e,t){const n=b(this,Ui);try{he(this,Ui,t),n==null||n.disconnect(),e.add(await t.twisty3DPuzzle())}finally{n&&e.remove(await n.twisty3DPuzzle())}b(this,al).handleNewValue(t)}async experimentalTwisty3DPuzzleWrapper(){return b(this,Ui)||b(this,al).promise}async onPuzzle(e){var r;if(e[1]==="2D")return;(r=b(this,Ui))==null||r.disconnect();const[t,n]=await b(this,$u).queue(Promise.all([this.scene(),new Cy(this.model,this,e[0],e[1])]));this.setCurrentTwisty3DPuzzleWrapper(t,n)}},qu=new WeakMap,Sa=new WeakMap,Ni=new WeakMap,Yu=new WeakMap,fs=new WeakMap,Ui=new WeakMap,al=new WeakMap,$u=new WeakMap,vv);an.define("twisty-3d-scene-wrapper",Mf);var Ry=new On;Ry.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var Iy=new On;Iy.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var Et=typeof document>"u"?null:document,XR=(Et==null?void 0:Et.fullscreenEnabled)||!!(Et!=null&&Et.webkitFullscreenEnabled);function qR(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function Dg(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function YR(i){return i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen()}var $R=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],ZR=class extends At{derive(i){return{fullscreen:{enabled:XR,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!i.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!i.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(i.coarseTimelineInfo.atStart&&i.coarseTimelineInfo.atEnd),icon:i.coarseTimelineInfo.playing?"pause":"play",title:i.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!i.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!i.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:i.viewerLink==="none"}}}},Ng={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},Zu,Py,xv,Ly=(xv=class extends qn{constructor(e,t,n){super();J(this,Zu);F(this,"buttons",null);this.model=e,this.controller=t,this.defaultFullscreenElement=n}connectedCallback(){var t,n;this.addCSS(Ry);const e={};for(const r in Ng){const s=new Dy;e[r]=s,s.htmlButton.addEventListener("click",()=>Qe(this,Zu,Py).call(this,r)),this.addElement(s)}this.buttons=e,(t=this.model)==null||t.buttonAppearance.addFreshListener(this.update.bind(this)),(n=this.model)==null||n.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}async onFullscreenButton(){var e,t;if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(Dg()===this.defaultFullscreenElement)qR();else{(e=this.buttons)==null||e.fullscreen.setIcon("exit-fullscreen"),YR(await((t=this.model)==null?void 0:t.twistySceneModel.fullscreenElement.get())??this.defaultFullscreenElement);const n=()=>{var r;Dg()!==this.defaultFullscreenElement&&((r=this.buttons)==null||r.fullscreen.setIcon("enter-fullscreen"),window.removeEventListener("fullscreenchange",n))};window.addEventListener("fullscreenchange",n)}}async update(e){for(const t in Ng){const n=this.buttons[t],r=e[t];n.htmlButton.disabled=!r.enabled,n.htmlButton.title=r.title,n.setIcon(r.icon),n.hidden=!!r.hidden}}updateColorScheme(e){for(const t of Object.values(this.buttons??{}))t.updateColorScheme(e)}},Zu=new WeakSet,Py=function(e){var t,n,r,s,a,o;switch(e){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{(t=this.controller)==null||t.jumpToStart({flash:!0});break}case"play-step-backwards":{(n=this.controller)==null||n.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{(r=this.controller)==null||r.togglePlay();break}case"play-step":{(s=this.controller)==null||s.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{(a=this.controller)==null||a.jumpToEnd({flash:!0});break}case"twizzle-link":{(o=this.controller)==null||o.visitTwizzleLink();break}default:throw new Error("Missing command")}},xv);an.define("twisty-buttons",Ly);var Ku,yv,Dy=(yv=class extends qn{constructor(){super(...arguments);F(this,"htmlButton",document.createElement("button"));J(this,Ku,new Wh(this,"svg-",$R))}updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}connectedCallback(){this.addCSS(Iy),this.addElement(this.htmlButton)}setIcon(e){b(this,Ku).setValue(e)}},Ku=new WeakMap,yv);an.define("twisty-button",Dy);var Ny=new On;Ny.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);Et==null||Et.addEventListener("mousedown",i=>{i.which},!0);Et==null||Et.addEventListener("mouseup",i=>{i.which},!0);Et==null||Et.addEventListener("mousedown",()=>{},!1);Et==null||Et.addEventListener("mousemove",Uy,!1);Et==null||Et.addEventListener("mouseenter",Uy,!1);function Uy(i){i.pageY}var ju,_v,zy=(_v=class extends qn{constructor(e,t){super();J(this,ju,null);this.model=e,this.controller=t}async onDetailedTimelineInfo(e){const t=await this.inputElem();t.min=e.timeRange.start.toString(),t.max=e.timeRange.end.toString(),t.disabled=t.min===t.max,t.value=e.timestamp.toString()}async connectedCallback(){var e;this.addCSS(Ny),this.addElement(await this.inputElem()),(e=this.model)==null||e.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}async inputElem(){return b(this,ju)??he(this,ju,(async()=>{var t;const e=document.createElement("input");return e.type="range",e.disabled=!0,(t=this.model)==null||t.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),e.addEventListener("input",this.onInput.bind(this)),e.addEventListener("keydown",this.onKeypress.bind(this)),e})())}async onInput(e){var r,s;const t=await this.inputElem();await this.slowDown(e,t);const n=parseInt(t.value);(r=this.model)==null||r.playingInfo.set({playing:!1}),(s=this.model)==null||s.timestampRequest.set(n)}onKeypress(e){var t,n;switch(e.key){case"ArrowLeft":case"ArrowRight":{(t=this.controller)==null||t.animationController.play({direction:e.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),e.preventDefault();break}case" ":{(n=this.controller)==null||n.togglePlay(),e.preventDefault();break}}}async slowDown(e,t){}},ju=new WeakMap,_v);an.define("twisty-scrubber",zy);var KR=null;async function Ug(i,e){const[{PerspectiveCamera:t,Scene:n},r,s,a,o,l,c]=await Promise.all([yi,await i.puzzleLoader.get(),await i.visualizationStrategy.get(),await i.twistySceneModel.stickeringRequest.get(),await i.twistySceneModel.stickeringMaskRequest.get(),await i.legacyPosition.get(),await i.twistySceneModel.orbitCoordinates.get()]),u=(e==null?void 0:e.width)??2048,d=(e==null?void 0:e.height)??2048,h=u/d,f=KR??(KR=await(async()=>new t(20,h,.1,20))()),p=new n,v=new Cy(i,{scheduleRender:()=>{}},r,s);p.add(await v.twisty3DPuzzle()),await cy(f,c);const m=(await ly(u,d,p,f)).toDataURL(),_=await Oy(i);return{dataURL:m,download:async y=>{Fy(m,y??_)}}}async function Oy(i){const[e,t]=await Promise.all([i.puzzleID.get(),i.alg.get()]);return`[${e}]${t.alg.experimentalNumChildAlgNodes()===0?"":` ${t.alg.toString()}`}`}function Fy(i,e,t="png"){const n=document.createElement("a");n.href=i,n.download=`${e}.${t}`,n.click()}var ky=new On;ky.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var zg=class extends Mt{getDefaultValue(){return null}},wf=class extends Dr{getDefaultValue(){return null}derive(i){return typeof i=="string"?new URL(i,location.href):i}},$o=class By{constructor(e){F(this,"warnings");F(this,"errors");this.warnings=Object.freeze((e==null?void 0:e.warnings)??[]),this.errors=Object.freeze((e==null?void 0:e.errors)??[]),Object.freeze(this)}add(e){return new By({warnings:this.warnings.concat((e==null?void 0:e.warnings)??[]),errors:this.errors.concat((e==null?void 0:e.errors)??[])})}log(){this.errors.length>0?console.error(`🚨 ${this.errors[0]}`):this.warnings.length>0?console.warn(`⚠️ ${this.warnings[0]}`):console.info("😎 No issues!")}};function Vy(i){try{const e=Se.fromString(i),t=[];return e.toString()!==i&&t.push("Alg is non-canonical!"),{alg:e,issues:new $o({warnings:t})}}catch(e){return{alg:new Se,issues:new $o({errors:[`Malformed alg: ${e.toString()}`]})}}}function jR(i,e){return i.alg.isIdentical(e.alg)&&xf(i.issues.warnings,e.issues.warnings)&&xf(i.issues.errors,e.issues.errors)}var Og=class extends Dr{getDefaultValue(){return{alg:new Se,issues:new $o}}canReuseValue(i,e){return jR(i,e)}async derive(i){return typeof i=="string"?Vy(i):{alg:i,issues:new $o}}},JR=class extends At{derive(i){return i.kpuzzle.algToTransformation(i.setupAlg.alg)}},QR=class extends At{derive(i){if(i.setupTransformation)return i.setupTransformation;switch(i.setupAnchor){case"start":return i.setupAlgTransformation;case"end":{const t=i.indexer.transformationAtIndex(i.indexer.numAnimatedLeaves()).invert();return i.setupAlgTransformation.applyTransformation(t)}default:throw new Error("Unimplemented!")}}},eI=class extends Mt{getDefaultValue(){return{move:null,amount:0}}canReuseValue(i,e){return i.move===e.move&&i.amount===e.amount}},tI=class extends At{derive(i){return{patternIndex:i.currentMoveInfo.patternIndex,movesFinishing:i.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:i.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(i,e){return i.patternIndex===e.patternIndex&&Ig(i.movesFinishing,e.movesFinishing,(t,n)=>t.isIdentical(n))&&Ig(i.movesFinished,e.movesFinished,(t,n)=>t.isIdentical(n))}},nI=class extends At{derive(i){var t;function e(n){return i.detailedTimelineInfo.atEnd&&i.catchUpMove.move!==null&&n.currentMoves.push({move:i.catchUpMove.move,direction:-1,fraction:1-i.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),n}if(i.indexer.currentMoveInfo)return e(i.indexer.currentMoveInfo(i.detailedTimelineInfo.timestamp));{const n=i.indexer.timestampToIndex(i.detailedTimelineInfo.timestamp),r={patternIndex:n,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(i.indexer.numAnimatedLeaves()>0){const s=(t=i.indexer.getAnimLeaf(n))==null?void 0:t.as(N);if(!s)return e(r);const a=i.indexer.indexToMoveStartTimestamp(n),o=i.indexer.moveDuration(n),l=o?(i.detailedTimelineInfo.timestamp-a)/o:0,c=a+o,u={move:s,direction:1,fraction:l,startTimestamp:a,endTimestamp:c};l===0?r.movesStarting.push(u):l===1?r.movesFinishing.push(u):(r.currentMoves.push(u),r.latestStart=Math.max(r.latestStart,a),r.earliestEnd=Math.min(r.earliestEnd,c))}return e(r)}}},iI=class extends At{derive(i){let e=i.indexer.transformationAtIndex(i.currentLeavesSimplified.patternIndex);e=i.anchoredStart.applyTransformation(e);for(const t of i.currentLeavesSimplified.movesFinishing)e=e.applyMove(t);for(const t of i.currentLeavesSimplified.movesFinished)e=e.applyMove(t);return e.toKPattern()}};function rs(i){switch(Math.abs(i)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var Gy=class extends Is{constructor(i=rs){super(),this.durationForAmount=i}traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){return i.amount*this.traverseAlg(i.alg)}traverseMove(i){return this.durationForAmount(i.amount)}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return this.durationForAmount(1)}traverseNewline(i){return this.durationForAmount(1)}traverseLineComment(i){return this.durationForAmount(0)}},rI=class{constructor(i,e){F(this,"moves");F(this,"durationFn",new Gy(rs));this.kpuzzle=i,this.moves=new Se(e.experimentalExpand())}getAnimLeaf(i){return Array.from(this.moves.childAlgNodes())[i]}indexToMoveStartTimestamp(i){const e=new Se(Array.from(this.moves.childAlgNodes()).slice(0,i));return this.durationFn.traverseAlg(e)}timestampToIndex(i){let e=0,t;for(t=0;t<this.numAnimatedLeaves();t++)if(e+=this.durationFn.traverseMove(this.getAnimLeaf(t)),e>=i)return t;return t}patternAtIndex(i){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(i))}transformationAtIndex(i){let e=this.kpuzzle.identityTransformation();for(const t of Array.from(this.moves.childAlgNodes()).slice(0,i))e=e.applyMove(t);return e}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return hR(this.moves)}moveDuration(i){return this.durationFn.traverseMove(this.getAnimLeaf(i))}},Fg={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function sI(i,e){return Fg[i.family[0].toLowerCase()]===Fg[e.family[0].toLowerCase()]}var aI=class extends Is{traverseAlg(i){const e=[];for(const t of i.childAlgNodes())e.push(this.traverseAlgNode(t));return Array.prototype.concat(...e)}traverseGroupingOnce(i){if(i.experimentalIsEmpty())return[];const e=[];for(const r of i.childAlgNodes()){if(!(r.is(N)||r.is(Na)||r.is(wr)))return this.traverseAlg(i);const s=r.as(N);s&&e.push(s)}let t=rs(e[0].amount);for(let r=0;r<e.length-1;r++){for(let s=1;s<e.length;s++)if(!sI(e[r],e[s]))return this.traverseAlg(i);t=Math.max(t,rs(e[r].amount))}const n=e.map(r=>({animLeafAlgNode:r,msUntilNext:0,duration:t}));return n[n.length-1].msUntilNext=t,n}traverseGrouping(i){const e=[],t=i.amount>0?i.alg:i.alg.invert();for(let n=0;n<Math.abs(i.amount);n++)e.push(this.traverseGroupingOnce(t));return Array.prototype.concat(...e)}traverseMove(i){const e=rs(i.amount);return[{animLeafAlgNode:i,msUntilNext:e,duration:e}]}traverseCommutator(i){const e=[],t=[i.A,i.B,i.A.invert(),i.B.invert()];for(const n of t)e.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...e)}traverseConjugate(i){const e=[],t=[i.A,i.B,i.A.invert()];for(const n of t)e.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...e)}traversePause(i){if(i.experimentalNISSGrouping)return[];const e=rs(1);return[{animLeafAlgNode:i,msUntilNext:e,duration:e}]}traverseNewline(i){return[]}traverseLineComment(i){return[]}},oI=Fn(aI);function lI(i){let e=0;return oI(i).map(n=>{const r={animLeaf:n.animLeafAlgNode,start:e,end:e+n.duration};return e+=n.msUntilNext,r})}var cI={"y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2":[{animLeaf:new N("y",-1),start:0,end:1e3},{animLeaf:new N("y",-1),start:1e3,end:2e3},{animLeaf:new N("U",-1),start:1e3,end:1600},{animLeaf:new N("E",1),start:1200,end:1800},{animLeaf:new N("D"),start:1400,end:2e3},{animLeaf:new N("R",2),start:2e3,end:3500},{animLeaf:new N("r",2),start:2e3,end:3500},{animLeaf:new N("F",2),start:3500,end:4200},{animLeaf:new N("B",2),start:3800,end:4500},{animLeaf:new N("U",1),start:4500,end:5500},{animLeaf:new N("E",1),start:4500,end:5500},{animLeaf:new N("D",-1),start:4500,end:5500},{animLeaf:new N("R",2),start:5500,end:6500},{animLeaf:new N("L",-2),start:5500,end:6500},{animLeaf:new N("z",2),start:5500,end:6500},{animLeaf:new N("S",2),start:6500,end:7500},{animLeaf:new N("U"),start:7500,end:8e3},{animLeaf:new N("D"),start:7750,end:8250},{animLeaf:new N("U"),start:8e3,end:8500},{animLeaf:new N("D"),start:8250,end:8750},{animLeaf:new N("S",2),start:8750,end:9250},{animLeaf:new N("F",-2),start:8750,end:1e4},{animLeaf:new N("B",2),start:8750,end:1e4}],"M' R' U' D' M R":[{animLeaf:new N("M",-1),start:0,end:1e3},{animLeaf:new N("R",-1),start:0,end:1e3},{animLeaf:new N("U",-1),start:1e3,end:2e3},{animLeaf:new N("D",-1),start:1e3,end:2e3},{animLeaf:new N("M"),start:2e3,end:3e3},{animLeaf:new N("R"),start:2e3,end:3e3}],"U' E' r E r2' E r U E":[{animLeaf:new N("U",-1),start:0,end:1e3},{animLeaf:new N("E",-1),start:0,end:1e3},{animLeaf:new N("r"),start:1e3,end:2500},{animLeaf:new N("E"),start:2500,end:3500},{animLeaf:new N("r",-2),start:3500,end:5e3},{animLeaf:new N("E"),start:5e3,end:6e3},{animLeaf:new N("r"),start:6e3,end:7e3},{animLeaf:new N("U"),start:7e3,end:8e3},{animLeaf:new N("E"),start:7e3,end:8e3}]},kg=class{constructor(i,e){F(this,"animLeaves");this.kpuzzle=i,this.animLeaves=cI[e.toString()]??lI(e)}getAnimLeaf(i){var e;return((e=this.animLeaves[Math.min(i,this.animLeaves.length-1)])==null?void 0:e.animLeaf)??null}getAnimLeafWithRange(i){return this.animLeaves[Math.min(i,this.animLeaves.length-1)]}indexToMoveStartTimestamp(i){let e=0;return this.animLeaves.length>0&&(e=this.animLeaves[Math.min(i,this.animLeaves.length-1)].start),e}timestampToIndex(i){let e=0;for(e=0;e<this.animLeaves.length;e++)if(this.animLeaves[e].start>=i)return Math.max(0,e-1);return Math.max(0,e-1)}timestampToPosition(i,e){const t=this.currentMoveInfo(i);let n=e??this.kpuzzle.identityTransformation().toKPattern();for(const r of this.animLeaves.slice(0,t.patternIndex)){const s=r.animLeaf.as(N);s!==null&&(n=n.applyMove(s))}return{pattern:n,movesInProgress:t.currentMoves}}currentMoveInfo(i){let e=1/0;for(const c of this.animLeaves)if(c.start<=i&&c.end>=i)e=Math.min(e,c.start);else if(c.start>i)break;const t=[],n=[],r=[],s=[];let a=-1/0,o=1/0,l=0;for(const c of this.animLeaves)if(c.end<=e)l++;else{if(c.start>i)break;{const u=c.animLeaf.as(N);if(u!==null){let d=(i-c.start)/(c.end-c.start),h=!1;d>1&&(d=1,h=!0);const f={move:u,direction:1,fraction:d,startTimestamp:c.start,endTimestamp:c.end};switch(d){case 0:{n.push(f);break}case 1:{h?s.push(f):r.push(f);break}default:t.push(f),a=Math.max(a,c.start),o=Math.min(o,c.end)}}}}return{patternIndex:l,currentMoves:t,latestStart:a,earliestEnd:o,movesStarting:n,movesFinishing:r,movesFinished:s}}patternAtIndex(i,e){let t=e??this.kpuzzle.defaultPattern();for(let n=0;n<this.animLeaves.length&&n<i;n++){const s=this.animLeaves[n].animLeaf.as(N);s!==null&&(t=t.applyMove(s))}return t}transformationAtIndex(i){let e=this.kpuzzle.identityTransformation();for(const t of this.animLeaves.slice(0,i)){const n=t.animLeaf.as(N);n!==null&&(e=e.applyMove(n))}return e}algDuration(){let i=0;for(const e of this.animLeaves)i=Math.max(i,e.end);return i}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(i){const e=this.getAnimLeafWithRange(i);return e.end-e.start}},Zr=class{constructor(i,e,t,n,r=[]){this.moveCount=i,this.duration=e,this.forward=t,this.backward=n,this.children=r}},uI=class extends Is{constructor(e){super();F(this,"identity");F(this,"dummyLeaf");F(this,"durationFn",new Gy(rs));F(this,"cache",{});this.kpuzzle=e,this.identity=e.identityTransformation(),this.dummyLeaf=new Zr(0,0,this.identity,this.identity,[])}traverseAlg(e){let t=0,n=0,r=this.identity;const s=[];for(const a of e.childAlgNodes()){const o=this.traverseAlgNode(a);t+=o.moveCount,n+=o.duration,r===this.identity?r=o.forward:r=r.applyTransformation(o.forward),s.push(o)}return new Zr(t,n,r,r.invert(),s)}traverseGrouping(e){const t=this.traverseAlg(e.alg);return this.mult(t,e.amount,[t])}traverseMove(e){const t=e.toString();let n=this.cache[t];if(n)return n;const r=this.kpuzzle.moveToTransformation(e);return n=new Zr(1,this.durationFn.traverseAlgNode(e),r,r.invert()),this.cache[t]=n,n}traverseCommutator(e){const t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward),s=t.backward.applyTransformation(n.backward),a=r.applyTransformation(s),o=new Zr(2*(t.moveCount+n.moveCount),2*(t.duration+n.duration),a,a.invert(),[t,n]);return this.mult(o,1,[o,t,n])}traverseConjugate(e){const t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),s=t.forward.applyTransformation(n.forward).applyTransformation(t.backward),a=new Zr(2*t.moveCount+n.moveCount,2*t.duration+n.duration,s,s.invert(),[t,n]);return this.mult(a,1,[a,t,n])}traversePause(e){return e.experimentalNISSGrouping?this.dummyLeaf:new Zr(1,this.durationFn.traverseAlgNode(e),this.identity,this.identity)}traverseNewline(e){return this.dummyLeaf}traverseLineComment(e){return this.dummyLeaf}mult(e,t,n){const r=Math.abs(t),s=e.forward.selfMultiply(t);return new Zr(e.moveCount*r,e.duration*r,s,s.invert(),n)}},Xt=class{constructor(i,e){this.apd=i,this.back=e}},hI=class extends Ua{constructor(e,t,n){super();F(this,"move");F(this,"moveDuration");F(this,"back");F(this,"st");F(this,"root");F(this,"i");F(this,"dur");F(this,"goali");F(this,"goaldur");this.kpuzzle=e,this.algOrAlgNode=t,this.apd=n,this.i=-1,this.dur=-1,this.goali=-1,this.goaldur=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new Xt(this.apd,!1)}moveByIndex(e){return this.i>=0&&this.i===e?this.move!==void 0:this.dosearch(e,1/0)}moveByDuration(e){return this.dur>=0&&this.dur<e&&this.dur+this.moveDuration>=e?this.move!==void 0:this.dosearch(1/0,e)}dosearch(e,t){return this.goali=e,this.goaldur=t,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(Se)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(e,t){if(!this.firstcheck(t))return!1;let n=t.back?e.experimentalNumChildAlgNodes()-1:0;for(const r of F_(e.childAlgNodes(),t.back?-1:1)){if(this.traverseAlgNode(r,new Xt(t.apd.children[n],t.back)))return!0;n+=t.back?-1:1}return!1}traverseGrouping(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,e.amount);return this.traverseAlg(e.alg,new Xt(t.apd.children[0],n))}traverseMove(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseCommutator(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,1);return n?this.traverseAlg(e.B,new Xt(t.apd.children[2],!n))||this.traverseAlg(e.A,new Xt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Xt(t.apd.children[2],n))||this.traverseAlg(e.A,new Xt(t.apd.children[1],n)):this.traverseAlg(e.A,new Xt(t.apd.children[1],n))||this.traverseAlg(e.B,new Xt(t.apd.children[2],n))||this.traverseAlg(e.A,new Xt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Xt(t.apd.children[2],!n))}traverseConjugate(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,1);return n?this.traverseAlg(e.A,new Xt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Xt(t.apd.children[2],n))||this.traverseAlg(e.A,new Xt(t.apd.children[1],n)):this.traverseAlg(e.A,new Xt(t.apd.children[1],n))||this.traverseAlg(e.B,new Xt(t.apd.children[2],n))||this.traverseAlg(e.A,new Xt(t.apd.children[1],!n))}traversePause(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseNewline(e,t){return!1}traverseLineComment(e,t){return!1}firstcheck(e){return e.apd.moveCount+this.i<=this.goali&&e.apd.duration+this.dur<this.goaldur?this.keepgoing(e):!0}domult(e,t){let n=e.back;if(t===0)return n;t<0&&(n=!n,t=-t);const r=e.apd.children[0],s=Math.min(Math.floor((this.goali-this.i)/r.moveCount),Math.ceil((this.goaldur-this.dur)/r.duration-1));return s>0&&this.keepgoing(new Xt(r,n),s),n}keepgoing(e,t=1){return this.i+=t*e.apd.moveCount,this.dur+=t*e.apd.duration,t!==1?e.back?this.st=this.st.applyTransformation(e.apd.backward.selfMultiply(t)):this.st=this.st.applyTransformation(e.apd.forward.selfMultiply(t)):e.back?this.st=this.st.applyTransformation(e.apd.backward):this.st=this.st.applyTransformation(e.apd.forward),!1}},dI=16;function fI(i,e){const t=new Hd,n=new Hd;for(const r of i.childAlgNodes())n.push(r),n.experimentalNumAlgNodes()>=e&&(t.push(new dn(n.toAlg())),n.reset());return t.push(new dn(n.toAlg())),t.toAlg()}var pI=class extends Is{traverseAlg(i){const e=i.experimentalNumChildAlgNodes();return e<dI?i:fI(i,Math.ceil(Math.sqrt(e)))}traverseGrouping(i){return new dn(this.traverseAlg(i.alg),i.amount)}traverseMove(i){return i}traverseCommutator(i){return new Tn(this.traverseAlg(i.A),this.traverseAlg(i.B))}traverseConjugate(i){return new Tn(this.traverseAlg(i.A),this.traverseAlg(i.B))}traversePause(i){return i}traverseNewline(i){return i}traverseLineComment(i){return i}},mI=Fn(pI),Bg=class{constructor(i,e){F(this,"decoration");F(this,"walker");this.kpuzzle=i;const t=new uI(this.kpuzzle),n=mI(e);this.decoration=t.traverseAlg(n),this.walker=new hI(this.kpuzzle,n,this.decoration)}getAnimLeaf(i){if(this.walker.moveByIndex(i)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");const e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(i){if(this.walker.moveByIndex(i)||this.walker.i===i)return this.walker.dur;throw new Error(`Out of algorithm: index ${i}`)}indexToMovesInProgress(i){if(this.walker.moveByIndex(i)||this.walker.i===i)return this.walker.dur;throw new Error(`Out of algorithm: index ${i}`)}patternAtIndex(i,e){return this.walker.moveByIndex(i),(e??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(i){return this.walker.moveByIndex(i),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(i){return this.walker.moveByDuration(i),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(i){return this.walker.moveByIndex(i),this.walker.moveDuration}},gI=1024,vI=class extends At{derive(i){switch(i.indexerConstructorRequest){case"auto":return lR(i.alg.alg)<=gI&&i.puzzle==="3x3x3"&&i.visualizationStrategy==="Cube3D"?kg:Bg;case"tree":return Bg;case"simple":return rI;case"simultaneous":return kg;default:throw new Error("Invalid indexer request!")}}},xI=class extends Mt{getDefaultValue(){return"auto"}},yI=class extends At{derive(i){return new i.indexerConstructor(i.kpuzzle,i.algWithIssues.alg)}},_I=class extends At{derive(i){return{pattern:i.currentPattern,movesInProgress:i.currentMoveInfo.currentMoves}}},MI=!0,Vg=class extends At{async derive(i){try{return MI&&i.kpuzzle.algToTransformation(i.algWithIssues.alg),i.algWithIssues}catch(e){return{alg:new Se,issues:new $o({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},wI=class extends Mt{getDefaultValue(){return"start"}},SI=class extends Mt{getDefaultValue(){return null}},bI=class extends At{async derive(i){return i.puzzleLoader.kpuzzle()}},TI=class extends Mt{getDefaultValue(){return Wo}},AI=class extends At{async derive(i){return i.puzzleLoader.id}},EI=class extends Mt{getDefaultValue(){return Wo}},CI=class extends At{derive(i){if(i.puzzleIDRequest&&i.puzzleIDRequest!==Wo){const e=Sy[i.puzzleIDRequest];return e||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${i.puzzleIDRequest}`]}),e}return i.puzzleDescriptionRequest&&i.puzzleDescriptionRequest!==Wo?wM(i.puzzleDescriptionRequest):Mp}},RI=class extends At{derive(i){return{playing:i.playingInfo.playing,atStart:i.detailedTimelineInfo.atStart,atEnd:i.detailedTimelineInfo.atEnd}}canReuseValue(i,e){return i.playing===e.playing&&i.atStart===e.atStart&&i.atEnd===e.atEnd}},Ju,Hy,Mv,II=(Mv=class extends At{constructor(){super(...arguments);J(this,Ju)}derive(e){let t=Qe(this,Ju,Hy).call(this,e),n=!1,r=!1;return t>=e.timeRange.end&&(r=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(n=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:n,atEnd:r}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Ju=new WeakSet,Hy=function(e){switch(e.timestampRequest){case"auto":return e.setupAnchor==="start"&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case"start":return e.timeRange.start;case"end":return e.timeRange.end;case"anchor":return e.setupAnchor==="start"?e.timeRange.start:e.timeRange.end;case"opposite-anchor":return e.setupAnchor==="start"?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}},Mv),LI=class extends Dr{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(i,e){const t=await e,n=Object.assign({},t);return Object.assign(n,i),n}canReuseValue(i,e){return i.direction===e.direction&&i.playing===e.playing&&i.untilBoundary===e.untilBoundary&&i.loop===e.loop}},PI=class extends Dr{getDefaultValue(){return 1}derive(i){return i<0?1:i}},DI={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},NI=class extends Mt{getDefaultValue(){return"auto"}set(i){const e=this.get();super.set((async()=>this.validInput(await i)?i:e)())}validInput(i){return!!(typeof i=="number"||DI[i])}},UI=class extends Mt{getDefaultValue(){return"auto"}},zI=class extends At{derive(i){return{start:0,end:i.indexer.algDuration()}}},OI=class extends Mt{getDefaultValue(){return"auto"}},FI=class extends Mt{getDefaultValue(){return"auto"}},kI=class extends At{derive(i){switch(i.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":case"tri_quad":case"loopover":return"2D";case"3x3x3":switch(i.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return i.visualizationRequest}default:switch(i.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":case"experimental-2D-LL-face":return["2x2x2","4x4x4","megaminx"].includes(i.puzzleID)?"experimental-2D-LL":"2D";default:return i.visualizationRequest}}}},BI=class extends Mt{getDefaultValue(){return"auto"}},VI=class extends Mt{getDefaultValue(){return"auto"}},GI=class extends Mt{getDefaultValue(){return"auto"}},HI=null;async function WI(){return HI??(HI=new(await yi).TextureLoader)}var Gg=class extends At{async derive(i){const{spriteURL:e}=i;return e===null?null:new Promise(async(t,n)=>{const r=()=>{console.warn("Could not load sprite:",e.toString()),t(null)};try{(await WI()).load(e.toString(),t,r,r)}catch{r()}})}},XI={facelets:["regular","regular","regular","regular","regular"]};async function qI(i){const{definition:e}=await i.kpuzzle(),t={orbits:{}};for(const n of e.orbits)t.orbits[n.orbitName]={pieces:new Array(n.numPieces).fill(XI)};return t}var YI=class extends At{getDefaultValue(){return{orbits:{}}}async derive(i){var e,t;return i.stickeringMaskRequest?i.stickeringMaskRequest:i.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:((t=(e=i.puzzleLoader).stickeringMask)==null?void 0:t.call(e,i.stickeringRequest??"full"))??qI(i.puzzleLoader)}},$I={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation",M:"Mystery","@":"Regular"};function ZI(i){const e={orbits:{}},t=i.split(",");for(const n of t){const[r,s,...a]=n.split(":");if(a.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${n}\``);const o=[];e.orbits[r]={pieces:o};for(const l of s){const c=$I[l];o.push(Gv(c))}}return e}var KI=class extends Dr{getDefaultValue(){return null}derive(i){return i===null?null:typeof i=="string"?ZI(i):i}},jI=class extends Mt{getDefaultValue(){return null}},JI=class extends Mt{getDefaultValue(){return"auto"}},QI=class extends Mt{getDefaultValue(){return{}}},eL=class extends Mt{getDefaultValue(){return"auto"}},tL=class extends Mt{getDefaultValue(){return"auto"}},nL=class extends At{derive(i){return i.colorSchemeRequest==="dark"?"dark":"light"}},iL=class extends Mt{getDefaultValue(){return"auto"}},rL=class extends Mt{getDefaultValue(){return null}},sL=35,aL=class extends Mt{getDefaultValue(){return sL}};function Wy(i,e){return i.latitude===e.latitude&&i.longitude===e.longitude&&i.distance===e.distance}var oL=class extends Dr{getDefaultValue(){return"auto"}canReuseValue(i,e){return i===e||Wy(i,e)}async derive(i,e){if(i==="auto")return"auto";let t=await e;t==="auto"&&(t={});const n=Object.assign({},t);return Object.assign(n,i),typeof n.latitude<"u"&&(n.latitude=Math.min(Math.max(n.latitude,-90),90)),typeof n.longitude<"u"&&(n.longitude=yf(n.longitude,180,-180)),n}},lL=class extends At{canReuseValue(i,e){return Wy(i,e)}async derive(i){if(i.orbitCoordinatesRequest==="auto")return Wg(i.puzzleID,i.strategy);const e=Object.assign(Object.assign({},Wg(i.puzzleID,i.strategy),i.orbitCoordinatesRequest));if(Math.abs(e.latitude)<=i.latitudeLimit)return e;{const{latitude:t,longitude:n,distance:r}=e;return{latitude:i.latitudeLimit*Math.sign(t),longitude:n,distance:r}}}},cL={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},uL={latitude:35,longitude:30,distance:6},Hg={latitude:35,longitude:30,distance:6.25},hL={latitude:Math.atan(1/2)*Xo,longitude:0,distance:6.7},dL={latitude:26.56505117707799,longitude:0,distance:6};function Wg(i,e){if(i[1]==="x")return e==="Cube3D"?uL:Hg;switch(i){case"megaminx":case"gigaminx":return hL;case"pyraminx":case"master_tetraminx":return dL;case"skewb":return Hg;default:return cL}}var fL=class{constructor(i){F(this,"background",new tL);F(this,"colorSchemeRequest",new iL);F(this,"dragInput",new JI);F(this,"foundationDisplay",new VI);F(this,"foundationStickerSpriteURL",new wf);F(this,"fullscreenElement",new rL);F(this,"hintFacelet",new FC);F(this,"hintStickerSpriteURL",new wf);F(this,"initialHintFaceletsAnimation",new GI);F(this,"latitudeLimit",new aL);F(this,"movePressInput",new eL);F(this,"movePressCancelOptions",new QI);F(this,"orbitCoordinatesRequest",new oL);F(this,"stickeringMaskRequest",new KI);F(this,"stickeringRequest",new jI);F(this,"faceletScale",new BI);F(this,"colorScheme",new nL({colorSchemeRequest:this.colorSchemeRequest}));F(this,"foundationStickerSprite",new Gg({spriteURL:this.foundationStickerSpriteURL}));F(this,"hintStickerSprite",new Gg({spriteURL:this.hintStickerSpriteURL}));F(this,"orbitCoordinates");F(this,"stickeringMask");this.twistyPlayerModel=i,this.orbitCoordinates=new lL({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:i.puzzleID,strategy:i.visualizationStrategy}),this.stickeringMask=new YI({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:i.puzzleLoader})}},pL={errors:[]},mL=class extends Mt{getDefaultValue(){return pL}reset(){this.set(this.getDefaultValue())}canReuseValue(i,e){return xf(i.errors,e.errors)}},gL=class{constructor(){F(this,"userVisibleErrorTracker",new mL);F(this,"alg",new Og);F(this,"backView",new UI);F(this,"controlPanel",new BR);F(this,"catchUpMove",new eI);F(this,"indexerConstructorRequest",new xI);F(this,"playingInfo",new LI);F(this,"puzzleDescriptionRequest",new TI);F(this,"puzzleIDRequest",new EI);F(this,"setupAnchor",new wI);F(this,"setupAlg",new Og);F(this,"setupTransformation",new SI);F(this,"tempoScale",new PI);F(this,"timestampRequest",new NI);F(this,"viewerLink",new OI);F(this,"visualizationFormat",new FI);F(this,"title",new zg);F(this,"videoURL",new wf);F(this,"competitionID",new zg);F(this,"puzzleLoader",new CI({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker));F(this,"kpuzzle",new bI({puzzleLoader:this.puzzleLoader}));F(this,"puzzleID",new AI({puzzleLoader:this.puzzleLoader}));F(this,"puzzleAlg",new Vg({algWithIssues:this.alg,kpuzzle:this.kpuzzle}));F(this,"puzzleSetupAlg",new Vg({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle}));F(this,"visualizationStrategy",new kI({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID}));F(this,"indexerConstructor",new vI({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest}));F(this,"setupAlgTransformation",new JR({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle}));F(this,"indexer",new yI({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle}));F(this,"anchorTransformation",new QR({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer}));F(this,"timeRange",new zI({indexer:this.indexer}));F(this,"detailedTimelineInfo",new II({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg}));F(this,"coarseTimelineInfo",new RI({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo}));F(this,"currentMoveInfo",new nI({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove}));F(this,"buttonAppearance",new ZR({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink}));F(this,"currentLeavesSimplified",new tI({currentMoveInfo:this.currentMoveInfo}));F(this,"currentPattern",new iI({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer}));F(this,"legacyPosition",new _I({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern}));F(this,"twistySceneModel",new fL(this))}async twizzleLink(){const[i,e,t,n,r,s,a,o]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),l=i==="experimental-twizzle-explorer",c=new URL(`https://alpha.twizzle.net/${l?"explore":"edit"}/`);return n.alg.experimentalIsEmpty()||c.searchParams.set("alg",n.alg.toString()),r.alg.experimentalIsEmpty()||c.searchParams.set("setup-alg",r.alg.toString()),s!=="start"&&c.searchParams.set("setup-anchor",s),a!=="full"&&a!==null&&c.searchParams.set("experimental-stickering",a),l&&t!==Wo?c.searchParams.set("puzzle-description",t):e!=="3x3x3"&&c.searchParams.set("puzzle",e),o&&c.searchParams.set("title",o),c.toString()}experimentalAddAlgLeaf(i,e){const t=i.as(N);t?this.experimentalAddMove(t,e):this.alg.set((async()=>{const r=(await this.alg.get()).alg.concat(new Se([i]));return this.timestampRequest.set("end"),r})())}experimentalAddMove(i,e){const t=typeof i=="string"?new N(i):i;this.alg.set((async()=>{const[{alg:n},r]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=kv(n,t,{...e,...await vM(r)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:t,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{const i=(await this.alg.get()).alg,e=Array.from(i.childAlgNodes()),[t]=e.splice(-1);if(!t)return i;this.timestampRequest.set("end");const n=t.as(N);return n&&this.catchUpMove.set({move:n.invert(),amount:0}),new Se(e)})())}};function ct(i){return new Error(`Cannot get \`.${i}\` directly from a \`TwistyPlayer\`.`)}var vL=class extends qn{constructor(){super(...arguments);F(this,"experimentalModel",new gL);F(this,"experimentalGet",new xL(this.experimentalModel))}set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw ct("alg")}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw ct("setup")}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw ct("anchor")}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw ct("puzzle")}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw ct("experimentalPuzzleDescription")}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw ct("timestamp")}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw ct("hintFacelets")}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw ct("experimentalStickering")}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw ct("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw ct("experimentalFaceletScale")}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw ct("backView")}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw ct("background")}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw ct("colorScheme")}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw ct("controlPanel")}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw ct("visualization")}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw ct("experimentalTitle")}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw ct("experimentalVideoURL")}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw ct("experimentalCompetitionID")}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw ct("viewerLink")}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw ct("experimentalMovePressInput")}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw ct("experimentalMovePressCancelOptions")}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw ct("cameraLatitude")}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw ct("cameraLongitude")}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw ct("cameraDistance")}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw ct("cameraLatitudeLimit")}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw ct("indexer")}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw ct("tempoScale")}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw ct("experimentalSprite")}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw ct("experimentalHintSprite")}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw ct("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw ct("experimentalInitialHintFaceletsAnimation")}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw ct("experimentalDragInput")}},xL=class{constructor(i){this.model=i}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},Fd="data-",Au={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},yL=Object.fromEntries(Object.values(Au).map(i=>[i,!0])),_L={experimentalMovePressCancelOptions:!0},Xg,Xy=Symbol("intersectedCallback");function ML(i){Xg??(Xg=new IntersectionObserver((e,t)=>{for(const n of e)n.isIntersecting&&n.intersectionRect.height>0&&(n.target[Xy](),t.unobserve(n.target))})),Xg.observe(i)}var Qu,ol,ba,ll,cl,zi,ul,hl,eh,qy,wv,Rl=(wv=class extends vL{constructor(e={}){super();J(this,eh);F(this,"controller",new FR(this.experimentalModel,this));F(this,"buttons");F(this,"experimentalCanvasClickCallback",()=>{});J(this,Qu,new Wh(this,"controls-",["auto"].concat(Object.keys(kR))));J(this,ol,document.createElement("div"));J(this,ba,document.createElement("div"));J(this,ll,!1);J(this,cl,"auto");J(this,zi,null);J(this,ul,new Ey);J(this,hl,null);for(const[t,n]of Object.entries(e)){if(!(yL[t]||_L[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=n}}async connectedCallback(){this.addCSS(ky),ML(this)}async[Xy](){if(b(this,ll))return;he(this,ll,!0),this.addElement(b(this,ol)).classList.add("visualization-wrapper"),this.addElement(b(this,ba)).classList.add("error-elem"),b(this,ba).textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(t=>{const n=t.errors[0]??null;this.contentWrapper.classList.toggle("error",!!n),n&&(b(this,ba).textContent=n)});const e=new zy(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new Ly(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(t=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(t)),this.contentWrapper.classList.toggle("checkered-transparent",t==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(t=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(t))}),this.experimentalModel.controlPanel.addFreshListener(t=>{b(this,Qu).setValue(t)}),this.experimentalModel.visualizationStrategy.addFreshListener(Qe(this,eh,qy).bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}experimentalSetFlashLevel(e){he(this,cl,e)}flash(){var e;b(this,cl)==="auto"&&((e=b(this,zi))==null||e.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"}))}async experimentalCurrentVantages(){this.connectedCallback();const e=b(this,zi);return e instanceof Mf?e.experimentalVantages():[]}async experimentalCurrentCanvases(){const e=await this.experimentalCurrentVantages(),t=[];for(const n of e)t.push((await n.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();const n=await(await b(this,ul).promise).experimentalTwisty3DPuzzleWrapper(),r=n.twisty3DPuzzle(),s=(async()=>{await r,await new Promise(a=>setTimeout(a,0))})();if(e){const a=new Ga(async()=>{});n.addEventListener("render-scheduled",async()=>{a.requestIsPending()||(a.requestAnimFrame(),await s,e())})}return r}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){const e=[];for(const t of Object.keys(Au))e.push(t,Fd+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,n){e.startsWith(Fd)&&(e=e.slice(Fd.length));const r=Au[e];r&&(this[r]=n)}async experimentalScreenshot(e){return(await Ug(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if(["2D","experimental-2D-LL","experimental-2D-LL-face"].includes(await this.experimentalModel.visualizationStrategy.get())){const n=await b(this,zi).currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),r=new XMLSerializer().serializeToString(n.svgWrapper.svgElement),s=URL.createObjectURL(new Blob([r]));Fy(s,e??await Oy(this.experimentalModel),"svg")}else await(await Ug(this.experimentalModel)).download(e)}},Qu=new WeakMap,ol=new WeakMap,ba=new WeakMap,ll=new WeakMap,cl=new WeakMap,zi=new WeakMap,ul=new WeakMap,hl=new WeakMap,eh=new WeakSet,qy=function(e){var t,n;if(e!==b(this,hl)){(t=b(this,zi))==null||t.remove(),(n=b(this,zi))==null||n.disconnect();let r;switch(e){case"2D":case"experimental-2D-LL":case"experimental-2D-LL-face":{r=new Ay(this.experimentalModel.twistySceneModel,e);break}case"Cube3D":case"PG3D":{r=new Mf(this.experimentalModel),b(this,ul).handleNewValue(r);break}default:throw new Error("Invalid visualization")}b(this,ol).appendChild(r),he(this,zi,r),he(this,hl,e)}},wv);an.define("twisty-player",Rl);var Yy=new On;Yy.replaceSync(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);async function wL(i){return new Promise((e,t)=>{const n=document.getElementById(i);n&&e(n);const r=new MutationObserver(s=>{for(const a of s)a.attributeName==="id"&&a.target instanceof Element&&a.target.getAttribute("id")===i&&(e(a.target),r.disconnect())});r.observe(document.body,{attributeFilter:["id"],subtree:!0})})}var SL=250,ea=class extends qn{constructor(i,e,t,n,r,s){if(super({mode:"open"}),this.algOrAlgNode=n,this.classList.add(i),this.addCSS(Yy),s){const a=this.contentWrapper.appendChild(document.createElement("a"));a.href="#",a.textContent=e,a.addEventListener("click",o=>{o.preventDefault(),t.twistyAlgViewer.jumpToIndex(t.earliestMoveIndex,r)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=e}pathToIndex(i){return[]}setCurrentMove(i){this.contentWrapper.classList.toggle("current-move",i)}};an.define("twisty-alg-leaf-elem",ea);var ta=class extends qo{constructor(e,t){super();F(this,"queue",[]);this.algOrAlgNode=t,this.classList.add(e)}addString(e){this.queue.push(document.createTextNode(e))}addElem(e){return this.queue.push(e.element),e.moveCount}flushQueue(e=1){for(const t of $y(this.queue,e))this.append(t);this.queue=[]}pathToIndex(e){return[]}};an.define("twisty-alg-wrapper-elem",ta);function bL(i){return i===1?-1:1}function TL(i,e){return e<0?bL(i):i}function $y(i,e){if(e===1)return i;const t=Array.from(i);return t.reverse(),t}var AL=class extends Ua{traverseAlg(i,e){var s,a,o;let t=0;const n=new ta("twisty-alg-alg",i);let r=!0;for(const l of Rv(i.childAlgNodes(),e.direction))r||n.addString(" "),r=!1,(s=l.as(pn))!=null&&s.experimentalNISSGrouping&&n.addString("^("),(a=l.as(dn))!=null&&a.experimentalNISSPlaceholder||(t+=n.addElem(this.traverseAlgNode(l,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}))),(o=l.as(pn))!=null&&o.experimentalNISSGrouping&&n.addString(")");return n.flushQueue(e.direction),{moveCount:t,element:n}}traverseGrouping(i,e){const t=i.experimentalAsSquare1Tuple(),n=TL(e.direction,i.amount);let r=0;const s=new ta("twisty-alg-grouping",i);return s.addString("("),t?(r+=s.addElem({moveCount:1,element:new ea("twisty-alg-move",t[0].amount.toString(),e,t[0],!0,!0)}),s.addString(", "),r+=s.addElem({moveCount:1,element:new ea("twisty-alg-move",t[1].amount.toString(),e,t[1],!0,!0)})):r+=s.addElem(this.traverseAlg(i.alg,{earliestMoveIndex:e.earliestMoveIndex+r,twistyAlgViewer:e.twistyAlgViewer,direction:n})),s.addString(`)${i.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:r*Math.abs(i.amount),element:s}}traverseMove(i,e){const t=new ea("twisty-alg-move",i.toString(),e,i,!0,!0);return e.twistyAlgViewer.highlighter.addMove(i[Nn],t),{moveCount:1,element:t}}traverseCommutator(i,e){let t=0;const n=new ta("twisty-alg-commutator",i);n.addString("["),n.flushQueue();const[r,s]=$y([i.A,i.B],e.direction);return t+=n.addElem(this.traverseAlg(r,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.addString(", "),t+=n.addElem(this.traverseAlg(s,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.flushQueue(e.direction),n.addString("]"),n.flushQueue(),{moveCount:t*2,element:n}}traverseConjugate(i,e){let t=0;const n=new ta("twisty-alg-conjugate",i);n.addString("[");const r=n.addElem(this.traverseAlg(i.A,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}));return t+=r,n.addString(": "),t+=n.addElem(this.traverseAlg(i.B,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.addString("]"),n.flushQueue(),{moveCount:t+r,element:n}}traversePause(i,e){return i.experimentalNISSGrouping?this.traverseAlg(i.experimentalNISSGrouping.alg,e):{moveCount:1,element:new ea("twisty-alg-pause",".",e,i,!0,!0)}}traverseNewline(i,e){const t=new ta("twisty-alg-newline",i);return t.append(document.createElement("br")),{moveCount:0,element:t}}traverseLineComment(i,e){return{moveCount:0,element:new ea("twisty-alg-line-comment",`//${i.text}`,e,i,!1,!1)}}},EL=Fn(AL),CL=class{constructor(){F(this,"moveCharIndexMap",new Map);F(this,"currentElem",null)}addMove(i,e){this.moveCharIndexMap.set(i,e)}set(i){var t,n;const e=i?this.moveCharIndexMap.get(i[Nn])??null:null;this.currentElem!==e&&((t=this.currentElem)==null||t.classList.remove("twisty-alg-current-move"),(n=this.currentElem)==null||n.setCurrentMove(!1),e==null||e.classList.add("twisty-alg-current-move"),e==null||e.setCurrentMove(!0),this.currentElem=e)}},dl,Oi,th,Ky,Sv,Zy=(Sv=class extends qo{constructor(e){super();J(this,th);F(this,"highlighter",new CL);J(this,dl);J(this,Oi,null);F(this,"lastClickTimestamp",null);e!=null&&e.twistyPlayer&&(this.twistyPlayer=e==null?void 0:e.twistyPlayer)}connectedCallback(){}setAlg(e){he(this,dl,EL(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element),this.textContent="",this.appendChild(b(this,dl))}get twistyPlayer(){return b(this,Oi)}set twistyPlayer(e){Qe(this,th,Ky).call(this,e)}async jumpToIndex(e,t){const n=b(this,Oi);if(n){n.pause();const r=(async()=>{const s=await n.experimentalModel.indexer.get(),a=t?SL:0;return s.indexToMoveStartTimestamp(e)+s.moveDuration(e)-a})();n.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(n.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(e,t,n){if(e==="for"){let r=document.getElementById(n);if(r||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),r=await wL(n),!(r instanceof Rl)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=r}}static get observedAttributes(){return["for"]}},dl=new WeakMap,Oi=new WeakMap,th=new WeakSet,Ky=async function(e){if(b(this,Oi)){console.warn("twisty-player reassignment is not supported");return}if(e===null)throw new Error("clearing twistyPlayer is not supported");he(this,Oi,e),b(this,Oi).experimentalModel.alg.addFreshListener(r=>{this.setAlg(r.alg)});const t=(await b(this,Oi).experimentalModel.alg.get()).alg,n=Nn in t?t:Se.fromString(t.toString());this.setAlg(n),e.experimentalModel.currentMoveInfo.addFreshListener(r=>{let s=r.currentMoves[0];if(s??(s=r.movesStarting[0]),s??(s=r.movesFinishing[0]),!s)this.highlighter.set(null);else{const a=s.move;this.highlighter.set(a)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(r=>{r.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})},Sv);an.define("twisty-alg-viewer",Zy);var RL=class extends Ua{traverseAlg(i,e){const t=[];let n=0;for(const r of i.childAlgNodes()){const s=this.traverseAlgNode(r,{numMovesSofar:e.numMovesSofar+n});t.push(s.tokens),n+=s.numLeavesInside}return{tokens:Array.prototype.concat(...t),numLeavesInside:n}}traverseGrouping(i,e){const t=this.traverseAlg(i.alg,e);return{tokens:t.tokens,numLeavesInside:t.numLeavesInside*i.amount}}traverseMove(i,e){return{tokens:[{leaf:i,idx:e.numMovesSofar}],numLeavesInside:1}}traverseCommutator(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(n.tokens),numLeavesInside:t.numLeavesInside*2+n.numLeavesInside}}traverseConjugate(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(n.tokens),numLeavesInside:t.numLeavesInside*2+n.numLeavesInside*2}}traversePause(i,e){return{tokens:[{leaf:i,idx:e.numMovesSofar}],numLeavesInside:1}}traverseNewline(i,e){return{tokens:[],numLeavesInside:0}}traverseLineComment(i,e){return{tokens:[],numLeavesInside:0}}},IL=Fn(RL),LL=class extends Mt{getDefaultValue(){return""}},PL=class extends At{derive(i){return Vy(i.value)}},DL=class extends Dr{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(i,e){const{selectionStart:t,selectionEnd:n}=i,r=await e,s=i.selectionStart===r.selectionStart&&i.selectionEnd!==(await e).selectionEnd;return{selectionStart:t,selectionEnd:n,endChangedMostRecently:s}}},NL=class extends At{derive(i){return i.selectionInfo.endChangedMostRecently?i.selectionInfo.selectionEnd:i.selectionInfo.selectionStart}},UL=class extends At{derive(i){return IL(i.algWithIssues.alg,{numMovesSofar:0}).tokens}},zL=class extends At{derive(i){function e(n){if(n===null)return null;let r;return i.targetChar<n.leaf[Nn]?r="before":i.targetChar===n.leaf[Nn]?r="start":i.targetChar<n.leaf[gi]?r="inside":i.targetChar===n.leaf[gi]?r="end":r="after",{leafInfo:n,where:r}}let t=null;for(const n of i.leafTokens){if(i.targetChar<n.leaf[Nn]&&t!==null)return e(t);if(i.targetChar<=n.leaf[gi])return e(n);t=n}return e(t)}},OL=class{constructor(){F(this,"valueProp",new LL);F(this,"selectionProp",new DL);F(this,"targetCharProp",new NL({selectionInfo:this.selectionProp}));F(this,"algEditorAlgWithIssues",new PL({value:this.valueProp}));F(this,"leafTokensProp",new UL({algWithIssues:this.algEditorAlgWithIssues}));F(this,"leafToHighlight",new zL({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp}))}},FL="//";function kL(i){try{return Se.fromString(i)}catch{return null}}function jy(i,e){const t=i.indexOf(e);return t===-1?[i,""]:[i.slice(0,t),i.slice(t)]}function qg(i){const e=[];for(const t of i.split(`
`)){let[n,r]=jy(t,FL);n=n.replaceAll("’","'"),e.push(n+r)}return e.join(`
`)}function BL(i,e){const{value:t}=i,{selectionStart:n,selectionEnd:r}=i,s=t.slice(0,n),a=t.slice(r);e=e.replaceAll(`\r
`,`
`);const o=s.match(/\/\/[^\n]*$/),l=t[n-1]==="/"&&e[0]==="/",c=o||l,u=e.match(/\/\/[^\n]*$/);let d=e;if(c){const[g,m]=jy(e,`
`);d=g+qg(m)}else d=qg(e);const h=!c&&n!==0&&![`
`," "].includes(d[0])&&![`
`," "].includes(t[n-1]),f=!u&&r!==t.length&&![`
`," "].includes(d.at(-1))&&![`
`," "].includes(t[r]);function p(g,m){const _=g+d+m,y=!!kL(s+_+a);return y&&(d=_),y}h&&f&&p(" "," ")||h&&p(" ","")||f&&p(""," "),(Et==null?void 0:Et.execCommand("insertText",!1,d))||i.setRangeText(d,n,r,"end")}var Jy=new On;Jy.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var Ac="for-twisty-player",Yg="placeholder",$g="twisty-player-prop",Ut,xr,ps,Fi,ms,nh,ui,yr,qi,Dc,fl,Sf,pl,bv,VL=(bv=class extends qn{constructor(e){super();J(this,qi);F(this,"model",new OL);J(this,Ut,document.createElement("textarea"));J(this,xr,document.createElement("div"));J(this,ps,document.createElement("span"));J(this,Fi,document.createElement("span"));J(this,ms,document.createElement("span"));J(this,nh,new Wh(this,"valid-for-puzzle-",["none","warning","error"]));J(this,ui,null);J(this,yr);F(this,"debugNeverRequestTimestamp",!1);J(this,fl,!1);J(this,pl,null);b(this,xr).classList.add("carbon-copy"),this.addElement(b(this,xr)),b(this,Ut).rows=1,this.addElement(b(this,Ut)),b(this,ps).classList.add("prefix"),b(this,xr).appendChild(b(this,ps)),b(this,Fi).classList.add("highlight"),b(this,xr).appendChild(b(this,Fi)),b(this,ms).classList.add("suffix"),b(this,xr).appendChild(b(this,ms)),b(this,Ut).placeholder="Alg",b(this,Ut).setAttribute("spellcheck","false"),this.addCSS(Jy),b(this,Ut).addEventListener("input",()=>{he(this,fl,!0),this.onInput()}),b(this,Ut).addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),e!=null&&e.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),he(this,yr,(e==null?void 0:e.twistyPlayerProp)??"alg"),(e==null?void 0:e.twistyPlayerProp)==="alg"&&this.model.leafToHighlight.addFreshListener(t=>{t&&this.highlightLeaf(t.leafInfo.leaf)})}connectedCallback(){b(this,Ut).addEventListener("paste",e=>{var n;const t=(n=e.clipboardData)==null?void 0:n.getData("text");t&&(BL(b(this,Ut),t),e.preventDefault(),this.onInput())})}set algString(e){b(this,Ut).value=e,this.onInput()}get algString(){return b(this,Ut).value}set placeholder(e){b(this,Ut).placeholder=e}onInput(){var t;b(this,Fi).hidden=!0,this.highlightLeaf(null);const e=b(this,Ut).value.trimEnd();this.model.valueProp.set(e),(t=b(this,qi,Dc))==null||t.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==b(this,Ut)||b(this,yr)!=="alg")return;const{selectionStart:e,selectionEnd:t}=b(this,Ut);this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){b(this,nh).setValue(e)}highlightLeaf(e){if(e===null){b(this,ps).textContent="",b(this,Fi).textContent="",b(this,ms).textContent=Qe(this,qi,Sf).call(this,b(this,Ut).value);return}e!==b(this,pl)&&(he(this,pl,e),b(this,ps).textContent=b(this,Ut).value.slice(0,e[Nn]),b(this,Fi).textContent=b(this,Ut).value.slice(e[Nn],e[gi]),b(this,ms).textContent=Qe(this,qi,Sf).call(this,b(this,Ut).value.slice(e[gi])),b(this,Fi).hidden=!1)}get twistyPlayer(){return b(this,ui)}set twistyPlayer(e){var t;if(b(this,ui)){console.warn("twisty-player reassignment/clearing is not supported");return}he(this,ui,e),e&&((async()=>this.algString=b(this,qi,Dc)?(await b(this,qi,Dc).get()).alg.toString():"")(),b(this,yr)==="alg"&&((t=b(this,ui))==null||t.experimentalModel.puzzleAlg.addFreshListener(n=>{if(n.issues.errors.length===0){this.setAlgIssueClassForPuzzle(n.issues.warnings.length===0?"none":"warning");const r=n.alg,s=Se.fromString(this.algString);r.isIdentical(s)||(this.algString=r.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async n=>{if(n===null)return;const[r,s]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(s==="auto"&&!b(this,fl))return;const a=r.indexToMoveStartTimestamp(n.leafInfo.idx),o=r.moveDuration(n.leafInfo.idx);let l;switch(n.where){case"before":{l=a;break}case"start":case"inside":{l=a+o/4;break}case"end":case"after":{l=a+o;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(l)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async n=>{const s=(await e.experimentalModel.indexer.get()).getAnimLeaf(n.patternIndex);this.highlightLeaf(s)})))}attributeChangedCallback(e,t,n){switch(e){case Ac:{const r=document.getElementById(n);if(!r){console.warn(`${Ac}= elem does not exist`);return}if(!(r instanceof Rl)){console.warn(`${Ac}=is not a twisty-player`);return}this.twistyPlayer=r;return}case Yg:{this.placeholder=n;return}case $g:{if(b(this,ui))throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");he(this,yr,n);return}}}static get observedAttributes(){return[Ac,Yg,$g]}},Ut=new WeakMap,xr=new WeakMap,ps=new WeakMap,Fi=new WeakMap,ms=new WeakMap,nh=new WeakMap,ui=new WeakMap,yr=new WeakMap,qi=new WeakSet,Dc=function(){return b(this,ui)===null?null:b(this,ui).experimentalModel[b(this,yr)]},fl=new WeakMap,Sf=function(e){return e.endsWith(`
`)?`${e} `:e},pl=new WeakMap,bv);an.define("twisty-alg-editor",VL);var Nc=new On;Nc.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var Qy=new On;Qy.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function GL(i="",e=location.href){const t={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},n=new URL(e).searchParams,r={};for(const[s,a]of Object.entries(t)){const o=n.get(i+s);if(o!==null){const l=Au[a];r[l]=o}}return r}var Ec="outer block moves (e.g. R, Rw, or 4r)",Cc="inner block moves (e.g. M or 2-5r)",Zg={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
• ${Cc} count as 2 turns
• ${Ec} count as 1 turn
• rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
• ${Cc} count as 2 turns per quantum (e.g. M2 counts as 4)
• ${Ec} count as 1 turn per quantum (e.g. R2 counts as 2)
• rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
• ${Cc} count as 1 turn
• ${Ec} count as 1 turn
• rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
• ${Cc} count as 1 turn per quantum (e.g. M2 counts as 2)
• ${Ec} count as 1 turn per quantum (e.g. R2 counts as 2)
• rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
• all moves (including rotations) count as 1 turn`},HL={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},Yi,bf,ih,_r,gs,ml,Uc,Tv,WL=(Tv=class extends qn{constructor(e){super({mode:"open"});J(this,Yi);F(this,"twistyPlayer",null);F(this,"a",null);J(this,ih);J(this,_r);J(this,gs);J(this,ml);this.options=e}async connectedCallback(){var s,a,o,l,c;if(he(this,gs,this.addElement(document.createElement("div"))),b(this,gs).classList.add("responsive-wrapper"),((s=this.options)==null?void 0:s.colorScheme)==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.addCSS(Nc),(a=this.options)!=null&&a.cdnForumTweaks&&this.addCSS(Qy),this.a=this.querySelector("a"),!this.a)return;const e=GL("",this.a.href),t=(o=this.a)==null?void 0:o.href,{hostname:n,pathname:r}=new URL(t);if(n!=="alpha.twizzle.net"){Qe(this,Yi,bf).call(this);return}if(["/edit/","/explore/"].includes(r)){const u=r==="/explore/";if(e.puzzle&&!(e.puzzle in Sy)){const f=(await pt(async()=>{const{getPuzzleDescriptionString:p}=await import("./CyCjVKmt.js");return{getPuzzleDescriptionString:p}},[],import.meta.url)).getPuzzleDescriptionString(e.puzzle);delete e.puzzle,e.experimentalPuzzleDescription=f}if(this.twistyPlayer=b(this,gs).appendChild(new Rl({background:(l=this.options)!=null&&l.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:((c=this.options)==null?void 0:c.colorScheme)==="dark"?"dark":"light",...e,viewerLink:u?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,e.experimentalTitle&&(this.twistyPlayer.experimentalTitle=e.experimentalTitle),he(this,_r,b(this,gs).appendChild(document.createElement("div"))),b(this,_r).classList.add("scrollable-region"),e.experimentalTitle&&Qe(this,Yi,Uc).call(this,e.experimentalTitle).classList.add("title"),e.experimentalSetupAlg){Qe(this,Yi,Uc).call(this,"Setup",async()=>{var p,v;return((v=await((p=this.twistyPlayer)==null?void 0:p.experimentalModel.setupAlg.get()))==null?void 0:v.alg.toString())??null});const f=b(this,_r).appendChild(document.createElement("div"));f.classList.add("setup-alg"),f.textContent=new Se(e.experimentalSetupAlg).toString()}const d=Qe(this,Yi,Uc).call(this,"Moves",async()=>{var f,p;return((p=await((f=this.twistyPlayer)==null?void 0:f.experimentalModel.alg.get()))==null?void 0:p.alg.toString())??null});he(this,ml,d.appendChild(XL(this.twistyPlayer.experimentalModel))),b(this,ml).classList.add("move-count"),b(this,_r).appendChild(new Zy({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else Qe(this,Yi,bf).call(this)}},Yi=new WeakSet,bf=function(){var t;if(this.contentWrapper.textContent="",this.a){const n=this.contentWrapper.appendChild(document.createElement("span"));n.textContent="❗️",n.title="Could not show a player for link",this.addElement(this.a)}this.removeCSS(Nc);const e=this.shadow.adoptedStyleSheets.indexOf(Nc);typeof e<"u"&&this.shadow.adoptedStyleSheets.splice(e,e+1),(t=b(this,ih))==null||t.remove()},ih=new WeakMap,_r=new WeakMap,gs=new WeakMap,ml=new WeakMap,Uc=function(e,t){const n=b(this,_r).appendChild(document.createElement("div"));n.classList.add("heading");const r=n.appendChild(document.createElement("span"));if(r.textContent=e,t){r.textContent+=" ";const s=r.appendChild(document.createElement("a"));s.textContent="📋",s.href="#",s.title="Copy to clipboard";async function a(o){s.textContent=o,await new Promise(l=>setTimeout(l,2e3)),s.textContent===o&&(s.textContent="📋")}s.addEventListener("click",async o=>{o.preventDefault(),s.textContent="📋…";const l=await t();if(l)try{await navigator.clipboard.writeText(l),a("📋✅")}catch(c){throw a("📋❌"),c}else a("📋❌")})}return n},Tv);an.define("twizzle-link",WL);function XL(i,e=document.createElement("span")){async function t(){const[n,r]=await Promise.all([i.puzzleAlg.get(),i.puzzleLoader.get()]);if(n.issues.errors.length!==0){e.textContent="";return}let s=!0;function a(o){s?s=!1:e.append(")(");const l=e.appendChild(document.createElement("span")),c=cR(r,o,n.alg);l.append(`${HL[o]}: `);const u=l.appendChild(document.createElement("span"));u.textContent=c.toString(),u.classList.add("move-number"),l.setAttribute("data-before",Zg[o]??""),l.setAttribute("title",Zg[o]??"")}e.textContent="(",r.id==="3x3x3"?(a("OBTM"),a("OBQTM"),a("RBTM")):r.pg&&(a("RBTM"),a("RBQTM")),a("ETM"),e.append(")")}return i.puzzleAlg.addFreshListener(t),i.puzzleID.addFreshListener(t),e}var qL=on('<div class="flex w-full justify-center"><twisty-player></twisty-player></div> <div class="flex justify-center w-full"><!> <!></div> <div class="flex w-full justify-center text-lg tracking-wider text-slate-700 cursor-pointer"> </div>',3);function YL(i,e){Qi(e,!0),Tf(()=>{customElements.get("twisty-player")||customElements.define("twisty-player",Rl)});let t,n=Bd(!1),r=jt(e,"puzzle",3,"3x3x3"),s=jt(e,"setup",3,"x2"),a=jt(e,"sticker",3,"full"),o=jt(e,"speed",3,1.5);function l(h){t.togglePlay(),zc(n,!Yt(n))}function c(){zc(n,!1),t.jumpToStart()}var u=Xn(),d=Ft(u);Hn(d,()=>Av,(h,f)=>{f(h,{class:"w-[288px] border-none shadow-none",children:(p,v)=>{var g=Xn(),m=Ft(g);Hn(m,()=>Ev,(_,y)=>{y(_,{class:"p-2",children:(x,P)=>{var A=qL(),C=Ft(A),I=_t(C);rn(()=>oi(I,"alg",e.alg.replaceAll("'2","2"))),oi(I,"experimental-setup-anchor","end"),rn(()=>oi(I,"experimental-setup-alg",s())),rn(()=>oi(I,"experimental-stickering",a())),rn(()=>oi(I,"puzzle",r())),rn(()=>oi(I,"tempo-scale",o())),oi(I,"background","none"),oi(I,"viewer-link","none"),oi(I,"control-panel","none"),oi(I,"style","width: 224px; height: 224px; margin: auto;"),oh(I,G=>t=G,()=>t),vt(C);var S=bt(C,2),M=_t(S);Pp(M,{variant:"ghost",size:"icon",onclick:l,children:(G,j)=>{var X=Xn(),ne=Ft(X);{var q=fe=>{S_(fe,{fill:"#475569",size:20,color:"#475569"})},le=fe=>{b_(fe,{fill:"#475569",size:20,color:"#475569"})};Oc(ne,fe=>{Yt(n)?fe(q):fe(le,!1)})}mt(G,X)},$$slots:{default:!0}});var D=bt(M,2);Pp(D,{variant:"ghost",size:"icon",onclick:c,children:(G,j)=>{T_(G,{fill:"#475569",size:20,color:"#475569"})},$$slots:{default:!0}}),vt(S);var V=bt(S,2),B=_t(V,!0);vt(V),rn(()=>Mr(B,e.alg)),mt(x,A)},$$slots:{default:!0}})}),mt(p,g)},$$slots:{default:!0}})}),mt(i,u),er()}var $L=on('<div class="text-xs text-slate-500 cursor-default"> </div>'),ZL=on('<p class="text-left"> <span class="ml-1 text-xs text-slate-500"> </span></p>'),KL=on("<!> <!>",1),jL=on('<div class="flex gap-1 w-full"><div class="flex flex-col items-center"><div class="w-24"><!> <img alt="" height="100px" width="100px"></div> <!></div> <div class="flex align-middle"><!></div></div>');function ao(i,e){Qi(e,!0);let t=jt(e,"bg",3,"t"),n=jt(e,"stage",3,void 0),r=jt(e,"name",3,void 0),s=Bd(""),a=Bd(!0);function o(){const f="https://cube.rider.biz/visualcube.php",p={size:144,fmt:"png",view:"plan",bg:t(),case:e.alg,stage:n()},v=new URLSearchParams;return Object.entries(p).forEach(([g,m])=>{m!==void 0&&v.append(g,String(m))}),`${f}?${v.toString()}`}Tf(()=>{zc(s,v_(o()))});function l(){zc(a,!1)}function c(f){return f=f.replace("(",""),f=f.replace(")",""),f}const u=rh(()=>c(e.alg));var d=Xn(),h=Ft(d);Hn(h,()=>Av,(f,p)=>{p(f,{children:(v,g)=>{var m=Xn(),_=Ft(m);Hn(_,()=>Ev,(y,x)=>{x(y,{class:"p-3",children:(P,A)=>{var C=jL(),I=_t(C),S=_t(I),M=_t(S);{var D=ne=>{w_(ne,{class:"h-[96px] w-[96px] rounded-xl"})};Oc(M,ne=>{Yt(a)&&ne(D)})}var V=bt(M,2);vt(S);var B=bt(S,2);{var G=ne=>{var q=$L(),le=_t(q,!0);vt(q),rn(()=>Mr(le,r())),mt(ne,q)};Oc(B,ne=>{r()&&ne(G)})}vt(I);var j=bt(I,2),X=_t(j);Hn(X,()=>D_,(ne,q)=>{q(ne,{children:(le,fe)=>{var be=KL(),He=Ft(be);Hn(He,()=>N_,($,se)=>{se($,{children:(Ae,ue)=>{var Ue=ZL(),Ge=_t(Ue,!0),Oe=bt(Ge),tt=_t(Oe);vt(Oe),vt(Ue),rn(Q=>{Mr(Ge,e.alg),Mr(tt,`(${Q??""})`)},[()=>Yt(u).split(" ").length]),mt(Ae,Ue)},$$slots:{default:!0}})});var ot=bt(He,2);Hn(ot,()=>P_,($,se)=>{se($,{class:"w-80 flex justify-center",children:(Ae,ue)=>{YL(Ae,{get alg(){return Yt(u)}})},$$slots:{default:!0}})}),mt(le,be)},$$slots:{default:!0}})}),vt(j),vt(C),rn(()=>{Dp(V,"src",Yt(s)),Dp(V,"style",`display: ${(Yt(a)?"none":"block")??""};`)}),s_("load",V,l),a_(V),mt(P,C)},$$slots:{default:!0}})}),mt(v,m)},$$slots:{default:!0}})}),mt(i,d),er()}var JL=on('<div class="text-slate-700 font-semibold text-xl mt-4 mb-3"><span class="text-indigo-500">#</span> </div>');function Kg(i,e){let t=jt(e,"text",3,"");var n=JL(),r=bt(_t(n));vt(n),rn(()=>Mr(r,` ${t()??""}`)),mt(i,n)}var QL=on('<div class="my-5"> </div>');function oo(i,e){let t=jt(e,"text",3,"");var n=QL(),r=_t(n,!0);vt(n),rn(()=>Mr(r,t())),mt(i,n)}var eP=on('<div class="flex items-baseline gap-x-2"><!><span> </span></div> <div> </div> <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2"></div> <!>',1),tP=on('<!> <!> <!> <!> <!> <div class="flex flex-col items-center my-4"><div class="flex justify-center gap-2 my-1"><div class="w-60"><!></div> <div class="w-60"><!></div></div> <div class="text-xs">OLL47與OLL48只是左右手互換的公式，外觀也是左右交換。</div></div> <div class="flex flex-col items-center my-4"><div class="flex justify-center gap-2 my-2"><div class="w-60"><!></div> <div class="w-60"><!></div></div> <div class="text-xs">OLL27與OLL7雖然外觀沒有任何的相似之處，但手法非常接近，可以一起學習。</div></div> <!> <!>',1);function gP(i,e){Qi(e,!0),Tf(()=>{x_.paths=["3x3x3 CFOP","OLL"]});const t=[{header:"二段OLL",description:"",stage:"oll",algorithms:[{alg:"R U R' U R U2' R'",name:"OLL27"},{alg:"R U2' R' U' R U' R'",name:"OLL26"},{alg:"F R U R' U' R U R' U' R U R' U' F'",name:"OLL21",algDisplay:"F (R U R' U') (R U R' U') (R U R' U') F'"},{alg:"R U2' R2' U' R2 U' R2' U2' R",name:"OLL22"},{alg:"x' R U L U' R' U L' U' x",name:"OLL25"},{alg:"x' R U L' U' R' U L U' x",name:"OLL24"},{alg:"R2' D' R U2' R' D R U2' R",name:"OLL23"}]},{header:"簡單OLL",description:"",stage:"oll",algorithms:[{alg:"F (R U R' U') F'",name:"OLL45"},{alg:"(R U R' U') R' F R F'",name:"OLL33"},{alg:"F (R U R' U') (R U R' U') F'",name:"OLL48"},{alg:"F' (L' U' L U) (L' U' L U) F",name:"OLL47"},{alg:"R' U' F' U F R",name:"OLL43"},{alg:"f (R U R' U') f'",name:"OLL44"},{alg:"F (U R U' R') (U R U' R') F'",name:"OLL51"},{alg:"R' U' R' F R F' U R",name:"OLL46"},{alg:"r U R' U R U2' r'",name:"OLL7"},{alg:"l' U' L U' L' U2' l",name:"OLL8"},{alg:"F R' F' R U R U' R'",name:"OLL37"},{alg:"r U2 R' U' R U' r'",name:"OLL6"},{alg:"l' U2 L U L' U l",name:"OLL5"},{alg:"r U R' U' r' R U R U' R'",name:"OLL28"},{alg:"R U R' U' R' r U R U' r'",name:"OLL57"},{alg:"(R U R' U) (R U' R' U') R' F R F'",name:"OLL38"},{alg:"(L' U' L U') (L' U L U) L F' L' F",name:"OLL36"}]}];var n=tP(),r=Ft(n);Kg(r,{text:"OLL"});var s=bt(r,2);oo(s,{text:`OLL (orientation of last
layer)為完成第三層頂面填色的步驟，本頁以黃色作為頂面，練完OLL，即可以一個公式完成黃色面。`});var a=bt(s,2);oo(a,{text:"整套OLL共有57個公式，一般來說，是初學玩家第一次學習這麼龐大的公式組合，對於手部肌肉記憶、辨識眼力都是一大挑戰。"});var o=bt(a,2);oo(o,{text:"第一次學習OLL這種大型公式的困難點有幾個，首先，OLL幾乎沒有可以靠「純理解」學習的公式，大部分是硬碰硬的練習；其次，整組公式有57個，好不容易背好的公式在實戰中也不常遇到，缺乏練習機會。剛開始練習的時候可能會覺得眼花撩亂、也許很容易背了就忘、或是混淆類似的公式，務必耐心學習。"});var l=bt(o,2);oo(l,{text:"雖說困難重重，但仍然有技巧可以採用。OLL的公式都有一個鏡像（左右相反）的兄弟，例如OLL47、OLL48，其實只是左右手交換，骨子裡根本是同樣的公式；此外，有些公式雖然形狀沒有關聯，但手順相當接近，例如OLL27與OLL7，這些都相當容易記憶。"});var c=bt(l,2),u=_t(c),d=_t(u),h=_t(d);ao(h,{alg:"F' (L' U' L U) (L' U' L U) F",name:"OLL47",stage:"oll"}),vt(d);var f=bt(d,2),p=_t(f);ao(p,{alg:"F (R U R' U') (R U R' U') F'",name:"OLL48",stage:"oll"}),vt(f),vt(u),kd(2),vt(c);var v=bt(c,2),g=_t(v),m=_t(g),_=_t(m);ao(_,{alg:"R U R' U R U2' R'",name:"OLL27",stage:"oll"}),vt(m);var y=bt(m,2),x=_t(y);ao(x,{alg:"r U R' U R U2' r'",name:"OLL7",stage:"oll"}),vt(y),vt(g),kd(2),vt(v);var P=bt(v,2);oo(P,{text:"練習的順序建議由「二段OLL」開始，這是最重要的7組公式，能大幅降低OLL的時間；接著，我們練習手順簡單、容易記憶的公式；最後再來處理形狀、手順都複雜的公式。"});var A=bt(P,2);Np(A,17,()=>t,Up,(C,I)=>{var S=eP(),M=Ft(S),D=_t(M);Kg(D,{get text(){return Yt(I).header}});var V=bt(D),B=_t(V);vt(V),vt(M);var G=bt(M,2),j=_t(G,!0);vt(G);var X=bt(G,2);Np(X,21,()=>Yt(I).algorithms,Up,(q,le)=>{ao(q,{get alg(){return Yt(le).alg},get name(){return Yt(le).name},get stage(){return Yt(I).stage}})}),vt(X);var ne=bt(X,2);g_(ne,{class:"my-8"}),rn(()=>{Mr(B,`(${Yt(I).algorithms.length??""})`),Mr(j,Yt(I).description)}),mt(C,S)}),mt(i,n),er()}export{je as B,_e as C,hi as D,zn as E,$i as F,aa as G,N as M,at as O,Gi as Q,B1 as T,R as V,gP as _,Ir as a,pP as b,Ve as c,kC as d,Ot as e,gt as f,dP as g,mP as h,yi as i,Mp as j,mn as k,te as l,Ls as m,Cn as n,fP as t};
