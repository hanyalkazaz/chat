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

let{GSToolBlockUtils,CodeBlockUtils}=require("@gitsense/gsc-utils"),{getSearchTools,getSearchToolConfigs}=require("../../../utils/searchToolConfig"),{chatApi,h}=require("../../../Dependencies"),{CONTEXT_LOADER_TOOL,SEARCH_TOOL,DIRECT_SEARCH_TYPE}=require("../../../constants"),COMPLETED=require("../../../../common/gitsense/searchStates").COMPLETED;async function processDirectSearch(t,e,a,r){var n=e.data?.searchCriteria;if(n){var o=t.message,o=getSearchToolConfigs(o);if(1!==o.length)console.error("processDirectSearch: Expecting one search tool but found "+o.length);else{var o=o[0],s={type:DIRECT_SEARCH_TYPE,created_at:(new Date).toISOString(),finished_at:null},o={...o,states:[...o.states||[],s]};await updateMessageContent(t,o,a,r,"Searching...",null,!1);try{var i,c=r.widget.dataURL,l=new URLSearchParams;l.set("action","search");let e=n.query||"";for(i in n.scope&&"all-chats"!==n.scope&&(e+=" scope:"+n.scope),Array.isArray(n.targets)&&0<n.targets.length&&(e+=" in:"+n.targets.join(",")),n.filters){var h=n.filters[i];h&&"IN"===h.operator&&Array.isArray(h.values)&&(e+=` ${i}:`+h.values.join(","))}l.set("query",e.trim()),l.set("current-chat-id",r.chat.id),n.pagination?.resultsPerPage&&l.set("results-per-page",n.pagination?.resultsPerPage),n.pagination?.currentPage&&l.set("page",n.pagination?.currentPage);var{status:d,data:g}=await(await fetch(c+"?"+l.toString())).json();"success"===d?await handleSearchCompletion(t,o,a,r,g):await handleSearchError(t,o,a,r,"Search failed: "+(g||"An unknown error occurred during search."),DIRECT_SEARCH_TYPE)}catch(e){console.error("processDirectSearch: Error during fetch or processing:",e.message,e),await handleSearchError(t,o,a,r,"An error occurred during search: "+e.message,DIRECT_SEARCH_TYPE)}}}else console.error("processDirectSearch: No search criteria found in config.data."),await handleSearchError(t,e,a,r,"No search criteria provided.",DIRECT_SEARCH_TYPE)}async function handleSearchCompletion(e,t,a,r,n){var o=[...t.states||[]],s=o[o.length-1];if(s.type!==DIRECT_SEARCH_TYPE)throw new Error(`handleSearchCompletion: Last state type is not "${DIRECT_SEARCH_TYPE}"`);if(null!==s.finished_at)throw new Error("handleSearchCompletion: Last state has a finished_at of "+s.finished_at);s.finished_at=(new Date).toISOString(),delete s.error;s={...t,data:{...t.data,paginationSummary:{currentPage:n?.pagination?.currentPage,totalPages:n?.pagination?.totalPages,totalResults:n?.totalCounts?.totalResults}}};o.push({type:COMPLETED,created_at:(new Date).toISOString(),finished_at:(new Date).toISOString()}),s.states=o;try{await updateMessageContent(e,s,a,r,"Search completed. Loading interactive results...",n,!0)}catch(e){console.error("handleSearchCompletion: Error updating config:",e)}r.updateChat&&"function"==typeof r.updateChat?r.updateChat():console.warn("handleSearchCompletion: Unable to update chat since it is not defined in the context")}async function handleSearchError(e,t,a,r,n,o="unknown"){console.error(`handleSearchError: An error occurred during stage "${o}". Updating config and message.`,n);var o=[...t.states||[]],s=o[o.length-1];if(s.type!==DIRECT_SEARCH_TYPE)throw new Error(`handleSearchCompletion: Last state type is not "${DIRECT_SEARCH_TYPE}"`);if(null!==s.finished_at)throw new Error("handleSearchCompletion: Last state has a finished_at of "+s.finished_at);s.error=n,s.finished_at=(new Date).toISOString();s=`### Search Error

An error occurred during the search:

\`\`\`
${n}
\`\`\`
`;await updateMessageContent(e,{...t,states:o,data:{...t.data,paginationSummary:null}},a,r,s,null,!1),r.updateChat&&"function"==typeof r.updateChat||console.warn("handleSearchError: Unable to update chat since it is not defined in the context")}async function updateMessageContent(e,a,t,r,n,o,s){a={tool:SEARCH_TOOL,config:a};let i=GSToolBlockUtils.formatToolBlock(a),c="```txt\n"+i+"\n```",l,h,d;if(s){a=o?`

\`\`\`json
${JSON.stringify(o,null,2)}
\`\`\`
`:"",s=(l=n+`

${a}

`+c,o?.results?.messages?.filter(e=>"git-blob"===e.messages_type)||[]);if(s.length){a=s.map(e=>e.messages_chat_id),o={tool:CONTEXT_LOADER_TOOL,show:!0,config:{container:{style:{borderTop:"1px solid #ddd",paddingTop:"15px",marginTop:"15px"}},actions:{load:{type:"link",text:"Review, load and add",showCopy:!0,showSave:!1,showAdd:!0},copy:{type:"link"},paste:{type:"link"}},chatIds:a,startCollapsed:!0,postLoad:{show:!0},showManage:!0}};let e=GSToolBlockUtils.formatToolBlock(o),t="```txt\n"+e+"\n```";l+=`

`+t}h="direct-search-results",d="human-public"}else l=n+`

`+c;t.innerHTML=r.md.render(n);try{await chatApi.updateChatMessage(r.widget,e.id,{newType:h,newVisibility:d,newMessage:l})}catch(e){console.error("updateMessageContent: Error updating message content:",e)}}module.exports={processDirectSearch:processDirectSearch};
