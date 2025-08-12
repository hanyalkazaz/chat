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

let{MessageUtils,ContextUtils,ChatUtils,CodeBlockUtils}=require("@gitsense/gsc-utils"),MessageService=require("../../services/MessageService"),GS_CHAT_TOOL_TYPE="gs-tool",CONTEXT_LOADER_TOOL="context-loader";async function handleChatIds(e,t,a,s){var o=e.message;if(!o)return!1;var r=CodeBlockUtils.extractCodeBlocks(o,{silent:!0}).blocks;if(r.find(e=>e.type===GS_CHAT_TOOL_TYPE&&e.toolData?.tool===CONTEXT_LOADER_TOOL))return!0;var n,i,l=new Map;let c=new Map;for(n of ChatUtils.getChatMessages(a.chat,e.model))if(MessageUtils.isContextMessage(n.message))try{for(i of ContextUtils.extractContextSections(n.message)){var d=i["chat id"],h=i.path;d&&h&&l.set(d,i)}}catch(e){console.warn("chatIdsHandler: Error parsing context message for validation:",e)}else MessageUtils.isContextItemsOverviewMessage(n.message)&&ContextUtils.extractContextItemsOverviewTableRows(n.message).forEach(e=>{var{chatId:t,gitPath:a}=e;t&&a&&c.set(t,e)});for(var g="ai-search-results"===e.type||e.message.trimStart().startsWith("## AI Search "),p=e.message.trimStart().startsWith("```txt\n # GitSense Chat Tool"),x=/\(chat[-| ]id:*\s*(\d+)\)/gi,C=new Set,f=[];null!==(u=x.exec(o));){var u=parseInt(u[1],10);l.has(u)||c.has(u)||g||p?C.add(u):(console.warn(`chatIdsHandler: Referenced chat-id ${u} not found in context messages.`),f.push(`<li>${u}</li>`))}if(f.length){if(!t)return console.error("chatIdsHandler: Cannot display error, contentBody not available in context."),!1;let e=require("../../utils/DomUtils").h;var r=e.createH3({text:"Invalid Chat ID Reference",style:{color:"#721c24",marginTop:"0",fontSize:"16px"}}),m=e.createParagraph({html:`Error: The following chat IDs referenced in this message were not found in the current chat's context messages:<ul style='margin-top:10px'>${f.join("")}</ul>This may indicate the AI hallucinated these references.`,style:{color:"#721c24"}}),r=e.createDiv({cls:"chat-id-error-container",append:[r,m],style:{marginTop:"5px",marginBottom:"20px",padding:"15px",border:"1px solid #dc3545",borderRadius:"4px",backgroundColor:"#f8d7da"}});return t.appendChild(r),!0}if(0===C.size)return!1;m={tool:CONTEXT_LOADER_TOOL,show:!0,config:{container:{style:{marginTop:"15px"}},selected:{info:{},files:{}},actions:{load:{type:"link",text:"Review, load and add",showCopy:!0,showSave:!1,showAdd:!0},copy:{type:"link"},paste:{type:"link"}},chatIds:[...C],postLoad:{show:!0},showManage:!0}},t=new RegExp("(\n\nAuthored by LLM .+)$"),r=o.match(t),t=o.replace(t,"")+"\n\n```txt\n# GitSense Chat Tool\n\n"+JSON.stringify(m,null,2)+"\n```"+(r?r[0]:"");await MessageService.updateChatMessage(a.widget,e.id,null,t),a.updateChat()}module.exports={handleChatIds:handleChatIds};
