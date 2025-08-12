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

let sortKidsCriteria=require("../constants").sortKidsCriteria,createRow=require("./row/tableRow").createRow,{groupNodesByLatestTimestamp,sortNodes,sortNodesByLatestChild,sortNodesByOrderWeight}=require("../utils/treeUtils");function createTableBody(t){let{data:e,currentPage:r,rowsPerPage:o,decorator:d,handlers:s,columns:a,visualDayBreaks:i=!0,sortRootBy:l="updated_at",sortRootOrder:n="desc"}=t,c=document.createElement("tbody"),p=e.filter(e=>0===e.parent_id);var t=p.filter(e=>"git-repos"===e.type),u=p.filter(e=>"git-repos"!==e.type);let h;h=("order_weight"===l?sortNodesByOrderWeight:sortNodesByLatestChild)(u,n);u=(r-1)*o,t=(p=[...t,...h]).slice(u,u+o);function y(t,r=0,e=null){var o=createRow({node:t,level:r,decorator:d,handlers:s,parentId:e,columns:a,isExpanded:s.state.isNodeExpanded(t.id)});e&&!s.state.isNodeExpanded(e)&&o.classList.add("hidden"),c.appendChild(o),t.kids&&0<t.kids.length&&s.state.isNodeExpanded(t.id)&&sortNodes([...t.kids],sortKidsCriteria).forEach(e=>y(e,r+1,t.id))}if(i){var g,m,f,N,u=groupNodesByLatestTimestamp(t);let e=!1;for([g,m]of Object.entries(u))0<m.length&&(e?((f=document.createElement("tr")).className="group-separator",(N=document.createElement("td")).colSpan=a.filter(e=>e.visible).length,N.textContent=g,N.style.paddingTop="40px",f.appendChild(N),c.appendChild(f),m.forEach(e=>y(e))):(e=!0,m.forEach(e=>y(e))))}else t.forEach(e=>y(e));return c}module.exports={createTableBody:createTableBody};
