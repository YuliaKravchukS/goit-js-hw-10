import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as y}from"./assets/vendor-651d7991.js";const o=document.querySelector("[data-start]");document.querySelector(".timer");const d=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let a=new Date("2020-01-24"),t=0,u;o.disabled=!0;function g(){t=a.getTime()-new Date().getTime(),t>=0&&(o.disabled=!1,u=setInterval(()=>{o.disabled=!0,d.disabled=!0,t-=1e3,q(k(t)),t<1e3&&clearInterval(u)},1e3))}const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<Date.now()?y.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):o.disabled=!1}};h(d,C);const k=e=>{const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}};function q({days:e,hours:r,minutes:s,seconds:c}){S.textContent=`${n(e)}`,p.textContent=`${n(r)}`,v.textContent=`${n(s)}`,b.textContent=`${n(c)}`}function n(e){return e.toString().padStart(2,"0")}o.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map