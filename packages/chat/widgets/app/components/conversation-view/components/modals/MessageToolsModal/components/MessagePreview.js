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

let h=require("../../../../Dependencies").h,MessageFormatter=require("../utils/MessageFormatter");function MessagePreview(e={}){var{messages:e=[],format:t="tagged"}=e;let n=null,a=t,s=[...e];function o(){var e,t,r;n&&(e=n.querySelector(".gs-preview-content"))&&(r=MessageFormatter.formatMessages(s,a),e.textContent=r,e=n.querySelector(".gs-character-count"))&&(t=r.length,r=r.split(/\s+/).filter(Boolean).length,e.textContent=t+` characters · ${r} words`)}return{render:function(e){var t,r,a,s;n=n||(t=h.createDiv({className:"gs-preview-container",style:{flex:1,display:"flex",flexDirection:"column",border:"1px solid #e8e8e8",borderRadius:"4px",overflow:"hidden"}}),r=h.createDiv({className:"gs-preview-header",style:{padding:"8px 12px",borderBottom:"1px solid #e8e8e8",display:"flex",justifyContent:"space-between",alignItems:"center"}}),a=h.createDiv({text:"Preview",style:{fontWeight:500}}),s=h.createDiv({className:"gs-character-count",style:{fontSize:"12px",color:"#666"}}),r.appendChild(a),r.appendChild(s),t.appendChild(r),a=h.createPre({className:"gs-preview-content",style:{margin:0,padding:"12px",flex:1,overflow:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:"12.5px",fontFamily:"monospace",border:"none"}}),t.appendChild(a),t),e.appendChild(n),o()},setMessages:function(e){Array.isArray(e)&&(s=[...e],o())},setFormat:function(e){"tagged"!==e&&"simple"!==e||(a=e,o())},getFormattedText:function(){return MessageFormatter.formatMessages(s,a)},updatePreview:o}}module.exports=MessagePreview;
