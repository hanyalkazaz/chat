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

function normalizeDateTime(e){return e.includes("Z")?e:e+"Z"}function getTimeDifference(e){var t=new Date,e=new Date(normalizeDateTime(e));return Math.floor((t-e)/1e3)}function formatTimeDifference(e){return e<60?e+"s ago":e<3600?Math.floor(e/60)+"m ago":e<86400?Math.floor(e/3600)+"h ago":Math.floor(e/86400)+"d ago"}function formatAge(e){if(!e)return"N/A";try{return formatTimeDifference(getTimeDifference(e))}catch(e){return console.error("Error formatting date:",e),"Invalid date"}}function isValidDateString(e){return!!e&&!!/^\d{4}-\d{2}-\d{2}(T| )\d{2}:\d{2}:\d{2}\.\d{3}Z?$/.test(e)&&(e=new Date(normalizeDateTime(e)))instanceof Date&&!isNaN(e)}function compareDates(e,t){var r,a;if(isValidDateString(e)&&isValidDateString(t))return(r=new Date(normalizeDateTime(e)).getTime())<(a=new Date(normalizeDateTime(t)).getTime())?-1:a<r?1:0;throw new Error(`Invalid date string format. A: ${e} B: ${t})`)}module.exports={formatAge:formatAge,isValidDateString:isValidDateString,compareDates:compareDates,normalizeDateTime:normalizeDateTime,getTimeDifference:getTimeDifference,formatTimeDifference:formatTimeDifference};
