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

let{CodeBlockUtils,GSToolBlockUtils,JsonUtils}=require("@gitsense/gsc-utils"),handleContextLoaderTool=require("./contextLoaderToolHandler").handleContextLoaderTool,handleSendMessageTool=require("./sendMessageToolHandler").handleSendMessageTool,handleFixPatchTool=require("./fixPatchToolHandler").handleFixPatchTool,handleSearchTool=require("./searchToolHandler").handleSearchTool,{CONTEXT_LOADER_TOOL,SEND_MESSAGE_TOOL,FIX_PATCH_TOOL,SEARCH_TOOL}=require("./constants");async function handleGitSenseChatTools(o,a,l,s){if(!o||null==o.message||!a||!l)return console.error("handleGitSenseChatTools: Missing required parameters."),!1;var e=CodeBlockUtils.extractCodeBlocks(o.message,{silent:!0}).blocks;let t=!1;var n,r=new Set;for(n of e)if(GSToolBlockUtils.isToolBlock(n.content))try{var T=GSToolBlockUtils.parseToolBlock(n.content);if(!T||!T.tool){console.warn("Parsed tool block is missing 'tool' property.",n);continue}var d=T.tool;let e=!1;switch(d){case CONTEXT_LOADER_TOOL:r.has(CONTEXT_LOADER_TOOL)||(e=await handleContextLoaderTool(o,a,l,s),r.add(CONTEXT_LOADER_TOOL));break;case SEND_MESSAGE_TOOL:r.has(SEND_MESSAGE_TOOL)||(e=await handleSendMessageTool(o,a,l,s),r.add(SEND_MESSAGE_TOOL));break;case FIX_PATCH_TOOL:r.has(FIX_PATCH_TOOL)||(e=await handleFixPatchTool(o,a,l,s),r.add(FIX_PATCH_TOOL));break;case SEARCH_TOOL:r.has(SEARCH_TOOL)||(e=await handleSearchTool(o,a,l,s),r.add(SEARCH_TOOL));break;default:console.warn(`handleGitSenseChatTools: Unrecognized tool name '${d}'.`)}e&&(t=!0)}catch(e){0!==JsonUtils.detectJsonComments(n.content).length||e.message.match(/Internal INTEGER IDs/)||e.message.match(/REPLACE/)||console.error("handleGitSenseChatTools: Error processing tool block (index 0):",e)}return t}module.exports={handleGitSenseChatTools:handleGitSenseChatTools};
