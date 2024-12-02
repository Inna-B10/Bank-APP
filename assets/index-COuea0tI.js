var ue=Object.defineProperty;var yt=s=>{throw TypeError(s)};var pe=(s,e,t)=>e in s?ue(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var u=(s,e,t)=>pe(s,typeof e!="symbol"?e+"":e,t),lt=(s,e,t)=>e.has(s)||yt("Cannot "+t);var l=(s,e,t)=>(lt(s,e,"read from private field"),t?t.call(s):e.get(s)),d=(s,e,t)=>e.has(s)?yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),x=(s,e,t,n)=>(lt(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),c=(s,e,t)=>(lt(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();class m{render(){throw new Error("Render method must be implemented in the child class")}}function vt(s){return s.replace(/(\d{4})(?=\d)/g,"$1-")}function Et(s){const e=s.replace(/\s/g,"").match(/.{1,4}/g);return e?e.join(" "):""}class V{constructor(e){if(typeof e=="string"){if(this.element=document.querySelector(e),!this.element)throw new Error(`Element ${e} not found!`)}else if(e instanceof HTMLElement)this.element=e;else throw new Error("Invalid selector type")}find(e){const t=new V(this.element.querySelector(e));if(t)return t;throw new Error(`Element ${e} not found!`)}findAll(e){const t=this.element.querySelectorAll(e);return Array.from(t).map(n=>new V(n))}append(e){return this.element.appendChild(e),this}before(e){if(!(e instanceof HTMLElement))throw new Error("Element must be an HTMLElement");const t=this.element.parentElement;if(t)return t.insertBefore(e,this.element),this;throw new Error("Element does not have a parent element")}html(e){return typeof e>"u"?this.element.innerHTML:(this.element.innerHTML=e,this)}text(e){return typeof e>"u"?this.element.textContent:(this.element.textContent=e,this)}click(e){return this.element.addEventListener("click",e),this}on(e,t){if(typeof e!="string"||typeof t!="function")throw new Error("eventType must be a string and callback must be a function");return this.element.addEventListener(e,t),this}value(e){return typeof e>"u"?this.element.value:(this.element.value=e,this)}submit(e){if(this.element.tagName.toLowerCase()==="form")this.element.addEventListener("submit",t=>{t.preventDefault(),e(t)});else throw new Error("Element must be a form");return this}input({onInput:e,...t}){if(this.element.tagName.toLowerCase()!=="input")throw new Error("Element must be an input");for(const[n,r]of Object.entries(t))this.element.setAttribute(n,r);return e&&this.element.addEventListener("input",e),this}numberInput(e){if(this.element.tagName.toLowerCase()!=="input"||this.element.type!=="number")throw new Error('Element must be an input with type "number"');return this.element.addEventListener("input",t=>{let n=t.target.value.replace(/[^0-9]/g,"");e&&(n=n.substring(0,e)),t.target.value=n}),this}creditCardInput(){if(this.element.tagName.toLowerCase()!=="input"||this.element.type!=="text")throw new Error('Element must be an input with type "text"');return this.element.addEventListener("input",t=>{let n=t.target.value.replace(/[^0-9]/g,"");n=n.substring(0,16),t.target.value=vt(n)}),this}css(e,t){if(typeof e!="string"||typeof t!="string")throw new Error("Property and value must be strings");return this.element.style[e]=t,this}addClass(e){if(Array.isArray(e))for(const t of e)this.element.classList.add(t);else this.element.classList.add(e);return this}removeClass(e){if(Array.isArray(e))for(const t of e)this.element.classList.remove(t);else this.element.classList.remove(e);return this}attr(e,t){if(typeof e!="string")throw new Error("Attribute name must be a string");return typeof t>"u"?this.element.getAttribute(e):(this.element.setAttribute(e,t),this)}removeAttr(e){if(typeof e!="string")throw new Error("attrName must be a string");return this.element.removeAttribute(e),this}show(){return this.element.style.removeProperty("display"),this}hide(){return this.element.style.display="none",this}}function i(s){return new V(s)}var M,kt,Nt;class fe{constructor(){d(this,M)}htmlToElement(e,t=[],n){console.log("Components array:",t);const a=new DOMParser().parseFromString(e,"text/html").body.firstChild;return n&&c(this,M,Nt).call(this,n,a),c(this,M,kt).call(this,a,t),a}}M=new WeakSet,kt=function(e,t){const n=/^component-/,r=e.getElementsByTagName("*");for(const o of r){const a=o.tagName.toLowerCase();if(n.test(a)){const f=a.replace(n,"").replace(/-/g,"");console.log("Looking for component:",f);const g=t.find(w=>{var _;const L=w instanceof m?w:new w;return((_=w.componentName)==null?void 0:_.toLowerCase())===f||L.constructor.name.toLowerCase()===f});if(g){const w=g instanceof m?g.render():new g().render();o.replaceWith(w)}else console.error(`Component "${f}" not found in the provided components array.`)}}},Nt=function(e,t){if(!t)return;const n=o=>{for(const[a,f]of Object.entries(e))o.classList.contains(a)&&(o.classList.remove(a),o.classList.add(f))};t.getAttribute("class")&&n(t),t.querySelectorAll("*").forEach(n)};const h=new fe,ve="_layout_35w8f_1",ge={layout:ve};class Mt{getItem(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null}setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}removeItem(e){localStorage.removeItem(e)}clear(){localStorage.clear()}}const H="user",mt="accessToken";class v{constructor(e){this.observers=[],this.storageService=new Mt;const t=this.storageService.getItem(H),n=t?{user:t}:e;this.state=new Proxy(n,{set:(r,o,a)=>(r[o]=a,this.notify(),!0)})}static getInstance(){return v.instance||(v.instance=new v({user:null})),v.instance}addObserver(e){this.observers.push(e)}removeObserver(e){this.observers=this.observers.filter(t=>t!==e)}notify(){for(const e of this.observers)e.update()}login(e,t){this.state.user=e,this.storageService.setItem(H,e),this.storageService.setItem(mt,t)}logout(){this.state.user=null,this.storageService.removeItem(H),this.storageService.removeItem(mt)}updateCard(e){const n={...this.state.user,card:e};this.state.user=n,this.storageService.setItem(H,n)}}const we="_grey_1d2sm_19",_t={"user-item":"_user-item_1d2sm_1",grey:we},be=`<button class='user-item'>\r
	<img alt='' />\r
	<span></span>\r
</button>\r
`;var K,Ot;class it extends m{constructor(t,n=!1,r){super();d(this,K);if(!t)throw new Error("User should be passed!");if(!(t!=null&&t.name))throw new Error('User must have a "name"!');if(!(t!=null&&t.avatarPath))throw new Error('User must have a "avatarPath"!');this.user=t,this.onClick=r,this.isGrey=n}update({avatarPath:t,name:n}){t&&n&&(i(this.element).find("img").attr("src",t).attr("alt",n),i(this.element).find("span").text(n))}render(){return this.element=h.htmlToElement(be,[],_t),this.update(this.user),i(this.element).click(this.onClick||c(this,K,Ot).bind(this)),this.onClick||i(this.element).attr("disabled",""),this.isGrey&&i(this.element).addClass(_t.grey),this.element}}K=new WeakSet,Ot=function(t){t.preventDefault()},u(it,"componentName","useritem");const ye="_header_1u6es_1",Ee={header:ye,"right-side":"_right-side_1u6es_6"},_e=`<header class='header'>	\r
	<component-logo></component-logo>\r
	<div id='auth-side' class='right-side'>\r
		<component-search></component-search>\r
		<component-user-item></component-user-item>\r
		<component-logout-button></component-logout-button>\r
	</div>\r
\r
</header>\r
`,xe="_logo_efu2a_1",Se={logo:xe},Te=`<nav class='logo'>\r
	<a href='./' title='Home'> Obsidian Bank </a>\r
</nav>\r
`;class zt extends m{render(){return this.element=h.htmlToElement(Te,[],Se),this.element}}u(zt,"componentName","logo");const Ce="_logout_yeasz_1",$e={logout:Ce},Le=`<div class='logout'>\r
	<button title='Logout'>\r
		<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r
			<path stroke-linecap='round' stroke-linejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' />\r
		</svg>\r
	</button>\r
</div>`;class Pt extends m{constructor({router:e}){super(),this.store=v.getInstance(),this.user=this.store.state.user,this.router=e}render(){return this.element=h.htmlToElement(Le,[],$e),i(this.element).find("button").click(()=>{this.store.logout(),this.router.navigate("./auth")}),this.element}}u(Pt,"componentName","logoutbutton");const Ae="_notification_1ykxd_1",Ie="_slideIn_1ykxd_1",ke="_error_1ykxd_14",Ne="_success_1ykxd_14",ut={notification:Ae,slideIn:Ie,error:ke,success:Ne};var C,J,Rt;class q{constructor(){d(this,J);d(this,C);x(this,C,null)}show(e,t){if(!["success","error"].includes(e))throw new Error('Invalid notification type. Allowed types are "success" and "error".');const n={success:ut.success,error:ut.error},r=i("#notification"),o=n[e];r.text(t).addClass(o),c(this,J,Rt).call(this,()=>{r.removeClass(o)},3e3)}}C=new WeakMap,J=new WeakSet,Rt=function(e,t){l(this,C)&&clearTimeout(l(this,C)),x(this,C,setTimeout(e,t))};const Me={error:"rgb(255 74 74 / 61%)"};class Oe{constructor(){this.errorBorderTimeout={}}showError(e,t=2500){e.css("border-color",Me.error),this.errorBorderTimeout[e]&&clearTimeout(this.errorBorderTimeout[e]),this.errorBorderTimeout[e]=setTimeout(()=>{e.css("border-color","")},t)}}const W=new Oe,ze="_button_5jjbu_1",Pe="_green_5jjbu_18",Re="_purple_5jjbu_24",xt={button:ze,green:Pe,purple:Re},Be=`<button class='button'></button>\r
`;class P extends m{constructor({children:e,onClick:t,variant:n}){if(super(),!e)throw new Error("Children is empty!");this.children=e,this.onClick=t,this.variant=n}render(){return this.element=h.htmlToElement(Be,[],xt),i(this.element).html(this.children).click(this.onClick),this.variant&&i(this.element).addClass(xt[this.variant]),this.element}}u(P,"componentName","button");const De="_field_1y2ef_1",Ue={field:De},je=`<label class='field'>\r
	<input />\r
</label>\r
`;class R extends m{constructor({placeholder:e,type:t="text",value:n="",name:r,variant:o}){if(super(),!r)throw new Error('Please fill field parameter "name"!');this.placeholder=e,this.type=t,this.value=n,this.name=r,this.variant=o}render(){this.element=h.htmlToElement(je,[],Ue);const e=i(this.element).find("input").input({placeholder:this.placeholder,type:this.type,value:this.value,name:this.name});return this.type==="number"&&e.numberInput(),this.variant==="credit-card"&&e.creditCardInput(),this.element}}u(R,"componentName","field");const qe="http://localhost:4200";function St(s){return typeof s.message=="object"?s.message[0]:s.message}async function $({path:s,body:e=null,headers:t={},method:n="GET",onError:r=null,onSuccess:o=null}){let a=!0,f=null,g=null;const w=`${qe}/api${s}`,L=new Mt().getItem(mt),_={method:n,headers:{"Content-Type":"application/json",...t}};L&&(_.headers.Authorization=`Bearer ${L}`),e&&(_.body=JSON.stringify(e));try{const T=await fetch(w,_);if(T.ok)g=await T.json(),o&&o(g);else{const A=await T.json(),z=St(A);r&&(console.log(z),r(z)),new q().show("error",z)}}catch(T){const A=St(T);r&&(console.log(A),r(A))}finally{a=!1}return{isLoading:a,error:f,data:g}}var I;class gt{constructor(){d(this,I,"/cards");this.store=v.getInstance().state,this.notificationService=new q}byUser(e){return $({path:`${l(this,I)}/by-user`,onSuccess:e})}updateBalance(e,t,n){return $({path:`${l(this,I)}/balance/${t}`,method:"PATCH",body:{amount:+e},onSuccess:()=>{this.notificationService.show("success","Balance successfully changed!"),n()}})}transfer({amount:e,toCardNumber:t},n){return $({path:`${l(this,I)}/transfer-money`,method:"PATCH",body:{amount:+e,fromCardNumber:this.store.user.card.number,toCardNumber:t},onSuccess:()=>{this.notificationService.show("success","Transfer successfully completed!"),n()}})}}I=new WeakMap;const He={"transfer-field":"_transfer-field_lzd97_1"},Fe=`<div class='transfer-field'>
	<component-field></component-field>
	<component-button></component-button>
</div>`,Y="balanceUpdated",B="transactionCompleted",Bt='[name="card-number"]';class Dt extends m{constructor(){super();u(this,"handleTransfer",t=>{t.preventDefault(),this.store.user||this.notificationService.show("error","You need authorization!"),i(t.target).text("Sending...").attr("disabled",!0);const n=i(this.element).find("input"),r=n.value().replaceAll("-",""),o=()=>{i(t.target).removeAttr("disabled").text("Send"),n.value("")};if(!r){W.showError(i(this.element).find("label")),o();return}let a=prompt("Transfer amount");this.cardService.transfer({amount:a,toCardNumber:r},()=>{n.value(""),a="",document.dispatchEvent(new Event(B)),document.dispatchEvent(new Event(Y))}),o()});this.store=v.getInstance().state,this.cardService=new gt,this.notificationService=new q}render(){return this.element=h.htmlToElement(Fe,[new R({name:"card-number",placeholder:"xxxx-xxxx-xxxx-xxxx",variant:"credit-card"}),new P({children:"Send",variant:"purple",onClick:this.handleTransfer})],He),this.store.user||i(this.element).find("input").attr("disabled",!0),this.element}}u(Dt,"componentName","transferfield");function Ve(s,e){let t;return function(...n){const r=()=>{clearTimeout(t),s.apply(this,n)};clearTimeout(t),t=setTimeout(r,e)}}var X;class Ut{constructor(){d(this,X,"/users")}getAll(e,t){return $({path:`${l(this,X)}${e?`?${new URLSearchParams({searchTerm:e})}`:""}`,onSuccess:t})}}X=new WeakMap;const We="_search_ibd97_1",Ye="_results_ibd97_19",Ge="_showIn_ibd97_1",Ke="_item_ibd97_32",Je="_visible_ibd97_37",dt={search:We,results:Ye,showIn:Ge,item:Ke,visible:Je},Xe=`<div class='search'>\r
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r
		<path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />\r
	</svg>\r
	<input />\r
\r
	<div class='results' id='search-results'></div>\r
</div>\r
`;var Q;class jt extends m{constructor(){super();d(this,Q,async t=>{const n=t.target.value,r=i(this.element).find("#search-results");if(!n){r.html("");return}await this.userService.getAll(n,o=>{r.html(""),o.forEach((a,f)=>{const g=new it(a,!0,()=>{i(Bt).value(vt(a.card.number)),r.html("")}).render();i(g).addClass(dt.item).css("transition-delay",`${f*.1}s`),r.append(g),setTimeout(()=>{i(g).addClass(dt.visible)},50)})})});this.userService=new Ut}render(){this.element=h.htmlToElement(Xe,[],dt);const t=Ve(l(this,Q),300);return i(this.element).find("input").input({type:"search",name:"search",placeholder:"Search contacts..."}).on("input",t),this.element}}Q=new WeakMap,u(jt,"componentName","search");class Qe extends m{constructor({router:e}){super(),this.store=v.getInstance(),this.store.addObserver(this),this.router=e,this.userItem=new it({avatarPath:"./",name:"User"})}update(){this.user=this.store.state.user;const e=i(this.element).find("#auth-side");this.user?(e.show(),this.userItem.update(this.user),this.router.navigate("./")):e.hide()}render(){return this.element=h.htmlToElement(_e,[zt,new Pt({router:this.router}),jt,this.userItem],Ee),this.update(),this.element}}const Ze=`<section class='layout'>\r
	<main>\r
		<component-notification></component-notification>\r
		<div id='content'></div>\r
	</main>\r
</section>\r
`,tn="<div class='notification' id='notification'></div>";class qt extends m{render(){return this.element=h.htmlToElement(tn,[],ut),this.element}}u(qt,"componentName","notification");class en extends m{constructor({router:e,children:t}){super(),this.router=e,this.children=t}render(){this.element=h.htmlToElement(Ze,[qt],ge);const e=i(this.element).find("main"),t=i(this.element).find("#content");return t.append(this.children),e.before(new Qe({router:this.router}).render()).append(t.element),this.element}}const Tt="Obsidian Bank",nn=s=>s?`${s} | ${Tt}`:Tt;class ot{constructor({title:e}){document.title=nn(e)}render(){throw new Error("Render method must be implemented in the child class")}}class sn extends ot{constructor(){super({title:"Not Found"})}render(){return"<p>Not Found</p>"}}class rn extends ot{constructor(){super({title:"About"})}render(){return"<p>About</p>"}}class on{getFormValues(e){const t=e.querySelectorAll("input"),n={};for(const r of t)n[r.name]=r.value;return n}}const an=new on;var Z;class cn{constructor(){d(this,Z,"/auth");this.store=v.getInstance(),this.notificationService=new q}main(e,t){return $({path:`${l(this,Z)}/${e}`,body:t,onSuccess:n=>{this.store.login(n.user,n.accessToken),this.notificationService.show("success","You have successfully logged in !")},method:"POST"})}}Z=new WeakMap;const ln="_auth_ya0cv_1",dn={auth:ln},hn=`<div class='auth'>
	<form>
		<h1>Sign in</h1>
		<div id='auth-inputs'></div>
		<div style='text-align: center;'>
		<component-button></component-button>
		</div>
		<footer>
			<button id='change-form-type'>Register</button>
		</footer>
	</form>
</div>
`;var S,tt,Ht,et,nt;class mn extends ot{constructor(){super({title:"Auth"});d(this,tt);d(this,S,!0);d(this,et,t=>{const n=an.getFormValues(t.target);if(!c(this,tt,Ht).call(this,n))return;const r=l(this,S)?"login":"register";this.authService.main(r,n)});d(this,nt,t=>{t.preventDefault(),i(this.element).find("h1").text(l(this,S)?"Register":"Sign In"),i(t.target).text(l(this,S)?"Sign In":"Register"),x(this,S,!l(this,S))});this.authService=new cn}render(){return this.element=h.htmlToElement(hn,[new P({children:"Submit"})],dn),i(this.element).find("#auth-inputs").append(new R({name:"email",placeholder:"Email",type:"email"}).render()).append(new R({name:"password",placeholder:"Password",type:"password"}).render()),i(this.element).find("#change-form-type").click(l(this,nt)),i(this.element).find("form").submit(l(this,et)),this.element}}S=new WeakMap,tt=new WeakSet,Ht=function(t){const n=i(this.element).find("label:first-child"),r=i(this.element).find("label:last-child");return t.email||W.showError(n),t.password||W.showError(r),t.email&&t.password},et=new WeakMap,nt=new WeakMap;const un={"auth-required-message":"_auth-required-message_1abjg_1"},pn=`<div class='auth-required-message'>
  <span>
      To view this page,&nbsp; please log in first&nbsp;  -&nbsp;  <a href='./auth'>Go to login</a>
  </span>
</div>`;class fn extends m{render(){return this.element=h.htmlToElement(pn,[],un),this.element}}const vn="_home_18eeu_1",gn={home:vn},wn="_actions_4r799_1",bn={actions:wn},yn=`<div class='actions'>
	<component-field></component-field>
	<div id='action-buttons'></div>
</div>`;class Ft extends m{constructor(){super(),this.store=v.getInstance().state,this.cardService=new gt,this.notificationService=new q}updateBalance(e,t){e.preventDefault(),this.store.user||this.notificationService.show("error","You need authorization!"),i(e.target).text("Sending...").attr("disabled",!0);const n=i(this.element).find("input"),r=n.value();if(!r){W.showError(i(this.element).find("label")),i(e.target).removeAttr("disabled").text(t);return}this.cardService.updateBalance(r,t,()=>{n.value("");const o=new Event(Y);document.dispatchEvent(o)}),i(e.target).removeAttr("disabled").text(t)}render(){return this.element=h.htmlToElement(yn,[new R({name:"amount",placeholder:"Enter amount",type:"number"})],bn),i(this.element).find("#action-buttons").append(new P({children:"Top-up",variant:"green",onClick:e=>this.updateBalance(e,"top-up")}).render()).append(new P({children:"Withdrawal",variant:"purple",onClick:e=>this.updateBalance(e,"withdrawal")}).render()),this.store.user||i(this.element).find("input").attr("disabled",!0),this.element}}u(Ft,"componentName","actions");const En=`<svg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' x='0' y='0' style='height:100%;width:100%;background:0 0;shape-rendering:auto' version='1.1' viewBox='0 0 100 100' data-component='loader'>\r
	<g class='ldl-scale' style='transform-origin:50% 50%;transform:rotate(0deg) scale(.8,.8)'>\r
		<g class='ldl-ani'>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.625s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#a0c8d7' d='m74.801 28.264 2.361-3.714 1.385 1.691a34.18 34.18 0 0 1 5.782 10.205c1.082 3.032 1.857 8.047 1.94 12.002l4.456-2.154 4.046 2.784c-.063-5.485-1.339-12.816-3.097-17.155a43.059 43.059 0 0 0-8.978-13.816l-.866-.896 2.23-3.508-14.881.145 5.622 14.416z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.694444s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#a0c8d7' d='M39.166 15.789a34.187 34.187 0 0 1 11.492-2.345c3.216-.098 8.227.721 12.013 1.864L62 10.404l3.899-2.987C60.662 5.782 53.3 4.729 48.626 5.061A43.072 43.072 0 0 0 32.711 9.33l-1.12.547-2.646-3.204-4.461 14.197 15.449-.892-2.803-3.394 2.036-.795z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.763889s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#a0c8d7' d='m17.184 52.196-.127-2.182a34.167 34.167 0 0 1 1.322-11.655c.907-3.088 3.228-7.602 5.485-10.849l-4.871-.876-1.637-4.63c-3.173 4.474-6.45 11.154-7.578 15.699a43.073 43.073 0 0 0-.858 16.454l.174 1.234-3.865 1.526 12.123 8.63 3.926-14.968-4.094 1.617z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.833333s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#a0c8d7' d='m44.617 77.778.272 4.393-2.114-.553a34.2 34.2 0 0 1-10.676-4.857c-2.658-1.818-6.232-5.419-8.623-8.569l-2.338 4.362-4.91.126c3.275 4.4 8.615 9.581 12.589 12.057a43.086 43.086 0 0 0 15.385 5.901l1.227.216.255 4.146 11.954-8.864-13.021-8.358z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.902778s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#a0c8d7' d='m89.669 54.184-11.974 9.802 4.262 1.098-1.179 1.84a34.204 34.204 0 0 1-7.919 8.653c-2.55 1.966-7.08 4.253-10.815 5.553l3.425 3.572-1.398 4.707c5.197-1.754 11.775-5.232 15.358-8.246a43.093 43.093 0 0 0 10.366-12.808l.585-1.101 4.024 1.037-4.735-14.107z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.972222s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#f8b26a' d='M50.966 28.286c-11.494 0-20.844 9.351-20.844 20.844 0 11.494 9.351 20.845 20.844 20.845 11.494 0 20.845-9.351 20.845-20.845 0-11.493-9.352-20.844-20.845-20.844z' class='ldl-ani' style='fill:#4f5157' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -1.04167s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#f5e6c8' d='M50.966 24.131c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.216 25-25-11.216-25-25-25zm0 45.845c-11.494 0-20.844-9.351-20.844-20.845 0-11.494 9.351-20.844 20.844-20.844 11.494 0 20.845 9.351 20.845 20.844s-9.352 20.845-20.845 20.845z' class='ldl-ani' style='fill:#d2d2d2' />\r
			</g>\r
			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -1.11111s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
				<path fill='#f5e6c8' d='M52.962 46.777c-3.03-1.14-4.277-1.889-4.277-3.065 0-.999.749-1.997 3.066-1.997 1.273 0 2.317.202 3.16.453 1.106.329 2.259-.356 2.546-1.473a2.07 2.07 0 0 0-1.498-2.513c-.882-.232-1.934-.401-3.21-.459v-1.39a1.746 1.746 0 1 0-3.492 0v1.639c-3.814.749-6.025 3.208-6.025 6.345 0 3.457 2.602 5.239 6.416 6.523 2.638.892 3.778 1.747 3.778 3.101 0 1.426-1.39 2.21-3.421 2.21-1.39 0-2.703-.269-3.855-.662-1.132-.386-2.355.237-2.653 1.395l-.043.167a2.057 2.057 0 0 0 1.342 2.469c1.24.407 2.746.697 4.281.765v1.64c0 .965.782 1.746 1.746 1.746h.001c.965 0 1.746-.782 1.746-1.746v-1.89c4.098-.713 6.345-3.421 6.345-6.594 0-3.205-1.712-5.166-5.953-6.664z' class='ldl-ani' style='fill:#d2d2d2' />\r
			</g>\r
		</g>\r
	</g>\r
	<style id='breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r
		@keyframes breath-853b0b7b-a60c-4c08-a5c3-c749855f7945 {\r
			0% {\r
				animation-timing-function: cubic-bezier(.9647, .2413, -.0705, .7911);\r
				transform: scale(.9099999999999999)\r
			}\r
\r
			51% {\r
				animation-timing-function: cubic-bezier(.9226, .2631, -.0308, .7628);\r
				transform: scale(1.02994)\r
			}\r
\r
			to {\r
				transform: scale(.9099999999999999)\r
			}\r
		}\r
	</style>\r
</svg>`,wt='[data-component="loader"]';class at extends m{constructor(e=100,t=100){super(),this.width=e,this.height=t}render(){return this.element=h.htmlToElement(En,[]),this.element.style=`width: ${this.width}px; height: ${this.height}px`,this.element.classList.add("bounce"),this.element}}function G(s){return new Intl.NumberFormat("no-NO",{currency:"NOK",style:"currency"}).format(s)}const _n="_line_f61m5_9",xn="_cvc_f61m5_61",Ct={"card-info":"_card-info_f61m5_1",line:_n,"card-number":"_card-number_f61m5_15","card-icon":"_card-icon_f61m5_15",cvc:xn},$t=`<section class='card-info'>\r
	<div class='card-number'>\r
		<div class='card-icon'>\r
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r
				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />\r
			</svg>\r
		</div>\r
\r
		<div>\r
			<span>Card number</span>\r
			<span id='card-number' style='cursor: pointer;'></span>\r
		</div>\r
	</div>\r
	<div class='line'></div>\r
	<div>\r
		<div>\r
			<span>Expire date</span>\r
			<span id='card-expire-date'></span>\r
		</div>\r
	</div>\r
	<div class='line'></div>\r
	<div>\r
		<div class='cvc'>\r
			<span>CVC</span>\r
			<div>\r
				<span id='card-cvc'></span>\r
				<button id='toggle-cvc'>\r
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r
						<path stroke-linecap='round' stroke-linejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' />\r
						<path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />\r
					</svg>\r
				</button>\r
			</div>\r
		</div>\r
	</div>\r
	<div class='line'></div>\r
	<div>\r
		<div>\r
			<span>Balance</span>\r
			<span id='card-balance'></span>\r
		</div>\r
	</div>\r
	</div>\r
</section>`,ht="*****";var y,Wt,Yt,D,Gt,Kt;class Vt extends m{constructor(){super();d(this,y);d(this,D,()=>{this.fetchData()});this.store=v.getInstance(),this.cardService=new gt,this.element=h.htmlToElement($t,[],Ct),c(this,y,Wt).call(this)}destroy(){c(this,y,Yt).call(this)}fillElements(){i(this.element).html(h.htmlToElement($t,[],Ct).innerHTML),i(this.element).findAll(":scope > div").forEach(n=>{n.addClass("fade-in")}),i(this.element).find("#card-number").text(Et(this.card.number)).click(c(this,y,Gt).bind(this)),i(this.element).find("#card-expire-date").text(this.card.expireDate);const t=i(this.element).find("#card-cvc");t.text(ht).css("width","44px"),i(this.element).find("#toggle-cvc").click(c(this,y,Kt).bind(this,t)),i(this.element).find("#card-balance").text(G(this.card.balance))}fetchData(){this.cardService.byUser(t=>{t!=null&&t.id?(this.card=t,this.fillElements(),this.store.updateCard(t)):this.store.updateCard(null)})}render(){return this.store.state.user&&(i(this.element).html(new at().render().outerHTML),setTimeout(()=>this.fetchData(),500)),this.element}}y=new WeakSet,Wt=function(){document.addEventListener(Y,l(this,D))},Yt=function(){document.removeEventListener(Y,l(this,D))},D=new WeakMap,Gt=function(t){navigator.clipboard.writeText(t.target.innerText).then(()=>{t.target.innerText="Card number copied!",setTimeout(()=>{t.target.innerText=Et(this.card.number)},2e3)})},Kt=function(t){t.text()===ht?t.text(this.card.cvc):t.text(ht)},u(Vt,"componentName","cardinfo");const Sn="_heading_uqm0e_1",Tn={heading:Sn},Cn=`<div class='heading'>

</div>`;class ct extends m{constructor(e=""){super(),this.title=e}render(){return this.element=h.htmlToElement(Cn,[],Tn),i(this.element).text(this.title),this.element}}u(ct,"componentName","heading");const $n="_contacts_1y9d8_1",Ln={contacts:$n},An=`<div class='contacts'>
	<component-heading></component-heading>
	<component-transfer-field></component-transfer-field>
	<div id='contacts-list'></div>
</div>`;class Jt extends m{constructor(){super(),this.store=v.getInstance().state,this.userService=new Ut}fetchData(){this.userService.getAll(null,e=>{if(e){this.element.querySelector(wt).remove();for(const t of e)i(this.element).find("#contacts-list").append(new it(t,!0,()=>{i(Bt).value(vt(t.card.number))}).render());i(this.element).find("#contacts-list").findAll("button").forEach(t=>{t.addClass("fade-in")})}})}render(){return this.element=h.htmlToElement(An,[Dt,new ct("Transfer money")],Ln),this.store.user&&(i(this.element).find("#contacts-list").html(new at().render().outerHTML),setTimeout(()=>this.fetchData(),500)),this.element}}u(Jt,"componentName","contacts");const In=`<div class='home'>\r
	<div>\r
		<component-card-info></component-card-info>\r
		<component-transactions></component-transactions>\r
	</div>\r
	<div>\r
		<component-statistics></component-statistics>\r
		<component-actions></component-actions>\r
		<component-contacts></component-contacts>\r
	</div>\r
</div>\r
`;var st;class kn{constructor(){d(this,st,"/statistics")}main(e){return $({path:l(this,st),onSuccess:e})}}st=new WeakMap;const Nn="_statistics_1t05k_1",Mn={statistics:Nn},On="_draw_1pw7d_1",zn="_fadeIn_1pw7d_1",Pn={"donut-chart":"_donut-chart_1pw7d_1",draw:On,fadeIn:zn},Rn=`<div class='donut-chart'>

</div>`;var p,Qt,pt,Zt,te,ee,ne,se;class Xt extends m{constructor(t,n={size:250,donutWidth:50}){super();d(this,p);u(this,"gap",15);this.data=t,this.size=n.size,this.donutWidth=n.donutWidth}render(){return this.element=h.htmlToElement(Rn,[],Pn),i(this.element).append(c(this,p,se).call(this)),this.element}}p=new WeakSet,Qt=function(){return this.data.reduce((t,n)=>t+n.value,0)},pt=function(t,n){const o=(t*3.6-90)*Math.PI/180,a=n*Math.cos(o),f=n*Math.sin(o);return[a,f]},Zt=function(){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("width",this.size),t.setAttribute("height",this.size),t.setAttribute("viewBox",`-5 -5 ${this.size+this.gap} ${this.size+this.gap}`),t},te=function(){const t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.setAttribute("transform",`translate(${this.size/2+this.gap/4}, ${this.size/2+this.gap/4})`),t},ee=function(t,n){if(!n||n.includes("NaN"))return;const r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",n),r.setAttribute("fill","none"),r.setAttribute("stroke",t.color),r.setAttribute("stroke-width",this.donutWidth),r},ne=function(t){const n=c(this,p,Qt).call(this),r=.8,o=this.size*r,a=o/2;let f=0;this.data.forEach(g=>{const w=g.value/n*100,[L,_]=c(this,p,pt).call(this,f,a);f+=w;const[T,A]=c(this,p,pt).call(this,f,a),z=w>50?1:0,me=`M ${L} ${_} A ${a} ${a} 0 ${z} 1 ${T} ${A}`,bt=c(this,p,ee).call(this,g,me);bt.classList.add("rotate"),t.appendChild(bt)})},se=function(){const t=c(this,p,Zt).call(this),n=c(this,p,te).call(this);return c(this,p,ne).call(this,n),t.appendChild(n),t},u(Xt,"componentName","donutchart");const Bn={"circle-chart":"_circle-chart_1k8h1_1"},Dn=`<div class='circle-chart'>
	<component-donut-chart></component-donut-chart>
</div>`;class Un extends m{constructor(e,t){super(),this.incomePercent=e,this.expensePercent=t}render(){return this.element=h.htmlToElement(Dn,[new Xt([{value:this.incomePercent,color:"#08f0c8"},{value:this.expensePercent,color:"#917cff"}])],Bn),this.element}}const jn="_green_1slco_25",qn="_purple_1slco_31",Lt={"statistic-item":"_statistic-item_1slco_1",green:jn,purple:qn},Hn=`<div class='statistic-item'>
	<span id='statistic-label'></span>
	<span id='statistic-value'></span>
</div>`;class At extends m{constructor(e,t,n){if(super(),!e||!t||!n)throw new Error("Label, value and variant (purple/green) required!");this.label=e,this.value=t,this.variant=n}render(){return this.element=h.htmlToElement(Hn,[],Lt),i(this.element).addClass(Lt[this.variant]).addClass("fade-in"),i(this.element).find("#statistic-label").text(this.label),i(this.element).find("#statistic-value").text(this.value),this.element}}const Fn=`<div class='statistics'>
	<component-heading></component-heading>

	<div id='circle-chart'></div>
	<div id='statistics-items'>

	</div>
</div>`;var E,ie,oe,ft;class re extends m{constructor(){super();d(this,E);this.store=v.getInstance().state,this.statisticService=new kn,this.element=h.htmlToElement(Fn,[new ct("Statistics")],Mn),c(this,E,ie).call(this)}destroy(){c(this,E,oe).call(this)}renderChart(t,n){const r=t+n;let o=t*100/r,a=100-o;return t&&!n&&(o=100,a=.1),!t&&n&&(o=.1,a=100),new Un(o,a).render()}fetchData(){this.statisticService.main(t=>{if(!t)return;const n=this.element.querySelector(wt);n&&n.remove();const r=i(this.element).find("#statistics-items");r.text("");const o=i(this.element).find("#circle-chart");o.text(""),r.append(new At("Income:",G(t[0].value),"green").render()).append(new At("Expense:",G(t[1].value),"purple").render()),o.append(this.renderChart(t[0].value,t[1].value))})}render(){return this.store.user&&(i(this.element).append(new at().render()),setTimeout(()=>this.fetchData(),500)),this.element}}E=new WeakSet,ie=function(){document.addEventListener(B,c(this,E,ft).bind(this))},oe=function(){document.removeEventListener(B,c(this,E,ft).bind(this))},ft=function(){this.fetchData()},u(re,"componentName","statistics");var rt;class Vn{constructor(){d(this,rt,"/transactions")}getAll(e){return $({path:l(this,rt)+`?${new URLSearchParams({orderBy:"desc"})}`,onSuccess:e})}}rt=new WeakMap;const Wn="_transactions_vmmkx_1",Yn={transactions:Wn};function Gn(s){const e=new Date(s),t={month:"short",day:"numeric",year:"numeric"};return e.toLocaleDateString("en-US",t)}const Kn="_slideIn_z2q3q_1",Jn="_income_z2q3q_21",It={"transaction-item":"_transaction-item_z2q3q_1",slideIn:Kn,income:Jn},Xn=`<div class='transaction-item'>\r
	<div>\r
		<div>\r
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' id='transaction-icon'>\r
\r
				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />\r
\r
				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />\r
\r
			</svg>\r
		</div>\r
		<span id='transaction-name'></span>\r
	</div>\r
\r
	<div>\r
		<div>\r
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\r
				<path stroke-linecap='round' stroke-linejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' />\r
			</svg>\r
\r
		</div>\r
		<span id='transaction-date'></span>\r
	</div>\r
\r
	<div>\r
		<span id='transaction-amount'>\r
		</span>\r
	</div>\r
</div>`;class Qn extends m{constructor(e){super(),this.transaction=e}render(){this.element=h.htmlToElement(Xn,[],It);const e=this.transaction.type==="TOP_UP",t=e?"Income":"Expense";return e&&i(this.element).addClass(It.income),i(this.element).find("#transaction-name").text(t),i(this.element).find("#transaction-date").text(Gn(this.transaction.createdAt)),i(this.element).find("#transaction-amount").text(G(this.transaction.amount)),this.element}}const Zn=`<section class='transactions'>
	<component-heading></component-heading>
	<div id='transactions-list'></div>
</section>`;var O,ce,le,U;class ae extends m{constructor(){super();d(this,O);d(this,U,()=>{this.fetchData()});this.store=v.getInstance().state,this.transactionService=new Vn,this.element=h.htmlToElement(Zn,[new ct("Recent transactions")],Yn),c(this,O,ce).call(this)}destroy(){c(this,O,le).call(this)}fetchData(){this.transactionService.getAll(t=>{if(!t)return;const n=this.element.querySelector(wt);n&&n.remove();const r=i(this.element).find("#transactions-list");if(r.text(""),t.length)for(const o of t.transactions)r.append(new Qn(o).render());else r.text("Transactions not found!")})}render(){return this.store.user&&(i(this.element).append(new at().render()),setTimeout(()=>this.fetchData(),500)),this.element}}O=new WeakSet,ce=function(){document.addEventListener(B,l(this,U))},le=function(){document.removeEventListener(B,l(this,U))},U=new WeakMap,u(ae,"componentName","transactions");class ts extends ot{constructor(){super({title:"Home"}),this.store=v.getInstance(),this.store.addObserver(this),this.components={cardInfo:null,transactions:null,statistics:null}}createOrUpdateComponent(e,t){return this.components[t]&&this.components[t].destroy(),this.components[t]=new e,this.components[t]}update(){this.user=this.store.state.user,this.user||i(this.element).html(new fn().render().outerHTML)}render(){const e=[this.createOrUpdateComponent(Vt,"cardInfo"),this.createOrUpdateComponent(ae,"transactions"),this.createOrUpdateComponent(re,"statistics"),Ft,Jt];return this.element=h.htmlToElement(In,e,gn),this.update(),this.element}}const es=[{path:"./",component:ts},{path:"./auth",component:mn},{path:"./about",component:rn}];var j,k,N,b,de,F,he;class ns{constructor(){d(this,b);d(this,j);d(this,k);d(this,N,null);x(this,j,es),x(this,k,null),c(this,b,F).call(this),c(this,b,de).call(this),window.addEventListener("popstate",()=>{c(this,b,F).call(this)})}getCurrentPath(){return window.location.pathname.replace("/bank-js-intensive/","./")}navigate(e){e!==this.getCurrentPath()&&(window.history.pushState({},"",e),c(this,b,F).call(this))}}j=new WeakMap,k=new WeakMap,N=new WeakMap,b=new WeakSet,de=function(){document.addEventListener("click",e=>{const t=e.target.closest("a");t&&(e.preventDefault(),this.navigate(t.href))})},F=function(){const e=this.getCurrentPath();let t=l(this,j).find(n=>n.path===e);t||(t={component:sn}),x(this,k,t),c(this,b,he).call(this)},he=function(){const e=new(l(this,k)).component().render();l(this,N)?i("#content").html("").append(e):(x(this,N,new en({router:this,children:e}).render()),i("#app").append(l(this,N)))};new ns;
