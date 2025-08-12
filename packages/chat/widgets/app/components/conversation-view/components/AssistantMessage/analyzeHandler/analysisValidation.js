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

let{AnalysisBlockUtils,ChatUtils}=require("@gitsense/gsc-utils");function validateAnalysisBlocks(a,n,o){let y=[],d=[];return a.forEach((a,t)=>{var s,i,l=a.analysisMetadata,t=n[t],e=!!a.analysisValidation?.isValid;l&&e&&!!t&&(e=l["Chat ID"],s=l.Path,e&&s&&o.has(e)?(i=AnalysisBlockUtils.validateAnalysisMetadata(l)).isValid?(l={chatId:l["Chat ID"],messageId:l["Message ID"],repo:l.Repository,path:l.Path,summarizedAt:l["Summarized At"],analyzedAt:l["Analyze At"],summary:l.Summary,keyFunctionality:l["Key Functionality"],keywords:l.Keywords,content:a.content,type:a.type,metadata:JSON.parse(t.content)},y.push(l)):d.push({block:a,validation:i}):d.push(`<li>#${e||"N/A"} => ${s||"N/A"} (Invalid Chat ID or Path)</li>`))}),{validAnalysisData:y,invalidAnalysisBlocks:d}}module.exports={validateAnalysisBlocks:validateAnalysisBlocks};
