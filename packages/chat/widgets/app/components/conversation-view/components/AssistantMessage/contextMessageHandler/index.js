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

let{MessageUtils,ContextUtils}=require("@gitsense/gsc-utils"),DomUtils=require("../../../utils/DomUtils"),fileContentHandler=require("./fileContentHandler"),overviewHandler=require("./overviewHandler");async function handleContextMessage(e,t,r,n){if(!(e&&e.message&&t&&DomUtils&&DomUtils.h))return console.error("handleContextMessage: Missing required parameters or DomUtils."),!1;var e=e.message,s=MessageUtils.isContextMessage(e),o=MessageUtils.isContextItemsOverviewMessage(e);if(!s&&!o)return!1;try{if(s){var i=ContextUtils.extractContextSections(e);if(0===i.length)return console.warn("Context message detected, but no context sections could be parsed."),!1;var a=m();_renderContextSummary(a),fileContentHandler.render(a,i,r.md)}else{if(!o)throw new Error("Unrecognized context type");var l=ContextUtils.extractContextItemsOverviewTableRows(e);if(0===l.length)return console.warn("Context items overview  message detected, but no rows were found."),!1;var d=m();_renderContextSummary(d),overviewHandler.render(d,l,r.md)}return!0}catch(e){return console.error("Error handling context message:",e),!(t.innerHTML="<p>Error rendering context message. See console for details.</p>")}function m(){t.innerHTML="";var e=DomUtils.h.createDiv({style:{}});return t.appendChild(e),e}}function _renderContextSummary(e,t=0){var r=DomUtils.h.createH1({text:"Context",style:{marginTop:"0px"}});e.appendChild(r)}module.exports={handleContextMessage:handleContextMessage};
