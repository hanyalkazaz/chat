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

let{h,svg}=require("../../../Dependencies"),DropDownMenu=require("../../../Dependencies").DropDownMenu,MessageService=require("../../../services/MessageService");function render(e,n,i){var a=svg.sync({style:{cursor:"pointer"}});let s=createTryAgainMenu(n,i);n=h.createDiv({append:[a,s],style:{display:"inline-block",marginLeft:"10px"}});e.appendChild(n),a.addEventListener("click",()=>s.open())}function createTryAgainMenu(i,{widget:a,chat:s,mainModel:e}){var n=[{value:"",selected:!0},{value:"Try again"}];1<MessageService.getUniqueModels((2===i.level?s.messages[0]:i).kids).length&&s.main_model!==e&&n.push({value:"Delete response"});let l=new DropDownMenu(n,"",{dropDownClass:"",dropDownStyle:{fontSize:"14px"},menuStyle:{left:"-15px",marginTop:"10px",width:"250px",zIndex:1e6,textAlign:"left"},callback:async(e,n)=>{"Try again"===n?(await MessageService.resetChatMessage(a,i.id),window.location.reload()):"Delete response"===n&&(await MessageService.deleteChatMessage(a,i.id),handleDeleteResponse(i,s))}});e=h.createDiv({append:[l.create()],style:{display:"inline-block"}});return e.open=()=>l.open(),e}function handleDeleteResponse(e,n){var i,a;2<e.level?window.location.reload():({search:e,pathname:i}=window.location,e=new URLSearchParams(e),n.inSideBySide?((a=e.get("models").split(","))["left"===n.inSideBySide?0:1]=n.main_model,e.set("models",a.join(","))):e.delete("model"),window.location.assign((""===i?"/":i)+"?"+e.toString()))}module.exports={render:render};
