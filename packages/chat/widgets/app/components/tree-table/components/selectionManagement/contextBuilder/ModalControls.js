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

let{formatBytes,formatTokens}=require("../../../utils/formatterUtils");function createModalControls({container:t}){var e=t.querySelector(".modal-controls");let r=document.createElement("div");r.className="modal-stats-display";var s=t.querySelector("#include-metadata");let n=t.querySelector(".progress-bar");s&&s.parentElement&&s.parentElement.remove();t=e.querySelector(".progress-container");return t?e.insertBefore(r,t):e.appendChild(r),{isMetadataIncluded:function(){return!0},reset:function(){n.style.width="0%",r.innerHTML=""},updateStats:function(t){t.startTime&&!t.endTime&&new Date;var e=t.contentType?t.contentType.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):"N/A",s=t.contentOption?t.contentOption.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):"N/A";r.innerHTML=`
            <span class="stat-item" style="margin-right: 20px;"><strong>Type:</strong> ${e}</span>
            <span class="stat-item" style="margin-right: 20px;"><strong>Option:</strong> ${s||"N/A"}</span>
            <span class="stat-item" style="margin-right: 20px;"><strong>Items:</strong> ${t.loadedCount} of ${t.totalItems} ${0<t.errorCount?`<span class="stat-error">(${t.errorCount} errors)</span>`:""}</span>
            <span class="stat-item" style="margin-right: 20px;"><strong>Size:</strong> ${formatBytes(t.totalBytes)}</span>
            <span class="stat-item" style="margin-right: 20px;"><strong>Tokens:</strong> ${formatTokens(t.totalTokens)}</span>
        `},progress:{set:function(t){n.style.width=t+"%"}}}}module.exports={createModalControls:createModalControls};
