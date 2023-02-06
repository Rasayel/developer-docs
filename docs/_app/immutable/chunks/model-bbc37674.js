var WI=Object.defineProperty;var jI=(t,a,i)=>a in t?WI(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;var tl=(t,a,i)=>(jI(t,typeof a!="symbol"?a+"":a,i),i);import{c as yr,u as ms}from"./_commonjsHelpers-f1989d07.js";import{ae as Is}from"./shared-d74a3711.js";function Ei(){return{convert:t=>t==null||t===""?null:String(t),asString:t=>String(t),type:t=>t.string().optional()}}function rl(t){return{convert:a=>{if(typeof a=="object")return a;if(typeof a=="string"){const i=JSON.parse(a);return typeof i!="object"?null:i}return null},asString:a=>JSON.stringify(a),type:a=>a.record(t(a).optional()).optional()}}function is(t){return{convert:a=>{if(Array.isArray(a))return a;if(typeof a=="string"){const i=JSON.parse(a);return Array.isArray(i)?i:null}return null},asString:a=>JSON.stringify(a),type:a=>a.array(t(a)).optional()}}function kn(t,a){const i=o=>a.convert(o[t]);return{name:$I(t),key:t,asEnv:o=>({[t]:a.asString(o)}),zod:{type:a.type},get:i,getOrDefault:(o,u)=>i(o)??u}}function $I(t){return t.toLowerCase().replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace("-","").replace("_",""))}var qI={APP_LOGO:kn("APP_LOGO",Ei()),APP_TITLE:kn("APP_TITLE",Ei()),APP_FAVICON:kn("APP_FAVICON",Ei()),SITE_ROOT:kn("SITE_ROOT",Ei()),SITE_META:kn("SITE_META",rl(t=>t.string())),QUERY_GENERATION_FACTORIES:kn("QUERY_GENERATION_FACTORIES",rl(t=>t.union([t.string(),t.boolean(),t.number(),t.null(),t.record(t.unknown())]))),PAGES:kn("PAGES",is(t=>{const a=t.lazy(()=>t.object({title:t.string().min(1),content:t.union([t.array(a),t.string().min(1)])}));return a})),EXTERNAL_LINKS:kn("EXTERNAL_LINKS",is(t=>t.object({label:t.string().min(1),href:t.string().min(1),position:t.union([t.literal("header"),t.literal("navigation")]).optional(),kind:t.string().min(1).optional(),group:t.string().min(1).optional()}))),DIRECTIVES:kn("DIRECTIVES",is(t=>t.object({name:t.string().min(1),args:t.array(t.string())})))};function YI(){return{convert:t=>{if(t===null||t===void 0)return null;switch(typeof t){case"boolean":return t;case"string":const a=t.toLowerCase().trim();return a==="true"||a==="t"||a==="1";case"number":return t!==0;default:return null}},asString:t=>String(t),type:t=>t.boolean().optional()}}kn("MAGIDOC_GENERATE",YI());var Tn={},QI={get exports(){return Tn},set exports(t){Tn=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,a){(function(){var i,o="4.17.21",u=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",g="Expected a function",A="Invalid `variable` option passed into `_.template`",E="__lodash_hash_undefined__",O=500,_="__lodash_placeholder__",R=1,B=2,X=4,G=1,fe=2,ae=1,Te=2,jn=4,Ae=8,Ne=16,De=32,ke=64,Le=128,$n=256,M=512,Q=30,Ve="...",it=800,Tt=16,Mr=1,wt=2,Dr=3,Ln=1/0,En=9007199254740991,xt=17976931348623157e292,At=0/0,sn=4294967295,S=sn-1,F=sn>>>1,x=[["ary",Le],["bind",ae],["bindKey",Te],["curry",Ae],["curryRight",Ne],["flip",M],["partial",De],["partialRight",ke],["rearg",$n]],U="[object Arguments]",ue="[object Array]",ve="[object AsyncFunction]",le="[object Boolean]",on="[object Date]",er="[object DOMException]",at="[object Error]",Fe="[object Function]",_s="[object GeneratorFunction]",yn="[object Map]",nr="[object Number]",ic="[object Null]",qn="[object Object]",bs="[object Promise]",ac="[object Proxy]",tr="[object RegExp]",vn="[object Set]",rr="[object String]",Rr="[object Symbol]",sc="[object Undefined]",ir="[object WeakMap]",oc="[object WeakSet]",ar="[object ArrayBuffer]",Ut="[object DataView]",Pi="[object Float32Array]",Bi="[object Float64Array]",ki="[object Int8Array]",Vi="[object Int16Array]",Gi="[object Int32Array]",Wi="[object Uint8Array]",ji="[object Uint8ClampedArray]",$i="[object Uint16Array]",qi="[object Uint32Array]",uc=/\b__p \+= '';/g,lc=/\b(__p \+=) '' \+/g,cc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ns=/&(?:amp|lt|gt|quot|#39);/g,Cs=/[&<>"']/g,pc=RegExp(Ns.source),fc=RegExp(Cs.source),dc=/<%-([\s\S]+?)%>/g,hc=/<%([\s\S]+?)%>/g,Os=/<%=([\s\S]+?)%>/g,gc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mc=/^\w*$/,Ic=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yi=/[\\^$.*+?()[\]{}|]/g,Tc=RegExp(Yi.source),Qi=/^\s+/,Ac=/\s/,Ec=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,yc=/\{\n\/\* \[wrapped with (.+)\] \*/,vc=/,? & /,Sc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_c=/[()=,{}\[\]\/\s]/,bc=/\\(\\)?/g,Nc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ms=/\w*$/,Cc=/^[-+]0x[0-9a-f]+$/i,Oc=/^0b[01]+$/i,Mc=/^\[object .+?Constructor\]$/,Dc=/^0o[0-7]+$/i,Rc=/^(?:0|[1-9]\d*)$/,wc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wr=/($^)/,xc=/['\n\r\u2028\u2029\\]/g,xr="\\ud800-\\udfff",Uc="\\u0300-\\u036f",Lc="\\ufe20-\\ufe2f",Fc="\\u20d0-\\u20ff",Ds=Uc+Lc+Fc,Rs="\\u2700-\\u27bf",ws="a-z\\xdf-\\xf6\\xf8-\\xff",Pc="\\xac\\xb1\\xd7\\xf7",Bc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kc="\\u2000-\\u206f",Vc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xs="A-Z\\xc0-\\xd6\\xd8-\\xde",Us="\\ufe0e\\ufe0f",Ls=Pc+Bc+kc+Vc,Hi="['’]",Gc="["+xr+"]",Fs="["+Ls+"]",Ur="["+Ds+"]",Ps="\\d+",Wc="["+Rs+"]",Bs="["+ws+"]",ks="[^"+xr+Ls+Ps+Rs+ws+xs+"]",Ji="\\ud83c[\\udffb-\\udfff]",jc="(?:"+Ur+"|"+Ji+")",Vs="[^"+xr+"]",zi="(?:\\ud83c[\\udde6-\\uddff]){2}",Ki="[\\ud800-\\udbff][\\udc00-\\udfff]",Lt="["+xs+"]",Gs="\\u200d",Ws="(?:"+Bs+"|"+ks+")",$c="(?:"+Lt+"|"+ks+")",js="(?:"+Hi+"(?:d|ll|m|re|s|t|ve))?",$s="(?:"+Hi+"(?:D|LL|M|RE|S|T|VE))?",qs=jc+"?",Ys="["+Us+"]?",qc="(?:"+Gs+"(?:"+[Vs,zi,Ki].join("|")+")"+Ys+qs+")*",Yc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Qs=Ys+qs+qc,Hc="(?:"+[Wc,zi,Ki].join("|")+")"+Qs,Jc="(?:"+[Vs+Ur+"?",Ur,zi,Ki,Gc].join("|")+")",zc=RegExp(Hi,"g"),Kc=RegExp(Ur,"g"),Xi=RegExp(Ji+"(?="+Ji+")|"+Jc+Qs,"g"),Xc=RegExp([Lt+"?"+Bs+"+"+js+"(?="+[Fs,Lt,"$"].join("|")+")",$c+"+"+$s+"(?="+[Fs,Lt+Ws,"$"].join("|")+")",Lt+"?"+Ws+"+"+js,Lt+"+"+$s,Qc,Yc,Ps,Hc].join("|"),"g"),Zc=RegExp("["+Gs+xr+Ds+Us+"]"),ep=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,np=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tp=-1,me={};me[Pi]=me[Bi]=me[ki]=me[Vi]=me[Gi]=me[Wi]=me[ji]=me[$i]=me[qi]=!0,me[U]=me[ue]=me[ar]=me[le]=me[Ut]=me[on]=me[at]=me[Fe]=me[yn]=me[nr]=me[qn]=me[tr]=me[vn]=me[rr]=me[ir]=!1;var ge={};ge[U]=ge[ue]=ge[ar]=ge[Ut]=ge[le]=ge[on]=ge[Pi]=ge[Bi]=ge[ki]=ge[Vi]=ge[Gi]=ge[yn]=ge[nr]=ge[qn]=ge[tr]=ge[vn]=ge[rr]=ge[Rr]=ge[Wi]=ge[ji]=ge[$i]=ge[qi]=!0,ge[at]=ge[Fe]=ge[ir]=!1;var rp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ip={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ap={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},op=parseFloat,up=parseInt,Hs=typeof yr=="object"&&yr&&yr.Object===Object&&yr,lp=typeof self=="object"&&self&&self.Object===Object&&self,xe=Hs||lp||Function("return this")(),Zi=a&&!a.nodeType&&a,Et=Zi&&!0&&t&&!t.nodeType&&t,Js=Et&&Et.exports===Zi,ea=Js&&Hs.process,un=function(){try{var m=Et&&Et.require&&Et.require("util").types;return m||ea&&ea.binding&&ea.binding("util")}catch{}}(),zs=un&&un.isArrayBuffer,Ks=un&&un.isDate,Xs=un&&un.isMap,Zs=un&&un.isRegExp,eo=un&&un.isSet,no=un&&un.isTypedArray;function Ze(m,v,y){switch(y.length){case 0:return m.call(v);case 1:return m.call(v,y[0]);case 2:return m.call(v,y[0],y[1]);case 3:return m.call(v,y[0],y[1],y[2])}return m.apply(v,y)}function cp(m,v,y,L){for(var H=-1,oe=m==null?0:m.length;++H<oe;){var Oe=m[H];v(L,Oe,y(Oe),m)}return L}function ln(m,v){for(var y=-1,L=m==null?0:m.length;++y<L&&v(m[y],y,m)!==!1;);return m}function pp(m,v){for(var y=m==null?0:m.length;y--&&v(m[y],y,m)!==!1;);return m}function to(m,v){for(var y=-1,L=m==null?0:m.length;++y<L;)if(!v(m[y],y,m))return!1;return!0}function st(m,v){for(var y=-1,L=m==null?0:m.length,H=0,oe=[];++y<L;){var Oe=m[y];v(Oe,y,m)&&(oe[H++]=Oe)}return oe}function Lr(m,v){var y=m==null?0:m.length;return!!y&&Ft(m,v,0)>-1}function na(m,v,y){for(var L=-1,H=m==null?0:m.length;++L<H;)if(y(v,m[L]))return!0;return!1}function Ie(m,v){for(var y=-1,L=m==null?0:m.length,H=Array(L);++y<L;)H[y]=v(m[y],y,m);return H}function ot(m,v){for(var y=-1,L=v.length,H=m.length;++y<L;)m[H+y]=v[y];return m}function ta(m,v,y,L){var H=-1,oe=m==null?0:m.length;for(L&&oe&&(y=m[++H]);++H<oe;)y=v(y,m[H],H,m);return y}function fp(m,v,y,L){var H=m==null?0:m.length;for(L&&H&&(y=m[--H]);H--;)y=v(y,m[H],H,m);return y}function ra(m,v){for(var y=-1,L=m==null?0:m.length;++y<L;)if(v(m[y],y,m))return!0;return!1}var dp=ia("length");function hp(m){return m.split("")}function gp(m){return m.match(Sc)||[]}function ro(m,v,y){var L;return y(m,function(H,oe,Oe){if(v(H,oe,Oe))return L=oe,!1}),L}function Fr(m,v,y,L){for(var H=m.length,oe=y+(L?1:-1);L?oe--:++oe<H;)if(v(m[oe],oe,m))return oe;return-1}function Ft(m,v,y){return v===v?Cp(m,v,y):Fr(m,io,y)}function mp(m,v,y,L){for(var H=y-1,oe=m.length;++H<oe;)if(L(m[H],v))return H;return-1}function io(m){return m!==m}function ao(m,v){var y=m==null?0:m.length;return y?sa(m,v)/y:At}function ia(m){return function(v){return v==null?i:v[m]}}function aa(m){return function(v){return m==null?i:m[v]}}function so(m,v,y,L,H){return H(m,function(oe,Oe,de){y=L?(L=!1,oe):v(y,oe,Oe,de)}),y}function Ip(m,v){var y=m.length;for(m.sort(v);y--;)m[y]=m[y].value;return m}function sa(m,v){for(var y,L=-1,H=m.length;++L<H;){var oe=v(m[L]);oe!==i&&(y=y===i?oe:y+oe)}return y}function oa(m,v){for(var y=-1,L=Array(m);++y<m;)L[y]=v(y);return L}function Tp(m,v){return Ie(v,function(y){return[y,m[y]]})}function oo(m){return m&&m.slice(0,po(m)+1).replace(Qi,"")}function en(m){return function(v){return m(v)}}function ua(m,v){return Ie(v,function(y){return m[y]})}function sr(m,v){return m.has(v)}function uo(m,v){for(var y=-1,L=m.length;++y<L&&Ft(v,m[y],0)>-1;);return y}function lo(m,v){for(var y=m.length;y--&&Ft(v,m[y],0)>-1;);return y}function Ap(m,v){for(var y=m.length,L=0;y--;)m[y]===v&&++L;return L}var Ep=aa(rp),yp=aa(ip);function vp(m){return"\\"+sp[m]}function Sp(m,v){return m==null?i:m[v]}function Pt(m){return Zc.test(m)}function _p(m){return ep.test(m)}function bp(m){for(var v,y=[];!(v=m.next()).done;)y.push(v.value);return y}function la(m){var v=-1,y=Array(m.size);return m.forEach(function(L,H){y[++v]=[H,L]}),y}function co(m,v){return function(y){return m(v(y))}}function ut(m,v){for(var y=-1,L=m.length,H=0,oe=[];++y<L;){var Oe=m[y];(Oe===v||Oe===_)&&(m[y]=_,oe[H++]=y)}return oe}function Pr(m){var v=-1,y=Array(m.size);return m.forEach(function(L){y[++v]=L}),y}function Np(m){var v=-1,y=Array(m.size);return m.forEach(function(L){y[++v]=[L,L]}),y}function Cp(m,v,y){for(var L=y-1,H=m.length;++L<H;)if(m[L]===v)return L;return-1}function Op(m,v,y){for(var L=y+1;L--;)if(m[L]===v)return L;return L}function Bt(m){return Pt(m)?Dp(m):dp(m)}function Sn(m){return Pt(m)?Rp(m):hp(m)}function po(m){for(var v=m.length;v--&&Ac.test(m.charAt(v)););return v}var Mp=aa(ap);function Dp(m){for(var v=Xi.lastIndex=0;Xi.test(m);)++v;return v}function Rp(m){return m.match(Xi)||[]}function wp(m){return m.match(Xc)||[]}var xp=function m(v){v=v==null?xe:kt.defaults(xe.Object(),v,kt.pick(xe,np));var y=v.Array,L=v.Date,H=v.Error,oe=v.Function,Oe=v.Math,de=v.Object,ca=v.RegExp,Up=v.String,cn=v.TypeError,Br=y.prototype,Lp=oe.prototype,Vt=de.prototype,kr=v["__core-js_shared__"],Vr=Lp.toString,pe=Vt.hasOwnProperty,Fp=0,fo=function(){var e=/[^.]+$/.exec(kr&&kr.keys&&kr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Gr=Vt.toString,Pp=Vr.call(de),Bp=xe._,kp=ca("^"+Vr.call(pe).replace(Yi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wr=Js?v.Buffer:i,lt=v.Symbol,jr=v.Uint8Array,ho=Wr?Wr.allocUnsafe:i,$r=co(de.getPrototypeOf,de),go=de.create,mo=Vt.propertyIsEnumerable,qr=Br.splice,Io=lt?lt.isConcatSpreadable:i,or=lt?lt.iterator:i,yt=lt?lt.toStringTag:i,Yr=function(){try{var e=Nt(de,"defineProperty");return e({},"",{}),e}catch{}}(),Vp=v.clearTimeout!==xe.clearTimeout&&v.clearTimeout,Gp=L&&L.now!==xe.Date.now&&L.now,Wp=v.setTimeout!==xe.setTimeout&&v.setTimeout,Qr=Oe.ceil,Hr=Oe.floor,pa=de.getOwnPropertySymbols,jp=Wr?Wr.isBuffer:i,To=v.isFinite,$p=Br.join,qp=co(de.keys,de),Me=Oe.max,Pe=Oe.min,Yp=L.now,Qp=v.parseInt,Ao=Oe.random,Hp=Br.reverse,fa=Nt(v,"DataView"),ur=Nt(v,"Map"),da=Nt(v,"Promise"),Gt=Nt(v,"Set"),lr=Nt(v,"WeakMap"),cr=Nt(de,"create"),Jr=lr&&new lr,Wt={},Jp=Ct(fa),zp=Ct(ur),Kp=Ct(da),Xp=Ct(Gt),Zp=Ct(lr),zr=lt?lt.prototype:i,pr=zr?zr.valueOf:i,Eo=zr?zr.toString:i;function c(e){if(ye(e)&&!J(e)&&!(e instanceof te)){if(e instanceof pn)return e;if(pe.call(e,"__wrapped__"))return yu(e)}return new pn(e)}var jt=function(){function e(){}return function(n){if(!Ee(n))return{};if(go)return go(n);e.prototype=n;var r=new e;return e.prototype=i,r}}();function Kr(){}function pn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}c.templateSettings={escape:dc,evaluate:hc,interpolate:Os,variable:"",imports:{_:c}},c.prototype=Kr.prototype,c.prototype.constructor=c,pn.prototype=jt(Kr.prototype),pn.prototype.constructor=pn;function te(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=sn,this.__views__=[]}function ef(){var e=new te(this.__wrapped__);return e.__actions__=Qe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Qe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Qe(this.__views__),e}function nf(){if(this.__filtered__){var e=new te(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function tf(){var e=this.__wrapped__.value(),n=this.__dir__,r=J(e),s=n<0,l=r?e.length:0,p=gd(0,l,this.__views__),d=p.start,h=p.end,I=h-d,b=s?h:d-1,N=this.__iteratees__,D=N.length,w=0,k=Pe(I,this.__takeCount__);if(!r||!s&&l==I&&k==I)return $o(e,this.__actions__);var q=[];e:for(;I--&&w<k;){b+=n;for(var K=-1,Y=e[b];++K<D;){var ee=N[K],ie=ee.iteratee,rn=ee.type,je=ie(Y);if(rn==wt)Y=je;else if(!je){if(rn==Mr)continue e;break e}}q[w++]=Y}return q}te.prototype=jt(Kr.prototype),te.prototype.constructor=te;function vt(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function rf(){this.__data__=cr?cr(null):{},this.size=0}function af(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function sf(e){var n=this.__data__;if(cr){var r=n[e];return r===E?i:r}return pe.call(n,e)?n[e]:i}function of(e){var n=this.__data__;return cr?n[e]!==i:pe.call(n,e)}function uf(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=cr&&n===i?E:n,this}vt.prototype.clear=rf,vt.prototype.delete=af,vt.prototype.get=sf,vt.prototype.has=of,vt.prototype.set=uf;function Yn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function lf(){this.__data__=[],this.size=0}function cf(e){var n=this.__data__,r=Xr(n,e);if(r<0)return!1;var s=n.length-1;return r==s?n.pop():qr.call(n,r,1),--this.size,!0}function pf(e){var n=this.__data__,r=Xr(n,e);return r<0?i:n[r][1]}function ff(e){return Xr(this.__data__,e)>-1}function df(e,n){var r=this.__data__,s=Xr(r,e);return s<0?(++this.size,r.push([e,n])):r[s][1]=n,this}Yn.prototype.clear=lf,Yn.prototype.delete=cf,Yn.prototype.get=pf,Yn.prototype.has=ff,Yn.prototype.set=df;function Qn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function hf(){this.size=0,this.__data__={hash:new vt,map:new(ur||Yn),string:new vt}}function gf(e){var n=ci(this,e).delete(e);return this.size-=n?1:0,n}function mf(e){return ci(this,e).get(e)}function If(e){return ci(this,e).has(e)}function Tf(e,n){var r=ci(this,e),s=r.size;return r.set(e,n),this.size+=r.size==s?0:1,this}Qn.prototype.clear=hf,Qn.prototype.delete=gf,Qn.prototype.get=mf,Qn.prototype.has=If,Qn.prototype.set=Tf;function St(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Qn;++n<r;)this.add(e[n])}function Af(e){return this.__data__.set(e,E),this}function Ef(e){return this.__data__.has(e)}St.prototype.add=St.prototype.push=Af,St.prototype.has=Ef;function _n(e){var n=this.__data__=new Yn(e);this.size=n.size}function yf(){this.__data__=new Yn,this.size=0}function vf(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Sf(e){return this.__data__.get(e)}function _f(e){return this.__data__.has(e)}function bf(e,n){var r=this.__data__;if(r instanceof Yn){var s=r.__data__;if(!ur||s.length<u-1)return s.push([e,n]),this.size=++r.size,this;r=this.__data__=new Qn(s)}return r.set(e,n),this.size=r.size,this}_n.prototype.clear=yf,_n.prototype.delete=vf,_n.prototype.get=Sf,_n.prototype.has=_f,_n.prototype.set=bf;function yo(e,n){var r=J(e),s=!r&&Ot(e),l=!r&&!s&&ht(e),p=!r&&!s&&!l&&Qt(e),d=r||s||l||p,h=d?oa(e.length,Up):[],I=h.length;for(var b in e)(n||pe.call(e,b))&&!(d&&(b=="length"||l&&(b=="offset"||b=="parent")||p&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Kn(b,I)))&&h.push(b);return h}function vo(e){var n=e.length;return n?e[_a(0,n-1)]:i}function Nf(e,n){return pi(Qe(e),_t(n,0,e.length))}function Cf(e){return pi(Qe(e))}function ha(e,n,r){(r!==i&&!bn(e[n],r)||r===i&&!(n in e))&&Hn(e,n,r)}function fr(e,n,r){var s=e[n];(!(pe.call(e,n)&&bn(s,r))||r===i&&!(n in e))&&Hn(e,n,r)}function Xr(e,n){for(var r=e.length;r--;)if(bn(e[r][0],n))return r;return-1}function Of(e,n,r,s){return ct(e,function(l,p,d){n(s,l,r(l),d)}),s}function So(e,n){return e&&Pn(n,Re(n),e)}function Mf(e,n){return e&&Pn(n,Je(n),e)}function Hn(e,n,r){n=="__proto__"&&Yr?Yr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function ga(e,n){for(var r=-1,s=n.length,l=y(s),p=e==null;++r<s;)l[r]=p?i:Ja(e,n[r]);return l}function _t(e,n,r){return e===e&&(r!==i&&(e=e<=r?e:r),n!==i&&(e=e>=n?e:n)),e}function fn(e,n,r,s,l,p){var d,h=n&R,I=n&B,b=n&X;if(r&&(d=l?r(e,s,l,p):r(e)),d!==i)return d;if(!Ee(e))return e;var N=J(e);if(N){if(d=Id(e),!h)return Qe(e,d)}else{var D=Be(e),w=D==Fe||D==_s;if(ht(e))return Qo(e,h);if(D==qn||D==U||w&&!l){if(d=I||w?{}:fu(e),!h)return I?sd(e,Mf(d,e)):ad(e,So(d,e))}else{if(!ge[D])return l?e:{};d=Td(e,D,h)}}p||(p=new _n);var k=p.get(e);if(k)return k;p.set(e,d),Gu(e)?e.forEach(function(Y){d.add(fn(Y,n,r,Y,e,p))}):ku(e)&&e.forEach(function(Y,ee){d.set(ee,fn(Y,n,r,ee,e,p))});var q=b?I?La:Ua:I?Je:Re,K=N?i:q(e);return ln(K||e,function(Y,ee){K&&(ee=Y,Y=e[ee]),fr(d,ee,fn(Y,n,r,ee,e,p))}),d}function Df(e){var n=Re(e);return function(r){return _o(r,e,n)}}function _o(e,n,r){var s=r.length;if(e==null)return!s;for(e=de(e);s--;){var l=r[s],p=n[l],d=e[l];if(d===i&&!(l in e)||!p(d))return!1}return!0}function bo(e,n,r){if(typeof e!="function")throw new cn(g);return Ar(function(){e.apply(i,r)},n)}function dr(e,n,r,s){var l=-1,p=Lr,d=!0,h=e.length,I=[],b=n.length;if(!h)return I;r&&(n=Ie(n,en(r))),s?(p=na,d=!1):n.length>=u&&(p=sr,d=!1,n=new St(n));e:for(;++l<h;){var N=e[l],D=r==null?N:r(N);if(N=s||N!==0?N:0,d&&D===D){for(var w=b;w--;)if(n[w]===D)continue e;I.push(N)}else p(n,D,s)||I.push(N)}return I}var ct=Xo(Fn),No=Xo(Ia,!0);function Rf(e,n){var r=!0;return ct(e,function(s,l,p){return r=!!n(s,l,p),r}),r}function Zr(e,n,r){for(var s=-1,l=e.length;++s<l;){var p=e[s],d=n(p);if(d!=null&&(h===i?d===d&&!tn(d):r(d,h)))var h=d,I=p}return I}function wf(e,n,r,s){var l=e.length;for(r=z(r),r<0&&(r=-r>l?0:l+r),s=s===i||s>l?l:z(s),s<0&&(s+=l),s=r>s?0:ju(s);r<s;)e[r++]=n;return e}function Co(e,n){var r=[];return ct(e,function(s,l,p){n(s,l,p)&&r.push(s)}),r}function Ue(e,n,r,s,l){var p=-1,d=e.length;for(r||(r=Ed),l||(l=[]);++p<d;){var h=e[p];n>0&&r(h)?n>1?Ue(h,n-1,r,s,l):ot(l,h):s||(l[l.length]=h)}return l}var ma=Zo(),Oo=Zo(!0);function Fn(e,n){return e&&ma(e,n,Re)}function Ia(e,n){return e&&Oo(e,n,Re)}function ei(e,n){return st(n,function(r){return Xn(e[r])})}function bt(e,n){n=ft(n,e);for(var r=0,s=n.length;e!=null&&r<s;)e=e[Bn(n[r++])];return r&&r==s?e:i}function Mo(e,n,r){var s=n(e);return J(e)?s:ot(s,r(e))}function Ge(e){return e==null?e===i?sc:ic:yt&&yt in de(e)?hd(e):Cd(e)}function Ta(e,n){return e>n}function xf(e,n){return e!=null&&pe.call(e,n)}function Uf(e,n){return e!=null&&n in de(e)}function Lf(e,n,r){return e>=Pe(n,r)&&e<Me(n,r)}function Aa(e,n,r){for(var s=r?na:Lr,l=e[0].length,p=e.length,d=p,h=y(p),I=1/0,b=[];d--;){var N=e[d];d&&n&&(N=Ie(N,en(n))),I=Pe(N.length,I),h[d]=!r&&(n||l>=120&&N.length>=120)?new St(d&&N):i}N=e[0];var D=-1,w=h[0];e:for(;++D<l&&b.length<I;){var k=N[D],q=n?n(k):k;if(k=r||k!==0?k:0,!(w?sr(w,q):s(b,q,r))){for(d=p;--d;){var K=h[d];if(!(K?sr(K,q):s(e[d],q,r)))continue e}w&&w.push(q),b.push(k)}}return b}function Ff(e,n,r,s){return Fn(e,function(l,p,d){n(s,r(l),p,d)}),s}function hr(e,n,r){n=ft(n,e),e=mu(e,n);var s=e==null?e:e[Bn(hn(n))];return s==null?i:Ze(s,e,r)}function Do(e){return ye(e)&&Ge(e)==U}function Pf(e){return ye(e)&&Ge(e)==ar}function Bf(e){return ye(e)&&Ge(e)==on}function gr(e,n,r,s,l){return e===n?!0:e==null||n==null||!ye(e)&&!ye(n)?e!==e&&n!==n:kf(e,n,r,s,gr,l)}function kf(e,n,r,s,l,p){var d=J(e),h=J(n),I=d?ue:Be(e),b=h?ue:Be(n);I=I==U?qn:I,b=b==U?qn:b;var N=I==qn,D=b==qn,w=I==b;if(w&&ht(e)){if(!ht(n))return!1;d=!0,N=!1}if(w&&!N)return p||(p=new _n),d||Qt(e)?lu(e,n,r,s,l,p):fd(e,n,I,r,s,l,p);if(!(r&G)){var k=N&&pe.call(e,"__wrapped__"),q=D&&pe.call(n,"__wrapped__");if(k||q){var K=k?e.value():e,Y=q?n.value():n;return p||(p=new _n),l(K,Y,r,s,p)}}return w?(p||(p=new _n),dd(e,n,r,s,l,p)):!1}function Vf(e){return ye(e)&&Be(e)==yn}function Ea(e,n,r,s){var l=r.length,p=l,d=!s;if(e==null)return!p;for(e=de(e);l--;){var h=r[l];if(d&&h[2]?h[1]!==e[h[0]]:!(h[0]in e))return!1}for(;++l<p;){h=r[l];var I=h[0],b=e[I],N=h[1];if(d&&h[2]){if(b===i&&!(I in e))return!1}else{var D=new _n;if(s)var w=s(b,N,I,e,n,D);if(!(w===i?gr(N,b,G|fe,s,D):w))return!1}}return!0}function Ro(e){if(!Ee(e)||vd(e))return!1;var n=Xn(e)?kp:Mc;return n.test(Ct(e))}function Gf(e){return ye(e)&&Ge(e)==tr}function Wf(e){return ye(e)&&Be(e)==vn}function jf(e){return ye(e)&&Ii(e.length)&&!!me[Ge(e)]}function wo(e){return typeof e=="function"?e:e==null?ze:typeof e=="object"?J(e)?Lo(e[0],e[1]):Uo(e):el(e)}function ya(e){if(!Tr(e))return qp(e);var n=[];for(var r in de(e))pe.call(e,r)&&r!="constructor"&&n.push(r);return n}function $f(e){if(!Ee(e))return Nd(e);var n=Tr(e),r=[];for(var s in e)s=="constructor"&&(n||!pe.call(e,s))||r.push(s);return r}function va(e,n){return e<n}function xo(e,n){var r=-1,s=He(e)?y(e.length):[];return ct(e,function(l,p,d){s[++r]=n(l,p,d)}),s}function Uo(e){var n=Pa(e);return n.length==1&&n[0][2]?hu(n[0][0],n[0][1]):function(r){return r===e||Ea(r,e,n)}}function Lo(e,n){return ka(e)&&du(n)?hu(Bn(e),n):function(r){var s=Ja(r,e);return s===i&&s===n?za(r,e):gr(n,s,G|fe)}}function ni(e,n,r,s,l){e!==n&&ma(n,function(p,d){if(l||(l=new _n),Ee(p))qf(e,n,d,r,ni,s,l);else{var h=s?s(Ga(e,d),p,d+"",e,n,l):i;h===i&&(h=p),ha(e,d,h)}},Je)}function qf(e,n,r,s,l,p,d){var h=Ga(e,r),I=Ga(n,r),b=d.get(I);if(b){ha(e,r,b);return}var N=p?p(h,I,r+"",e,n,d):i,D=N===i;if(D){var w=J(I),k=!w&&ht(I),q=!w&&!k&&Qt(I);N=I,w||k||q?J(h)?N=h:Se(h)?N=Qe(h):k?(D=!1,N=Qo(I,!0)):q?(D=!1,N=Ho(I,!0)):N=[]:Er(I)||Ot(I)?(N=h,Ot(h)?N=$u(h):(!Ee(h)||Xn(h))&&(N=fu(I))):D=!1}D&&(d.set(I,N),l(N,I,s,p,d),d.delete(I)),ha(e,r,N)}function Fo(e,n){var r=e.length;if(r)return n+=n<0?r:0,Kn(n,r)?e[n]:i}function Po(e,n,r){n.length?n=Ie(n,function(p){return J(p)?function(d){return bt(d,p.length===1?p[0]:p)}:p}):n=[ze];var s=-1;n=Ie(n,en($()));var l=xo(e,function(p,d,h){var I=Ie(n,function(b){return b(p)});return{criteria:I,index:++s,value:p}});return Ip(l,function(p,d){return id(p,d,r)})}function Yf(e,n){return Bo(e,n,function(r,s){return za(e,s)})}function Bo(e,n,r){for(var s=-1,l=n.length,p={};++s<l;){var d=n[s],h=bt(e,d);r(h,d)&&mr(p,ft(d,e),h)}return p}function Qf(e){return function(n){return bt(n,e)}}function Sa(e,n,r,s){var l=s?mp:Ft,p=-1,d=n.length,h=e;for(e===n&&(n=Qe(n)),r&&(h=Ie(e,en(r)));++p<d;)for(var I=0,b=n[p],N=r?r(b):b;(I=l(h,N,I,s))>-1;)h!==e&&qr.call(h,I,1),qr.call(e,I,1);return e}function ko(e,n){for(var r=e?n.length:0,s=r-1;r--;){var l=n[r];if(r==s||l!==p){var p=l;Kn(l)?qr.call(e,l,1):Ca(e,l)}}return e}function _a(e,n){return e+Hr(Ao()*(n-e+1))}function Hf(e,n,r,s){for(var l=-1,p=Me(Qr((n-e)/(r||1)),0),d=y(p);p--;)d[s?p:++l]=e,e+=r;return d}function ba(e,n){var r="";if(!e||n<1||n>En)return r;do n%2&&(r+=e),n=Hr(n/2),n&&(e+=e);while(n);return r}function Z(e,n){return Wa(gu(e,n,ze),e+"")}function Jf(e){return vo(Ht(e))}function zf(e,n){var r=Ht(e);return pi(r,_t(n,0,r.length))}function mr(e,n,r,s){if(!Ee(e))return e;n=ft(n,e);for(var l=-1,p=n.length,d=p-1,h=e;h!=null&&++l<p;){var I=Bn(n[l]),b=r;if(I==="__proto__"||I==="constructor"||I==="prototype")return e;if(l!=d){var N=h[I];b=s?s(N,I,h):i,b===i&&(b=Ee(N)?N:Kn(n[l+1])?[]:{})}fr(h,I,b),h=h[I]}return e}var Vo=Jr?function(e,n){return Jr.set(e,n),e}:ze,Kf=Yr?function(e,n){return Yr(e,"toString",{configurable:!0,enumerable:!1,value:Xa(n),writable:!0})}:ze;function Xf(e){return pi(Ht(e))}function dn(e,n,r){var s=-1,l=e.length;n<0&&(n=-n>l?0:l+n),r=r>l?l:r,r<0&&(r+=l),l=n>r?0:r-n>>>0,n>>>=0;for(var p=y(l);++s<l;)p[s]=e[s+n];return p}function Zf(e,n){var r;return ct(e,function(s,l,p){return r=n(s,l,p),!r}),!!r}function ti(e,n,r){var s=0,l=e==null?s:e.length;if(typeof n=="number"&&n===n&&l<=F){for(;s<l;){var p=s+l>>>1,d=e[p];d!==null&&!tn(d)&&(r?d<=n:d<n)?s=p+1:l=p}return l}return Na(e,n,ze,r)}function Na(e,n,r,s){var l=0,p=e==null?0:e.length;if(p===0)return 0;n=r(n);for(var d=n!==n,h=n===null,I=tn(n),b=n===i;l<p;){var N=Hr((l+p)/2),D=r(e[N]),w=D!==i,k=D===null,q=D===D,K=tn(D);if(d)var Y=s||q;else b?Y=q&&(s||w):h?Y=q&&w&&(s||!k):I?Y=q&&w&&!k&&(s||!K):k||K?Y=!1:Y=s?D<=n:D<n;Y?l=N+1:p=N}return Pe(p,S)}function Go(e,n){for(var r=-1,s=e.length,l=0,p=[];++r<s;){var d=e[r],h=n?n(d):d;if(!r||!bn(h,I)){var I=h;p[l++]=d===0?0:d}}return p}function Wo(e){return typeof e=="number"?e:tn(e)?At:+e}function nn(e){if(typeof e=="string")return e;if(J(e))return Ie(e,nn)+"";if(tn(e))return Eo?Eo.call(e):"";var n=e+"";return n=="0"&&1/e==-Ln?"-0":n}function pt(e,n,r){var s=-1,l=Lr,p=e.length,d=!0,h=[],I=h;if(r)d=!1,l=na;else if(p>=u){var b=n?null:cd(e);if(b)return Pr(b);d=!1,l=sr,I=new St}else I=n?[]:h;e:for(;++s<p;){var N=e[s],D=n?n(N):N;if(N=r||N!==0?N:0,d&&D===D){for(var w=I.length;w--;)if(I[w]===D)continue e;n&&I.push(D),h.push(N)}else l(I,D,r)||(I!==h&&I.push(D),h.push(N))}return h}function Ca(e,n){return n=ft(n,e),e=mu(e,n),e==null||delete e[Bn(hn(n))]}function jo(e,n,r,s){return mr(e,n,r(bt(e,n)),s)}function ri(e,n,r,s){for(var l=e.length,p=s?l:-1;(s?p--:++p<l)&&n(e[p],p,e););return r?dn(e,s?0:p,s?p+1:l):dn(e,s?p+1:0,s?l:p)}function $o(e,n){var r=e;return r instanceof te&&(r=r.value()),ta(n,function(s,l){return l.func.apply(l.thisArg,ot([s],l.args))},r)}function Oa(e,n,r){var s=e.length;if(s<2)return s?pt(e[0]):[];for(var l=-1,p=y(s);++l<s;)for(var d=e[l],h=-1;++h<s;)h!=l&&(p[l]=dr(p[l]||d,e[h],n,r));return pt(Ue(p,1),n,r)}function qo(e,n,r){for(var s=-1,l=e.length,p=n.length,d={};++s<l;){var h=s<p?n[s]:i;r(d,e[s],h)}return d}function Ma(e){return Se(e)?e:[]}function Da(e){return typeof e=="function"?e:ze}function ft(e,n){return J(e)?e:ka(e,n)?[e]:Eu(ce(e))}var ed=Z;function dt(e,n,r){var s=e.length;return r=r===i?s:r,!n&&r>=s?e:dn(e,n,r)}var Yo=Vp||function(e){return xe.clearTimeout(e)};function Qo(e,n){if(n)return e.slice();var r=e.length,s=ho?ho(r):new e.constructor(r);return e.copy(s),s}function Ra(e){var n=new e.constructor(e.byteLength);return new jr(n).set(new jr(e)),n}function nd(e,n){var r=n?Ra(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function td(e){var n=new e.constructor(e.source,Ms.exec(e));return n.lastIndex=e.lastIndex,n}function rd(e){return pr?de(pr.call(e)):{}}function Ho(e,n){var r=n?Ra(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Jo(e,n){if(e!==n){var r=e!==i,s=e===null,l=e===e,p=tn(e),d=n!==i,h=n===null,I=n===n,b=tn(n);if(!h&&!b&&!p&&e>n||p&&d&&I&&!h&&!b||s&&d&&I||!r&&I||!l)return 1;if(!s&&!p&&!b&&e<n||b&&r&&l&&!s&&!p||h&&r&&l||!d&&l||!I)return-1}return 0}function id(e,n,r){for(var s=-1,l=e.criteria,p=n.criteria,d=l.length,h=r.length;++s<d;){var I=Jo(l[s],p[s]);if(I){if(s>=h)return I;var b=r[s];return I*(b=="desc"?-1:1)}}return e.index-n.index}function zo(e,n,r,s){for(var l=-1,p=e.length,d=r.length,h=-1,I=n.length,b=Me(p-d,0),N=y(I+b),D=!s;++h<I;)N[h]=n[h];for(;++l<d;)(D||l<p)&&(N[r[l]]=e[l]);for(;b--;)N[h++]=e[l++];return N}function Ko(e,n,r,s){for(var l=-1,p=e.length,d=-1,h=r.length,I=-1,b=n.length,N=Me(p-h,0),D=y(N+b),w=!s;++l<N;)D[l]=e[l];for(var k=l;++I<b;)D[k+I]=n[I];for(;++d<h;)(w||l<p)&&(D[k+r[d]]=e[l++]);return D}function Qe(e,n){var r=-1,s=e.length;for(n||(n=y(s));++r<s;)n[r]=e[r];return n}function Pn(e,n,r,s){var l=!r;r||(r={});for(var p=-1,d=n.length;++p<d;){var h=n[p],I=s?s(r[h],e[h],h,r,e):i;I===i&&(I=e[h]),l?Hn(r,h,I):fr(r,h,I)}return r}function ad(e,n){return Pn(e,Ba(e),n)}function sd(e,n){return Pn(e,cu(e),n)}function ii(e,n){return function(r,s){var l=J(r)?cp:Of,p=n?n():{};return l(r,e,$(s,2),p)}}function $t(e){return Z(function(n,r){var s=-1,l=r.length,p=l>1?r[l-1]:i,d=l>2?r[2]:i;for(p=e.length>3&&typeof p=="function"?(l--,p):i,d&&We(r[0],r[1],d)&&(p=l<3?i:p,l=1),n=de(n);++s<l;){var h=r[s];h&&e(n,h,s,p)}return n})}function Xo(e,n){return function(r,s){if(r==null)return r;if(!He(r))return e(r,s);for(var l=r.length,p=n?l:-1,d=de(r);(n?p--:++p<l)&&s(d[p],p,d)!==!1;);return r}}function Zo(e){return function(n,r,s){for(var l=-1,p=de(n),d=s(n),h=d.length;h--;){var I=d[e?h:++l];if(r(p[I],I,p)===!1)break}return n}}function od(e,n,r){var s=n&ae,l=Ir(e);function p(){var d=this&&this!==xe&&this instanceof p?l:e;return d.apply(s?r:this,arguments)}return p}function eu(e){return function(n){n=ce(n);var r=Pt(n)?Sn(n):i,s=r?r[0]:n.charAt(0),l=r?dt(r,1).join(""):n.slice(1);return s[e]()+l}}function qt(e){return function(n){return ta(Xu(Ku(n).replace(zc,"")),e,"")}}function Ir(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=jt(e.prototype),s=e.apply(r,n);return Ee(s)?s:r}}function ud(e,n,r){var s=Ir(e);function l(){for(var p=arguments.length,d=y(p),h=p,I=Yt(l);h--;)d[h]=arguments[h];var b=p<3&&d[0]!==I&&d[p-1]!==I?[]:ut(d,I);if(p-=b.length,p<r)return au(e,n,ai,l.placeholder,i,d,b,i,i,r-p);var N=this&&this!==xe&&this instanceof l?s:e;return Ze(N,this,d)}return l}function nu(e){return function(n,r,s){var l=de(n);if(!He(n)){var p=$(r,3);n=Re(n),r=function(h){return p(l[h],h,l)}}var d=e(n,r,s);return d>-1?l[p?n[d]:d]:i}}function tu(e){return zn(function(n){var r=n.length,s=r,l=pn.prototype.thru;for(e&&n.reverse();s--;){var p=n[s];if(typeof p!="function")throw new cn(g);if(l&&!d&&li(p)=="wrapper")var d=new pn([],!0)}for(s=d?s:r;++s<r;){p=n[s];var h=li(p),I=h=="wrapper"?Fa(p):i;I&&Va(I[0])&&I[1]==(Le|Ae|De|$n)&&!I[4].length&&I[9]==1?d=d[li(I[0])].apply(d,I[3]):d=p.length==1&&Va(p)?d[h]():d.thru(p)}return function(){var b=arguments,N=b[0];if(d&&b.length==1&&J(N))return d.plant(N).value();for(var D=0,w=r?n[D].apply(this,b):N;++D<r;)w=n[D].call(this,w);return w}})}function ai(e,n,r,s,l,p,d,h,I,b){var N=n&Le,D=n&ae,w=n&Te,k=n&(Ae|Ne),q=n&M,K=w?i:Ir(e);function Y(){for(var ee=arguments.length,ie=y(ee),rn=ee;rn--;)ie[rn]=arguments[rn];if(k)var je=Yt(Y),an=Ap(ie,je);if(s&&(ie=zo(ie,s,l,k)),p&&(ie=Ko(ie,p,d,k)),ee-=an,k&&ee<b){var _e=ut(ie,je);return au(e,n,ai,Y.placeholder,r,ie,_e,h,I,b-ee)}var Nn=D?r:this,et=w?Nn[e]:e;return ee=ie.length,h?ie=Od(ie,h):q&&ee>1&&ie.reverse(),N&&I<ee&&(ie.length=I),this&&this!==xe&&this instanceof Y&&(et=K||Ir(et)),et.apply(Nn,ie)}return Y}function ru(e,n){return function(r,s){return Ff(r,e,n(s),{})}}function si(e,n){return function(r,s){var l;if(r===i&&s===i)return n;if(r!==i&&(l=r),s!==i){if(l===i)return s;typeof r=="string"||typeof s=="string"?(r=nn(r),s=nn(s)):(r=Wo(r),s=Wo(s)),l=e(r,s)}return l}}function wa(e){return zn(function(n){return n=Ie(n,en($())),Z(function(r){var s=this;return e(n,function(l){return Ze(l,s,r)})})})}function oi(e,n){n=n===i?" ":nn(n);var r=n.length;if(r<2)return r?ba(n,e):n;var s=ba(n,Qr(e/Bt(n)));return Pt(n)?dt(Sn(s),0,e).join(""):s.slice(0,e)}function ld(e,n,r,s){var l=n&ae,p=Ir(e);function d(){for(var h=-1,I=arguments.length,b=-1,N=s.length,D=y(N+I),w=this&&this!==xe&&this instanceof d?p:e;++b<N;)D[b]=s[b];for(;I--;)D[b++]=arguments[++h];return Ze(w,l?r:this,D)}return d}function iu(e){return function(n,r,s){return s&&typeof s!="number"&&We(n,r,s)&&(r=s=i),n=Zn(n),r===i?(r=n,n=0):r=Zn(r),s=s===i?n<r?1:-1:Zn(s),Hf(n,r,s,e)}}function ui(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=gn(n),r=gn(r)),e(n,r)}}function au(e,n,r,s,l,p,d,h,I,b){var N=n&Ae,D=N?d:i,w=N?i:d,k=N?p:i,q=N?i:p;n|=N?De:ke,n&=~(N?ke:De),n&jn||(n&=~(ae|Te));var K=[e,n,l,k,D,q,w,h,I,b],Y=r.apply(i,K);return Va(e)&&Iu(Y,K),Y.placeholder=s,Tu(Y,e,n)}function xa(e){var n=Oe[e];return function(r,s){if(r=gn(r),s=s==null?0:Pe(z(s),292),s&&To(r)){var l=(ce(r)+"e").split("e"),p=n(l[0]+"e"+(+l[1]+s));return l=(ce(p)+"e").split("e"),+(l[0]+"e"+(+l[1]-s))}return n(r)}}var cd=Gt&&1/Pr(new Gt([,-0]))[1]==Ln?function(e){return new Gt(e)}:ns;function su(e){return function(n){var r=Be(n);return r==yn?la(n):r==vn?Np(n):Tp(n,e(n))}}function Jn(e,n,r,s,l,p,d,h){var I=n&Te;if(!I&&typeof e!="function")throw new cn(g);var b=s?s.length:0;if(b||(n&=~(De|ke),s=l=i),d=d===i?d:Me(z(d),0),h=h===i?h:z(h),b-=l?l.length:0,n&ke){var N=s,D=l;s=l=i}var w=I?i:Fa(e),k=[e,n,r,s,l,N,D,p,d,h];if(w&&bd(k,w),e=k[0],n=k[1],r=k[2],s=k[3],l=k[4],h=k[9]=k[9]===i?I?0:e.length:Me(k[9]-b,0),!h&&n&(Ae|Ne)&&(n&=~(Ae|Ne)),!n||n==ae)var q=od(e,n,r);else n==Ae||n==Ne?q=ud(e,n,h):(n==De||n==(ae|De))&&!l.length?q=ld(e,n,r,s):q=ai.apply(i,k);var K=w?Vo:Iu;return Tu(K(q,k),e,n)}function ou(e,n,r,s){return e===i||bn(e,Vt[r])&&!pe.call(s,r)?n:e}function uu(e,n,r,s,l,p){return Ee(e)&&Ee(n)&&(p.set(n,e),ni(e,n,i,uu,p),p.delete(n)),e}function pd(e){return Er(e)?i:e}function lu(e,n,r,s,l,p){var d=r&G,h=e.length,I=n.length;if(h!=I&&!(d&&I>h))return!1;var b=p.get(e),N=p.get(n);if(b&&N)return b==n&&N==e;var D=-1,w=!0,k=r&fe?new St:i;for(p.set(e,n),p.set(n,e);++D<h;){var q=e[D],K=n[D];if(s)var Y=d?s(K,q,D,n,e,p):s(q,K,D,e,n,p);if(Y!==i){if(Y)continue;w=!1;break}if(k){if(!ra(n,function(ee,ie){if(!sr(k,ie)&&(q===ee||l(q,ee,r,s,p)))return k.push(ie)})){w=!1;break}}else if(!(q===K||l(q,K,r,s,p))){w=!1;break}}return p.delete(e),p.delete(n),w}function fd(e,n,r,s,l,p,d){switch(r){case Ut:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ar:return!(e.byteLength!=n.byteLength||!p(new jr(e),new jr(n)));case le:case on:case nr:return bn(+e,+n);case at:return e.name==n.name&&e.message==n.message;case tr:case rr:return e==n+"";case yn:var h=la;case vn:var I=s&G;if(h||(h=Pr),e.size!=n.size&&!I)return!1;var b=d.get(e);if(b)return b==n;s|=fe,d.set(e,n);var N=lu(h(e),h(n),s,l,p,d);return d.delete(e),N;case Rr:if(pr)return pr.call(e)==pr.call(n)}return!1}function dd(e,n,r,s,l,p){var d=r&G,h=Ua(e),I=h.length,b=Ua(n),N=b.length;if(I!=N&&!d)return!1;for(var D=I;D--;){var w=h[D];if(!(d?w in n:pe.call(n,w)))return!1}var k=p.get(e),q=p.get(n);if(k&&q)return k==n&&q==e;var K=!0;p.set(e,n),p.set(n,e);for(var Y=d;++D<I;){w=h[D];var ee=e[w],ie=n[w];if(s)var rn=d?s(ie,ee,w,n,e,p):s(ee,ie,w,e,n,p);if(!(rn===i?ee===ie||l(ee,ie,r,s,p):rn)){K=!1;break}Y||(Y=w=="constructor")}if(K&&!Y){var je=e.constructor,an=n.constructor;je!=an&&"constructor"in e&&"constructor"in n&&!(typeof je=="function"&&je instanceof je&&typeof an=="function"&&an instanceof an)&&(K=!1)}return p.delete(e),p.delete(n),K}function zn(e){return Wa(gu(e,i,_u),e+"")}function Ua(e){return Mo(e,Re,Ba)}function La(e){return Mo(e,Je,cu)}var Fa=Jr?function(e){return Jr.get(e)}:ns;function li(e){for(var n=e.name+"",r=Wt[n],s=pe.call(Wt,n)?r.length:0;s--;){var l=r[s],p=l.func;if(p==null||p==e)return l.name}return n}function Yt(e){var n=pe.call(c,"placeholder")?c:e;return n.placeholder}function $(){var e=c.iteratee||Za;return e=e===Za?wo:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,n){var r=e.__data__;return yd(n)?r[typeof n=="string"?"string":"hash"]:r.map}function Pa(e){for(var n=Re(e),r=n.length;r--;){var s=n[r],l=e[s];n[r]=[s,l,du(l)]}return n}function Nt(e,n){var r=Sp(e,n);return Ro(r)?r:i}function hd(e){var n=pe.call(e,yt),r=e[yt];try{e[yt]=i;var s=!0}catch{}var l=Gr.call(e);return s&&(n?e[yt]=r:delete e[yt]),l}var Ba=pa?function(e){return e==null?[]:(e=de(e),st(pa(e),function(n){return mo.call(e,n)}))}:ts,cu=pa?function(e){for(var n=[];e;)ot(n,Ba(e)),e=$r(e);return n}:ts,Be=Ge;(fa&&Be(new fa(new ArrayBuffer(1)))!=Ut||ur&&Be(new ur)!=yn||da&&Be(da.resolve())!=bs||Gt&&Be(new Gt)!=vn||lr&&Be(new lr)!=ir)&&(Be=function(e){var n=Ge(e),r=n==qn?e.constructor:i,s=r?Ct(r):"";if(s)switch(s){case Jp:return Ut;case zp:return yn;case Kp:return bs;case Xp:return vn;case Zp:return ir}return n});function gd(e,n,r){for(var s=-1,l=r.length;++s<l;){var p=r[s],d=p.size;switch(p.type){case"drop":e+=d;break;case"dropRight":n-=d;break;case"take":n=Pe(n,e+d);break;case"takeRight":e=Me(e,n-d);break}}return{start:e,end:n}}function md(e){var n=e.match(yc);return n?n[1].split(vc):[]}function pu(e,n,r){n=ft(n,e);for(var s=-1,l=n.length,p=!1;++s<l;){var d=Bn(n[s]);if(!(p=e!=null&&r(e,d)))break;e=e[d]}return p||++s!=l?p:(l=e==null?0:e.length,!!l&&Ii(l)&&Kn(d,l)&&(J(e)||Ot(e)))}function Id(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&pe.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function fu(e){return typeof e.constructor=="function"&&!Tr(e)?jt($r(e)):{}}function Td(e,n,r){var s=e.constructor;switch(n){case ar:return Ra(e);case le:case on:return new s(+e);case Ut:return nd(e,r);case Pi:case Bi:case ki:case Vi:case Gi:case Wi:case ji:case $i:case qi:return Ho(e,r);case yn:return new s;case nr:case rr:return new s(e);case tr:return td(e);case vn:return new s;case Rr:return rd(e)}}function Ad(e,n){var r=n.length;if(!r)return e;var s=r-1;return n[s]=(r>1?"& ":"")+n[s],n=n.join(r>2?", ":" "),e.replace(Ec,`{
/* [wrapped with `+n+`] */
`)}function Ed(e){return J(e)||Ot(e)||!!(Io&&e&&e[Io])}function Kn(e,n){var r=typeof e;return n=n??En,!!n&&(r=="number"||r!="symbol"&&Rc.test(e))&&e>-1&&e%1==0&&e<n}function We(e,n,r){if(!Ee(r))return!1;var s=typeof n;return(s=="number"?He(r)&&Kn(n,r.length):s=="string"&&n in r)?bn(r[n],e):!1}function ka(e,n){if(J(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||tn(e)?!0:mc.test(e)||!gc.test(e)||n!=null&&e in de(n)}function yd(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Va(e){var n=li(e),r=c[n];if(typeof r!="function"||!(n in te.prototype))return!1;if(e===r)return!0;var s=Fa(r);return!!s&&e===s[0]}function vd(e){return!!fo&&fo in e}var Sd=kr?Xn:rs;function Tr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||Vt;return e===r}function du(e){return e===e&&!Ee(e)}function hu(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==i||e in de(r))}}function _d(e){var n=gi(e,function(s){return r.size===O&&r.clear(),s}),r=n.cache;return n}function bd(e,n){var r=e[1],s=n[1],l=r|s,p=l<(ae|Te|Le),d=s==Le&&r==Ae||s==Le&&r==$n&&e[7].length<=n[8]||s==(Le|$n)&&n[7].length<=n[8]&&r==Ae;if(!(p||d))return e;s&ae&&(e[2]=n[2],l|=r&ae?0:jn);var h=n[3];if(h){var I=e[3];e[3]=I?zo(I,h,n[4]):h,e[4]=I?ut(e[3],_):n[4]}return h=n[5],h&&(I=e[5],e[5]=I?Ko(I,h,n[6]):h,e[6]=I?ut(e[5],_):n[6]),h=n[7],h&&(e[7]=h),s&Le&&(e[8]=e[8]==null?n[8]:Pe(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=l,e}function Nd(e){var n=[];if(e!=null)for(var r in de(e))n.push(r);return n}function Cd(e){return Gr.call(e)}function gu(e,n,r){return n=Me(n===i?e.length-1:n,0),function(){for(var s=arguments,l=-1,p=Me(s.length-n,0),d=y(p);++l<p;)d[l]=s[n+l];l=-1;for(var h=y(n+1);++l<n;)h[l]=s[l];return h[n]=r(d),Ze(e,this,h)}}function mu(e,n){return n.length<2?e:bt(e,dn(n,0,-1))}function Od(e,n){for(var r=e.length,s=Pe(n.length,r),l=Qe(e);s--;){var p=n[s];e[s]=Kn(p,r)?l[p]:i}return e}function Ga(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Iu=Au(Vo),Ar=Wp||function(e,n){return xe.setTimeout(e,n)},Wa=Au(Kf);function Tu(e,n,r){var s=n+"";return Wa(e,Ad(s,Md(md(s),r)))}function Au(e){var n=0,r=0;return function(){var s=Yp(),l=Tt-(s-r);if(r=s,l>0){if(++n>=it)return arguments[0]}else n=0;return e.apply(i,arguments)}}function pi(e,n){var r=-1,s=e.length,l=s-1;for(n=n===i?s:n;++r<n;){var p=_a(r,l),d=e[p];e[p]=e[r],e[r]=d}return e.length=n,e}var Eu=_d(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Ic,function(r,s,l,p){n.push(l?p.replace(bc,"$1"):s||r)}),n});function Bn(e){if(typeof e=="string"||tn(e))return e;var n=e+"";return n=="0"&&1/e==-Ln?"-0":n}function Ct(e){if(e!=null){try{return Vr.call(e)}catch{}try{return e+""}catch{}}return""}function Md(e,n){return ln(x,function(r){var s="_."+r[0];n&r[1]&&!Lr(e,s)&&e.push(s)}),e.sort()}function yu(e){if(e instanceof te)return e.clone();var n=new pn(e.__wrapped__,e.__chain__);return n.__actions__=Qe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Dd(e,n,r){(r?We(e,n,r):n===i)?n=1:n=Me(z(n),0);var s=e==null?0:e.length;if(!s||n<1)return[];for(var l=0,p=0,d=y(Qr(s/n));l<s;)d[p++]=dn(e,l,l+=n);return d}function Rd(e){for(var n=-1,r=e==null?0:e.length,s=0,l=[];++n<r;){var p=e[n];p&&(l[s++]=p)}return l}function wd(){var e=arguments.length;if(!e)return[];for(var n=y(e-1),r=arguments[0],s=e;s--;)n[s-1]=arguments[s];return ot(J(r)?Qe(r):[r],Ue(n,1))}var xd=Z(function(e,n){return Se(e)?dr(e,Ue(n,1,Se,!0)):[]}),Ud=Z(function(e,n){var r=hn(n);return Se(r)&&(r=i),Se(e)?dr(e,Ue(n,1,Se,!0),$(r,2)):[]}),Ld=Z(function(e,n){var r=hn(n);return Se(r)&&(r=i),Se(e)?dr(e,Ue(n,1,Se,!0),i,r):[]});function Fd(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===i?1:z(n),dn(e,n<0?0:n,s)):[]}function Pd(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===i?1:z(n),n=s-n,dn(e,0,n<0?0:n)):[]}function Bd(e,n){return e&&e.length?ri(e,$(n,3),!0,!0):[]}function kd(e,n){return e&&e.length?ri(e,$(n,3),!0):[]}function Vd(e,n,r,s){var l=e==null?0:e.length;return l?(r&&typeof r!="number"&&We(e,n,r)&&(r=0,s=l),wf(e,n,r,s)):[]}function vu(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var l=r==null?0:z(r);return l<0&&(l=Me(s+l,0)),Fr(e,$(n,3),l)}function Su(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var l=s-1;return r!==i&&(l=z(r),l=r<0?Me(s+l,0):Pe(l,s-1)),Fr(e,$(n,3),l,!0)}function _u(e){var n=e==null?0:e.length;return n?Ue(e,1):[]}function Gd(e){var n=e==null?0:e.length;return n?Ue(e,Ln):[]}function Wd(e,n){var r=e==null?0:e.length;return r?(n=n===i?1:z(n),Ue(e,n)):[]}function jd(e){for(var n=-1,r=e==null?0:e.length,s={};++n<r;){var l=e[n];s[l[0]]=l[1]}return s}function bu(e){return e&&e.length?e[0]:i}function $d(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var l=r==null?0:z(r);return l<0&&(l=Me(s+l,0)),Ft(e,n,l)}function qd(e){var n=e==null?0:e.length;return n?dn(e,0,-1):[]}var Yd=Z(function(e){var n=Ie(e,Ma);return n.length&&n[0]===e[0]?Aa(n):[]}),Qd=Z(function(e){var n=hn(e),r=Ie(e,Ma);return n===hn(r)?n=i:r.pop(),r.length&&r[0]===e[0]?Aa(r,$(n,2)):[]}),Hd=Z(function(e){var n=hn(e),r=Ie(e,Ma);return n=typeof n=="function"?n:i,n&&r.pop(),r.length&&r[0]===e[0]?Aa(r,i,n):[]});function Jd(e,n){return e==null?"":$p.call(e,n)}function hn(e){var n=e==null?0:e.length;return n?e[n-1]:i}function zd(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var l=s;return r!==i&&(l=z(r),l=l<0?Me(s+l,0):Pe(l,s-1)),n===n?Op(e,n,l):Fr(e,io,l,!0)}function Kd(e,n){return e&&e.length?Fo(e,z(n)):i}var Xd=Z(Nu);function Nu(e,n){return e&&e.length&&n&&n.length?Sa(e,n):e}function Zd(e,n,r){return e&&e.length&&n&&n.length?Sa(e,n,$(r,2)):e}function eh(e,n,r){return e&&e.length&&n&&n.length?Sa(e,n,i,r):e}var nh=zn(function(e,n){var r=e==null?0:e.length,s=ga(e,n);return ko(e,Ie(n,function(l){return Kn(l,r)?+l:l}).sort(Jo)),s});function th(e,n){var r=[];if(!(e&&e.length))return r;var s=-1,l=[],p=e.length;for(n=$(n,3);++s<p;){var d=e[s];n(d,s,e)&&(r.push(d),l.push(s))}return ko(e,l),r}function ja(e){return e==null?e:Hp.call(e)}function rh(e,n,r){var s=e==null?0:e.length;return s?(r&&typeof r!="number"&&We(e,n,r)?(n=0,r=s):(n=n==null?0:z(n),r=r===i?s:z(r)),dn(e,n,r)):[]}function ih(e,n){return ti(e,n)}function ah(e,n,r){return Na(e,n,$(r,2))}function sh(e,n){var r=e==null?0:e.length;if(r){var s=ti(e,n);if(s<r&&bn(e[s],n))return s}return-1}function oh(e,n){return ti(e,n,!0)}function uh(e,n,r){return Na(e,n,$(r,2),!0)}function lh(e,n){var r=e==null?0:e.length;if(r){var s=ti(e,n,!0)-1;if(bn(e[s],n))return s}return-1}function ch(e){return e&&e.length?Go(e):[]}function ph(e,n){return e&&e.length?Go(e,$(n,2)):[]}function fh(e){var n=e==null?0:e.length;return n?dn(e,1,n):[]}function dh(e,n,r){return e&&e.length?(n=r||n===i?1:z(n),dn(e,0,n<0?0:n)):[]}function hh(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===i?1:z(n),n=s-n,dn(e,n<0?0:n,s)):[]}function gh(e,n){return e&&e.length?ri(e,$(n,3),!1,!0):[]}function mh(e,n){return e&&e.length?ri(e,$(n,3)):[]}var Ih=Z(function(e){return pt(Ue(e,1,Se,!0))}),Th=Z(function(e){var n=hn(e);return Se(n)&&(n=i),pt(Ue(e,1,Se,!0),$(n,2))}),Ah=Z(function(e){var n=hn(e);return n=typeof n=="function"?n:i,pt(Ue(e,1,Se,!0),i,n)});function Eh(e){return e&&e.length?pt(e):[]}function yh(e,n){return e&&e.length?pt(e,$(n,2)):[]}function vh(e,n){return n=typeof n=="function"?n:i,e&&e.length?pt(e,i,n):[]}function $a(e){if(!(e&&e.length))return[];var n=0;return e=st(e,function(r){if(Se(r))return n=Me(r.length,n),!0}),oa(n,function(r){return Ie(e,ia(r))})}function Cu(e,n){if(!(e&&e.length))return[];var r=$a(e);return n==null?r:Ie(r,function(s){return Ze(n,i,s)})}var Sh=Z(function(e,n){return Se(e)?dr(e,n):[]}),_h=Z(function(e){return Oa(st(e,Se))}),bh=Z(function(e){var n=hn(e);return Se(n)&&(n=i),Oa(st(e,Se),$(n,2))}),Nh=Z(function(e){var n=hn(e);return n=typeof n=="function"?n:i,Oa(st(e,Se),i,n)}),Ch=Z($a);function Oh(e,n){return qo(e||[],n||[],fr)}function Mh(e,n){return qo(e||[],n||[],mr)}var Dh=Z(function(e){var n=e.length,r=n>1?e[n-1]:i;return r=typeof r=="function"?(e.pop(),r):i,Cu(e,r)});function Ou(e){var n=c(e);return n.__chain__=!0,n}function Rh(e,n){return n(e),e}function fi(e,n){return n(e)}var wh=zn(function(e){var n=e.length,r=n?e[0]:0,s=this.__wrapped__,l=function(p){return ga(p,e)};return n>1||this.__actions__.length||!(s instanceof te)||!Kn(r)?this.thru(l):(s=s.slice(r,+r+(n?1:0)),s.__actions__.push({func:fi,args:[l],thisArg:i}),new pn(s,this.__chain__).thru(function(p){return n&&!p.length&&p.push(i),p}))});function xh(){return Ou(this)}function Uh(){return new pn(this.value(),this.__chain__)}function Lh(){this.__values__===i&&(this.__values__=Wu(this.value()));var e=this.__index__>=this.__values__.length,n=e?i:this.__values__[this.__index__++];return{done:e,value:n}}function Fh(){return this}function Ph(e){for(var n,r=this;r instanceof Kr;){var s=yu(r);s.__index__=0,s.__values__=i,n?l.__wrapped__=s:n=s;var l=s;r=r.__wrapped__}return l.__wrapped__=e,n}function Bh(){var e=this.__wrapped__;if(e instanceof te){var n=e;return this.__actions__.length&&(n=new te(this)),n=n.reverse(),n.__actions__.push({func:fi,args:[ja],thisArg:i}),new pn(n,this.__chain__)}return this.thru(ja)}function kh(){return $o(this.__wrapped__,this.__actions__)}var Vh=ii(function(e,n,r){pe.call(e,r)?++e[r]:Hn(e,r,1)});function Gh(e,n,r){var s=J(e)?to:Rf;return r&&We(e,n,r)&&(n=i),s(e,$(n,3))}function Wh(e,n){var r=J(e)?st:Co;return r(e,$(n,3))}var jh=nu(vu),$h=nu(Su);function qh(e,n){return Ue(di(e,n),1)}function Yh(e,n){return Ue(di(e,n),Ln)}function Qh(e,n,r){return r=r===i?1:z(r),Ue(di(e,n),r)}function Mu(e,n){var r=J(e)?ln:ct;return r(e,$(n,3))}function Du(e,n){var r=J(e)?pp:No;return r(e,$(n,3))}var Hh=ii(function(e,n,r){pe.call(e,r)?e[r].push(n):Hn(e,r,[n])});function Jh(e,n,r,s){e=He(e)?e:Ht(e),r=r&&!s?z(r):0;var l=e.length;return r<0&&(r=Me(l+r,0)),Ti(e)?r<=l&&e.indexOf(n,r)>-1:!!l&&Ft(e,n,r)>-1}var zh=Z(function(e,n,r){var s=-1,l=typeof n=="function",p=He(e)?y(e.length):[];return ct(e,function(d){p[++s]=l?Ze(n,d,r):hr(d,n,r)}),p}),Kh=ii(function(e,n,r){Hn(e,r,n)});function di(e,n){var r=J(e)?Ie:xo;return r(e,$(n,3))}function Xh(e,n,r,s){return e==null?[]:(J(n)||(n=n==null?[]:[n]),r=s?i:r,J(r)||(r=r==null?[]:[r]),Po(e,n,r))}var Zh=ii(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function eg(e,n,r){var s=J(e)?ta:so,l=arguments.length<3;return s(e,$(n,4),r,l,ct)}function ng(e,n,r){var s=J(e)?fp:so,l=arguments.length<3;return s(e,$(n,4),r,l,No)}function tg(e,n){var r=J(e)?st:Co;return r(e,mi($(n,3)))}function rg(e){var n=J(e)?vo:Jf;return n(e)}function ig(e,n,r){(r?We(e,n,r):n===i)?n=1:n=z(n);var s=J(e)?Nf:zf;return s(e,n)}function ag(e){var n=J(e)?Cf:Xf;return n(e)}function sg(e){if(e==null)return 0;if(He(e))return Ti(e)?Bt(e):e.length;var n=Be(e);return n==yn||n==vn?e.size:ya(e).length}function og(e,n,r){var s=J(e)?ra:Zf;return r&&We(e,n,r)&&(n=i),s(e,$(n,3))}var ug=Z(function(e,n){if(e==null)return[];var r=n.length;return r>1&&We(e,n[0],n[1])?n=[]:r>2&&We(n[0],n[1],n[2])&&(n=[n[0]]),Po(e,Ue(n,1),[])}),hi=Gp||function(){return xe.Date.now()};function lg(e,n){if(typeof n!="function")throw new cn(g);return e=z(e),function(){if(--e<1)return n.apply(this,arguments)}}function Ru(e,n,r){return n=r?i:n,n=e&&n==null?e.length:n,Jn(e,Le,i,i,i,i,n)}function wu(e,n){var r;if(typeof n!="function")throw new cn(g);return e=z(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=i),r}}var qa=Z(function(e,n,r){var s=ae;if(r.length){var l=ut(r,Yt(qa));s|=De}return Jn(e,s,n,r,l)}),xu=Z(function(e,n,r){var s=ae|Te;if(r.length){var l=ut(r,Yt(xu));s|=De}return Jn(n,s,e,r,l)});function Uu(e,n,r){n=r?i:n;var s=Jn(e,Ae,i,i,i,i,i,n);return s.placeholder=Uu.placeholder,s}function Lu(e,n,r){n=r?i:n;var s=Jn(e,Ne,i,i,i,i,i,n);return s.placeholder=Lu.placeholder,s}function Fu(e,n,r){var s,l,p,d,h,I,b=0,N=!1,D=!1,w=!0;if(typeof e!="function")throw new cn(g);n=gn(n)||0,Ee(r)&&(N=!!r.leading,D="maxWait"in r,p=D?Me(gn(r.maxWait)||0,n):p,w="trailing"in r?!!r.trailing:w);function k(_e){var Nn=s,et=l;return s=l=i,b=_e,d=e.apply(et,Nn),d}function q(_e){return b=_e,h=Ar(ee,n),N?k(_e):d}function K(_e){var Nn=_e-I,et=_e-b,nl=n-Nn;return D?Pe(nl,p-et):nl}function Y(_e){var Nn=_e-I,et=_e-b;return I===i||Nn>=n||Nn<0||D&&et>=p}function ee(){var _e=hi();if(Y(_e))return ie(_e);h=Ar(ee,K(_e))}function ie(_e){return h=i,w&&s?k(_e):(s=l=i,d)}function rn(){h!==i&&Yo(h),b=0,s=I=l=h=i}function je(){return h===i?d:ie(hi())}function an(){var _e=hi(),Nn=Y(_e);if(s=arguments,l=this,I=_e,Nn){if(h===i)return q(I);if(D)return Yo(h),h=Ar(ee,n),k(I)}return h===i&&(h=Ar(ee,n)),d}return an.cancel=rn,an.flush=je,an}var cg=Z(function(e,n){return bo(e,1,n)}),pg=Z(function(e,n,r){return bo(e,gn(n)||0,r)});function fg(e){return Jn(e,M)}function gi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new cn(g);var r=function(){var s=arguments,l=n?n.apply(this,s):s[0],p=r.cache;if(p.has(l))return p.get(l);var d=e.apply(this,s);return r.cache=p.set(l,d)||p,d};return r.cache=new(gi.Cache||Qn),r}gi.Cache=Qn;function mi(e){if(typeof e!="function")throw new cn(g);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function dg(e){return wu(2,e)}var hg=ed(function(e,n){n=n.length==1&&J(n[0])?Ie(n[0],en($())):Ie(Ue(n,1),en($()));var r=n.length;return Z(function(s){for(var l=-1,p=Pe(s.length,r);++l<p;)s[l]=n[l].call(this,s[l]);return Ze(e,this,s)})}),Ya=Z(function(e,n){var r=ut(n,Yt(Ya));return Jn(e,De,i,n,r)}),Pu=Z(function(e,n){var r=ut(n,Yt(Pu));return Jn(e,ke,i,n,r)}),gg=zn(function(e,n){return Jn(e,$n,i,i,i,n)});function mg(e,n){if(typeof e!="function")throw new cn(g);return n=n===i?n:z(n),Z(e,n)}function Ig(e,n){if(typeof e!="function")throw new cn(g);return n=n==null?0:Me(z(n),0),Z(function(r){var s=r[n],l=dt(r,0,n);return s&&ot(l,s),Ze(e,this,l)})}function Tg(e,n,r){var s=!0,l=!0;if(typeof e!="function")throw new cn(g);return Ee(r)&&(s="leading"in r?!!r.leading:s,l="trailing"in r?!!r.trailing:l),Fu(e,n,{leading:s,maxWait:n,trailing:l})}function Ag(e){return Ru(e,1)}function Eg(e,n){return Ya(Da(n),e)}function yg(){if(!arguments.length)return[];var e=arguments[0];return J(e)?e:[e]}function vg(e){return fn(e,X)}function Sg(e,n){return n=typeof n=="function"?n:i,fn(e,X,n)}function _g(e){return fn(e,R|X)}function bg(e,n){return n=typeof n=="function"?n:i,fn(e,R|X,n)}function Ng(e,n){return n==null||_o(e,n,Re(n))}function bn(e,n){return e===n||e!==e&&n!==n}var Cg=ui(Ta),Og=ui(function(e,n){return e>=n}),Ot=Do(function(){return arguments}())?Do:function(e){return ye(e)&&pe.call(e,"callee")&&!mo.call(e,"callee")},J=y.isArray,Mg=zs?en(zs):Pf;function He(e){return e!=null&&Ii(e.length)&&!Xn(e)}function Se(e){return ye(e)&&He(e)}function Dg(e){return e===!0||e===!1||ye(e)&&Ge(e)==le}var ht=jp||rs,Rg=Ks?en(Ks):Bf;function wg(e){return ye(e)&&e.nodeType===1&&!Er(e)}function xg(e){if(e==null)return!0;if(He(e)&&(J(e)||typeof e=="string"||typeof e.splice=="function"||ht(e)||Qt(e)||Ot(e)))return!e.length;var n=Be(e);if(n==yn||n==vn)return!e.size;if(Tr(e))return!ya(e).length;for(var r in e)if(pe.call(e,r))return!1;return!0}function Ug(e,n){return gr(e,n)}function Lg(e,n,r){r=typeof r=="function"?r:i;var s=r?r(e,n):i;return s===i?gr(e,n,i,r):!!s}function Qa(e){if(!ye(e))return!1;var n=Ge(e);return n==at||n==er||typeof e.message=="string"&&typeof e.name=="string"&&!Er(e)}function Fg(e){return typeof e=="number"&&To(e)}function Xn(e){if(!Ee(e))return!1;var n=Ge(e);return n==Fe||n==_s||n==ve||n==ac}function Bu(e){return typeof e=="number"&&e==z(e)}function Ii(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=En}function Ee(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ye(e){return e!=null&&typeof e=="object"}var ku=Xs?en(Xs):Vf;function Pg(e,n){return e===n||Ea(e,n,Pa(n))}function Bg(e,n,r){return r=typeof r=="function"?r:i,Ea(e,n,Pa(n),r)}function kg(e){return Vu(e)&&e!=+e}function Vg(e){if(Sd(e))throw new H(f);return Ro(e)}function Gg(e){return e===null}function Wg(e){return e==null}function Vu(e){return typeof e=="number"||ye(e)&&Ge(e)==nr}function Er(e){if(!ye(e)||Ge(e)!=qn)return!1;var n=$r(e);if(n===null)return!0;var r=pe.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Vr.call(r)==Pp}var Ha=Zs?en(Zs):Gf;function jg(e){return Bu(e)&&e>=-En&&e<=En}var Gu=eo?en(eo):Wf;function Ti(e){return typeof e=="string"||!J(e)&&ye(e)&&Ge(e)==rr}function tn(e){return typeof e=="symbol"||ye(e)&&Ge(e)==Rr}var Qt=no?en(no):jf;function $g(e){return e===i}function qg(e){return ye(e)&&Be(e)==ir}function Yg(e){return ye(e)&&Ge(e)==oc}var Qg=ui(va),Hg=ui(function(e,n){return e<=n});function Wu(e){if(!e)return[];if(He(e))return Ti(e)?Sn(e):Qe(e);if(or&&e[or])return bp(e[or]());var n=Be(e),r=n==yn?la:n==vn?Pr:Ht;return r(e)}function Zn(e){if(!e)return e===0?e:0;if(e=gn(e),e===Ln||e===-Ln){var n=e<0?-1:1;return n*xt}return e===e?e:0}function z(e){var n=Zn(e),r=n%1;return n===n?r?n-r:n:0}function ju(e){return e?_t(z(e),0,sn):0}function gn(e){if(typeof e=="number")return e;if(tn(e))return At;if(Ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=oo(e);var r=Oc.test(e);return r||Dc.test(e)?up(e.slice(2),r?2:8):Cc.test(e)?At:+e}function $u(e){return Pn(e,Je(e))}function Jg(e){return e?_t(z(e),-En,En):e===0?e:0}function ce(e){return e==null?"":nn(e)}var zg=$t(function(e,n){if(Tr(n)||He(n)){Pn(n,Re(n),e);return}for(var r in n)pe.call(n,r)&&fr(e,r,n[r])}),qu=$t(function(e,n){Pn(n,Je(n),e)}),Ai=$t(function(e,n,r,s){Pn(n,Je(n),e,s)}),Kg=$t(function(e,n,r,s){Pn(n,Re(n),e,s)}),Xg=zn(ga);function Zg(e,n){var r=jt(e);return n==null?r:So(r,n)}var em=Z(function(e,n){e=de(e);var r=-1,s=n.length,l=s>2?n[2]:i;for(l&&We(n[0],n[1],l)&&(s=1);++r<s;)for(var p=n[r],d=Je(p),h=-1,I=d.length;++h<I;){var b=d[h],N=e[b];(N===i||bn(N,Vt[b])&&!pe.call(e,b))&&(e[b]=p[b])}return e}),nm=Z(function(e){return e.push(i,uu),Ze(Yu,i,e)});function tm(e,n){return ro(e,$(n,3),Fn)}function rm(e,n){return ro(e,$(n,3),Ia)}function im(e,n){return e==null?e:ma(e,$(n,3),Je)}function am(e,n){return e==null?e:Oo(e,$(n,3),Je)}function sm(e,n){return e&&Fn(e,$(n,3))}function om(e,n){return e&&Ia(e,$(n,3))}function um(e){return e==null?[]:ei(e,Re(e))}function lm(e){return e==null?[]:ei(e,Je(e))}function Ja(e,n,r){var s=e==null?i:bt(e,n);return s===i?r:s}function cm(e,n){return e!=null&&pu(e,n,xf)}function za(e,n){return e!=null&&pu(e,n,Uf)}var pm=ru(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Gr.call(n)),e[n]=r},Xa(ze)),fm=ru(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Gr.call(n)),pe.call(e,n)?e[n].push(r):e[n]=[r]},$),dm=Z(hr);function Re(e){return He(e)?yo(e):ya(e)}function Je(e){return He(e)?yo(e,!0):$f(e)}function hm(e,n){var r={};return n=$(n,3),Fn(e,function(s,l,p){Hn(r,n(s,l,p),s)}),r}function gm(e,n){var r={};return n=$(n,3),Fn(e,function(s,l,p){Hn(r,l,n(s,l,p))}),r}var mm=$t(function(e,n,r){ni(e,n,r)}),Yu=$t(function(e,n,r,s){ni(e,n,r,s)}),Im=zn(function(e,n){var r={};if(e==null)return r;var s=!1;n=Ie(n,function(p){return p=ft(p,e),s||(s=p.length>1),p}),Pn(e,La(e),r),s&&(r=fn(r,R|B|X,pd));for(var l=n.length;l--;)Ca(r,n[l]);return r});function Tm(e,n){return Qu(e,mi($(n)))}var Am=zn(function(e,n){return e==null?{}:Yf(e,n)});function Qu(e,n){if(e==null)return{};var r=Ie(La(e),function(s){return[s]});return n=$(n),Bo(e,r,function(s,l){return n(s,l[0])})}function Em(e,n,r){n=ft(n,e);var s=-1,l=n.length;for(l||(l=1,e=i);++s<l;){var p=e==null?i:e[Bn(n[s])];p===i&&(s=l,p=r),e=Xn(p)?p.call(e):p}return e}function ym(e,n,r){return e==null?e:mr(e,n,r)}function vm(e,n,r,s){return s=typeof s=="function"?s:i,e==null?e:mr(e,n,r,s)}var Hu=su(Re),Ju=su(Je);function Sm(e,n,r){var s=J(e),l=s||ht(e)||Qt(e);if(n=$(n,4),r==null){var p=e&&e.constructor;l?r=s?new p:[]:Ee(e)?r=Xn(p)?jt($r(e)):{}:r={}}return(l?ln:Fn)(e,function(d,h,I){return n(r,d,h,I)}),r}function _m(e,n){return e==null?!0:Ca(e,n)}function bm(e,n,r){return e==null?e:jo(e,n,Da(r))}function Nm(e,n,r,s){return s=typeof s=="function"?s:i,e==null?e:jo(e,n,Da(r),s)}function Ht(e){return e==null?[]:ua(e,Re(e))}function Cm(e){return e==null?[]:ua(e,Je(e))}function Om(e,n,r){return r===i&&(r=n,n=i),r!==i&&(r=gn(r),r=r===r?r:0),n!==i&&(n=gn(n),n=n===n?n:0),_t(gn(e),n,r)}function Mm(e,n,r){return n=Zn(n),r===i?(r=n,n=0):r=Zn(r),e=gn(e),Lf(e,n,r)}function Dm(e,n,r){if(r&&typeof r!="boolean"&&We(e,n,r)&&(n=r=i),r===i&&(typeof n=="boolean"?(r=n,n=i):typeof e=="boolean"&&(r=e,e=i)),e===i&&n===i?(e=0,n=1):(e=Zn(e),n===i?(n=e,e=0):n=Zn(n)),e>n){var s=e;e=n,n=s}if(r||e%1||n%1){var l=Ao();return Pe(e+l*(n-e+op("1e-"+((l+"").length-1))),n)}return _a(e,n)}var Rm=qt(function(e,n,r){return n=n.toLowerCase(),e+(r?zu(n):n)});function zu(e){return Ka(ce(e).toLowerCase())}function Ku(e){return e=ce(e),e&&e.replace(wc,Ep).replace(Kc,"")}function wm(e,n,r){e=ce(e),n=nn(n);var s=e.length;r=r===i?s:_t(z(r),0,s);var l=r;return r-=n.length,r>=0&&e.slice(r,l)==n}function xm(e){return e=ce(e),e&&fc.test(e)?e.replace(Cs,yp):e}function Um(e){return e=ce(e),e&&Tc.test(e)?e.replace(Yi,"\\$&"):e}var Lm=qt(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Fm=qt(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Pm=eu("toLowerCase");function Bm(e,n,r){e=ce(e),n=z(n);var s=n?Bt(e):0;if(!n||s>=n)return e;var l=(n-s)/2;return oi(Hr(l),r)+e+oi(Qr(l),r)}function km(e,n,r){e=ce(e),n=z(n);var s=n?Bt(e):0;return n&&s<n?e+oi(n-s,r):e}function Vm(e,n,r){e=ce(e),n=z(n);var s=n?Bt(e):0;return n&&s<n?oi(n-s,r)+e:e}function Gm(e,n,r){return r||n==null?n=0:n&&(n=+n),Qp(ce(e).replace(Qi,""),n||0)}function Wm(e,n,r){return(r?We(e,n,r):n===i)?n=1:n=z(n),ba(ce(e),n)}function jm(){var e=arguments,n=ce(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var $m=qt(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function qm(e,n,r){return r&&typeof r!="number"&&We(e,n,r)&&(n=r=i),r=r===i?sn:r>>>0,r?(e=ce(e),e&&(typeof n=="string"||n!=null&&!Ha(n))&&(n=nn(n),!n&&Pt(e))?dt(Sn(e),0,r):e.split(n,r)):[]}var Ym=qt(function(e,n,r){return e+(r?" ":"")+Ka(n)});function Qm(e,n,r){return e=ce(e),r=r==null?0:_t(z(r),0,e.length),n=nn(n),e.slice(r,r+n.length)==n}function Hm(e,n,r){var s=c.templateSettings;r&&We(e,n,r)&&(n=i),e=ce(e),n=Ai({},n,s,ou);var l=Ai({},n.imports,s.imports,ou),p=Re(l),d=ua(l,p),h,I,b=0,N=n.interpolate||wr,D="__p += '",w=ca((n.escape||wr).source+"|"+N.source+"|"+(N===Os?Nc:wr).source+"|"+(n.evaluate||wr).source+"|$","g"),k="//# sourceURL="+(pe.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tp+"]")+`
`;e.replace(w,function(Y,ee,ie,rn,je,an){return ie||(ie=rn),D+=e.slice(b,an).replace(xc,vp),ee&&(h=!0,D+=`' +
__e(`+ee+`) +
'`),je&&(I=!0,D+=`';
`+je+`;
__p += '`),ie&&(D+=`' +
((__t = (`+ie+`)) == null ? '' : __t) +
'`),b=an+Y.length,Y}),D+=`';
`;var q=pe.call(n,"variable")&&n.variable;if(!q)D=`with (obj) {
`+D+`
}
`;else if(_c.test(q))throw new H(A);D=(I?D.replace(uc,""):D).replace(lc,"$1").replace(cc,"$1;"),D="function("+(q||"obj")+`) {
`+(q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(h?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+D+`return __p
}`;var K=Zu(function(){return oe(p,k+"return "+D).apply(i,d)});if(K.source=D,Qa(K))throw K;return K}function Jm(e){return ce(e).toLowerCase()}function zm(e){return ce(e).toUpperCase()}function Km(e,n,r){if(e=ce(e),e&&(r||n===i))return oo(e);if(!e||!(n=nn(n)))return e;var s=Sn(e),l=Sn(n),p=uo(s,l),d=lo(s,l)+1;return dt(s,p,d).join("")}function Xm(e,n,r){if(e=ce(e),e&&(r||n===i))return e.slice(0,po(e)+1);if(!e||!(n=nn(n)))return e;var s=Sn(e),l=lo(s,Sn(n))+1;return dt(s,0,l).join("")}function Zm(e,n,r){if(e=ce(e),e&&(r||n===i))return e.replace(Qi,"");if(!e||!(n=nn(n)))return e;var s=Sn(e),l=uo(s,Sn(n));return dt(s,l).join("")}function eI(e,n){var r=Q,s=Ve;if(Ee(n)){var l="separator"in n?n.separator:l;r="length"in n?z(n.length):r,s="omission"in n?nn(n.omission):s}e=ce(e);var p=e.length;if(Pt(e)){var d=Sn(e);p=d.length}if(r>=p)return e;var h=r-Bt(s);if(h<1)return s;var I=d?dt(d,0,h).join(""):e.slice(0,h);if(l===i)return I+s;if(d&&(h+=I.length-h),Ha(l)){if(e.slice(h).search(l)){var b,N=I;for(l.global||(l=ca(l.source,ce(Ms.exec(l))+"g")),l.lastIndex=0;b=l.exec(N);)var D=b.index;I=I.slice(0,D===i?h:D)}}else if(e.indexOf(nn(l),h)!=h){var w=I.lastIndexOf(l);w>-1&&(I=I.slice(0,w))}return I+s}function nI(e){return e=ce(e),e&&pc.test(e)?e.replace(Ns,Mp):e}var tI=qt(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ka=eu("toUpperCase");function Xu(e,n,r){return e=ce(e),n=r?i:n,n===i?_p(e)?wp(e):gp(e):e.match(n)||[]}var Zu=Z(function(e,n){try{return Ze(e,i,n)}catch(r){return Qa(r)?r:new H(r)}}),rI=zn(function(e,n){return ln(n,function(r){r=Bn(r),Hn(e,r,qa(e[r],e))}),e});function iI(e){var n=e==null?0:e.length,r=$();return e=n?Ie(e,function(s){if(typeof s[1]!="function")throw new cn(g);return[r(s[0]),s[1]]}):[],Z(function(s){for(var l=-1;++l<n;){var p=e[l];if(Ze(p[0],this,s))return Ze(p[1],this,s)}})}function aI(e){return Df(fn(e,R))}function Xa(e){return function(){return e}}function sI(e,n){return e==null||e!==e?n:e}var oI=tu(),uI=tu(!0);function ze(e){return e}function Za(e){return wo(typeof e=="function"?e:fn(e,R))}function lI(e){return Uo(fn(e,R))}function cI(e,n){return Lo(e,fn(n,R))}var pI=Z(function(e,n){return function(r){return hr(r,e,n)}}),fI=Z(function(e,n){return function(r){return hr(e,r,n)}});function es(e,n,r){var s=Re(n),l=ei(n,s);r==null&&!(Ee(n)&&(l.length||!s.length))&&(r=n,n=e,e=this,l=ei(n,Re(n)));var p=!(Ee(r)&&"chain"in r)||!!r.chain,d=Xn(e);return ln(l,function(h){var I=n[h];e[h]=I,d&&(e.prototype[h]=function(){var b=this.__chain__;if(p||b){var N=e(this.__wrapped__),D=N.__actions__=Qe(this.__actions__);return D.push({func:I,args:arguments,thisArg:e}),N.__chain__=b,N}return I.apply(e,ot([this.value()],arguments))})}),e}function dI(){return xe._===this&&(xe._=Bp),this}function ns(){}function hI(e){return e=z(e),Z(function(n){return Fo(n,e)})}var gI=wa(Ie),mI=wa(to),II=wa(ra);function el(e){return ka(e)?ia(Bn(e)):Qf(e)}function TI(e){return function(n){return e==null?i:bt(e,n)}}var AI=iu(),EI=iu(!0);function ts(){return[]}function rs(){return!1}function yI(){return{}}function vI(){return""}function SI(){return!0}function _I(e,n){if(e=z(e),e<1||e>En)return[];var r=sn,s=Pe(e,sn);n=$(n),e-=sn;for(var l=oa(s,n);++r<e;)n(r);return l}function bI(e){return J(e)?Ie(e,Bn):tn(e)?[e]:Qe(Eu(ce(e)))}function NI(e){var n=++Fp;return ce(e)+n}var CI=si(function(e,n){return e+n},0),OI=xa("ceil"),MI=si(function(e,n){return e/n},1),DI=xa("floor");function RI(e){return e&&e.length?Zr(e,ze,Ta):i}function wI(e,n){return e&&e.length?Zr(e,$(n,2),Ta):i}function xI(e){return ao(e,ze)}function UI(e,n){return ao(e,$(n,2))}function LI(e){return e&&e.length?Zr(e,ze,va):i}function FI(e,n){return e&&e.length?Zr(e,$(n,2),va):i}var PI=si(function(e,n){return e*n},1),BI=xa("round"),kI=si(function(e,n){return e-n},0);function VI(e){return e&&e.length?sa(e,ze):0}function GI(e,n){return e&&e.length?sa(e,$(n,2)):0}return c.after=lg,c.ary=Ru,c.assign=zg,c.assignIn=qu,c.assignInWith=Ai,c.assignWith=Kg,c.at=Xg,c.before=wu,c.bind=qa,c.bindAll=rI,c.bindKey=xu,c.castArray=yg,c.chain=Ou,c.chunk=Dd,c.compact=Rd,c.concat=wd,c.cond=iI,c.conforms=aI,c.constant=Xa,c.countBy=Vh,c.create=Zg,c.curry=Uu,c.curryRight=Lu,c.debounce=Fu,c.defaults=em,c.defaultsDeep=nm,c.defer=cg,c.delay=pg,c.difference=xd,c.differenceBy=Ud,c.differenceWith=Ld,c.drop=Fd,c.dropRight=Pd,c.dropRightWhile=Bd,c.dropWhile=kd,c.fill=Vd,c.filter=Wh,c.flatMap=qh,c.flatMapDeep=Yh,c.flatMapDepth=Qh,c.flatten=_u,c.flattenDeep=Gd,c.flattenDepth=Wd,c.flip=fg,c.flow=oI,c.flowRight=uI,c.fromPairs=jd,c.functions=um,c.functionsIn=lm,c.groupBy=Hh,c.initial=qd,c.intersection=Yd,c.intersectionBy=Qd,c.intersectionWith=Hd,c.invert=pm,c.invertBy=fm,c.invokeMap=zh,c.iteratee=Za,c.keyBy=Kh,c.keys=Re,c.keysIn=Je,c.map=di,c.mapKeys=hm,c.mapValues=gm,c.matches=lI,c.matchesProperty=cI,c.memoize=gi,c.merge=mm,c.mergeWith=Yu,c.method=pI,c.methodOf=fI,c.mixin=es,c.negate=mi,c.nthArg=hI,c.omit=Im,c.omitBy=Tm,c.once=dg,c.orderBy=Xh,c.over=gI,c.overArgs=hg,c.overEvery=mI,c.overSome=II,c.partial=Ya,c.partialRight=Pu,c.partition=Zh,c.pick=Am,c.pickBy=Qu,c.property=el,c.propertyOf=TI,c.pull=Xd,c.pullAll=Nu,c.pullAllBy=Zd,c.pullAllWith=eh,c.pullAt=nh,c.range=AI,c.rangeRight=EI,c.rearg=gg,c.reject=tg,c.remove=th,c.rest=mg,c.reverse=ja,c.sampleSize=ig,c.set=ym,c.setWith=vm,c.shuffle=ag,c.slice=rh,c.sortBy=ug,c.sortedUniq=ch,c.sortedUniqBy=ph,c.split=qm,c.spread=Ig,c.tail=fh,c.take=dh,c.takeRight=hh,c.takeRightWhile=gh,c.takeWhile=mh,c.tap=Rh,c.throttle=Tg,c.thru=fi,c.toArray=Wu,c.toPairs=Hu,c.toPairsIn=Ju,c.toPath=bI,c.toPlainObject=$u,c.transform=Sm,c.unary=Ag,c.union=Ih,c.unionBy=Th,c.unionWith=Ah,c.uniq=Eh,c.uniqBy=yh,c.uniqWith=vh,c.unset=_m,c.unzip=$a,c.unzipWith=Cu,c.update=bm,c.updateWith=Nm,c.values=Ht,c.valuesIn=Cm,c.without=Sh,c.words=Xu,c.wrap=Eg,c.xor=_h,c.xorBy=bh,c.xorWith=Nh,c.zip=Ch,c.zipObject=Oh,c.zipObjectDeep=Mh,c.zipWith=Dh,c.entries=Hu,c.entriesIn=Ju,c.extend=qu,c.extendWith=Ai,es(c,c),c.add=CI,c.attempt=Zu,c.camelCase=Rm,c.capitalize=zu,c.ceil=OI,c.clamp=Om,c.clone=vg,c.cloneDeep=_g,c.cloneDeepWith=bg,c.cloneWith=Sg,c.conformsTo=Ng,c.deburr=Ku,c.defaultTo=sI,c.divide=MI,c.endsWith=wm,c.eq=bn,c.escape=xm,c.escapeRegExp=Um,c.every=Gh,c.find=jh,c.findIndex=vu,c.findKey=tm,c.findLast=$h,c.findLastIndex=Su,c.findLastKey=rm,c.floor=DI,c.forEach=Mu,c.forEachRight=Du,c.forIn=im,c.forInRight=am,c.forOwn=sm,c.forOwnRight=om,c.get=Ja,c.gt=Cg,c.gte=Og,c.has=cm,c.hasIn=za,c.head=bu,c.identity=ze,c.includes=Jh,c.indexOf=$d,c.inRange=Mm,c.invoke=dm,c.isArguments=Ot,c.isArray=J,c.isArrayBuffer=Mg,c.isArrayLike=He,c.isArrayLikeObject=Se,c.isBoolean=Dg,c.isBuffer=ht,c.isDate=Rg,c.isElement=wg,c.isEmpty=xg,c.isEqual=Ug,c.isEqualWith=Lg,c.isError=Qa,c.isFinite=Fg,c.isFunction=Xn,c.isInteger=Bu,c.isLength=Ii,c.isMap=ku,c.isMatch=Pg,c.isMatchWith=Bg,c.isNaN=kg,c.isNative=Vg,c.isNil=Wg,c.isNull=Gg,c.isNumber=Vu,c.isObject=Ee,c.isObjectLike=ye,c.isPlainObject=Er,c.isRegExp=Ha,c.isSafeInteger=jg,c.isSet=Gu,c.isString=Ti,c.isSymbol=tn,c.isTypedArray=Qt,c.isUndefined=$g,c.isWeakMap=qg,c.isWeakSet=Yg,c.join=Jd,c.kebabCase=Lm,c.last=hn,c.lastIndexOf=zd,c.lowerCase=Fm,c.lowerFirst=Pm,c.lt=Qg,c.lte=Hg,c.max=RI,c.maxBy=wI,c.mean=xI,c.meanBy=UI,c.min=LI,c.minBy=FI,c.stubArray=ts,c.stubFalse=rs,c.stubObject=yI,c.stubString=vI,c.stubTrue=SI,c.multiply=PI,c.nth=Kd,c.noConflict=dI,c.noop=ns,c.now=hi,c.pad=Bm,c.padEnd=km,c.padStart=Vm,c.parseInt=Gm,c.random=Dm,c.reduce=eg,c.reduceRight=ng,c.repeat=Wm,c.replace=jm,c.result=Em,c.round=BI,c.runInContext=m,c.sample=rg,c.size=sg,c.snakeCase=$m,c.some=og,c.sortedIndex=ih,c.sortedIndexBy=ah,c.sortedIndexOf=sh,c.sortedLastIndex=oh,c.sortedLastIndexBy=uh,c.sortedLastIndexOf=lh,c.startCase=Ym,c.startsWith=Qm,c.subtract=kI,c.sum=VI,c.sumBy=GI,c.template=Hm,c.times=_I,c.toFinite=Zn,c.toInteger=z,c.toLength=ju,c.toLower=Jm,c.toNumber=gn,c.toSafeInteger=Jg,c.toString=ce,c.toUpper=zm,c.trim=Km,c.trimEnd=Xm,c.trimStart=Zm,c.truncate=eI,c.unescape=nI,c.uniqueId=NI,c.upperCase=tI,c.upperFirst=Ka,c.each=Mu,c.eachRight=Du,c.first=bu,es(c,function(){var e={};return Fn(c,function(n,r){pe.call(c.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),c.VERSION=o,ln(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){c[e].placeholder=c}),ln(["drop","take"],function(e,n){te.prototype[e]=function(r){r=r===i?1:Me(z(r),0);var s=this.__filtered__&&!n?new te(this):this.clone();return s.__filtered__?s.__takeCount__=Pe(r,s.__takeCount__):s.__views__.push({size:Pe(r,sn),type:e+(s.__dir__<0?"Right":"")}),s},te.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),ln(["filter","map","takeWhile"],function(e,n){var r=n+1,s=r==Mr||r==Dr;te.prototype[e]=function(l){var p=this.clone();return p.__iteratees__.push({iteratee:$(l,3),type:r}),p.__filtered__=p.__filtered__||s,p}}),ln(["head","last"],function(e,n){var r="take"+(n?"Right":"");te.prototype[e]=function(){return this[r](1).value()[0]}}),ln(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");te.prototype[e]=function(){return this.__filtered__?new te(this):this[r](1)}}),te.prototype.compact=function(){return this.filter(ze)},te.prototype.find=function(e){return this.filter(e).head()},te.prototype.findLast=function(e){return this.reverse().find(e)},te.prototype.invokeMap=Z(function(e,n){return typeof e=="function"?new te(this):this.map(function(r){return hr(r,e,n)})}),te.prototype.reject=function(e){return this.filter(mi($(e)))},te.prototype.slice=function(e,n){e=z(e);var r=this;return r.__filtered__&&(e>0||n<0)?new te(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==i&&(n=z(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},te.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},te.prototype.toArray=function(){return this.take(sn)},Fn(te.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),s=/^(?:head|last)$/.test(n),l=c[s?"take"+(n=="last"?"Right":""):n],p=s||/^find/.test(n);l&&(c.prototype[n]=function(){var d=this.__wrapped__,h=s?[1]:arguments,I=d instanceof te,b=h[0],N=I||J(d),D=function(ee){var ie=l.apply(c,ot([ee],h));return s&&w?ie[0]:ie};N&&r&&typeof b=="function"&&b.length!=1&&(I=N=!1);var w=this.__chain__,k=!!this.__actions__.length,q=p&&!w,K=I&&!k;if(!p&&N){d=K?d:new te(this);var Y=e.apply(d,h);return Y.__actions__.push({func:fi,args:[D],thisArg:i}),new pn(Y,w)}return q&&K?e.apply(this,h):(Y=this.thru(D),q?s?Y.value()[0]:Y.value():Y)})}),ln(["pop","push","shift","sort","splice","unshift"],function(e){var n=Br[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);c.prototype[e]=function(){var l=arguments;if(s&&!this.__chain__){var p=this.value();return n.apply(J(p)?p:[],l)}return this[r](function(d){return n.apply(J(d)?d:[],l)})}}),Fn(te.prototype,function(e,n){var r=c[n];if(r){var s=r.name+"";pe.call(Wt,s)||(Wt[s]=[]),Wt[s].push({name:n,func:r})}}),Wt[ai(i,Te).name]=[{name:"wrapper",func:i}],te.prototype.clone=ef,te.prototype.reverse=nf,te.prototype.value=tf,c.prototype.at=wh,c.prototype.chain=xh,c.prototype.commit=Uh,c.prototype.next=Lh,c.prototype.plant=Ph,c.prototype.reverse=Bh,c.prototype.toJSON=c.prototype.valueOf=c.prototype.value=kh,c.prototype.first=c.prototype.head,or&&(c.prototype[or]=Fh),c},kt=xp();Et?((Et.exports=kt)._=kt,Zi._=kt):xe._=kt}).call(yr)})(QI,Tn);const HI="Rasayel Developer Documentation",JI="https://uploads-ssl.webflow.com/62a044a47db17fa8bb8b0b16/62a1b443f4890fd0ed63f442_Group%201682.svg",zI='[{"title":"Introduction","content":[{"title":"Welcome","content":"Welcome to Rasayel\'s developer docs, where you will learn about Rasayel API and how to use it to build omnichannel integrations with your custom services.\\n\\nYou can start with our GraphQL API which will allow you to query information from your apps and execute actions like sending messages. Soon you will also be able to get realtime updates about incoming messages and various other events with webhooks."},{"title":"Quickstart","content":"---\\ntitle: Playground\\ndescription: Live playground to query the API\\norder: 10\\n---\\n\\n# Rasayel GraphQL Playground\\n\\nHere you can find a simple playground to try out the Rasayel GraphQL API. Any request that you would potentially make from your application, you can make here.\\n\\nTo authenticate with the server, simply grab your app\'s API key from the [API Management tab](https://app.rasayel.io), and copy the `Basic Auth` value.\\n\\n<article-image src=\\"/api_key.png\\" alt=\\"fetching-api-key-value\\"></article-image>\\n\\nThen paste it into the predefined `Authorization` header field in the playground.\\n\\n<article-image src=\\"/authentication_headers.png\\" alt=\\"setting-auth-headers-for-playground\\"></article-image>\\n\\nSome of our APIs require that you identify the user that this action should be taken as. Add `X-On-Behalf-Of` header and provide it the with the teammate ID that this action will be taken as.\\n\\n<article-image src=\\"/behalf_of_headers.png\\" alt=\\"setting-auth-headers-for-playground\\"></article-image>\\n\\nNow you\'re ready to explore the [Rasayel GraphQL API](https://studio.apollographql.com/public/rasayel-public-api-on1kuq/explorer?variant=current)!\\n\\n"}]}]',KI='{"description":"The API Documentation for Rasayel","keywords":"whatsapp, sms, api, rasayel, graphql, facebook, instagram"}',XI='{"Phone":"+353800000000","MdString":"**test** __testing__ `testing`"}',ZI="true",El={APP_TITLE:HI,APP_LOGO:JI,PAGES:zI,SITE_META:KI,QUERY_GENERATION_FACTORIES:XI,MAGIDOC_GENERATE:ZI};function uE(t){return t.get(El)}function eT(t,a){return t.getOrDefault(El,a)}function se(t,a){if(!Boolean(t))throw new Error(a)}function tt(t){return typeof t=="object"&&t!==null}function Dn(t,a){if(!Boolean(t))throw new Error(a??"Unexpected invariant triggered.")}const nT=/\r\n|[\n\r]/g;function cs(t,a){let i=0,o=1;for(const u of t.body.matchAll(nT)){if(typeof u.index=="number"||Dn(!1),u.index>=a)break;i=u.index+u[0].length,o+=1}return{line:o,column:a+1-i}}function tT(t){return yl(t.source,cs(t.source,t.start))}function yl(t,a){const i=t.locationOffset.column-1,o="".padStart(i)+t.body,u=a.line-1,f=t.locationOffset.line-1,g=a.line+f,A=a.line===1?i:0,E=a.column+A,O=`${t.name}:${g}:${E}
`,_=o.split(/\r\n|[\n\r]/g),R=_[u];if(R.length>120){const B=Math.floor(E/80),X=E%80,G=[];for(let fe=0;fe<R.length;fe+=80)G.push(R.slice(fe,fe+80));return O+il([[`${g} |`,G[0]],...G.slice(1,B+1).map(fe=>["|",fe]),["|","^".padStart(X)],["|",G[B+1]]])}return O+il([[`${g-1} |`,_[u-1]],[`${g} |`,R],["|","^".padStart(E)],[`${g+1} |`,_[u+1]]])}function il(t){const a=t.filter(([o,u])=>u!==void 0),i=Math.max(...a.map(([o])=>o.length));return a.map(([o,u])=>o.padStart(i)+(u?" "+u:"")).join(`
`)}function rT(t){const a=t[0];return a==null||"kind"in a||"length"in a?{nodes:a,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:a}class V extends Error{constructor(a,...i){var o,u,f;const{nodes:g,source:A,positions:E,path:O,originalError:_,extensions:R}=rT(i);super(a),this.name="GraphQLError",this.path=O??void 0,this.originalError=_??void 0,this.nodes=al(Array.isArray(g)?g:g?[g]:void 0);const B=al((o=this.nodes)===null||o===void 0?void 0:o.map(G=>G.loc).filter(G=>G!=null));this.source=A??(B==null||(u=B[0])===null||u===void 0?void 0:u.source),this.positions=E??(B==null?void 0:B.map(G=>G.start)),this.locations=E&&A?E.map(G=>cs(A,G)):B==null?void 0:B.map(G=>cs(G.source,G.start));const X=tt(_==null?void 0:_.extensions)?_==null?void 0:_.extensions:void 0;this.extensions=(f=R??X)!==null&&f!==void 0?f:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),_!=null&&_.stack?Object.defineProperty(this,"stack",{value:_.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,V):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let a=this.message;if(this.nodes)for(const i of this.nodes)i.loc&&(a+=`

`+tT(i.loc));else if(this.source&&this.locations)for(const i of this.locations)a+=`

`+yl(this.source,i);return a}toJSON(){const a={message:this.message};return this.locations!=null&&(a.locations=this.locations),this.path!=null&&(a.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(a.extensions=this.extensions),a}}function al(t){return t===void 0||t.length===0?void 0:t}function we(t,a,i){return new V(`Syntax Error: ${i}`,{source:t,positions:[a]})}class iT{constructor(a,i,o){this.start=a.start,this.end=i.end,this.startToken=a,this.endToken=i,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class vl{constructor(a,i,o,u,f,g){this.kind=a,this.start=i,this.end=o,this.line=u,this.column=f,this.value=g,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Sl={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},aT=new Set(Object.keys(Sl));function sl(t){const a=t==null?void 0:t.kind;return typeof a=="string"&&aT.has(a)}var mn;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(mn||(mn={}));var j;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var T;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(T||(T={}));function ps(t){return t===9||t===32}function Nr(t){return t>=48&&t<=57}function _l(t){return t>=97&&t<=122||t>=65&&t<=90}function Ts(t){return _l(t)||t===95}function bl(t){return _l(t)||Nr(t)||t===95}function sT(t){var a;let i=Number.MAX_SAFE_INTEGER,o=null,u=-1;for(let g=0;g<t.length;++g){var f;const A=t[g],E=oT(A);E!==A.length&&(o=(f=o)!==null&&f!==void 0?f:g,u=g,g!==0&&E<i&&(i=E))}return t.map((g,A)=>A===0?g:g.slice(i)).slice((a=o)!==null&&a!==void 0?a:0,u+1)}function oT(t){let a=0;for(;a<t.length&&ps(t.charCodeAt(a));)++a;return a}function uT(t,a){const i=t.replace(/"""/g,'\\"""'),o=i.split(/\r\n|[\n\r]/g),u=o.length===1,f=o.length>1&&o.slice(1).every(X=>X.length===0||ps(X.charCodeAt(0))),g=i.endsWith('\\"""'),A=t.endsWith('"')&&!g,E=t.endsWith("\\"),O=A||E,_=!(a!=null&&a.minimize)&&(!u||t.length>70||O||f||g);let R="";const B=u&&ps(t.charCodeAt(0));return(_&&!B||f)&&(R+=`
`),R+=i,(_||O)&&(R+=`
`),'"""'+R+'"""'}var C;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(C||(C={}));class lT{constructor(a){const i=new vl(C.SOF,0,0,0,0);this.source=a,this.lastToken=i,this.token=i,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let a=this.token;if(a.kind!==C.EOF)do if(a.next)a=a.next;else{const i=pT(this,a.end);a.next=i,i.prev=a,a=i}while(a.kind===C.COMMENT);return a}}function cT(t){return t===C.BANG||t===C.DOLLAR||t===C.AMP||t===C.PAREN_L||t===C.PAREN_R||t===C.SPREAD||t===C.COLON||t===C.EQUALS||t===C.AT||t===C.BRACKET_L||t===C.BRACKET_R||t===C.BRACE_L||t===C.PIPE||t===C.BRACE_R}function Xt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Mi(t,a){return Nl(t.charCodeAt(a))&&Cl(t.charCodeAt(a+1))}function Nl(t){return t>=55296&&t<=56319}function Cl(t){return t>=56320&&t<=57343}function Dt(t,a){const i=t.source.body.codePointAt(a);if(i===void 0)return C.EOF;if(i>=32&&i<=126){const o=String.fromCodePoint(i);return o==='"'?`'"'`:`"${o}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}function Ce(t,a,i,o,u){const f=t.line,g=1+i-t.lineStart;return new vl(a,i,o,f,g,u)}function pT(t,a){const i=t.source.body,o=i.length;let u=a;for(;u<o;){const f=i.charCodeAt(u);switch(f){case 65279:case 9:case 32:case 44:++u;continue;case 10:++u,++t.line,t.lineStart=u;continue;case 13:i.charCodeAt(u+1)===10?u+=2:++u,++t.line,t.lineStart=u;continue;case 35:return fT(t,u);case 33:return Ce(t,C.BANG,u,u+1);case 36:return Ce(t,C.DOLLAR,u,u+1);case 38:return Ce(t,C.AMP,u,u+1);case 40:return Ce(t,C.PAREN_L,u,u+1);case 41:return Ce(t,C.PAREN_R,u,u+1);case 46:if(i.charCodeAt(u+1)===46&&i.charCodeAt(u+2)===46)return Ce(t,C.SPREAD,u,u+3);break;case 58:return Ce(t,C.COLON,u,u+1);case 61:return Ce(t,C.EQUALS,u,u+1);case 64:return Ce(t,C.AT,u,u+1);case 91:return Ce(t,C.BRACKET_L,u,u+1);case 93:return Ce(t,C.BRACKET_R,u,u+1);case 123:return Ce(t,C.BRACE_L,u,u+1);case 124:return Ce(t,C.PIPE,u,u+1);case 125:return Ce(t,C.BRACE_R,u,u+1);case 34:return i.charCodeAt(u+1)===34&&i.charCodeAt(u+2)===34?TT(t,u):hT(t,u)}if(Nr(f)||f===45)return dT(t,u,f);if(Ts(f))return AT(t,u);throw we(t.source,u,f===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Xt(f)||Mi(i,u)?`Unexpected character: ${Dt(t,u)}.`:`Invalid character: ${Dt(t,u)}.`)}return Ce(t,C.EOF,o,o)}function fT(t,a){const i=t.source.body,o=i.length;let u=a+1;for(;u<o;){const f=i.charCodeAt(u);if(f===10||f===13)break;if(Xt(f))++u;else if(Mi(i,u))u+=2;else break}return Ce(t,C.COMMENT,a,u,i.slice(a+1,u))}function dT(t,a,i){const o=t.source.body;let u=a,f=i,g=!1;if(f===45&&(f=o.charCodeAt(++u)),f===48){if(f=o.charCodeAt(++u),Nr(f))throw we(t.source,u,`Invalid number, unexpected digit after 0: ${Dt(t,u)}.`)}else u=as(t,u,f),f=o.charCodeAt(u);if(f===46&&(g=!0,f=o.charCodeAt(++u),u=as(t,u,f),f=o.charCodeAt(u)),(f===69||f===101)&&(g=!0,f=o.charCodeAt(++u),(f===43||f===45)&&(f=o.charCodeAt(++u)),u=as(t,u,f),f=o.charCodeAt(u)),f===46||Ts(f))throw we(t.source,u,`Invalid number, expected digit but got: ${Dt(t,u)}.`);return Ce(t,g?C.FLOAT:C.INT,a,u,o.slice(a,u))}function as(t,a,i){if(!Nr(i))throw we(t.source,a,`Invalid number, expected digit but got: ${Dt(t,a)}.`);const o=t.source.body;let u=a+1;for(;Nr(o.charCodeAt(u));)++u;return u}function hT(t,a){const i=t.source.body,o=i.length;let u=a+1,f=u,g="";for(;u<o;){const A=i.charCodeAt(u);if(A===34)return g+=i.slice(f,u),Ce(t,C.STRING,a,u+1,g);if(A===92){g+=i.slice(f,u);const E=i.charCodeAt(u+1)===117?i.charCodeAt(u+2)===123?gT(t,u):mT(t,u):IT(t,u);g+=E.value,u+=E.size,f=u;continue}if(A===10||A===13)break;if(Xt(A))++u;else if(Mi(i,u))u+=2;else throw we(t.source,u,`Invalid character within String: ${Dt(t,u)}.`)}throw we(t.source,u,"Unterminated string.")}function gT(t,a){const i=t.source.body;let o=0,u=3;for(;u<12;){const f=i.charCodeAt(a+u++);if(f===125){if(u<5||!Xt(o))break;return{value:String.fromCodePoint(o),size:u}}if(o=o<<4|vr(f),o<0)break}throw we(t.source,a,`Invalid Unicode escape sequence: "${i.slice(a,a+u)}".`)}function mT(t,a){const i=t.source.body,o=ol(i,a+2);if(Xt(o))return{value:String.fromCodePoint(o),size:6};if(Nl(o)&&i.charCodeAt(a+6)===92&&i.charCodeAt(a+7)===117){const u=ol(i,a+8);if(Cl(u))return{value:String.fromCodePoint(o,u),size:12}}throw we(t.source,a,`Invalid Unicode escape sequence: "${i.slice(a,a+6)}".`)}function ol(t,a){return vr(t.charCodeAt(a))<<12|vr(t.charCodeAt(a+1))<<8|vr(t.charCodeAt(a+2))<<4|vr(t.charCodeAt(a+3))}function vr(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function IT(t,a){const i=t.source.body;switch(i.charCodeAt(a+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw we(t.source,a,`Invalid character escape sequence: "${i.slice(a,a+2)}".`)}function TT(t,a){const i=t.source.body,o=i.length;let u=t.lineStart,f=a+3,g=f,A="";const E=[];for(;f<o;){const O=i.charCodeAt(f);if(O===34&&i.charCodeAt(f+1)===34&&i.charCodeAt(f+2)===34){A+=i.slice(g,f),E.push(A);const _=Ce(t,C.BLOCK_STRING,a,f+3,sT(E).join(`
`));return t.line+=E.length-1,t.lineStart=u,_}if(O===92&&i.charCodeAt(f+1)===34&&i.charCodeAt(f+2)===34&&i.charCodeAt(f+3)===34){A+=i.slice(g,f),g=f+1,f+=4;continue}if(O===10||O===13){A+=i.slice(g,f),E.push(A),O===13&&i.charCodeAt(f+1)===10?f+=2:++f,A="",g=f,u=f;continue}if(Xt(O))++f;else if(Mi(i,f))f+=2;else throw we(t.source,f,`Invalid character within String: ${Dt(t,f)}.`)}throw we(t.source,f,"Unterminated string.")}function AT(t,a){const i=t.source.body,o=i.length;let u=a+1;for(;u<o;){const f=i.charCodeAt(u);if(bl(f))++u;else break}return Ce(t,C.NAME,a,u,i.slice(a,u))}const ET=10,Ol=2;function W(t){return Di(t,[])}function Di(t,a){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return yT(t,a);default:return String(t)}}function yT(t,a){if(t===null)return"null";if(a.includes(t))return"[Circular]";const i=[...a,t];if(vT(t)){const o=t.toJSON();if(o!==t)return typeof o=="string"?o:Di(o,i)}else if(Array.isArray(t))return _T(t,i);return ST(t,i)}function vT(t){return typeof t.toJSON=="function"}function ST(t,a){const i=Object.entries(t);return i.length===0?"{}":a.length>Ol?"["+bT(t)+"]":"{ "+i.map(([u,f])=>u+": "+Di(f,a)).join(", ")+" }"}function _T(t,a){if(t.length===0)return"[]";if(a.length>Ol)return"[Array]";const i=Math.min(ET,t.length),o=t.length-i,u=[];for(let f=0;f<i;++f)u.push(Di(t[f],a));return o===1?u.push("... 1 more item"):o>1&&u.push(`... ${o} more items`),"["+u.join(", ")+"]"}function bT(t){const a=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(a==="Object"&&typeof t.constructor=="function"){const i=t.constructor.name;if(typeof i=="string"&&i!=="")return i}return a}const Wn=function(a,i){return a instanceof i};class Ml{constructor(a,i="GraphQL request",o={line:1,column:1}){typeof a=="string"||se(!1,`Body must be a string. Received: ${W(a)}.`),this.body=a,this.name=i,this.locationOffset=o,this.locationOffset.line>0||se(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||se(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function NT(t){return Wn(t,Ml)}function CT(t,a){return new Dl(t,a).parseDocument()}function OT(t,a){const i=new Dl(t,a);i.expectToken(C.SOF);const o=i.parseValueLiteral(!1);return i.expectToken(C.EOF),o}class Dl{constructor(a,i={}){const o=NT(a)?a:new Ml(a);this._lexer=new lT(o),this._options=i,this._tokenCounter=0}parseName(){const a=this.expectToken(C.NAME);return this.node(a,{kind:T.NAME,value:a.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const a=this.peekDescription(),i=a?this._lexer.lookahead():this._lexer.token;if(i.kind===C.NAME){switch(i.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(a)throw we(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(i.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(i)}parseOperationDefinition(){const a=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(a,{kind:T.OPERATION_DEFINITION,operation:mn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const i=this.parseOperationType();let o;return this.peek(C.NAME)&&(o=this.parseName()),this.node(a,{kind:T.OPERATION_DEFINITION,operation:i,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const a=this.expectToken(C.NAME);switch(a.value){case"query":return mn.QUERY;case"mutation":return mn.MUTATION;case"subscription":return mn.SUBSCRIPTION}throw this.unexpected(a)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const a=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(a,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const a=this._lexer.token,i=this.parseName();let o,u;return this.expectOptionalToken(C.COLON)?(o=i,u=this.parseName()):u=i,this.node(a,{kind:T.FIELD,alias:o,name:u,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(a){const i=a?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,i,C.PAREN_R)}parseArgument(a=!1){const i=this._lexer.token,o=this.parseName();return this.expectToken(C.COLON),this.node(i,{kind:T.ARGUMENT,name:o,value:this.parseValueLiteral(a)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const a=this._lexer.token;this.expectToken(C.SPREAD);const i=this.expectOptionalKeyword("on");return!i&&this.peek(C.NAME)?this.node(a,{kind:T.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(a,{kind:T.INLINE_FRAGMENT,typeCondition:i?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const a=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(a,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(a,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(a){const i=this._lexer.token;switch(i.kind){case C.BRACKET_L:return this.parseList(a);case C.BRACE_L:return this.parseObject(a);case C.INT:return this.advanceLexer(),this.node(i,{kind:T.INT,value:i.value});case C.FLOAT:return this.advanceLexer(),this.node(i,{kind:T.FLOAT,value:i.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),i.value){case"true":return this.node(i,{kind:T.BOOLEAN,value:!0});case"false":return this.node(i,{kind:T.BOOLEAN,value:!1});case"null":return this.node(i,{kind:T.NULL});default:return this.node(i,{kind:T.ENUM,value:i.value})}case C.DOLLAR:if(a)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const o=this._lexer.token.value;throw we(this._lexer.source,i.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(i);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const a=this._lexer.token;return this.advanceLexer(),this.node(a,{kind:T.STRING,value:a.value,block:a.kind===C.BLOCK_STRING})}parseList(a){const i=()=>this.parseValueLiteral(a);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(C.BRACKET_L,i,C.BRACKET_R)})}parseObject(a){const i=()=>this.parseObjectField(a);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(C.BRACE_L,i,C.BRACE_R)})}parseObjectField(a){const i=this._lexer.token,o=this.parseName();return this.expectToken(C.COLON),this.node(i,{kind:T.OBJECT_FIELD,name:o,value:this.parseValueLiteral(a)})}parseDirectives(a){const i=[];for(;this.peek(C.AT);)i.push(this.parseDirective(a));return i}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(a){const i=this._lexer.token;return this.expectToken(C.AT),this.node(i,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(a)})}parseTypeReference(){const a=this._lexer.token;let i;if(this.expectOptionalToken(C.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(C.BRACKET_R),i=this.node(a,{kind:T.LIST_TYPE,type:o})}else i=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(a,{kind:T.NON_NULL_TYPE,type:i}):i}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),u=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(a,{kind:T.SCHEMA_DEFINITION,description:i,directives:o,operationTypes:u})}parseOperationTypeDefinition(){const a=this._lexer.token,i=this.parseOperationType();this.expectToken(C.COLON);const o=this.parseNamedType();return this.node(a,{kind:T.OPERATION_TYPE_DEFINITION,operation:i,type:o})}parseScalarTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),u=this.parseConstDirectives();return this.node(a,{kind:T.SCALAR_TYPE_DEFINITION,description:i,name:o,directives:u})}parseObjectTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),u=this.parseImplementsInterfaces(),f=this.parseConstDirectives(),g=this.parseFieldsDefinition();return this.node(a,{kind:T.OBJECT_TYPE_DEFINITION,description:i,name:o,interfaces:u,directives:f,fields:g})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const a=this._lexer.token,i=this.parseDescription(),o=this.parseName(),u=this.parseArgumentDefs();this.expectToken(C.COLON);const f=this.parseTypeReference(),g=this.parseConstDirectives();return this.node(a,{kind:T.FIELD_DEFINITION,description:i,name:o,arguments:u,type:f,directives:g})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const a=this._lexer.token,i=this.parseDescription(),o=this.parseName();this.expectToken(C.COLON);const u=this.parseTypeReference();let f;this.expectOptionalToken(C.EQUALS)&&(f=this.parseConstValueLiteral());const g=this.parseConstDirectives();return this.node(a,{kind:T.INPUT_VALUE_DEFINITION,description:i,name:o,type:u,defaultValue:f,directives:g})}parseInterfaceTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),u=this.parseImplementsInterfaces(),f=this.parseConstDirectives(),g=this.parseFieldsDefinition();return this.node(a,{kind:T.INTERFACE_TYPE_DEFINITION,description:i,name:o,interfaces:u,directives:f,fields:g})}parseUnionTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),u=this.parseConstDirectives(),f=this.parseUnionMemberTypes();return this.node(a,{kind:T.UNION_TYPE_DEFINITION,description:i,name:o,directives:u,types:f})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),u=this.parseConstDirectives(),f=this.parseEnumValuesDefinition();return this.node(a,{kind:T.ENUM_TYPE_DEFINITION,description:i,name:o,directives:u,values:f})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const a=this._lexer.token,i=this.parseDescription(),o=this.parseEnumValueName(),u=this.parseConstDirectives();return this.node(a,{kind:T.ENUM_VALUE_DEFINITION,description:i,name:o,directives:u})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw we(this._lexer.source,this._lexer.token.start,`${yi(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),u=this.parseConstDirectives(),f=this.parseInputFieldsDefinition();return this.node(a,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:i,name:o,directives:u,fields:f})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const a=this._lexer.lookahead();if(a.kind===C.NAME)switch(a.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(a)}parseSchemaExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const i=this.parseConstDirectives(),o=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(i.length===0&&o.length===0)throw this.unexpected();return this.node(a,{kind:T.SCHEMA_EXTENSION,directives:i,operationTypes:o})}parseScalarTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const i=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(a,{kind:T.SCALAR_TYPE_EXTENSION,name:i,directives:o})}parseObjectTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const i=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),f=this.parseFieldsDefinition();if(o.length===0&&u.length===0&&f.length===0)throw this.unexpected();return this.node(a,{kind:T.OBJECT_TYPE_EXTENSION,name:i,interfaces:o,directives:u,fields:f})}parseInterfaceTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const i=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),f=this.parseFieldsDefinition();if(o.length===0&&u.length===0&&f.length===0)throw this.unexpected();return this.node(a,{kind:T.INTERFACE_TYPE_EXTENSION,name:i,interfaces:o,directives:u,fields:f})}parseUnionTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(a,{kind:T.UNION_TYPE_EXTENSION,name:i,directives:o,types:u})}parseEnumTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(a,{kind:T.ENUM_TYPE_EXTENSION,name:i,directives:o,values:u})}parseInputObjectTypeExtension(){const a=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const i=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();if(o.length===0&&u.length===0)throw this.unexpected();return this.node(a,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:i,directives:o,fields:u})}parseDirectiveDefinition(){const a=this._lexer.token,i=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const o=this.parseName(),u=this.parseArgumentDefs(),f=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const g=this.parseDirectiveLocations();return this.node(a,{kind:T.DIRECTIVE_DEFINITION,description:i,name:o,arguments:u,repeatable:f,locations:g})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const a=this._lexer.token,i=this.parseName();if(Object.prototype.hasOwnProperty.call(j,i.value))return i;throw this.unexpected(a)}node(a,i){return this._options.noLocation!==!0&&(i.loc=new iT(a,this._lexer.lastToken,this._lexer.source)),i}peek(a){return this._lexer.token.kind===a}expectToken(a){const i=this._lexer.token;if(i.kind===a)return this.advanceLexer(),i;throw we(this._lexer.source,i.start,`Expected ${Rl(a)}, found ${yi(i)}.`)}expectOptionalToken(a){return this._lexer.token.kind===a?(this.advanceLexer(),!0):!1}expectKeyword(a){const i=this._lexer.token;if(i.kind===C.NAME&&i.value===a)this.advanceLexer();else throw we(this._lexer.source,i.start,`Expected "${a}", found ${yi(i)}.`)}expectOptionalKeyword(a){const i=this._lexer.token;return i.kind===C.NAME&&i.value===a?(this.advanceLexer(),!0):!1}unexpected(a){const i=a??this._lexer.token;return we(this._lexer.source,i.start,`Unexpected ${yi(i)}.`)}any(a,i,o){this.expectToken(a);const u=[];for(;!this.expectOptionalToken(o);)u.push(i.call(this));return u}optionalMany(a,i,o){if(this.expectOptionalToken(a)){const u=[];do u.push(i.call(this));while(!this.expectOptionalToken(o));return u}return[]}many(a,i,o){this.expectToken(a);const u=[];do u.push(i.call(this));while(!this.expectOptionalToken(o));return u}delimitedMany(a,i){this.expectOptionalToken(a);const o=[];do o.push(i.call(this));while(this.expectOptionalToken(a));return o}advanceLexer(){const{maxTokens:a}=this._options,i=this._lexer.advance();if(a!==void 0&&i.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>a))throw we(this._lexer.source,i.start,`Document contains more that ${a} tokens. Parsing aborted.`)}}function yi(t){const a=t.value;return Rl(t.kind)+(a!=null?` "${a}"`:"")}function Rl(t){return cT(t)?`"${t}"`:t}const MT=5;function Ri(t,a){const[i,o]=a?[t,a]:[void 0,t];let u=" Did you mean ";i&&(u+=i+" ");const f=o.map(E=>`"${E}"`);switch(f.length){case 0:return"";case 1:return u+f[0]+"?";case 2:return u+f[0]+" or "+f[1]+"?"}const g=f.slice(0,MT),A=g.pop();return u+g.join(", ")+", or "+A+"?"}function ul(t){return t}function zt(t,a){const i=Object.create(null);for(const o of t)i[a(o)]=o;return i}function Mt(t,a,i){const o=Object.create(null);for(const u of t)o[a(u)]=i(u);return o}function nt(t,a){const i=Object.create(null);for(const o of Object.keys(t))i[o]=a(t[o],o);return i}function DT(t,a){let i=0,o=0;for(;i<t.length&&o<a.length;){let u=t.charCodeAt(i),f=a.charCodeAt(o);if(vi(u)&&vi(f)){let g=0;do++i,g=g*10+u-fs,u=t.charCodeAt(i);while(vi(u)&&g>0);let A=0;do++o,A=A*10+f-fs,f=a.charCodeAt(o);while(vi(f)&&A>0);if(g<A)return-1;if(g>A)return 1}else{if(u<f)return-1;if(u>f)return 1;++i,++o}}return t.length-a.length}const fs=48,RT=57;function vi(t){return!isNaN(t)&&fs<=t&&t<=RT}function wi(t,a){const i=Object.create(null),o=new wT(t),u=Math.floor(t.length*.4)+1;for(const f of a){const g=o.measure(f,u);g!==void 0&&(i[f]=g)}return Object.keys(i).sort((f,g)=>{const A=i[f]-i[g];return A!==0?A:DT(f,g)})}class wT{constructor(a){this._input=a,this._inputLowerCase=a.toLowerCase(),this._inputArray=ll(this._inputLowerCase),this._rows=[new Array(a.length+1).fill(0),new Array(a.length+1).fill(0),new Array(a.length+1).fill(0)]}measure(a,i){if(this._input===a)return 0;const o=a.toLowerCase();if(this._inputLowerCase===o)return 1;let u=ll(o),f=this._inputArray;if(u.length<f.length){const _=u;u=f,f=_}const g=u.length,A=f.length;if(g-A>i)return;const E=this._rows;for(let _=0;_<=A;_++)E[0][_]=_;for(let _=1;_<=g;_++){const R=E[(_-1)%3],B=E[_%3];let X=B[0]=_;for(let G=1;G<=A;G++){const fe=u[_-1]===f[G-1]?0:1;let ae=Math.min(R[G]+1,B[G-1]+1,R[G-1]+fe);if(_>1&&G>1&&u[_-1]===f[G-2]&&u[_-2]===f[G-1]){const Te=E[(_-2)%3][G-2];ae=Math.min(ae,Te+1)}ae<X&&(X=ae),B[G]=ae}if(X>i)return}const O=E[g%3][A];return O<=i?O:void 0}}function ll(t){const a=t.length,i=new Array(a);for(let o=0;o<a;++o)i[o]=t.charCodeAt(o);return i}function An(t){if(t==null)return Object.create(null);if(Object.getPrototypeOf(t)===null)return t;const a=Object.create(null);for(const[i,o]of Object.entries(t))a[i]=o;return a}function xT(t){return`"${t.replace(UT,LT)}"`}const UT=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function LT(t){return FT[t.charCodeAt(0)]}const FT=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Sr=Object.freeze({});function wl(t,a,i=Sl){const o=new Map;for(const Te of Object.values(T))o.set(Te,xl(a,Te));let u,f=Array.isArray(t),g=[t],A=-1,E=[],O=t,_,R;const B=[],X=[];do{A++;const Te=A===g.length,jn=Te&&E.length!==0;if(Te){if(_=X.length===0?void 0:B[B.length-1],O=R,R=X.pop(),jn)if(f){O=O.slice();let Ne=0;for(const[De,ke]of E){const Le=De-Ne;ke===null?(O.splice(Le,1),Ne++):O[Le]=ke}}else{O=Object.defineProperties({},Object.getOwnPropertyDescriptors(O));for(const[Ne,De]of E)O[Ne]=De}A=u.index,g=u.keys,E=u.edits,f=u.inArray,u=u.prev}else if(R){if(_=f?A:g[A],O=R[_],O==null)continue;B.push(_)}let Ae;if(!Array.isArray(O)){var G,fe;sl(O)||se(!1,`Invalid AST Node: ${W(O)}.`);const Ne=Te?(G=o.get(O.kind))===null||G===void 0?void 0:G.leave:(fe=o.get(O.kind))===null||fe===void 0?void 0:fe.enter;if(Ae=Ne==null?void 0:Ne.call(a,O,_,R,B,X),Ae===Sr)break;if(Ae===!1){if(!Te){B.pop();continue}}else if(Ae!==void 0&&(E.push([_,Ae]),!Te))if(sl(Ae))O=Ae;else{B.pop();continue}}if(Ae===void 0&&jn&&E.push([_,O]),Te)B.pop();else{var ae;u={inArray:f,index:A,keys:g,edits:E,prev:u},f=Array.isArray(O),g=f?O:(ae=i[O.kind])!==null&&ae!==void 0?ae:[],A=-1,E=[],R&&X.push(R),R=O}}while(u!==void 0);return E.length!==0?E[E.length-1][1]:t}function PT(t){const a=new Array(t.length).fill(null),i=Object.create(null);for(const o of Object.values(T)){let u=!1;const f=new Array(t.length).fill(void 0),g=new Array(t.length).fill(void 0);for(let E=0;E<t.length;++E){const{enter:O,leave:_}=xl(t[E],o);u||(u=O!=null||_!=null),f[E]=O,g[E]=_}if(!u)continue;const A={enter(...E){const O=E[0];for(let R=0;R<t.length;R++)if(a[R]===null){var _;const B=(_=f[R])===null||_===void 0?void 0:_.apply(t[R],E);if(B===!1)a[R]=O;else if(B===Sr)a[R]=Sr;else if(B!==void 0)return B}},leave(...E){const O=E[0];for(let R=0;R<t.length;R++)if(a[R]===null){var _;const B=(_=g[R])===null||_===void 0?void 0:_.apply(t[R],E);if(B===Sr)a[R]=Sr;else if(B!==void 0&&B!==!1)return B}else a[R]===O&&(a[R]=null)}};i[o]=A}return i}function xl(t,a){const i=t[a];return typeof i=="object"?i:typeof i=="function"?{enter:i,leave:void 0}:{enter:t.enter,leave:t.leave}}function Vn(t){return wl(t,kT)}const BT=80,kT={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>P(t.definitions,`

`)},OperationDefinition:{leave(t){const a=re("(",P(t.variableDefinitions,", "),")"),i=P([t.operation,P([t.name,a]),P(t.directives," ")]," ");return(i==="query"?"":i+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:a,defaultValue:i,directives:o})=>t+": "+a+re(" = ",i)+re(" ",P(o," "))},SelectionSet:{leave:({selections:t})=>Cn(t)},Field:{leave({alias:t,name:a,arguments:i,directives:o,selectionSet:u}){const f=re("",t,": ")+a;let g=f+re("(",P(i,", "),")");return g.length>BT&&(g=f+re(`(
`,bi(P(i,`
`)),`
)`)),P([g,P(o," "),u]," ")}},Argument:{leave:({name:t,value:a})=>t+": "+a},FragmentSpread:{leave:({name:t,directives:a})=>"..."+t+re(" ",P(a," "))},InlineFragment:{leave:({typeCondition:t,directives:a,selectionSet:i})=>P(["...",re("on ",t),P(a," "),i]," ")},FragmentDefinition:{leave:({name:t,typeCondition:a,variableDefinitions:i,directives:o,selectionSet:u})=>`fragment ${t}${re("(",P(i,", "),")")} on ${a} ${re("",P(o," ")," ")}`+u},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:a})=>a?uT(t):xT(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+P(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+P(t,", ")+"}"},ObjectField:{leave:({name:t,value:a})=>t+": "+a},Directive:{leave:({name:t,arguments:a})=>"@"+t+re("(",P(a,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:a,operationTypes:i})=>re("",t,`
`)+P(["schema",P(a," "),Cn(i)]," ")},OperationTypeDefinition:{leave:({operation:t,type:a})=>t+": "+a},ScalarTypeDefinition:{leave:({description:t,name:a,directives:i})=>re("",t,`
`)+P(["scalar",a,P(i," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:a,interfaces:i,directives:o,fields:u})=>re("",t,`
`)+P(["type",a,re("implements ",P(i," & ")),P(o," "),Cn(u)]," ")},FieldDefinition:{leave:({description:t,name:a,arguments:i,type:o,directives:u})=>re("",t,`
`)+a+(cl(i)?re(`(
`,bi(P(i,`
`)),`
)`):re("(",P(i,", "),")"))+": "+o+re(" ",P(u," "))},InputValueDefinition:{leave:({description:t,name:a,type:i,defaultValue:o,directives:u})=>re("",t,`
`)+P([a+": "+i,re("= ",o),P(u," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:a,interfaces:i,directives:o,fields:u})=>re("",t,`
`)+P(["interface",a,re("implements ",P(i," & ")),P(o," "),Cn(u)]," ")},UnionTypeDefinition:{leave:({description:t,name:a,directives:i,types:o})=>re("",t,`
`)+P(["union",a,P(i," "),re("= ",P(o," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:a,directives:i,values:o})=>re("",t,`
`)+P(["enum",a,P(i," "),Cn(o)]," ")},EnumValueDefinition:{leave:({description:t,name:a,directives:i})=>re("",t,`
`)+P([a,P(i," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:a,directives:i,fields:o})=>re("",t,`
`)+P(["input",a,P(i," "),Cn(o)]," ")},DirectiveDefinition:{leave:({description:t,name:a,arguments:i,repeatable:o,locations:u})=>re("",t,`
`)+"directive @"+a+(cl(i)?re(`(
`,bi(P(i,`
`)),`
)`):re("(",P(i,", "),")"))+(o?" repeatable":"")+" on "+P(u," | ")},SchemaExtension:{leave:({directives:t,operationTypes:a})=>P(["extend schema",P(t," "),Cn(a)]," ")},ScalarTypeExtension:{leave:({name:t,directives:a})=>P(["extend scalar",t,P(a," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:a,directives:i,fields:o})=>P(["extend type",t,re("implements ",P(a," & ")),P(i," "),Cn(o)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:a,directives:i,fields:o})=>P(["extend interface",t,re("implements ",P(a," & ")),P(i," "),Cn(o)]," ")},UnionTypeExtension:{leave:({name:t,directives:a,types:i})=>P(["extend union",t,P(a," "),re("= ",P(i," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:a,values:i})=>P(["extend enum",t,P(a," "),Cn(i)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:a,fields:i})=>P(["extend input",t,P(a," "),Cn(i)]," ")}};function P(t,a=""){var i;return(i=t==null?void 0:t.filter(o=>o).join(a))!==null&&i!==void 0?i:""}function Cn(t){return re(`{
`,bi(P(t,`
`)),`
}`)}function re(t,a,i=""){return a!=null&&a!==""?t+a+i:""}function bi(t){return re("  ",t.replace(/\n/g,`
  `))}function cl(t){var a;return(a=t==null?void 0:t.some(i=>i.includes(`
`)))!==null&&a!==void 0?a:!1}function ds(t,a){switch(t.kind){case T.NULL:return null;case T.INT:return parseInt(t.value,10);case T.FLOAT:return parseFloat(t.value);case T.STRING:case T.ENUM:case T.BOOLEAN:return t.value;case T.LIST:return t.values.map(i=>ds(i,a));case T.OBJECT:return Mt(t.fields,i=>i.name.value,i=>ds(i.value,a));case T.VARIABLE:return a==null?void 0:a[t.name.value]}}function Un(t){if(t!=null||se(!1,"Must provide name."),typeof t=="string"||se(!1,"Expected name to be a string."),t.length===0)throw new V("Expected name to be a non-empty string.");for(let a=1;a<t.length;++a)if(!bl(t.charCodeAt(a)))throw new V(`Names must only contain [_a-zA-Z0-9] but "${t}" does not.`);if(!Ts(t.charCodeAt(0)))throw new V(`Names must start with [_a-zA-Z] but "${t}" does not.`);return t}function VT(t){if(t==="true"||t==="false"||t==="null")throw new V(`Enum values cannot be named: ${t}`);return Un(t)}function As(t){return It(t)||Xe(t)||qe(t)||Rn(t)||wn(t)||xn(t)||Rt(t)||$e(t)}function It(t){return Wn(t,rt)}function Xe(t){return Wn(t,Gn)}function GT(t){if(!Xe(t))throw new Error(`Expected ${W(t)} to be a GraphQL Object type.`);return t}function qe(t){return Wn(t,Ni)}function WT(t){if(!qe(t))throw new Error(`Expected ${W(t)} to be a GraphQL Interface type.`);return t}function Rn(t){return Wn(t,Ci)}function wn(t){return Wn(t,Kt)}function xn(t){return Wn(t,Oi)}function Rt(t){return Wn(t,Ke)}function $e(t){return Wn(t,ne)}function Ul(t){return It(t)||wn(t)||xn(t)||Es(t)&&Ul(t.ofType)}function Ll(t){return It(t)||Xe(t)||qe(t)||Rn(t)||wn(t)||Es(t)&&Ll(t.ofType)}function Fl(t){return It(t)||wn(t)}function jT(t){return qe(t)||Rn(t)}class Ke{constructor(a){As(a)||se(!1,`Expected ${W(a)} to be a GraphQL type.`),this.ofType=a}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ne{constructor(a){Pl(a)||se(!1,`Expected ${W(a)} to be a GraphQL nullable type.`),this.ofType=a}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Es(t){return Rt(t)||$e(t)}function Pl(t){return As(t)&&!$e(t)}function $T(t){if(!Pl(t))throw new Error(`Expected ${W(t)} to be a GraphQL nullable type.`);return t}function lE(t){return It(t)||Xe(t)||qe(t)||Rn(t)||wn(t)||xn(t)}function qT(t){if(t){let a=t;for(;Es(a);)a=a.ofType;return a}}function Bl(t){return typeof t=="function"?t():t}function kl(t){return typeof t=="function"?t():t}class rt{constructor(a){var i,o,u,f;const g=(i=a.parseValue)!==null&&i!==void 0?i:ul;this.name=Un(a.name),this.description=a.description,this.specifiedByURL=a.specifiedByURL,this.serialize=(o=a.serialize)!==null&&o!==void 0?o:ul,this.parseValue=g,this.parseLiteral=(u=a.parseLiteral)!==null&&u!==void 0?u:(A,E)=>g(ds(A,E)),this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(f=a.extensionASTNodes)!==null&&f!==void 0?f:[],a.specifiedByURL==null||typeof a.specifiedByURL=="string"||se(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${W(a.specifiedByURL)}.`),a.serialize==null||typeof a.serialize=="function"||se(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),a.parseLiteral&&(typeof a.parseValue=="function"&&typeof a.parseLiteral=="function"||se(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Gn{constructor(a){var i;this.name=Un(a.name),this.description=a.description,this.isTypeOf=a.isTypeOf,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=()=>Gl(a),this._interfaces=()=>Vl(a),a.isTypeOf==null||typeof a.isTypeOf=="function"||se(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${W(a.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jl(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Vl(t){var a;const i=Bl((a=t.interfaces)!==null&&a!==void 0?a:[]);return Array.isArray(i)||se(!1,`${t.name} interfaces must be an Array or a function which returns an Array.`),i}function Gl(t){const a=kl(t.fields);return Jt(a)||se(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(a,(i,o)=>{var u;Jt(i)||se(!1,`${t.name}.${o} field config must be an object.`),i.resolve==null||typeof i.resolve=="function"||se(!1,`${t.name}.${o} field resolver must be a function if provided, but got: ${W(i.resolve)}.`);const f=(u=i.args)!==null&&u!==void 0?u:{};return Jt(f)||se(!1,`${t.name}.${o} args must be an object with argument names as keys.`),{name:Un(o),description:i.description,type:i.type,args:Wl(f),resolve:i.resolve,subscribe:i.subscribe,deprecationReason:i.deprecationReason,extensions:An(i.extensions),astNode:i.astNode}})}function Wl(t){return Object.entries(t).map(([a,i])=>({name:Un(a),description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:An(i.extensions),astNode:i.astNode}))}function Jt(t){return tt(t)&&!Array.isArray(t)}function jl(t){return nt(t,a=>({description:a.description,type:a.type,args:$l(a.args),resolve:a.resolve,subscribe:a.subscribe,deprecationReason:a.deprecationReason,extensions:a.extensions,astNode:a.astNode}))}function $l(t){return Mt(t,a=>a.name,a=>({description:a.description,type:a.type,defaultValue:a.defaultValue,deprecationReason:a.deprecationReason,extensions:a.extensions,astNode:a.astNode}))}function YT(t){return $e(t.type)&&t.defaultValue===void 0}class Ni{constructor(a){var i;this.name=Un(a.name),this.description=a.description,this.resolveType=a.resolveType,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=Gl.bind(void 0,a),this._interfaces=Vl.bind(void 0,a),a.resolveType==null||typeof a.resolveType=="function"||se(!1,`${this.name} must provide "resolveType" as a function, but got: ${W(a.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jl(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ci{constructor(a){var i;this.name=Un(a.name),this.description=a.description,this.resolveType=a.resolveType,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._types=QT.bind(void 0,a),a.resolveType==null||typeof a.resolveType=="function"||se(!1,`${this.name} must provide "resolveType" as a function, but got: ${W(a.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function QT(t){const a=Bl(t.types);return Array.isArray(a)||se(!1,`Must provide Array of types or a function which returns such an array for Union ${t.name}.`),a}class Kt{constructor(a){var i;this.name=Un(a.name),this.description=a.description,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._values=HT(this.name,a.values),this._valueLookup=new Map(this._values.map(o=>[o.value,o])),this._nameLookup=zt(this._values,o=>o.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(a){return this._nameLookup[a]}serialize(a){const i=this._valueLookup.get(a);if(i===void 0)throw new V(`Enum "${this.name}" cannot represent value: ${W(a)}`);return i.name}parseValue(a){if(typeof a!="string"){const o=W(a);throw new V(`Enum "${this.name}" cannot represent non-string value: ${o}.`+Si(this,o))}const i=this.getValue(a);if(i==null)throw new V(`Value "${a}" does not exist in "${this.name}" enum.`+Si(this,a));return i.value}parseLiteral(a,i){if(a.kind!==T.ENUM){const u=Vn(a);throw new V(`Enum "${this.name}" cannot represent non-enum value: ${u}.`+Si(this,u),{nodes:a})}const o=this.getValue(a.value);if(o==null){const u=Vn(a);throw new V(`Value "${u}" does not exist in "${this.name}" enum.`+Si(this,u),{nodes:a})}return o.value}toConfig(){const a=Mt(this.getValues(),i=>i.name,i=>({description:i.description,value:i.value,deprecationReason:i.deprecationReason,extensions:i.extensions,astNode:i.astNode}));return{name:this.name,description:this.description,values:a,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Si(t,a){const i=t.getValues().map(u=>u.name),o=wi(a,i);return Ri("the enum value",o)}function HT(t,a){return Jt(a)||se(!1,`${t} values must be an object with value names as keys.`),Object.entries(a).map(([i,o])=>(Jt(o)||se(!1,`${t}.${i} must refer to an object with a "value" key representing an internal value but got: ${W(o)}.`),{name:VT(i),description:o.description,value:o.value!==void 0?o.value:i,deprecationReason:o.deprecationReason,extensions:An(o.extensions),astNode:o.astNode}))}class Oi{constructor(a){var i;this.name=Un(a.name),this.description=a.description,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._fields=JT.bind(void 0,a)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const a=nt(this.getFields(),i=>({description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:i.extensions,astNode:i.astNode}));return{name:this.name,description:this.description,fields:a,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function JT(t){const a=kl(t.fields);return Jt(a)||se(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),nt(a,(i,o)=>(!("resolve"in i)||se(!1,`${t.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:Un(o),description:i.description,type:i.type,defaultValue:i.defaultValue,deprecationReason:i.deprecationReason,extensions:An(i.extensions),astNode:i.astNode}))}const ss=2147483647,os=-2147483648,zT=new rt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(t){const a=Cr(t);if(typeof a=="boolean")return a?1:0;let i=a;if(typeof a=="string"&&a!==""&&(i=Number(a)),typeof i!="number"||!Number.isInteger(i))throw new V(`Int cannot represent non-integer value: ${W(a)}`);if(i>ss||i<os)throw new V("Int cannot represent non 32-bit signed integer value: "+W(a));return i},parseValue(t){if(typeof t!="number"||!Number.isInteger(t))throw new V(`Int cannot represent non-integer value: ${W(t)}`);if(t>ss||t<os)throw new V(`Int cannot represent non 32-bit signed integer value: ${t}`);return t},parseLiteral(t){if(t.kind!==T.INT)throw new V(`Int cannot represent non-integer value: ${Vn(t)}`,{nodes:t});const a=parseInt(t.value,10);if(a>ss||a<os)throw new V(`Int cannot represent non 32-bit signed integer value: ${t.value}`,{nodes:t});return a}}),KT=new rt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(t){const a=Cr(t);if(typeof a=="boolean")return a?1:0;let i=a;if(typeof a=="string"&&a!==""&&(i=Number(a)),typeof i!="number"||!Number.isFinite(i))throw new V(`Float cannot represent non numeric value: ${W(a)}`);return i},parseValue(t){if(typeof t!="number"||!Number.isFinite(t))throw new V(`Float cannot represent non numeric value: ${W(t)}`);return t},parseLiteral(t){if(t.kind!==T.FLOAT&&t.kind!==T.INT)throw new V(`Float cannot represent non numeric value: ${Vn(t)}`,t);return parseFloat(t.value)}}),be=new rt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(t){const a=Cr(t);if(typeof a=="string")return a;if(typeof a=="boolean")return a?"true":"false";if(typeof a=="number"&&Number.isFinite(a))return a.toString();throw new V(`String cannot represent value: ${W(t)}`)},parseValue(t){if(typeof t!="string")throw new V(`String cannot represent a non string value: ${W(t)}`);return t},parseLiteral(t){if(t.kind!==T.STRING)throw new V(`String cannot represent a non string value: ${Vn(t)}`,{nodes:t});return t.value}}),In=new rt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(t){const a=Cr(t);if(typeof a=="boolean")return a;if(Number.isFinite(a))return a!==0;throw new V(`Boolean cannot represent a non boolean value: ${W(a)}`)},parseValue(t){if(typeof t!="boolean")throw new V(`Boolean cannot represent a non boolean value: ${W(t)}`);return t},parseLiteral(t){if(t.kind!==T.BOOLEAN)throw new V(`Boolean cannot represent a non boolean value: ${Vn(t)}`,{nodes:t});return t.value}}),ql=new rt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(t){const a=Cr(t);if(typeof a=="string")return a;if(Number.isInteger(a))return String(a);throw new V(`ID cannot represent value: ${W(t)}`)},parseValue(t){if(typeof t=="string")return t;if(typeof t=="number"&&Number.isInteger(t))return t.toString();throw new V(`ID cannot represent value: ${W(t)}`)},parseLiteral(t){if(t.kind!==T.STRING&&t.kind!==T.INT)throw new V("ID cannot represent a non-string and non-integer value: "+Vn(t),{nodes:t});return t.value}}),xi=Object.freeze([be,zT,KT,In,ql]);function XT(t){return xi.some(({name:a})=>t.name===a)}function Cr(t){if(tt(t)){if(typeof t.valueOf=="function"){const a=t.valueOf();if(!tt(a))return a}if(typeof t.toJSON=="function")return t.toJSON()}return t}function ZT(t){return Wn(t,mt)}class mt{constructor(a){var i,o;this.name=Un(a.name),this.description=a.description,this.locations=a.locations,this.isRepeatable=(i=a.isRepeatable)!==null&&i!==void 0?i:!1,this.extensions=An(a.extensions),this.astNode=a.astNode,Array.isArray(a.locations)||se(!1,`@${a.name} locations must be an Array.`);const u=(o=a.args)!==null&&o!==void 0?o:{};tt(u)&&!Array.isArray(u)||se(!1,`@${a.name} args must be an object with argument names as keys.`),this.args=Wl(u)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:$l(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const eA=new mt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new ne(In),description:"Included when true."}}}),nA=new mt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new ne(In),description:"Skipped when true."}}}),tA="No longer supported",Yl=new mt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:be,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:tA}}}),Ql=new mt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new ne(be),description:"The URL that specifies the behavior of this scalar."}}}),Zt=Object.freeze([eA,nA,Yl,Ql]);function rA(t){return typeof t=="object"&&typeof(t==null?void 0:t[Symbol.iterator])=="function"}function _r(t,a){if($e(a)){const i=_r(t,a.ofType);return(i==null?void 0:i.kind)===T.NULL?null:i}if(t===null)return{kind:T.NULL};if(t===void 0)return null;if(Rt(a)){const i=a.ofType;if(rA(t)){const o=[];for(const u of t){const f=_r(u,i);f!=null&&o.push(f)}return{kind:T.LIST,values:o}}return _r(t,i)}if(xn(a)){if(!tt(t))return null;const i=[];for(const o of Object.values(a.getFields())){const u=_r(t[o.name],o.type);u&&i.push({kind:T.OBJECT_FIELD,name:{kind:T.NAME,value:o.name},value:u})}return{kind:T.OBJECT,fields:i}}if(Fl(a)){const i=a.serialize(t);if(i==null)return null;if(typeof i=="boolean")return{kind:T.BOOLEAN,value:i};if(typeof i=="number"&&Number.isFinite(i)){const o=String(i);return pl.test(o)?{kind:T.INT,value:o}:{kind:T.FLOAT,value:o}}if(typeof i=="string")return wn(a)?{kind:T.ENUM,value:i}:a===ql&&pl.test(i)?{kind:T.INT,value:i}:{kind:T.STRING,value:i};throw new TypeError(`Cannot convert value to AST: ${W(i)}.`)}Dn(!1,"Unexpected input type: "+W(a))}const pl=/^-?(?:0|[1-9][0-9]*)$/,ys=new Gn({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:be,resolve:t=>t.description},types:{description:"A list of all types supported by this server.",type:new ne(new Ke(new ne(Mn))),resolve(t){return Object.values(t.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ne(Mn),resolve:t=>t.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Mn,resolve:t=>t.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Mn,resolve:t=>t.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ne(new Ke(new ne(Hl))),resolve:t=>t.getDirectives()}})}),Hl=new Gn({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ne(be),resolve:t=>t.name},description:{type:be,resolve:t=>t.description},isRepeatable:{type:new ne(In),resolve:t=>t.isRepeatable},locations:{type:new ne(new Ke(new ne(Jl))),resolve:t=>t.locations},args:{type:new ne(new Ke(new ne(Ui))),args:{includeDeprecated:{type:In,defaultValue:!1}},resolve(t,{includeDeprecated:a}){return a?t.args:t.args.filter(i=>i.deprecationReason==null)}}})}),Jl=new Kt({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Mn=new Gn({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ne(Xl),resolve(t){if(It(t))return he.SCALAR;if(Xe(t))return he.OBJECT;if(qe(t))return he.INTERFACE;if(Rn(t))return he.UNION;if(wn(t))return he.ENUM;if(xn(t))return he.INPUT_OBJECT;if(Rt(t))return he.LIST;if($e(t))return he.NON_NULL;Dn(!1,`Unexpected type: "${W(t)}".`)}},name:{type:be,resolve:t=>"name"in t?t.name:void 0},description:{type:be,resolve:t=>"description"in t?t.description:void 0},specifiedByURL:{type:be,resolve:t=>"specifiedByURL"in t?t.specifiedByURL:void 0},fields:{type:new Ke(new ne(zl)),args:{includeDeprecated:{type:In,defaultValue:!1}},resolve(t,{includeDeprecated:a}){if(Xe(t)||qe(t)){const i=Object.values(t.getFields());return a?i:i.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new Ke(new ne(Mn)),resolve(t){if(Xe(t)||qe(t))return t.getInterfaces()}},possibleTypes:{type:new Ke(new ne(Mn)),resolve(t,a,i,{schema:o}){if(jT(t))return o.getPossibleTypes(t)}},enumValues:{type:new Ke(new ne(Kl)),args:{includeDeprecated:{type:In,defaultValue:!1}},resolve(t,{includeDeprecated:a}){if(wn(t)){const i=t.getValues();return a?i:i.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new Ke(new ne(Ui)),args:{includeDeprecated:{type:In,defaultValue:!1}},resolve(t,{includeDeprecated:a}){if(xn(t)){const i=Object.values(t.getFields());return a?i:i.filter(o=>o.deprecationReason==null)}}},ofType:{type:Mn,resolve:t=>"ofType"in t?t.ofType:void 0}})}),zl=new Gn({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ne(be),resolve:t=>t.name},description:{type:be,resolve:t=>t.description},args:{type:new ne(new Ke(new ne(Ui))),args:{includeDeprecated:{type:In,defaultValue:!1}},resolve(t,{includeDeprecated:a}){return a?t.args:t.args.filter(i=>i.deprecationReason==null)}},type:{type:new ne(Mn),resolve:t=>t.type},isDeprecated:{type:new ne(In),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:be,resolve:t=>t.deprecationReason}})}),Ui=new Gn({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ne(be),resolve:t=>t.name},description:{type:be,resolve:t=>t.description},type:{type:new ne(Mn),resolve:t=>t.type},defaultValue:{type:be,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(t){const{type:a,defaultValue:i}=t,o=_r(i,a);return o?Vn(o):null}},isDeprecated:{type:new ne(In),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:be,resolve:t=>t.deprecationReason}})}),Kl=new Gn({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ne(be),resolve:t=>t.name},description:{type:be,resolve:t=>t.description},isDeprecated:{type:new ne(In),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:be,resolve:t=>t.deprecationReason}})});var he;(function(t){t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.INPUT_OBJECT="INPUT_OBJECT",t.LIST="LIST",t.NON_NULL="NON_NULL"})(he||(he={}));const Xl=new Kt({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:he.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:he.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:he.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:he.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:he.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:he.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:he.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:he.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ne(ys);new ne(be);new ne(be);const Li=Object.freeze([ys,Hl,Jl,Mn,zl,Ui,Kl,Xl]);function iA(t){return Li.some(({name:a})=>t.name===a)}class Zl{constructor(a){var i,o;this.__validationErrors=a.assumeValid===!0?[]:void 0,tt(a)||se(!1,"Must provide configuration object."),!a.types||Array.isArray(a.types)||se(!1,`"types" must be Array if provided but got: ${W(a.types)}.`),!a.directives||Array.isArray(a.directives)||se(!1,`"directives" must be Array if provided but got: ${W(a.directives)}.`),this.description=a.description,this.extensions=An(a.extensions),this.astNode=a.astNode,this.extensionASTNodes=(i=a.extensionASTNodes)!==null&&i!==void 0?i:[],this._queryType=a.query,this._mutationType=a.mutation,this._subscriptionType=a.subscription,this._directives=(o=a.directives)!==null&&o!==void 0?o:Zt;const u=new Set(a.types);if(a.types!=null)for(const f of a.types)u.delete(f),On(f,u);this._queryType!=null&&On(this._queryType,u),this._mutationType!=null&&On(this._mutationType,u),this._subscriptionType!=null&&On(this._subscriptionType,u);for(const f of this._directives)if(ZT(f))for(const g of f.args)On(g.type,u);On(ys,u),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const f of u){if(f==null)continue;const g=f.name;if(g||se(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[g]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${g}".`);if(this._typeMap[g]=f,qe(f)){for(const A of f.getInterfaces())if(qe(A)){let E=this._implementationsMap[A.name];E===void 0&&(E=this._implementationsMap[A.name]={objects:[],interfaces:[]}),E.interfaces.push(f)}}else if(Xe(f)){for(const A of f.getInterfaces())if(qe(A)){let E=this._implementationsMap[A.name];E===void 0&&(E=this._implementationsMap[A.name]={objects:[],interfaces:[]}),E.objects.push(f)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(a){switch(a){case mn.QUERY:return this.getQueryType();case mn.MUTATION:return this.getMutationType();case mn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(a){return this.getTypeMap()[a]}getPossibleTypes(a){return Rn(a)?a.getTypes():this.getImplementations(a).objects}getImplementations(a){const i=this._implementationsMap[a.name];return i??{objects:[],interfaces:[]}}isSubType(a,i){let o=this._subTypeMap[a.name];if(o===void 0){if(o=Object.create(null),Rn(a))for(const u of a.getTypes())o[u.name]=!0;else{const u=this.getImplementations(a);for(const f of u.objects)o[f.name]=!0;for(const f of u.interfaces)o[f.name]=!0}this._subTypeMap[a.name]=o}return o[i.name]!==void 0}getDirectives(){return this._directives}getDirective(a){return this.getDirectives().find(i=>i.name===a)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function On(t,a){const i=qT(t);if(!a.has(i)){if(a.add(i),Rn(i))for(const o of i.getTypes())On(o,a);else if(Xe(i)||qe(i)){for(const o of i.getInterfaces())On(o,a);for(const o of Object.values(i.getFields())){On(o.type,a);for(const u of o.args)On(u.type,a)}}else if(xn(i))for(const o of Object.values(i.getFields()))On(o.type,a)}return a}function aA(t){return t.kind===T.SCHEMA_DEFINITION||Or(t)||t.kind===T.DIRECTIVE_DEFINITION}function Or(t){return t.kind===T.SCALAR_TYPE_DEFINITION||t.kind===T.OBJECT_TYPE_DEFINITION||t.kind===T.INTERFACE_TYPE_DEFINITION||t.kind===T.UNION_TYPE_DEFINITION||t.kind===T.ENUM_TYPE_DEFINITION||t.kind===T.INPUT_OBJECT_TYPE_DEFINITION}function sA(t){return t.kind===T.SCHEMA_EXTENSION||vs(t)}function vs(t){return t.kind===T.SCALAR_TYPE_EXTENSION||t.kind===T.OBJECT_TYPE_EXTENSION||t.kind===T.INTERFACE_TYPE_EXTENSION||t.kind===T.UNION_TYPE_EXTENSION||t.kind===T.ENUM_TYPE_EXTENSION||t.kind===T.INPUT_OBJECT_TYPE_EXTENSION}function oA(t){const a=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const g of o)a[g.name]=g.args.map(A=>A.name);const u=t.getDocument().definitions;for(const g of u)if(g.kind===T.DIRECTIVE_DEFINITION){var f;const A=(f=g.arguments)!==null&&f!==void 0?f:[];a[g.name.value]=A.map(E=>E.name.value)}return{Directive(g){const A=g.name.value,E=a[A];if(g.arguments&&E)for(const O of g.arguments){const _=O.name.value;if(!E.includes(_)){const R=wi(_,E);t.reportError(new V(`Unknown argument "${_}" on directive "@${A}".`+Ri(R),{nodes:O}))}}return!1}}}function uA(t){const a=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const f of o)a[f.name]=f.locations;const u=t.getDocument().definitions;for(const f of u)f.kind===T.DIRECTIVE_DEFINITION&&(a[f.name.value]=f.locations.map(g=>g.value));return{Directive(f,g,A,E,O){const _=f.name.value,R=a[_];if(!R){t.reportError(new V(`Unknown directive "@${_}".`,{nodes:f}));return}const B=lA(O);B&&!R.includes(B)&&t.reportError(new V(`Directive "@${_}" may not be used on ${B}.`,{nodes:f}))}}}function lA(t){const a=t[t.length-1];switch("kind"in a||Dn(!1),a.kind){case T.OPERATION_DEFINITION:return cA(a.operation);case T.FIELD:return j.FIELD;case T.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case T.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case T.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case T.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case T.SCHEMA_DEFINITION:case T.SCHEMA_EXTENSION:return j.SCHEMA;case T.SCALAR_TYPE_DEFINITION:case T.SCALAR_TYPE_EXTENSION:return j.SCALAR;case T.OBJECT_TYPE_DEFINITION:case T.OBJECT_TYPE_EXTENSION:return j.OBJECT;case T.FIELD_DEFINITION:return j.FIELD_DEFINITION;case T.INTERFACE_TYPE_DEFINITION:case T.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case T.UNION_TYPE_DEFINITION:case T.UNION_TYPE_EXTENSION:return j.UNION;case T.ENUM_TYPE_DEFINITION:case T.ENUM_TYPE_EXTENSION:return j.ENUM;case T.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case T.INPUT_OBJECT_TYPE_DEFINITION:case T.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case T.INPUT_VALUE_DEFINITION:{const i=t[t.length-3];return"kind"in i||Dn(!1),i.kind===T.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Dn(!1,"Unexpected kind: "+W(a.kind))}}function cA(t){switch(t){case mn.QUERY:return j.QUERY;case mn.MUTATION:return j.MUTATION;case mn.SUBSCRIPTION:return j.SUBSCRIPTION}}function pA(t){const a=t.getSchema(),i=a?a.getTypeMap():Object.create(null),o=Object.create(null);for(const f of t.getDocument().definitions)Or(f)&&(o[f.name.value]=!0);const u=[...Object.keys(i),...Object.keys(o)];return{NamedType(f,g,A,E,O){const _=f.name.value;if(!i[_]&&!o[_]){var R;const B=(R=O[2])!==null&&R!==void 0?R:A,X=B!=null&&fA(B);if(X&&fl.includes(_))return;const G=wi(_,X?fl.concat(u):u);t.reportError(new V(`Unknown type "${_}".`+Ri(G),{nodes:f}))}}}}const fl=[...xi,...Li].map(t=>t.name);function fA(t){return"kind"in t&&(aA(t)||sA(t))}function dA(t){var a,i,o;const u=t.getSchema(),f=(a=(i=(o=u==null?void 0:u.astNode)!==null&&o!==void 0?o:u==null?void 0:u.getQueryType())!==null&&i!==void 0?i:u==null?void 0:u.getMutationType())!==null&&a!==void 0?a:u==null?void 0:u.getSubscriptionType();let g=0;return{SchemaDefinition(A){if(f){t.reportError(new V("Cannot define a new schema within a schema extension.",{nodes:A}));return}g>0&&t.reportError(new V("Must provide only one schema definition.",{nodes:A})),++g}}}function hA(t){const a=t.getSchema(),i=Object.create(null);for(const u of t.getDocument().definitions)Or(u)&&(i[u.name.value]=u);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(u){const f=u.name.value,g=i[f],A=a==null?void 0:a.getType(f);let E;if(g?E=gA[g.kind]:A&&(E=mA(A)),E){if(E!==u.kind){const O=IA(u.kind);t.reportError(new V(`Cannot extend non-${O} type "${f}".`,{nodes:g?[g,u]:u}))}}else{const O=Object.keys({...i,...a==null?void 0:a.getTypeMap()}),_=wi(f,O);t.reportError(new V(`Cannot extend type "${f}" because it is not defined.`+Ri(_),{nodes:u.name}))}}}const gA={[T.SCALAR_TYPE_DEFINITION]:T.SCALAR_TYPE_EXTENSION,[T.OBJECT_TYPE_DEFINITION]:T.OBJECT_TYPE_EXTENSION,[T.INTERFACE_TYPE_DEFINITION]:T.INTERFACE_TYPE_EXTENSION,[T.UNION_TYPE_DEFINITION]:T.UNION_TYPE_EXTENSION,[T.ENUM_TYPE_DEFINITION]:T.ENUM_TYPE_EXTENSION,[T.INPUT_OBJECT_TYPE_DEFINITION]:T.INPUT_OBJECT_TYPE_EXTENSION};function mA(t){if(It(t))return T.SCALAR_TYPE_EXTENSION;if(Xe(t))return T.OBJECT_TYPE_EXTENSION;if(qe(t))return T.INTERFACE_TYPE_EXTENSION;if(Rn(t))return T.UNION_TYPE_EXTENSION;if(wn(t))return T.ENUM_TYPE_EXTENSION;if(xn(t))return T.INPUT_OBJECT_TYPE_EXTENSION;Dn(!1,"Unexpected type: "+W(t))}function IA(t){switch(t){case T.SCALAR_TYPE_EXTENSION:return"scalar";case T.OBJECT_TYPE_EXTENSION:return"object";case T.INTERFACE_TYPE_EXTENSION:return"interface";case T.UNION_TYPE_EXTENSION:return"union";case T.ENUM_TYPE_EXTENSION:return"enum";case T.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Dn(!1,"Unexpected kind: "+W(t))}}function TA(t){var a;const i=Object.create(null),o=t.getSchema(),u=(a=o==null?void 0:o.getDirectives())!==null&&a!==void 0?a:Zt;for(const A of u)i[A.name]=zt(A.args.filter(YT),E=>E.name);const f=t.getDocument().definitions;for(const A of f)if(A.kind===T.DIRECTIVE_DEFINITION){var g;const E=(g=A.arguments)!==null&&g!==void 0?g:[];i[A.name.value]=zt(E.filter(AA),O=>O.name.value)}return{Directive:{leave(A){const E=A.name.value,O=i[E];if(O){var _;const R=(_=A.arguments)!==null&&_!==void 0?_:[],B=new Set(R.map(X=>X.name.value));for(const[X,G]of Object.entries(O))if(!B.has(X)){const fe=As(G.type)?W(G.type):Vn(G.type);t.reportError(new V(`Directive "@${E}" argument "${X}" of type "${fe}" is required, but it was not provided.`,{nodes:A}))}}}}}}function AA(t){return t.type.kind===T.NON_NULL_TYPE&&t.defaultValue==null}function gt(t,a,i){if(t){if(t.kind===T.VARIABLE){const o=t.name.value;if(i==null||i[o]===void 0)return;const u=i[o];return u===null&&$e(a)?void 0:u}if($e(a))return t.kind===T.NULL?void 0:gt(t,a.ofType,i);if(t.kind===T.NULL)return null;if(Rt(a)){const o=a.ofType;if(t.kind===T.LIST){const f=[];for(const g of t.values)if(dl(g,i)){if($e(o))return;f.push(null)}else{const A=gt(g,o,i);if(A===void 0)return;f.push(A)}return f}const u=gt(t,o,i);return u===void 0?void 0:[u]}if(xn(a)){if(t.kind!==T.OBJECT)return;const o=Object.create(null),u=zt(t.fields,f=>f.name.value);for(const f of Object.values(a.getFields())){const g=u[f.name];if(!g||dl(g.value,i)){if(f.defaultValue!==void 0)o[f.name]=f.defaultValue;else if($e(f.type))return;continue}const A=gt(g.value,f.type,i);if(A===void 0)return;o[f.name]=A}return o}if(Fl(a)){let o;try{o=a.parseLiteral(t,i)}catch{return}return o===void 0?void 0:o}Dn(!1,"Unexpected input type: "+W(a))}}function dl(t,a){return t.kind===T.VARIABLE&&(a==null||a[t.name.value]===void 0)}function EA(t,a,i){var o;const u={},f=(o=a.arguments)!==null&&o!==void 0?o:[],g=zt(f,A=>A.name.value);for(const A of t.args){const E=A.name,O=A.type,_=g[E];if(!_){if(A.defaultValue!==void 0)u[E]=A.defaultValue;else if($e(O))throw new V(`Argument "${E}" of required type "${W(O)}" was not provided.`,{nodes:a});continue}const R=_.value;let B=R.kind===T.NULL;if(R.kind===T.VARIABLE){const G=R.name.value;if(i==null||!yA(i,G)){if(A.defaultValue!==void 0)u[E]=A.defaultValue;else if($e(O))throw new V(`Argument "${E}" of required type "${W(O)}" was provided the variable "$${G}" which was not provided a runtime value.`,{nodes:R});continue}B=i[G]==null}if(B&&$e(O))throw new V(`Argument "${E}" of non-null type "${W(O)}" must not be null.`,{nodes:R});const X=gt(R,O,i);if(X===void 0)throw new V(`Argument "${E}" has invalid value ${Vn(R)}.`,{nodes:R});u[E]=X}return u}function ec(t,a,i){var o;const u=(o=a.directives)===null||o===void 0?void 0:o.find(f=>f.name.value===t.name);if(u)return EA(t,u,i)}function yA(t,a){return Object.prototype.hasOwnProperty.call(t,a)}function nc(t,a){const i=new Map;for(const o of t){const u=a(o),f=i.get(u);f===void 0?i.set(u,[o]):f.push(o)}return i}function vA(t){return{DirectiveDefinition(o){var u;const f=(u=o.arguments)!==null&&u!==void 0?u:[];return i(`@${o.name.value}`,f)},InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(o){var u;const f=o.name.value,g=(u=o.fields)!==null&&u!==void 0?u:[];for(const E of g){var A;const O=E.name.value,_=(A=E.arguments)!==null&&A!==void 0?A:[];i(`${f}.${O}`,_)}return!1}function i(o,u){const f=nc(u,g=>g.name.value);for(const[g,A]of f)A.length>1&&t.reportError(new V(`Argument "${o}(${g}:)" can only be defined once.`,{nodes:A.map(E=>E.name)}));return!1}}function SA(t){return{Field:a,Directive:a};function a(i){var o;const u=(o=i.arguments)!==null&&o!==void 0?o:[],f=nc(u,g=>g.name.value);for(const[g,A]of f)A.length>1&&t.reportError(new V(`There can be only one argument named "${g}".`,{nodes:A.map(E=>E.name)}))}}function _A(t){const a=Object.create(null),i=t.getSchema();return{DirectiveDefinition(o){const u=o.name.value;if(i!=null&&i.getDirective(u)){t.reportError(new V(`Directive "@${u}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return a[u]?t.reportError(new V(`There can be only one directive named "@${u}".`,{nodes:[a[u],o.name]})):a[u]=o.name,!1}}}function bA(t){const a=Object.create(null),i=t.getSchema(),o=i?i.getDirectives():Zt;for(const A of o)a[A.name]=!A.isRepeatable;const u=t.getDocument().definitions;for(const A of u)A.kind===T.DIRECTIVE_DEFINITION&&(a[A.name.value]=!A.repeatable);const f=Object.create(null),g=Object.create(null);return{enter(A){if(!("directives"in A)||!A.directives)return;let E;if(A.kind===T.SCHEMA_DEFINITION||A.kind===T.SCHEMA_EXTENSION)E=f;else if(Or(A)||vs(A)){const O=A.name.value;E=g[O],E===void 0&&(g[O]=E=Object.create(null))}else E=Object.create(null);for(const O of A.directives){const _=O.name.value;a[_]&&(E[_]?t.reportError(new V(`The directive "@${_}" can only be used once at this location.`,{nodes:[E[_],O]})):E[_]=O)}}}}function NA(t){const a=t.getSchema(),i=a?a.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:u,EnumTypeExtension:u};function u(f){var g;const A=f.name.value;o[A]||(o[A]=Object.create(null));const E=(g=f.values)!==null&&g!==void 0?g:[],O=o[A];for(const _ of E){const R=_.name.value,B=i[A];wn(B)&&B.getValue(R)?t.reportError(new V(`Enum value "${A}.${R}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:_.name})):O[R]?t.reportError(new V(`Enum value "${A}.${R}" can only be defined once.`,{nodes:[O[R],_.name]})):O[R]=_.name}return!1}}function CA(t){const a=t.getSchema(),i=a?a.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:u,InputObjectTypeExtension:u,InterfaceTypeDefinition:u,InterfaceTypeExtension:u,ObjectTypeDefinition:u,ObjectTypeExtension:u};function u(f){var g;const A=f.name.value;o[A]||(o[A]=Object.create(null));const E=(g=f.fields)!==null&&g!==void 0?g:[],O=o[A];for(const _ of E){const R=_.name.value;OA(i[A],R)?t.reportError(new V(`Field "${A}.${R}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:_.name})):O[R]?t.reportError(new V(`Field "${A}.${R}" can only be defined once.`,{nodes:[O[R],_.name]})):O[R]=_.name}return!1}}function OA(t,a){return Xe(t)||qe(t)||xn(t)?t.getFields()[a]!=null:!1}function MA(t){const a=[];let i=Object.create(null);return{ObjectValue:{enter(){a.push(i),i=Object.create(null)},leave(){const o=a.pop();o||Dn(!1),i=o}},ObjectField(o){const u=o.name.value;i[u]?t.reportError(new V(`There can be only one input field named "${u}".`,{nodes:[i[u],o.name]})):i[u]=o.name}}}function DA(t){const a=t.getSchema(),i=Object.create(null),o=a?{query:a.getQueryType(),mutation:a.getMutationType(),subscription:a.getSubscriptionType()}:{};return{SchemaDefinition:u,SchemaExtension:u};function u(f){var g;const A=(g=f.operationTypes)!==null&&g!==void 0?g:[];for(const E of A){const O=E.operation,_=i[O];o[O]?t.reportError(new V(`Type for ${O} already defined in the schema. It cannot be redefined.`,{nodes:E})):_?t.reportError(new V(`There can be only one ${O} type in schema.`,{nodes:[_,E]})):i[O]=E}return!1}}function RA(t){const a=Object.create(null),i=t.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(u){const f=u.name.value;if(i!=null&&i.getType(f)){t.reportError(new V(`Type "${f}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:u.name}));return}return a[f]?t.reportError(new V(`There can be only one type named "${f}".`,{nodes:[a[f],u.name]})):a[f]=u.name,!1}}const wA=Object.freeze([dA,DA,RA,NA,CA,vA,_A,pA,uA,bA,hA,oA,SA,MA,TA]);class xA{constructor(a,i){this._ast=a,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=i}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(a){this._onError(a)}getDocument(){return this._ast}getFragment(a){let i;if(this._fragments)i=this._fragments;else{i=Object.create(null);for(const o of this.getDocument().definitions)o.kind===T.FRAGMENT_DEFINITION&&(i[o.name.value]=o);this._fragments=i}return i[a]}getFragmentSpreads(a){let i=this._fragmentSpreads.get(a);if(!i){i=[];const o=[a];let u;for(;u=o.pop();)for(const f of u.selections)f.kind===T.FRAGMENT_SPREAD?i.push(f):f.selectionSet&&o.push(f.selectionSet);this._fragmentSpreads.set(a,i)}return i}getRecursivelyReferencedFragments(a){let i=this._recursivelyReferencedFragments.get(a);if(!i){i=[];const o=Object.create(null),u=[a.selectionSet];let f;for(;f=u.pop();)for(const g of this.getFragmentSpreads(f)){const A=g.name.value;if(o[A]!==!0){o[A]=!0;const E=this.getFragment(A);E&&(i.push(E),u.push(E.selectionSet))}}this._recursivelyReferencedFragments.set(a,i)}return i}}class UA extends xA{constructor(a,i,o){super(a,o),this._schema=i}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function LA(t,a,i=wA){const o=[],u=new UA(t,a,g=>{o.push(g)}),f=i.map(g=>g(u));return wl(t,PT(f)),o}function FA(t){const a=LA(t);if(a.length!==0)throw new Error(a.map(i=>i.message).join(`

`))}function PA(t,a){tt(t)&&tt(t.__schema)||se(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${W(t)}.`);const i=t.__schema,o=Mt(i.types,M=>M.name,M=>B(M));for(const M of[...xi,...Li])o[M.name]&&(o[M.name]=M);const u=i.queryType?_(i.queryType):null,f=i.mutationType?_(i.mutationType):null,g=i.subscriptionType?_(i.subscriptionType):null,A=i.directives?i.directives.map($n):[];return new Zl({description:i.description,query:u,mutation:f,subscription:g,types:Object.values(o),directives:A,assumeValid:a==null?void 0:a.assumeValid});function E(M){if(M.kind===he.LIST){const Q=M.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");return new Ke(E(Q))}if(M.kind===he.NON_NULL){const Q=M.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");const Ve=E(Q);return new ne($T(Ve))}return O(M)}function O(M){const Q=M.name;if(!Q)throw new Error(`Unknown type reference: ${W(M)}.`);const Ve=o[Q];if(!Ve)throw new Error(`Invalid or incomplete schema, unknown type: ${Q}. Ensure that a full introspection query is used in order to build a client schema.`);return Ve}function _(M){return GT(O(M))}function R(M){return WT(O(M))}function B(M){if(M!=null&&M.name!=null&&M.kind!=null)switch(M.kind){case he.SCALAR:return X(M);case he.OBJECT:return fe(M);case he.INTERFACE:return ae(M);case he.UNION:return Te(M);case he.ENUM:return jn(M);case he.INPUT_OBJECT:return Ae(M)}const Q=W(M);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Q}.`)}function X(M){return new rt({name:M.name,description:M.description,specifiedByURL:M.specifiedByURL})}function G(M){if(M.interfaces===null&&M.kind===he.INTERFACE)return[];if(!M.interfaces){const Q=W(M);throw new Error(`Introspection result missing interfaces: ${Q}.`)}return M.interfaces.map(R)}function fe(M){return new Gn({name:M.name,description:M.description,interfaces:()=>G(M),fields:()=>Ne(M)})}function ae(M){return new Ni({name:M.name,description:M.description,interfaces:()=>G(M),fields:()=>Ne(M)})}function Te(M){if(!M.possibleTypes){const Q=W(M);throw new Error(`Introspection result missing possibleTypes: ${Q}.`)}return new Ci({name:M.name,description:M.description,types:()=>M.possibleTypes.map(_)})}function jn(M){if(!M.enumValues){const Q=W(M);throw new Error(`Introspection result missing enumValues: ${Q}.`)}return new Kt({name:M.name,description:M.description,values:Mt(M.enumValues,Q=>Q.name,Q=>({description:Q.description,deprecationReason:Q.deprecationReason}))})}function Ae(M){if(!M.inputFields){const Q=W(M);throw new Error(`Introspection result missing inputFields: ${Q}.`)}return new Oi({name:M.name,description:M.description,fields:()=>ke(M.inputFields)})}function Ne(M){if(!M.fields)throw new Error(`Introspection result missing fields: ${W(M)}.`);return Mt(M.fields,Q=>Q.name,De)}function De(M){const Q=E(M.type);if(!Ll(Q)){const Ve=W(Q);throw new Error(`Introspection must provide output type for fields, but received: ${Ve}.`)}if(!M.args){const Ve=W(M);throw new Error(`Introspection result missing field args: ${Ve}.`)}return{description:M.description,deprecationReason:M.deprecationReason,type:Q,args:ke(M.args)}}function ke(M){return Mt(M,Q=>Q.name,Le)}function Le(M){const Q=E(M.type);if(!Ul(Q)){const it=W(Q);throw new Error(`Introspection must provide input type for arguments, but received: ${it}.`)}const Ve=M.defaultValue!=null?gt(OT(M.defaultValue),Q):void 0;return{description:M.description,type:Q,defaultValue:Ve,deprecationReason:M.deprecationReason}}function $n(M){if(!M.args){const Q=W(M);throw new Error(`Introspection result missing directive args: ${Q}.`)}if(!M.locations){const Q=W(M);throw new Error(`Introspection result missing directive locations: ${Q}.`)}return new mt({name:M.name,description:M.description,isRepeatable:M.isRepeatable,locations:M.locations.slice(),args:ke(M.args)})}}function BA(t,a,i){var o,u,f,g;const A=[],E=Object.create(null),O=[];let _;const R=[];for(const S of a.definitions)if(S.kind===T.SCHEMA_DEFINITION)_=S;else if(S.kind===T.SCHEMA_EXTENSION)R.push(S);else if(Or(S))A.push(S);else if(vs(S)){const F=S.name.value,x=E[F];E[F]=x?x.concat([S]):[S]}else S.kind===T.DIRECTIVE_DEFINITION&&O.push(S);if(Object.keys(E).length===0&&A.length===0&&O.length===0&&R.length===0&&_==null)return t;const B=Object.create(null);for(const S of t.types)B[S.name]=jn(S);for(const S of A){var X;const F=S.name.value;B[F]=(X=hl[F])!==null&&X!==void 0?X:sn(S)}const G={query:t.query&&ae(t.query),mutation:t.mutation&&ae(t.mutation),subscription:t.subscription&&ae(t.subscription),..._&&Ve([_]),...Ve(R)};return{description:(o=_)===null||o===void 0||(u=o.description)===null||u===void 0?void 0:u.value,...G,types:Object.values(B),directives:[...t.directives.map(Te),...O.map(Mr)],extensions:Object.create(null),astNode:(f=_)!==null&&f!==void 0?f:t.astNode,extensionASTNodes:t.extensionASTNodes.concat(R),assumeValid:(g=i==null?void 0:i.assumeValid)!==null&&g!==void 0?g:!1};function fe(S){return Rt(S)?new Ke(fe(S.ofType)):$e(S)?new ne(fe(S.ofType)):ae(S)}function ae(S){return B[S.name]}function Te(S){const F=S.toConfig();return new mt({...F,args:nt(F.args,Q)})}function jn(S){if(iA(S)||XT(S))return S;if(It(S))return De(S);if(Xe(S))return ke(S);if(qe(S))return Le(S);if(Rn(S))return $n(S);if(wn(S))return Ne(S);if(xn(S))return Ae(S);Dn(!1,"Unexpected type: "+W(S))}function Ae(S){var F;const x=S.toConfig(),U=(F=E[x.name])!==null&&F!==void 0?F:[];return new Oi({...x,fields:()=>({...nt(x.fields,ue=>({...ue,type:fe(ue.type)})),...Ln(U)}),extensionASTNodes:x.extensionASTNodes.concat(U)})}function Ne(S){var F;const x=S.toConfig(),U=(F=E[S.name])!==null&&F!==void 0?F:[];return new Kt({...x,values:{...x.values,...En(U)},extensionASTNodes:x.extensionASTNodes.concat(U)})}function De(S){var F;const x=S.toConfig(),U=(F=E[x.name])!==null&&F!==void 0?F:[];let ue=x.specifiedByURL;for(const le of U){var ve;ue=(ve=gl(le))!==null&&ve!==void 0?ve:ue}return new rt({...x,specifiedByURL:ue,extensionASTNodes:x.extensionASTNodes.concat(U)})}function ke(S){var F;const x=S.toConfig(),U=(F=E[x.name])!==null&&F!==void 0?F:[];return new Gn({...x,interfaces:()=>[...S.getInterfaces().map(ae),...xt(U)],fields:()=>({...nt(x.fields,M),...wt(U)}),extensionASTNodes:x.extensionASTNodes.concat(U)})}function Le(S){var F;const x=S.toConfig(),U=(F=E[x.name])!==null&&F!==void 0?F:[];return new Ni({...x,interfaces:()=>[...S.getInterfaces().map(ae),...xt(U)],fields:()=>({...nt(x.fields,M),...wt(U)}),extensionASTNodes:x.extensionASTNodes.concat(U)})}function $n(S){var F;const x=S.toConfig(),U=(F=E[x.name])!==null&&F!==void 0?F:[];return new Ci({...x,types:()=>[...S.getTypes().map(ae),...At(U)],extensionASTNodes:x.extensionASTNodes.concat(U)})}function M(S){return{...S,type:fe(S.type),args:S.args&&nt(S.args,Q)}}function Q(S){return{...S,type:fe(S.type)}}function Ve(S){const F={};for(const U of S){var x;const ue=(x=U.operationTypes)!==null&&x!==void 0?x:[];for(const ve of ue)F[ve.operation]=it(ve.type)}return F}function it(S){var F;const x=S.name.value,U=(F=hl[x])!==null&&F!==void 0?F:B[x];if(U===void 0)throw new Error(`Unknown type: "${x}".`);return U}function Tt(S){return S.kind===T.LIST_TYPE?new Ke(Tt(S.type)):S.kind===T.NON_NULL_TYPE?new ne(Tt(S.type)):it(S)}function Mr(S){var F;return new mt({name:S.name.value,description:(F=S.description)===null||F===void 0?void 0:F.value,locations:S.locations.map(({value:x})=>x),isRepeatable:S.repeatable,args:Dr(S.arguments),astNode:S})}function wt(S){const F=Object.create(null);for(const ue of S){var x;const ve=(x=ue.fields)!==null&&x!==void 0?x:[];for(const le of ve){var U;F[le.name.value]={type:Tt(le.type),description:(U=le.description)===null||U===void 0?void 0:U.value,args:Dr(le.arguments),deprecationReason:_i(le),astNode:le}}}return F}function Dr(S){const F=S??[],x=Object.create(null);for(const ue of F){var U;const ve=Tt(ue.type);x[ue.name.value]={type:ve,description:(U=ue.description)===null||U===void 0?void 0:U.value,defaultValue:gt(ue.defaultValue,ve),deprecationReason:_i(ue),astNode:ue}}return x}function Ln(S){const F=Object.create(null);for(const ue of S){var x;const ve=(x=ue.fields)!==null&&x!==void 0?x:[];for(const le of ve){var U;const on=Tt(le.type);F[le.name.value]={type:on,description:(U=le.description)===null||U===void 0?void 0:U.value,defaultValue:gt(le.defaultValue,on),deprecationReason:_i(le),astNode:le}}}return F}function En(S){const F=Object.create(null);for(const ue of S){var x;const ve=(x=ue.values)!==null&&x!==void 0?x:[];for(const le of ve){var U;F[le.name.value]={description:(U=le.description)===null||U===void 0?void 0:U.value,deprecationReason:_i(le),astNode:le}}}return F}function xt(S){return S.flatMap(F=>{var x,U;return(x=(U=F.interfaces)===null||U===void 0?void 0:U.map(it))!==null&&x!==void 0?x:[]})}function At(S){return S.flatMap(F=>{var x,U;return(x=(U=F.types)===null||U===void 0?void 0:U.map(it))!==null&&x!==void 0?x:[]})}function sn(S){var F;const x=S.name.value,U=(F=E[x])!==null&&F!==void 0?F:[];switch(S.kind){case T.OBJECT_TYPE_DEFINITION:{var ue;const Fe=[S,...U];return new Gn({name:x,description:(ue=S.description)===null||ue===void 0?void 0:ue.value,interfaces:()=>xt(Fe),fields:()=>wt(Fe),astNode:S,extensionASTNodes:U})}case T.INTERFACE_TYPE_DEFINITION:{var ve;const Fe=[S,...U];return new Ni({name:x,description:(ve=S.description)===null||ve===void 0?void 0:ve.value,interfaces:()=>xt(Fe),fields:()=>wt(Fe),astNode:S,extensionASTNodes:U})}case T.ENUM_TYPE_DEFINITION:{var le;const Fe=[S,...U];return new Kt({name:x,description:(le=S.description)===null||le===void 0?void 0:le.value,values:En(Fe),astNode:S,extensionASTNodes:U})}case T.UNION_TYPE_DEFINITION:{var on;const Fe=[S,...U];return new Ci({name:x,description:(on=S.description)===null||on===void 0?void 0:on.value,types:()=>At(Fe),astNode:S,extensionASTNodes:U})}case T.SCALAR_TYPE_DEFINITION:{var er;return new rt({name:x,description:(er=S.description)===null||er===void 0?void 0:er.value,specifiedByURL:gl(S),astNode:S,extensionASTNodes:U})}case T.INPUT_OBJECT_TYPE_DEFINITION:{var at;const Fe=[S,...U];return new Oi({name:x,description:(at=S.description)===null||at===void 0?void 0:at.value,fields:()=>Ln(Fe),astNode:S,extensionASTNodes:U})}}}}const hl=zt([...xi,...Li],t=>t.name);function _i(t){const a=ec(Yl,t);return a==null?void 0:a.reason}function gl(t){const a=ec(Ql,t);return a==null?void 0:a.url}function kA(t,a){t!=null&&t.kind===T.DOCUMENT||se(!1,"Must provide valid Document AST."),(a==null?void 0:a.assumeValid)!==!0&&(a==null?void 0:a.assumeValidSDL)!==!0&&FA(t);const o=BA({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},t,a);if(o.astNode==null)for(const f of o.types)switch(f.name){case"Query":o.query=f;break;case"Mutation":o.mutation=f;break;case"Subscription":o.subscription=f;break}const u=[...o.directives,...Zt.filter(f=>o.directives.every(g=>g.name!==f.name))];return new Zl({...o,directives:u})}function VA(t,a){const i=CT(t,{noLocation:a==null?void 0:a.noLocation,allowLegacyFragmentVariables:a==null?void 0:a.allowLegacyFragmentVariables});return kA(i,{assumeValidSDL:a==null?void 0:a.assumeValidSDL,assumeValid:a==null?void 0:a.assumeValid})}const ml=`input AbmInputObject {
  messageId: String
}

type Account {
  """Account onboarding for current account"""
  accountOnboarding: AccountOnboarding
  createdAt: Int!
  id: Int!
  updatedAt: Int
  uuid: String
}

type AccountOnboarding {
  id: Int!
  status: AccountOnboardingStatusEnum!
  updatedAt: Int!
  uuid: String!
}

enum AccountOnboardingStatusEnum {
  PENDING
  NAME_POPULATED
  CHANNELS_PICKED
  CHANNELS_ONBOARDED
  SKIPPED
}

union ActionTypeUnion = WorkflowBotAssignConversationAction | WorkflowBotTagConversationAction | WorkflowBotUpdateConversationStateAction

"""A message with an animated GIF or a short video file"""
type AnimationMessage implements Message {
  attachments: [Attachment!]!
  caption: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type App {
  account: Account!

  """API webhook of the App"""
  apiWebhooks(
    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): WebhookSubscriptionConnection!

  """Find an AppUser for the current App"""
  appUser(id: Int!): AppUser

  """List AppUsers for the current App"""
  appUsers(
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): AppUserConnection!
  avatarUrl: Url

  """List BotUser for the current App"""
  botUsers(
    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): BotUserConnection!

  """Find a Channel for the current app"""
  channel(id: Int!): Channel!

  """Find a ChannelUser for the current App"""
  channelUser(id: Int!): ChannelUser

  """List all channel users data attributes for current app"""
  channelUserDataAttributes(
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ChannelUserDataAttributeConnection!

  """List all channels users for current App"""
  channelUsers(
    orderBy: String
    nameOrPhone: String
    hideBlockedUsers: Boolean
    search: CampaignQueryInputObject

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ChannelUserConnection!

  """Channels of the App"""
  channels(
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ChannelConnection!

  """Find a Conversation for the current App"""
  conversation(id: Int!): Conversation

  """List Conversations for the current App"""
  conversations(
    orderBy: String
    channelId: Int
    sourceId: String
    assigneeId: Int
    state: ConversationStateEnum
    states: [ConversationStateEnum!]
    channelActive: Boolean
    snoozed: Boolean
    search: InboxViewQueryInputObject

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ConversationConnection!
  createdAt: Int!
  displayName: String
  id: Int!

  """Find a Message for the current App"""
  message(id: Int!): Message
  optimisedAvatarUrl: Url

  """List all saved replies for current app"""
  savedReplies(
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): SavedReplyConnection!

  """List all saved replies nested in their folders for current app"""
  savedRepliesTree: [SavedReplyLeafUnion!]!

  """Find a Tag for the current App"""
  tag(id: Int!): Tag

  """List all tags for current app"""
  tags(
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): TagConnection!
  updatedAt: Int
  uuid: String!
}

type AppUser implements User {
  account: Account!
  app: App!
  avatarUrl: String
  createdAt: Int!
  displayName: String
  email: String!
  fullName: String
  id: Int!

  """Find a Mention for the current App User"""
  mention(id: Int!): Mention

  """List current user mentions"""
  mentions(
    archived: Boolean

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): MentionConnection!

  """Current user notification preferences"""
  notificationPreferences: [AppUserNotificationPreference!]!
  optimisedAvatarUrl: String
  role: AppUserRoleEnum! @deprecated(reason: "use user_role instead")
  status: AppUserStatusEnum!
  updatedAt: Int
  userRole: Role!
  uuid: String!
  visibleChannels: [Channel!]!
}

"""The connection type for AppUser."""
type AppUserConnection {
  """A list of edges."""
  edges: [AppUserEdge!]!

  """A list of nodes."""
  nodes: [AppUser!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type AppUserEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: AppUser!
}

enum AppUserNotificationMethodEnum {
  DESKTOP
  EMAIL
  SLACK
}

type AppUserNotificationPreference {
  accountId: Int!
  appId: Int!
  appUserId: Int!
  createdAt: Int!
  id: Int!
  notificationMethod: AppUserNotificationMethodEnum!
  notificationTypes: [AppUserNotificationTypeEnum!]!
  updatedAt: Int
  uuid: String!
}

enum AppUserNotificationTypeEnum {
  MENTION_CREATED
  CONVERSATION_CREATED
  CONVERSATION_ASSIGNED
  CONVERSATION_OPENED
  CONVERSATION_WAITING
  CONVERSATION_BLOCKED
  CONVERSATION_CLOSED
  CONVERSATION_NEW_MESSAGE
  CONVERSATION_ABANDONED_NEW_MESSAGE
  CONVERSATION_UNASSIGNED_NEW_MESSAGE
}

enum AppUserRoleEnum {
  """User has limited access"""
  MEMBER

  """User has full access to the organization"""
  OWNER
}

enum AppUserRolePermissionEnum {
  """View unassigned conversations"""
  READ_UNASSIGNED_CONVERSATIONS

  """View team members assigned conversations"""
  READ_OTHERS_ASSIGNED_CONVERSATIONS

  """View workspace settings"""
  READ_WORKSPACE_SETTINGS

  """Manage Workspace settings"""
  WRITE_WORKSPACE_SETTINGS

  """View channels"""
  READ_CHANNELS

  """Manage channels"""
  WRITE_CHANNELS

  """View users"""
  READ_USERS

  """Manage users"""
  WRITE_USERS

  """View roles"""
  READ_ROLES_AND_PERMISSIONS

  """Manage roles"""
  WRITE_ROLES_AND_PERMISSIONS

  """View tags"""
  READ_TAGS

  """Manage tags"""
  WRITE_TAGS

  """View data attributes"""
  READ_DATA_ATTRIBUTES

  """Manage data attributes"""
  WRITE_DATA_ATTRIBUTES

  """View auto replies"""
  READ_AUTO_REPLIES

  """Manage auto replies"""
  WRITE_AUTO_REPLIES

  """View Inbox rules"""
  READ_INBOX_RULES

  """Manage Inbox rules"""
  WRITE_INBOX_RULES

  """View saved replies"""
  READ_SAVED_REPLIES

  """Manage saved replies"""
  WRITE_SAVED_REPLIES

  """View Integrations"""
  READ_INTEGRATIONS

  """Manage Integrations"""
  WRITE_INTEGRATIONS

  """Manage API management"""
  WRITE_API_MANAGEMENT

  """Manage billing"""
  WRITE_BILLING

  """View bots"""
  READ_BOTS

  """Manage bots"""
  WRITE_BOTS

  """View campaigns"""
  READ_CAMPAIGNS

  """Manage campaigns"""
  WRITE_CAMPAIGNS

  """View reporting"""
  READ_REPORTING

  """Manage reporting"""
  WRITE_REPORTING

  """View contacts"""
  READ_CONTACTS

  """Manage contacts"""
  WRITE_CONTACTS
}

enum AppUserStatusEnum {
  """User is pending invitaiton accept"""
  PENDING_INVITE_ACCEPT

  """User is pending email confirm"""
  PENDING_EMAIL_CONFIRM

  """User is suspended"""
  SUSPENDED

  """User is active"""
  ACTIVE
}

"""Has information an assignee change for the conversation"""
type AssignmentActionMessage implements Message {
  assignee: AppUser
  assigner: WorkspaceUserUnion!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type Attachment {
  aspectRatio: String
  duration: Int
  filename: String
  filesize: Int
  height: Int
  id: String
  mimeType: String!
  type: AttachmentTypeEnum!
  url: String!
  width: Int
}

"""The connection type for Attachment."""
type AttachmentConnection {
  """A list of edges."""
  edges: [AttachmentEdge!]!

  """A list of nodes."""
  nodes: [Attachment!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type AttachmentEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Attachment!
}

"""Autogenerated input type of AttachmentImageUploadFromUrl"""
input AttachmentImageUploadFromUrlInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  filename: String
  url: String!
}

"""Autogenerated return type of AttachmentImageUploadFromUrl"""
type AttachmentImageUploadFromUrlPayload {
  attachment: Attachment!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
}

enum AttachmentTypeEnum {
  IMAGE
  VIDEO
  AUDIO
  DOCUMENT
}

"""Autogenerated input type of AttachmentUpload"""
input AttachmentUploadInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  fileInput: FileInputObject!
}

"""Autogenerated return type of AttachmentUpload"""
type AttachmentUploadPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  uploadInformation: UploadInformation!
}

input AttributeInputObject {
  type: DataAttributeTypeEnum!
  name: String!
  description: String
}

"""A message with an audio file"""
type AudioMessage implements Message {
  attachments: [Attachment!]!
  caption: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""
Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string.
"""
scalar BigInt

type BotUser implements User {
  account: Account!
  app: App!
  createdAt: Int!
  displayName: String
  id: Int!
  updatedAt: Int
  uuid: String!
  workflow: WorkflowBot
}

"""The connection type for BotUser."""
type BotUserConnection {
  """A list of edges."""
  edges: [BotUserEdge!]!

  """A list of nodes."""
  nodes: [BotUser!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type BotUserEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: BotUser!
}

type Campaign {
  attemptedDeliveryCount: Int!
  audienceQuery: CampaignQuery
  channel: Channel
  createdAt: Int!
  createdBy: AppUser!
  deliveredCount: Int!
  failedCount: Int!
  id: Int!
  launchedAt: Int

  """List all campaign memberships for current campaign"""
  memberships(
    states: [CampaignMembershipStateEnum!]
    orderBy: String

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): CampaignMembershipConnection!
  name: String!
  readCount: Int!
  sendingCount: Int!
  sentCount: Int!
  state: CampaignsStateEnum!
  template: CampaignTemplate
  totalCount: Int!
}

"""Input object that represents a campaign filter input"""
input CampaignFilterInputObject {
  """Filter for a boolean data attribute attached to a channel user"""
  channelUserBoolDataAttribute: ChannelUserFilterableDataAttributeBoolInputObject

  """Filter for a date data attribute attached to a channel user"""
  channelUserDateDataAttribute: ChannelUserFilterableDataAttributeDateInputObject

  """Filter for a text data attribute attached to a channel user"""
  channelUserTextDataAttribute: ChannelUserFilterableDataAttributeTextInputObject

  """Filter for a number data attribute attached to a channel user"""
  channelUserNumberDataAttribute: ChannelUserFilterableDataAttributeNumberInputObject

  """Filter for a decimal data attribute attached to a channel user"""
  channelUserDecimalDataAttribute: ChannelUserFilterableDataAttributeDecimalInputObject

  """Filter for an email attached to a channel user"""
  channelUserEmail: ChannelUserFilterableEmailInputObject

  """Filter for a phone attached to a channel user"""
  channelUserPhone: ChannelUserFilterablePhoneInputObject

  """Filter for tag id attached to a channel user"""
  tagId: ChannelUserFilterableTagIdInputObject

  """Filter for when a channel user was created"""
  createdAt: ChannelUserFilterableCreatedAtInputObject

  """Filter for whether a channel user is opted out of marketing"""
  channelUserOptOut: ChannelUserFilterableOptOutInputObject
}

type CampaignMembership {
  channelUser: ChannelUser!
  deliveredAt: Int
  error: CampaignMembershipError
  failedAt: Int
  id: Int!
  readAt: Int
  receivedAt: Int
  sentAt: Int
  state: CampaignMembershipStateEnum!
}

"""The connection type for CampaignMembership."""
type CampaignMembershipConnection {
  """A list of edges."""
  edges: [CampaignMembershipEdge!]!

  """A list of nodes."""
  nodes: [CampaignMembership!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type CampaignMembershipEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: CampaignMembership!
}

type CampaignMembershipError {
  message: String!
  type: CampaignMembershipErrorTypeEnum!
}

"""The type of error that occurred"""
enum CampaignMembershipErrorTypeEnum {
  FAILED
  INVALID_USER
  BLOCKED_OR_SPAM
}

"""The current status of a campaign membership"""
enum CampaignMembershipStateEnum {
  FAILED
  INVALID_USER
  BLOCKED_OR_SPAM
  DELIVERED
  READ
  SENDING
  SENT
  ATTEMPTED_DELIVERY
}

type CampaignMessageVariable {
  attachment: Attachment
  channelUserDataAttributeId: Int
  staticValue: String!
  templateComponentType: MessageTemplateComponentTypeEnum!
  templatePosition: Int!
  variableType: MessageVariableTypeEnum!
}

type CampaignQuery {
  filters: [CampaignsFilterTypeUnion!]!
  operator: FilteringBooleanOperatorEnum!
}

"""Input object that represents an Inbox View query"""
input CampaignQueryInputObject {
  """Object representing filters of a campaign"""
  filters: [CampaignFilterInputObject!]!

  """Boolean operator applied on filters"""
  operator: FilteringBooleanOperatorEnum!
}

type CampaignTemplate {
  messageTemplate: MessageTemplate!
  variables: [CampaignMessageVariable!]!
}

union CampaignsFilterTypeUnion = ChannelUserFilterableCreatedAtType | ChannelUserFilterableDataAttributeBoolType | ChannelUserFilterableDataAttributeDateType | ChannelUserFilterableDataAttributeDecimalMultipleType | ChannelUserFilterableDataAttributeDecimalSingleType | ChannelUserFilterableDataAttributeNumberMultipleType | ChannelUserFilterableDataAttributeNumberSingleType | ChannelUserFilterableDataAttributeTextMultipleType | ChannelUserFilterableDataAttributeTextSingleType | ChannelUserFilterableEmailMultipleType | ChannelUserFilterableEmailSingleType | ChannelUserFilterableOptOutType | ChannelUserFilterablePhoneMultipleType | ChannelUserFilterablePhoneSingleType | ChannelUserFilterableTagMultipleType | ChannelUserFilterableTagSingleType

enum CampaignsStateEnum {
  DRAFT
  SENDING
  SENT
  FAILED
}

type Channel {
  account: Account!
  active: Boolean!
  app: App!
  channelType: ChannelTypeEnum!
  connectedBy: AppUser!
  conversation(id: Int!): Conversation
  conversations(
    orderBy: String
    state: ConversationStateEnum

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ConversationConnection!
  createdAt: Int!
  displayName: String!
  id: Int!
  isSandboxChannel: Boolean!
  isSyncingTemplates: Boolean!

  """Find a MessageTemplate for the current app"""
  messageTemplate(id: Int!): MessageTemplate!
  messageTemplates(
    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): MessageTemplateConnection!
  newMessageLink: String
  updatedAt: Int!
  uuid: String!
}

"""The connection type for Channel."""
type ChannelConnection {
  """A list of edges."""
  edges: [ChannelEdge!]!

  """A list of nodes."""
  nodes: [Channel!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type ChannelEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Channel!
}

enum ChannelTypeEnum {
  BALOOZA
  TELEGRAM
  LINE
  VIBER
  TWILIO_SMS
  TWILIO_WABA
  MESSAGEBIRD_WABA
  TELNYX_WABA
  DIALOG_WABA
  CLOUD_WABA
  CM_WABA
  FACEBOOK
  INSTAGRAM
  TWITTER
  GBM
  VBM
  VKONTAKTE
  ABM
  EMAIL
  SANDBOX_WABA
}

type ChannelUser implements User {
  account: Account!
  app: App!
  avatarUrl: String
  blocked: Boolean!
  channels: [Channel!]!
  conversations(
    channelId: Int
    state: ConversationStateEnum

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): ConversationConnection!
  createdAt: Int!
  dataAttributes: [DataAttribute!]!
  displayName: String
  email: String @deprecated(reason: "find EMAIL identifier in ChannelUser.identifiers field instead")
  firstName: String
  hubspotContacts: [HubspotContact!]!
  id: Int!
  identifiers: [ChannelUserSourceIdentifier!]!
  lastName: String
  name: String
  notes: [ChannelUserNote!]
  optimisedAvatarUrl: String
  phone: Phone @deprecated(reason: "find PHONE identifier in ChannelUser.identifiers field instead")
  tags(
    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): TagConnection!
  updatedAt: Int
  uuid: String!
}

"""The connection type for ChannelUser."""
type ChannelUserConnection {
  """A list of edges."""
  edges: [ChannelUserEdge!]!

  """A list of nodes."""
  nodes: [ChannelUser!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """Total channel users count matching current filters"""
  totalCount: Int!
}

"""Autogenerated input type of ChannelUserCreate"""
input ChannelUserCreateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  name: String!
  phone: String
  email: String
}

type ChannelUserDataAttribute {
  accountId: Int!
  appId: Int!
  archived: Boolean!
  createdAt: Int!
  description: String
  editable: Boolean!
  id: Int!
  identifier: String!
  name: String!
  type: DataAttributeTypeEnum!
  updatedAt: Int
  uuid: String!
}

"""Autogenerated input type of ChannelUserDataAttributeArchive"""
input ChannelUserDataAttributeArchiveInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  id: Int!
}

"""Autogenerated input type of ChannelUserDataAttributeBatchCreate"""
input ChannelUserDataAttributeBatchCreateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  attributes: [AttributeInputObject!]!
}

"""The connection type for ChannelUserDataAttribute."""
type ChannelUserDataAttributeConnection {
  """A list of edges."""
  edges: [ChannelUserDataAttributeEdge!]!

  """A list of nodes."""
  nodes: [ChannelUserDataAttribute!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""Autogenerated input type of ChannelUserDataAttributeCreate"""
input ChannelUserDataAttributeCreateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  type: DataAttributeTypeEnum!
  name: String!
  description: String
}

"""An edge in a connection."""
type ChannelUserDataAttributeEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: ChannelUserDataAttribute!
}

"""An edge in a connection."""
type ChannelUserEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: ChannelUser!
}

"""Filter for created at of a channel user"""
input ChannelUserFilterableCreatedAtInputObject {
  before: Int
  after: Int
}

type ChannelUserFilterableCreatedAtType {
  operator: FilteringDateOperatorEnum!
  value: Int!
}

"""Filter for a Boolean data attribute attached to a channel user"""
input ChannelUserFilterableDataAttributeBoolInputObject {
  is: Boolean
  isNot: Boolean
  dataAttributeId: Int!
}

type ChannelUserFilterableDataAttributeBoolType {
  dataAttributeId: Int!
  operator: FilteringExactEqualityOperatorEnum!
  value: Boolean!
}

"""Filter for a Date data attribute attached to a channel user"""
input ChannelUserFilterableDataAttributeDateInputObject {
  before: Int
  after: Int
  dataAttributeId: Int!
}

type ChannelUserFilterableDataAttributeDateType {
  dataAttributeId: Int!
  operator: FilteringDateOperatorEnum!
  value: Int!
}

"""Filter for a Decimal data attribute attached to a channel user"""
input ChannelUserFilterableDataAttributeDecimalInputObject {
  is: Float
  isNot: Float
  in: [Float!]
  notIn: [Float!]
  dataAttributeId: Int!
}

type ChannelUserFilterableDataAttributeDecimalMultipleType {
  dataAttributeId: Int!
  operator: MultipleConditionOperatorEnum!
  value: [Float!]!
}

type ChannelUserFilterableDataAttributeDecimalSingleType {
  dataAttributeId: Int!
  operator: FilteringExactEqualityOperatorEnum!
  value: Float!
}

"""Filter for a Number data attribute attached to a channel user"""
input ChannelUserFilterableDataAttributeNumberInputObject {
  is: Int
  isNot: Int
  in: [Int!]
  notIn: [Int!]
  dataAttributeId: Int!
}

type ChannelUserFilterableDataAttributeNumberMultipleType {
  dataAttributeId: Int!
  operator: MultipleConditionOperatorEnum!
  value: [Int!]!
}

type ChannelUserFilterableDataAttributeNumberSingleType {
  dataAttributeId: Int!
  operator: FilteringExactEqualityOperatorEnum!
  value: Int!
}

"""Filter for a Text data attribute attached to a channel user"""
input ChannelUserFilterableDataAttributeTextInputObject {
  is: String
  isNot: String
  contains: String
  notContains: String
  in: [String!]
  notIn: [String!]
  dataAttributeId: Int!
}

type ChannelUserFilterableDataAttributeTextMultipleType {
  dataAttributeId: Int!
  operator: MultipleConditionOperatorEnum!
  value: [String!]!
}

type ChannelUserFilterableDataAttributeTextSingleType {
  dataAttributeId: Int!
  operator: FilteringEqualityOperatorEnum!
  value: String!
}

"""Filter for an email attached to a channel user"""
input ChannelUserFilterableEmailInputObject {
  is: String
  isNot: String
  in: [String!]
  notIn: [String!]
  contains: String
  notContains: String
}

type ChannelUserFilterableEmailMultipleType {
  operator: MultipleConditionOperatorEnum!
  value: [String!]!
}

type ChannelUserFilterableEmailSingleType {
  operator: FilteringEqualityOperatorEnum!
  value: String!
}

"""Filter for whether a channel user is opted out of marketing"""
input ChannelUserFilterableOptOutInputObject {
  is: Boolean
  isNot: Boolean
}

type ChannelUserFilterableOptOutType {
  operator: FilteringExactEqualityOperatorEnum!
  value: Boolean!
}

"""Filter for a phone attached to a channel user"""
input ChannelUserFilterablePhoneInputObject {
  is: Phone
  isNot: Phone
  contains: String
  notContains: String
  in: [Phone!]
  notIn: [Phone!]
  exists: Boolean
}

type ChannelUserFilterablePhoneMultipleType {
  operator: MultipleConditionOperatorEnum!
  value: [String!]!
}

type ChannelUserFilterablePhoneSingleType {
  operator: FilteringEqualityOperatorEnum!
  value: String!
}

"""Filter for tag id attached to a channel user"""
input ChannelUserFilterableTagIdInputObject {
  is: Int
  isNot: Int
  in: [Int!]
  notIn: [Int!]
}

type ChannelUserFilterableTagMultipleType {
  operator: MultipleConditionOperatorEnum!
  rawValue: [Int!]!
  value: [Tag!]!
}

type ChannelUserFilterableTagSingleType {
  operator: FilteringExactEqualityOperatorEnum!
  rawValue: Int!
  value: Tag!
}

enum ChannelUserIdentifierSourceEnum {
  PHONE
  EMAIL
  FACEBOOK_ID
  INSTAGRAM_ID
  INSTAGRAM_USERNAME
  TWITTER_ID
  TWITTER_USERNAME
  TELEGRAM_ID
  GBM_ID
  VIBER_ID
  LINE_ID
  BALOOZA_ID
  ABM_ID
  VKONTAKTE_ID
}

"""Autogenerated input type of ChannelUserIdentifierUpdate"""
input ChannelUserIdentifierUpdateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  channelUserId: Int!
  sourceId: String!
  category: ChannelUserIdentifierSourceEnum!
}

type ChannelUserNote {
  accountId: Int!
  appId: Int!
  body: MdString!
  channelUserId: Int!
  createdAt: Int!
  id: Int!
  updatedAt: Int
  uuid: String!
}

type ChannelUserSourceIdentifier {
  category: ChannelUserIdentifierSourceEnum!
  sourceId: String!
}

"""Autogenerated input type of ChannelUserUpdate"""
input ChannelUserUpdateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  channelUserId: Int!
  name: String
  email: String
}

input ComponentButtonInputObject {
  type: MessageTemplateComponentButtonTypeEnum!
  text: String!
  url: String
  phoneNumber: String
}

input ComponentInputObject {
  type: MessageTemplateComponentTypeEnum!
  format: MessageTemplateComponentFormatEnum
  text: String
  exampleVariables: [String!]
  exampleFile: String
  buttons: [ComponentButtonInputObject!]
}

union ConditionTypeUnion = ConditionableMessagesDirectionMultipleType | ConditionableMessagesDirectionSingleType | ConditionableMessagesKeywordMultipleType

type ConditionableMessagesDirectionMultipleType {
  operator: FilteringInclusionOperatorEnum!
  value: [MessageDirectionEnum!]!
}

type ConditionableMessagesDirectionSingleType {
  operator: FilteringExactEqualityOperatorEnum!
  value: MessageDirectionEnum!
}

type ConditionableMessagesKeywordMultipleType {
  operator: RegexpOperatorEnum!
  value: [String!]!
}

type ContactEntry {
  birthdate: String
  company: String
  emails: [String!]
  ims: [ContactIm!]
  name: String!
  phones: [String!]
}

type ContactIm {
  identifier: String!
  service: MessageContactIMTypeEnum!
}

"""A message containing contacts shared by the author of the message"""
type ContactMessage implements Message {
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  entries: [ContactEntry!]!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type Conversation {
  account: Account!
  app: App!
  assignee: AppUser
  attachments(
    type: AttachmentTypeEnum

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): AttachmentConnection!
  channel: Channel!
  channelType: ChannelTypeEnum!
  createdAt: Int!
  id: Int!
  lastClosedAt: Int
  lastInboundMessageAt: Int
  lastInteractionAt: Int!
  lastMessage: Message
  lastOpenedAt: Int
  lastReadByAppUserAt: Int
  messageWindowExpired: Boolean @deprecated(reason: "use messageWindowExpiryConditions instead")
  messageWindowExpiresAt: Int @deprecated(reason: "use messageWindowExpiryConditions instead")
  messageWindowExpiryConditions: [MessageWindowExpiryCondition!]!

  """Integrations of the App"""
  messages(
    primaryKey: String
    includeStartOrEndCursor: Boolean

    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): MessageConnection!
  participants: [ConversationParticipant!]!
  pinnedMessages: [PinnedMessage!]!
  snoozedUntil: Int
  state: ConversationStateEnum!
  tags(
    """Returns the elements in the list that come after the specified cursor."""
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """Returns the first _n_ elements from the list."""
    first: Int

    """Returns the last _n_ elements from the list."""
    last: Int
  ): TagConnection!
  terminatedAt: Int
  terminatesAt: Int
  updatedAt: Int
  uuid: String!
}

"""Autogenerated input type of ConversationAssignment"""
input ConversationAssignmentInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  assigneeId: Int
}

"""Autogenerated return type of ConversationAssignment"""
type ConversationAssignmentPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of ConversationClose"""
input ConversationCloseInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
}

"""Autogenerated return type of ConversationClose"""
type ConversationClosePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""The connection type for Conversation."""
type ConversationConnection {
  """Closed conversations count"""
  closedCount: Int!

  """A list of edges."""
  edges: [ConversationEdge!]!

  """A list of nodes."""
  nodes: [Conversation!]!

  """Open conversations count"""
  openCount: Int!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """Snoozed conversations count"""
  snoozedCount: Int!

  """Total conversations count matching current filters"""
  totalCount: Int!
}

"""An edge in a connection."""
type ConversationEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Conversation!
}

"""Autogenerated input type of ConversationOpen"""
input ConversationOpenInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
}

"""Autogenerated return type of ConversationOpen"""
type ConversationOpenPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

type ConversationParticipant {
  accountId: Int!
  createdAt: Int!
  id: Int!
  updatedAt: Int
  user: User!
  uuid: String!
}

"""Autogenerated input type of ConversationSetState"""
input ConversationSetStateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  state: ConversationStateEnum!
}

"""Autogenerated return type of ConversationSetState"""
type ConversationSetStatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of ConversationSnooze"""
input ConversationSnoozeInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  snoozedUntil: Int!
}

"""Autogenerated return type of ConversationSnooze"""
type ConversationSnoozePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

enum ConversationStateEnum {
  UNANSWERED
  OPENED
  WAITING
  BLOCKED
  CLOSED
  SNOOZED
  TERMINATED
  CAMPAIGN_INITIATED
  WORKFLOW_BOT_CONTROLLED
}

"""Autogenerated input type of ConversationTagByTagId"""
input ConversationTagByTagIdInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  conversationId: Int!
  tagId: Int!
}

"""Autogenerated input type of ConversationTag"""
input ConversationTagInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  conversationId: Int!
  tagName: String!
  tagColor: String!
}

"""Autogenerated input type of ConversationUnsnooze"""
input ConversationUnsnoozeInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
}

"""Autogenerated return type of ConversationUnsnooze"""
type ConversationUnsnoozePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of ConversationUntag"""
input ConversationUntagInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  conversationId: Int!
  tagId: Int!
}

interface DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  id: String
  name: String!
  userId: Int!
}

type DataAttributeBoolType implements DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  boolValue: Boolean!
  id: String
  name: String!
  userId: Int!
}

"""Autogenerated input type of DataAttributeBoolUpdate"""
input DataAttributeBoolUpdateInput {
  channelUserId: Int!
  dataAttributeId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  value: Boolean!
}

type DataAttributeDateType implements DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  dateValue: Int!
  id: String
  name: String!
  userId: Int!
}

"""Autogenerated input type of DataAttributeDateUpdate"""
input DataAttributeDateUpdateInput {
  channelUserId: Int!
  dataAttributeId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  value: Int!
}

type DataAttributeDecimalType implements DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  decimalValue: Float!
  id: String
  name: String!
  userId: Int!
}

"""Autogenerated input type of DataAttributeDecimalUpdate"""
input DataAttributeDecimalUpdateInput {
  channelUserId: Int!
  dataAttributeId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  value: Float!
}

type DataAttributeNumberType implements DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  id: String
  name: String!
  numberValue: Int!
  userId: Int!
}

"""Autogenerated input type of DataAttributeNumberUpdate"""
input DataAttributeNumberUpdateInput {
  channelUserId: Int!
  dataAttributeId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  value: Int!
}

type DataAttributeTextType implements DataAttribute {
  attrId: Int!
  attrType: DataAttributeTypeEnum!
  id: String
  name: String!
  textValue: String!
  userId: Int!
}

"""Autogenerated input type of DataAttributeTextUpdate"""
input DataAttributeTextUpdateInput {
  channelUserId: Int!
  dataAttributeId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  value: String!
}

enum DataAttributeTypeEnum {
  TEXT
  NUMBER
  DECIMAL
  BOOL
  DATE
}

"""A message that was deleted"""
type DeletedMessage implements Message {
  body: String!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""
A message containing document files (Neither image nor audio nor video files)
"""
type DocumentMessage implements Message {
  attachments: [Attachment!]!
  caption: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type EmailMessageMeta {
  bcc: [String!]!
  cc: [String!]!
  date: Int!
  from: String!
  hasReplies: Boolean!
  repliesHtml: String
  repliesPlain: String
  subject: String!
  to: [String!]!
}

input FacebookInputObject {
  messageTag: MessageFacebookTagEnum!
}

type Failure {
  code: String
  failureType: String
  reason: String
  referenceUrl: String
  retriable: Boolean
  retriableAfter: Int
}

"""File information required to prepare a direct upload"""
input FileInputObject {
  """Original file name"""
  filename: String!

  """File size (bytes)"""
  byteSize: Int!

  """MD5 file checksum as base64"""
  checksum: String!

  """File content type"""
  contentType: String!
}

enum FilteringBooleanOperatorEnum {
  AND
  OR
}

enum FilteringDateOperatorEnum {
  BEFORE
  AFTER
}

enum FilteringEqualityOperatorEnum {
  IS
  IS_NOT
  CONTAINS
  NOT_CONTAINS
}

enum FilteringExactEqualityOperatorEnum {
  IS
  IS_NOT
}

enum FilteringInclusionOperatorEnum {
  IN
  NOT_IN
  MATCH
}

type Header {
  headerType: InteractiveMessageHeaderTypeEnum!
  text: String!
}

type HubspotContact {
  company: String
  createdAt: Int!
  email: String
  id: String!
  linked: Boolean
  name: String
  phone: String
}

"""A message with a single or multiple image(s)"""
type ImageMessage implements Message {
  attachments: [Attachment!]!
  caption: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

enum InboxViewBooleanOperatorEnum {
  AND
  OR
}

"""Input object that represents an Inbox View filter input"""
input InboxViewFilterInputObject {
  """Filter for the assignee of the conversation"""
  assigneeId: InboxViewFilterableAssigneeIdInputObject

  """Filter for the channel of the conversations"""
  channelId: InboxViewFilterableChannelIdInputObject

  """Filter for the channel type of the conversations"""
  channelType: InboxViewFilterableChannelTypeInputObject

  """Filter for the created at property of the conversation"""
  createdAt: InboxViewFilterableCreatedAtInputObject

  """Filter for the last message at property of conversations"""
  lastMessageAt: InboxViewFilterableLastMessageAtInputObject

  """Filter for the snoozed until property of the conversation"""
  snoozedUntil: InboxViewFilterableSnoozedUntilInputObject

  """Filter for the state of the conversation"""
  conversationState: InboxViewFilterableConversationStateInputObject

  """Filter for the tags of the conversation"""
  tagId: InboxViewFilterableTagIdInputObject

  """Filter for the name of the participants of the conversation"""
  participant: InboxViewFilterableParticipantInputObject
}

"""Filter for assignee id of conversation"""
input InboxViewFilterableAssigneeIdInputObject {
  is: Int
  isNot: Int
  in: [Int!]
  notIn: [Int!]
}

"""Filter for channel id of conversation"""
input InboxViewFilterableChannelIdInputObject {
  is: Int
  isNot: Int
  in: [Int!]
  notIn: [Int!]
}

"""Filter for channel type of conversation"""
input InboxViewFilterableChannelTypeInputObject {
  is: ChannelTypeEnum
  isNot: ChannelTypeEnum
  in: [ChannelTypeEnum!]
  notIn: [ChannelTypeEnum!]
}

"""Filter for state of conversation"""
input InboxViewFilterableConversationStateInputObject {
  is: ConversationStateEnum
  isNot: ConversationStateEnum
  in: [ConversationStateEnum!]
  notIn: [ConversationStateEnum!]
}

"""Filter for created at of conversation"""
input InboxViewFilterableCreatedAtInputObject {
  before: Int
  after: Int
}

"""Filter for last message at of conversation"""
input InboxViewFilterableLastMessageAtInputObject {
  before: Int
  after: Int
}

"""Filter for tag id of conversation"""
input InboxViewFilterableParticipantInputObject {
  match: String
}

"""Filter for snoozed until of conversation"""
input InboxViewFilterableSnoozedUntilInputObject {
  before: Int
  after: Int
}

"""Filter for tag id of conversation"""
input InboxViewFilterableTagIdInputObject {
  is: Int
  isNot: Int
  in: [Int!]
  notIn: [Int!]
}

"""Input object that represents an Inbox View query"""
input InboxViewQueryInputObject {
  """Object representing filters of view"""
  filters: [InboxViewFilterInputObject!]!

  """Boolean operator applied on filters"""
  operator: InboxViewBooleanOperatorEnum!
}

input InstagramInputObject {
  messageTag: MessageInstagramTagEnum!
}

enum InteractiveMessageHeaderTypeEnum {
  TEXT
  IMAGE
  VIDEO
  DOCUMENT
}

type List {
  button: String!
  sections: [ListSection!]!
}

"""A message containing a list of clickable buttons for the user"""
type ListMessage implements Message {
  body: MdString!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  footer: String
  forwarded: Boolean
  header: Header
  id: Int!
  idCursor: String!
  idempotencyKey: String
  list: List!
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type ListSection {
  rows: [ListSectionRow!]!
  title: String
}

type ListSectionRow {
  description: String
  id: String!
  interactedWith: Boolean!
  title: String!
}

"""A message containing a location information"""
type LocationMessage implements Message {
  address: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  latitude: String!
  longitude: String!
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  name: String
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  url: String
  user: User!
  uuid: String!
}

"""A GFM (GitHub Flavored Markdown) formatted string"""
scalar MdString

type Mention {
  conversation: Conversation!
  createdAt: Int!
  id: Int!
  isArchived: Boolean!
  isRead: Boolean!
  mentioned: AppUser!
  mentionedBy: AppUser!
  message: Message!
  updatedAt: Int!
  uuid: String!
}

"""The connection type for Mention."""
type MentionConnection {
  """Unread mentions count"""
  archivedCount: Int!

  """A list of edges."""
  edges: [MentionEdge!]!

  """A list of nodes."""
  nodes: [Mention!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """All mentions count"""
  totalCount: Int!

  """Unread mentions count"""
  unarchivedCount: Int!

  """Unread mentions count"""
  unreadCount: Int!
}

"""An edge in a connection."""
type MentionEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Mention!
}

interface Message {
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

enum MessageCategoryEnum {
  USER
  SYSTEM
  EVENT
}

"""The connection type for Message."""
type MessageConnection {
  """A list of edges."""
  edges: [MessageEdge!]!

  """A list of nodes."""
  nodes: [Message!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

enum MessageContactIMTypeEnum {
  WHATSAPP
  INSTAGRAM
  MESSENGER
  TWITTER
  LINKEDIN
  VIBER
  WECHAT
  LINE
  TELEGRAM
  SIGNAL
  VKONTAKTE
  OTHER
}

"""Autogenerated input type of MessageDelete"""
input MessageDeleteInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageId: Int!
}

"""Autogenerated return type of MessageDelete"""
type MessageDeletePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  success: Boolean!
}

enum MessageDirectionEnum {
  INBOUND
  OUTBOUND
  NO_DIRECTION
}

"""An edge in a connection."""
type MessageEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Message
}

enum MessageFacebookTagEnum {
  ConfirmedEventUpdate
  PostPurchaseUpdate
  AccountUpdate
  HumanAgent
}

"""Autogenerated input type of MessageGifCreate"""
input MessageGifCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString
  gifUrl: String!
  title: String!
  width: Int!
  height: Int!
  mp4Url: String!
  replyToMessageId: String
}

"""Autogenerated return type of MessageGifCreate"""
type MessageGifCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

enum MessageInstagramTagEnum {
  HumanAgent
}

"""Autogenerated input type of MessageMediaCreate"""
input MessageMediaCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString
  blobOrAttachmentId: String!
  replyToMessageId: String
}

"""Autogenerated return type of MessageMediaCreate"""
type MessageMediaCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of MessageNoteCreate"""
input MessageNoteCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString!
  blobOrAttachmentId: String
}

"""Autogenerated return type of MessageNoteCreate"""
type MessageNoteCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of MessageProactiveTemplateCreate"""
input MessageProactiveTemplateCreateInput {
  channelId: Int!
  receiver: Phone!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageTemplateId: Int!
  components: [MessageTemplateCreationComponentInputObject!]

  """
  The state the conversation should be in after the message is sent. This is useful for setting the conversation state to 'CLOSED' after sending a proactive message. Takes precedence over other conversation states.
  """
  conversationState: ConversationStateEnum
}

"""Autogenerated return type of MessageProactiveTemplateCreate"""
type MessageProactiveTemplateCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of MessageProactiveTextCreate"""
input MessageProactiveTextCreateInput {
  channelId: Int!
  receiver: Phone!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString!
}

"""Autogenerated return type of MessageProactiveTextCreate"""
type MessageProactiveTextCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

enum MessageQuickReplyTypeEnum {
  TEXT
  URL
  PHONE
  EMAIL
  DATETIME
  CAMERA
  LOCATION
}

"""Autogenerated input type of MessageRetrySend"""
input MessageRetrySendInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageId: Int!
}

"""Autogenerated return type of MessageRetrySend"""
type MessageRetrySendPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

"""Autogenerated input type of MessageRichCreate"""
input MessageRichCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString!
  blobOrAttachmentIds: [String!]
}

"""Autogenerated return type of MessageRichCreate"""
type MessageRichCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

enum MessageSubTypeEnum {
  NO_MSUBTYPE
  USER_FORWARDED
  USER_REPLIED_TO
  SYSTEM_NOTE
  SYSTEM_OPEN
  SYSTEM_WAITING
  SYSTEM_BLOCK
  SYSTEM_CLOSE
  SYSTEM_WORKFLOW_BOT_CONTROLLED
  SYSTEM_TERMINATE
  SYSTEM_SNOOZE
  SYSTEM_UNSNOOZE
  SYSTEM_ASSIGNMENT
  MESSAGE_SHARE
  MESSAGE_MENTION
  MESSAGE_INTERACTION
  CAMPAIGN_MESSAGE
  WORKFLOW_BOT_MESSAGE
}

type MessageTemplate {
  account: Account!
  active: Boolean!
  app: App!
  appUser: AppUser!
  category: MessageTemplateCategoryEnum!
  channelId: Int!
  components: [MessageTemplateComponent!]!
  createdAt: Int!
  id: Int!
  language: MessageTemplateLanguageEnum!
  name: String!
  state: MessageTemplateStateEnum!
  updatable: Boolean!
  updatedAt: Int
  uuid: String!
}

enum MessageTemplateCategoryEnum {
  ACCOUNT_UPDATE
  PAYMENT_UPDATE
  PERSONAL_FINANCE_UPDATE
  SHIPPING_UPDATE
  RESERVATION_UPDATE
  ISSUE_RESOLUTION
  APPOINTMENT_UPDATE
  TRANSPORTATION_UPDATE
  TICKET_UPDATE
  ALERT_UPDATE
  AUTO_REPLY
  TRANSACTIONAL
  MARKETING
  OTP
  NONE
  PROMOTIONAL
}

type MessageTemplateComponent {
  buttons: [MessageTemplateComponentButton!]
  format: MessageTemplateComponentFormatEnum
  text: String
  type: MessageTemplateComponentTypeEnum!
}

type MessageTemplateComponentButton {
  phoneNumber: String
  text: String!
  type: MessageTemplateComponentButtonTypeEnum!
  url: String
}

enum MessageTemplateComponentButtonTypeEnum {
  QUICK_REPLY
  PHONE_NUMBER
  URL
}

enum MessageTemplateComponentFormatEnum {
  TEXT
  IMAGE
  VIDEO
  DOCUMENT
  LOCATION
}

enum MessageTemplateComponentTypeEnum {
  HEADER
  FOOTER
  BODY
  BUTTONS
}

"""The connection type for MessageTemplate."""
type MessageTemplateConnection {
  """A list of edges."""
  edges: [MessageTemplateEdge!]!

  """A list of nodes."""
  nodes: [MessageTemplate!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""Autogenerated input type of MessageTemplateCreate"""
input MessageTemplateCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageTemplateId: Int!
  components: [MessageTemplateCreationComponentInputObject!]
}

"""Autogenerated return type of MessageTemplateCreate"""
type MessageTemplateCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

input MessageTemplateCreationComponentInputObject {
  type: MessageTemplateComponentTypeEnum!
  subtype: MessageTemplateCreationComponentSubtypeEnum
  parameters: [MessageTemplateCreationComponentParameterInputObject!]
}

input MessageTemplateCreationComponentParameterInputObject {
  type: MessageTemplateCreationComponentParameterTypeEnum!
  text: String
  blobOrAttachmentId: String
}

enum MessageTemplateCreationComponentParameterTypeEnum {
  TEXT
  IMAGE
  VIDEO
  DOCUMENT
  PAYLOAD
  CURRENCY
  DATE_TIME
}

enum MessageTemplateCreationComponentSubtypeEnum {
  QUICK_REPLY
  URL
  PHONE
}

"""An edge in a connection."""
type MessageTemplateEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: MessageTemplate!
}

enum MessageTemplateLanguageEnum {
  af
  sq
  ar
  az
  bn
  bg
  ca
  zh_CN
  zh_HK
  zh_TW
  hr
  cs
  da
  nl
  en
  en_GB
  en_US
  et
  fil
  fi
  fr
  de
  el
  gu
  ha
  he
  hi
  hu
  id
  ga
  it
  ja
  kn
  kk
  ko
  lo
  lv
  lt
  mk
  ms
  ml
  mr
  nb
  fa
  pl
  pt_BR
  pt_PT
  pa
  ro
  ru
  sr
  sk
  sl
  es
  es_AR
  es_ES
  es_MX
  sw
  sv
  ta
  te
  th
  tr
  uk
  ur
  uz
  vi
  zu
}

"""Autogenerated input type of MessageTemplateSetActive"""
input MessageTemplateSetActiveInput {
  channelId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  templateId: Int!
  active: Boolean!
}

"""Autogenerated return type of MessageTemplateSetActive"""
type MessageTemplateSetActivePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageTemplate: MessageTemplate!
}

enum MessageTemplateStateEnum {
  PENDING
  UNDER_REVIEW
  NEEDS_MODIFICATION
  REJECTED
  ACCEPTED
}

"""Autogenerated input type of MessageTemplateSubmit"""
input MessageTemplateSubmitInput {
  channelId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  name: String!
  components: [ComponentInputObject!]!
  category: MessageTemplateCategoryEnum!
  language: MessageTemplateLanguageEnum!
}

"""Autogenerated return type of MessageTemplateSubmit"""
type MessageTemplateSubmitPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageTemplate: MessageTemplate!
}

"""Autogenerated input type of MessageTemplateUpdate"""
input MessageTemplateUpdateInput {
  channelId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  name: String!
  components: [ComponentInputObject!]!
}

"""Autogenerated return type of MessageTemplateUpdate"""
type MessageTemplateUpdatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  messageTemplate: MessageTemplate!
}

"""Autogenerated input type of MessageTemplatesSync"""
input MessageTemplatesSyncInput {
  channelId: Int!

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
}

"""Autogenerated return type of MessageTemplatesSync"""
type MessageTemplatesSyncPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  success: Boolean
}

"""Autogenerated input type of MessageTextCreate"""
input MessageTextCreateInput {
  conversationId: Int!
  facebook: FacebookInputObject
  instagram: InstagramInputObject
  abm: AbmInputObject

  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  body: MdString!
  replyToMessageId: String
  quickReplies: [QuickReplyInputObject!]
}

"""Autogenerated return type of MessageTextCreate"""
type MessageTextCreatePayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String

  """The Message sent to the end user after mutation"""
  message: Message!
}

enum MessageTypeEnum {
  TEXT
  RICH
  IMAGE
  VIDEO
  AUDIO
  DOCUMENT
  LOCATION
  CONTACT
  LIST
  CARD
  CAROUSEL
  TEMPLATE
  ANIMATION
  STICKER
  INTERNAL
  UNSUPPORTED
}

enum MessageVariableTypeEnum {
  STATIC
  CDA
}

type MessageWindowExpiryCondition {
  type: MessageWindowExpiryConditionEnum!
  value: Int!
}

enum MessageWindowExpiryConditionEnum {
  WINDOW_CONSECUTIVE_MESSAGES_COUNT_LEFT
  WINDOW_MESSAGE_COUNT_LEFT
  WINDOW_EXPIRY_TIMESTAMP
  CHANNEL_DEACTIVATED
}

"""
Enum that represents operators for multiple condition operators e.g. 'IN', 'NOT_IN'
"""
enum MultipleConditionOperatorEnum {
  IN
  NOT_IN
}

type Mutation {
  attachmentImageUploadFromUrl(
    """Parameters for AttachmentImageUploadFromUrl"""
    input: AttachmentImageUploadFromUrlInput!
  ): AttachmentImageUploadFromUrlPayload
  attachmentUpload(
    """Parameters for AttachmentUpload"""
    input: AttachmentUploadInput!
  ): AttachmentUploadPayload
  channelUserCreate(
    """Parameters for ChannelUserCreate"""
    input: ChannelUserCreateInput!
  ): ChannelUser
  channelUserDataAttributeBoolUpdate(
    """Parameters for DataAttributeBoolUpdate"""
    input: DataAttributeBoolUpdateInput!
  ): DataAttributeBoolType
  channelUserDataAttributeDateUpdate(
    """Parameters for DataAttributeDateUpdate"""
    input: DataAttributeDateUpdateInput!
  ): DataAttributeDateType
  channelUserDataAttributeDecimalUpdate(
    """Parameters for DataAttributeDecimalUpdate"""
    input: DataAttributeDecimalUpdateInput!
  ): DataAttributeDecimalType
  channelUserDataAttributeNumberUpdate(
    """Parameters for DataAttributeNumberUpdate"""
    input: DataAttributeNumberUpdateInput!
  ): DataAttributeNumberType
  channelUserDataAttributeTextUpdate(
    """Parameters for DataAttributeTextUpdate"""
    input: DataAttributeTextUpdateInput!
  ): DataAttributeTextType
  channelUserIdentifierUpdate(
    """Parameters for ChannelUserIdentifierUpdate"""
    input: ChannelUserIdentifierUpdateInput!
  ): ChannelUser
  channelUserUpdate(
    """Parameters for ChannelUserUpdate"""
    input: ChannelUserUpdateInput!
  ): ChannelUser
  conversationAssign(
    """Parameters for ConversationAssignment"""
    input: ConversationAssignmentInput!
  ): ConversationAssignmentPayload
  conversationClose(
    """Parameters for ConversationClose"""
    input: ConversationCloseInput!
  ): ConversationClosePayload @deprecated(reason: "use conversation_set_state instead")
  conversationOpen(
    """Parameters for ConversationOpen"""
    input: ConversationOpenInput!
  ): ConversationOpenPayload @deprecated(reason: "use conversation_set_state instead")
  conversationSetState(
    """Parameters for ConversationSetState"""
    input: ConversationSetStateInput!
  ): ConversationSetStatePayload
  conversationSnooze(
    """Parameters for ConversationSnooze"""
    input: ConversationSnoozeInput!
  ): ConversationSnoozePayload
  conversationTag(
    """Parameters for ConversationTag"""
    input: ConversationTagInput!
  ): Tag
  conversationTagByTagId(
    """Parameters for ConversationTagByTagId"""
    input: ConversationTagByTagIdInput!
  ): Tag
  conversationUnsnooze(
    """Parameters for ConversationUnsnooze"""
    input: ConversationUnsnoozeInput!
  ): ConversationUnsnoozePayload
  conversationUntag(
    """Parameters for ConversationUntag"""
    input: ConversationUntagInput!
  ): Tag
  dataAttributeArchive(
    """Parameters for ChannelUserDataAttributeArchive"""
    input: ChannelUserDataAttributeArchiveInput!
  ): ChannelUserDataAttribute
  dataAttributeBatchCreate(
    """Parameters for ChannelUserDataAttributeBatchCreate"""
    input: ChannelUserDataAttributeBatchCreateInput!
  ): [ChannelUserDataAttribute!]
  dataAttributeCreate(
    """Parameters for ChannelUserDataAttributeCreate"""
    input: ChannelUserDataAttributeCreateInput!
  ): ChannelUserDataAttribute
  gifMessageCreate(
    """Parameters for MessageGifCreate"""
    input: MessageGifCreateInput!
  ): MessageGifCreatePayload
  mediaMessageCreate(
    """Parameters for MessageMediaCreate"""
    input: MessageMediaCreateInput!
  ): MessageMediaCreatePayload
  messageDelete(
    """Parameters for MessageDelete"""
    input: MessageDeleteInput!
  ): MessageDeletePayload
  messageRetrySend(
    """Parameters for MessageRetrySend"""
    input: MessageRetrySendInput!
  ): MessageRetrySendPayload
  noteMessageCreate(
    """Parameters for MessageNoteCreate"""
    input: MessageNoteCreateInput!
  ): MessageNoteCreatePayload
  richMessageCreate(
    """Parameters for MessageRichCreate"""
    input: MessageRichCreateInput!
  ): MessageRichCreatePayload
  sandboxAddTester(
    """Parameters for SandboxAddTester"""
    input: SandboxAddTesterInput!
  ): SandboxAddTesterPayload
  sandboxRemoveTester(
    """Parameters for SandboxRemoveTester"""
    input: SandboxRemoveTesterInput!
  ): SandboxRemoveTesterPayload
  templateMessageCreate(
    """Parameters for MessageTemplateCreate"""
    input: MessageTemplateCreateInput!
  ): MessageTemplateCreatePayload
  templateProactiveMessageCreate(
    """Parameters for MessageProactiveTemplateCreate"""
    input: MessageProactiveTemplateCreateInput!
  ): MessageProactiveTemplateCreatePayload
  templateSetActive(
    """Parameters for MessageTemplateSetActive"""
    input: MessageTemplateSetActiveInput!
  ): MessageTemplateSetActivePayload
  templateSubmit(
    """Parameters for MessageTemplateSubmit"""
    input: MessageTemplateSubmitInput!
  ): MessageTemplateSubmitPayload
  templateUpdate(
    """Parameters for MessageTemplateUpdate"""
    input: MessageTemplateUpdateInput!
  ): MessageTemplateUpdatePayload
  templatesSync(
    """Parameters for MessageTemplatesSync"""
    input: MessageTemplatesSyncInput!
  ): MessageTemplatesSyncPayload
  textMessageCreate(
    """Parameters for MessageTextCreate"""
    input: MessageTextCreateInput!
  ): MessageTextCreatePayload
  textProactiveMessageCreate(
    """Parameters for MessageProactiveTextCreate"""
    input: MessageProactiveTextCreateInput!
  ): MessageProactiveTextCreatePayload
  webhookSubscriptionCreate(
    """Parameters for PlatformWebhookSubscriptionCreate"""
    input: PlatformWebhookSubscriptionCreateInput!
  ): WebhookSubscription
  webhookSubscriptionDestroy(
    """Parameters for PlatformWebhookSubscriptionDestroy"""
    input: PlatformWebhookSubscriptionDestroyInput!
  ): PlatformWebhookSubscriptionDestroyPayload
  webhookSubscriptionUpdate(
    """Parameters for PlatformWebhookSubscriptionUpdate"""
    input: PlatformWebhookSubscriptionUpdateInput!
  ): WebhookSubscription
}

"""An internal note that can contain media files of any type"""
type NoteMessage implements Message {
  attachments: [Attachment!]!
  body: MdString!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, the cursor to continue."""
  endCursor: String

  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String
}

"""A valid Phone, transported as a string"""
scalar Phone

type PinnedMessage {
  message: Message!
  pinnedBy: WorkspaceUserUnion!
}

"""Autogenerated input type of PlatformWebhookSubscriptionCreate"""
input PlatformWebhookSubscriptionCreateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  url: String!
  events: [WebhookEventTypeEnum!]!
}

"""Autogenerated input type of PlatformWebhookSubscriptionDestroy"""
input PlatformWebhookSubscriptionDestroyInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  id: Int!
}

"""Autogenerated return type of PlatformWebhookSubscriptionDestroy"""
type PlatformWebhookSubscriptionDestroyPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  success: Boolean!
}

"""Autogenerated input type of PlatformWebhookSubscriptionUpdate"""
input PlatformWebhookSubscriptionUpdateInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  url: String!
  id: Int!
  events: [WebhookEventTypeEnum!]!
}

type Query {
  app: App!
  currentAppUser: AppUser
  relativeDates: [RelativeDateEnum!]
}

type QuickReply {
  actionUrl: String
  imageUrl: String
  interactedWith: Boolean!
  postbackText: String!
  text: String!
  type: MessageQuickReplyTypeEnum!
}

input QuickReplyInputObject {
  text: String!
  type: MessageQuickReplyTypeEnum!
  imageUrl: String
  actionUrl: String
}

enum RegexpOperatorEnum {
  MATCH_BOOLEAN
  MATCH
}

enum RelativeDateEnum {
  LATER_SAME_DAY
  NEXT_DAY
  NEXT_MONDAY
  NEXT_WEEK
  NEXT_MONTH
}

"""
A message with rich formatting, with any type and number of attachments
"""
type RichMessage implements Message {
  attachments: [Attachment!]!
  body: MdString!
  bodyHtml: String!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  meta: EmailMessageMeta
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

type Role {
  default: Boolean!
  description: String!
  emoji: String!
  id: Int!
  isAdmin: Boolean!
  name: String!
  permissions: [AppUserRolePermissionEnum!]!
}

"""Autogenerated input type of SandboxAddTester"""
input SandboxAddTesterInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  sourceId: String!
}

"""Autogenerated return type of SandboxAddTester"""
type SandboxAddTesterPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  sandboxConnectedTester: SandboxConnectedTester!
}

type SandboxConnectedTester {
  account: Account!
  app: App!
  channel: Channel!
  createdAt: Int!
  id: Int!
  sourceId: String!
  updatedAt: Int!
}

"""Autogenerated input type of SandboxRemoveTester"""
input SandboxRemoveTesterInput {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  channelId: Int!
  testerId: Int!
}

"""Autogenerated return type of SandboxRemoveTester"""
type SandboxRemoveTesterPayload {
  """A unique identifier for the client performing the mutation."""
  clientMutationId: String
  success: Boolean!
}

type SavedReply {
  account: Account!
  active: Boolean!
  app: App!
  attachment: Attachment
  body: MdString!
  createdAt: Int!
  createdBy: AppUser!
  id: Int!
  title: String!
  updatedAt: Int!
  uuid: String!
}

"""The connection type for SavedReply."""
type SavedReplyConnection {
  """A list of edges."""
  edges: [SavedReplyEdge!]!

  """A list of nodes."""
  nodes: [SavedReply!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type SavedReplyEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: SavedReply!
}

type SavedReplyFolder {
  account: Account!
  app: App!
  createdAt: Int!
  id: Int!
  name: String!
  savedReplies: [SavedReply!]!
  updatedAt: Int!
  uuid: String!
}

union SavedReplyLeafUnion = SavedReply | SavedReplyFolder

"""Represents a snooze action with its relevant information"""
type SnoozeActionMessage implements Message {
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  snoozedUntil: Int!
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""
Represents a conversation state action (eg: Opened or Closed) with its relevant information
"""
type StateActionMessage implements Message {
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  stateType: MessageSubTypeEnum
  updatedAt: Int!
  user: User!
  uuid: String!
}

type Tag {
  accountId: Int!
  appId: Int!
  createdAt: Int!
  createdBy: AppUser!
  id: Int!
  tagColor: String!
  tagDescription: String
  tagName: String!
  updatedAt: Int
  uuid: String!
}

"""The connection type for Tag."""
type TagConnection {
  """A list of edges."""
  edges: [TagEdge!]!

  """A list of nodes."""
  nodes: [Tag!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type TagEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: Tag!
}

"""A message that was created using a message template"""
type TemplateMessage implements Message {
  attachments: [Attachment!]
  campaign: Campaign
  components: [MessageTemplateComponent!]!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  name: String
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""A message containing text without attachments of any kind"""
type TextMessage implements Message {
  body: MdString!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  footer: String
  forwarded: Boolean
  header: Header
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  quickReplies: [QuickReply!]
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

union TriggerableUnion = WorkflowBot

"""Represents an unsnooze action with its relevant information"""
type UnsnoozeActionMessage implements Message {
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""An unknown message type that is not supported at the moment by the API"""
type UnsupportedMessage implements Message {
  body: String!
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

"""Represents direct upload credentials"""
type UploadInformation {
  """Created attachment ID"""
  attachmentId: String!

  """File size in bytes"""
  byteSize: Int!

  """Content type"""
  contentType: String!

  """HTTP request headers (JSON-encoded)"""
  filename: String!

  """HTTP request headers (JSON-encoded)"""
  headers: String!

  """Upload URL"""
  uploadUrl: String!
}

"""A valid URL, transported as a string"""
scalar Url

interface User {
  account: Account!
  app: App!
  createdAt: Int!
  id: Int!
  updatedAt: Int
  uuid: String!
}

"""A message with single or multiple video file(s)"""
type VideoMessage implements Message {
  attachments: [Attachment!]!
  caption: String
  conversation: Conversation!
  createdAt: Int!
  createdAtCursor: String!
  deletedAt: Int
  deliveredAt: Int
  direction: MessageDirectionEnum!
  failedAt: Int
  failure: Failure
  forwarded: Boolean
  id: Int!
  idCursor: String!
  idempotencyKey: String
  messageCategory: MessageCategoryEnum!
  messageSubtype: MessageSubTypeEnum
  messageType: MessageTypeEnum!
  modifiedAt: Int
  reactions: [String!]
  readAt: Int
  receivedAt: Int
  repliedTo: Boolean
  repliedToMessage: Message
  sentAt: Int
  updatedAt: Int!
  user: User!
  uuid: String!
}

enum WebhookEventTypeEnum {
  CONVERSATION_CREATED
  CONVERSATION_OPENED
  CONVERSATION_CLOSED
  CONVERSATION_SNOOZED
  CONVERSATION_ASSIGNED
  CONVERSATION_TAG_CREATED
  CONVERSATION_TAG_DESTROYED
  MESSAGE_CREATED
  MESSAGE_UPDATED
  MENTION_CREATED
  CHANNEL_USER_CREATED
  CHANNEL_USER_TAG_CREATED
  CHANNEL_USER_TAG_DESTROYED
  MESSAGE_TEMPLATE_CREATED
  MESSAGE_TEMPLATE_UPDATED
}

type WebhookSubscription {
  account: Account!
  app: App!
  createdAt: Int!
  createdBy: AppUser!
  events: [WebhookEventTypeEnum!]!
  id: Int!
  updatedAt: Int
  url: String!
}

"""The connection type for WebhookSubscription."""
type WebhookSubscriptionConnection {
  """A list of edges."""
  edges: [WebhookSubscriptionEdge!]!

  """A list of nodes."""
  nodes: [WebhookSubscription!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

"""An edge in a connection."""
type WebhookSubscriptionEdge {
  """A cursor for use in pagination."""
  cursor: String!

  """The item at the end of the edge."""
  node: WebhookSubscription!
}

type WorkflowBot {
  channel: Channel!
  conversationsControlledCount: Int!
  conversationsStartedCount: Int!
  createdBy: AppUser!
  firstMessage: String
  id: Int!
  name: String!
  nodes: [WorkflowBotNode!]!
  priority: BigInt!
  state: WorkflowBotStateEnum!
  trigger: WorkflowTrigger!
  uuid: String!
}

type WorkflowBotAssignConversationAction {
  value: [Int!]!
}

type WorkflowBotNode {
  actions: [ActionTypeUnion!]
  firstNode: Boolean!
  footer: String
  header: String
  headerAttachment: Attachment
  headerType: InteractiveMessageHeaderTypeEnum
  id: String!
  lastNode: Boolean!
  message: String
  replies: [WorkflowBotNodeReply!]
}

type WorkflowBotNodeReply {
  id: String!
  message: String!
  replyType: WorkflowBotsReplyTypeEnum!
  targetNodeId: String
}

enum WorkflowBotStateEnum {
  DRAFT
  LIVE
  DELETED
}

type WorkflowBotTagConversationAction {
  value: [Int!]!
}

type WorkflowBotUpdateConversationStateAction {
  value: ConversationStateEnum!
}

enum WorkflowBotsReplyTypeEnum {
  """
  Quick replies are a type of message that allow users to select from a list of predefined options.
  """
  QUICK_REPLY
}

type WorkflowTrigger {
  conditions: [ConditionTypeUnion!]!
  id: Int!
  triggerType: WorkflowTriggersTriggerTypeEnum!
  triggerable: TriggerableUnion!
}

enum WorkflowTriggersTriggerTypeEnum {
  MESSAGE_CREATED
}

union WorkspaceUserUnion = AppUser | BotUser`;class GA{constructor(a){tl(this,"mapping");this.mapping=a}getFor(a){return this.mapping.get(a.name)}}var br;(function(t){t.UNION="union",t.ARGUMENT="argument",t.FIELD="field"})(br||(br={}));function WA(t){const a=new Map;return jA(t,i=>{Xe(i)&&$A(i,o=>{const u=hs(o.type);us(a,u).references.push({kind:br.FIELD,parent:i,by:o}),qA(o,g=>{const A=hs(g.type);us(a,A).references.push({kind:br.ARGUMENT,field:o,type:i,by:g})})}),Rn(i)&&i.getTypes().forEach(o=>{us(a,o).references.push({kind:br.UNION,by:i})})}),new GA(a)}function jA(t,a){Object.entries(t.getTypeMap()).forEach(([,i])=>{i.name.startsWith("__")||a(i)})}function $A(t,a){Object.entries(t.getFields()).forEach(([,i])=>{a(i)})}function qA(t,a){Object.entries(t.args).forEach(([,i])=>{a(i)})}function us(t,a){let i=t.get(a.name);return i||(i={references:[]},t.set(a.name,i)),i}function hs(t){return $e(t)||Rt(t)?hs(t.ofType):t}const Ye=rE(),gs=eT(qI.DIRECTIVES,[]);var Il;const YA=Fi((Il=Ye.getQueryType())==null?void 0:Il.getFields());var Tl;const QA=Fi((Tl=Ye.getMutationType())==null?void 0:Tl.getFields());var Al;const HA=Fi((Al=Ye.getSubscriptionType())==null?void 0:Al.getFields()),Ss=Tn.keyBy(rc(),t=>t.name.toLocaleLowerCase()),JA=Tn.mapValues(Ss,t=>{const a=gs.find(i=>(i==null?void 0:i.name)===t.name||(i==null?void 0:i.name)==="*");return a?a.args.some(i=>i==="*")?t.args:a.args.map(i=>t.args.find(o=>o.name===i)).filter(i=>!!i):[]}),zA=Fi(Ye.getTypeMap()),KA=WA(Ye);function Fi(t){return Tn.mapKeys(t||{},(a,i)=>i.toLocaleLowerCase())}function XA(){return Tn.size(Ye.getTypeMap())<=10}function cE(){return[ls("Queries",Ye.getQueryType()),ls("Mutations",Ye.getMutationType()),ls("Subscriptions",Ye.getSubscriptionType()),iE(),nE()].filter(t=>!!t)}function ls(t,a){return eE(t,ZA(a))}function ZA(t){return Tn.sortBy((t==null?void 0:t.getFields())||{},a=>a.name)}function eE(t,a){return a.length===0?null:{type:"menu",title:t,children:a.map(i=>({type:"page",title:i.name,section:t,deprecated:!!i.deprecationReason,href:ms.joinUrlPaths(Is,t.toLocaleLowerCase(),i.name)}))}}function nE(){return XA()?null:{type:"menu",title:"Types",children:Tn.sortBy(Tn.map(Ye.getTypeMap()),a=>a.name).filter(a=>!a.name.startsWith("__")).map(a=>({type:"page",title:a.name,section:"Types",href:ms.joinUrlPaths(Is,"types",a.name)}))}}function pE(){return!!Ye.getQueryType()}function fE(t){return YA[t.toLocaleLowerCase()]}function dE(){return!!Ye.getMutationType()}function hE(t){return QA[t.toLocaleLowerCase()]}function gE(){return!!Ye.getSubscriptionType()}function mE(t){return HA[t.toLocaleLowerCase()]}function IE(t){return zA[t.toLocaleLowerCase()]}function tE(t){return Ss[t.toLocaleLowerCase()]}function TE(t){return tE(t.name)!==void 0}function AE(){return Tn.size(Ss)>0}function EE(t){return JA[t.name.toLocaleLowerCase()]||[]}function yE(t){if(t)return KA.getFor(t)}function vE(t){return Tn.flatMap(t.getFields(),a=>({field:a,possibleDescriptions:tc(a,t)}))}function tc(t,a){return t?t.description?[{description:t.description,from:a}]:Xe(a)?a.getInterfaces().flatMap(i=>tc(i.getFields()[t.name],i)):[]:[]}function rc(){return gs.some(t=>(t==null?void 0:t.name)==="*")?Ye.getDirectives().filter(t=>!["include","skip","deprecated","specifiedBy"].includes(t.name)):gs.filter(t=>!!(t!=null&&t.name)).map(({name:t})=>t?Ye.getDirective(t):void 0).filter(t=>!!t)}function rE(){return ml.trim().length===0?PA(JSON.parse(JSON.stringify({__schema:{types:[]}}))):VA(ml)}function iE(){const t=rc();if(t.length!==0)return{type:"menu",title:"Directives",children:t.map(a=>({type:"page",title:a.name,href:ms.joinUrlPaths(Is,"directives",a.name),section:"Directives"}))}}export{fE as A,gE as B,mE as C,vE as D,IE as E,yE as F,T as K,br as R,Xe as a,qe as b,It as c,Rn as d,xn as e,XA as f,eT as g,uE as h,wn as i,cE as j,EE as k,Tn as l,Pl as m,Rt as n,$e as o,lE as p,AE as q,tE as r,Ye as s,qI as t,qT as u,Fl as v,TE as w,dE as x,hE as y,pE as z};
