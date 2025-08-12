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

let MODEL_CONSTANTS=require("../constants/MessageConstants").MODEL_CONSTANTS;function getProvider(t,e){if(t){if(t.match(/^Fake/))return"Fake Provider";var r=e.models;if(r&&Array.isArray(r))for(let e=0;e<r.length;e++){var{name:o,providers:i}=r[e];if(!o.match(/^---/)&&o===t&&(i&&0<i.length))return i[0].name}}return"Unknown Provider"}function getUniqueModels(e,t=new Set){if(e&&e.length)for(var r of e){var{model:r,kids:o}=r;r&&t.add(r),o&&o.length&&getUniqueModels(o,t)}return Array.from(t)}function sortModels(e){if(!e||!Array.isArray(e))return[];let t=MODEL_CONSTANTS.GITSENSE_NOTES;var r=e.filter(e=>e!==t);return e.includes(t)?[t,...r]:r}function mapMessagesToModels(t){var r={};if(t&&Array.isArray(t))for(let e=0;e<t.length;e++){var o=t[e],i=o.model;if(i){let e=r[i];e||(e=[],r[i]=e),e.push(o)}}return r}function filterModelsByProvider(e,t){return e&&Array.isArray(e)&&t?e.filter(e=>!(!e.providers||!Array.isArray(e.providers))&&e.providers.some(e=>e.name===t)):[]}function getModelByName(e,t){if(e&&t&&Array.isArray(t))for(var r of t)if(r.name===e)return r;return null}function isNotesModel(e){return e&&e.match(new RegExp(MODEL_CONSTANTS.GITSENSE_NOTES))}function createModelIcon(e){var t=require("../Dependencies").svg;let r;return e?r=e.match(/Notes/)?t.note({style:{position:"relative",height:"18px",width:"18px"}}):e.toLowerCase().match(/deepseek/)?t.deepSeek({style:{position:"relative",height:"18px",width:"18px"}}):e.toLowerCase().match(/gemini/)?t.gemini({style:{position:"relative",height:"18px",width:"18px"}}):e.toLowerCase().match(/gpt/)?t.openAI({style:{position:"relative",height:"18px",width:"18px"}}):e.toLowerCase().match(/llama/)?t.meta({style:{position:"relative",height:"18px",width:"18px"}}):e.toLowerCase().match(/claude/)?t.claude({style:{position:"relative",height:"18px",width:"18px"}}):t.aiModel({style:{position:"relative",left:"1px",height:"18px",width:"18px"}}):t.aiModel({style:{position:"relative",left:"1px",height:"18px",width:"18px"}})}module.exports={getProvider:getProvider,getUniqueModels:getUniqueModels,sortModels:sortModels,mapMessagesToModels:mapMessagesToModels,filterModelsByProvider:filterModelsByProvider,getModelByName:getModelByName,isNotesModel:isNotesModel,createModelIcon:createModelIcon};
