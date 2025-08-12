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

let variables=require("./base/variables"),common=require("./base/common"),mainTable=require("./layouts/mainTable"),navTable=require("./layouts/navTable"),selectionManagement=require("./components/selectionManagement");function initStyles(e,a){var n;document.getElementById("tree-table-styles")||(e="nav"===e?navTable:mainTable,(n=document.createElement("style")).id="tree-table-styles",e=Object.entries(e).map(([,e])=>"function"==typeof e?e(a):e).join("\n"),n.textContent=e,document.head.appendChild(n))}module.exports={variables:variables,common:common,mainTable:mainTable,navTable:navTable,selectionManagement:selectionManagement,initStyles:initStyles};
