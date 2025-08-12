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

let{h,svg}=require("../../../Dependencies"),DropDownMenu=require("../../../Dependencies").DropDownMenu,MessageService=require("../../../services/MessageService"),MODEL_CONSTANTS=require("../../../constants/MessageConstants").MODEL_CONSTANTS;function render(e,n,r){var t=svg.note({style:{cursor:"pointer"}});let o=createNoteMenu(n,r);n=h.createDiv({append:[t,o],style:{display:"inline-block",marginLeft:"12px"}});e.appendChild(n),t.addEventListener("click",()=>o.open())}function createNoteMenu(t,{widget:o,chat:a,mainModel:i}){let e=new DropDownMenu([{value:"",selected:!0},{value:"New note above"},{value:"New note below"}],"",{dropDownClass:"",dropDownStyle:{fontSize:"14px"},menuStyle:{left:"-15px",marginTop:"10px",width:"200px",zIndex:1e6,textAlign:"left"},callback:async(e,n)=>{var n=n.match(/above/i)?"before":"after",r=MODEL_CONSTANTS.GITSENSE_NOTES;await MessageService.newChatMessage(o,a.id,"before"==n?t.parent_id:t.id,i,t.role,"Click the pencil icon below to make this note your own",{temperature:null==t.temperature?0:t.temperature,realModel:r===i?void 0:r,stream:!0,refMsgId:t.id,insert:n}),window.location.reload()}});var n=h.createDiv({append:[e.create()],style:{display:"inline-block"}});return n.open=()=>e.open(),n}module.exports={render:render};
