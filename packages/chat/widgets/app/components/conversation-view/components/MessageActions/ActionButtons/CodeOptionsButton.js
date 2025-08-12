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

let{h,svg}=require("../../../Dependencies"),DropDownMenu=require("../../../Dependencies").DropDownMenu,MessageModal=require("../../modals/EditMessageModal").MessageModal;function render(e,n,o){var l=svg.code({});let d=createCodeMenu(n,o);n=h.createDiv({append:[l,d],style:{display:"inline-block",marginLeft:"10px",cursor:"pointer"}});e.appendChild(n),l.addEventListener("click",()=>d.open())}function createCodeMenu(o,{widget:l,chat:d,mainModel:a,settings:r}){let e=new DropDownMenu([{value:"",selected:!0},{value:"Show full code"}],"",{dropDownClass:"",dropDownStyle:{fontSize:"14px"},menuStyle:{left:"-15px",marginTop:"10px",width:"200px",zIndex:1e6,textAlign:"left"},callback:(e,n)=>{"Show full code"===n&&new MessageModal(l,o,"show-full-code",()=>{},{chat:d,mainModel:a,models:r.models,fakeLLMs:r.fakeLLMs}).render()}});var n=h.createDiv({append:[e.create()],style:{display:"inline-block"}});return n.open=()=>e.open(),n}module.exports={render:render};
