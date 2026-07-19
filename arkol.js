!function e(){let t=!1,n,r=!1,a=null,l=null,i=null,o=null,s=JSON.parse(localStorage.getItem("selectedItems"))||[],$={jenichg:"15.05.7826",zakladka:"15.05.2026",ФедорЛекс:"14.09.2026",Карасичек:"14.09.2026","Летуаль (Братва)":"07.10.2025","Четвертая Рота":"05.10.8025"},d=[{name:"Энергетик Рэд (20 шт.)",selector:'a[href*="energydrink3:20"].buy_btn'},{name:"Энергетик Лайт (20 шт.)",selector:'a[href*="energydrink1:20"].buy_btn'},{name:"Энергетик Блэк (20 шт.)",selector:'a[href*="energydrink2:20"].buy_btn'},{name:"Бандана Ямакаси",selector:'a[href*="yamakasi_bandana"].buy_btn'},{name:"Майка Ямакаси",selector:'a[href*="yamakasi_shirt"].buy_btn'},{name:"Штаны Ямакаси",selector:'a[href*="yamakasi_pants"].buy_btn'},{name:"Золотая ксива",selector:'a[href*="zolotaya_ksiva"].buy_btn'},{name:"Кулон Хищника",selector:'a[href*="kulon_%D1%85ishnika"].buy_btn'},{name:"Пушка Хищника",selector:'a[href*="pushka_%D1%85ishnika"].buy_btn'},{name:"Кулон Хищник-2.0",selector:'a[href*="kulon_%D1%85ishnik_2"].buy_btn'}];function c(e){if(!e)return null;let t=e.split(".");if(3!==t.length)return null;let n=parseInt(t[0],10),r=parseInt(t[1],10)-1,a=parseInt(t[2],10);return new Date(a,r,n,23,59,59)}let p={intervals:{navigation:1e3,wheel:2e3,adTimer:100,autoBuy:1e4},selectors:{wheel:".vmmo-wheel",spinButton:"#wheel-button",adContent:'[data-fullscreen-element-name="ad-content"]',wheelLink:"#menu_wheel",activeSlider:'a.slider-link._active[href*="/cabinet/wheel"]',adTimer:'[data-fullscreen-element-name="timeout"]',adCloseButton:'[data-fullscreen-element-name="close-btn"]',cabinetLink:'a[href="/cabinet"]',headerLoginText:".header-login .login-text",menuShopLink:'a[href*="/cabinet/equipment/bratva/from/menu"]',shopPage:".equipment-list, .shop-content"},autoNavigateToWheel:"true"===localStorage.getItem("wheelAutoNavigate")},g={get:e=>document.querySelector(e),getAll:e=>document.querySelectorAll(e),exists:e=>!!document.querySelector(e),hasClass:(e,t)=>e?.classList?.contains(t),click:e=>!!e?.click&&(e.click(),!0),reload:()=>location.reload()};function u(){let e=g.get(p.selectors.headerLoginText);return e&&e.textContent.trim()?e.textContent.trim():null}function b(e){if(!e)return null;let t=$[e.toLowerCase()];return t?c(t):c($[e])}function f(){if(!l||!i)return!1;let e=new Date;return e<=i}function _(){return location.pathname.includes("/cabinet/wheel")}async function h(){if(!s.length){y();return}try{if(!(location.pathname.includes("/cabinet/equipment/bratva")&&!location.pathname.includes("/buy/"))){let e=g.get(p.selectors.menuShopLink);e&&(e.click(),await new Promise(e=>setTimeout(e,3e3)));return}for(let t of s){let n=s.some(e=>e.selector===t.selector);if(!n)continue;let r=g.get(t.selector);if(r&&!r.disabled&&null!==r.offsetParent){let a=window.getComputedStyle(r);if("0.5"!==a.opacity&&!r.disabled){r.click(),await new Promise(e=>setTimeout(e,2e3));let l=g.get(p.selectors.menuShopLink);l&&(l.click(),await new Promise(e=>setTimeout(e,3e3))),await new Promise(e=>setTimeout(e,1e3))}}}}catch(i){let o=g.get(p.selectors.menuShopLink);o&&o.click()}}function x(){if(o&&clearInterval(o),0===s.length){alert("⚠️ Выберите хотя бы один предмет для автопокупки.");return}o=setInterval(h,p.intervals.autoBuy),localStorage.setItem("autoBuyEnabled","true"),m()}function y(){o&&(clearInterval(o),o=null,localStorage.setItem("autoBuyEnabled","false"),m())}function m(){let e=document.getElementById("rental-info"),t=document.getElementById("script-status"),n=document.getElementById("start-btn"),a=document.getElementById("stop-btn"),s=document.getElementById("page-status"),$=document.getElementById("auto-nav-btn"),d=document.getElementById("auto-buy-btn");if(!e||!t||!s)return;let c=f(),g=function e(){if(!i)return"Не активировано";let t=new Date,n=i-t;return n<=0?"Срок истёк":`${Math.floor(n/864e5)}д ${Math.floor(n%864e5/36e5)}ч ${Math.floor(n%36e5/6e4)}м`}(),u=_();if(e.innerHTML=`
      <div><strong>Пользователь:</strong> <span style="color: ${l?"#00ff88":"#ff3c3c"};">${l||"Загрузка..."}</span></div>
      <div><strong>До:</strong> <span>${i?function e(t){if(!(t instanceof Date)||isNaN(t))return"Неверная дата";let n=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();return`${n}.${r}.${a}`}(i):"—"}</span></div>
      <div><strong>Осталось:</strong> <span id="remaining-time">${g}</span></div>
    `,u?(s.innerHTML=`<span style="color: #00ff88;">● На странице колеса</span>`,s.style.color="#00ff88"):(s.innerHTML=`<span style="color: #ffcc00;">⚠️ Перейдите на страницу колеса</span>`,s.style.color="#ffcc00"),!r||u||p.autoNavigateToWheel||C(),r)t.textContent=" АКТИВЕН",t.style.background="rgba(15, 15, 15, 0.8)",t.style.color="#f011d2ff",t.style.border="1px solid rgba(112, 5, 103, 0.4)",t.style.boxShadow="0 4px 12px rgba(0, 255, 136, 0.15)",t.style.borderRadius="12px",t.style.padding="8px 16px",t.style.fontWeight="600",t.style.fontSize="14px",t.style.fontFamily='"Inter", "Segoe UI", sans-serif',n&&(n.disabled=!0,n.style.opacity="0.5",n.style.cursor="not-allowed"),a&&(a.disabled=!1,a.style.opacity="1",a.style.cursor="pointer");else{if(t.textContent="ОСТАНОВЛЕН",t.style.background="rgba(15, 15, 15, 0.8)",t.style.color="#861b0dff",t.style.border="1px solid rgba(235, 29, 14, 0.4)",t.style.boxShadow="0 4px 12px rgba(255, 60, 60, 0.15)",t.style.borderRadius="12px",t.style.padding="8px 16px",t.style.fontWeight="600",t.style.fontSize="14px",t.style.fontFamily='"Inter", "Segoe UI", sans-serif',n){let b=l&&c&&u;n.disabled=!b,n.style.opacity=b?"1":"0.4",n.style.cursor=b?"pointer":"not-allowed"}a&&(a.disabled=!0,a.style.opacity="0.4",a.style.cursor="not-allowed")}if(!c&&i)e.style.borderColor="rgba(255, 60, 60, 0.5)",e.querySelector(".warning-expired")||(e.innerHTML+=`<div class="warning-expired" style="color: #ff3c3c; margin-top: 6px; font-size: 11px;">⚠️ Срок аренды истёк или доступ запрещён</div>`);else{let h=e.querySelector(".warning-expired");h&&h.remove()}$&&($.style.backgroundColor=p.autoNavigateToWheel?"rgba(0, 255, 136, 0.15)":"transparent",$.style.borderColor=p.autoNavigateToWheel?"rgba(0, 255, 136, 0.5)":"rgba(180, 180, 180, 0.5)",$.style.color=p.autoNavigateToWheel?"#00ff88":"#e8e8e8"),d&&(d.style.backgroundColor=o?"rgba(0, 255, 136, 0.15)":"transparent",d.style.borderColor=o?"rgba(0, 255, 136, 0.5)":"rgba(180, 180, 180, 0.5)",d.style.color=o?"#00ff88":"#e8e8e8")}function v(){let e=document.getElementById("wheel-script-menu");if(e){a=e,m();return}(a=document.createElement("div")).id="wheel-script-menu",a.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
      border: 1px solid #333;
      border-radius: 16px;
      padding: 0;
      z-index: 999999;
      font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      min-width: 280px;
      color: #e8e8e8;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset;
      backdrop-filter: blur(20px);
      pointer-events: auto;
      user-select: none;
      touch-action: none;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;let t="true"===localStorage.getItem("wheelMenuCollapsed"),n=localStorage.getItem("wheelMenuPosition");if(n)try{let i=JSON.parse(n);a.style.top=i.top+"px",a.style.left=i.left+"px",a.style.right="auto"}catch($){}let c=document.createElement("div");c.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: move;
      user-select: none;
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      height: 48px;
      line-height: 1;
      padding: 0 20px;
      background: linear-gradient(135deg, #2a2a2a, #1f1f1f);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      backdrop-filter: blur(10px);
    `;let g=document.createElement("span");g.style.cssText=`
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      background: linear-gradient(135deg, #00ff88, #00cc6a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,g.textContent="Меню \uD83D\uDD27";let u=document.createElement("button");u.id="toggle-btn",u.style.cssText=`
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 10px;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
    `,u.innerHTML=t?"▼":"▲",u.addEventListener("mouseenter",()=>{u.style.background="rgba(255, 255, 255, 0.2)",u.style.transform="scale(1.1)"}),u.addEventListener("mouseleave",()=>{u.style.background="rgba(255, 255, 255, 0.1)",u.style.transform="scale(1)"}),c.appendChild(g),c.appendChild(u);let b=document.createElement("div");b.id="menu-content",b.style.cssText=`
      padding: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      ${t?"max-height: 0; opacity: 0; padding: 0 20px;":"max-height: 800px; opacity: 1;"}
    `;let h=document.createElement("div");h.id="rental-info",h.style.cssText=`
      padding: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 1.6;
      color: #d0d0d0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    `;let v=document.createElement("div");v.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #00ff88, #00cc6a, transparent);
    `,h.appendChild(v);let k=document.createElement("div");k.id="page-status",k.style.cssText=`
      padding: 14px 16px;
      border: 1px solid rgba(255, 204, 0, 0.3);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 16px;
      color: #ffcc00;
      background: linear-gradient(135deg, rgba(255, 204, 0, 0.1), rgba(255, 204, 0, 0.05));
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    `;let w=document.createElement("div");w.id="script-status",w.style.cssText=`
      padding: 14px 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 20px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
      letter-spacing: 0.3px;
    `;let L=document.createElement("div");L.style.cssText=`
      padding: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 1.6;
      color: #d0d0d0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    `;let T=document.createElement("div");T.textContent="Выберите предметы для автопокупки:",T.style.cssText=`
      font-weight: 600;
      margin-bottom: 12px;
      color: #ffffff;
    `;let S=document.createElement("div");S.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 150px;
      overflow-y: auto;
    `,d.forEach(e=>{let t=document.createElement("div");t.style.cssText=`
        display: flex;
        align-items: center;
        gap: 8px;
      `;let n=document.createElement("input");n.type="checkbox",n.checked=s.some(t=>t.selector===e.selector),n.style.cssText=`
        width: 16px;
        height: 16px;
        accent-color: #00ff88;
        cursor: pointer;
      `,n.addEventListener("change",()=>{n.checked?s.push(e):0===(s=s.filter(t=>t.selector!==e.selector)).length&&o&&y(),localStorage.setItem("selectedItems",JSON.stringify(s)),s.length>0&&!o&&x(),m()});let r=document.createElement("label");r.textContent=e.name,r.style.cssText=`
        font-size: 12px;
        color: #e8e8e8;
        cursor: pointer;
      `,t.appendChild(n),t.appendChild(r),S.appendChild(t)}),L.appendChild(T),L.appendChild(S);let I=document.createElement("div");I.style.cssText=`
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    `;let z=document.createElement("button");z.id="start-btn",z.innerHTML=`<span style="margin-right: 6px;">▶</span> <span>Запустить</span>`,z.style.cssText=`
      flex: 1;
      padding: 14px 20px;
      background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 204, 106, 0.1));
      color: #00ff88;
      border: 1px solid rgba(0, 255, 136, 0.3);
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.3px;
    `,z.addEventListener("mouseenter",()=>{z.disabled||(z.style.background="linear-gradient(135deg, rgba(0, 255, 136, 0.25), rgba(0, 204, 106, 0.15))",z.style.borderColor="rgba(0, 255, 136, 0.5)",z.style.transform="translateY(-2px)",z.style.boxShadow="0 10px 30px rgba(0, 255, 136, 0.2)")}),z.addEventListener("mouseleave",()=>{z.disabled||(z.style.background="linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 204, 106, 0.1))",z.style.borderColor="rgba(0, 255, 136, 0.3)",z.style.transform="translateY(0)",z.style.boxShadow="none")});let B=document.createElement("button");B.id="stop-btn",B.innerHTML=`<span style="margin-right: 6px;">⏹</span> <span>Остановить</span>`,B.style.cssText=`
      flex: 1;
      padding: 14px 20px;
      background: linear-gradient(135deg, rgba(255, 60, 60, 0.15), rgba(255, 60, 60, 0.1));
      color: #ff3c3c;
      border: 1px solid rgba(255, 60, 60, 0.3);
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.3px;
    `,B.addEventListener("mouseenter",()=>{B.disabled||(B.style.background="linear-gradient(135deg, rgba(255, 60, 60, 0.25), rgba(255, 60, 60, 0.15))",B.style.borderColor="rgba(255, 60, 60, 0.5)",B.style.transform="translateY(-2px)",B.style.boxShadow="0 10px 30px rgba(255, 60, 60, 0.2)")}),B.addEventListener("mouseleave",()=>{B.disabled||(B.style.background="linear-gradient(135deg, rgba(255, 60, 60, 0.15), rgba(255, 60, 60, 0.1))",B.style.borderColor="rgba(255, 60, 60, 0.3)",B.style.transform="translateY(0)",B.style.boxShadow="none")});let W=document.createElement("button");W.id="auto-nav-btn",W.style.cssText=`
      width: 100%;
      padding: 14px 16px;
      border: 1px solid rgba(180, 180, 180, 0.5);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      color: #e8e8e8;
      background: linear-gradient(135deg, rgba(80, 80, 80, 0.2), rgba(50, 50, 50, 0.2));
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: center;
      letter-spacing: 0.2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    `;let M=document.createElement("span");M.innerHTML="\uD83D\uDE80",M.style.fontSize="14px";let H=document.createElement("span");H.textContent="АВТОЗАПУСК",H.style.fontWeight="500",W.appendChild(M),W.appendChild(H),W.addEventListener("click",()=>{p.autoNavigateToWheel=!p.autoNavigateToWheel,localStorage.setItem("wheelAutoNavigate",p.autoNavigateToWheel.toString()),m()}),W.addEventListener("mouseenter",()=>{p.autoNavigateToWheel||(W.style.background="linear-gradient(135deg, rgba(100, 100, 100, 0.3), rgba(70, 70, 70, 0.3))")}),W.addEventListener("mouseleave",()=>{p.autoNavigateToWheel||(W.style.background="linear-gradient(135deg, rgba(80, 80, 80, 0.2), rgba(50, 50, 50, 0.2))")});let N=document.createElement("button");N.id="auto-buy-btn",N.style.cssText=`
      width: 100%;
      padding: 14px 16px;
      border: 1px solid rgba(180, 180, 180, 0.5);
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      color: #e8e8e8;
      background: linear-gradient(135deg, rgba(80, 80, 80, 0.2), rgba(50, 50, 50, 0.2));
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: center;
      letter-spacing: 0.2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    `;let A=document.createElement("span");A.innerHTML="\uD83D\uDED2",A.style.fontSize="14px";let Y=document.createElement("span");Y.textContent="АВТОПОКУПКА",Y.style.fontWeight="500",N.appendChild(A),N.appendChild(Y),N.addEventListener("click",()=>{if(0===s.length){alert("⚠️ Выберите хотя бы один предмет для автопокупки.");return}o?y():x(),m()}),N.addEventListener("mouseenter",()=>{o||(N.style.background="linear-gradient(135deg, rgba(100, 100, 100, 0.3), rgba(70, 70, 70, 0.3))")}),N.addEventListener("mouseleave",()=>{o||(N.style.background="linear-gradient(135deg, rgba(80, 80, 80, 0.2), rgba(50, 50, 50, 0.2))")}),z.addEventListener("click",()=>l?f()?_()||p.autoNavigateToWheel?void(r||(E(),m())):alert("⚠️ Перейдите на страницу колеса."):alert("❌ Срок аренды истёк или вы не имеете доступа."):alert("❌ Ник не определён. Попробуйте перезагрузить страницу.")),B.addEventListener("click",()=>{r&&(C(),m())}),I.appendChild(z),I.appendChild(B),b.appendChild(h),b.appendChild(k),b.appendChild(w),b.appendChild(L),b.appendChild(N),b.appendChild(W),b.appendChild(I),a.appendChild(c),a.appendChild(b),document.body.appendChild(a),m();let q=document.getElementById("menu-content");function j(){let e="0px"===q.style.maxHeight||"0"===q.style.opacity;e?(q.style.maxHeight="800px",q.style.opacity="1",q.style.padding="20px",u.innerHTML="▲",localStorage.setItem("wheelMenuCollapsed","false")):(q.style.maxHeight="0",q.style.opacity="0",q.style.padding="0 20px",u.innerHTML="▼",localStorage.setItem("wheelMenuCollapsed","true"))}u.addEventListener("click",e=>{e.stopPropagation(),j()}),c.addEventListener("dblclick",e=>{e.target!==u&&j()});let D=!1,P=0,F=0;function R(e){if(e.target===u||e.target.closest("button")||e.target.closest("input"))return;e.preventDefault();let t=e.clientX||e.touches?.[0]?.clientX||0,n=e.clientY||e.touches?.[0]?.clientY||0;if(!t||!n)return;let r=a.getBoundingClientRect();P=t-r.left,F=n-r.top,D=!0,a.style.transition="none",document.body.style.userSelect="none",document.addEventListener("mousemove",X,{passive:!1}),document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("mouseup",U,{once:!0}),document.addEventListener("touchend",U,{once:!0})}function X(e){if(!D)return;e.preventDefault();let t=e.clientX||e.touches?.[0]?.clientX||0,n=e.clientY||e.touches?.[0]?.clientY||0;if(!t||!n)return;let r=t-P,l=n-F,i=window.innerWidth-a.offsetWidth,o=window.innerHeight-a.offsetHeight;a.style.left=Math.max(0,Math.min(r,i))+"px",a.style.top=Math.max(0,Math.min(l,o))+"px",a.style.right="auto"}function U(){D=!1,a.style.transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",document.body.style.userSelect="",document.removeEventListener("mousemove",X),document.removeEventListener("touchmove",X),document.removeEventListener("mouseup",U),document.removeEventListener("touchend",U);let e=a.getBoundingClientRect();localStorage.setItem("wheelMenuPosition",JSON.stringify({top:e.top,left:e.left}))}c.addEventListener("mousedown",R),c.addEventListener("touchstart",R,{passive:!1}),t&&(q.style.maxHeight="0",q.style.opacity="0",q.style.padding="0 20px",u.innerHTML="▼")}let k={handleWheel(){if(!r)return;let e=g.get(p.selectors.wheel),t=g.get(p.selectors.spinButton),n=g.exists(p.selectors.adContent);if(!n){if(e&&g.hasClass(e,"_lock")){let a=g.get(p.selectors.wheelLink);setTimeout(()=>g.click(a),0);return}if(t){setTimeout(()=>g.click(t),300);return}}},handleNavigation(){if(!r)return;let e=g.get(p.selectors.activeSlider);if(e){let t=g.get(p.selectors.wheelLink);setTimeout(()=>g.click(t),0)}},handleAdTimer(){if(!r)return;let e=g.get(p.selectors.adTimer),t=g.get(p.selectors.adCloseButton);!e&&t&&setTimeout(()=>g.click(t),0)}},w=function(){this.intervals=new Map,this.start=function(e,t,n){this.stop(e),this.intervals.set(e,setInterval(t,n))},this.stop=function(e){this.intervals.has(e)&&(clearInterval(this.intervals.get(e)),this.intervals.delete(e))},this.stopAll=function(){this.intervals.forEach(e=>clearInterval(e)),this.intervals.clear()}};function E(){!r&&(r=!0,n&&(n.start("navigation",()=>k.handleNavigation(),p.intervals.navigation),n.start("wheel",()=>k.handleWheel(),p.intervals.wheel),n.start("adTimer",()=>k.handleAdTimer(),p.intervals.adTimer)))}function C(){r&&(r=!1,n&&n.stopAll())}window.addEventListener("beforeunload",()=>{n&&n.stopAll()});try{t?n&&n.stopAll():(n=new w,t=!0),r=!1,l=null,i=null,(l=u())&&(i=b(l)),v(),function e(){let t="true"===localStorage.getItem("autoBuyEnabled");t&&s.length>0&&!o?x():(0===s.length||!t)&&o&&y()}(),r&&C(),setInterval(()=>{let e=u(),t=l&&f(),n=e&&b(e);e!==l&&(i=(l=e)?b(l):null,t&&!n&&(C(),y())),function e(){if(p.autoNavigateToWheel&&l&&f()&&!_()){let t=g.get(p.selectors.wheelLink);t&&(g.click(t),setTimeout(()=>{_()&&!r&&(E(),m())},2e3))}}(),document.getElementById("wheel-script-menu")?m():v()},0)}catch(L){n&&n.stopAll()}}();
