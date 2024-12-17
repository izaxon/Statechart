# README.md for State Chart Library

# State Chart Library

The State Chart Library is a TypeScript library designed to manage state machines and transitions between states. It provides a simple and intuitive API for defining states, transitions, and managing the state machine's behavior.

## Installation

To install the State Chart Library, use npm:

```
npm install statechart-lib
```

## Usage

Here’s a quick example of how to use the State Chart Library:

```typescript
import { StateMachine, State, Transition } from 'statechart-lib';

// Define states
const idleState = new State('idle', () => console.log('Entering idle state'));
const activeState = new State('active', () => console.log('Entering active state'));

// Define transitions
const transitionToActive = new Transition(idleState, activeState, 'start');

// Create state machine
const stateMachine = new StateMachine();
stateMachine.addState(idleState);
stateMachine.addState(activeState);
stateMachine.addTransition(transitionToActive);

// Start in idle state
stateMachine.transitionTo('idle');

// Trigger transition
stateMachine.transitionTo('active');
```

## API

### Classes

- **State**: Represents a state in the state machine.
- **Transition**: Defines a transition between states.
- **StateMachine**: Manages states and transitions.

### Interfaces

- **StateConfig**: Defines the structure for state configurations.
- **TransitionConfig**: Defines the structure for transition configurations.

## Running Tests

To run the tests for the State Chart Library, use the following command:

```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.