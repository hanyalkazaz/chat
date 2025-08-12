/*
 * GitSense Chat - Minified Distribution File
 *
 * This JavaScript file is part of the minified distribution of GitSense Chat.
 * It has been optimized (minified) for performance and efficient delivery.
 *
 * This software is permitted for internal use and modification.
 * Copying for profit or redistribution is strictly not permitted.
 *
 * The Fair License, which formalizes these terms, will be adopted as the official license in the future.
 * Once finalized, the unminified source code will be freely available for internal use for non-
 * commercial purposes.
 *
 * This software may not be used to develop or enhance any product or service that competes
 * directly or indirectly with GitSense Chat without explicit permission.
 *
 * Copyright (c) 2025 GitSense. All rights reserved.
 */

let GSFileUploader=require("@gitsense/file-uploader");function Main(n,e,t={}){let{h:r,svg:i}=e,{minInputHeight:s,inputHeight:d,statusHeight:a}=t,p={},h="Ask {{model}} anything...",g=i.arrowUp(),o=r.createDiv({html:'<svg width="10" height="10"><rect width="10" height="10" fill="black"/></svg>',style:{padding:"3px"}}),u=null,c=null,v=null,x=null;this.getInput=()=>c,this.getWidth=()=>u.getBoundingClientRect().width,this.getInputValue=()=>c.value.trim(),this.getInputFiles=()=>x.getFiles(),this.setInputHeight=e=>{c.style.height=e},this.setEvent=(e,t)=>{p[e]=t},this.showGoBtn=()=>{v.innerHTML=g.outerHTML,v.go=!0},this.showStopBtn=()=>{v.innerHTML=o.outerHTML,v.go=!1},this.reset=()=>{c.value="",x.clearFiles(!0)},this.render=t=>{{let{inputBody:e,filesBody:i}=(e=>{var t=r.createDiv({style:{}}),i=r.createDiv({cls:"gfu-fl",style:{textAlign:"left"}}),o=r.createDiv({style:{height:a+"px"}});return u=r.createDiv({append:[t,i,o],style:{border:"1px solid #666",borderRadius:"10px",minHeight:"100px",overflow:"hidden"}}),e.appendChild(u),{inputBody:t,filesBody:i,statusBody:o}})(t);var o=e,l=(c=r.createTextArea({cls:"gsc-chat-input-box",placeholder:h.replace(/{{model}}/,n),style:{display:"inline-block",width:"100%",height:d+"px",minHeight:s+"px",border:"none",outline:"none",resize:"none",padding:"20px",paddingRight:"40px",verticalAlign:"top",borderRadius:"20px"}}),(v=r.createButton({append:[g],style:{border:"1px solid #666",borderRadius:"50%",backgroundColor:"white",padding:"5px",cursor:"pointer",verticalAlign:"top",position:"relative",top:"12px",left:"-40px"}})).go=!0,r.createDiv({append:[c,v],style:{whiteSpace:"nowrap",overflow:"hidden"}}));o.appendChild(l),(x=new GSFileUploader({dropZone:t,filesContainer:i,onFileChange:e=>{var{action:e,totals:t}=e;"uploaded"!==e&&"removed"!==e||(e=t.totalFiles,i.style.borderTop=0===e?null:"1px solid #aaa")},onError:e=>{var{}=e}})).init(),c.addEventListener("keydown",e=>{"Enter"===e.key&&p.onPressedGo&&v.go&&p.onPressedGo(e)}),v.onclick=()=>{v.go&&p.onPressedGo?p.onPressedGo():!v.go&&p.onPressedStop&&p.onPressedStop()}}},this.updatePlaceholder=e=>{c.placeholder=e},this.resetPlaceholder=()=>{c.placeholder=h.replace(/{{model}}/,n)}}module.exports={Main:Main};
