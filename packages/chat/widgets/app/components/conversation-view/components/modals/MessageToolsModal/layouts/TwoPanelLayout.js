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

let h=require("../../../../Dependencies").h;function TwoPanelLayout(){let a=null,n=null,t=null,i=null,r=null;return{render:function(e){var l;return a=a||(l=h.createDiv({className:"gs-two-panel-layout",style:{display:"flex",gap:"24px",width:"100%",height:"100%"}}),n=h.createDiv({className:"gs-left-panel",style:{width:"40%",display:"flex",flexDirection:"column",gap:"16px",overflow:"auto"}}),t=h.createDiv({className:"gs-right-panel",style:{width:"60%",display:"flex",flexDirection:"column",gap:"16px"}}),i=h.createDiv({className:"gs-format-selector-container",style:{}}),r=h.createDiv({className:"gs-preview-container",style:{flex:1}}),t.appendChild(i),t.appendChild(r),l.appendChild(n),l.appendChild(t),l),e.appendChild(a),{layout:a,leftPanel:n,rightPanel:t,formatSelectorContainer:i,previewContainer:r}},cleanup:function(){a&&a.parentNode&&(a.parentNode.removeChild(a),a=null,n=null,t=null,i=null,r=null)}}}module.exports=TwoPanelLayout;
