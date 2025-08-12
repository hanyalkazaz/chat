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

let MessageService=require("../../services/MessageService");async function handleHelpMessage(e,a,r,s){if("help"!==e.type)return!1;var t=e.message;if(!t)return!1;if(t.includes("/?chat="))return!1;var i=r.chat.descendants;let n=new Map;if(i&&0<i.length)for(var l of i)n.set(l.name,l.uuid);let u=t,d=!1;return u=u.replace(/\[([^\]]+)\]\(\{\{uuid-link\}\}\)/g,(e,a)=>{if(0<n.size){var r=n.get(a);if(r)return d=!0,`[${a}](/?chat=${r})`}return e}),!!d&&(await MessageService.updateChatMessage(r.widget,e.id,null,u),r.updateChat(),!0)}module.exports={handleHelpMessage:handleHelpMessage};
