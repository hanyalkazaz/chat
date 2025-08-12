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

let MetadataFilterTypes=require("./MetadataFilterTypes");class MetadataFilterState{constructor(e){e||console.error("MetadataFilterState: MetadataFilterApi instance is required."),this.api=e,this._selectedAnalyzerId=null,this._currentAnalyzerSchema=null,this._rules=[]}async selectAnalyzer(t){if(this._selectedAnalyzerId=t,this._currentAnalyzerSchema=null,t)try{this._currentAnalyzerSchema=await this.api.fetchAnalyzerSchema(t)}catch(e){throw console.error(`MetadataFilterState: Failed to fetch schema for analyzer "${t}":`,e),this._selectedAnalyzerId=null,e}}getSelectedAnalyzerId(){return this._selectedAnalyzerId}getCurrentAnalyzerSchema(){return this._currentAnalyzerSchema}addRule(e){e.id||(e.id=`rule-${Date.now()}-`+Math.random().toString(36).substr(2,9)),this._rules.push({...e})}removeRule(t){this._rules=this._rules.filter(e=>e.id!==t)}updateRule(t,e){var r=this._rules.findIndex(e=>e.id===t);-1!==r&&(this._rules[r]={...this._rules[r],...e})}getFilterState(){var e;return this._selectedAnalyzerId&&this._currentAnalyzerSchema&&0!==this._rules.length&&0<(e=this._rules.filter(e=>{var t=!!e.field&&!!e.operator,r=["is_null","is_not_null"].includes(e.operator),l=null!=e.value,a="range"===e.operator&&(null!==e.value?.min||null!==e.value?.max),e=("includes"===e.operator||"excludes"===e.operator)&&Array.isArray(e.value)&&0<e.value.length;return t&&(r||l||a||e)})).length?{analyzerId:this._selectedAnalyzerId,rules:e}:null}getRules(){return[...this._rules]}getUniqueSelectedFields(){let t=new Set;return this._rules.forEach(e=>{e.field&&t.add(e.field)}),t}applyState(e){e?(this._selectedAnalyzerId=e.analyzerId,this._rules=(e.rules||[]).map(e=>(e.id||(e.id=`rule-${Date.now()}-`+Math.random().toString(36).substr(2,9)),e))):this.reset()}reset(){this._selectedAnalyzerId=null,this._currentAnalyzerSchema=null,this._rules=[]}resetRules(){this._rules=[]}}module.exports=MetadataFilterState;
