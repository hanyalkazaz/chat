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

let h=require("../../../../Dependencies").h,NotificationManager=require("../utils/NotificationManager");function NotificationArea(){let n=null,i=null;return{render:function(e){return n=n||h.createDiv({className:"gs-notification-area",style:{padding:"0 24px",overflow:"hidden",transition:"height 0.2s ease-in-out"}}),e.appendChild(n),i=new NotificationManager(n)},cleanup:function(){i&&(i.clearAll(),i=null),n&&n.parentNode&&(n.parentNode.removeChild(n),n=null)}}}module.exports=NotificationArea;
