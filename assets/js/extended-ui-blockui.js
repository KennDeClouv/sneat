document.addEventListener("DOMContentLoaded",function(D){let e=document.getElementById("section-block"),c=document.querySelector(".btn-section-block"),s=document.querySelector(".btn-section-block-overlay"),t=document.querySelector(".btn-section-block-spinner"),r=document.querySelector(".btn-section-block-custom"),o=document.querySelector(".btn-section-block-multiple"),l="#section-block",i=document.querySelector("#card-block"),a=document.querySelector(".btn-card-block"),d=document.querySelector(".btn-card-block-overlay"),n=document.querySelector(".btn-card-block-spinner"),v=document.querySelector(".btn-card-block-custom"),k=document.querySelector(".btn-card-block-multiple"),b="#card-block",u=document.querySelector(".form-block"),g=document.querySelector(".btn-form-block"),m=document.querySelector(".btn-form-block-overlay"),w=document.querySelector(".btn-form-block-spinner"),p=document.querySelector(".btn-form-block-custom"),S=document.querySelector(".btn-form-block-multiple"),y=".form-block",x=document.querySelector("#option-block"),L=document.querySelector(".btn-option-block"),C=document.querySelector(".btn-option-block-hourglass"),f=document.querySelector(".btn-option-block-circle"),q=document.querySelector(".btn-option-block-arrows"),E=document.querySelector(".btn-option-block-dots"),H=document.querySelector(".btn-option-block-pulse"),T="#option-block",h=document.querySelector(".btn-page-block"),B=document.querySelector(".btn-page-block-overlay"),z=document.querySelector(".btn-page-block-spinner"),V=document.querySelector(".btn-page-block-custom"),N=document.querySelector(".btn-page-block-multiple"),j=document.querySelector(".remove-btn"),M=document.querySelector(".remove-card-btn"),F=document.querySelector(".remove-form-btn"),A=document.querySelector(".remove-option-btn"),P=document.querySelector(".remove-page-btn");e&&c&&c.addEventListener("click",()=>{Block.circle(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),e&&s&&s.addEventListener("click",()=>{Block.standard(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("white-rgb")+", 0.8)",svgSize:"0px"});var e=document.createElement("div");e.classList.add("spinner-border","text-primary"),e.setAttribute("role","status"),document.querySelector("#section-block .notiflix-block").appendChild(e)}),e&&t&&t.addEventListener("click",()=>{Block.standard(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector("#section-block .notiflix-block").innerHTML=`
          <div class="sk-wave mx-auto">
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
          </div>
        `}),e&&r&&r.addEventListener("click",()=>{Block.standard(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector("#section-block .notiflix-block").innerHTML=`
          <div class="d-flex">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
          </div>
        `});let I,O,G;e&&o&&o.addEventListener("click",()=>{Block.standard(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});var e=document.querySelector("#section-block .notiflix-block");e&&(e.innerHTML=`
            <div class="d-flex justify-content-center">
                <p class="mb-0 text-white">Please wait...</p>
                <div class="sk-wave m-0">
                    <div class="sk-rect sk-wave-rect"></div>
                    <div class="sk-rect sk-wave-rect"></div>
                    <div class="sk-rect sk-wave-rect"></div>
                    <div class="sk-rect sk-wave-rect"></div>
                    <div class="sk-rect sk-wave-rect"></div>
                </div>
            </div>
        `),Block.remove(l,1e3),I=setTimeout(()=>{Block.standard(l,"Almost Done...",{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",messageFontSize:"15px",svgSize:"0px",messageColor:config.colors.white}),Block.remove(l,1e3),O=setTimeout(()=>{Block.standard(l,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)"});var e=document.querySelector("#section-block .notiflix-block");e&&(e.innerHTML='<div class="px-12 py-3 bg-success text-white">Success</div>'),G=setTimeout(()=>{Block.remove(l),setTimeout(()=>{c.classList.remove("disabled"),s.classList.remove("disabled"),t.classList.remove("disabled"),r.classList.remove("disabled"),o.classList.remove("disabled")},500)},1810)},1810)},1610)});let J=[".btn-section-block",".btn-section-block-overlay",".btn-section-block-spinner",".btn-section-block-custom",".btn-section-block-multiple"].map(e=>document.querySelector(e));J.forEach(e=>{e&&e.addEventListener("click",()=>{J.forEach(e=>{e&&e.classList.add("disabled")})})}),j&&j.addEventListener("click",()=>{setTimeout(()=>{document.querySelector(l+" .notiflix-block")?Block.remove(l):alert("No active block to remove.")},400),clearTimeout(I),clearTimeout(O),clearTimeout(G),setTimeout(()=>{c.classList.remove("disabled"),s.classList.remove("disabled"),t.classList.remove("disabled"),r.classList.remove("disabled"),o.classList.remove("disabled")},500)}),i&&a&&a.addEventListener("click",()=>{Block.circle(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),i&&d&&d.addEventListener("click",()=>{Block.standard(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("white-rgb")+", 0.8)",svgSize:"0px"});var e=document.createElement("div");e.classList.add("spinner-border","text-primary"),e.setAttribute("role","status"),document.querySelector("#card-block .notiflix-block").appendChild(e)}),i&&n&&n.addEventListener("click",()=>{Block.standard(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector("#card-block .notiflix-block").innerHTML=`
          <div class="sk-wave mx-auto">
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
          </div>
        `}),i&&v&&v.addEventListener("click",()=>{Block.standard(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector("#card-block .notiflix-block").innerHTML=`
          <div class="d-flex">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
          </div>
        `});let K,Q,R;i&&k&&k.addEventListener("click",()=>{Block.standard(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});var e=document.querySelector("#card-block .notiflix-block");e&&(e.innerHTML=`
            <div class="d-flex justify-content-center">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
            </div>
          `),Block.remove(b,1e3),K=setTimeout(()=>{Block.standard(b,"Almost Done...",{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",messageFontSize:"15px",svgSize:"0px",messageColor:config.colors.white}),Block.remove(b,1e3),Q=setTimeout(()=>{Block.standard(b,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)"});var e=document.querySelector("#card-block .notiflix-block");e&&(e.innerHTML='<div class="px-12 py-3 bg-success text-white">Success</div>'),R=setTimeout(()=>{Block.remove(b)},1610)},1610)},1610)});[".btn-card-block",".btn-card-block-overlay",".btn-card-block-spinner",".btn-card-block-custom",".btn-card-block-multiple"].map(e=>document.querySelector(e)).forEach(e=>{e&&e.addEventListener("click",()=>{M.style.position="relative",M.style.pointerEvents="auto",M.style.zIndex=1074})}),M&&M.addEventListener("click",()=>{setTimeout(()=>{document.querySelector(b+" .notiflix-block")?Block.remove(b):alert("No active block to remove.")},400),clearTimeout(K),clearTimeout(Q),clearTimeout(R)}),x&&L&&L.addEventListener("click",()=>{Block.standard(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),x&&C&&C.addEventListener("click",()=>{Block.hourglass(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),x&&f&&f.addEventListener("click",()=>{Block.circle(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),x&&q&&q.addEventListener("click",()=>{Block.arrows(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),x&&E&&E.addEventListener("click",()=>{Block.dots(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),x&&H&&H.addEventListener("click",()=>{Block.pulse(T,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})});[".btn-option-block",".btn-option-block-overlay",".btn-option-block-spinner",".btn-option-block-custom",".btn-option-block-multiple"].map(e=>document.querySelector(e)).forEach(e=>{e&&e.addEventListener("click",()=>{A.style.position="relative",A.style.pointerEvents="auto",A.style.zIndex=1074})}),A&&A.addEventListener("click",()=>{document.querySelector(T+" .notiflix-block")?Block.remove(T):alert("No active block to remove.")}),h&&h.addEventListener("click",()=>{Loading.circle({backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),B&&B.addEventListener("click",()=>{Loading.standard({backgroundColor:"rgba("+window.Helpers.getCssVar("white-rgb")+", 0.8)",svgSize:"0px"});var e=document.createElement("div");e.classList.add("spinner-border","text-primary"),e.setAttribute("role","status"),document.querySelector(".notiflix-loading").appendChild(e)}),z&&z.addEventListener("click",()=>{Loading.standard({backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector(".notiflix-loading").innerHTML=`
          <div class="sk-wave mx-auto">
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
          </div>
        `}),V&&V.addEventListener("click",()=>{Loading.standard({backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector(".notiflix-loading").innerHTML=`
          <div class="d-flex">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
          </div>
        `});let U,W,X;N&&N.addEventListener("click",()=>{Loading.standard({backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});var e=document.querySelector(".notiflix-loading");e&&(e.innerHTML=`
            <div class="d-flex justify-content-center">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
            </div>
          `),Loading.remove(1e3),U=setTimeout(()=>{Loading.standard("Almost Done...",{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",messageFontSize:"15px",svgSize:"0px",messageColor:config.colors.white}),Loading.remove(1e3),W=setTimeout(()=>{Loading.standard({backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)"});var e=document.querySelector(".notiflix-loading");e&&(e.innerHTML='<div class="px-12 py-3 bg-success text-white">Success</div>'),X=setTimeout(()=>{Loading.remove()},1610)},1610)},1610)});[".btn-page-block",".btn-page-block-overlay",".btn-page-block-spinner",".btn-page-block-custom",".btn-page-block-multiple"].map(e=>document.querySelector(e)).forEach(e=>{e&&e.addEventListener("click",()=>{P.style.position="relative",P.style.pointerEvents="auto",P.style.zIndex=9999})}),P&&P.addEventListener("click",()=>{document.querySelector(".notiflix-loading")?Loading.remove():alert("No active loading to remove."),clearTimeout(U),clearTimeout(W),clearTimeout(X)}),u&&g&&g.addEventListener("click",()=>{Block.circle(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"40px",svgColor:config.colors.white})}),u&&m&&m.addEventListener("click",()=>{Block.standard(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("white-rgb")+", 0.8)",svgSize:"0px"});var e=document.createElement("div");e.classList.add("spinner-border","text-primary"),e.setAttribute("role","status"),document.querySelector(".form-block .notiflix-block").appendChild(e)}),u&&w&&w.addEventListener("click",()=>{Block.standard(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector(".form-block .notiflix-block").innerHTML=`
          <div class="sk-wave mx-auto">
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
              <div class="sk-rect sk-wave-rect"></div>
          </div>
        `}),u&&p&&p.addEventListener("click",()=>{Block.standard(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});document.querySelector(".form-block .notiflix-block").innerHTML=`
          <div class="d-flex">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
          </div>
        `});let Y,Z,$;u&&S&&S.addEventListener("click",()=>{Block.standard(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",svgSize:"0px"});var e=document.querySelector(".form-block .notiflix-block");e&&(e.innerHTML=`
            <div class="d-flex justify-content-center">
              <p class="mb-0 text-white">Please wait...</p>
              <div class="sk-wave m-0">
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
                  <div class="sk-rect sk-wave-rect"></div>
              </div>
            </div>
          `),Block.remove(y,1e3),Y=setTimeout(()=>{Block.standard(y,"Almost Done...",{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)",messageFontSize:"15px",svgSize:"0px",messageColor:config.colors.white}),Block.remove(y,1e3),Z=setTimeout(()=>{Block.standard(y,{backgroundColor:"rgba("+window.Helpers.getCssVar("black-rgb")+", 0.5)"});var e=document.querySelector(".form-block .notiflix-block");e&&(e.innerHTML='<div class="px-12 py-3 bg-success text-white">Success</div>'),$=setTimeout(()=>{Block.remove(y),setTimeout(()=>{g.classList.remove("disabled"),m.classList.remove("disabled"),w.classList.remove("disabled"),p.classList.remove("disabled"),S.classList.remove("disabled")},500)},1810)},1810)},1610)});let _=[".btn-form-block",".btn-form-block-overlay",".btn-form-block-spinner",".btn-form-block-custom",".btn-form-block-multiple"].map(e=>document.querySelector(e));_.forEach(e=>{e&&e.addEventListener("click",()=>{_.forEach(e=>{e&&e.classList.add("disabled")})})}),F&&F.addEventListener("click",()=>{setTimeout(()=>{document.querySelector(y+" .notiflix-block")?Block.remove(y):alert("No active block to remove.")},450),clearTimeout(Y),clearTimeout(Z),clearTimeout($),setTimeout(()=>{g.classList.remove("disabled"),m.classList.remove("disabled"),w.classList.remove("disabled"),p.classList.remove("disabled"),S.classList.remove("disabled")},500)})});