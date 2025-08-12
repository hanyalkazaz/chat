<!--
Component: GitSense Chat Tool - Search Help Documentation
Block-UUID: 28ae4b29-1c07-46da-aae4-56c99154c77a
Parent-UUID: N/A
Version: 1.3.0
Description: Comprehensive help documentation for the GitSense Chat search tool, explaining AI-assisted and direct search modes, and providing examples for query construction and execution.
Language: Markdown
Created-at: 2025-07-28T03:51:19.656Z
Authors: Gemini 2.5 Flash Thinking (v1.0.0), Gemini 2.5 Flash Thinking (v1.1.0), Gemini 2.5 Flash Thinking (v1.2.0), Gemini 2.5 Flash Thinking (v1.3.0)
-->


## Quick Start

Here are some common ways to use the GitSense Chat search:

*   **Find files with specific issues:**
    *   `/ask find all files with spelling mistakes in the hello world repo`
    *   *This executes a search and shows you the results directly.*

*   **Get the search command for later use:**
    *   `/ask construct a search for files with outdated comments in my-project`
    *   *This provides you with the exact `/search` command to run yourself, useful for creating context bundles.*

*   **Ask about the search environment:**
    *   `/ask what analyzers are available?`
    *   *This gives you a direct answer about the system's capabilities.*

*   **Perform a direct text search (AI disabled):**
    *   `!search "database connection pool" repo:my-org/my-app`
    *   *This immediately searches for the exact phrase in the specified repository.*

*   **Search for code examples:**
    *   `/ask show me how to implement authentication in javascript`
    *   *This executes a search for relevant code snippets and explanations.*

For more detailed explanations and examples, continue reading below.

---

## Initiating a Search

There are several ways to start a search in GitSense Chat:

1.  **Using the "Ask or Search" Button:**
    *   Click the prominent "Ask or Search" button. This will render the search tool UI in a new message, allowing you to configure your search using the provided options.

2.  **Using Slash Commands (`/ask` or `/search`):**
    *   Type `/ask` followed by your natural language query (e.g., `/ask find all files with spelling mistakes`) directly into the chat input box and press Enter. This will create a new message containing the search tool, with AI-assisted search enabled by default.
    *   Type `/search` followed by your query (e.g., `/search lang:javascript query:function:init`) directly into the chat input box and press Enter. This will create a new message containing the search tool, with AI-assisted search disabled by default.

3.  **Using Immediate Execution Commands (`!ask` or `!search`):**
    *   Type `!ask` followed by your natural language query (e.g., `!ask find all files with spelling mistakes`) directly into the chat input box and press Enter. This simulates typing the query into the search tool and immediately pressing Enter, triggering the AI-assisted search process without rendering the full search UI first.
    *   Type `!search` followed by your query (e.g., `!search lang:javascript query:function:init`) directly into the chat input box and press Enter. This simulates typing the query into the search tool and immediately pressing Enter, triggering a direct search without rendering the full search UI first.

---

## AI-Assisted Search (`/ask` enabled)

When the "Ask" checkbox is enabled, the AI Assistant interprets your natural language queries to provide the most relevant results. It operates in three primary modes:

### 1. Query Expert Mode (Constructing Search Commands)

In this mode, the AI acts as a "query expert," helping you **construct the precise `/search` command** that you can then review, modify, and execute yourself. This is ideal for learning the search syntax or building complex queries.

**This is particularly useful for:**

*   **Loading Matches into Context:** The generated `/search` command can be directly used to create a context bundle of the search results. This allows you to easily load matching files into your current conversation for further analysis or discussion.
*   **Discussing Results in Current Chat:** Since you execute the search yourself, the results appear directly in your current chat. This facilitates immediate discussion and follow-up with the LLM about the search results without needing to switch to a separate thinking chat.

