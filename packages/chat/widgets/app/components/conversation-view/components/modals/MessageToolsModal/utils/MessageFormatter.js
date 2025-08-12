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

let MessageFormatter={formatMessages(e,t="tagged"){return e&&Array.isArray(e)&&0!==e.length?(e=[...e].sort((e,t)=>void 0!==e.position&&void 0!==t.position?e.position-t.position:new Date(e.created_at||0)-new Date(t.created_at||0)),"tagged"!==t&&"simple"===t?this.formatSimple(e):this.formatTagged(e)):""},formatTagged(e){return e.map(e=>{var{role:e,content:t}=e;return`<${e}>
${t}
</${e}>`}).join("\n\n")},formatSimple(e){return e.map(e=>{var{role:e,content:t}=e;return e.charAt(0).toUpperCase()+e.slice(1)+": "+t}).join("\n\n")}};module.exports=MessageFormatter;
