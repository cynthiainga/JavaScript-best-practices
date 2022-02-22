(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap);"]),i.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  font-family: " Poppins ", sans-serif;\n  width: 100%;\n  height: 100vh;\n  background-color: #f8f9fa;\n  font-size: 16px;\n}\n\n.main-container {\n  height: 100%;\n  background-color: #f8f9fa;\n}\n\ninput,\nbutton {\n  border: none;\n  outline: none;\n}\n\ni { cursor: pointer; }\n\n.flex-center {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#tasks {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n\n.task-list {\n  flex-direction: column;\n  border: 2px solid #fff;\n  width: 70%;\n  box-shadow: 3px 3px 7px #73767a;\n  margin-top: 40px;\n  border-radius: 5px;\n}\n\n.task-list .container {\n  flex-direction: row;\n  padding: 10px;\n  width: 100%;\n  border-bottom: 1px solid #c1c4c9;\n  justify-content: space-between;\n}\n\n.checkbox {\n  width: 15px;\n  height: 15px;\n}\n\n.task-list-container {\n  width: 100%;\n}\n\n.task-list #add-task {\n  width: 100%;\n  justify-content: space-between;\n}\n\n.task-list #add-task button {\n  padding: 8px 5px;\n  background-color: transparent;\n}\n\n.task-list-container .task i {\n  font-size: 20px;\n  color: #0f0f0f;\n}\n\n.task-list .container:first-child i {\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.task-list #add-task button i {\n  font-size: 20px;\n  color: #2e2b2b;\n  transform: rotate(90deg);\n}\n\n.task-list #add-task button i:hover { color: #878a8f; }\n\n.task-list #add-task input {\n  flex: 1;\n  font-family: " Roboto ", sans-serif;\n  font-style: italic;\n  font-size: 1rem;\n  font-weight: 300;\n}\n\n.task-list-container .task {\n  width: 100%;\n  justify-content: space-between;\n  padding: 1rem 0.9rem;\n  cursor: move;\n}\n\n.task-list-container .task .left { width: 90%; }\n\n.task-list-container .task .left form {\n  width: 100%;\n  display: flex;\n}\n\n.task-list-container .task .left .edit-task {\n  padding-left: 0.7rem;\n  font-size: 1rem;\n  color: #201f1f;\n  flex: 1;\n  margin-left: 0.5rem;\n}\n\n.title {\n  color: #5c5050;\n  font-size: 1.3rem;\n}\n\n.btn {\n  cursor: pointer;\n  font-size: 1rem;\n  color: #584f4f;\n  background-color: #f8f9fa;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.btn:hover {\n  background-color: #999494;\n  color: #f8f9fa;\n}\n\n.disabled {\n  font-size: 0.6rem;\n  font-style: italic;\n  text-decoration: line-through;\n}\n\n.dragging { border: 2px solid #383c41; }\n\n.focus { background-color: #faf3db; }\n\n.task-list-container .task .right .far { display: none; }\n\n.task-list-container .task.focus .right .far { display: block; }\n\n.task-list-container .task.focus .right .fas { display: none; }\n\n@media screen and (max-width: 500px) {\n  .task-list { width: 95%; }\n\n  .task-list .container { padding-right: 0; }\n\n  .task-list-container .task { padding: 0.8rem 0.5rem; }\n\n  .task-list-container .task .left .edit-task { padding-left: 3px; }\n\n  .fa-sync-alt { padding-right: 10px; }\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,f="".concat(l," ").concat(d);a[l]=d+1;var u=e(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var r={};(()=>{e.d(r,{MJ:()=>S,eT:()=>y});var n=e(379),t=e.n(n),o=e(795),a=e.n(o),i=e(569),s=e.n(i),c=e(565),l=e.n(c),d=e(216),f=e.n(d),u=e(589),p=e.n(u),m=e(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=(()=>{class n{constructor(n){this.description=n,this.index=new Date,this.completed=!1}}const t=document.querySelector("#add-task"),e=JSON.parse(localStorage.getItem("Task-list"))||[];return t.addEventListener("click",(()=>{const t=document.querySelector("#add-task-input").value;if(""===t)return;const r=new n(t);e.push(r),localStorage.setItem("Task-list",JSON.stringify(e))})),e})(),k=()=>g.map((n=>n)),v=document.querySelector(".task-list-container");k().forEach((n=>{v.innerHTML+=`<li class="container task flex-center" draggable="true">\n    <span class="left flex-center">\n     <input id=${n.index} type="checkbox" ${n.completed?"checked":""} class="checkbox"/>\n     <form class="edit-form" action="/">\n       <input \n         data-index-number=${n.index}\n         value='${(n=>n.description)(n)}'\n         class="${n.completed?"edit-task disabled":"edit-task"}" ${n.completed?"disabled":""}\n       >\n     </form>\n    </span>\n    <span class="right">\n      <i class="fas fa-ellipsis-v"></i>\n      <i class="far fa-trash-alt"></i>\n    </span>\n   </li>`}));const b=document.querySelectorAll(".task"),y=document.querySelectorAll(".edit-task"),x=document.querySelectorAll(".edit-form"),w=document.querySelector(".reload"),S=document.querySelectorAll(".checkbox");x.forEach((n=>{n.addEventListener("submit",(n=>{n.preventDefault(),y.forEach((n=>{k().forEach((t=>{n.dataset.indexNumber===t.index&&(t.description=n.value,localStorage.setItem("Task-list",JSON.stringify(k())))}))}))}))})),window.addEventListener("load",(()=>{S.forEach((n=>{n.addEventListener("click",(()=>{y.forEach((t=>{n.id===t.dataset.indexNumber&&k().forEach((t=>{t.index===n.id&&(t.completed=!t.completed,localStorage.setItem("Task-list",JSON.stringify(k())),window.location.reload())}))}))}))})),(()=>{const n=document.querySelector(".task-list-container");document.querySelectorAll(".task").forEach((n=>{n.addEventListener("dragstart",(()=>{n.classList.add("dragging")})),n.addEventListener("dragend",(()=>{n.classList.remove("dragging")}))})),n.addEventListener("dragover",(e=>{e.preventDefault();const r=t(n,e.clientY),o=document.querySelector(".dragging");null===r&&n.appendChild(o),n.insertBefore(o,r)}));const t=(n,t)=>[...n.querySelectorAll(".task:not(.dragging)")].reduce(((n,e)=>{const r=e.getBoundingClientRect(),o=t-r.top-r.height/2;return o<0&&o>n.offset?{offset:o,element:e}:n}),{offset:Number.NEGATIVE_INFINITY}).element})()})),w.addEventListener("click",(()=>{window.location.reload()})),b.forEach((n=>{n.addEventListener("click",(()=>{b.forEach((n=>n.classList.remove("focus"))),n.classList.add("focus")}))})),document.querySelector(".clear-task").addEventListener("click",(()=>{if(k().length>0){const n=k().filter((n=>!0!==n.completed));localStorage.setItem("Task-list",JSON.stringify(n)),window.location.reload()}})),b.forEach((n=>{n.addEventListener("click",(()=>{var t,e;n.classList.contains("focus")&&(t=n.querySelector(".far"),e=n.querySelector(".checkbox").id,t.addEventListener("click",(()=>{const n=k().filter((n=>n.index!==e));localStorage.setItem("Task-list",JSON.stringify(n)),window.location.reload()})))}))}))})()})();