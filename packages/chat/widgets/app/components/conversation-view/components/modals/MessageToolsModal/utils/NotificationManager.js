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

function NotificationManager(t){if(!(this instanceof NotificationManager))return new NotificationManager(t);this.container=t,this.activeNotifications=[]}NotificationManager.prototype.show=function(t,e,i){var n=require("../../../../Dependencies").h;i=i||3e3;let o=n.createDiv({className:"gs-notification gs-notification-"+t,style:{padding:"12px 16px",marginTop:"8px",marginBottom:"8px",borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px",backgroundColor:"success"===t?"rgba(82, 196, 26, 0.1)":"rgba(255, 77, 79, 0.1)",border:"1px solid "+("success"===t?"#b7eb8f":"#ffccc7"),opacity:0,transition:"opacity 0.2s ease-in-out, height 0.2s ease-in-out",height:"0",overflow:"hidden"}});var a=n.createSpan({innerHTML:"success"===t?`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#52c41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff4d4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,style:{display:"flex",alignItems:"center"}}),n=n.createSpan({text:e,style:{color:"success"===t?"#52c41a":"#ff4d4f"}}),e=(o.appendChild(a),o.appendChild(n),this.container.appendChild(o),{element:o,timer:null});return this.activeNotifications.push(e),setTimeout(function(){o.style.height="auto";let t=o.offsetHeight;o.style.height="0",setTimeout(function(){o.style.opacity="1",o.style.height=t+"px"},10)},10),e.timer=setTimeout(this.hide.bind(this,e),i),e},NotificationManager.prototype.hide=function(e){e&&e.element&&(e.timer&&(clearTimeout(e.timer),e.timer=null),e.element.style.opacity="0",e.element.style.height="0",setTimeout(function(){e.element.parentNode&&e.element.parentNode.removeChild(e.element),this.activeNotifications=this.activeNotifications.filter(function(t){return t!==e})}.bind(this),200))},NotificationManager.prototype.clearAll=function(){var e=this;this.activeNotifications.forEach(function(t){e.hide(t)})},module.exports=NotificationManager;
