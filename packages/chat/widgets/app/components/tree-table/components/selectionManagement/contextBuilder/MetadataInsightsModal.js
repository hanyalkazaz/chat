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

let FilterTable=require("./filters/FilterTable").FilterTable;function createMetadataInsightsModal({onReplaceFilterRules:e,metadataSearch:r}){let o=new Map,l=document.createElement("div"),d=(l.className="metadata-insights-modal-backdrop",document.createElement("div")),c=(d.className="metadata-insights-modal",d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),d.setAttribute("aria-labelledby","insights-modal-title"),d.style.display="none",d.innerHTML=`
        <div class="modal-header">
            <h2 id="insights-modal-title" class="modal-title">Metadata Insights</h2>
            <button class="close-button" aria-label="Close insights modal">&times;</button>
        </div>
        <div class="modal-body">
            <div class="insights-content-area"></div>
        </div>
        <div class="modal-footer" style="justify-content:right;">
            <button class="secondary-button insights-replace-filter-button insights-replace-filter-button-disabled" disabled>Replace Filter Rules with Selected</button>
        </div>
    `,d.querySelector(".insights-content-area")),s=(document.body.appendChild(d),d.querySelector(".insights-replace-filter-button"));var t=d.querySelector(".close-button");function a(){o.clear(),l.parentElement&&(c.classList.remove("insights-grid-cols-2","insights-grid-cols-3"),c.innerHTML="",document.body.removeChild(l)),d.style.display="none",u()}function u(){let e=!1;for(var[t,{selectedIds:a}]of o.entries())if(a&&0<a.length){e=!0;break}e?(s.classList.remove("secondary-button","insights-replace-filter-button-disabled"),s.classList.add("primary-button"),s.disabled=!1):(s.classList.remove("primary-button"),s.classList.add("secondary-button","insights-replace-filter-button-disabled"),s.disabled=!0)}return l.addEventListener("click",e=>{e.target===l&&a()}),t.addEventListener("click",a),s.addEventListener("click",function(){let s=[];for(let[t,{selectedIds:e,dataType:a}]of o.entries())e&&0<e.length&&e.forEach(e=>{s.push({field:t,value:e,dataType:a})});0<s.length&&"function"==typeof e?(e(s),a()):console.warn("No insights selected or onReplaceFilterRules callback not provided.")}),{show:function({analyzerId:i,analyzerSchema:n,fields:e}){c.innerHTML="";var t=e.length;let a,s;t<=4?(a="repeat(2, 1fr)",c.classList.add("insights-grid-cols-2"),c.classList.remove("insights-grid-cols-3")):(a="repeat(3, 1fr)",c.classList.add("insights-grid-cols-3"),c.classList.remove("insights-grid-cols-2")),s=t<=2?"1fr":2<t&&t<=4?"repeat(2, 1fr)":"repeat(auto-fill, calc(50% - 15px))",c.style.display="grid",c.style.gridTemplateColumns=a,c.style.gridTemplateRows=s,c.style.gap="15px",c.style.overflowY="auto",e.forEach(async s=>{var t=document.createElement("div");t.className="insights-table-wrapper",c.appendChild(t);let l=document.createElement("p");l.textContent=`Loading insights for "${s}"...`,l.style.textAlign="center",l.style.padding="20px",t.appendChild(l);try{var e=await r.fetchDistinctValues(i,s,(e,t,a)=>{l.textContent=`Loading insights for "${s}"... (${a} unique values)`}),a=(t.removeChild(l),Array.from(e.entries()).map(([e,t])=>({id:String(e),name:String(null===e?"--NULL--":e),count:t})));new FilterTable({container:t,data:a,nameColumnHeader:s,sortColumn:"count",sortDirection:"desc",onSelectionChange:e=>{o.set(s,{selectedIds:e,dataType:n.properties[s]?.type}),u()},inputPlaceholder:`Filter ${s} values...`})}catch(e){console.error(`Error loading insights for "${s}":`,e),l.textContent=`Failed to load insights for "${s}": `+e.message,l.style.color="red",l.style.fontWeight="bold",l.parentElement||t.appendChild(l)}}),document.body.appendChild(l),d.style.display="flex",u()},hide:a,element:d}}module.exports={createMetadataInsightsModal:createMetadataInsightsModal};
