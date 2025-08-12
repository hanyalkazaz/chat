/*
 * Component: Forever Start Script
 * Block-UUID: de6876a0-b8d8-4b37-9349-e26dcf715953
 * Parent-UUID: 5f8e7d6c-9b2a-4c3d-8e7f-1a2b3c4d5e6f
 * Version: 1.5.0
 * Description: Starts the main application using 'forever' and directs logs to ~/.gitsense/.
 * Language: javascript
 * Created-at: 2025-08-10T07:17:12.345Z
 * Authors: Gemini 2.5 Flash Thinking (v1.0.0), Claude 3.7 Sonnet (v1.1.0, v1.2.0, v1.3.0, v1.4.0), Gemini 2.5 Flash Thinking (v1.5.0)
 */


require("dotenv").config();

const forever = require('forever');
const path = require('path');
const os = require('os');
const fs = require('fs');

// Only update if an env does not make sense
const DEFAULT_SERVER_PORT = 3357;
const actualPort = process.env.DEVBOARD_PORT || DEFAULT_SERVER_PORT;

// Define the base directory for logs and data
const gitsenseHomeDir = path.join(os.homedir(), '.gitsense');
const logDir = gitsenseHomeDir; // Logs will go directly into ~/.gitsense/

// Ensure the log directory exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
    console.log(`Created log directory: ${logDir}`);
}

// Define log file paths
const foreverLogFile = path.join(logDir, 'forever.log'); // Forever's own log
const stdoutLogFile = path.join(logDir, 'stdout.log');   // Application's stdout
const stderrLogFile = path.join(logDir, 'stderr.log');   // Application's stderr

// The main application entry point relative to the package root
const appEntryPoint = path.join(__dirname, '..', 'index.js');

console.log(`Starting application with forever: ${appEntryPoint}`);
console.log(`Forever log: ${foreverLogFile}`);
console.log(`Application stdout: ${stdoutLogFile}`);
console.log(`Application stderr: ${stderrLogFile}`);

// Clear previous log files if they exist
if (fs.existsSync(stderrLogFile)) {
    fs.writeFileSync(stderrLogFile, '');
}

try {
    // Start the application as a daemon with a callback for error handling
    forever.startDaemon(appEntryPoint, {
        uid: 'gitsense-chat', // Unique ID for this process
        max: 3,               // Restart up to 3 times if it crashes
        watch: false,         // Do not watch for file changes (for production)
        logFile: foreverLogFile, // Forever's own log output
        outFile: stdoutLogFile,  // Application's stdout log
        errFile: stderrLogFile,  // Application's stderr log
        silent: false,        // Output to console during startup
        args: [],             // Any arguments to pass to index.js
        minUptime: 5000,      // App needs to stay up for 5 seconds to be considered "running"
        spinSleepTime: 2000   // Wait 2 seconds between restarts
    });
} catch(error) {
    console.log(error);
}

console.log('Pausing for a couple of seconds to see if there are any erros');

try {
    setTimeout(() => {
        let hasError = false;

        if (fs.existsSync(stderrLogFile)) {
            const showNumLines = 10;
            const stderrContent = fs.readFileSync(stderrLogFile, 'utf8');
            if (stderrContent.trim().length > 0) {
                hashError = true;
                console.error('\nWARNING: Errors detected during application startup!');
                console.error('\n----------------------------------------------------------------\n');
                console.error(`${stderrContent}`);
                console.error('\n----------------------------------------------------------------\n');
                console.error('If this error was unexpected, please run: npm stop');
                console.error('Then fix the issue and try starting again.\n');
            }
        }

        if (!hasError) {
            console.log('\n================================================\n');
            console.log(`Application started successfully in daemon mode on port ${actualPort}.`);
            console.log('To stop the application, run: npm run stop');
            console.log('To view running processes, run: npm run status');
        }
    }, 2000);
} catch (error) {
    console.log(error);
}

// Add a simple stop script for convenience
process.on('SIGINT', () => {
    console.log('Attempting to stop application...');
    forever.stop('gitsense-chat', (err) => {
        if (err) {
            console.error('Error stopping application:', err);
            process.exit(1);
        }
        console.log('Application stopped via SIGINT.');
        process.exit(0);
    });
});

