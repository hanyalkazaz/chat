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

let DropDownMenu=require("../Dependencies").DropDownMenu;function ModelMenu(i,e={}){let{fakeLLMs:r=0,showLabel:o=!1,useDefault:s=!0,includeGitSenseNotes:d=!0,defaultModel:l,onChange:a}=e,c=null;function p(l){var e="GitSense Notes",n=s?i.filter(e=>e.default)[0]:"";let t=l||(n?n.name:""),u="---",o=d?[{value:e,selected:l===e},{value:u}]:[];if(o.unshift({value:">>>Select"}),i.forEach(e=>{e=e.name;e.match(/^---/)?o.push({value:u}):o.push({value:e,selected:e===t})}),r){o.push({value:u});for(let e=1;e<=r;e++){var a="Fake LLM Simulator "+e;o.push({value:a,selected:l===a})}}return o}this.render=function(e){!function n(t,e){let l=p(e);c=new DropDownMenu(l,o?"<strong>Model</strong>: ":"",{dropDownClass:"d-inline",dropDownStyle:{},menuStyle:{marginTop:"10px",width:350,textAlign:"left",zIndex:1e6},callback:(e,l)=>{l.toString().match(/^----/)||(n(t,l),a&&a(l))}});let u=c.create();u.style.display="inline-block";u.style.verticalAlign="middle";t.innerHTML="";t.appendChild(u)}(e,l)},this.getSelected=function(){return c.getSelected()}}module.exports=ModelMenu;
