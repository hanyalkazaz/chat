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

function StateProvider(t){if(!(this instanceof StateProvider))return new StateProvider(t);this.listeners={},this.state=Object.assign({selectedMessages:[],selectedFormat:"tagged",loading:!1},t||{})}StateProvider.prototype.subscribe=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var s=this;return function(){s.listeners[t]=s.listeners[t].filter(function(t){return t!==e})}},StateProvider.prototype.setState=function(t,e){this.state[t]=e,this.notify(t)},StateProvider.prototype.getState=function(t){return this.state[t]},StateProvider.prototype.notify=function(e){var s=this;this.listeners[e]&&this.listeners[e].forEach(function(t){t(s.state[e])})},StateProvider.prototype.getSelectedMessages=function(){return this.state.selectedMessages},StateProvider.prototype.setSelectedMessages=function(t){this.setState("selectedMessages",t)},StateProvider.prototype.getSelectedFormat=function(){return this.state.selectedFormat},StateProvider.prototype.setSelectedFormat=function(t){this.setState("selectedFormat",t)},StateProvider.prototype.setLoading=function(t){this.setState("loading",!!t)},StateProvider.prototype.isLoading=function(){return this.state.loading},StateProvider.prototype.showNotification=function(t,e){this.state.notificationManager&&this.state.notificationManager.show(t,e)},module.exports=StateProvider;
