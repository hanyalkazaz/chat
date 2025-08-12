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

let DomUtils=require("../utils/DomUtils");function renderMessageHeader(e,t,r){var n=e.meta,{type:a,message:s}=t,{}=n||{};return"regular"===a||"notes"===a||"workspace"===a||"project"===a||"task"===a||a.match(/split/)?"":a.match(/^git/)?renderGitHeader(a,t,n,r):s.trimStart().startsWith("# GitSense Chat Analysis")?(n=s+"\n\n### Metadata\n```json\n"+JSON.stringify(t.meta,null,2)+"\n```",r.render(n)):"chat-meta"===a?r.render("### Metadata\n\n```json\n"+JSON.stringify(e.meta,null,2)+"\n```"):"chat-history"===a?r.render("### History\n```json\n"+t.message+"\n```"):""}function renderGitHeader(e,t,r,n){var{highlight:a,path:s,owner:i,name:o}=r||{};return"git-repos"===e?n.render("### Repositories\n"):"git-repo-owner"===e?n.render("### Owner\n`"+i+"`\n"):"git-repo"===e?n.render("### Repository\n`"+o+"`\n"):"git-branch"===e||"git-ref"===e&&r.type.match(/branch/)?n.render("### Branch\n`"+o+"`\n"):"git-tree"===e?n.render("### Directory\n`"+o+"`\n"):"git-blob"===e?n.render("### File\n`"+s+"`\n```"+a+"\n"+t.message+"\n```"):""}function createModelAvatar(e,{isHistory:t=!1}){return DomUtils.h.createDiv({cls:"gs-chat-assistant-message-content-avatar",append:[DomUtils.createModelIcon(e)],style:{marginTop:"40px",display:t?"none":null}})}function createMessageContainer(e,{isHistory:t=!1}){return DomUtils.h.createDiv({cls:"gs-chat-assistant-message-content",style:{marginTop:"40px",display:t?"none":null}})}module.exports={renderMessageHeader:renderMessageHeader,createModelAvatar:createModelAvatar,createMessageContainer:createMessageContainer};
