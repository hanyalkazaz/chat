<!--
Component: Confirmation Box
Block-UUID: 54b580d9-a1c5-42ad-9a1d-2afb32536c85
Parent-UUID: N/A
Version: 1.0.0
Description: README documentation for the reusable Confirmation Box component.
Language: markdown
Created-at: 2025-08-08T01:16:03.702Z
Authors: Gemini 2.5 Flash Thinking (v1.0.0)
-->


# Confirmation Box Component

This directory contains the source code for a reusable `ConfirmationBox` UI component, designed to provide a customizable modal dialog for user confirmations.

## Purpose

The `ConfirmationBox` component aims to:

*   Provide a simple, customizable confirmation dialog.
*   Be self-contained, injecting its own necessary CSS styles.
*   Offer a simple API for integration into your application.
*   Prevent body scrolling when active.

## Usage

This component is typically instantiated once and then reused to display various confirmation messages.

1.  **Import the Component:**

    ```javascript
    // In your application code (e.g., a script file)
    const { ConfirmationBox } = require('./path/to/confirmation-box');
    ```

2.  **Instantiate the Confirmation Box:**

    Create a new instance of the `ConfirmationBox` class. It will automatically append its HTML structure to the `document.body` and inject its styles.

    ```javascript
    const myConfirmationBox = new ConfirmationBox();
    ```

3.  **Show the Confirmation Box:**

    Call the `show` method, passing an options object for the title and message, and a callback function to execute upon confirmation.

    \```javascript
    myConfirmationBox.show(
      {
        title: "Delete Item",
        message: "Are you sure you want to delete this item permanently? This action cannot be undone."
      },
      () => {
        console.log("User confirmed deletion!");
        // Add your deletion logic here
      }
    );

    // You can also pass a DOM element as the message or title
    const customMessageElement = document.createElement('div');
    customMessageElement.innerHTML = '<h3>Warning!</h3><p>This is a <strong>critical</strong> operation.</p>';

    myConfirmationBox.show(
      {
        title: 'Custom Confirmation',
        message: customMessageElement
      },
      () => {
        console.log("Custom message confirmed!");
      }
    );
    \```

## API

### `constructor()`

Creates a new instance of the `ConfirmationBox`. This will automatically inject styles and render the hidden modal into the `document.body`.

### `show(options, onConfirm)`

Displays the confirmation box.

*   `options` (`object`): An object containing configuration for the dialog.
    *   `title` (Optional `string` or `Node`): The title text or a DOM element to display in the header. Defaults to `"Confirm Action"`.
    *   `message` (Optional `string` or `Node`): The message text or a DOM element to display in the body. Defaults to `"Are you sure you want to proceed?"`.
*   `onConfirm` (`function`): A callback function that will be executed when the user clicks the "Confirm" button. This function receives no arguments.

### `hide()`

Hides the confirmation box. This method is automatically called when the user clicks "Confirm", "Cancel", the close button, or the overlay.

### `destroy()`

Removes the confirmation box's DOM elements and event listeners from the document. Use this if you need to completely remove the component from memory.

## Implementation Details

*   **CSS Injection:** The component injects its own styles into the document's `<head>` when the first instance is created, making it self-contained.
*   **Vanilla JavaScript:** Built using plain JavaScript classes and DOM manipulation, with no external library dependencies.
*   **Singleton Usage:** While technically a class, it's designed for a single instance to be created and reused, as it appends its modal directly to `document.body`.
*   **Body Scroll Prevention:** When the confirmation box is active, it sets `overflow: hidden` on the `document.body` to prevent scrolling.

## Files in this Directory

*   `index.js`: Entry point for the component, exports the `ConfirmationBox` class.
*   `confirmation-box.js`: Contains the main `ConfirmationBox` class logic.
*   `confirmation-box.styles.js`: Exports the component's CSS as a JavaScript string.
*   `constants.js`: Defines CSS class names and other constants.
*   `README.md`: This file.
