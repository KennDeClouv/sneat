document.addEventListener("DOMContentLoaded",function(e){let a,o,s,r;a=config.colors.textMuted,o=config.colors.headingColor,s=config.colors.borderColor,r=config.fontFamily,config.colors.bodyColor;var t={donut:{series1:"color-mix(in sRGB, "+config.colors.success+" 80%, "+config.colors.black+")",series2:"color-mix(in sRGB, "+config.colors.success+" 90%, "+config.colors.black+")",series3:config.colors.success,series4:"color-mix(in sRGB, "+config.colors.success+" 80%, "+config.colors.cardColor+")",series5:"color-mix(in sRGB, "+config.colors.success+" 60%, "+config.colors.cardColor+")",series6:"color-mix(in sRGB, "+config.colors.success+" 40%, "+config.colors.cardColor+")"}},n=document.querySelector("#leadsReportChart"),t={chart:{height:170,width:150,parentHeightOffset:0,type:"donut"},labels:["36h","56h","16h","32h","56h","16h"],series:[23,35,10,20,35,23],colors:[t.donut.series1,t.donut.series2,t.donut.series3,t.donut.series4,t.donut.series5,t.donut.series6],stroke:{width:0},dataLabels:{enabled:!1,formatter:function(e,a){return parseInt(e)+"%"}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:0}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,value:{fontSize:"1.125rem",fontFamily:r,color:o,fontWeight:500,offsetY:-20,formatter:function(e){return parseInt(e)+"%"}},name:{offsetY:20,fontFamily:r},total:{show:!0,fontSize:".9375rem",fontFamily:r,label:"Total",color:a,formatter:function(e){return"231h"}}}}}}};null!==n&&new ApexCharts(n,t).render();let i=document.querySelector("#horizontalBarChart"),l={chart:{height:360,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"60%",distributed:!0,startingShape:"rounded",borderRadiusApplication:"end",borderRadius:7}},grid:{strokeDashArray:10,borderColor:s,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-35,bottom:-12}},colors:[config.colors.primary,config.colors.info,config.colors.success,config.colors.secondary,config.colors.danger,config.colors.warning],fill:{opacity:[1,1,1,1,1,1]},dataLabels:{enabled:!0,style:{colors:["#fff"],fontWeight:400,fontSize:"13px",fontFamily:r},formatter:function(e,a){return l.labels[a.dataPointIndex]},offsetX:0,dropShadow:{enabled:!1}},labels:["UI Design","UX Design","Music","Animation","React","SEO"],series:[{data:[35,20,14,12,10,9]}],xaxis:{categories:["6","5","4","3","2","1"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a,fontFamily:r,fontSize:"13px"},formatter:function(e){return e+"%"}}},yaxis:{max:35,labels:{style:{colors:[a],fontFamily:r,fontSize:"13px"}}},tooltip:{enabled:!0,style:{fontSize:"12px"},onDatasetHover:{highlightDataSeries:!1},custom:function({series:e,seriesIndex:a,dataPointIndex:s}){return'<div class="px-3 py-2"><span>'+e[a][s]+"%</span></div>"}},legend:{show:!1}};null!==i&&new ApexCharts(i,l).render();n=document.querySelectorAll(".chart-progress");n&&n.forEach(function(e){var a=config.colors[e.dataset.color],s=e.dataset.series,t=e.dataset.progress_variant,a=(a=a,s=s,{chart:{height:"true"==(t=t)?60:55,width:"true"==t?58:45,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==t?"50%":"25%"},dataLabels:{show:"true"==t,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:r,color:o}},track:{background:config.colors_label.secondary}}},stroke:{lineCap:"round"},colors:[a],grid:{padding:{top:"true"==t?-12:-15,bottom:"true"==t?-17:-15,left:"true"==t?-17:-5,right:-15}},series:[s],labels:"true"==t?[""]:["Progress"]});new ApexCharts(e,a).render()});let c=document.querySelector(".datatables-academy-course"),d={angular:'<span class="badge bg-label-danger rounded p-1_5"><i class="icon-base bx bxl-angular icon-28px"></i></span>',figma:'<span class="badge bg-label-warning rounded p-1_5"><i class="icon-base bx bxl-figma icon-28px"></i></span>',react:'<span class="badge bg-label-info rounded p-1_5"><i class="icon-base bx bxl-react icon-28px"></i></span>',art:'<span class="badge bg-label-success rounded p-1_5"><i class="icon-base bx bxs-color icon-28px"></i></span>',fundamentals:'<span class="badge bg-label-primary rounded p-1_5"><i class="icon-base bx bx-diamond icon-28px"></i></span>'};c&&((t=document.createElement("h5")).classList.add("card-title","mb-0","text-nowrap","text-md-start","text-center"),t.innerHTML="Course you are taking",new DataTable(c,{ajax:assetsPath+"json/app-academy-dashboard.json",columns:[{data:"id"},{data:"id",orderable:!1,render:DataTable.render.select()},{data:"course name"},{data:"time"},{data:"progress"},{data:"status"}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,a,s,t){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'}},{targets:2,responsivePriority:2,render:(e,a,s)=>{let{logo:t,course:o,user:r,image:n}=s;s=n?`<img src="${assetsPath}img/avatars/${n}" alt="Avatar" class="rounded-circle">`:`<span class="avatar-initial rounded-circle bg-label-${(s=["success","danger","warning","info","dark","primary","secondary"])[Math.floor(Math.random()*s.length)]}">${(r.match(/\b\w/g)||[]).reduce((e,a)=>e+a.toUpperCase(),"")}</span>`;return`
                  <div class="d-flex align-items-center">
                      <span class="me-4">${d[t]}</span>
                      <div>
                          <a class="text-heading text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">
                              ${o}
                          </a>
                          <div class="d-flex align-items-center mt-1">
                              <div class="avatar-wrapper me-2">
                                  <div class="avatar avatar-xs">
                                      ${s}
                                  </div>
                              </div>
                              <small class="text-nowrap text-heading">${r}</small>
                          </div>
                      </div>
                  </div>
              `}},{targets:3,responsivePriority:3,render:e=>{var e=moment.duration(e),a=Math.floor(e.asHours());return`<span class="fw-medium text-nowrap text-heading">${a+`h ${Math.floor(e.asMinutes())-60*a}m`}</span>`}},{targets:4,render:(e,a,s)=>{var{status:s,number:t}=s;return`
                  <div class="d-flex align-items-center gap-3">
                      <p class="fw-medium mb-0 text-heading">${s}</p>
                      <div class="progress w-100" style="height: 8px;">
                          <div
                              class="progress-bar"
                              style="width: ${s}"
                              aria-valuenow="${s}"
                              aria-valuemin="0"
                              aria-valuemax="100">
                          </div>
                      </div>
                      <small>${t}</small>
                  </div>
              `}},{targets:5,render:(e,a,s)=>{var{user_number:s,note:t,view:o}=s;return`
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="w-px-75 d-flex align-items-center">
                          <i class="icon-base bx bx-user icon-lg me-1_5 text-primary"></i>
                          <span>${s}</span>
                      </div>
                      <div class="w-px-75 d-flex align-items-center">
                          <i class="icon-base bx bx-book-open icon-lg me-1_5 text-info"></i>
                          <span>${t}</span>
                      </div>
                      <div class="w-px-75 d-flex align-items-center">
                          <i class="icon-base bx bx-video icon-lg me-1_5 text-danger"></i>
                          <span>${o}</span>
                      </div>
                  </div>
              `}}],select:{style:"multi",selector:"td:nth-child(2)"},order:[[2,"desc"]],layout:{topStart:{rowClass:"row card-header border-bottom mx-0 px-3 py-2",features:[t]},topEnd:{search:{placeholder:"Search Course",text:"_INPUT_"}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:{paging:{firstLast:!1}}},lengthMenu:[5],language:{paginate:{next:'<i class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-18px"></i>',previous:'<i class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-18px"></i>'}},responsive:{details:{display:DataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().order}}),type:"column",renderer:function(e,a,s){var t,o,r,s=s.map(function(e){return""!==e.title?`<tr data-dt-row="${e.rowIndex}" data-dt-column="${e.columnIndex}">
                      <td>${e.title}:</td>
                      <td>${e.data}</td>
                    </tr>`:""}).join("");return!!s&&((t=document.createElement("div")).classList.add("table-responsive"),o=document.createElement("table"),t.appendChild(o),o.classList.add("table"),o.classList.add("datatables-basic"),(r=document.createElement("tbody")).innerHTML=s,o.appendChild(r),t)}}}})),setTimeout(()=>{[{selector:".dt-search .form-control",classToRemove:"form-control-sm"},{selector:".dt-length .form-select",classToRemove:"form-select-sm"},{selector:".dt-layout-table",classToRemove:"row mt-2"}].forEach(({selector:e,classToRemove:s,classToAdd:t})=>{document.querySelectorAll(e).forEach(a=>{s.split(" ").forEach(e=>a.classList.remove(e)),t&&a.classList.add(t)})})},100)});