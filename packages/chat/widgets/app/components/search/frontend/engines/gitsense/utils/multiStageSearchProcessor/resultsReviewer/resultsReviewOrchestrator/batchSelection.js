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

let ChatUtils=require("@gitsense/gsc-utils").ChatUtils,{TOKEN_LIMIT_TINY_OVERVIEWS_STAGE,TOKEN_LIMIT_SHORT_OVERVIEWS_STAGE,TOKEN_LIMIT_DIRECT_SNIPPETS_STAGE,TOKEN_LIMIT_META_SEARCH_STAGE}=require("./constants");function selectBatchForReview(e,t,s,n,a,r=[]){var i=[];let o=0;var _=new Set;let c=new Set;for(let t in s)Array.isArray(s[t])&&s[t].forEach(e=>{c.add(t+"-"+e)});var l,u,m=e.filter(e=>!!("tiny-overviews"===t&&e.tiny_overview||"short-overviews"===t&&e.short_overview||"direct-snippets"===t&&e.direct_snippets&&0<e.direct_snippets.length||"meta-search"===t&&e.extracted_metadata_fields)),e=m.length,d=[],h=new Set;for(let t of r){var v=t.source_type+"-"+t.id,f=m.some(e=>e.source_type===t.source_type&&e.id===t.id),p=c.has(v);!f||p||h.has(v)||(d.push(t),h.add(v))}for(l of m){var g=l.source_type+"-"+l.id;c.has(g)||h.has(g)||(d.push(l),h.add(g))}for(u of d){var I=u.source_type+"-"+u.id;if(!_.has(I)){var w=estimateItemTokenCount(u,t,a);if(!(o+w<=n))break;i.push(u),o+=w,_.add(I)}}return i.sort((e,t)=>void 0===e.row_num?1:void 0===t.row_num?-1:e.row_num-t.row_num),{batchItems:i,totalItemsInStage:e,batchTokenCount:o}}function findMessageInRawResults(e,t){var s=e.source_type;let n=e.id;var a,e=t[s];if(e){for(a of Array.isArray(e)?e:[e])if(a.results&&a.results.messages){var r=a.results.messages.find(e=>e.messages_id===n);if(r)return r}else console.warn(`findMessageInRawResults: Result set for type '${s}' is missing 'results.messages'.`,a);console.warn(`findMessageInRawResults: Message with ID '${n}' not found in raw results for type '${s}'.`)}return null}function estimateItemTokenCount(t,e,s){let n=0;if(n+=50,"tiny-overviews"===e){let e=t.tiny_overview?.messages_content;e||(a=findMessageInRawResults(t,s),e=a?.messages_content),n+=e?.length?Math.ceil(e.length/4):100}else if("short-overviews"===e){let e=t.short_overview?.messages_content;e||(a=findMessageInRawResults(t,s),e=a?.messages_content),n+=e?.length?Math.ceil(e.length/4):200}else{var a;"direct-snippets"===e&&(t.direct_snippets||t.source_type&&s[t.source_type])?(0===(a=t.direct_snippets||[]).length&&t.source_type&&s[t.source_type]&&(s=findMessageInRawResults(t,s))&&a.push(s),a.forEach(e=>{e=e.messages_content_snippet||e.messages_content;n=n+(e?.length?Math.ceil(e.length/4):50)+30})):"meta-search"===e&&(s=JSON.stringify(t.extracted_metadata_fields||{}),n+=Math.ceil(s.length/4)+100)}return n}function formatReviewBatch(e,r){let i="";return e.forEach(e=>{i=(i=(i=(i=(i=(i=(i=i+`### Search Result Item: ${e.file_path||e.git_repo||e.chat_id}

`+`#### Common Information
`)+`- **Chat ID:** ${e.chat_id}
`)+`- **Path:** ${e.file_path||"N/A"}
`)+`- **Repo:** ${e.git_repo||"N/A"}
`)+`- **Type:** ${e.source_type}
`)+`- **Item ID:** ${e.id}
`)+`- **FTS Rank:** ${void 0!==e.fts_rank?e.fts_rank:"N/A"}

`+`#### Tiny Overview
`;let t=e.tiny_overview?.messages_content;t||(n=findMessageInRawResults(e,r),t=n?.messages_content),t?(n=t.match(/^## Summary\n([\s\S]*?)(?=\n## |\n---|$)/m),a=t.match(/^## Keywords\n([\s\S]*?)(?=\n## |\n---|$)/m),n=n?n[1].trim():"No summary available.",a=a?a[1].trim():"No keywords available.",i=i+`**Summary:** ${n}

`+`**Keywords:** ${a}

`):i+=`Content Not Found

`,i+=`#### Short Overview
`;let s=e.short_overview?.messages_content;s||(n=findMessageInRawResults(e,r),s=n?.messages_content),s?i+=s+`

`:i+=`Content Not Found

`,i+=`#### Snippets Overview
`;var n,a=e.direct_snippets||[];0===a.length&&e.source_type&&r[e.source_type]&&(n=findMessageInRawResults(e,r))&&a.push(n),0<a.length?a.forEach((e,t)=>{var s=e.messages_content_snippet||e.messages_content||"No snippet available.",e=void 0!==e.fts_rank?e.fts_rank:"N/A";i=i+`**Snippet ${t+1} (Rank: ${e}):**
`+`\`\`\`
${s}
\`\`\`

`}):i+=`Snippets Not Found

`,i=(i+=`#### Extracted Metadata
`)+(e.extracted_metadata_fields?`\`\`\`json
${JSON.stringify(e.extracted_metadata_fields,null,2)}
\`\`\`

`:`Not Available

`)+`---

`}),i.trim()}function getTokenLimitForStage(e){switch(e){case"tiny-overviews":return TOKEN_LIMIT_TINY_OVERVIEWS_STAGE;case"short-overviews":return TOKEN_LIMIT_SHORT_OVERVIEWS_STAGE;case"meta-search":return TOKEN_LIMIT_META_SEARCH_STAGE;case"direct-snippets":return TOKEN_LIMIT_DIRECT_SNIPPETS_STAGE;default:return console.error(`Unknown review stage: ${e}. Returning 0 token limit.`),0}}module.exports={selectBatchForReview:selectBatchForReview,estimateItemTokenCount:estimateItemTokenCount,formatReviewBatch:formatReviewBatch,getTokenLimitForStage:getTokenLimitForStage};
