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

let DomUtils={h:{createDiv:e=>{let r=document.createElement("div");return e.cls&&(r.className=e.cls),e.style&&Object.assign(r.style,e.style),e.text&&(r.textContent=e.text),e.append&&e.append.forEach(e=>r.appendChild(e)),e.id&&(r.id=e.id),r}}};function addErrorElement(e,r){var t;e?"string"!=typeof r||""===r.trim()?console.warn("addErrorElement: errorMessage is empty or invalid."):((t=DomUtils.h.createDiv({cls:"analyzer-error-container",style:{backgroundColor:"#F8D7DA",border:"1px solid #F5C6CB",color:"#721C24",padding:"10px",borderRadius:"4px",marginTop:"15px",marginBottom:"10px",wordBreak:"break-word"}})).innerHTML=r,e.appendChild(t)):console.error("addErrorElement: parentElement is null or undefined.")}module.exports={addErrorElement:addErrorElement};
