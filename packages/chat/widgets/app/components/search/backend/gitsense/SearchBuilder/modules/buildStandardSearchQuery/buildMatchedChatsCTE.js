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

let{applyTableFilters,applyFtsMatch}=require("./tableMatcherUtils"),{FIELD_TABLE_MAP,COLUMN_USAGE,QUERY_REQUIREMENTS}=require("../../constants"),castJsonExtract=require("../../../utils/sqlCastingUtils").castJsonExtract;function buildMatchedChatsCTE(r,t,a,s,e){let l=r("chats"),c=new Set([...COLUMN_USAGE.ESSENTIAL_JOIN.chats.map(t=>"chats."+t)]);e&&(l=l.innerJoin(e,e+".chat_id","chats.id")),0<Object.keys(a.filters).length&&COLUMN_USAGE.ESSENTIAL_FILTER.chats.forEach(t=>c.add("chats."+t));var e=0<t.keywords.length||0<t.phrases.length,h=t.targets.includes("chats");return e&&h&&(QUERY_REQUIREMENTS.FTS_SEARCH.chats.columns.forEach(t=>c.add(t)),c.add("fts_chats.rowid as fts_rowid"),c.add("fts_chats.rank as fts_rank"),c.add("chats.id as base_id")),h&&(COLUMN_USAGE.COMMON_OUTPUT.chats.forEach(t=>{var a=FIELD_TABLE_MAP["chats."+t];a&&c.add(`chats.${t} as `+a.cteName)}),Array.isArray(s))&&s.forEach(a=>{var a="string"==typeof a?a:a.field,s=FIELD_TABLE_MAP[a];if(s&&s.outputtable&&"table"===s.source&&"chats"===s.table){var e=s.table;let t;t=s.jsonPath?s.sqlType?castJsonExtract(r,e,"meta",s.jsonPath,s.sqlType):r.raw(`json_extract(${e}.meta, '${s.jsonPath}')`):r.raw(e+"."+a.split(".").pop()),s.cteName?c.add(r.raw(t.toString()+" as "+s.cteName)):c.add(t)}}),a.filters.hasOwnProperty("chats.deleted")||a.nullFilters.hasOwnProperty("chats.deleted")||a.notNullFilters.hasOwnProperty("chats.deleted")||(l=l.where("chats.deleted",0)),l=applyTableFilters(r,l,a.filters,a.nullFilters,a.notNullFilters,"chats"),h&&e&&(s=[...t.keywords,...t.phrases],FIELD_TABLE_MAP["chats.name"],0<(a=s.map(t=>"name:"+t.replace(/"/g,'""'))).length)&&(h=a.join(" OR "),l=applyFtsMatch(r,l,"fts_chats",h,"chats")),l=l.select([...c])}module.exports={buildMatchedChatsCTE:buildMatchedChatsCTE};
