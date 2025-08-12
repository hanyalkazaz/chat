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

let format=require("sql-formatter").format,castJsonExtract=require("../../utils/sqlCastingUtils").castJsonExtract,resolveDescendantChatIds=require("./scopeResolvers/resolveDescendantChatIds").resolveDescendantChatIds,resolveConnectedChatIds=require("./scopeResolvers/resolveConnectedChatIds").resolveConnectedChatIds,routeFilters=require("./buildStandardSearchQuery/filterRouter").routeFilters,applyTableFilters=require("./buildStandardSearchQuery/tableMatcherUtils").applyTableFilters,FIELD_TABLE_MAP=require("../constants").FIELD_TABLE_MAP,DEBUG="TRUE"===process.env.GSC_DEBUG?.toUpperCase();async function buildMetaInsightsQuery(e,t,s=null){let{analyzerId:l,insightField:a,insightFieldType:r,repoFullNames:n,chatIds:i,scope:o,pagination:u}=t;if(!l)throw new Error("Analyzer ID is mandatory for the meta-insights profile.");if(!a)throw new Error("Insight field is mandatory for the meta-insights profile.");if(!r)throw new Error("Insight field type is mandatory for the meta-insights profile.");let c=null,d=("current-chat"===o&&null!==s?c=[s]:"current-chat-and-branches"===o&&null!==s?c=await resolveDescendantChatIds(e,s):"connected-chats"===o&&null!==s&&(c=await resolveConnectedChatIds(e,s)),null),h=(null!==i&&0<i.length?d=null!==c?c.filter(e=>i.includes(e)):i:null!==c&&(d=c),null),g=null;s=n&&0<n.length||null!==d&&0<d.length;s&&(g="cte_filter_chat_ids",h=e("chats").select("chats.id as chat_id").where("chats.deleted",0),n&&0<n.length&&(h=h.join("groups","chats.group_id","groups.id").whereIn("groups.name",n)),null!==d)&&0<d.length&&(h=h.whereIn("chats.id",d));let m=e("messages").select("messages.meta").where("messages.deleted",0).where(e.raw("messages.type = ?",[l]));s&&(m=m.join(g,"messages.chat_id",g+".chat_id"));var f="$.extracted_metadata."+a;let _;_="string"===r?"TEXT":"number"===r?"REAL":"boolean"===r?"INTEGER":"datetime"===r?"REAL":"TEXT";var f=castJsonExtract(e,"cte_filtered_messages","meta",f,_,"insight_value"),f=e(m.as("cte_filtered_messages")).select(f,e.raw("COUNT(*) as value_count")).groupBy("insight_value"),e=e(f.as("cte_metadata_counts")).select("insight_value","value_count"),f=(e.orderBy([{column:"value_count",order:"desc"},{column:"insight_value",order:"asc"}]),u?.limit),I=u?.offset;return null!==f&&0<f&&e.limit(f),null!==I&&0<=I&&e.offset(I),DEBUG&&(console.log("META INSIGHTS SQL QUERY:"),console.log(format(e.toString(),{language:"sqlite"}))),{finalQuery:e,filterChatIdsCteName:s?g:null,filterCteQuery:s?h:null,matchCTEs:{},searchCriteria:t,isMetaInsights:!0,valueField:"insight_value",countField:"value_count"}}module.exports={buildMetaInsightsQuery:buildMetaInsightsQuery};
