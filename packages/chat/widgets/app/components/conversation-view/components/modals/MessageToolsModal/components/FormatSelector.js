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

let h=require("../../../../Dependencies").h;function FormatSelector(e={}){let{initialFormat:t="tagged",onChange:d=()=>{}}=e,i=t,a=null;return{render:function(e){a=a||(()=>{var e=h.createDiv({className:"gs-format-selector",style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px"}}),t=h.createH4({text:"Format",style:{margin:"0 0 12px 0",fontSize:"14px"}});e.appendChild(t);let l=h.createDiv({style:{display:"flex",flexDirection:"row",gap:"24px"}});return e.appendChild(l),[{id:"tagged",label:"Tagged (<user>...</user>)"},{id:"simple",label:"Simple (User: ...)"}].forEach(e=>{var t=h.createDiv({style:{display:"flex",alignItems:"center"}});let a=h.createInput({type:"radio",id:"format-"+e.id,name:"format",value:e.id,checked:i===e.id});a.addEventListener("change",()=>{a.checked&&(i=e.id,d(i))});var r=h.createLabel({for:"format-"+e.id,text:e.label,style:{marginLeft:"8px",cursor:"pointer"}});t.appendChild(a),t.appendChild(r),l.appendChild(t)}),e})(),e.appendChild(a)},getSelectedFormat:function(){return i},setSelectedFormat:function(e){"tagged"!==e&&"simple"!==e?console.warn(`Invalid format: ${e}. Using default.`):(i=e,a&&(e=a.querySelector("#format-"+e))&&(e.checked=!0))}}}module.exports=FormatSelector;
