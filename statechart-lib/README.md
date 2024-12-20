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
import State from './state';
import Transition from './transition';
import StateMachine from './machine';

// Define states
const idleState = new State({
  entering: () => console.log('Entering idle state')
});
const activeState = new State({
  entering: () => console.log('Entering active state')
});

// Define transitions
const transitionToActive = new Transition(activeState, {
  condition: () => true,
  action: () => console.log('Transitioning to active state')
});

// Create state machine
const stateMachine = new StateMachine([idleState, activeState]);

// Add transition to idle state
idleState.addTransition(activeState, {
  condition: () => true,
  action: () => console.log('Transitioning to active state')
});

// Update state machine
stateMachine.update();
```

## API

### Classes

- **State**: Represents a state in the state machine.
  - **Properties**:
    - `entering`: A function to be called when entering the state.
    - `within`: A function to be called while within the state.
    - `exiting`: A function to be called when exiting the state.
    - `current`: The current state.
    - `states`: An array of sub-states.
    - `transitions`: An array of transitions.
  - **Methods**:
    - `addTransition(state: State, options: TransitionOptions)`: Adds a transition to the state.
    - `run()`: Executes the state machine logic.

- **Transition**: Defines a transition between states.
  - **Properties**:
    - `to`: The target state.
    - `condition`: A function that returns a boolean indicating whether the transition should occur.
    - `action`: A function to be called when the transition occurs.

- **StateMachine**: Manages the state machine.
  - **Properties**:
    - `states`: An array of states.
    - `current`: The current state.
  - **Methods**:
    - `update()`: Updates the state machine by running the current state's logic.

## Advanced Usage

### Nested States

You can define nested states by adding sub-states to a state:

```typescript
const subState = new State({
  entering: () => console.log('Entering subState')
});
idleState.states.push(subState);
```

### Conditional Transitions

Transitions can have conditions that must be met for the transition to occur:

```typescript
const conditionalTransition = new Transition(activeState, {
  condition: () => someCondition,
  action: () => console.log('Transitioning based on condition')
});
idleState.addTransition(activeState, {
  condition: () => someCondition,
  action: () => console.log('Transitioning based on condition')
});
```

### Actions on Transitions

You can define actions to be executed when a transition occurs:

```typescript
const actionTransition = new Transition(activeState, {
  condition: () => true,
  action: () => console.log('Action on transition')
});
idleState.addTransition(activeState, {
  condition: () => true,
  action: () => console.log('Action on transition')
});
```

## Running Tests

To run the tests for the State Chart Library, use the following command:

```
npm test
```

## Building the Library
1. Run `npm run test` to run the tests.
2. Update the version number in the `package.json` file.
3. Commit and push the changes to the repository.
4. Run `git tag -a v1.0.x -m "Version 1.0.x"` to tag the release.
5. Run `git push origin v1.0.x` to push the tag to the repository.

The package will be automatically published to npm using GitHub Actions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.