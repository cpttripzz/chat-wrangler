import{h as ve,v as he,Q as W,g as G}from"./use-dark.caa3d90c.js";import{Q as ke,b as ne,a as xe}from"./QPage.679fb374.js";import{b as ye,u as be,c as we,n as Me,e as pe,d as Se,l as de,o as le,q as Ce,Q as Ve}from"./use-key-composition.f3e2ce13.js";import{r as te,k as K,m as L,f as qe,a as B,c as ce,o as Fe,b as fe,h as X,a8 as Ee,g as me,E as oe,q as _e,u as Ae,v as Re,s as se,ac as Pe,M as Te,N as De,O as U,Q as d,P as M,U as ie}from"./index.017e4f14.js";import{_ as je}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-prevent-scroll.1613b18d.js";import"./use-timeout.4ad70990.js";const re={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ae={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ge=Object.keys(ae);ge.forEach(e=>{ae[e].regex=new RegExp(ae[e].pattern)});const Ie=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ge.join("")+"])|(.)","g"),ue=/[.*+?^${}()|[\]\\]/g,p=String.fromCharCode(1),Oe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ne(e,s,T,E){let i,f,r,P,O,y;const C=te(null),g=te(u());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}K(()=>e.type+e.autogrow,D),K(()=>e.mask,l=>{if(l!==void 0)N(g.value,!0);else{const a=R(g.value);D(),e.modelValue!==a&&s("update:modelValue",a)}}),K(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&N(g.value,!0)}),K(()=>e.unmaskedValue,()=>{C.value===!0&&N(g.value)});function u(){if(D(),C.value===!0){const l=F(R(e.modelValue));return e.fillMask!==!1?J(l):l}return e.modelValue}function V(l){if(l<i.length)return i.slice(-l);let a="",o=i;const n=o.indexOf(p);if(n!==-1){for(let m=l-o.length;m>0;m--)a+=p;o=o.slice(0,n)+a+o.slice(n)}return o}function D(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&H(),C.value===!1){P=void 0,i="",f="";return}const l=re[e.mask]===void 0?e.mask:re[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",o=a.replace(ue,"\\$&"),n=[],m=[],c=[];let w=e.reverseFillMask===!0,v="",h="";l.replace(Ie,(S,t,x,z,I)=>{if(z!==void 0){const _=ae[z];c.push(_),h=_.negate,w===!0&&(m.push("(?:"+h+"+)?("+_.pattern+"+)?(?:"+h+"+)?("+_.pattern+"+)?"),w=!1),m.push("(?:"+h+"+)?("+_.pattern+")?")}else if(x!==void 0)v="\\"+(x==="\\"?"":x),c.push(x),n.push("([^"+v+"]+)?"+v+"?");else{const _=t!==void 0?t:I;v=_==="\\"?"\\\\\\\\":_.replace(ue,"\\\\$&"),c.push(_),n.push("([^"+v+"]+)?"+v+"?")}});const Q=new RegExp("^"+n.join("")+"("+(v===""?".":"[^"+v+"]")+"+)?"+(v===""?"":"["+v+"]*")+"$"),Z=m.length-1,k=m.map((S,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+o+"*"+S):t===Z?new RegExp("^"+S+"("+(h===""?".":h)+"+)?"+(e.reverseFillMask===!0?"$":o+"*")):new RegExp("^"+S));r=c,P=S=>{const t=Q.exec(e.reverseFillMask===!0?S:S.slice(0,c.length+1));t!==null&&(S=t.slice(1).join(""));const x=[],z=k.length;for(let I=0,_=S;I<z;I++){const $=k[I].exec(_);if($===null)break;_=_.slice($.shift().length),x.push(...$)}return x.length!==0?x.join(""):S},i=c.map(S=>typeof S=="string"?S:p).join(""),f=i.split(p).join(a)}function N(l,a,o){const n=E.value,m=n.selectionEnd,c=n.value.length-m,w=R(l);a===!0&&D();const v=F(w),h=e.fillMask!==!1?J(v):v,Q=g.value!==h;n.value!==h&&(n.value=h),Q===!0&&(g.value=h),document.activeElement===n&&L(()=>{if(h===f){const k=e.reverseFillMask===!0?f.length:0;n.setSelectionRange(k,k,"forward");return}if(o==="insertFromPaste"&&e.reverseFillMask!==!0){const k=n.selectionEnd;let S=m-1;for(let t=O;t<=S&&t<k;t++)i[t]!==p&&S++;A.right(n,S);return}if(["deleteContentBackward","deleteContentForward"].indexOf(o)!==-1){const k=e.reverseFillMask===!0?m===0?h.length>v.length?1:0:Math.max(0,h.length-(h===f?0:Math.min(v.length,c)+1))+1:m;n.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(Q===!0){const k=Math.max(0,h.length-(h===f?0:Math.min(v.length,c+1)));k===1&&m===1?n.setSelectionRange(k,k,"forward"):A.rightReverse(n,k)}else{const k=h.length-c;n.setSelectionRange(k,k,"backward")}else if(Q===!0){const k=Math.max(0,i.indexOf(p),Math.min(v.length,m)-1);A.right(n,k)}else{const k=m-1;A.right(n,k)}});const Z=e.unmaskedValue===!0?R(h):h;String(e.modelValue)!==Z&&(e.modelValue!==null||Z!=="")&&T(Z,!0)}function Y(l,a,o){const n=F(R(l.value));a=Math.max(0,i.indexOf(p),Math.min(n.length,a)),O=a,l.setSelectionRange(a,o,"forward")}const A={left(l,a){const o=i.slice(a-1).indexOf(p)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n]===p){a=n,o===!0&&a++;break}if(n<0&&i[a]!==void 0&&i[a]!==p)return A.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const o=l.value.length;let n=Math.min(o,a+1);for(;n<=o;n++)if(i[n]===p){a=n;break}else i[n-1]===p&&(a=n);if(n>o&&i[a-1]!==void 0&&i[a-1]!==p)return A.left(l,o);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const o=V(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(o[n-1]===p){a=n;break}else if(o[n]===p&&(a=n,n===0))break;if(n<0&&o[a]!==void 0&&o[a]!==p)return A.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const o=l.value.length,n=V(o),m=n.slice(0,a+1).indexOf(p)===-1;let c=Math.min(o,a+1);for(;c<=o;c++)if(n[c-1]===p){a=c,a>0&&m===!0&&a--;break}if(c>o&&n[a-1]!==void 0&&n[a-1]!==p)return A.leftReverse(l,o);l.setSelectionRange(a,a,"forward")}};function b(l){s("click",l),y=void 0}function q(l){if(s("keydown",l),qe(l)===!0||l.altKey===!0)return;const a=E.value,o=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(y=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&y===void 0&&(y=a.selectionDirection==="forward"?o:n);const m=A[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),m(a,y===o?n:o),l.shiftKey){const c=a.selectionStart;a.setSelectionRange(Math.min(y,c),Math.max(y,c),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&o===n?(A.left(a,o),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&o===n&&(A.rightReverse(a,n),a.setSelectionRange(o,a.selectionEnd,"forward"))}function F(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return j(l);const a=r;let o=0,n="";for(let m=0;m<a.length;m++){const c=l[o],w=a[m];if(typeof w=="string")n+=w,c===w&&o++;else if(c!==void 0&&w.regex.test(c))n+=w.transform!==void 0?w.transform(c):c,o++;else return n}return n}function j(l){const a=r,o=i.indexOf(p);let n=l.length-1,m="";for(let c=a.length-1;c>=0&&n!==-1;c--){const w=a[c];let v=l[n];if(typeof w=="string")m=w+m,v===w&&n--;else if(v!==void 0&&w.regex.test(v))do m=(w.transform!==void 0?w.transform(v):v)+m,n--,v=l[n];while(o===c&&v!==void 0&&w.regex.test(v));else return m}return m}function R(l){return typeof l!="string"||P===void 0?typeof l=="number"?P(""+l):l:P(l)}function J(l){return f.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?f.slice(0,-l.length)+l:l+f.slice(l.length)}return{innerValue:g,hasMask:C,moveCursorForPaste:Y,updateMaskValue:N,onMaskedKeydown:q,onMaskedClick:b}}function Be(e,s){function T(){const E=e.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(E)===E&&("length"in E?Array.from(E):[E]).forEach(f=>{i.items.add(f)}),{files:i.files}}catch{return{files:void 0}}}return s===!0?B(()=>{if(e.type==="file")return T()}):B(T)}var ee=ce({name:"QInput",inheritAttrs:!1,props:{...ye,...Oe,...be,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...we,"paste","change","keydown","click","animationend"],setup(e,{emit:s,attrs:T}){const{proxy:E}=me(),{$q:i}=E,f={};let r=NaN,P,O,y=null,C;const g=te(null),H=Me(e),{innerValue:u,hasMask:V,moveCursorForPaste:D,updateMaskValue:N,onMaskedKeydown:Y,onMaskedClick:A}=Ne(e,s,v,g),b=Be(e,!0),q=B(()=>le(u.value)),F=Ce(c),j=pe({changeEvent:!0}),R=B(()=>e.type==="textarea"||e.autogrow===!0),J=B(()=>R.value===!0||["text","search","url","tel","password"].includes(e.type)),l=B(()=>{const t={...j.splitAttrs.listeners.value,onInput:c,onPaste:m,onChange:Q,onBlur:Z,onFocus:oe};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=F,V.value===!0&&(t.onKeydown=Y,t.onClick=A),e.autogrow===!0&&(t.onAnimationend=w),t}),a=B(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...j.splitAttrs.attributes.value,id:j.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return R.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});K(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),K(()=>e.modelValue,t=>{if(V.value===!0){if(O===!0&&(O=!1,String(t)===r))return;N(t)}else u.value!==t&&(u.value=t,e.type==="number"&&f.hasOwnProperty("value")===!0&&(P===!0?P=!1:delete f.value));e.autogrow===!0&&L(h)}),K(()=>e.autogrow,t=>{t===!0?L(h):g.value!==null&&T.rows>0&&(g.value.style.height="auto")}),K(()=>e.dense,()=>{e.autogrow===!0&&L(h)});function o(){de(()=>{const t=document.activeElement;g.value!==null&&g.value!==t&&(t===null||t.id!==j.targetUid.value)&&g.value.focus({preventScroll:!0})})}function n(){g.value!==null&&g.value.select()}function m(t){if(V.value===!0&&e.reverseFillMask!==!0){const x=t.target;D(x,x.selectionStart,x.selectionEnd)}s("paste",t)}function c(t){if(!t||!t.target)return;if(e.type==="file"){s("update:modelValue",t.target.files);return}const x=t.target.value;if(t.target.qComposing===!0){f.value=x;return}if(V.value===!0)N(x,!1,t.inputType);else if(v(x),J.value===!0&&t.target===document.activeElement){const{selectionStart:z,selectionEnd:I}=t.target;z!==void 0&&I!==void 0&&L(()=>{t.target===document.activeElement&&x.indexOf(t.target.value)===0&&t.target.setSelectionRange(z,I)})}e.autogrow===!0&&h()}function w(t){s("animationend",t),h()}function v(t,x){C=()=>{y=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==t&&r!==t&&(r=t,x===!0&&(O=!0),s("update:modelValue",t),L(()=>{r===t&&(r=NaN)})),C=void 0},e.type==="number"&&(P=!0,f.value=t),e.debounce!==void 0?(y!==null&&clearTimeout(y),f.value=t,y=setTimeout(C,e.debounce)):C()}function h(){requestAnimationFrame(()=>{const t=g.value;if(t!==null){const x=t.parentNode.style,{scrollTop:z}=t,{overflowY:I,maxHeight:_}=i.platform.is.firefox===!0?{}:window.getComputedStyle(t),$=I!==void 0&&I!=="scroll";$===!0&&(t.style.overflowY="hidden"),x.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",$===!0&&(t.style.overflowY=parseInt(_,10)<t.scrollHeight?"auto":"hidden"),x.marginBottom="",t.scrollTop=z}})}function Q(t){F(t),y!==null&&(clearTimeout(y),y=null),C!==void 0&&C(),s("change",t.target.value)}function Z(t){t!==void 0&&oe(t),y!==null&&(clearTimeout(y),y=null),C!==void 0&&C(),P=!1,O=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=u.value!==void 0?u.value:"")})}function k(){return f.hasOwnProperty("value")===!0?f.value:u.value!==void 0?u.value:""}Fe(()=>{Z()}),fe(()=>{e.autogrow===!0&&h()}),Object.assign(j,{innerValue:u,fieldClass:B(()=>`q-${R.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:v,hasValue:q,floatingLabel:B(()=>q.value===!0&&(e.type!=="number"||isNaN(u.value)===!1)||le(e.displayValue)),getControl:()=>X(R.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:k()}:b.value}),getShadowControl:()=>X("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(R.value===!0?"":" text-no-wrap")},[X("span",{class:"invisible"},k()),X("span",e.shadowText)])});const S=Se(j);return Object.assign(E,{focus:o,select:n,getNativeElement:()=>g.value}),Ee(E,"nativeEl",()=>g.value),S}}),ze=ce({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:s,emit:T}){const E=me(),i=te(null);let f=0;const r=[];function P(u){const V=typeof u=="boolean"?u:e.noErrorFocus!==!0,D=++f,N=(b,q)=>{T(`validation${b===!0?"Success":"Error"}`,q)},Y=b=>{const q=b.validate();return typeof q.then=="function"?q.then(F=>({valid:F,comp:b}),F=>({valid:!1,comp:b,err:F})):Promise.resolve({valid:q,comp:b})};return(e.greedy===!0?Promise.all(r.map(Y)).then(b=>b.filter(q=>q.valid!==!0)):r.reduce((b,q)=>b.then(()=>Y(q).then(F=>{if(F.valid===!1)return Promise.reject(F)})),Promise.resolve()).catch(b=>[b])).then(b=>{if(b===void 0||b.length===0)return D===f&&N(!0),!0;if(D===f){const{comp:q,err:F}=b[0];if(F!==void 0&&console.error(F),N(!1,q),V===!0){const j=b.find(({comp:R})=>typeof R.focus=="function"&&he(R.$)===!1);j!==void 0&&j.comp.focus()}}return!1})}function O(){f++,r.forEach(u=>{typeof u.resetValidation=="function"&&u.resetValidation()})}function y(u){u!==void 0&&se(u);const V=f+1;P().then(D=>{V===f&&D===!0&&(e.onSubmit!==void 0?T("submit",u):u!==void 0&&u.target!==void 0&&typeof u.target.submit=="function"&&u.target.submit())})}function C(u){u!==void 0&&se(u),T("reset"),L(()=>{O(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){de(()=>{if(i.value===null)return;const u=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),V=>V.tabIndex!==-1);u!=null&&u.focus({preventScroll:!0})})}_e(Pe,{bindComponent(u){r.push(u)},unbindComponent(u){const V=r.indexOf(u);V!==-1&&r.splice(V,1)}});let H=!1;return Ae(()=>{H=!0}),Re(()=>{H===!0&&e.autofocus===!0&&g()}),fe(()=>{e.autofocus===!0&&g()}),Object.assign(E.proxy,{validate:P,resetValidation:O,submit:y,reset:C,focus:g,getValidationComponents:()=>r}),()=>X("form",{class:"q-form",ref:i,onSubmit:y,onReset:C},ve(s.default))}});const Ze={name:"ContactPage",data(){return{formData:{name:"",email:"",subject:"",message:""},submitting:!1,showSuccess:!1}},methods:{isValidEmail(e){return/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(e)},async onSubmit(){this.submitting=!0;try{await new Promise(e=>setTimeout(e,1500)),this.formData={name:"",email:"",subject:"",message:""},this.showSuccess=!0,setTimeout(()=>{this.showSuccess=!1},3e3)}catch{this.$q.notify({type:"negative",message:"Failed to send message. Please try again.",position:"top"})}finally{this.submitting=!1}}}},Ke={class:"row q-col-gutter-xl"},Qe={class:"col-12 col-md-5"},Ue={class:"contact-details q-gutter-y-md"},Le={class:"row items-center q-gutter-x-md"},He={class:"row items-center q-gutter-x-md"},Ye={class:"row items-center q-gutter-x-md"},$e={class:"row items-center q-gutter-x-md"},We={class:"social-links q-mt-xl"},Ge={class:"row q-gutter-sm"},Xe={class:"col-12 col-md-7"},Je={class:"row q-col-gutter-md"},et={class:"col-12 col-sm-6"},tt={class:"col-12 col-sm-6"},at={class:"row justify-end q-mt-md"};function nt(e,s,T,E,i,f){return Te(),De(ke,{class:"contact-page q-pa-md"},{default:U(()=>[s[13]||(s[13]=d("div",{class:"text-center q-mb-xl"},[d("h1",{class:"text-h2 text-weight-bold gradient-text q-mb-md"},"Get in Touch"),d("p",{class:"text-h6 text-grey-4 q-mb-xl"}," Have a question or want to work together? We'd love to hear from you. ")],-1)),d("div",Ke,[d("div",Qe,[M(ne,{class:"contact-info-card bg-dark q-pa-lg"},{default:U(()=>[s[10]||(s[10]=d("h2",{class:"text-h4 text-purple-4 q-mb-lg"},"Contact Information",-1)),d("div",Ue,[d("div",Le,[M(W,{name:"email",color:"purple-4",size:"sm"}),s[5]||(s[5]=d("div",null,[d("p",{class:"text-weight-medium text-purple-3 q-mb-none"},"Email"),d("a",{href:"mailto:contact@quasarlabs.com",class:"text-grey-4"}," contact@quasarlabs.com ")],-1))]),d("div",He,[M(W,{name:"phone",color:"purple-4",size:"sm"}),s[6]||(s[6]=d("div",null,[d("p",{class:"text-weight-medium text-purple-3 q-mb-none"},"Phone"),d("p",{class:"text-grey-4"},"+1 (555) 123-4567")],-1))]),d("div",Ye,[M(W,{name:"location_on",color:"purple-4",size:"sm"}),s[7]||(s[7]=d("div",null,[d("p",{class:"text-weight-medium text-purple-3 q-mb-none"},"Location"),d("p",{class:"text-grey-4"},[ie("123 Innovation Drive"),d("br"),ie("Tech City, TC 12345")])],-1))]),d("div",$e,[M(W,{name:"schedule",color:"purple-4",size:"sm"}),s[8]||(s[8]=d("div",null,[d("p",{class:"text-weight-medium text-purple-3 q-mb-none"},"Business Hours"),d("p",{class:"text-grey-4"},"Mon - Fri: 9:00 AM - 6:00 PM")],-1))])]),d("div",We,[s[9]||(s[9]=d("h3",{class:"text-h6 text-purple-4 q-mb-md"},"Connect With Us",-1)),d("div",Ge,[M(G,{round:"",flat:"",color:"purple-4",icon:"fab fa-linkedin",type:"a",href:"#",target:"_blank"}),M(G,{round:"",flat:"",color:"purple-4",icon:"fab fa-twitter",type:"a",href:"#",target:"_blank"}),M(G,{round:"",flat:"",color:"purple-4",icon:"fab fa-github",type:"a",href:"#",target:"_blank"}),M(G,{round:"",flat:"",color:"purple-4",icon:"fab fa-instagram",type:"a",href:"#",target:"_blank"})])])]),_:1})]),d("div",Xe,[M(ne,{class:"contact-form-card bg-dark q-pa-lg"},{default:U(()=>[s[11]||(s[11]=d("h2",{class:"text-h4 text-purple-4 q-mb-lg"},"Send us a Message",-1)),M(ze,{onSubmit:f.onSubmit,class:"q-gutter-md"},{default:U(()=>[d("div",Je,[d("div",et,[M(ee,{modelValue:i.formData.name,"onUpdate:modelValue":s[0]||(s[0]=r=>i.formData.name=r),label:"Your Name",filled:"",dark:"",rules:[r=>!!r||"Name is required"]},null,8,["modelValue","rules"])]),d("div",tt,[M(ee,{modelValue:i.formData.email,"onUpdate:modelValue":s[1]||(s[1]=r=>i.formData.email=r),label:"Email Address",filled:"",dark:"",type:"email",rules:[r=>!!r||"Email is required",r=>f.isValidEmail(r)||"Please enter a valid email"]},null,8,["modelValue","rules"])])]),M(ee,{modelValue:i.formData.subject,"onUpdate:modelValue":s[2]||(s[2]=r=>i.formData.subject=r),label:"Subject",filled:"",dark:"",rules:[r=>!!r||"Subject is required"]},null,8,["modelValue","rules"]),M(ee,{modelValue:i.formData.message,"onUpdate:modelValue":s[3]||(s[3]=r=>i.formData.message=r),label:"Your Message",filled:"",dark:"",type:"textarea",rows:"6",rules:[r=>!!r||"Message is required"]},null,8,["modelValue","rules"]),d("div",at,[M(G,{type:"submit",label:"Send Message",color:"purple-4",loading:i.submitting,"icon-right":"send",class:"q-px-md"},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})])]),M(Ve,{modelValue:i.showSuccess,"onUpdate:modelValue":s[4]||(s[4]=r=>i.showSuccess=r)},{default:U(()=>[M(ne,{class:"bg-positive text-white q-pa-md"},{default:U(()=>[M(xe,{class:"row items-center"},{default:U(()=>[M(W,{name:"check_circle",size:"md",class:"q-mr-sm"}),s[12]||(s[12]=d("span",{class:"text-h6"},"Message Sent Successfully!",-1))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ct=je(Ze,[["render",nt],["__scopeId","data-v-761680ac"]]);export{ct as default};