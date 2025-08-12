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

function ActionRegistry(){if(!(this instanceof ActionRegistry))return new ActionRegistry;this.actions=[]}ActionRegistry.prototype.register=function(t){if(!t||"function"!=typeof t.getId)throw new Error("Invalid action: must implement getId method");let n=t.getId();if(this.actions.find(function(t){return t.getId()===n}))throw new Error('Action with ID "'+n+'" is already registered');return this.actions.push(t),this},ActionRegistry.prototype.getActions=function(){return this.actions},ActionRegistry.prototype.getAction=function(n){return this.actions.find(function(t){return t.getId()===n})||null},ActionRegistry.prototype.renderButtons=function(n){this.actions.forEach(function(t){t=t.renderButton();n.appendChild(t)})},module.exports=ActionRegistry;
