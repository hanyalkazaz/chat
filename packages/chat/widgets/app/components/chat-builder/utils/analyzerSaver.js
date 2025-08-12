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

let fs=require("fs").promises,path=require("path");async function saveAnalyzerConfiguration(e,s,a,n={}){var{ensureConfigs:n=!1}=n;if("string"!=typeof e||""===e.trim())return{success:!1,message:"analyzeMessagesBasePath is required."};if("string"!=typeof s||""===s.trim())return{success:!1,message:"analyzerId is required."};if("string"!=typeof a||""===a.trim())return{success:!1,message:"instructionsContent is required."};var r=s.split("::");if(3!==r.length)return{success:!1,message:`Invalid analyzerId format. Expected 'analyzer_name::content_type::instructions_type', but got '${s}'.`};var[r,t,i]=r,o=e=>/^[a-zA-Z0-9_-]+$/.test(e)&&!e.startsWith("_")&&!e.includes(".");if(!o(r))return{success:!1,message:`Invalid analyzer name '${r}'. Names must be alphanumeric, dash, or underscore, cannot start with underscore, and cannot contain dots.`};if(!o(t))return{success:!1,message:`Invalid content type name '${t}'. Names must be alphanumeric, dash, or underscore, cannot start with underscore, and cannot contain dots.`};if(!o(i))return{success:!1,message:`Invalid instructions type name '${i}'. Names must be alphanumeric, dash, or underscore, cannot start with underscore, and cannot contain dots.`};var o=path.join(e,r),e=path.join(o,t),c=path.join(e,i),u=path.join(c,"1.md");try{await fs.mkdir(c,{recursive:!0});var l=`; role: assistant


`+a;return await fs.writeFile(u,l,"utf8"),n&&(await ensureConfigJson(o,r),await ensureConfigJson(e,t),await ensureConfigJson(c,i)),{success:!0,message:`Analyzer configuration '${s}' saved successfully.`}}catch(e){return console.error(`Error saving analyzer configuration '${s}':`,e),{success:!1,message:"Failed to save analyzer configuration: "+e.message}}}async function ensureConfigJson(s,e){var a=path.join(s,"config.json");let n={};try{var r=await fs.readFile(a,"utf8");n=JSON.parse(r)}catch(e){"ENOENT"!==e.code&&console.warn(`Failed to read or parse existing config.json in ${s}: `+e.message),n={}}n.label&&"string"==typeof n.label&&""!==n.label.trim()||(n.label=e.charAt(0).toUpperCase()+e.slice(1)),await fs.writeFile(a,JSON.stringify(n,null,4),"utf8")}module.exports={saveAnalyzerConfiguration:saveAnalyzerConfiguration};
