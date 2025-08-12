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

let h=require("../../../../Dependencies").h,MessagePositionIndicator=require("./components/MessagePositionIndicator");function MessageDashboard(e={}){let{positionIndicatorOptions:t={}}=e,o=null,a=null;return{initialize:function(e){var n,i;return o=o||(n=h.createDiv({className:"gs-message-dashboard",style:{display:"flex",flexDirection:"column",gap:"8px"}}),i=(a=new MessagePositionIndicator(t)).initialize(),n.appendChild(i),n),e&&e.appendChild(o),o},updateDockingState:function(e){a&&a.updateDockingState(e)},refresh:function(){a&&a.refresh()},update:function(e={}){e.positionIndicatorOptions&&a&&a.update(e.positionIndicatorOptions)},cleanup:function(){a&&(a.cleanup(),a=null),o&&o.parentNode&&o.parentNode.removeChild(o)}}}module.exports=MessageDashboard;
