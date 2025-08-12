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

let TreeEditor=require("@gitsense/tree-editor"),{h,s,svg}=require("../Dependencies"),arrayToTree=require("../../tree-table/utils/treeUtils").arrayToTree;function EditChatsTreeModal(e,g,p,t){let u="disabled",a=null;function n(){let i=null,s=null,o=null,l=null;async function c(){var e=i.getChangedNodes();if(e.length){let d=[];e.forEach(e=>{var{id:e,parent_id:t,name:a,order_weight:n,change_type:r}=e;"delete"!==r&&d.push({id:e,parent_id:t,name:a,order_weight:n})}),t(d)}}this.destroy=()=>{i.destroy(),s.parentNode.removeChild(s)},this.render=()=>{o=h.createButton({cls:"btn btn-primary disabled",text:"Save",style:{marginRight:"5px"}});var e=h.createSpan({append:[svg.x()],style:{cursor:"pointer"}}),t=h.createButton({cls:"btn",text:"Cancel",style:{marginRight:"5px"}}),a=h.createDiv({cls:"gs-chat-modal-header",append:[h.createH2({text:"Edit Chats Tree"}),e]}),n=h.createDiv({cls:"gs-chat-modal-body",style:{display:"block",paddingTop:"5px",paddingRight:"30px",height:"calc(50vh)",overflow:"auto"}}),r=(l=n,h.createDiv({cls:"gs-chat-modal-footer",append:[t,o],style:{borderTop:"0px",padding:"15px 15px 25px 15px"}})),a=h.createDiv({cls:"gs-chat-modal-content",append:[a,n,r]});function d(){i.destroy(),s.parentNode.removeChild(s)}s=h.createDiv({cls:"gs-chat-modal",append:[a]}),document.body.appendChild(s),document.addEventListener("mousedown",()=>{isMouseDragging=!1}),document.addEventListener("mousemove",()=>{isMouseDragging=!0}),window.addEventListener("click",e=>{e.target!==s||isMouseDragging||0!==window.getSelection().toString().length||d(),isMouseDragging=!1}),t.onclick=d,e.onclick=d,i=new TreeEditor({container:l,data:[p],defaultExpandedNodeId:g.id,onSave:e=>{var t=i.getChangedNodes();t.length&&o.classList.contains(u)?o.classList.remove(u):0!==t.length||o.classList.contains(u)||o.classList.add(u)}}),o.onclick=c}}this.render=()=>{(a=new n).render()},this.destroy=()=>{a.destroy()}}module.exports=EditChatsTreeModal;
