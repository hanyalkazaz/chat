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

let Menu=require("./AnalyzeMenu");function AnalyzeAnalyzerMenu(e,n={}){let l=n.defaultValue,t=[">>>Select"],a=(e.forEach(e=>{var n;e.label&&e.label!==e.name?(n=e.label+` (${e.name})`,t.push(n),l===e.name&&(l=n)):t.push(e.name)}),null);this.render=e=>((a=new Menu({menuOptions:t,menuWidth:400},n,e)).render(l),a),this.getSelected=()=>a.getSelected(),this.reset=()=>a.reset()}module.exports=AnalyzeAnalyzerMenu;
