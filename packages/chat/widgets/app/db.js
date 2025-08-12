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

let{dirname,resolve}=require("path"),{existsSync,readFileSync,mkdirSync}=require("fs"),zlib=require("zlib"),{connect,execAsync}=require("./sqlite.js"),DATA_DIR=resolve(__dirname,"../../../../data"),DB_FILE=resolve(DATA_DIR,"chats.sqlite3"),CREATE_DB_SQL=resolve(__dirname,"sql/sqlite/create-db.sql");async function create(e,t=!0,r="base"){if(!e)throw new Error("readOptionsFile not defined");if(existsSync(DB_FILE)&&t)console.log(`No need to initialize database ${DB_FILE} as it already exists.`);else{console.log("Initializing database "+DB_FILE);e=connect(DB_FILE),t=dirname(DB_FILE);if(!existsSync(DB_FILE))try{mkdirSync(t,{recursive:!0})}catch(e){throw new Error(`ERROR: Unable to determine if directory '${t}' exists or not: `+e.message)}if(null===r){t=readFileSync(CREATE_DB_SQL,"utf-8");try{console.log("Executing SQL in "+CREATE_DB_SQL),await execAsync(e,t)}catch(e){throw new Error(`ERROR: Failed to initialize database
${t}
`+e)}console.log("Successfully created database schema.")}else{t=resolve(DATA_DIR,r+".sql.gz");if(!existsSync(t))throw new Error("ERROR: Dump file not found at "+t);console.log("Importing data from dump file: "+t);try{var i=readFileSync(t),a=zlib.gunzipSync(i).toString("utf8");await execAsync(e,a),console.log("Successfully imported data from dump file.")}catch(e){throw new Error(`ERROR: Failed to import data from dump file ${t}
`+e.message)}}}}function getDBPath(){return DB_FILE}module.exports={create:create,getDBPath:getDBPath};
