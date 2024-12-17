import { State } from "../src/state";
import { Transition } from "../src/transition";

describe("State and Transition", () => {
  let stateA: State;
  let stateB: State;
  let transition: Transition;

  beforeEach(() => {
    stateA = new State("StateA");
    stateB = new State("StateB");
    transition = new Transition(stateA, stateB, "eventA");
  });

  it("should create states with names", () => {
    expect(stateA.name).toBe("StateA");
    expect(stateB.name).toBe("StateB");
  });

  it("should create transition between states", () => {
    expect(transition.from).toBe(stateA);
    expect(transition.to).toBe(stateB);
    expect(transition.event).toBe("eventA");
  });
});
