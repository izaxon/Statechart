import State from "./state";

export default class StateMachine extends State {
  constructor(states: State[] = []) {
    super();
    this.states.push(...states);
  }

  public addState(state: State | State[]) {
    this.states.push(...(Array.isArray(state) ? state : [state]));
    return this;
  }

  public update() {
    if (!this.current) {
      if (this.states.length === 0) {
        throw new Error("Statechart must have at least one state.");
      }
      this.current = this.states[0];
    }

    this.run();
  }
}
