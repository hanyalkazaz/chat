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

let DomUtils=require("../../../../utils/DomUtils");function renderActionButtons(o){var{isValid:o,onCancel:t,onApply:e}=o,n=DomUtils.h.createDiv({cls:"patch-action-section",style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"20px"}}),t=DomUtils.h.createButton({text:"Cancel",style:{padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"#f5f5f5",cursor:"pointer"},onclick:t}),t=(n.appendChild(t),DomUtils.h.createButton({text:"Apply Patch",style:{padding:"8px 16px",border:"none",borderRadius:"4px",backgroundColor:o?"#4CAF50":"#cccccc",color:"white",cursor:o?"pointer":"not-allowed"},onclick:e,disabled:!o}));return n.appendChild(t),n}module.exports={renderActionButtons:renderActionButtons};
