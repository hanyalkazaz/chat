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

let CodeBlockUtils=require("@gitsense/gsc-utils").CodeBlockUtils,constants=require("./constants"),REQUIRED_PLACEHOLDERS=["[replace with role]","[replace with task]","[replace with instructions for markdown content]","[replace with custom metadata for the new analyzer]","[replace with status, e.g., 'success', 'error' for the analyzer LLM]","[replace with show extracted metadata fields or blank if the user is not interested]","<the-determined-id>"];function validateAndExtractInstructions(e,n){n={success:!1,streamingStatusAtStop:n};if("string"!=typeof e||""===e.trim())n.error="Message content is empty or invalid.";else{var s,o,r,i=e.indexOf(constants.START_DELIMITER),c=e.indexOf(constants.END_DELIMITER);if(-1===i||-1===c||c<i)n.error=`Missing or misplaced delimiters: "${constants.START_DELIMITER}" and/or "${constants.END_DELIMITER}".`;else{let t=e.substring(i+constants.START_DELIMITER.length,c).trim();0===t.length?n.error=`No content found between "${constants.START_DELIMITER}" and "${constants.END_DELIMITER}".`:(n.instructionsContent=t,(c=REQUIRED_PLACEHOLDERS.find(e=>t.includes(e)))?n.error=`Unreplaced placeholder found in instructions content: "${c}". The LLM did not fully follow instructions.`:0<(c=["## Role:","## Task:","## Context:","## Input:","## Processing Step:"].filter(e=>!t.includes(e))).length?n.error=`Missing required sections within instructions: ${c.join(", ")}.`:({blocks:c,warnings:s}=CodeBlockUtils.extractCodeBlocks(t,{silent:!0}),r=c.filter(e=>"markdown"===e.language),o=c.filter(e=>"code"===e.type&&"json"===e.language),c=c.filter(e=>"code"===e.type&&"json"===e.language),1!==r.length?n.error=`Expected exactly one nested markdown code block within instructions, found ${r.length}.`:1!==o.length?n.error=`Expected exactly one nested json code block within instructions, found ${o.length}.`:1!==c.length?n.error=`Expected exactly one nested config code block within instructions, found ${c.length}.`:(r=r[0],o=o[0],c=c[0],r.incomplete?n.error="Nested markdown code block is incomplete.":o.incomplete?n.error="Nested json code block is incomplete.":c.incomplete?n.error="Nested config code block is incomplete.":(n.nestedMarkdownBlock=r,n.nestedJsonBlock=o,n.nestedConfigBlock=o,(c=e.substring(0,i).trim().split("\n").find(e=>e.startsWith(constants.ANALYZER_ID_PREFIX)))?(r=c.substring(constants.ANALYZER_ID_PREFIX.length).trim())?(n.analyzerId=r,n.success=!0):n.error=`"${constants.ANALYZER_ID_PREFIX}" line is present but the ID is empty.`:n.error=`Missing "${constants.ANALYZER_ID_PREFIX}" line before instructions.`))))}}return n}module.exports={REQUIRED_PLACEHOLDERS:REQUIRED_PLACEHOLDERS,validateAndExtractInstructions:validateAndExtractInstructions};
