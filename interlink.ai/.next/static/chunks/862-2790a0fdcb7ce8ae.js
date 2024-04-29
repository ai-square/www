"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{6248:function(e,a,s){var l=s(5893),t=s(7294),i=s(3153),d=s.n(i),r=s(5714),n=s(1664),c=s.n(n);a.Z=()=>{let[e,a]=(0,t.useState)([]);return(0,t.useEffect)(()=>{d()()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"newchatModal",className:"modal rbt-modal-box copy-modal fade",tabIndex:"-1",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight light-xl",children:[(0,l.jsx)("div",{className:"section-title text-center mb--30 sal-animate","data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"150",children:(0,l.jsx)("h3",{className:"title mb--0 w-600",children:"Unlock the power of AI"})}),(0,l.jsx)("div",{className:"generator-section",children:(0,l.jsx)("ul",{className:"generator-card-group",children:(0,l.jsx)(r.Z,{})})}),(0,l.jsx)("button",{className:"close-button","data-bs-dismiss":"modal",children:(0,l.jsx)("i",{className:"feather-x"})})]})})}),(0,l.jsx)("div",{id:"likeModal",className:"modal rbt-modal-box like-modal fade",tabIndex:"-1",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight leftside light-xl",children:[(0,l.jsx)("h5",{className:"title",children:"Provide additional feedback"}),(0,l.jsx)("div",{className:"chat-form",children:(0,l.jsx)("div",{className:"border-gradient text-form",children:(0,l.jsx)("textarea",{rows:"6",placeholder:"Send a message..."})})}),(0,l.jsx)("div",{className:"bottom-btn mt--20",children:(0,l.jsx)(c(),{className:"btn-default btn-small round",href:"#",children:"Send Feedback"})}),(0,l.jsx)("button",{className:"close-button","data-bs-dismiss":"modal",children:(0,l.jsx)("i",{className:"feather-x"})})]})})}),(0,l.jsx)("div",{id:"dislikeModal",className:"modal rbt-modal-box dislike-modal fade",tabIndex:"-1",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper top-flashlight leftside light-xl",children:[(0,l.jsx)("h5",{className:"title",children:"Why do you like this response?"}),(0,l.jsxs)("select",{className:"form-select",multiple:!0,"aria-label":"multiple select example",value:e,onChange:e=>{a(Array.from(e.target.selectedOptions,e=>e.value))},children:[(0,l.jsx)("option",{value:"1",children:"Irrelevant"}),(0,l.jsx)("option",{value:"2",children:"Offensive"}),(0,l.jsx)("option",{value:"3",children:"Not Correct"})]}),(0,l.jsxs)("div",{className:"chat-form",children:[(0,l.jsx)("h6",{className:"title",children:"Provide your feedback"}),(0,l.jsx)("div",{className:"border-gradient text-form",children:(0,l.jsx)("textarea",{rows:"6",placeholder:"Send a message..."})})]}),(0,l.jsx)("div",{className:"bottom-btn mt--20",children:(0,l.jsx)(c(),{className:"btn-default btn-small round",href:"#",children:"Send Feedback"})}),(0,l.jsx)("button",{className:"close-button","data-bs-dismiss":"modal",children:(0,l.jsx)("i",{className:"feather-x"})})]})})}),(0,l.jsx)("div",{id:"shareModal",className:"modal rbt-modal-box share-modal fade",tabIndex:"-1",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content wrapper modal-small top-flashlight leftside light-xl",children:[(0,l.jsx)("h5",{className:"title",children:"Share"}),(0,l.jsxs)("ul",{className:"social-icon social-default transparent-with-border mb--20",children:[(0,l.jsx)("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"200",children:(0,l.jsx)(c(),{href:"https://www.facebook.com/",children:(0,l.jsx)("i",{className:"feather-facebook"})})}),(0,l.jsx)("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"300",children:(0,l.jsx)(c(),{href:"https://www.twitter.com",children:(0,l.jsx)("i",{className:"feather-twitter"})})}),(0,l.jsx)("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"400",children:(0,l.jsx)(c(),{href:"https://www.instagram.com/",children:(0,l.jsx)("i",{className:"feather-instagram"})})}),(0,l.jsx)("li",{"data-sal":"slide-up","data-sal-duration":"400","data-sal-delay":"500",children:(0,l.jsx)(c(),{href:"https://www.linkdin.com/",children:(0,l.jsx)("i",{className:"feather-linkedin"})})})]}),(0,l.jsx)("div",{className:"chat-form",children:(0,l.jsxs)("div",{className:"border-gradient text-form d-flex align-items-center",children:[(0,l.jsx)("input",{type:"text",className:"copy-link-input",defaultValue:"https://www.youtube.com/",readOnly:!0}),(0,l.jsx)("button",{className:"btn-default bg-solid-primary",type:"submit",children:"Copy"})]})}),(0,l.jsx)("button",{className:"close-button","data-bs-dismiss":"modal",children:(0,l.jsx)("i",{className:"feather-x"})})]})})})]})}},5714:function(e,a,s){var l=s(5893),t=s(5675),i=s.n(t),d=s(1664),r=s.n(d),n=s(5823),c=s(1163);a.Z=()=>{let e=(0,c.useRouter)(),a=(a,s)=>{a.preventDefault(),e.push(s).then(()=>e.reload())};return(0,l.jsx)(l.Fragment,{children:n&&n.leftPanel.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)(r(),{href:e.link,className:"generator-card ".concat("Coming"===e.badge?"disabled":""),onClick:s=>a(s,e.link),children:(0,l.jsxs)("div",{className:"inner",children:[(0,l.jsxs)("div",{className:"left-align",children:[(0,l.jsx)("div",{className:"img-bar",children:(0,l.jsx)(i(),{src:e.img,width:50,height:50,alt:"AI Generator"})}),(0,l.jsx)("h5",{className:"title",children:e.title})]}),(0,l.jsx)("div",{className:"right-align",children:""!==e.badge?(0,l.jsx)("span",{className:"rainbow-badge-card",children:e.badge}):(0,l.jsx)("div",{className:"icon-bar",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right __web-inspector-hide-shortcut__",children:[(0,l.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,l.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})})]})})},s))})}},9331:function(e,a,s){s.r(a);var l=s(5893);s(7294);var t=s(2444);a.default=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.u,{id:"my-tooltip",className:"custom-tooltip tooltip-inner"}),(0,l.jsxs)("form",{className:"new-chat-form border-gradient",children:[(0,l.jsx)("textarea",{rows:"1",placeholder:"Send a message..."}),(0,l.jsx)("div",{className:"left-icons",children:(0,l.jsx)("div",{title:"Interlink AI",className:"form-icon icon-gpt",children:(0,l.jsx)("i",{className:"feather-aperture"})})}),(0,l.jsxs)("div",{className:"right-icons",children:[(0,l.jsxs)("div",{className:"form-icon icon-plus","data-tooltip-id":"my-tooltip","data-tooltip-content":"Choose File",children:[(0,l.jsx)("input",{type:"file",className:"input-file",name:"myfile",multiple:!0}),(0,l.jsx)("i",{className:"feather-plus-circle"})]}),(0,l.jsx)("a",{className:"form-icon icon-mic","data-tooltip-id":"my-tooltip","data-tooltip-content":"Voice Search",children:(0,l.jsx)("i",{className:"feather-mic"})}),(0,l.jsx)("a",{className:"form-icon icon-send","data-tooltip-id":"my-tooltip","data-tooltip-content":"Send message",children:(0,l.jsx)("i",{className:"feather-send"})})]})]})]})}}]);
//# sourceMappingURL=862-2790a0fdcb7ce8ae.js.map