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

function formatBytes(e){var t,n;return"number"!=typeof e||isNaN(e)||0===e?"0 bytes":(t=["bytes","KB","MB","GB"],0===(n=Math.floor(Math.log(e)/Math.log(1024)))?e+" "+t[n]:(e=e/Math.pow(1024,n)).toFixed(e%1==0?0:1)+" "+t[n])}function formatTokens(e){return"number"!=typeof e||isNaN(e)||0===e?"0":e<1e3?""+e:e<1e6?(e/1e3).toFixed(1e4<=e?1:0)+"k":e<1e9?(e/1e6).toFixed(1)+"m":(e/1e9).toFixed(1)+"b"}function createContextSummary(e,t){if(0===e.length)return"";var n=e.filter(e=>"git-blob"===e.metadata?.type),o=e.filter(e=>"git-tree"===e.metadata?.type||"git-ref"===e.metadata?.type),a=e.reduce((e,t)=>e+(t.size||0),0),r=e.reduce((e,t)=>e+(t.tokenCount||0),0);let i="file content"===t?`
**Summary:** ${e.length} file${1===e.length?"":"s"} (${formatBytes(a)}, ${r.toLocaleString()} tokens)

`:`
**Summary:** ${n.length} file${1===n.length?"":"s"} - ${o.length} tree${1===o.length?"":"s"}

`;t=e.slice(0,10);return 0<t.length&&(t.forEach(e=>{e.tokenCount?i+=`- ${e.name} - ${formatBytes(e.size)}, ${e.tokenCount.toLocaleString()} tokens
`:i+=`- ${e.name} - Not analyzed
`}),10<e.length)&&(i+=`- ... and ${e.length-10} more
`),i+"\n"}function formatContentForContext(r,i,s,e){if(0===r.length)return"No content loaded";let l="";return"overview"===s?l+=`## OVERVIEW - ${e.toUpperCase()}
`:l+=`## FILE CONTENT - ${e.toUpperCase()}
`,l=l+createContextSummary(r,s,e)+"\n---Start of Context---\n\n",r.forEach((n,o)=>{if("error"===n.status)l=(l+="#### `"+n.name+"`\n")+"**Error:**\n ```"+n.error+"```\n\n";else{l+="#### `"+n.name+"`\n";let{escapedLineNums:e,escapedContent:t}=escapeCodeBlocks(n.content);var a;i&&(l+=`- Repo: ${n.repo.fullName||"N/A"}
`+`- Path: ${"git-ref"===n.metadata?.type?"<root>":n.path||"N/A"}
`,l="file content"===s?(l+=`- Size: ${formatBytes(n.size)}
`)+`- Tokens: ${n.tokenCount}
`:(a=n.metadata?.type||"unknown",(l+=`- Type: ${"git-blob"===a?"file":"git-tree"===a||"git-ref"===a?"directory":a}
`)+`- Tokens: ${n.tokenCount}
`),l+=`- Chat ID: ${n.chatId}
`,e.length&&(l+=`- Escaped Lines: ${e.join(",")}
`),l+="\n",a=new RegExp("\n## Summary\n"),!t.includes("Component: New Analyzer Chat"))&&t.match(a)&&(t="## Summary\n"+t.split(a).pop()),l+="```"+(n.highlight||"")+"\n"+t+"\n```",o!==r.length-1&&(l+="\n---End of Item---\n")}}),l}function formatFilesForContext(e,a=!0){return e&&0!==e.length?`### Loaded Files (${e.length} files)

`+e.map(e=>{let t=`=== ${e.name} ===
`;var n,o;return a&&(t=(t+=`Path: ${e.path||"N/A"}
`)+`Size: ${formatBytes(e.size)}
`,n=estimateTokenCount(JSON.stringify(e.metadata||{})),o=e.tokenCount||estimateTokenCount(e.content||""),t+=`Tokens: ${o} (content) + ${n} (metadata)
`),t+=`
${e.content||"Content not available"}

`}).join(""):""}function formatSelectedItemsInfo(e,t,a,r="short"){var n="file content"===t?e.filter(e=>"git-blob"===e.type):e;if(0===n.length)return{selectedItems:n,html:"No selected items"};let i=[];if("file content"===t){var t=n.reduce((e,t)=>e+(t.meta?.tokens?.content?.estimate||0),0);i.push({type:"file",total:n.length,tokens:t})}else{let o={file:e.filter(e=>"git-blob"===e.type),tree:e.filter(e=>"git-tree"===e.type||"git-ref"===e.type)};["file","tree"].forEach(e=>{var t,n=o[e];n.length&&(t=n.reduce((e,t)=>e=(e||0)+(t.meta?.tokens?.analysis?.[a.toLowerCase()]?.estimate||0),0),i.push({type:e,total:n.length,tokens:t}))})}let s=[],l=0;return i.forEach(e=>{var{type:e,total:t,tokens:n}=e,o=1===t?"":"s",a=1===n?"":"s";l+=n,"short"===r?s.push(t.toLocaleString()+" "+e+o):s.push(`${t.toLocaleString()} ${e+o} (${n.toLocaleString()} token${a})`)}),"short"===r&&(t=1===l?"":"s",s.push(l.toLocaleString()+" token"+t)),{selectedItems:n,html:s.join(" &middot; ")}}function escapeCodeBlocks(e){let n=[];return{escapedContent:e.replace(/\n$/,"").split("\n").map((e,t)=>(e.trimStart().startsWith("```")&&(e="\\"+e.trimStart(),n.push(t+1)),e)).join("\n"),escapedLineNums:n}}function estimateTokens(e){return e?Math.ceil(e.length/4):0}function formatOverviewTable(e){if(!e||0===e.length)return"## Context Items Overview\n\nNo items selected for overview.\n";var t=`## Context Items Overview

This section provides a summary of the selected items to help the AI understand the context without loading full content. Use this information to assist the user in identifying relevant items for further analysis or full content loading.

`,n=`| Chat ID | Type | Repo | Ref | Path | Purpose | Keywords |
|---|---|---|---|---|---|---|
`;let o="",a=estimateTokens(t)+estimateTokens(n);return e.forEach(e=>{e=`| ${e.id||"N/A"} | ${"git-blob"===e.metadata?.type?"file":"git-tree"===e.metadata?.type||"git-ref"===e.metadata?.type?"directory":"unknown"} | ${e.repo?.fullName?.split("/").pop()||"N/A"} | ${e.repo?.ref||"N/A"} | ${e.path||"N/A"} | ${e.purpose||"No purpose analysis available."} | ${e.keywords?.join(", ")||"None."} |
`;o+=e,a+=estimateTokens(e)}),{tableString:t+`**Summary:** ${e.length} item${1===e.length?"":"s"}. Estimated overview tokens: ${a}

`+"---Start of Overview Items---\n\n"+n+o+"\n---End of Overview Items---\n",estimatedTokens:a}}module.exports={formatBytes:formatBytes,formatTokens:formatTokens,formatContentForContext:formatContentForContext,formatFilesForContext:formatFilesForContext,formatSelectedItemsInfo:formatSelectedItemsInfo,createContextSummary:createContextSummary,estimateTokens:estimateTokens,formatOverviewTable:formatOverviewTable};