**To activate Query Expert Mode, use `/ask` followed by keywords like:**
`construct`, `build`, `generate`, `make`, `suggest`, `show me the query`, `what is the query`, `how do I search`.

**Examples:**

*   **User Query:** `/ask construct a search that will allow me to find all files with spelling mistakes in the hello world repo using the code comment analyzer`
    *   **AI Output:** `/search profile:meta-search analyzer:code-comment-analyzer::file-content::default meta:has_spelling_mistakes:boolean=true repo:hello-world`

*   **User Query:** `/ask generate a query to find all Python files modified in the last week`
    *   **AI Output:** `/search lang:python query:modified_last_week sort:created_at:desc` (Example, actual query might vary)

*   **User Query:** `/ask how do I search for functions named 'init' in JavaScript files?`
    *   **AI Output:** `/search lang:javascript query:function:init` (Example, actual query might vary)

### 2. Search Executor Mode (Executing Searches and Providing Results)

In this mode, the AI directly **executes the search** based on your natural language query and presents the results. This is the default behavior when AI is enabled and your query doesn't explicitly ask for command construction.

**To activate Search Executor Mode, use `/ask` followed by keywords like:**
`find`, `search`, `locate`, `get me`, `show me`, `look for`.

**Examples:**

*   **User Query:** `/ask find all files with spelling mistakes in the hello world repo using the code comment analyzer`
    *   **AI Action:** Executes the search and displays the matching files.

*   **User Query:** `/ask search for 'authentication' in the user service code`
    *   **AI Action:** Executes the search and displays code snippets related to 'authentication'.

*   **User Query:** `/ask show me the latest release notes for the 'gitsense/gsc-search' repository`
    *   **AI Action:** Executes the search and displays relevant release notes.

### 3. Environment & Context Queries (Direct Answers)

The AI can also answer direct questions about the GitSense Chat search environment and available context. This helps you understand what data and tools are at your disposal.

**To ask about the environment, use `/ask` followed by keywords like:**
`what analyzers are there`, `list analyzers`, `show me analyzers`, `what metadata is available for`, `show me fields for`, `what repos are searchable`, `list repositories`.

**Examples:**

*   **User Query:** `/ask what analyzers are available?`
    *   **AI Action:** Provides a list of all configured GitSense Chat Analyzers and their descriptions.

*   **User Query:** `/ask what metadata is available for the code-comment-analyzer?`
    *   **AI Action:** Lists the extracted metadata fields (e.g., `has_spelling_mistakes`, `outdated_comment_detected`) for that specific analyzer.

*   **User Query:** `/ask what repositories are searchable?`
    *   **AI Action:** Provides a list of all Git repositories currently indexed and available for search.

---

## Direct Search (AI Disabled)

When the "Ask" checkbox is **disabled**, the AI Assistant is bypassed. The search tool will perform a **direct text search** using the query you provide in the input field.

*   **"Search In:" Dropdown:** When AI is disabled, the "Search In:" dropdown becomes active. Use this to specify which types of content you want to search within (e.g., `git-blobs` for raw file content, `tiny-overviews` for concise summaries, `messages` for chat messages).

**Examples:**

*   **User Input:** `authentication mechanism` (with "Ask" disabled, "Search In: git-blobs" selected)
    *   **Action:** Performs a direct text search for "authentication mechanism" within the raw Git file content.

*   **User Input:** `bug fix for v1.2.0` (with "Ask" disabled, "Search In: tiny-overviews" selected)
    *   **Action:** Performs a direct text search for "bug fix for v1.2.0" within the concise file summaries.

---

## General Search Tips

*   **Keywords:** Use relevant keywords to describe what you're looking for.
*   **Filters:** You can manually add filters to your query for more precision (e.g., `repo:owner/repo-name`, `lang:javascript`, `file_path:/src/utils/`).
*   **Context:** The more specific you are, the better the search results will be.
*   **Experiment:** Don't hesitate to try different phrasings and keywords to refine your search.
