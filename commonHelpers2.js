import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";document.querySelector("button");const n=document.querySelector(".form");n.querySelectorAll('input[type="radio"][name="state"]');n.addEventListener("submit",i);function i(u){u.preventDefault();const e=document.querySelector('input[name="delay"]'),o={value:"",delay:parseInt(e.value),shouldResolve:n.querySelector('input[name="state"]:checked').value};l(o).then(t=>s.success({title:"",message:t})).catch(t=>s.error({title:"",message:t}))}const l=({value:u,delay:e,shouldResolve:r})=>new Promise((o,t)=>{setTimeout(()=>{r==="fulfilled"?o(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)});
//# sourceMappingURL=commonHelpers2.js.map
