export class StateMachine {
  private states: Map<string, any> = new Map();
  private transitions: Array<{ from: string; to: string; event: string }> = [];

  addState(state: any) {
    this.states.set(state.name, state);
  }

  addTransition(transition: { from: string; to: string; event: string }) {
    this.transitions.push(transition);
  }

  transitionTo(stateName: string) {
    const currentState = this.getCurrentState();
    const transition = this.transitions.find((t) => t.from === currentState.name && t.to === stateName);

    if (transition) {
      currentState.exit();
      this.states.get(stateName).enter();
    }
  }

  private getCurrentState() {
    // Logic to get the current state
    // This is a placeholder; implement your own logic to track the current state
    return Array.from(this.states.values())[0]; // Example: return the first state
  }
}
