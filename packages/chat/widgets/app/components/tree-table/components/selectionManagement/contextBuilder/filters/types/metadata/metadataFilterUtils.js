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

function buildMetadataSearchQuery(e,a,i){if(!e||!e.analyzerId)return console.warn("MetadataFilterUtils: Cannot build query. Invalid filter state or missing analyzer ID."),null;let o=["profile:meta-search","analyzer:"+e.analyzerId];var t;return a&&0<a.length&&a.length<=500&&0<(t=[...new Set(a.map(e=>e.repo?.fullName).filter(Boolean))]).length&&o.push("repo:"+t.join(",")),a&&0<a.length&&a.length<=500&&0<(t=a.map(e=>e.id)).length&&o.push("chat-id:"+t.join(",")),e.rules.forEach(t=>{let r=getMetadataTypeFromSchema(t.field,i);if(r)if("is_null"===t.operator||"is_not_null"===t.operator)console.warn(`MetadataFilterUtils: Operator "${t.operator}" is not directly supported by profile:meta-search backend syntax. Skipping filter generation for rule:`,t);else if("includes"!==t.operator&&"excludes"!==t.operator||!Array.isArray(t.value)){if(null!=t.value){let e=String(t.value),a="=";"is_not"===t.operator?a="!=":"range"===t.operator&&(n=null!==t.value.min?t.value.min:"",l=null!==t.value.max?t.value.max:"",e=n+":"+l,a="="),"string"===r&&(e.includes(" ")||e.includes(","))&&(e=`"${e}"`),a?o.push(`meta:${t.field}:`+r+a+e):"range"===t.operator&&o.push(`meta:${t.field}:${r}=`+e)}}else{var l,n=t.value.map(e=>{let a=String(e);return"string"===r&&(a.includes(" ")||a.includes(","))&&(a=`"${a}"`),`meta:${t.field}:${r}=`+a});0<n.length&&("includes"===t.operator?o.push(`(${n.join(" OR ")})`):(l=t.value.map(e=>{let a=String(e);return"string"===r&&(a.includes(" ")||a.includes(","))&&(a=`"${a}"`),`meta:${t.field}:${r}!=`+a}),o.push(`(${l.join(" AND ")})`)))}else console.warn(`MetadataFilterUtils: Could not determine data type for field "${t.field}" from schema. Skipping filter generation for rule:`,t)}),o.join(" ")}function getMetadataTypeFromSchema(e,a){return a&&a.properties&&a.properties[e]?a.properties[e].type:(console.warn(`MetadataFilterUtils: Schema or field "${e}" not found in schema to determine type.`),null)}module.exports={buildMetadataSearchQuery:buildMetadataSearchQuery,getMetadataTypeFromSchema:getMetadataTypeFromSchema};
