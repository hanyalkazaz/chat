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

let{ChatUtils,CodeBlockUtils}=require("@gitsense/gsc-utils"),MessageService=require("../../../services/MessageService"),DomUtils=require("../../../utils/DomUtils"),{getToolBlocksByTool,getToolBlockElemsByTool}=require("../../../utils/GSToolBlockUtils"),formatSelectedItemsInfo=require("../../../Dependencies").formatSelectedItemsInfo,SEND_MESSAGE_TOOL=require("./constants").SEND_MESSAGE_TOOL;async function handleSendMessageTool(u,e,g,t){if(!u||null==u.message||!e||!g)return console.error("handleSendMessageTool: Missing required parameters."),!1;if(!g.chat||!g.chat.messages||!g.chat.messages[0])return console.error("handleSendMessageTool: Invalid chat context."),!1;var s=getToolBlocksByTool(u.message,SEND_MESSAGE_TOOL);if(0===s.length)return!1;if(1!==s.length)return console.warn("More than one send message tool defined. Update message to ensure there is only one."),!1;let n=!1;if(!n&&u.kids&&0<u.kids.length&&(console.warn("Unable to process send message tool since this is not the last message."),n=!0),g.renderedMessage[u.id]?.gitsenseChatTools?.sendMessage)return!1;let c=s[0],m=c.toolData,h=m.config||{};var s=h.button?.text||"Send Message",a=getToolBlockElemsByTool(e,SEND_MESSAGE_TOOL);if(1<a.length)return console.warn("There should only be one send message tool element, but we found "+a.length),!1;if(a.length){a=a[0];if(n||m.disabled)return void(a.innerText=m.disabled?m.disabled.text:`[${s} button not available]`);a.parentNode.removeChild(a)}let l=DomUtils.h,o=null;var r,i;let d=null;var S,f,p,T,M,v;try{return r=h.header?l.createH3({text:h.header.text}):null,i=h.information?l.createParagraph({text:h.information.text}):null,d=h.button&&!n?l.createButton({cls:h.button?.className||"btn btn-primary",text:s,style:{marginBottom:"5px"},onclick:async()=>{var t=g.widget,s=g.chat.id,n=u.model,a=u.temperature||0,l="user"===h.message.role?["user","assistant"]:["assistant"];let o=u.id;for(let e=0;e<l.length;e++){var r=l[e],i=r===h.message.role?h.message.content:null,r=await MessageService.newChatMessage(t,s,o,n,r,i,{temperature:a,stream:!0});o=r.id}if(b(),h.updateAfterSend){for(var e in h.updateAfterSend)h[e]=h.updateAfterSend[e];delete h.updateAfterSend;var d=`# GitSense Chat Tool
`+JSON.stringify(m,null,2),d=CodeBlockUtils.updateCodeBlockByIndex(u.message,c.index,d,c.language);await MessageService.updateChatMessage(t,u.id,null,d)}g.updateChat()}}):null,S=n&&h.button?l.createSpan({text:`[${s} button disabled]`}):null,o=(f=h.container,p=r,T=i,M=d,v=S,l.createDiv({cls:"send-message-container",append:[p,T,M,v],style:{textAlign:"left",marginTop:f.marginTop||"10px"}})),e.appendChild(o),!0}catch(e){return console.error("handleSendMessageTool: Error creating UI elements:",e),b(),!1}function b(){o&&o.parentElement&&o.remove(),d=null,o=null}}module.exports={handleSendMessageTool:handleSendMessageTool};
