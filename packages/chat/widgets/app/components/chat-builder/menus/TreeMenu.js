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

let DropDownMenu=require("../Dependencies").DropDownMenu;function TreeMenu(e={}){let{showLabel:i=!1,onChange:s,treeType:p="organize"}=e,a=null;this.render=function(e,t){!function n(o,t){let e=[];if("organize"===p.toLowerCase())e.push(">>>Select organize type"),e.push("Code workspace"),e.push("Code project");else{if("task"!==p.toLowerCase())throw new Error(`Unrecognized tree type '${p}'`);e.push(">>>Select task type"),e.push("Simple coding task"),e.push("Complex coding task")}let l=[];e.forEach(e=>{l.push({value:e,selected:e===t})});a=new DropDownMenu(l,i?"<strong>Relation:</strong> ":"",{dropDownClass:"d-inline",dropDownStyle:{},menuStyle:{marginBottom:"5px",width:200,textAlign:"left",zIndex:1e6},callback:(e,t)=>{t.toString().match(/^----/)||(n(o,t),s&&s(t))}});let r=a.create();r.style.display="inline-block";r.style.verticalAlign="middle";o.innerHTML="";o.appendChild(r)}(e,t)},this.getSelected=function(){return a.getSelected()}}module.exports=TreeMenu;
