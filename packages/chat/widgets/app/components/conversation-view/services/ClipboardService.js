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

async function copyToClipboard(e,t,o){try{return await navigator.clipboard.writeText(e),t&&t(),!0}catch(e){return console.error("Failed to copy text:",e),o&&o(e),!1}}function createClipboardButton(e,t={}){let{className:o="gs-chat-copy-button",label:a="Copy",successLabel:r="Copied!",errorLabel:n="Failed to copy",resetDelay:c=2e3,style:l={}}=t,s=document.createElement("button");s.className=o,s.textContent=a;return Object.assign(s.style,{position:"absolute",top:"5px",right:"5px",padding:"3px 5px",backgroundColor:"#fafafa",border:"1px solid transparent",borderRadius:"5px",cursor:"pointer",zIndex:"1000",fontSize:"13px",transition:"background-color 0.2s ease"},l),s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e),updateButtonState(s,"success",r,c)}catch(e){console.error("Copy failed:",e),updateButtonState(s,"error",n,c)}}),s}function updateButtonState(e,t,o,a){let r=e.dataset.originalLabel||e.textContent,n=e.dataset.originalBgColor||e.style.backgroundColor;e.dataset.originalLabel||(e.dataset.originalLabel=r),e.dataset.originalBgColor||(e.dataset.originalBgColor=n),e.textContent=o,"error"===t?e.style.backgroundColor="#FFB6C1":"success"===t&&(e.style.backgroundColor="#E6FFE6"),setTimeout(()=>{e.textContent=r,e.style.backgroundColor=n},a)}function addClipboardsToCodeBlocks(o=document,r={}){var e;return o instanceof Element||o===document?(document.getElementById("gs-chat-pre-copy-styles")||((e=document.createElement("style")).id="gs-chat-pre-copy-styles",e.textContent=`
                .gs-chat-pre-container {
                    position: relative;
                }
                .gs-chat-copy-button {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    padding: 3px 5px;
                    background-color: #fafafa;
                    border: 1px solid transparent;
                    border-radius: 5px;
                    cursor: pointer;
                    display: none;
                    z-index: 1000;
                    font-size: 13px;
                    transition: background-color 0.2s ease;
                }
                .gs-chat-copy-button:hover {
                    border: 1px solid #aaa;
                    background-color: white;
                }
                .gs-chat-pre-container:hover .gs-chat-copy-button {
                    display: block;
                }
            `,document.head.appendChild(e)),o.querySelectorAll("pre").forEach(function(t){var o=(o=t).parentElement.classList.contains("gs-chat-pre-container")?o.parentElement:((a=document.createElement("div")).className="gs-chat-pre-container",o.parentNode.insertBefore(a,o),a.appendChild(o),a);if(!o.querySelector(".gs-chat-copy-button")){var a=t.childNodes[0]?.firstChild;let e=t.textContent||t.innerText;t=createClipboardButton(e=a&&"gs-chat-lang"===a.className?e.split("\n").splice(2).join("\n"):e,r);o.appendChild(t)}}),{destroy(){var e=o.querySelectorAll(".gs-chat-copy-button"),t=o.querySelectorAll(".gs-chat-pre-container");e.forEach(e=>e.remove()),t.forEach(e=>{var t=e.querySelector("pre");t&&(e.parentNode.insertBefore(t,e),e.remove())})}}):(console.error("Invalid container element provided"),{destroy:()=>{}})}module.exports={copyToClipboard:copyToClipboard,createClipboardButton:createClipboardButton,updateButtonState:updateButtonState,addClipboardsToCodeBlocks:addClipboardsToCodeBlocks};
