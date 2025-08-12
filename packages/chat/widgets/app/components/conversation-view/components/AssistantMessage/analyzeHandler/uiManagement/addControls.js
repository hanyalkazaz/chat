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

let ChatUtils=require("@gitsense/gsc-utils").ChatUtils,DomUtils=require("../../../../utils/DomUtils"),MessageService=require("../../../../services/MessageService"),updateChatAnalysisMessages=require("../../../../Dependencies").updateChatAnalysisMessages,ANALYZE_STATUS_HEADER=require("../constants").ANALYZE_STATUS_HEADER,addErrorElement=require("./elementManagement").addErrorElement;async function addUIControls(s,e,i,t,a,n,r){var l=0!==s.kids.length,d=DomUtils.h.createDiv({cls:"analysis-control-container update-all-analysis-control",style:{margin:"5px 0px 10px 0px",paddingBottom:"5px"}});let o=i[0].type;o.includes("::")||(o+="::file-content::default");let c=DomUtils.h.createButton({cls:`btn ${l?"":"btn-primary"} update-all-analysis-btn`,text:"Save analysis",onclick:async t=>{t.preventDefault();t=DomUtils.h.createSpan({text:"Saving analysis...",style:{border:"1px solid #666",padding:"7px 16px",borderRadius:"5px",fontSize:"14px",fontWeight:500}});c.style.display="none",c.insertAdjacentElement("afterend",t);try{var e=i.map(e=>({chatId:e.chatId,content:e.content,metadata:e.metadata})),a=await updateChatAnalysisMessages(n.widget,o,e)||{};"success"===a.status?(t.textContent="Successfully saved overview"+(1===i.length?"":"s"),r&&(await MessageService.newChatMessage(n.widget,n.chat.id,s.id,s.model,"assistant",ANALYZE_STATUS_HEADER+`

Auto save successful`,{temperature:0,stream:!1}),n.updateChat())):(t.textContent="Save failed: "+a.data,r&&(await MessageService.newChatMessage(n.widget,n.chat.id,s.id,s.model,"assistant",ANALYZE_STATUS_HEADER+`

Auto save failed: `+a.data,{temperature:0,stream:!1}),n.updateChat()))}catch(e){t.textContent="Save All Error: "+e.message,console.error("Error saving all:",e),r&&(await MessageService.newChatMessage(n.widget,n.chat.id,s.id,s.model,"assistant",ANALYZE_STATUS_HEADER+`

Auto save failed: `+e.message,{temperature:0,stream:!1}),n.updateChat())}}});d.appendChild(c),e.appendChild(d),l||(r?c.click():(await MessageService.newChatMessage(n.widget,n.chat.id,s.id,s.model,"assistant",ANALYZE_STATUS_HEADER+`

Analysis successful.`,{temperature:0,stream:!1}),n.updateChat()))}module.exports={addUIControls:addUIControls};
