import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as u}from"./assets/vendor-651d7991.js";document.querySelector("button");const s=document.querySelector(".form");s.querySelectorAll('input[type="radio"][name="state"]');s.addEventListener("submit",i);function i(e){e.preventDefault();const o=document.querySelector('input[name="delay"]'),n={value:"",delay:parseInt(o.value),shouldResolve:document.querySelector('input[type="radio"][name="state"]:checked').value};l(n).then(t=>{u.success({title:"",message:t})}).catch(t=>{u.error({title:"2",message:t})})}const l=({value:e,delay:o,shouldResolve:r})=>new Promise((n,t)=>{setTimeout(()=>{r==="fulfilled"?(e=`✅ Fulfilled promise in ${o}ms`,n(e)):t(e)},o)});
//# sourceMappingURL=commonHelpers2.js.map