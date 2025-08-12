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

let sqlite3=require("sqlite3").verbose();function connect(e){if(!e)throw new Error("Error: No database defined");console.log("Connecting to "+e);try{var n=new sqlite3.Database(e,{verbose:!0});return console.log("Successfully connected"),n}catch(n){throw new Error(`ERROR: Unable to connect to database ${e}
`+n)}}async function closeAsync(n){return new Promise((s,c)=>{n.close((n,e)=>{n?c(n):s(e)})})}function execAsync(n,e){return new Promise((s,c)=>{n.exec(e,(n,e)=>{n?c(n):s(e)})})}function runAsync(n,c,t=[]){return new Promise((e,s)=>{n.run(c,t,function(n){n?s(n):e(this)})})}function getAsync(n,e,t=[]){return new Promise((s,c)=>{n.get(e,t,(n,e)=>{n?c(n):s(e)})})}function allAsync(n,e,t=[]){return new Promise((s,c)=>{n.all(e,t,(n,e)=>{n?c(n):s(e)})})}function eachAsync(n,e,r=[]){return new Promise((s,c)=>{let t=[];n.each(e,r,(n,e)=>{n?c(n):t.push(e)},(n,e)=>{n?c(n):s({rows:t,count:e})})})}function prepareAsync(n,t){return new Promise((e,s)=>{let c=n.prepare(t,n=>{n?s(n):e(c)})})}function stmtRunAsync(n,e=[]){return new Promise((s,c)=>{n.run(e,(n,e)=>{n?c(n):s()})})}function stmtAllAsync(n,e=[]){return new Promise((s,c)=>{n.all(e,(n,e)=>{n?c(n):s(e)})})}function stmtFinalizeAsync(n){return new Promise((e,s)=>{n.finalize(n=>{n?s(n):e()})})}function serializeAsync(s,c){return new Promise((n,e)=>{s.serialize(async()=>{try{await c(),n()}catch(n){e(n)}})})}module.exports={connect:connect,closeAsync:closeAsync,allAsync:allAsync,execAsync:execAsync,getAsync:getAsync,prepareAsync:prepareAsync,runAsync:runAsync,stmtAllAsync:stmtAllAsync,stmtFinalizeAsync:stmtFinalizeAsync,stmtRunAsync:stmtRunAsync,serializeAsync:serializeAsync};
