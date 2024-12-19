import State from "./state";

export default class StateMachine extends State {
  constructor(states: State[] = []) {
    super();
    if (states.length === 0) {
      throw new Error("Statechart must have at least one state.");
    }

    this.current = states[0];
    this.states.push(...states);
  }

  public update() {
    this.run();
  }
}
