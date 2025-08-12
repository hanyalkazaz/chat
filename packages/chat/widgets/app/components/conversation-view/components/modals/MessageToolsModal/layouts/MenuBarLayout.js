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

let h=require("../../../../Dependencies").h;function MenuBarLayout(){let r=null;return{render:function(e,n){return(r=r||h.createDiv({className:"gs-menu-bar",style:{display:"flex",gap:"8px",alignItems:"center"}})).innerHTML="",n&&"function"==typeof n.renderButtons&&n.renderButtons(r),e.appendChild(r),r},cleanup:function(){r&&r.parentNode&&(r.parentNode.removeChild(r),r=null)}}}module.exports=MenuBarLayout;
