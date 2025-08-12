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

let addOrUpdateLoadedSelection=require("./loaded/loadedStorage").addOrUpdateLoadedSelection,formatSelectedItemsInfo=require("../../utils/formatterUtils").formatSelectedItemsInfo;function createSelectionInfoRow({state:n,contextBuilderModal:o,onAddContext:l}){var e=document.createElement("div"),t=(e.className="selection-info-row",document.createElement("div"));t.className="selection-info-container";let d=document.createElement("div");d.className="selection-info",d.textContent="No items selected",t.appendChild(d);var i=document.createElement("div");i.className="selection-button-container";let c=document.createElement("button");function a(){var{selectedItems:e,html:t}=formatSelectedItemsInfo(n.getSelectedNodes(),n.selectionOptions.selectedType,n.selectionOptions.selectedOption);return d.innerHTML=t,c.disabled=0===e.length,e}return c.className="action-button review-button",c.textContent="Review",c.setAttribute("aria-label","Review selected items"),i.appendChild(c),e.appendChild(t),e.appendChild(i),c.addEventListener("click",()=>{var e={type:n.selectionOptions.selectedType,option:n.selectionOptions.selectedOption},t=a();0<t.length&&o.show(t,e.type,e.option,"review",{onclickAddDefault:(e,t)=>{l(e,t)}})}),{element:e,update:a}}module.exports={createSelectionInfoRow:createSelectionInfoRow};
