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

let zapSvg=require("../constants.js").zapSvg;function createTableHeader({columns:e,dayBreakGroup:t=""}){var a=document.createElement("thead");let r=document.createElement("tr");var n=document.createElement("th");return n.textContent=t||"",e[0]?.width&&(n.style.width=e[0].width),r.appendChild(n),e.slice(1).forEach(e=>{var t,a;e.visible&&(t=document.createElement("th"),"actions"===e.key?((a=(new DOMParser).parseFromString(zapSvg,"application/xml").children[0]).style.position="relative",a.style.left="-5px",t.innerHTML=a.outerHTML):t.textContent=e.label||"",e.width&&(t.style.width=e.width),t.setAttribute("data-column",e.key),r.appendChild(t))}),a.appendChild(r),a}module.exports={createTableHeader:createTableHeader};
