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

let CodeBlockUtils=require("@gitsense/gsc-utils").CodeBlockUtils;function processAnalysisBlocks(a,t){var e=CodeBlockUtils.extractCodeBlocks(a,{silent:!0}).blocks,l=[],n=[];let o=null;for(let s=0;s<e.length;s+=2){var i=e[s];if(!i.content.trimStart().startsWith("# GitSense Chat Analysis")){t&&(o=`Analysis block #${s} does not start with the "# GitSense Chat Analysis" header`);break}l.push(i);var r=e[s+1];if(!r){t?o=`No analysis metadata found for analysis block (index ${s}).`:n.push(null);break}if("json"!==r.language){t?o=`Analysis metadata block for "${i.overviewMetadata?.Path}" has invalid language "${r.language}". Expected "json".`:n.push(null);break}try{JSON.parse(r.content.trim()),n.push(r)}catch(a){r=i.overviewMetadata?.Path||"Unknown Path";if(o=`The analysis metadata block for "${r}" contains an invalid JSON: `+a.message,t||e[s+2])break;return n.push(null),{analysisBlocks:l,analysisMetadataBlocks:n,error:null}}}return{analysisBlocks:l,analysisMetadataBlocks:n,error:o=t&&0===l.length?"Analysis stopped without producing any data":o}}module.exports={processAnalysisBlocks:processAnalysisBlocks};
