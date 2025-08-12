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

let{formatContentForContext,formatBytes,formatTokens}=require("../../../utils/formatterUtils");function createPreview({container:t}){let o=t.querySelector(".preview-content"),a=t.querySelector(".preview-stats");return a||((a=document.createElement("div")).className="preview-stats"),{update:function(t,e,a,s){t=formatContentForContext(t,e,a,s),o.textContent=t},updateStats:function(t){var e;a&&(e=t.startTime?((t.endTime||new Date)-t.startTime)/1e3:0,a.innerHTML=`
            <div class="stat-row">
                <span class="stat-label">Files:</span>
                <span class="stat-value">${t.loadedCount} of ${t.totalItems}</span>
                ${0<t.errorCount?`<span class="stat-error">(${t.errorCount} errors)</span>`:""}
            </div>
            <div class="stat-row">
                <span class="stat-label">Size:</span>
                <span class="stat-value">${formatBytes(t.totalBytes)}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Tokens:</span>
                <span class="stat-value">${formatTokens(t.totalTokens)}</span>
            </div>
            ${0<e?`
            <div class="stat-row">
                <span class="stat-label">Time:</span>
                <span class="stat-value">${e.toFixed(2)}s</span>
            </div>`:""}
        `)},scrollToItem:function(a,t){if(a&&t){var s,n,r=t.split("\n");let e=-1;for(let t=0;t<r.length;t++)if(r[t].includes(`=== ${a.name} ===`)||r[t].includes(`#### \`${a.name}\``)){e=t;break}0<=e&&(t=80*e,s=document.createRange(),n=o.firstChild)&&(t=Math.min(t,n.length),s.setStart(n,t),s.setEnd(n,t),(n=window.getSelection()).removeAllRanges(),n.addRange(s),(t=o.querySelector(".line-"+e))?t.scrollIntoView({behavior:"smooth",block:"center"}):o.scrollTop=e/r.length*o.scrollHeight)}},clear:function(){o&&(o.textContent=""),a&&(a.innerHTML="")},element:o}}module.exports={createPreview:createPreview};
