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

let h=require("../../../../devboard/utils/html.js"),createEnhancedBreadcrumbSystem=require("./truncate_breadcrumbs.js").createEnhancedBreadcrumbSystem;function Breadcrumbs(a,e={}){let{lastClickable:u=!1,reverse:l=!1,inSideBySide:s}=e,c=null;function t(){let i=a?[{text:"Home",type:"home"}]:[];var{uuid:e,name:t,lineage:r=[]}=a||{},{}=window.location;r.forEach(e=>{var{type:e,name:t,uuid:r}=e,t={text:t,type:e,uuid:r};l?i.unshift(t):i.push(t)}),e&&(r={text:t,uuid:e},l?i.unshift(r):i.push(r));let n=0;i.forEach(e=>{n+=e.text.length});t=s?80:150,e=createEnhancedBreadcrumbSystem();(i.length?e.truncateBreadcrumbs(i,t):[]).forEach((t,r)=>{let{text:n,truncatedText:a,type:l,uuid:d}=t;t=r===i.length-1,r=t&&!u?600:null;if(!t||u){let e=h.createLink({text:a||n,href:(e=>{var{pathname:t,search:r}=window.location,r=new URLSearchParams(r);if(s){var n=r.get("chats").split(","),a=r.get("models").split(","),i="left"===s?0:1;if(n[i]===d||""===n[i]){if(r.delete("chats"),r.delete("models"),"home"===l)return"/";r.set("chat",d)}else n[i]="home"===l?"":d,a[i]="",r.set("chats",n.join(",")),r.set("models",a.join(","))}else{if("home"===l)return"/";e||r.delete("model"),r.set("chat",d)}return(""===t?"/":t)+"?"+r.toString()})(t),style:{cursor:"pointer",fontWeight:r}});return(c.appendChild(e),t)?void 0:void c.appendChild(h.createSpan({html:"/",style:{marginLeft:"5px",marginRight:"5px"}}))}let e=h.createSpan({text:a||n,style:{fontWeight:r}});c.appendChild(e)})}this.render=function(e){c=e,t()},this.update=function(e){a=e,c.innerHTML="",t()}}module.exports={Breadcrumbs:Breadcrumbs};
