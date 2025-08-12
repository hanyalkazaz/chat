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

let svg=require("../../../../Dependencies").svg,BaseAction=require("./BaseAction");function CopyAction(t){if(!(this instanceof CopyAction))return new CopyAction(t);BaseAction.call(this,t)}CopyAction.prototype=Object.create(BaseAction.prototype),(CopyAction.prototype.constructor=CopyAction).prototype.getId=function(){return"copy"},CopyAction.prototype.getLabel=function(){return"Copy"},CopyAction.prototype.getIcon=function(){return svg.copy()},CopyAction.prototype.execute=function(){var t,e=this.state.getSelectedMessages(),o=this.state.getSelectedFormat();e&&0!==e.length?(t=this.state.getState("formatter"))?(t=t.formatMessages(e,o),navigator.clipboard.writeText(t).then(()=>{this.state.showNotification("success","Messages copied to clipboard!")}).catch(t=>{console.error("Failed to copy messages:",t),this.state.showNotification("error","Failed to copy messages")})):this.state.showNotification("error","Formatter not available"):this.state.showNotification("error","No messages selected")},CopyAction.create=function(t){return new CopyAction(t)},module.exports=CopyAction;
