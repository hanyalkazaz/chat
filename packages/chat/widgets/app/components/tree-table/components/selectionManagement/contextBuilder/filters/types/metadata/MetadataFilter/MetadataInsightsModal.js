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

function createMetadataInsightsModal({chatApi:l,contextBuilderTable:o,metadataSearch:s}){let n=document.createElement("div");function e(){n.style.display="none"}return n.className="metadata-insights-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby","insights-modal-title"),n.style.display="none",n.innerHTML=`
        <div class="modal-header">
            <h2 id="insights-modal-title" class="modal-title">Metadata Insights</h2>
            <button class="close-button" aria-label="Close insights modal">&times;</button>
        </div>
        <div class="modal-body">
            <p>Insights content will go here...</p>
            <div class="insights-content-area"></div>
        </div>
    `,document.body.appendChild(n),n.querySelector(".close-button").addEventListener("click",e),{show:function({analyzerId:e,analyzerSchema:t,fields:a}){console.log("MetadataInsightsModal: Showing modal with parameters:"),console.log("  analyzerId:",e),console.log("  analyzerSchema:",t),console.log("  fields:",a),console.log("  chatApi (from constructor):",l),console.log("  contextBuilderTable (from constructor):",o),console.log("  metadataSearch (from constructor):",s),n.style.display="flex"},hide:e,element:n}}module.exports={createMetadataInsightsModal:createMetadataInsightsModal};
