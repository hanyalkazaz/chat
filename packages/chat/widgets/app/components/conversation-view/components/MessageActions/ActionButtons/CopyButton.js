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

let svg=require("../../../Dependencies").svg;function render(e,t){let i=svg.copy({style:{cursor:"pointer",transition:"opacity 300ms ease-in-out"}});e.appendChild(i),i.onclick=async()=>{try{i.style.opacity="0",await new Promise(e=>setTimeout(e,300)),await navigator.clipboard.writeText(t.message),i.style.opacity="1";let e=i.innerHTML;i.innerHTML=svg.check().outerHTML,setTimeout(()=>{i.innerHTML=e},1e3)}catch(e){console.error("Copy failed:",e),i.style.opacity="1"}}}module.exports={render:render};
