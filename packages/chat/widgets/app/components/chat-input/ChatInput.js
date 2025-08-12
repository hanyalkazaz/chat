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

let h=require("../../../../../../devboard/utils/html"),svg=require("../../../../../../devboard/utils/svg"),DropDownMenu=require("../../../../../../devboard/components/drop-down-menu.js"),createResizableTextArea=require("../../textarea_resizer").createResizableTextArea,handlePasteEvents=require("../../paste_events").handlePasteEvents,Main=require("./ChatInput.Main").Main,Menus=require("./ChatInput.Menus").Menus,DRAG_AND_DROP_MSG="Drag and drop files above to include in chat",WARNING_MSG="AI can make mistakes; catch them with GitSense",VALIDATE_MSG="Please summarize the key points of our current conversation and validate the information provided. Ensure that the summary captures the main topics discussed and any important details.";function ChatInput(l,n,e={},t={},s={}){let{dragAndDropMsg:r=DRAG_AND_DROP_MSG,warningMsg:o=WARNING_MSG,validateMsg:i=VALIDATE_MSG,showNewChatOptions:a=!0,fakeLLMs:u}=e,{send:d,stop:p}=t,c=s.onResize,g=25;let v=null,m=null;let M=null;function w(){m.reset(),v.reset()}this.render=e=>{M=e;var{menusBody:e,mainBody:t}=(e=>{var t=h.createDiv({style:{}}),n=h.createDiv({style:{backgroundColor:"white"}}),s=h.createDiv({text:r||o,style:{fontSize:"13px",height:g+"px",lineHeight:g+"px",overflow:"hidden"}}),i=h.createDiv({append:[t,n,s],style:{}});return e.appendChild(i),{menusBody:t,mainBody:n,msgBody:s}})(e=e),t=((m=new Main(l,{h:h,svg:svg},{inputHeight:75,minInputHeight:50})).render(t),(v=new Menus(l,n,{h:h,svg:svg,main:m,DropDownMenu:DropDownMenu},{checkSendOnEnter:!0,showNewChatOptions:a,fakeLLMs:u})).render(e),v.getResize());m.getInput(),v.setEvent("onResize",()=>{var e;c&&(e=M.getBoundingClientRect(),c(e))}),v.setEvent("onClickBigSmall",e=>{"big"===e?m.setInputHeight("calc(50vh)"):m.setInputHeight("75px")}),m.setEvent("onPressedStop",()=>{p()}),m.setEvent("onPressedGo",n=>{var s=v.getSelectedOption(),i=v.getSelectedRelation(),r=v.getSelectedModels();let o=m.getInputValue();var a=m.getInputFiles();if(1===r.length&&r[0].match(/>>>/))v.showError("Select another model to ask");else{var e=1===r.length&&"GitSense Notes"===r[0];if(""===o)if(0===a.length&&e)o="Click the pencil below to make this note your own.";else if(0===a.length&&!e)return;var e=v.sendOnEnter();if(!n||e&&!n.shiftKey)if(n&&n.preventDefault(),null===v.getSelectedOption())d(s,i,l,[],o,a),w();else if(0===r.length)e="frankenstein-chat"===s?"Select a model to ask":"Select one or more models to ask",v.showError(e);else{n=r.includes(l);let e=null,t=null;e=n?(t=l,r.filter(e=>e!==l)):(t=r.shift(),r),d(s,i,t,e,o,a),w()}}}),createResizableTextArea(m.getInput(),t,void 0,{onMouseUp:()=>{var e;c&&(e=M.getBoundingClientRect(),c(e))}})},this.reset=()=>{w()},this.showGoBtn=()=>{m.showGoBtn()},this.showStopBtn=()=>{m.showStopBtn()}}module.exports=ChatInput;
