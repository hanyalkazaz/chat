# MessageToolsModal

A modular, extensible system for creating message tools in the conversation interface.

## Overview

The MessageToolsModal provides a flexible framework for creating tools that operate on conversation messages. It uses an action-based architecture that makes it easy to add new functionality without modifying existing code.

## Directory Structure

```
components/modals/MessageToolsModal/
├── MessageToolsModal.js     # Main modal component
├── index.js                 # Entry point and exports
├── components/              # UI components
│   ├── MessageSelectionList.js  # Message selection component
│   ├── MessagePreview.js        # Message preview component
│   ├── FormatSelector.js        # Format selection component
│   └── NotificationArea.js      # Notification display component
├── actions/                 # Action definitions
│   ├── BaseAction.js        # Base action interface
│   ├── ActionRegistry.js    # Action registration system
│   └── CopyAction.js        # Copy to clipboard action
├── state/                   # State management
│   └── StateProvider.js     # Centralized state management
├── layouts/                 # UI layouts
│   ├── ModalLayout.js       # Overall modal layout
│   ├── MenuBarLayout.js     # Action button menu bar
│   └── TwoPanelLayout.js    # Two-panel content layout
└── utils/                   # Utilities
    ├── MessageFormatter.js  # Message formatting utility
    └── NotificationManager.js # Notification management
```

## Core Concepts

### Actions

Actions are the core building blocks of the MessageToolsModal. Each action represents a specific operation that can be performed on messages, such as copying to clipboard, exporting, or summarizing.

All actions implement the `BaseAction` interface, which defines methods for:
- Getting the action's ID
- Getting the display label
- Getting the icon
- Executing the action

### State Management

The `StateProvider` manages all state for the modal, including:
- Selected messages
- Selected format
- Loading state
- Notifications

Actions receive the state provider when they're created and can access or modify state through it.

### Layouts

Layouts handle the UI structure of the modal, separating it from the business logic. The main layouts are:
- `ModalLayout`: Overall modal structure
- `TwoPanelLayout`: Two-panel content layout
- `MenuBarLayout`: Action button menu bar

## Creating a New Action

To create a new action, follow these steps:

1. Create a new file in the `actions/` directory (e.g., `SummarizeAction.js`)
2. Implement the `BaseAction` interface
3. Register the action in `MessageToolsModal.js`

### Example: Creating a Summarize Action

```javascript
// actions/SummarizeAction.js
const { svg } = require('../../../../Dependencies');
const BaseAction = require('./BaseAction');

function SummarizeAction(state) {
  if (!(this instanceof SummarizeAction)) {
    return new SummarizeAction(state);
  }
  
  BaseAction.call(this, state);
}

// Inherit from BaseAction
SummarizeAction.prototype = Object.create(BaseAction.prototype);
SummarizeAction.prototype.constructor = SummarizeAction;

// Implement required methods
SummarizeAction.prototype.getId = function() {
  return 'summarize';
};

SummarizeAction.prototype.getLabel = function() {
  return 'Summarize';
};

SummarizeAction.prototype.getIcon = function() {
  return svg.summarize();
};

SummarizeAction.prototype.execute = function() {
  const messages = this.state.getSelectedMessages();
  
  // Implementation of summarize functionality
  // ...
  
  this.state.showNotification('success', 'Summary copied to clipboard!');
};

SummarizeAction.create = function(state) {
  return new SummarizeAction(state);
};

module.exports = SummarizeAction;
```

### Registering the Action

```javascript
// In MessageToolsModal.js, update the initializeActions function
function initializeActions(state) {
  actionRegistry = new ActionRegistry();
  
  // Register actions
  actionRegistry.register(CopyAction.create(state));
  actionRegistry.register(SummarizeAction.create(state)); // Add your new action
  
  return actionRegistry;
}
```

## Using the Modal

To use the MessageToolsModal:

```javascript
const { MessageToolsModal } = require('./components/modals/MessageToolsModal');

// Create modal container
const modalContainer = document.getElementById('gs-modal-container') || 
  document.body.appendChild(document.createElement('div'));
modalContainer.id = 'gs-modal-container';

// Create and render the modal
const messageToolsModal = new MessageToolsModal({
  messages: messages, // Array of message objects
  onClose: () => {
    messageToolsModal.cleanup();
  }
});

messageToolsModal.render(modalContainer);
```

## Message Object Format

Messages should have the following format:

```javascript
{
  id: "unique-id",
  role: "user" | "assistant" | "system",
  content: "Message content",
  position: 0, // Optional position in conversation
  created_at: "2025-04-04T00:00:00.000Z" // Optional timestamp
}
```

## State Access in Actions

Actions can access and modify state through the state provider:

```javascript
// Get selected messages
const messages = this.state.getSelectedMessages();

// Get selected format
const format = this.state.getSelectedFormat();

// Show a notification
this.state.showNotification('success', 'Operation completed!');

// Set loading state
this.state.setLoading(true);
```

## Best Practices

1. **Keep Actions Focused**: Each action should do one thing well
2. **Use the State Provider**: Don't manage state directly in actions
3. **Handle Errors**: Always handle errors and show appropriate notifications
4. **Clean Up Resources**: Implement cleanup methods for all components
5. **Follow the Interface**: Implement all required methods in the BaseAction interface

## Extending the System

The MessageToolsModal can be extended in several ways:

1. **New Actions**: Add new operations on messages
2. **Enhanced UI Components**: Improve existing components or add new ones
3. **Additional Formats**: Add new message formatting options
4. **Custom Layouts**: Create specialized layouts for specific tools

By following the action-based architecture, you can extend the system without breaking existing functionality.

Authored by LLM Claude 3.7 Sonnet at Fri, 04 Apr 2025 02:35:10 GMT
